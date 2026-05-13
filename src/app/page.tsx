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
          <MapBanner
            providers={providers.slice(0, 20).map((p) => ({
              name: p.name,
              lat: p.lat,
              lng: p.lng,
              rating: p.rating,
            }))}
            totalCount={providers.length}
          />
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

      {/* ─── 8단계: SEO 본문 (Long-form Content) ─── */}
      {/* AdSense·Google 검색을 위한 사이트 가치 설명 본문 */}
      <section className="border-t border-border/40 bg-background px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl prose-custom">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            이사꿀팁이 만드는 더 쉬운 이사 경험
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            이사는 인생에서 손꼽히는 중요한 이벤트지만, 정보가 너무 흩어져 있어
            많은 분들이 무엇부터 시작해야 할지 막막함을 느낍니다. 사전점검, 탄성코트,
            줄눈시공, 입주청소, 새집증후군 제거, 나노코팅, 단열필름, 그리고 이사까지
            — 새 아파트 입주만 해도 8단계 시공 일정을 짜야 하고, 구축아파트
            리모델링은 11단계의 공사 순서를 이해해야 합니다. 이사꿀팁은 이런
            복잡한 과정을 누구나 이해할 수 있도록 단계별로 정리하고, 전국
            검증된 이사 관련 업체를 한곳에서 비교할 수 있도록 만들었습니다.
          </p>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            왜 이사꿀팁을 만들었나요?
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            저희 운영진도 처음 이사를 준비할 때 같은 어려움을 겪었습니다.
            네이버 카페, 블로그, 유튜브를 며칠씩 검색해도 정확한 정보를 찾기
            어려웠고, 업체 견적은 같은 조건이어도 두 배 가까이 차이가 났습니다.
            특히 시공 순서를 모르고 진행해서 입주청소를 두 번 해야 했던 경험이
            가장 아쉬웠습니다. 이사꿀팁은 이런 시행착오를 다른 분들이 겪지
            않도록, 모든 정보를 한곳에 정리하는 것을 목표로 시작되었습니다.
          </p>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            어떤 정보를 제공하나요?
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            이사꿀팁은 크게 네 가지 종류의 정보를 제공합니다. 첫째,
            <strong className="text-foreground"> 새아파트와 구축아파트 단계별 가이드</strong>로
            언제 어떤 시공을 해야 하는지, 비용은 얼마인지, 주의 사항은
            무엇인지 정리합니다. 둘째,
            <strong className="text-foreground"> 전국 이사 관련 업체 지도</strong>에서
            사전점검, 줄눈시공, 입주청소, 포장이사 등 카테고리별로 평점과
            후기를 비교할 수 있습니다. 셋째,
            <strong className="text-foreground"> 50편 이상의 이사 꿀팁 블로그</strong>는
            평형별 비용, 손 없는 날, 이사 사기 방지, 전입신고 등 실생활
            정보를 다룹니다. 마지막으로
            <strong className="text-foreground"> 지역별 맘카페 모음</strong>으로
            새 동네 정보를 빠르게 얻을 수 있도록 돕습니다.
          </p>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            누구에게 도움이 되나요?
          </h3>
          <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li><strong className="text-foreground">새 아파트 입주 예정자</strong>: 사전점검부터 입주까지 8단계 일정과 시공 순서, 단계별 비용 정보</li>
            <li><strong className="text-foreground">구축아파트 리모델링 계획자</strong>: 철거부터 마감까지 11단계 공사 순서와 견적 비교</li>
            <li><strong className="text-foreground">첫 자취 시작 대학생·신입사원</strong>: 원룸·투룸 이사 비용, 보증금 보호, 전입신고 등 기초 정보</li>
            <li><strong className="text-foreground">전세·월세 이사 가구</strong>: 보증금 반환, 임대차 보호법, 계약 만료 시 주의사항</li>
            <li><strong className="text-foreground">장거리 이사 예정자</strong>: 지방·서울 간 이사 비용 산정과 시간대별 견적 비교</li>
            <li><strong className="text-foreground">이사 업체 입점 희망 사업자</strong>: 무료 입점으로 신규 고객 확보 기회</li>
          </ul>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            이사꿀팁의 정보는 어떻게 검증되나요?
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            저희가 제공하는 비용 정보는 2026년 기준 전국 이사 업체 견적 평균
            데이터를 분기별로 업데이트합니다. 단계별 가이드는 실제 입주민과
            인테리어 시공자의 후기를 종합해 작성되며, 새로운 정보가 확인되면
            즉시 반영됩니다. 업체 정보는 카카오·네이버 로컬 API를 활용해
            전국 49개 도시에서 수집했고, 사용자 후기와 평점을 함께 표시합니다.
            저희는 특정 업체로부터 후원이나 광고비를 받지 않으며, 모든 콘텐츠는
            중립적으로 운영됩니다.
          </p>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            바로 시작하기
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            회원가입 없이 모든 정보를 무료로 이용할 수 있습니다. 새 아파트
            입주를 준비 중이라면 위의 새아파트 가이드를, 구축아파트 리모델링을
            계획 중이라면 구축아파트 가이드를 확인하세요. 인근 업체를 비교하고
            싶다면 업체 지도를, 자세한 이사 정보가 필요하다면 블로그 메뉴를
            방문하시면 됩니다. 궁금한 점은 010-5763-3059 또는
            kplayer02@naver.com으로 언제든 문의해 주세요.
          </p>
        </article>
      </section>

      {/* Ad: 모바일 하단 고정 앵커 */}
      <AnchorAd slot="global-anchor" />
    </>
  );
}
