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
    </div>
  );
}
