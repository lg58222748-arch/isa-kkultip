"use client";

import { Checkbox } from "@/components/ui/checkbox";
import type { ChecklistItem as ChecklistItemType } from "@/types/guide";
import { useChecklistStore } from "@/stores/checklist-store";

export function ChecklistSection({ items }: { items: ChecklistItemType[] }) {
  const { checkedItems, toggle } = useChecklistStore();
  const completed = items.filter((item) =>
    checkedItems.includes(item.id)
  ).length;

  return (
    <div className="rounded-xl border border-border/60 bg-card">
      <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
        <h3 className="text-sm font-semibold text-foreground">
          체크리스트
        </h3>
        <span className="text-xs font-medium text-muted-foreground">
          {completed}/{items.length} 완료
        </span>
      </div>
      <div className="divide-y divide-border/40 px-5">
        {items.map((item) => (
          <ChecklistRow key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

function ChecklistRow({ item }: { item: ChecklistItemType }) {
  const { checkedItems, toggle } = useChecklistStore();
  const checked = checkedItems.includes(item.id);

  return (
    <label className="flex cursor-pointer items-start gap-3 py-3 transition-colors hover:bg-accent/30">
      <Checkbox
        checked={checked}
        onCheckedChange={() => toggle(item.id)}
        className="mt-0.5"
      />
      <span
        className={`text-sm leading-relaxed ${
          checked
            ? "text-muted-foreground line-through"
            : "text-foreground"
        }`}
      >
        {item.text}
        {item.isOptional && (
          <span className="ml-1.5 text-xs text-muted-foreground">(선택)</span>
        )}
      </span>
    </label>
  );
}
