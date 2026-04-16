"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import type { Provider } from "@/types/provider";

declare global {
  interface Window {
    naver: any;
  }
}

export function MapBanner({
  providers,
  totalCount,
}: {
  providers: Provider[];
  totalCount: number;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
    if (!clientId) return;

    if (window.naver?.maps?.Map) { setLoaded(true); return; }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.onload = () => setLoaded(true);
    document.head.appendChild(script);
  }, []);

  useEffect(() => {
    if (!loaded || !mapRef.current) return;
    const naver = window.naver;

    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.50, 126.95),
      zoom: 11,
      draggable: false,
      scrollWheel: false,
      disableDoubleClickZoom: true,
      keyboardShortcuts: false,
    });

    providers.forEach((p) => {
      const position = new naver.maps.LatLng(p.lat, p.lng);
      new naver.maps.Marker({
        position,
        map,
        icon: {
          content: `<div style="padding:2px 6px;background:white;border-radius:4px;font-size:10px;font-weight:700;box-shadow:0 1px 4px rgba(0,0,0,0.15);white-space:nowrap;font-family:'Pretendard Variable',sans-serif;border:1px solid #e5e5e5;">
            ${p.name} <span style="color:#f59e0b">★${p.rating}</span>
          </div>`,
          anchor: new naver.maps.Point(40, 30),
        },
      });
    });
  }, [loaded, providers]);

  return (
    <Link
      href="/map"
      className="group relative block overflow-hidden rounded-2xl border border-border/60 transition-all hover:border-primary/40 hover:shadow-lg"
    >
      <div className="relative h-[250px] w-full">
        <div ref={mapRef} className="h-full w-full" />
        {!loaded && <div className="absolute inset-0 bg-[#f0ebe3]" />}

        {/* 상단 후킹 */}
        <div className="absolute left-0 right-0 top-0 z-10 bg-gradient-to-b from-black/50 to-transparent px-5 pb-8 pt-4 pointer-events-none">
          <p className="text-xs font-semibold text-white/90 sm:text-sm">
            🔍 이사할 동네를 검색해보세요
          </p>
          <p className="mt-0.5 text-[11px] text-white/60">
            전국 {totalCount}개 업체가 등록되어 있습니다
          </p>
        </div>

        {/* 하단 오버레이 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 p-5 pointer-events-none">
          <div className="flex items-end justify-between">
            <div>
              <h2 className="text-lg font-bold text-white sm:text-xl">
                내 주변 이사 업체 찾기
              </h2>
              <p className="mt-1 text-sm text-white/80">
                가까운 업체를 비교하고 바로 상담하세요
              </p>
            </div>
            <div className="pointer-events-auto flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg transition-transform group-hover:scale-105">
              업체 지도 보기
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
