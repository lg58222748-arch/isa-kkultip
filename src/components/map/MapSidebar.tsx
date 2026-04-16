"use client";

import { Star, Shield, MapPin } from "lucide-react";
import type { Provider } from "@/types/provider";

interface MapSidebarProps {
  providers: Provider[];
  selectedId: string | null;
  categoryFilter: string;
  onCategoryChange: (category: string) => void;
  onProviderClick: (id: string) => void;
}

const categoryOptions = [
  { value: "all", label: "전체" },
  { value: "inspection", label: "사전점검" },
  { value: "elastic-coat", label: "탄성코트" },
  { value: "grout", label: "줄눈시공" },
  { value: "cleaning", label: "입주청소" },
  { value: "sick-house", label: "새집증후군" },
  { value: "coating", label: "나노코팅" },
  { value: "moving", label: "포장이사" },
];

export function MapSidebar({
  providers,
  selectedId,
  categoryFilter,
  onCategoryChange,
  onProviderClick,
}: MapSidebarProps) {
  return (
    <div className="flex h-full flex-col">
      {/* Category Filter */}
      <div className="border-b border-border/60 p-3">
        <div className="flex flex-wrap gap-1.5">
          {categoryOptions.map((opt) => (
            <button
              key={opt.value}
              onClick={() => onCategoryChange(opt.value)}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                categoryFilter === opt.value
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent hover:text-foreground"
              }`}
            >
              {opt.label}
            </button>
          ))}
        </div>
        <div className="mt-2 text-xs text-muted-foreground">
          {providers.length}개 업체
        </div>
      </div>

      {/* Provider List */}
      <div className="flex-1 overflow-y-auto">
        {providers.map((provider) => {
          const isSelected = provider.id === selectedId;
          return (
            <button
              key={provider.id}
              onClick={() => onProviderClick(provider.id)}
              className={`flex w-full gap-3 border-b border-border/30 p-3 text-left transition-colors ${
                isSelected
                  ? "bg-primary/5 border-l-2 border-l-primary"
                  : "hover:bg-accent/30"
              }`}
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-bold text-muted-foreground">
                {provider.name.charAt(0)}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-foreground">
                    {provider.name}
                  </span>
                  {provider.verified && (
                    <Shield className="h-3.5 w-3.5 text-primary" />
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
                  <span className="inline-flex items-center gap-0.5 text-muted-foreground">
                    <MapPin className="h-3 w-3" />
                    {provider.region[0]}
                  </span>
                  <span className="ml-auto font-bold text-primary">
                    {provider.priceLabel}
                  </span>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
