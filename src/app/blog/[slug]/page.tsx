import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog-posts";
import { getBlogImage } from "@/data/blog-images";
import { AdSlot } from "@/components/ads/AdSlot";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

function findPostBySlug(rawSlug: string) {
  let decoded = rawSlug;
  try {
    decoded = decodeURIComponent(rawSlug);
  } catch {
    decoded = rawSlug;
  }
  return blogPosts.find((p) => p.slug === decoded || p.slug === rawSlug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = findPostBySlug(slug);
  if (!post) notFound();

  // Related posts
  const related = blogPosts
    .filter((p) => p.slug !== post.slug)
    .filter((p) => p.tags.some((t) => post.tags.includes(t)))
    .slice(0, 3);

  return (
    <>
      {/* JSON-LD for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            author: {
              "@type": "Organization",
              name: "이사꿀팁",
            },
            publisher: {
              "@type": "Organization",
              name: "이사꿀팁",
            },
          }),
        }}
      />

      <article className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-12">
        {/* Breadcrumb */}
        <Link
          href="/blog"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          블로그 목록
        </Link>

        {/* Article Header */}
        <header className="mb-8">
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Clock className="h-3 w-3" />
              {post.readTime} 읽기
            </span>
          </div>
          <h1 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight text-foreground sm:text-3xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {post.description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex flex-wrap gap-1.5">
              {post.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="outline"
                  className="text-[10px] font-normal"
                >
                  <Tag className="mr-0.5 h-2.5 w-2.5" />
                  {tag}
                </Badge>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">{post.date}</span>
          </div>
        </header>

        {/* Hero Image */}
        <div className="relative mb-8 aspect-[16/9] w-full overflow-hidden rounded-xl bg-muted">
          <Image
            src={getBlogImage(post.slug, post.category)}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            quality={60}
            priority
            fetchPriority="high"
            className="object-cover"
          />
        </div>

        {/* Ad: 헤더 아래 — 본문 읽기 전 자연스러운 위치 */}
        <div className="mb-6">
          <AdSlot slot="blog-above-content" format="horizontal" />
        </div>

        {/* Article Content */}
        <div className="prose-custom">
          {post.content.split("\n").map((line, i) => {
            if (line.startsWith("![")) {
              const match = line.match(/^!\[([^\]]*)\]\(([^)]+)\)/);
              if (match) {
                const [, alt, src] = match;
                return (
                  <figure
                    key={i}
                    className="my-6 overflow-hidden rounded-xl bg-muted"
                  >
                    <div className="relative aspect-[16/9] w-full">
                      <Image
                        src={src}
                        alt={alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 768px"
                        quality={60}
                        loading="lazy"
                        className="object-cover"
                      />
                    </div>
                    {alt ? (
                      <figcaption className="px-3 py-2 text-center text-xs text-muted-foreground">
                        {alt}
                      </figcaption>
                    ) : null}
                  </figure>
                );
              }
            }
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={i}
                  className="mb-3 mt-8 text-xl font-bold text-foreground"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3
                  key={i}
                  className="mb-2 mt-6 text-base font-bold text-foreground"
                >
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("| ")) {
              return (
                <div
                  key={i}
                  className="my-1 overflow-hidden rounded border border-border/40 text-sm"
                >
                  <table className="w-full">
                    <tbody>
                      <tr>
                        {line
                          .split("|")
                          .filter(Boolean)
                          .map((cell, j) => (
                            <td
                              key={j}
                              className="border-r border-border/30 px-3 py-2 last:border-0"
                            >
                              {cell.trim()}
                            </td>
                          ))}
                      </tr>
                    </tbody>
                  </table>
                </div>
              );
            }
            if (line.startsWith("- ") || line.startsWith("* ")) {
              return (
                <li
                  key={i}
                  className="ml-4 list-disc text-sm leading-relaxed text-muted-foreground"
                >
                  {renderBold(line.replace(/^[-*] /, ""))}
                </li>
              );
            }
            if (/^\d+\. /.test(line)) {
              return (
                <li
                  key={i}
                  className="ml-4 list-decimal text-sm leading-relaxed text-muted-foreground"
                >
                  {renderBold(line.replace(/^\d+\. /, ""))}
                </li>
              );
            }
            if (line.startsWith("- [ ]")) {
              return (
                <div key={i} className="flex items-center gap-2 py-0.5 text-sm text-muted-foreground">
                  <span className="h-4 w-4 rounded border border-border" />
                  {line.replace("- [ ] ", "")}
                </div>
              );
            }
            if (line.trim() === "") {
              return <div key={i} className="h-2" />;
            }
            if (line.startsWith("|---")) return null;
            return (
              <p
                key={i}
                className="text-sm leading-relaxed text-muted-foreground"
              >
                {renderBold(line)}
              </p>
            );
          })}
        </div>

        {/* Ad: 블로그 글 하단 — 본문 읽고 나서 자연스럽게 노출 */}
        <div className="mt-8">
          <AdSlot slot="blog-post-bottom" format="horizontal" />
        </div>

        {/* CTA */}
        <div className="mt-10 rounded-xl border border-primary/20 bg-primary/5 p-6 text-center">
          <p className="text-sm font-semibold text-foreground">
            이사 준비가 막막하신가요?
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            단계별 가이드를 따라가며 쉽게 준비하세요
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Link
              href="/new-apartment"
              className="rounded-lg bg-primary px-5 py-2 text-xs font-semibold text-primary-foreground"
            >
              새아파트 가이드
            </Link>
            <Link
              href="/old-apartment"
              className="rounded-lg border border-border bg-card px-5 py-2 text-xs font-semibold text-foreground"
            >
              구축아파트 가이드
            </Link>
          </div>
        </div>

        {/* Ad: CTA 아래 멀티플렉스 — 관련 콘텐츠와 자연스러운 위치 */}
        <div className="mt-8">
          <AdSlot slot="blog-below-cta" format="multiplex" />
        </div>

        {/* Related Posts */}
        {related.length > 0 && (
          <div className="mt-10">
            <h2 className="mb-4 text-base font-bold text-foreground">
              관련 글
            </h2>
            <div className="flex flex-col gap-3">
              {related.map((rp) => (
                <Link
                  key={rp.slug}
                  href={`/blog/${rp.slug}`}
                  className="rounded-lg border border-border/60 bg-card p-4 transition-all hover:border-primary/30"
                >
                  <span className="text-[10px] font-semibold text-primary">
                    {rp.category}
                  </span>
                  <h3 className="mt-0.5 text-sm font-bold text-foreground">
                    {rp.title}
                  </h3>
                  <p className="mt-1 text-xs text-muted-foreground line-clamp-1">
                    {rp.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Ad: 페이지 최하단 배너 */}
        <div className="mt-8">
          <AdSlot slot="blog-page-bottom" format="leaderboard" />
        </div>
      </article>
    </>
  );
}

function renderBold(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-foreground">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}
