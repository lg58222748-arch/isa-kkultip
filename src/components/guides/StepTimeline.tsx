import type { GuideStep } from "@/types/guide";
import { StepCard } from "./StepCard";

export function StepTimeline({ steps }: { steps: GuideStep[] }) {
  return (
    <div className="relative flex flex-col gap-4">
      {/* Vertical line */}
      <div className="absolute left-[1.45rem] top-4 hidden h-[calc(100%-3rem)] w-0.5 bg-gradient-to-b from-primary/40 via-primary/20 to-transparent sm:left-[1.55rem] sm:block" />

      {steps.map((step) => (
        <div key={step.id} className="relative">
          {/* Timeline dot (desktop only) */}
          <div className="absolute left-[1.15rem] top-6 z-10 hidden h-2.5 w-2.5 rounded-full border-2 border-primary bg-background sm:left-[1.25rem] sm:block" />
          <div className="sm:pl-10">
            <StepCard step={step} />
          </div>
        </div>
      ))}
    </div>
  );
}
