"use client";

import { Progress } from "@/components/ui/progress";
import type { GuideStep } from "@/types/guide";
import { useChecklistStore } from "@/stores/checklist-store";
import { useMemo } from "react";

export function StepProgress({ steps }: { steps: GuideStep[] }) {
  const checkedItems = useChecklistStore((s) => s.checkedItems);

  const { total, completed, percent } = useMemo(() => {
    const allItems = steps.flatMap((s) => s.checklist);
    const total = allItems.length;
    const completed = allItems.filter((item) =>
      checkedItems.includes(item.id)
    ).length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    return { total, completed, percent };
  }, [steps, checkedItems]);

  return (
    <div className="flex items-center gap-3 rounded-lg border border-border/60 bg-card p-4">
      <div className="flex-1">
        <div className="mb-2 flex items-center justify-between">
          <span className="text-sm font-medium text-foreground">
            전체 진행률
          </span>
          <span className="text-sm font-semibold text-primary">
            {completed}/{total} ({percent}%)
          </span>
        </div>
        <Progress value={percent} className="h-2" />
      </div>
    </div>
  );
}
