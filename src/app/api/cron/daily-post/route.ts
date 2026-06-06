/**
 * Vercel Cron — 매일 00:00 UTC (= 09:00 KST)에 호출되어
 * 이사꿀팁 블로그에 새 글 1편을 자동 생성·커밋한다.
 *
 * PC가 꺼져 있어도 Vercel 서버에서 실행되므로 항상 작동.
 *
 * 필요 환경변수 (Vercel Project Settings → Environment Variables):
 * - ANTHROPIC_API_KEY: Anthropic API 키
 * - GITHUB_TOKEN: GitHub PAT (repo scope) — blog-posts.ts 업데이트용
 * - CRON_SECRET: Vercel이 자동 생성 (인증용)
 * - GITHUB_REPO_OWNER: 리포지터리 소유자 (예: lg58222748-arch)
 * - GITHUB_REPO_NAME: 리포지터리 이름 (예: isa-kkultip)
 * - ANTHROPIC_MODEL: (선택, 기본 claude-sonnet-4-5)
 */

import Anthropic from "@anthropic-ai/sdk";
import { NextRequest, NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const maxDuration = 60; // Vercel Pro: up to 300s

const MIN_CONTENT_CHARS = 3500;
const MAX_RETRIES = 3;
const REPO_OWNER = process.env.GITHUB_REPO_OWNER || "lg58222748-arch";
const REPO_NAME = process.env.GITHUB_REPO_NAME || "isa-kkultip";
const FILE_PATH = "src/data/blog-posts.ts";
const BRANCH = "master";

function getTodayKST() {
  const now = new Date();
  const kst = new Date(now.getTime() + 9 * 60 * 60 * 1000);
  return kst.toISOString().slice(0, 10);
}

function extractExisting(src: string) {
  const slugs = [...src.matchAll(/^    slug: "([^"]+)",/gm)].map((m) => m[1]);
  const titles = [...src.matchAll(/^    title: "([^"]+)",/gm)].map((m) => m[1]);
  const dates = [...src.matchAll(/^    date: "(\d{4}-\d{2}-\d{2})",/gm)].map((m) => m[1]);
  return { slugs, titles, dates };
}

interface NewPost {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  readTime: string;
  content: string;
}

function buildSystemPrompt(existing: ReturnType<typeof extractExisting>) {
  return `당신은 한국 이사·인테리어 정보 사이트 "이사꿀팁(isamove.co.kr)"의 콘텐츠 작성자입니다.

## 사이트 개요
- 도메인: https://isamove.co.kr
- 주제: 새아파트 입주, 구축 리모델링, 이사 비용, 시공 가이드, 행정 절차, 평수별 견적
- 카테고리: 비용 / 가이드 / 비교 / 꿀팁 / 건강 / 행정
- 톤: 친근하지만 정보 밀도 높은 실용 가이드

## 작성 요구사항
1. **본문 최소 3,500자 이상** (AdSense 저가치 콘텐츠 회피)
2. **반드시 영문 ASCII slug** (한글 slug는 라우팅 404 발생)
3. **content 안에 트리플 백틱 \\\`\\\`\\\` 사용 금지** (템플릿 리터럴 깨짐)
4. **content 안에 일반 백틱(\\\`) 사용 금지** (마찬가지)
5. **구조**: 도입부 → "## 이 글의 핵심 요약" + 4불릿 → 본문 ## 헤딩 3~6개 → 비용/비교 표 1+ → "## 자주 묻는 질문" Q&A 4~5개 → "## 마치며"
6. 실제 가격대·시간·수치 구체 표기 (예: "30평 기준 80만~150만원")
7. **굵게** 강조 활용

## 이미 다룬 ${existing.slugs.length}편 (중복 금지)
slugs: ${existing.slugs.join(", ")}

titles 일부:
${existing.titles.slice(0, 40).map((t) => "- " + t).join("\n")}

## 새 주제 선정
- 시즌 이슈 (오늘 기준 다가오는 이사철·연휴·기상·정책)
- 세부 평형 (5평·8평·12평·25평·40평·50평·60평)
- 지역별 (서울 구별, 경기 시별, 광역시별)
- 특수 상황 (반려동물 종별·노부모·신혼·이혼·해외)
- 행정·법률·세금
- 시공 트렌드·정부 지원

## 출력 형식
오직 다음 JSON 객체 하나만 출력. 마크다운 펜스나 설명 없이.

{
  "slug": "kebab-english-slug",
  "title": "한국어 제목 - 부제목",
  "description": "150자 내외 한국어 설명",
  "category": "비용|가이드|비교|꿀팁|건강|행정 중 하나",
  "tags": ["태그1","태그2","태그3","태그4","태그5"],
  "readTime": "8분",
  "content": "한국어 본문 마크다운 (3,500자+, 트리플/일반 백틱 금지)"
}`;
}

async function callClaude(
  client: Anthropic,
  systemPrompt: string,
  today: string,
  model: string,
): Promise<NewPost> {
  const userMsg = `오늘은 ${today}. 위 가이드대로 새 글 1편을 JSON으로만 출력. 백틱(\`) 절대 금지.`;

  const response = await client.messages.create({
    model,
    max_tokens: 8000,
    system: [
      {
        type: "text",
        text: systemPrompt,
        cache_control: { type: "ephemeral" },
      },
    ],
    messages: [{ role: "user", content: userMsg }],
  });

  const text = response.content
    .filter((b) => b.type === "text")
    .map((b) => (b as { text: string }).text)
    .join("");

  const cleaned = text
    .trim()
    .replace(/^```(?:json)?\s*/i, "")
    .replace(/\s*```$/i, "");
  return JSON.parse(cleaned);
}

function validate(
  post: NewPost,
  existing: ReturnType<typeof extractExisting>,
): string[] {
  const errors: string[] = [];
  if (!post.slug || !/^[a-z0-9-]+$/.test(post.slug)) {
    errors.push(`slug ASCII kebab-case required, got: ${post.slug}`);
  }
  if (existing.slugs.includes(post.slug)) {
    errors.push(`slug "${post.slug}" already exists`);
  }
  if (!post.title || post.title.length < 10) errors.push("title too short");
  if (!post.description || post.description.length < 30)
    errors.push("description too short");
  const validCats = ["비용", "가이드", "비교", "꿀팁", "건강", "행정"];
  if (!validCats.includes(post.category))
    errors.push(`invalid category: ${post.category}`);
  if (!Array.isArray(post.tags) || post.tags.length < 3)
    errors.push("need 3+ tags");
  if (!post.readTime || !/\d+분/.test(post.readTime))
    errors.push("readTime must be like '8분'");
  if (!post.content || post.content.length < MIN_CONTENT_CHARS) {
    errors.push(
      `content too short: ${post.content?.length ?? 0} (need ${MIN_CONTENT_CHARS}+)`,
    );
  }
  if (post.content?.includes("`")) errors.push("content cannot contain backticks");
  return errors;
}

function buildBlock(post: NewPost, today: string): string {
  const tagsList = post.tags
    .map((t) => `"${t.replace(/"/g, '\\"')}"`)
    .join(", ");
  const escapedContent = post.content.replace(/\$\{/g, "\\${");
  return `  {
    slug: "${post.slug}",
    title: "${post.title.replace(/"/g, '\\"')}",
    description: "${post.description.replace(/"/g, '\\"')}",
    category: "${post.category}",
    tags: [${tagsList}],
    date: "${today}",
    readTime: "${post.readTime}",
    content: \`${escapedContent}\`,
  },
`;
}

async function ghGetFile(token: string) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}?ref=${BRANCH}`;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
    },
  });
  if (!res.ok) throw new Error(`GitHub GET ${res.status}: ${await res.text()}`);
  const data = (await res.json()) as { content: string; sha: string };
  return {
    content: Buffer.from(data.content, "base64").toString("utf8"),
    sha: data.sha,
  };
}

async function ghPutFile(
  token: string,
  newContent: string,
  sha: string,
  commitMessage: string,
) {
  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/contents/${FILE_PATH}`;
  const body = {
    message: commitMessage,
    content: Buffer.from(newContent, "utf8").toString("base64"),
    sha,
    branch: BRANCH,
    committer: {
      name: "이사꿀팁 자동봇",
      email: "noreply@isamove.co.kr",
    },
  };
  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/vnd.github+json",
      "X-GitHub-Api-Version": "2022-11-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`GitHub PUT ${res.status}: ${await res.text()}`);
  return res.json();
}

export async function GET(req: NextRequest) {
  // Vercel Cron 인증 (CRON_SECRET 헤더 검증)
  const authHeader = req.headers.get("authorization");
  const cronSecret = process.env.CRON_SECRET;
  if (cronSecret && authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const anthropicKey = process.env.ANTHROPIC_API_KEY;
  const githubToken = process.env.GITHUB_TOKEN;
  if (!anthropicKey || !githubToken) {
    return NextResponse.json(
      { error: "Missing ANTHROPIC_API_KEY or GITHUB_TOKEN" },
      { status: 500 },
    );
  }

  const model = process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5";
  const today = getTodayKST();

  try {
    // 1. 현재 blog-posts.ts 가져오기
    const { content: currentSrc, sha } = await ghGetFile(githubToken);
    const existing = extractExisting(currentSrc);

    // 2. 오늘 글 이미 있으면 스킵
    if (existing.dates.includes(today)) {
      return NextResponse.json({
        status: "skipped",
        reason: `post dated ${today} already exists`,
        today,
      });
    }

    // 3. Claude로 새 글 생성 (최대 3회 재시도)
    const client = new Anthropic({ apiKey: anthropicKey });
    const systemPrompt = buildSystemPrompt(existing);
    let post: NewPost | null = null;
    let lastErrors: string[] = [];

    for (let attempt = 1; attempt <= MAX_RETRIES; attempt++) {
      try {
        const candidate = await callClaude(client, systemPrompt, today, model);
        const errs = validate(candidate, existing);
        if (errs.length === 0) {
          post = candidate;
          break;
        }
        lastErrors = errs;
      } catch (e: unknown) {
        const msg = e instanceof Error ? e.message : String(e);
        lastErrors = [msg];
      }
    }

    if (!post) {
      return NextResponse.json(
        { error: "All Claude attempts failed", details: lastErrors },
        { status: 500 },
      );
    }

    // 4. blog-posts.ts 업데이트
    const block = buildBlock(post, today);
    const marker = "export const blogPosts: BlogPost[] = [\n";
    const insertAt = currentSrc.indexOf(marker) + marker.length;
    const newSrc =
      currentSrc.slice(0, insertAt) + block + currentSrc.slice(insertAt);

    const commitMsg = `자동: 오늘자(${today}) 블로그 글 추가 - ${post.title}\n\nslug: ${post.slug}\nVercel Cron으로 자동 생성됨.`;

    await ghPutFile(githubToken, newSrc, sha, commitMsg);

    return NextResponse.json({
      status: "ok",
      today,
      slug: post.slug,
      title: post.title,
      chars: post.content.length,
    });
  } catch (e: unknown) {
    const msg = e instanceof Error ? e.message : String(e);
    return NextResponse.json(
      { error: "Failed", details: msg },
      { status: 500 },
    );
  }
}
