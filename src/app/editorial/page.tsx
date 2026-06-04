import type { Metadata } from "next";
import Link from "next/link";
import {
  Award,
  ShieldCheck,
  RefreshCw,
  AlertCircle,
  Users,
  BookOpen,
  Megaphone,
  Mail,
} from "lucide-react";

export const metadata: Metadata = {
  title: "편집 원칙 — 이사꿀팁",
  description:
    "이사꿀팁의 콘텐츠가 어떻게 만들어지고 검증되는지, 광고와 콘텐츠를 어떻게 분리하는지, 정정 요청은 어떻게 처리되는지 투명하게 공개합니다.",
};

export default function EditorialPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          <Award className="h-4 w-4" />
          편집 원칙 · 콘텐츠 가이드라인
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          신뢰할 수 있는 정보를 만드는 약속
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          이사꿀팁의 모든 콘텐츠는 다음 원칙에 따라 작성·검증·관리됩니다.
          광고와 콘텐츠를 명확히 분리하고, 잘못된 정보는 24시간 이내
          정정합니다.
        </p>
      </div>

      {/* 6대 원칙 */}
      <div className="mb-12 grid gap-3 sm:grid-cols-2">
        <Principle
          icon={<ShieldCheck className="h-5 w-5" />}
          title="중립성"
          body="특정 업체로부터 후원·광고비를 받지 않으며, 콘텐츠에 영향을 주지 않습니다."
        />
        <Principle
          icon={<BookOpen className="h-5 w-5" />}
          title="원본성"
          body="모든 글은 직접 작성되며, 외부 자료 인용 시 출처를 명시합니다."
        />
        <Principle
          icon={<Users className="h-5 w-5" />}
          title="사용자 중심"
          body="이사 준비 가구의 실제 고민을 인터뷰해 글 주제를 결정합니다."
        />
        <Principle
          icon={<RefreshCw className="h-5 w-5" />}
          title="정기 갱신"
          body="시세·정책 변경 시 즉시 반영, 분기별 전체 콘텐츠를 재검토합니다."
        />
        <Principle
          icon={<AlertCircle className="h-5 w-5" />}
          title="신속 정정"
          body="잘못된 정보 제보 시 24시간 이내 검토·수정 후 업데이트 이력을 표시합니다."
        />
        <Principle
          icon={<Megaphone className="h-5 w-5" />}
          title="투명한 광고"
          body="구글 애드센스 등 디스플레이 광고는 콘텐츠와 시각적으로 명확히 구분합니다."
        />
      </div>

      {/* 콘텐츠 제작 4단계 */}
      <article className="mb-10 rounded-2xl border border-border/60 bg-card p-8 prose-custom">
        <h2 className="mb-4 text-xl font-bold text-foreground">
          콘텐츠 제작 4단계 프로세스
        </h2>

        <h3 className="mb-2 mt-4 text-base font-bold text-foreground">
          1단계: 주제 선정 — 사용자 인터뷰
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          매주 이사·입주를 진행한 5~10가구를 인터뷰해 가장 막막했던 부분,
          후회한 결정, 알았더라면 좋았을 정보를 수집합니다. 이렇게 도출된
          실제 고민이 다음 분기 콘텐츠 주제 풀(pool)이 됩니다.
        </p>

        <h3 className="mb-2 mt-6 text-base font-bold text-foreground">
          2단계: 자료 조사 — 공공기관 1차 자료 우선
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          비용·정책·법령 정보는 국토교통부, 한국소비자원, 정부24, 환경부,
          공정거래위원회 등 공공기관 자료를 1차 출처로 사용합니다. 모든
          블로그 글 하단의 "참고 자료" 섹션에 출처를 명시합니다.
        </p>

        <h3 className="mb-2 mt-6 text-base font-bold text-foreground">
          3단계: 작성 — 평수·시기·지역 구체 수치 포함
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          모호한 표현("저렴함", "비쌈") 대신 구체적인 가격대(80만~150만원),
          평수(30평 기준), 시점(2026년 5월)을 명시합니다. 표·비교 차트·FAQ를
          포함해 검색 사용자가 빠르게 답을 찾을 수 있도록 구성합니다.
        </p>

        <h3 className="mb-2 mt-6 text-base font-bold text-foreground">
          4단계: 검수 — 분야별 전문가 리뷰
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          작성된 글은 발행 전 분야별 실무자에게 검수를 받습니다.
        </p>
        <ul className="ml-5 mt-2 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
          <li>이사 비용·물류 → 운수사업 종사자</li>
          <li>인테리어·시공 → 인테리어 업체 운영자</li>
          <li>법률·행정 → 공인중개사·세무사 자문</li>
          <li>의료·건강 → 환경 건강 관련 문헌 교차 확인</li>
        </ul>
      </article>

      {/* 광고와 콘텐츠 분리 */}
      <article className="mb-10 rounded-2xl border border-border/60 bg-card p-8 prose-custom">
        <h2 className="mb-4 text-xl font-bold text-foreground">
          광고와 콘텐츠의 분리
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          이사꿀팁은 사이트 운영비를 Google AdSense 디스플레이 광고와 일부
          업체 입점 안내로 충당합니다. 다음 원칙을 지킵니다.
        </p>
        <ul className="ml-5 mt-3 list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">시각적 구분</strong>: 모든 광고
            영역은 콘텐츠 박스 밖에 배치하고, 광고임을 식별할 수 있는
            라벨(예: &quot;광고&quot;, &quot;Ad&quot;)을 표시합니다.
          </li>
          <li>
            <strong className="text-foreground">콘텐츠 영향 차단</strong>: 광고주가
            콘텐츠 작성·편집에 영향을 미치지 않습니다. 자체 작성한 글에
            특정 업체를 추천하더라도 후원 관계가 아닌 사용자 후기·평점 기반입니다.
          </li>
          <li>
            <strong className="text-foreground">광고 비활성 옵션</strong>:
            맞춤형 광고를 원하지 않으시면{" "}
            <a
              href="https://adssettings.google.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Google 광고 설정
            </a>
            에서 비활성화할 수 있습니다.
          </li>
          <li>
            <strong className="text-foreground">제휴 표시</strong>: 향후
            제휴 마케팅을 도입할 경우 본문 상단에 명확하게 표시합니다.
          </li>
        </ul>
      </article>

      {/* 정정 정책 */}
      <article className="mb-10 rounded-2xl border border-amber-500/30 bg-amber-50/40 p-8 prose-custom">
        <h2 className="mb-4 text-xl font-bold text-foreground">
          정정·반론 정책
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          정확한 정보 제공이 이사꿀팁의 가장 중요한 책임입니다. 잘못된 정보를
          발견하셨다면 다음 절차로 정정 요청이 가능합니다.
        </p>
        <ol className="ml-5 mt-3 list-decimal space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">제보</strong>:{" "}
            <a href="mailto:kplayer02@naver.com" className="text-primary hover:underline">
              kplayer02@naver.com
            </a>
            으로 해당 페이지 URL과 오류 내용을 보내주세요.
          </li>
          <li>
            <strong className="text-foreground">접수 확인</strong>: 영업일 기준
            24시간 이내 접수 확인 메일을 보내드립니다.
          </li>
          <li>
            <strong className="text-foreground">검토</strong>: 1차 출처(공공기관
            자료, 업체 견적 데이터)를 다시 확인합니다.
          </li>
          <li>
            <strong className="text-foreground">수정 또는 답변</strong>: 정정이
            필요하면 해당 글을 수정하고 페이지 상단에 변경 이력을 표시합니다.
            정정이 필요하지 않다고 판단되면 그 근거를 답변드립니다.
          </li>
          <li>
            <strong className="text-foreground">반론 게재</strong>: 의견 차이가
            있을 경우, 합리적 범위에서 본문에 반론 코멘트를 게재할 수 있습니다.
          </li>
        </ol>
      </article>

      {/* CTA */}
      <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
        <p className="text-sm font-semibold text-foreground">
          오류를 발견하셨거나 의견이 있으신가요?
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          24시간 이내 검토·답변드립니다
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="mailto:kplayer02@naver.com"
            className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Mail className="h-4 w-4" />
            이메일 보내기
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-semibold text-foreground hover:bg-accent"
          >
            전체 문의 방법 보기
          </Link>
        </div>
      </div>
    </div>
  );
}

function Principle({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-card p-5">
      <div className="mb-3 inline-flex items-center justify-center rounded-xl bg-primary/10 p-2 text-primary">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-foreground">{title}</h3>
      <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  );
}
