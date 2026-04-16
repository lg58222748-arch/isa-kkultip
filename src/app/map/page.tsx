import type { Metadata } from "next";
import { MapPageClient } from "./MapPageClient";

export const metadata: Metadata = {
  title: "업체 지도 - 이사 관련 업체 찾기",
  description:
    "지도에서 내 주변 이사 관련 업체를 찾아보세요. 사전점검, 입주청소, 줄눈시공, 포장이사 등 업체별 평점과 후기를 한눈에 확인할 수 있습니다.",
};

export default function MapPage() {
  return <MapPageClient />;
}
