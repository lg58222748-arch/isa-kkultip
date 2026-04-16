"use client";

import { useState, useMemo } from "react";
import { providers as allProviders } from "@/data/providers";
import { Star, Shield, Search, MapPin } from "lucide-react";
import type { Provider } from "@/types/provider";

const categoryLabels: Record<string, string> = {
  inspection: "사전점검", "elastic-coat": "탄성코트", grout: "줄눈시공",
  cleaning: "입주청소", "sick-house": "새집증후군", coating: "나노코팅",
  "thermal-film": "단열필름", moving: "포장이사",
};

export default function AdminProviders() {
  const [search, setSearch] = useState("");
  const [catFilter, setCatFilter] = useState("all");
  const [verifiedFilter, setVerifiedFilter] = useState<"all" | "yes" | "no">("all");
  const [providerList, setProviderList] = useState<Provider[]>(allProviders);

  const filtered = useMemo(() => {
    return providerList.filter((p) => {
      if (search && !p.name.includes(search) && !p.description.includes(search)) return false;
      if (catFilter !== "all" && p.category !== catFilter) return false;
      if (verifiedFilter === "yes" && !p.verified) return false;
      if (verifiedFilter === "no" && p.verified) return false;
      return true;
    });
  }, [providerList, search, catFilter, verifiedFilter]);

  function toggleVerified(id: string) {
    setProviderList((prev) =>
      prev.map((p) => (p.id === id ? { ...p, verified: !p.verified } : p))
    );
  }

  return (
    <div>
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-foreground">업체 관리</h1>
          <p className="text-xs text-muted-foreground">총 {providerList.length}개 업체</p>
        </div>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap items-center gap-3">
        <div className="relative flex-1 sm:max-w-xs">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="업체명 검색..."
            className="w-full rounded-lg border border-input bg-background py-2 pl-9 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <select
          value={catFilter}
          onChange={(e) => setCatFilter(e.target.value)}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        >
          <option value="all">전체 카테고리</option>
          {Object.entries(categoryLabels).map(([val, label]) => (
            <option key={val} value={val}>{label}</option>
          ))}
        </select>
        <select
          value={verifiedFilter}
          onChange={(e) => setVerifiedFilter(e.target.value as "all" | "yes" | "no")}
          className="rounded-lg border border-input bg-background px-3 py-2 text-sm outline-none focus:border-primary"
        >
          <option value="all">인증 전체</option>
          <option value="yes">인증 업체</option>
          <option value="no">미인증 업체</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-xl border border-border/60 bg-card">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border/60 bg-muted/30 text-left text-xs font-medium text-muted-foreground">
              <th className="px-4 py-3">업체명</th>
              <th className="px-4 py-3">카테고리</th>
              <th className="px-4 py-3">평점</th>
              <th className="px-4 py-3">리뷰</th>
              <th className="px-4 py-3">가격</th>
              <th className="px-4 py-3">지역</th>
              <th className="px-4 py-3">인증</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-border/30 hover:bg-accent/20">
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-xs font-bold text-primary">
                      {p.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{p.name}</div>
                      <div className="max-w-[200px] truncate text-[10px] text-muted-foreground">{p.description}</div>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-3">
                  <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {categoryLabels[p.category]}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-0.5">
                    <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                    <span className="font-semibold">{p.rating}</span>
                  </span>
                </td>
                <td className="px-4 py-3 text-muted-foreground">{p.reviewCount}</td>
                <td className="px-4 py-3 font-medium text-primary">{p.priceLabel}</td>
                <td className="px-4 py-3">
                  <span className="inline-flex items-center gap-0.5 text-xs text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {p.region.slice(0, 2).join(", ")}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <button
                    onClick={() => toggleVerified(p.id)}
                    className={`rounded-full px-3 py-1 text-[10px] font-semibold transition-colors ${
                      p.verified
                        ? "bg-emerald-100 text-emerald-700 hover:bg-emerald-200"
                        : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                    }`}
                  >
                    {p.verified ? "인증" : "미인증"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="py-10 text-center text-sm text-muted-foreground">
            검색 결과가 없습니다
          </div>
        )}
      </div>
      <p className="mt-3 text-xs text-muted-foreground">
        {filtered.length}개 업체 표시 중
      </p>
    </div>
  );
}
