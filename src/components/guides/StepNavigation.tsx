import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { GuideStep } from "@/types/guide";

export function StepNavigation({
  currentStep,
  allSteps,
}: {
  currentStep: GuideStep;
  allSteps: GuideStep[];
}) {
  const currentIndex = allSteps.findIndex((s) => s.id === currentStep.id);
  const prevStep = currentIndex > 0 ? allSteps[currentIndex - 1] : null;
  const nextStep =
    currentIndex < allSteps.length - 1 ? allSteps[currentIndex + 1] : null;

  return (
    <div className="flex items-stretch gap-3">
      {prevStep ? (
        <Link
          href={`/${prevStep.path}/${prevStep.slug}`}
          className="flex flex-1 items-center gap-2 rounded-lg border border-border/60 bg-card p-4 text-left transition-colors hover:border-primary/30 hover:bg-accent/30"
        >
          <ArrowLeft className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
          <div className="min-w-0">
            <span className="text-xs text-muted-foreground">이전 단계</span>
            <p className="truncate text-sm font-medium text-foreground">
              {prevStep.title}
            </p>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {nextStep ? (
        <Link
          href={`/${nextStep.path}/${nextStep.slug}`}
          className="flex flex-1 items-center justify-end gap-2 rounded-lg border border-border/60 bg-card p-4 text-right transition-colors hover:border-primary/30 hover:bg-accent/30"
        >
          <div className="min-w-0">
            <span className="text-xs text-muted-foreground">다음 단계</span>
            <p className="truncate text-sm font-medium text-foreground">
              {nextStep.title}
            </p>
          </div>
          <ArrowRight className="h-4 w-4 flex-shrink-0 text-muted-foreground" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </div>
  );
}
