"use client";

import { MapPin } from "lucide-react";
import type { Provider } from "@/types/provider";

interface MapPlaceholderProps {
  providers: Provider[];
  selectedId: string | null;
  onMarkerClick: (id: string) => void;
}

export function MapPlaceholder({
  providers,
  selectedId,
  onMarkerClick,
}: MapPlaceholderProps) {
  return (
    <div className="relative h-full w-full bg-[#f0ebe3] overflow-hidden">
      {/* Grid lines to simulate map */}
      <div className="absolute inset-0 opacity-10">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`h-${i}`}
            className="absolute left-0 right-0 border-b border-foreground/30"
            style={{ top: `${(i + 1) * 5}%` }}
          />
        ))}
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={`v-${i}`}
            className="absolute top-0 bottom-0 border-r border-foreground/30"
            style={{ left: `${(i + 1) * 5}%` }}
          />
        ))}
      </div>

      {/* Simulated road lines */}
      <div className="absolute top-[30%] left-0 right-0 h-1 bg-gray-300/50" />
      <div className="absolute top-[60%] left-0 right-0 h-1 bg-gray-300/50" />
      <div className="absolute left-[25%] top-0 bottom-0 w-1 bg-gray-300/50" />
      <div className="absolute left-[55%] top-0 bottom-0 w-1 bg-gray-300/50" />
      <div className="absolute left-[80%] top-0 bottom-0 w-1 bg-gray-300/50" />

      {/* Provider markers */}
      {providers.map((provider, index) => {
        const isSelected = provider.id === selectedId;
        // Distribute markers across the map area
        const positions = [
          { x: 15, y: 20 }, { x: 45, y: 15 }, { x: 75, y: 25 },
          { x: 25, y: 45 }, { x: 55, y: 40 }, { x: 85, y: 50 },
          { x: 20, y: 70 }, { x: 50, y: 65 }, { x: 70, y: 75 },
          { x: 35, y: 30 }, { x: 65, y: 55 }, { x: 15, y: 55 },
          { x: 40, y: 80 }, { x: 80, y: 35 }, { x: 60, y: 20 },
          { x: 30, y: 60 }, { x: 90, y: 70 },
        ];
        const pos = positions[index % positions.length];

        return (
          <button
            key={provider.id}
            onClick={() => onMarkerClick(provider.id)}
            className="absolute z-10 transition-all duration-200 hover:z-20"
            style={{
              left: `${pos.x}%`,
              top: `${pos.y}%`,
              transform: "translate(-50%, -100%)",
            }}
          >
            {/* Marker */}
            <div
              className={`flex flex-col items-center ${
                isSelected ? "scale-125" : "hover:scale-110"
              } transition-transform`}
            >
              <div
                className={`rounded-lg px-2 py-1 text-[10px] font-bold shadow-md whitespace-nowrap ${
                  isSelected
                    ? "bg-primary text-primary-foreground"
                    : "bg-white text-foreground"
                }`}
              >
                {provider.name}
              </div>
              <MapPin
                className={`h-6 w-6 -mt-0.5 drop-shadow-md ${
                  isSelected
                    ? "text-primary fill-primary"
                    : "text-red-500 fill-red-500"
                }`}
              />
            </div>
          </button>
        );
      })}

      {/* Kakao Map integration notice */}
      <div className="absolute bottom-3 left-3 rounded-lg bg-white/90 px-3 py-2 text-xs text-muted-foreground shadow-sm backdrop-blur-sm">
        <span className="font-medium">카카오맵 연동 예정</span> · 현재 미리보기 모드
      </div>
    </div>
  );
}
