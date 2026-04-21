import { Fragment } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Clock, Tag } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { blogPosts } from "@/data/blog-posts";
import { getBlogImage } from "@/data/blog-images";
import { InFeedAd, AdSlot } from "@/components/ads/AdSlot";

export const metadata: Metadata = {
  title: "이사 꿀팁 블로그 - 이사 준비에 필요한 모든 정보",
  description:
    "이사 순서, 입주청소 비용, 줄눈시공 비교, 포장이사 절약법 등 이사 준비에 필요한 모든 정보를 블로그에서 확인하세요.",
  openGraph: {
    title: "이사 꿀팁 블로그",
    description: "이사 준비에 필요한 모든 정보를 한곳에서",
  },
};

const categoryColors: Record<string, string> = {
  가이드: "bg-primary/10 text-primary",
  비용: "bg-amber-100 text-amber-700",
  비교: "bg-blue-100 text-blue-700",
  꿀팁: "bg-emerald-100 text-emerald-700",
  건강: "bg-rose-100 text-rose-700",
  행정: "bg-purple-100 text-purple-700",
};

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          이사 꿀팁 블로그
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          이사 준비에 필요한 모든 정보를 한곳에서 확인하세요
        </p>
      </div>

      {/* Category Filter */}
      <div className="mb-6 flex flex-wrap gap-2">
        {["전체", "가이드", "비용", "비교", "꿀팁", "건강", "행정"].map(
          (cat) => (
            <span
              key={cat}
              className="cursor-pointer rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground transition-colors hover:bg-primary/10 hover:text-primary"
            >
              {cat}
            </span>
          )
        )}
      </div>

      {/* Blog Post List */}
      <div className="flex flex-col gap-4">
        {blogPosts.map((post, index) => (
          <Fragment key={post.slug}>
            {index === 3 && <InFeedAd slot="blog-list-infeed-1" />}
            {index === 7 && <InFeedAd slot="blog-list-infeed-2" />}
            <Link
              href={`/blog/${post.slug}`}
              className="group overflow-hidden rounded-xl border border-border/60 bg-card transition-all hover:border-primary/30 hover:shadow-sm"
            >
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-muted">
                <Image
                  src={getBlogImage(post.slug, post.category)}
                  alt={post.title}
                  fill
                  sizes="(max-width: 640px) 100vw, 768px"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2">
                  <span
                    className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${
                      categoryColors[post.category] ?? "bg-muted text-muted-foreground"
                    }`}
                  >
                    {post.category}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Clock className="h-3 w-3" />
                    {post.readTime} 읽기
                  </span>
                  <span className="text-xs text-muted-foreground">
                    {post.date}
                  </span>
                </div>
                <h2 className="mt-2 text-base font-bold text-foreground group-hover:text-primary sm:text-lg">
                  {post.title}
                </h2>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                  {post.description}
                </p>
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {post.tags.slice(0, 4).map((tag) => (
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
              </div>
            </Link>
          </Fragment>
        ))}
      </div>

      {/* Ad: 리스트 하단 멀티플렉스 */}
      <div className="mt-6">
        <AdSlot slot="blog-list-bottom" format="multiplex" />
      </div>
    </div>
  );
}
