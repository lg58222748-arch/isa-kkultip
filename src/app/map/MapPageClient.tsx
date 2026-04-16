"use client";

import { useState, useMemo, useCallback } from "react";
import { providers } from "@/data/providers";
import { NaverMap } from "@/components/map/NaverMap";
import { ProviderDetail } from "@/components/map/ProviderDetail";
import {
  Star,
  Shield,
  MapPin,
  ArrowUpDown,
  TrendingDown,
  Trophy,
  Flame,
  Filter,
  X,
  ChevronDown,
  Search,
  Navigation,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import type { Provider } from "@/types/provider";
import { AdSlot } from "@/components/ads/AdSlot";

type SortMode = "rating" | "reviews" | "price-low" | "price-high";

const categoryOptions = [
  { value: "moving", label: "포장이사", icon: "📦" },
  { value: "cleaning", label: "입주청소", icon: "🧹" },
  { value: "grout", label: "줄눈시공", icon: "🔲" },
  { value: "interior", label: "인테리어", icon: "🏠" },
  { value: "inspection", label: "사전점검", icon: "🔍" },
  { value: "elastic-coat", label: "탄성코트", icon: "🎨" },
  { value: "coating", label: "나노코팅", icon: "✨" },
  { value: "sick-house", label: "새집증후군", icon: "🌿" },
  { value: "thermal-film", label: "단열필름", icon: "🪟" },
];

const sortOptions: { value: SortMode; label: string; icon: React.ReactNode }[] = [
  { value: "rating", label: "평점 높은순", icon: <Star className="h-3 w-3" /> },
  { value: "reviews", label: "후기 많은순", icon: <Flame className="h-3 w-3" /> },
  { value: "price-low", label: "최저가순", icon: <TrendingDown className="h-3 w-3" /> },
  { value: "price-high", label: "최고가순", icon: <ArrowUpDown className="h-3 w-3" /> },
];

const REGIONS = [
  "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종",
  "수원", "용인", "성남", "고양", "화성", "천안", "아산", "평택",
  "전주", "청주", "창원", "김해", "제주", "포항", "남양주", "안산",
  "안양", "하남", "김포", "파주", "의정부", "춘천", "강릉", "여수",
];

export function MapPageClient() {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [categoryFilter, setCategoryFilter] = useState("moving");
  const [selectedRegions, setSelectedRegions] = useState<string[]>(["서울"]);
  const [searchText, setSearchText] = useState("");
  const [sortMode, setSortMode] = useState<SortMode>("rating");
  const [showDetail, setShowDetail] = useState(false);
  const [onlyVerified, setOnlyVerified] = useState(false);
  const [showCompare, setShowCompare] = useState(false);

  const filteredProviders = useMemo(() => {
    let list = providers.filter((p) => p.category === categoryFilter);

    if (selectedRegions.length > 0) {
      list = list.filter((p) =>
        selectedRegions.some((sr) => p.region.some((r) => r.includes(sr)) || p.address.includes(sr))
      );
    }

    if (searchText.trim()) {
      const q = searchText.trim().toLowerCase();
      list = list.filter((p) =>
        p.name.toLowerCase().includes(q) ||
        p.address.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
      );
    }

    if (onlyVerified) list = list.filter((p) => p.verified);

    list.sort((a, b) => {
      switch (sortMode) {
        case "rating": return b.rating - a.rating;
        case "reviews": return b.reviewCount - a.reviewCount;
        case "price-low": return a.priceStart - b.priceStart;
        case "price-high": return b.priceStart - a.priceStart;
      }
    });

    // 2000개 중 최대 200개만 표시 (성능)
    return list;
  }, [categoryFilter, selectedRegions, searchText, sortMode, onlyVerified]);

  const selectedProvider = useMemo(
    () => providers.find((p) => p.id === selectedId) ?? null,
    [selectedId]
  );

  // 카테고리별 최저가 업체
  const lowestByCategory = useMemo(() => {
    const map: Record<string, Provider> = {};
    for (const p of providers) {
      if (!map[p.category] || p.priceStart < map[p.category].priceStart) {
        map[p.category] = p;
      }
    }
    return map;
  }, []);

  // TOP 3 평점 업체
  const top3 = useMemo(() => {
    return [...providers].sort((a, b) => b.rating - a.rating || b.reviewCount - a.reviewCount).slice(0, 3);
  }, []);

  function handleSelect(id: string) {
    setSelectedId(id);
    setShowDetail(true);
  }

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="order-2 flex h-[50%] w-full flex-col border-t border-border/60 lg:order-1 lg:h-full lg:w-[400px] lg:border-r lg:border-t-0">
        {/* Search */}
        <div className="border-b border-border/60 p-3">
          <div className="relative">
            <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              placeholder="업체명·지역 검색"
              className="w-full rounded-lg border border-input bg-background py-1.5 pl-8 pr-3 text-xs outline-none focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>
        </div>

        {/* Region Multi-Select */}
        <div className="border-b border-border/60 p-2">
          <div className="flex flex-wrap gap-1">
            {REGIONS.map((r) => (
              <button
                key={r}
                onClick={() => {
                  setSelectedRegions((prev) =>
                    prev.includes(r) ? prev.filter((x) => x !== r) : [...prev, r]
                  );
                  setSelectedId(null);
                  setShowDetail(false);
                }}
                className={`rounded-full px-2 py-0.5 text-[10px] font-medium transition-colors ${
                  selectedRegions.includes(r)
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent"
                }`}
              >
                {r}
              </button>
            ))}
          </div>
        </div>

        {/* Category Tabs */}
        <div className="border-b border-border/60 p-3">
          <div className="flex flex-wrap gap-1.5">
            {categoryOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => {
                  setCategoryFilter(opt.value);
                  setSelectedId(null);
                  setShowDetail(false);
                }}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                  categoryFilter === opt.value
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <span className="text-xs">{opt.icon}</span>
                {opt.label}
              </button>
            ))}
          </div>
        </div>

        {/* Sort & Filter Bar */}
        <div className="flex items-center justify-between border-b border-border/60 px-3 py-2">
          <div className="flex items-center gap-1.5">
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSortMode(opt.value)}
                className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
                  sortMode === opt.value
                    ? "bg-foreground text-background"
                    : "text-muted-foreground hover:bg-muted"
                }`}
              >
                {opt.icon}
                {opt.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => setOnlyVerified(!onlyVerified)}
            className={`inline-flex items-center gap-1 rounded-md px-2 py-1 text-[11px] font-medium transition-colors ${
              onlyVerified
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-muted"
            }`}
          >
            <Shield className="h-3 w-3" />
            인증만
          </button>
        </div>

        {/* Stats Bar */}
        <div className="flex items-center gap-3 border-b border-border/40 bg-muted/30 px-3 py-2 text-[11px] text-muted-foreground">
          <span>{filteredProviders.length}개 업체</span>
          {lowestByCategory[categoryFilter] && (
            <span className="inline-flex items-center gap-1 text-primary">
              <TrendingDown className="h-3 w-3" />
              최저가 {lowestByCategory[categoryFilter].priceLabel}
            </span>
          )}
          <button
            onClick={() => setShowCompare(!showCompare)}
            className="ml-auto inline-flex items-center gap-1 rounded bg-primary/10 px-2 py-0.5 font-medium text-primary hover:bg-primary/20"
          >
            <TrendingDown className="h-3 w-3" />
            최저가 비교
          </button>
        </div>

        {/* Price Comparison Panel */}
        {showCompare && (
          <div className="border-b border-border/60 bg-primary/5 px-3 py-3">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="text-xs font-bold text-foreground">
                카테고리별 최저가 비교
              </h3>
              <button onClick={() => setShowCompare(false)}>
                <X className="h-3.5 w-3.5 text-muted-foreground" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {categoryOptions
                .filter((c) => c.value !== "all")
                .map((cat) => {
                  const lowest = lowestByCategory[cat.value];
                  if (!lowest) return null;
                  return (
                    <button
                      key={cat.value}
                      onClick={() => {
                        setCategoryFilter(cat.value);
                        setSortMode("price-low");
                        setShowCompare(false);
                      }}
                      className="flex items-center gap-2 rounded-lg border border-border/40 bg-card p-2 text-left transition-colors hover:border-primary/30"
                    >
                      <span className="text-lg">{cat.icon}</span>
                      <div className="min-w-0 flex-1">
                        <div className="text-[10px] text-muted-foreground">{cat.label}</div>
                        <div className="text-xs font-bold text-primary">{lowest.priceLabel}</div>
                        <div className="truncate text-[10px] text-muted-foreground">{lowest.name}</div>
                      </div>
                    </button>
                  );
                })}
            </div>
          </div>
        )}

        {/* Ad: 지도 사이드바 — 필터 아래 자연스러운 위치 */}
        <div className="border-b border-border/40 p-2">
          <AdSlot slot="map-sidebar-infeed" format="in-feed" />
        </div>

        {/* Provider List */}
        <div className="flex-1 overflow-y-auto">
          {filteredProviders.map((provider, index) => {
            const isSelected = provider.id === selectedId;
            const isLowest = lowestByCategory[categoryFilter]?.id === provider.id;
            const isTop = index === 0 && sortMode === "rating";

            return (
              <button
                key={provider.id}
                onClick={() => handleSelect(provider.id)}
                className={`flex w-full gap-3 border-b border-border/30 p-3 text-left transition-colors ${
                  isSelected
                    ? "bg-primary/5 border-l-2 border-l-primary"
                    : "hover:bg-accent/30"
                }`}
              >
                {index < 3 && sortMode === "rating" && (
                  <span className={`flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[9px] font-bold text-white ${
                    index === 0 ? "bg-amber-500" : index === 1 ? "bg-gray-400" : "bg-amber-700"
                  }`}>
                    {index + 1}
                  </span>
                )}
                <div className="min-w-0 flex-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-sm font-bold text-foreground">
                      {provider.name}
                    </span>
                    {provider.verified && (
                      <Shield className="h-3.5 w-3.5 text-primary" />
                    )}
                    {isLowest && (
                      <Badge className="bg-red-500 text-[9px] px-1 py-0 text-white">최저가</Badge>
                    )}
                    {isTop && (
                      <Badge className="bg-amber-500 text-[9px] px-1 py-0 text-white">TOP</Badge>
                    )}
                  </div>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {provider.description}
                  </p>
                  <div className="mt-1 flex items-center gap-2 text-xs">
                    <span className="inline-flex items-center gap-0.5">
                      <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                      <span className="font-semibold">{provider.rating}</span>
                      <span className="text-muted-foreground">
                        ({provider.reviewCount})
                      </span>
                    </span>
                    <span className="text-muted-foreground">{provider.experience}</span>
                    <span className="inline-flex items-center gap-0.5 text-muted-foreground">
                      <MapPin className="h-3 w-3" />
                      {provider.region[0]}
                    </span>
                    <span className="ml-auto text-sm font-bold text-primary">
                      {provider.priceLabel}
                    </span>
                  </div>
                  {/* Quick tags */}
                  <div className="mt-1 flex gap-1">
                    {provider.tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="rounded bg-muted px-1.5 py-0.5 text-[10px] text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                    {provider.reviews.length > 0 && (
                      <span className="rounded bg-amber-50 px-1.5 py-0.5 text-[10px] text-amber-600">
                        후기 {provider.reviews.length}건
                      </span>
                    )}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Map Area */}
      <div className="relative order-1 h-[50%] flex-1 lg:order-2 lg:h-full">
        <NaverMap
          providers={filteredProviders}
          selectedId={selectedId}
          onMarkerClick={handleSelect}
        />

        {/* Top 3 Floating Panel */}
        <div className="absolute left-3 top-3 z-20 hidden flex-col gap-1.5 lg:flex">
          <div className="rounded-lg bg-white/95 px-3 py-2 shadow-md backdrop-blur-sm">
            <div className="mb-1.5 flex items-center gap-1 text-[11px] font-bold text-foreground">
              <Trophy className="h-3.5 w-3.5 text-amber-500" />
              평점 TOP 3
            </div>
            {top3.map((p, i) => (
              <button
                key={p.id}
                onClick={() => handleSelect(p.id)}
                className="flex w-full items-center gap-2 rounded py-1 text-left hover:bg-accent/50"
              >
                <span className={`flex h-5 w-5 items-center justify-center rounded-full text-[9px] font-bold text-white ${
                  i === 0 ? "bg-amber-500" : i === 1 ? "bg-gray-400" : "bg-amber-700"
                }`}>
                  {i + 1}
                </span>
                <span className="text-xs font-medium text-foreground">{p.name}</span>
                <span className="inline-flex items-center gap-0.5 text-[10px]">
                  <Star className="h-2.5 w-2.5 fill-amber-400 text-amber-400" />
                  {p.rating}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detail Panel */}
        {showDetail && selectedProvider && (
          <div className="absolute right-0 top-0 z-30 h-full w-full bg-background shadow-xl sm:w-[380px] sm:border-l sm:border-border/60">
            <ProviderDetail
              provider={selectedProvider}
              onClose={() => setShowDetail(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
}
