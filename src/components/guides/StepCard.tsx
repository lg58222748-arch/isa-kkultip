import Link from "next/link";
import { ArrowRight, Clock, Coins } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { GuideStep } from "@/types/guide";

export function StepCard({ step }: { step: GuideStep }) {
  const href = `/${step.path}/${step.slug}`;

  return (
    <Link
      href={href}
      className="group relative flex gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-md sm:p-5"
    >
      {/* Step Number & Icon */}
      <div className="flex flex-shrink-0 flex-col items-center gap-1">
        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-2xl transition-colors group-hover:bg-primary/20">
          {step.icon}
        </div>
        <span className="text-xs font-bold text-primary">
          STEP {step.order}
        </span>
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-1.5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-base font-bold text-foreground sm:text-lg">
            {step.title}
          </h3>
          <div className="flex flex-shrink-0 items-center gap-1.5">
            {step.isRequired ? (
              <Badge variant="default" className="bg-primary text-xs">
                필수
              </Badge>
            ) : (
              <Badge variant="secondary" className="text-xs">
                선택
              </Badge>
            )}
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{step.subtitle}</p>
        <div className="mt-1 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {step.estimatedDays}
          </span>
          <span className="inline-flex items-center gap-1">
            <Coins className="h-3 w-3" />
            {step.estimatedCost}
          </span>
        </div>
        <span className="mt-1 inline-flex items-center gap-1 self-end text-xs font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
          자세히 보기
          <ArrowRight className="h-3 w-3" />
        </span>
      </div>
    </Link>
  );
}
