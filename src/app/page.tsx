import Link from "next/link";
import dynamic from "next/dynamic";
import { ArrowRight, Star, Shield, CheckCircle2, Users, Clock, TrendingUp, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { categories } from "@/data/categories";
import { providers } from "@/data/providers";
import { momCafes } from "@/data/mom-cafes";
import { AdSlot, AnchorAd } from "@/components/ads/AdSlot";

// MapBanner pulls in the Naver Maps SDK (~150KB+) and isn't needed for LCP
// since it sits below the hero. Dynamic import keeps the critical JS lean.
const MapBanner = dynamic(
  () => import("@/components/map/MapBanner").then((m) => ({ default: m.MapBanner })),
  {
    ssr: true,
    loading: () => (
      <div className="h-[320px] w-full animate-pulse rounded-xl bg-muted/40" />
    ),
  },
);

export default function Home() {
  const topProviders = providers.filter((p) => p.verified).slice(0, 6);
  const totalReviews = providers.reduce((sum, p) => sum + p.reviewCount, 0);
  const topCafes = momCafes.slice(0, 6);

  return (
    <>
      {/* ─── 1단계: 인지 (Awareness) ─── */}
      {/* 이사 준비의 막막함을 공감하고, 해결책이 있다는 걸 알린다 */}
      <section className="border-b border-border/40 bg-gradient-to-b from-naver-light/30 to-background px-4 pb-10 pt-14 sm:px-6 sm:pb-14 sm:pt-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-sm font-medium text-primary">
            이사 준비, 뭐부터 해야 할지 막막하셨죠?
          </p>
          <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-4xl">
            순서대로 따라만 하세요
          </h1>
          <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
            사전점검부터 줄눈, 청소, 이사까지
            <br className="sm:hidden" />
            <strong className="text-foreground"> 검증된 업체</strong>와 함께
            단계별로 안내해드립니다.
          </p>

          {/* 신뢰 지표 */}
          <div className="mx-auto mt-6 flex max-w-md justify-center gap-6 text-xs text-muted-foreground sm:text-sm">
            <span className="inline-flex items-center gap-1">
              <Users className="h-4 w-4 text-primary" />
              등록 업체 <strong className="text-foreground">{providers.length}곳</strong>
            </span>
            <span className="inline-flex items-center gap-1">
              <Star className="h-4 w-4 text-primary" />
              누적 후기 <strong className="text-foreground">{totalReviews.toLocaleString()}건</strong>
            </span>
            <span className="inline-flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4 text-primary" />
              평균 평점 <strong className="text-foreground">4.8</strong>
            </span>
          </div>

          {/* 경로 선택 CTA */}
          <div className="mx-auto mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <Link
              href="/new-apartment"
              className="flex flex-1 items-center gap-3 rounded-xl border-2 border-primary/20 bg-white px-5 py-4 text-left transition-all hover:border-primary/50 hover:shadow-md"
            >
              <span className="text-2xl">🏗️</span>
              <div className="flex-1">
                <div className="text-base font-bold text-foreground">새아파트 입주</div>
                <div className="text-xs text-muted-foreground">8단계 완벽 가이드</div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
            <Link
              href="/old-apartment"
              className="flex flex-1 items-center gap-3 rounded-xl border-2 border-blue-200 bg-white px-5 py-4 text-left transition-all hover:border-blue-400 hover:shadow-md"
            >
              <span className="text-2xl">🔨</span>
              <div className="flex-1">
                <div className="text-base font-bold text-foreground">구축아파트 이사</div>
                <div className="text-xs text-muted-foreground">리모델링 11단계 총정리</div>
              </div>
              <ArrowRight className="h-4 w-4 text-muted-foreground" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── 2단계: 관심 (Interest) ─── */}
      {/* 시공 순서를 보여주며 "이런 서비스들이 있구나" 관심 유도 */}
      <section className="border-b border-border/40 px-4 py-8 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <p className="mb-5 text-center text-xs font-medium text-muted-foreground">
            시공 순서대로 한눈에 보기
          </p>
          <div className="grid grid-cols-4 gap-3 sm:gap-4">
            {categories.map((cat, i) => (
              <div key={cat.id} className="flex items-center gap-1">
                <button className="group flex flex-1 flex-col items-center gap-1.5 transition-transform hover:scale-105">
                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-muted text-2xl transition-colors group-hover:bg-primary/10">
                    {cat.icon}
                    <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                      {i + 1}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-foreground">
                    {cat.name}
                  </span>
                </button>
                {i % 4 !== 3 && i < categories.length - 1 && (
                  <ArrowRight className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground/30" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ad: 카테고리 아래 가로 배너 — 섹션 전환 사이 자연스러운 위치 */}
      <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6">
        <AdSlot slot="home-below-categories" format="horizontal" />
      </div>

      {/* ─── 3단계: 확신 (Conviction) ─── */}
      {/* 지도로 업체를 직접 확인할 수 있다는 확신 제공 */}
      <section className="border-b border-border/40 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <MapBanner providers={providers.slice(0, 20)} totalCount={providers.length} />
        </div>
      </section>

      {/* ─── 4단계: 욕구 (Desire) + 비교 (Comparison) ─── */}
      {/* 검증된 업체를 보여주며 "여기서 비교해서 골라야겠다" 욕구 자극 */}
      <section className="px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                검증된 추천 업체
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                실제 이용자 후기를 확인하고 비교하세요
              </p>
            </div>
            <Link
              href="/map"
              prefetch={false}
              className="text-xs font-medium text-primary hover:underline"
            >
              전체보기 &gt;
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {topProviders.map((provider) => (
              <Link
                key={provider.id}
                href="/map"
                prefetch={false}
                className="flex gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
                  {provider.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground">
                      {provider.name}
                    </span>
                    {provider.verified && (
                      <Shield className="h-3.5 w-3.5 text-primary" />
                    )}
                  </div>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {provider.description}
                  </p>
                  <div className="mt-1.5 flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{provider.rating}</span>
                      <span className="text-muted-foreground">
                        ({provider.reviewCount})
                      </span>
                    </span>
                    <span className="text-muted-foreground">
                      {provider.experience}
                    </span>
                  </div>
                  <div className="mt-1.5 flex items-center justify-between">
                    <span className="text-sm font-bold text-primary">
                      {provider.priceLabel}
                    </span>
                    <div className="flex gap-1">
                      {provider.tags.slice(0, 1).map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-[10px] font-normal"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Ad: 추천 업체 아래 멀티플렉스 */}
      <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6">
        <AdSlot slot="home-below-providers" format="multiplex" />
      </div>

      {/* ─── 맘카페 한눈에 보기 ─── */}
      <section className="border-t border-border/40 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <h2 className="text-lg font-bold text-foreground sm:text-xl">
                우리 동네 맘카페 한눈에 보기
              </h2>
              <p className="mt-0.5 text-xs text-muted-foreground">
                새 동네로 이사하면 맘카페부터! 지역별 대표 맘카페를 찾아보세요
              </p>
            </div>
            <Link href="/community" className="text-xs font-medium text-primary hover:underline">
              전체보기 &gt;
            </Link>
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {topCafes.map((cafe) => (
              <a
                key={cafe.id}
                href={cafe.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                  {cafe.name.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-foreground group-hover:text-primary">{cafe.name}</span>
                  </div>
                  <div className="mt-0.5 flex items-center gap-2 text-[10px] text-muted-foreground">
                    <span>{cafe.subRegion}</span>
                    <span>회원 {cafe.members}명</span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5단계: 확신 강화 (Social Proof) ─── */}
      {/* 왜 이사꿀팁인지, 이용자 수치로 신뢰 강화 */}
      <section className="border-t border-border/40 bg-muted/20 px-4 py-10 sm:px-6">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-lg font-bold text-foreground sm:text-xl">
            왜 이사꿀팁일까요?
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-center">
              <MapPin className="h-8 w-8 text-primary" />
              <h3 className="text-sm font-bold text-foreground">
                가까운 업체 매칭
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                나한테 가까운 베스트 업체를
                <br />
                바로 소개해드립니다
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-center">
              <Shield className="h-8 w-8 text-primary" />
              <h3 className="text-sm font-bold text-foreground">
                허위 리뷰 걱정 없는
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                가까운 업체를 직접 매칭하기에
                <br />
                허위 리뷰로부터 안전합니다
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-center">
              <Clock className="h-8 w-8 text-primary" />
              <h3 className="text-sm font-bold text-foreground">
                시간 절약
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                뭐부터 해야 할지 검색할 필요 없이
                <br />
                순서대로 따라가기만 하면 됩니다
              </p>
            </div>
            <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-center">
              <TrendingUp className="h-8 w-8 text-primary" />
              <h3 className="text-sm font-bold text-foreground">
                비용 절감
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                업체별 가격을 한눈에 비교하고
                <br />
                합리적인 선택을 할 수 있습니다
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ad: 소셜프루프 아래 리더보드 */}
      <div className="mx-auto max-w-4xl px-4 py-3 sm:px-6">
        <AdSlot slot="home-before-cta" format="leaderboard" />
      </div>

      {/* ─── 7단계: 행동 (Action) ─── */}
      <section className="border-t border-border/40 bg-gradient-to-b from-primary/5 to-background px-4 py-12 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            이사 준비, 지금 시작하세요
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            더 이상 미루지 마세요. 3분이면 내 이사 계획이 완성됩니다.
          </p>
          <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/new-apartment"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              새아파트 가이드 시작
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/old-apartment"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card px-8 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              구축아파트 가이드 시작
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <p className="mt-4 text-xs text-muted-foreground">
            회원가입 없이 바로 이용 가능합니다
          </p>
        </div>
      </section>

      {/* Ad: 모바일 하단 고정 앵커 */}
      <AnchorAd slot="global-anchor" />
    </>
  );
}
