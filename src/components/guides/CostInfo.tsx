import type { CostRow } from "@/types/guide";

export function CostInfo({ rows }: { rows: CostRow[] }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card">
      <div className="border-b border-border/60 px-5 py-3">
        <h3 className="text-sm font-semibold text-foreground">
          예상 비용
        </h3>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/40 text-left">
              <th className="px-5 py-2 text-xs font-medium text-muted-foreground">
                규모
              </th>
              <th className="px-5 py-2 text-xs font-medium text-muted-foreground">
                예상 가격
              </th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-b border-border/20 last:border-0"
              >
                <td className="px-5 py-2.5 text-foreground">{row.size}</td>
                <td className="px-5 py-2.5 font-medium text-primary">
                  {row.priceRange}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="px-5 py-2.5">
        <p className="text-xs text-muted-foreground">
          * 위 가격은 참고용이며, 실제 가격은 업체, 지역, 조건에 따라 다를 수
          있습니다.
        </p>
      </div>
    </div>
  );
}
