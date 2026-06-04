import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { newApartmentSteps } from "@/data/new-apartment-steps";
import { getProvidersByCategory } from "@/data/providers";
import { GuideTabs } from "@/components/guides/GuideTabs";
import { StepProgress } from "@/components/guides/StepProgress";

export const metadata: Metadata = {
  title: "새아파트 이사 가이드 - 8단계 순서 총정리",
  description:
    "새아파트 입주 시 사전점검부터 탄성코트, 줄눈시공, 입주청소, 새집증후군 제거, 나노코팅, 이사까지 8단계 순서와 추천 업체를 한눈에 정리했습니다.",
};

export default function NewApartmentPage() {
  const tabs = [
    {
      label: "사전점검",
      steps: newApartmentSteps.filter((s) => s.order === 1),
      providers: getProvidersByCategory("inspection"),
    },
    {
      label: "입주청소 전",
      steps: newApartmentSteps.filter((s) => s.order >= 2 && s.order <= 3),
      providers: [
        ...getProvidersByCategory("elastic-coat"),
        ...getProvidersByCategory("grout"),
      ],
    },
    {
      label: "입주청소",
      steps: newApartmentSteps.filter((s) => s.order >= 4 && s.order <= 6),
      providers: [
        ...getProvidersByCategory("cleaning"),
        ...getProvidersByCategory("sick-house"),
        ...getProvidersByCategory("coating"),
      ],
    },
    {
      label: "입주 후",
      steps: newApartmentSteps.filter((s) => s.order >= 7),
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
        <span className="text-3xl">🏗️</span>
        <div>
          <h1 className="text-xl font-extrabold tracking-tight text-foreground sm:text-2xl">
            새아파트 입주 가이드
          </h1>
          <p className="text-sm text-muted-foreground">
            순서대로 따라가며 업체를 비교하세요
          </p>
        </div>
      </div>

      {/* Progress */}
      <div className="mb-2">
        <StepProgress steps={newApartmentSteps} />
      </div>

      {/* Tabs + Content */}
      <GuideTabs tabs={tabs} />

      {/* SEO 본문 — 새아파트 입주 종합 가이드 (E-E-A-T 강화) */}
      <article className="mt-12 prose-custom">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground">
          새아파트 입주, 왜 순서가 중요한가?
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          새 아파트 입주는 평생 한두 번 있는 큰 이벤트지만, 시공 일정과 비용을
          처음부터 정확히 짜기는 어렵습니다. 사전점검·탄성코트·줄눈시공·입주청소·
          새집증후군 제거·나노코팅·단열필름·이사까지 8가지 단계를 한 달 안에
          모두 정리해야 하기 때문입니다. 순서를 지키지 않으면 한 단계의 시공
          결과물이 다음 단계에서 망가져 재시공·재청소 비용이 추가로 발생하고,
          입주가 1~2주 지연되기도 합니다. 이 페이지는 2026년 기준 시세와 실제
          입주민 사례를 바탕으로 시기별 일정·예산을 정리한 종합 안내서입니다.
        </p>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          8단계 순서 한눈에
        </h2>
        <ol className="ml-5 list-decimal space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li><strong className="text-foreground">사전점검 (D-30~45)</strong> — 시공사 지정일에 벽·바닥·창호·수도·전기 확인. 하자는 사진과 함께 보수 요청서로 제출.</li>
          <li><strong className="text-foreground">탄성코트 (D-14~21)</strong> — 베란다 결로·곰팡이 예방 코팅. 30평 30만~60만원.</li>
          <li><strong className="text-foreground">줄눈시공 (D-10~14)</strong> — 욕실·주방 타일 줄눈을 에폭시/나노로 교체. 30평 20만~50만원.</li>
          <li><strong className="text-foreground">입주청소 (D-5~7)</strong> — 모든 시공 후 분진·잔여물 전문 청소. 30평 20만~40만원.</li>
          <li><strong className="text-foreground">새집증후군 제거 (D-3~5)</strong> — 베이크아웃 또는 광촉매 시공으로 VOC 제거. 영유아 가정 필수.</li>
          <li><strong className="text-foreground">나노코팅 (D-1~3)</strong> — 싱크대·욕실 유리 발수 코팅. 30평 15만~30만원.</li>
          <li><strong className="text-foreground">단열필름 (D-1)</strong> — 서향·남향 창문에 부착, 냉난방비 절감.</li>
          <li><strong className="text-foreground">이사 (D-Day)</strong> — 모든 시공 완료된 상태에서 짐 운반. 평일 80만~150만원.</li>
        </ol>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          예산 시나리오 (30평 기준, 2026년 시세)
        </h2>
        <div className="my-1 overflow-hidden rounded border border-border/40 text-sm">
          <table className="w-full">
            <tbody>
              <tr className="border-b border-border/30 bg-muted/30">
                <td className="px-3 py-2 font-semibold">패키지</td>
                <td className="px-3 py-2 font-semibold">예상 비용</td>
                <td className="px-3 py-2 font-semibold">적합한 가정</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-3 py-2">풀시공(전 항목)</td>
                <td className="px-3 py-2 font-medium text-foreground">200만~400만원</td>
                <td className="px-3 py-2">자녀 있고 5년+ 거주</td>
              </tr>
              <tr className="border-b border-border/30">
                <td className="px-3 py-2">표준(필수+선택 일부)</td>
                <td className="px-3 py-2 font-medium text-foreground">130만~230만원</td>
                <td className="px-3 py-2">신혼·2~3년 거주</td>
              </tr>
              <tr>
                <td className="px-3 py-2">최소(필수만)</td>
                <td className="px-3 py-2 font-medium text-foreground">80만~150만원</td>
                <td className="px-3 py-2">단기 거주·임대 예정</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          이 페이지를 활용하는 방법
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          위의 탭에서 단계별로 진행 순서, 추천 업체, 예상 비용을 확인할 수 있습니다.
          각 단계 카드를 클릭하면 상세 체크리스트·꿀팁·주의사항을 볼 수 있으며,
          업체 카드에서는 평점·후기·연락처를 한눈에 비교할 수 있습니다. 시공
          업체 견적은 단지 입주 카페에서 단체 시공을 진행하면 개별 견적보다
          10~20% 저렴해질 수 있으니, 입주 1개월 전부터 견적을 받기 시작하는
          것을 권장합니다.
        </p>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          관련 정보 더 보기
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          이사·시공·행정에 관한 더 자세한 정보는{" "}
          <Link href="/blog" className="font-medium text-primary hover:underline">
            이사꿀팁 블로그
          </Link>
          에서 50편 이상의 상세 가이드를 확인하실 수 있습니다. 검증된 업체를
          지역별로 비교하시려면{" "}
          <Link href="/map" className="font-medium text-primary hover:underline">
            업체 지도
          </Link>
          를 활용하세요.
        </p>

        <h2 className="mb-3 mt-8 text-base font-bold text-foreground">
          참고 자료
        </h2>
        <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
          <li>
            <a href="https://www.molit.go.kr/portal.do" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary">
              국토교통부 — 주택 분야 정책 정보
            </a>
          </li>
          <li>
            <a href="https://www.kca.go.kr" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary">
              한국소비자원 — 소비자 분쟁 및 표준 약관
            </a>
          </li>
          <li>
            <a href="https://www.k-apt.go.kr" target="_blank" rel="noopener noreferrer nofollow" className="hover:text-primary">
              K-apt — 공동주택 관리 정보 시스템
            </a>
          </li>
        </ul>
      </article>
    </div>
  );
}
