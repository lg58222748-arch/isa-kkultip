"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";
import { Users, ExternalLink, Search, MapPin } from "lucide-react";
import { momCafes, regions } from "@/data/mom-cafes";

export default function CommunityPage() {
  const [regionFilter, setRegionFilter] = useState("전체");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = regionFilter === "전체" ? momCafes : momCafes.filter((c) => c.region === regionFilter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.subRegion.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q)
      );
    }
    return list;
  }, [regionFilter, search]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          지역 맘카페 모음
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          새 동네로 이사하면 맘카페부터! 지역별 대표 맘카페를 한눈에 찾아보세요.
        </p>
      </div>

      {/* Search + Region Filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="카페명 또는 지역 검색..."
            className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setRegionFilter("전체")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              regionFilter === "전체"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            전체 ({momCafes.length})
          </button>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegionFilter(r)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                regionFilter === r
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-4 text-xs text-muted-foreground">{filtered.length}개 맘카페</p>

      {/* Cafe List */}
      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((cafe) => (
          <a
            key={cafe.id}
            href={cafe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
              {cafe.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-foreground group-hover:text-primary">
                  {cafe.name}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100" />
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {cafe.description}
              </p>
              <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {cafe.subRegion}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  회원 {cafe.members}명
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-muted-foreground">
          검색 결과가 없습니다
        </div>
      )}

      {/* Info Box */}
      <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
        <p className="text-sm font-semibold text-foreground">
          우리 동네 맘카페가 목록에 없나요?
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          추가를 원하시면 문의해주세요. 확인 후 등록해드립니다.
        </p>
      </div>
    </div>
  );
}
