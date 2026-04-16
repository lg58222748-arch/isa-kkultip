import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import {
  ArrowLeft,
  AlertTriangle,
  Clock,
  Coins,
  Lightbulb,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { oldApartmentSteps } from "@/data/old-apartment-steps";
import { ChecklistSection } from "@/components/guides/ChecklistSection";
import { CostInfo } from "@/components/guides/CostInfo";
import { StepNavigation } from "@/components/guides/StepNavigation";
import { AdSlot } from "@/components/ads/AdSlot";

interface Props {
  params: Promise<{ step: string }>;
}

function findStep(slug: string) {
  return oldApartmentSteps.find((s) => s.slug === slug);
}

export async function generateStaticParams() {
  return oldApartmentSteps.map((step) => ({ step: step.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { step: slug } = await params;
  const step = findStep(slug);
  if (!step) return {};
  return {
    title: `${step.title} - 구축아파트 이사 ${step.order}단계`,
    description: step.subtitle + ". " + step.description.slice(0, 120),
  };
}

export default async function OldApartmentStepPage({ params }: Props) {
  const { step: slug } = await params;
  const step = findStep(slug);
  if (!step) notFound();

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      {/* Breadcrumb */}
      <Link
        href="/old-apartment"
        className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        구축아파트 가이드로 돌아가기
      </Link>

      {/* Step Header */}
      <div className="mb-8">
        <div className="mb-1 flex items-center gap-2">
          <Badge variant="secondary" className="text-xs">
            STEP {step.order}
          </Badge>
          {step.isRequired ? (
            <Badge variant="default" className="bg-primary text-xs">
              필수
            </Badge>
          ) : (
            <Badge variant="outline" className="text-xs">
              선택
            </Badge>
          )}
        </div>
        <div className="mt-2 flex items-center gap-3">
          <span className="text-4xl">{step.icon}</span>
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              {step.title}
            </h1>
            <p className="mt-1 text-muted-foreground">{step.subtitle}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-primary" />
            소요 기간: <strong className="text-foreground">{step.estimatedDays}</strong>
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Coins className="h-4 w-4 text-primary" />
            예상 비용: <strong className="text-foreground">{step.estimatedCost}</strong>
          </span>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
        {/* Main Content */}
        <div className="flex flex-col gap-6">
          {/* Description */}
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h2 className="mb-3 text-base font-semibold text-foreground">
              상세 설명
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground">
              {step.description}
            </p>
          </div>

          {/* Tips */}
          {step.tips.length > 0 && (
            <div className="rounded-xl border border-honey/30 bg-honey-light/20 p-5">
              <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-foreground">
                <Lightbulb className="h-4 w-4 text-honey-dark" />
                꿀팁
              </h2>
              <ul className="flex flex-col gap-2">
                {step.tips.map((tip, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-honey-dark">
                      &bull;
                    </span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Warnings */}
          {step.warnings.length > 0 && (
            <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-5">
              <h2 className="mb-3 flex items-center gap-2 text-base font-semibold text-foreground">
                <AlertTriangle className="h-4 w-4 text-destructive" />
                주의사항
              </h2>
              <ul className="flex flex-col gap-2">
                {step.warnings.map((warning, i) => (
                  <li
                    key={i}
                    className="flex gap-2 text-sm leading-relaxed text-muted-foreground"
                  >
                    <span className="mt-0.5 flex-shrink-0 text-destructive">
                      &bull;
                    </span>
                    {warning}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Checklist */}
          <ChecklistSection items={step.checklist} />
        </div>

        {/* Sidebar */}
        <div className="flex flex-col gap-6">
          <CostInfo rows={step.costTable} />
          <AdSlot slot="guide-sidebar-rect" format="rectangle" />
        </div>
      </div>

      {/* Ad: 콘텐츠 하단 배너 */}
      <div className="mt-6">
        <AdSlot slot="guide-bottom-banner" format="horizontal" />
      </div>

      {/* Navigation */}
      <div className="mt-6">
        <StepNavigation currentStep={step} allSteps={oldApartmentSteps} />
      </div>

      {/* Ad: 네비게이션 아래 멀티플렉스 */}
      <div className="mt-6">
        <AdSlot slot="guide-below-nav" format="multiplex" />
      </div>
    </div>
  );
}
