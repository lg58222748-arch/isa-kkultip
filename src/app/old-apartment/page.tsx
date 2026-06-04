import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { oldApartmentSteps } from "@/data/old-apartment-steps";
import { getProvidersByCategory } from "@/data/providers";
import { GuideTabs } from "@/components/guides/GuideTabs";
import { StepProgress } from "@/components/guides/StepProgress";

export const metadata: Metadata = {
  title: "구축아파트 이사 가이드 - 11단계 순서 총정리",
  description:
    "구축아파트 리모델링 시 현장실측부터 철거, 설비, 전기, 타일, 도배, 줄눈, 입주청소까지 11단계 순서와 추천 업체를 정리했습니다.",
};

export default function OldApartmentPage() {
  const tabs = [
    {
      label: "현장실측",
      steps: oldApartmentSteps.filter((s) => s.order === 1),
      providers: getProvidersByCategory("inspection"),
    },
    {
      label: "인테리어 공사",
      steps: oldApartmentSteps.filter((s) => s.order >= 2 && s.order <= 8),
      providers: [],
    },
    {
      label: "마감공사",
      steps: oldApartmentSteps.filter((s) => s.order >= 9 && s.order <= 10),
      providers: [
        ...getProvidersByCategory("grout"),
        ...getProvidersByCategory("cleaning"),
      ],
    },
    {
      label: "이사",
      steps: oldApartmentSteps.filter((s) => s.order === 11),
      providers: getProvidersByCategory("moving"),
    },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 sm:py-8">
      {/* Breadcrumb */}
      <Link
        href="/"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        홈으로
      </Link>

      {/* Page Header */}
      <div className="mb-4 flex items-center gap-3">
        <span className="text-3xl">🔨</span>
        <div>
          <h1 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
            구축아파트 이사 가이드
          </h1>
          <p className="text-sm text-muted-foreground">
            리모델링부터 입주까지, 순서대로 따라가세요
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-2">
        <StepProgress steps={oldApartmentSteps} />
      </div>

      {/* Tabs + Content */}
      <GuideTabs tabs={tabs} />

      {/* SEO 본문 — 구축아파트 리모델링 종합 가이드 (E-E-A-T 강화) */}
      <article className="mt-12 prose-custom">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground">
          구축아파트 리모델링, 순서가 비용을 결정합니다
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          구축아파트 리모델링은 새 아파트 입주와 달리 철거·설비 교체부터
          시작해 마감까지 11단계의 공정이 순서대로 진행되어야 합니다. 한 단계
          순서가 어긋나면 전 단계 작업물이 망가져 200만~500만원의 재시공
          비용이 발생합니다. 예를 들어 타일 시공 후 배관을 교체하면 새 타일을
          깨고 다시 깔아야 하고, 도배 후 목공을 진행하면 새 벽지가 톱밥으로
          더러워져 재도배를 해야 합니다. 이 페이지는 30평대 전체 리모델링
          기준의 11단계 순서·일정·비용을 정리한 종합 안내서입니다.
        </p>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          11단계 공사 순서 요약
        </h2>
        <ol className="ml-5 list-decimal space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li><strong className="text-foreground">현장실측·하자점검</strong> (1일, 0~30만원) — 도면 확정과 자재 리스트 결정.</li>
          <li><strong className="text-foreground">철거</strong> (2~4일, 200만~400만원) — 기존 자재 전체 해체.</li>
          <li><strong className="text-foreground">설비(배관)</strong> (2~3일, 200만~500만원) — 수도·가스·난방배관 교체.</li>
          <li><strong className="text-foreground">전기공사</strong> (1~2일, 100만~300만원) — 배선·콘센트·조명 변경.</li>
          <li><strong className="text-foreground">샷시 교체</strong> (1~2일, 500만~1,000만원) — 단열·방음 창호.</li>
          <li><strong className="text-foreground">목공</strong> (3~5일, 300만~600만원) — 천장·몰딩·붙박이장.</li>
          <li><strong className="text-foreground">타일</strong> (3~5일, 300만~700만원) — 욕실·주방 방수 후 타일링.</li>
          <li><strong className="text-foreground">도장·도배</strong> (3~5일, 300만~700만원) — 벽면·천장 마감.</li>
          <li><strong className="text-foreground">줄눈시공</strong> (1일, 30만~60만원) — 에폭시/나노 줄눈.</li>
          <li><strong className="text-foreground">입주청소</strong> (1일, 25만~45만원) — 공사 분진 전문 청소.</li>
          <li><strong className="text-foreground">이사</strong> (1일, 80만~150만원) — 깨끗한 집에 짐 들임.</li>
        </ol>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          비용 시나리오 (30평대 기준)
        </h2>
        <div className="my-1 overflow-hidden rounded border border-border/40 text-sm">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-border/30 bg-muted/30">
                <td className="px-3 py-2 font-semibold">범위</td>
                <td className="px-3 py-2 font-semibold">예상 비용</td>
                <td className="px-3 py-2 font-semibold">기간</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-3 py-2">풀 리모델링(전체)</td>
                <td className="px-3 py-2 font-medium text-foreground">3,000만~5,000만원</td>
                <td className="px-3 py-2">4~6주</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-3 py-2">부분(욕실+주방)</td>
                <td className="px-3 py-2 font-medium text-foreground">500만~1,300만원</td>
                <td className="px-3 py-2">1~2주</td>
              </tr>
              <tr>
                <td className="px-3 py-2">인테리어만(도배·바닥·조명)</td>
                <td className="px-3 py-2 font-medium text-foreground">400만~850만원</td>
                <td className="px-3 py-2">3~5일</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          직영 시공 vs 턴키 시공 — 어떻게 선택할까?
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">직영 시공</strong>은 본인이 각 공정 업체를
          직접 섭외하는 방식으로 비용을 10~20% 절감할 수 있지만 일정 조율과 품질 관리가
          본인 책임입니다. <strong className="text-foreground">턴키 시공</strong>은
          인테리어 업체가 모든 공정을 관리하는 방식으로 편하지만 비용이 10~20% 더
          비쌉니다. 처음 리모델링하는 가정이라면 턴키가 안전합니다. 직영을 선택한다면
          최소 3곳에서 동일한 도면·자재 리스트를 제공받아 견적을 비교하세요.
        </p>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          관련 정보 더 보기
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          상세한 단계별 가이드와 업체 비교는{" "}
          <Link href="/blog" className="font-medium text-primary hover:underline">
            이사꿀팁 블로그
          </Link>
          의 구축아파트 인테리어 시리즈를 참고하세요. 인근 인테리어·줄눈·청소
          업체 평점과 후기는{" "}
          <Link href="/map" className="font-medium text-primary hover:underline">
            업체 지도
          </Link>
          에서 확인할 수 있습니다.
        </p>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          참고 자료
        </h2>
        <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
          <li>
            <a href="https://www.molit.go.kr/portal.do" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary">
              국토교통부 — 건축물 관리 정책
            </a>
          </li>
          <li>
            <a href="https://www.kca.go.kr" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary">
              한국소비자원 — 인테리어 분쟁 사례 및 해결 가이드
            </a>
          </li>
          <li>
            <a href="https://www.ftc.go.kr" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary">
              공정거래위원회 — 표준 인테리어 계약서
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}
