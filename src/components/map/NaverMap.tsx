"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MapPin } from "lucide-react";
import type { Provider } from "@/types/provider";

declare global {
  interface Window {
    naver: any;
  }
}

interface NaverMapProps {
  providers: Provider[];
  selectedId: string | null;
  onMarkerClick: (id: string) => void;
}

export function NaverMap({ providers, selectedId, onMarkerClick }: NaverMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  // 모든 마커를 한번만 생성하고 재사용
  const allMarkersRef = useRef<Map<string, any>>(new Map());
  const allOverlaysRef = useRef<Map<string, any>>(new Map());
  const initializedRef = useRef(false);
  const stableOnMarkerClick = useCallback(onMarkerClick, [onMarkerClick]);

  // 네이버맵 스크립트 로드
  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_NAVER_MAP_CLIENT_ID;
    if (!clientId) { setError(true); return; }
    if (window.naver?.maps?.Map) { setLoaded(true); return; }

    const script = document.createElement("script");
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=${clientId}`;
    script.async = true;
    script.onload = () => setLoaded(true);
    script.onerror = () => setError(true);
    document.head.appendChild(script);
  }, []);

  // 지도 초기화 + GPS
  useEffect(() => {
    if (!loaded || !mapRef.current || mapInstanceRef.current) return;
    const naver = window.naver;

    const map = new naver.maps.Map(mapRef.current, {
      center: new naver.maps.LatLng(37.5, 127.0),
      zoom: 12,
      zoomControl: true,
      zoomControlOptions: { position: naver.maps.Position.TOP_RIGHT },
    });
    mapInstanceRef.current = map;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          map.setCenter(new naver.maps.LatLng(pos.coords.latitude, pos.coords.longitude));
          map.setZoom(13);
        },
        () => {
          fetch("https://ipapi.co/json/")
            .then((r) => r.json())
            .then((data) => {
              if (data.latitude && data.longitude) {
                map.setCenter(new naver.maps.LatLng(data.latitude, data.longitude));
                map.setZoom(12);
              }
            })
            .catch(() => {});
        },
        { timeout: 3000 }
      );
    }
  }, [loaded]);

  // 마커 표시/숨기기 (필터 변경 시 - 가볍게)
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !loaded) return;
    const naver = window.naver;

    const visibleIds = new Set(providers.map((p) => p.id));

    // 기존 마커 숨기기/보이기
    allMarkersRef.current.forEach((marker, id) => {
      const visible = visibleIds.has(id);
      marker.setVisible(visible);
    });

    // 아직 생성 안 된 마커만 새로 생성
    const coordCount: Record<string, number> = {};
    function spreadPosition(lat: number, lng: number) {
      const key = `${lat.toFixed(2)}_${lng.toFixed(2)}`;
      const idx = coordCount[key] || 0;
      coordCount[key] = idx + 1;
      if (idx === 0) return { lat, lng };
      const angle = (idx * 45) % 360;
      const dist = 0.008 + Math.floor(idx / 8) * 0.005;
      return {
        lat: lat + dist * Math.sin((angle * Math.PI) / 180),
        lng: lng + dist * Math.cos((angle * Math.PI) / 180),
      };
    }

    providers.forEach((provider) => {
      if (allMarkersRef.current.has(provider.id)) return; // 이미 있으면 스킵

      const pos = spreadPosition(provider.lat, provider.lng);
      const position = new naver.maps.LatLng(pos.lat, pos.lng);
      const isSelected = provider.id === selectedId;

      const marker = new naver.maps.Marker({
        position,
        map,
      });

      naver.maps.Event.addListener(marker, "click", () => {
        stableOnMarkerClick(provider.id);
      });

      allMarkersRef.current.set(provider.id, marker);
    });
  }, [loaded, providers, selectedId, stableOnMarkerClick]);

  if (error) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-[#f0ebe3]">
        <div className="rounded-lg bg-white/90 px-4 py-3 text-center shadow-md">
          <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">네이버맵 로딩 실패</p>
          <p className="mt-1 text-xs text-muted-foreground">API 키를 확인해주세요</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-full w-full">
      <div ref={mapRef} className="h-full w-full" />
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-muted/50">
          <div className="text-sm text-muted-foreground">지도 로딩 중...</div>
        </div>
      )}
    </div>
  );
}
