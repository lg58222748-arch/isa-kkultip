"use client";

import { useState, useEffect } from "react";
import { MapPin, X, Navigation, ArrowRight, ChevronRight } from "lucide-react";
import Link from "next/link";
import type { Regions } from "@/data/regions";

// Process-local cache so the REGIONS chunk is only fetched once per session.
let cachedRegions: Regions | null = null;

export function FloatingMatchButton() {
  const [open, setOpen] = useState(false);
  const [regions, setRegions] = useState<Regions | null>(cachedRegions);
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [bigRegion, setBigRegion] = useState("");
  const [gu, setGu] = useState("");
  const [dong, setDong] = useState("");

  // Lazy-load the ~10KB REGIONS tree only when the user actually opens the
  // picker. Keeps it out of every page's initial bundle / parse pass.
  useEffect(() => {
    if (!open || regions) return;
    let cancelled = false;
    import("@/data/regions").then((mod) => {
      cachedRegions = mod.REGIONS;
      if (!cancelled) setRegions(mod.REGIONS);
    });
    return () => {
      cancelled = true;
    };
  }, [open, regions]);

  function selectBigRegion(r: string) {
    setBigRegion(r);
    setGu("");
    setDong("");
    setStep(2);
  }

  function selectGu(g: string) {
    setGu(g);
    setDong("");
    setStep(3);
  }

  function reset() {
    setStep(1);
    setBigRegion("");
    setGu("");
    setDong("");
  }

  const REGION_KEYS = regions ? Object.keys(regions) : [];
  const guList = regions && bigRegion ? Object.keys(regions[bigRegion] || {}) : [];
  const dongList = regions && bigRegion && gu ? regions[bigRegion]?.[gu] || [] : [];
  const searchQuery = [bigRegion, gu, dong].filter(Boolean).join(" ");

  return (
    <>
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-xl transition-transform hover:scale-105 active:scale-95"
        >
          <Navigation className="h-5 w-5" />
          가까운 업체 찾기
        </button>
      )}

      {open && (
        <div className="fixed bottom-6 right-6 z-50 w-[340px] rounded-2xl border border-border/60 bg-card shadow-2xl">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-border/60 px-4 py-3">
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-primary" />
              <span className="text-sm font-bold text-foreground">가까운 업체 찾기</span>
            </div>
            <button onClick={() => { setOpen(false); reset(); }} className="rounded-lg p-1 text-muted-foreground hover:bg-accent">
              <X className="h-4 w-4" />
            </button>
          </div>

          {/* Breadcrumb */}
          {step > 1 && (
            <div className="flex items-center gap-1 border-b border-border/40 px-4 py-2 text-xs">
              <button onClick={reset} className="text-primary hover:underline">지역선택</button>
              {bigRegion && (
                <>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  <button onClick={() => { setStep(2); setGu(""); setDong(""); }} className={gu ? "text-primary hover:underline" : "font-semibold text-foreground"}>
                    {bigRegion}
                  </button>
                </>
              )}
              {gu && (
                <>
                  <ChevronRight className="h-3 w-3 text-muted-foreground" />
                  <span className="font-semibold text-foreground">{gu}</span>
                </>
              )}
            </div>
          )}

          <div className="p-4">
            {/* Step 1: 시/도 선택 */}
            {step === 1 && (
              <>
                <p className="mb-3 text-xs text-muted-foreground">
                  이사할 <strong className="text-foreground">지역</strong>을 선택하세요
                </p>
                {!regions ? (
                  <div className="grid grid-cols-4 gap-1.5">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div
                        key={i}
                        className="h-8 animate-pulse rounded-lg bg-muted"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-4 gap-1.5">
                    {REGION_KEYS.map((r) => (
                      <button
                        key={r}
                        onClick={() => selectBigRegion(r)}
                        className="rounded-lg border border-border/60 bg-background py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                      >
                        {r}
                      </button>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* Step 2: 구/시 선택 */}
            {step === 2 && (
              <>
                <p className="mb-3 text-xs text-muted-foreground">
                  <strong className="text-foreground">{bigRegion}</strong>의 어느 지역인가요?
                </p>
                <div className="grid grid-cols-3 gap-1.5 max-h-[240px] overflow-y-auto">
                  {guList.map((g) => (
                    <button
                      key={g}
                      onClick={() => selectGu(g)}
                      className="rounded-lg border border-border/60 bg-background py-2 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Step 3: 동 선택 + 매칭 */}
            {step === 3 && (
              <>
                <p className="mb-3 text-xs text-muted-foreground">
                  <strong className="text-foreground">{gu}</strong>에서 동을 선택하세요 (선택사항)
                </p>
                <div className="grid grid-cols-3 gap-1.5 max-h-[160px] overflow-y-auto mb-3">
                  {dongList.map((d) => (
                    <button
                      key={d}
                      onClick={() => setDong(d)}
                      className={`rounded-lg border py-2 text-xs font-medium transition-colors ${
                        dong === d
                          ? "border-primary bg-primary/10 text-primary"
                          : "border-border/60 bg-background text-foreground hover:border-primary hover:bg-primary/5"
                      }`}
                    >
                      {d}
                    </button>
                  ))}
                </div>

                <Link
                  href={`/map?region=${encodeURIComponent(searchQuery)}`}
                  onClick={() => { setOpen(false); reset(); }}
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  {searchQuery} 업체 매칭
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <p className="mt-2 text-center text-[10px] text-muted-foreground">
                  허위 리뷰 걱정 없는 가까운 업체만 매칭합니다
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
