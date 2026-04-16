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
    </div>
  );
}
