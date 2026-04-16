"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { MapPin } from "lucide-react";
import type { Provider } from "@/types/provider";

declare global {
  interface Window {
    kakao: any;
  }
}

interface KakaoMapProps {
  providers: Provider[];
  selectedId: string | null;
  onMarkerClick: (id: string) => void;
}

export function KakaoMap({ providers, selectedId, onMarkerClick }: KakaoMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const markersRef = useRef<any[]>([]);
  const overlaysRef = useRef<any[]>([]);

  const stableOnMarkerClick = useCallback(onMarkerClick, [onMarkerClick]);

  // 카카오맵 스크립트 로드
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_KAKAO_MAP_KEY;
    if (!apiKey || apiKey.includes("여기에")) {
      setError(true);
      return;
    }

    // 이미 로드됨
    if (window.kakao?.maps?.Map) {
      setLoaded(true);
      return;
    }

    // 이미 스크립트 태그가 있으면 기다림
    if (window.kakao?.maps) {
      window.kakao.maps.load(() => setLoaded(true));
      return;
    }

    const script = document.createElement("script");
    script.src = `//dapi.kakao.com/v2/maps/sdk.js?appkey=${apiKey}&autoload=false&libraries=clusterer`;
    script.async = true;
    script.onload = () => {
      window.kakao.maps.load(() => {
        setLoaded(true);
      });
    };
    script.onerror = () => {
      setError(true);
    };
    document.head.appendChild(script);
  }, []);

  // 지도 초기화
  useEffect(() => {
    if (!loaded || !mapRef.current || mapInstanceRef.current) return;

    const kakao = window.kakao;
    const map = new kakao.maps.Map(mapRef.current, {
      center: new kakao.maps.LatLng(37.5012, 127.0),
      level: 9,
    });

    const zoomControl = new kakao.maps.ZoomControl();
    map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

    mapInstanceRef.current = map;
  }, [loaded]);

  // 마커 렌더링
  useEffect(() => {
    const map = mapInstanceRef.current;
    if (!map || !loaded) return;
    const kakao = window.kakao;

    // 기존 제거
    markersRef.current.forEach((m) => m.setMap(null));
    overlaysRef.current.forEach((o) => o.setMap(null));
    markersRef.current = [];
    overlaysRef.current = [];

    // 겹침 방지: 같은 좌표 마커를 원형으로 흩뿌림
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
      const pos = spreadPosition(provider.lat, provider.lng);
      const position = new kakao.maps.LatLng(pos.lat, pos.lng);
      const isSelected = provider.id === selectedId;

      const marker = new kakao.maps.Marker({ position, map });

      const content = document.createElement("div");
      content.innerHTML = `
        <div style="
          padding: 3px 8px;
          background: ${isSelected ? "#03C75A" : "white"};
          color: ${isSelected ? "white" : "#222"};
          border-radius: 6px;
          font-size: 11px;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(0,0,0,0.18);
          white-space: nowrap;
          cursor: pointer;
          font-family: 'Pretendard Variable', sans-serif;
          border: 1px solid ${isSelected ? "#03C75A" : "#e5e5e5"};
        ">
          ${provider.name}
          <span style="color:${isSelected ? "#fde68a" : "#f59e0b"};margin-left:3px">★${provider.rating}</span>
        </div>
      `;
      content.style.cursor = "pointer";
      content.onclick = () => stableOnMarkerClick(provider.id);

      const overlay = new kakao.maps.CustomOverlay({
        position,
        content,
        yAnchor: 2.5,
      });
      overlay.setMap(map);

      kakao.maps.event.addListener(marker, "click", () => {
        stableOnMarkerClick(provider.id);
      });

      markersRef.current.push(marker);
      overlaysRef.current.push(overlay);
    });
  }, [loaded, providers, selectedId, stableOnMarkerClick]);

  // 에러 또는 키 없음 → 폴백
  if (error) {
    return (
      <div className="relative flex h-full w-full items-center justify-center bg-[#f0ebe3]">
        <div className="rounded-lg bg-white/90 px-4 py-3 text-center shadow-md">
          <MapPin className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
          <p className="text-sm font-medium text-foreground">카카오맵 로딩 실패</p>
          <p className="mt-1 text-xs text-muted-foreground">API 키를 확인하거나 도메인을 등록해주세요</p>
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
