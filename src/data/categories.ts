import type { ServiceCategory } from "@/types/guide";

// 시공 순서대로 정렬 (새아파트 기준)
export const categories: ServiceCategory[] = [
  {
    id: "inspection",
    name: "사전점검",
    description: "입주 전 하자 체크",
    icon: "🔍",
  },
  {
    id: "elastic-coat",
    name: "탄성코트",
    description: "결로/곰팡이 방지",
    icon: "🎨",
  },
  {
    id: "grout",
    name: "줄눈시공",
    description: "타일 사이 곰팡이 방지",
    icon: "🔲",
  },
  {
    id: "cleaning",
    name: "입주청소",
    description: "새 보금자리를 깨끗하게",
    icon: "🧹",
  },
  {
    id: "sick-house",
    name: "새집증후군",
    description: "유해물질 제거",
    icon: "🌿",
  },
  {
    id: "coating",
    name: "나노코팅",
    description: "오염 방지 코팅 시공",
    icon: "✨",
  },
  {
    id: "thermal-film",
    name: "단열필름",
    description: "에너지 절약 필름",
    icon: "🪟",
  },
  {
    id: "moving",
    name: "포장이사",
    description: "안전한 짐 이동",
    icon: "📦",
  },
];
