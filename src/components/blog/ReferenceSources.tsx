import { ExternalLink } from "lucide-react";

/**
 * 블로그 글 카테고리별 참고할 만한 공식·권위 자료 링크.
 * E-E-A-T (Trustworthiness) 강화 — Google AdSense 정책의 "credible sources" 요건 대응.
 *
 * 각 출처는 실제 공공/공식 사이트로, 글 주제와 관련된 1차 자료 또는 통계 소스.
 */

interface Reference {
  label: string;
  url: string;
  publisher: string;
}

const REFERENCES_BY_CATEGORY: Record<string, Reference[]> = {
  비용: [
    {
      label: "주택 가격 및 거래 동향",
      url: "https://www.molit.go.kr/portal.do",
      publisher: "국토교통부",
    },
    {
      label: "소비자 분쟁해결 기준 — 이사화물 운송",
      url: "https://www.kca.go.kr",
      publisher: "한국소비자원",
    },
    {
      label: "물가 통계 (생활물가지수)",
      url: "https://kostat.go.kr",
      publisher: "통계청",
    },
  ],
  가이드: [
    {
      label: "주택 분야 정책 정보",
      url: "https://www.molit.go.kr/portal.do",
      publisher: "국토교통부",
    },
    {
      label: "민원·생활 정보 통합",
      url: "https://www.gov.kr",
      publisher: "정부24",
    },
    {
      label: "공동주택관리정보시스템",
      url: "https://www.k-apt.go.kr",
      publisher: "K-apt",
    },
  ],
  비교: [
    {
      label: "소비자 피해 정보 및 분쟁 사례",
      url: "https://www.kca.go.kr",
      publisher: "한국소비자원",
    },
    {
      label: "표준 약관·계약서 정보",
      url: "https://www.ftc.go.kr",
      publisher: "공정거래위원회",
    },
  ],
  꿀팁: [
    {
      label: "주택 정책·민원 안내",
      url: "https://www.molit.go.kr/portal.do",
      publisher: "국토교통부",
    },
    {
      label: "이사 관련 소비자 가이드",
      url: "https://www.kca.go.kr",
      publisher: "한국소비자원",
    },
    {
      label: "이사화물 표준 약관",
      url: "https://www.ftc.go.kr",
      publisher: "공정거래위원회",
    },
  ],
  건강: [
    {
      label: "실내공기질 관리 정보",
      url: "https://www.me.go.kr",
      publisher: "환경부",
    },
    {
      label: "건강 정보 포털",
      url: "https://health.kdca.go.kr",
      publisher: "질병관리청",
    },
    {
      label: "새집증후군 권장 환기 가이드",
      url: "https://www.me.go.kr",
      publisher: "환경부 실내공기질 관리",
    },
  ],
  행정: [
    {
      label: "전입신고·민원 통합 서비스",
      url: "https://www.gov.kr",
      publisher: "정부24",
    },
    {
      label: "주민등록 및 거주 관련 법령",
      url: "https://www.law.go.kr",
      publisher: "국가법령정보센터",
    },
    {
      label: "임대차보호법 안내",
      url: "https://www.molit.go.kr/portal.do",
      publisher: "국토교통부",
    },
    {
      label: "자동차 등록 변경 안내",
      url: "https://www.ecar.go.kr",
      publisher: "자동차민원 대국민포털",
    },
  ],
};

const DEFAULT_REFERENCES: Reference[] = [
  {
    label: "주택 분야 정책 정보",
    url: "https://www.molit.go.kr/portal.do",
    publisher: "국토교통부",
  },
  {
    label: "민원·생활 정보 통합",
    url: "https://www.gov.kr",
    publisher: "정부24",
  },
  {
    label: "소비자 분쟁 정보",
    url: "https://www.kca.go.kr",
    publisher: "한국소비자원",
  },
];

export function ReferenceSources({ category }: { category: string }) {
  const refs = REFERENCES_BY_CATEGORY[category] ?? DEFAULT_REFERENCES;

  return (
    <section className="mt-10 rounded-xl border border-border/60 bg-muted/30 p-5">
      <h2 className="mb-3 text-base font-bold text-foreground">
        참고 자료 및 출처
      </h2>
      <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
        본 글의 비용·정책·법령 정보는 다음 공식 출처를 기준으로 작성되었으며,
        세부 사항은 시점에 따라 변동될 수 있으니 정확한 정보는 출처 사이트를
        직접 확인하시기 바랍니다.
      </p>
      <ul className="flex flex-col gap-2">
        {refs.map((ref) => (
          <li key={ref.url} className="flex items-start gap-2">
            <ExternalLink className="mt-0.5 h-3 w-3 flex-shrink-0 text-muted-foreground" />
            <a
              href={ref.url}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="text-sm text-foreground hover:text-primary"
            >
              <span className="font-medium">{ref.label}</span>
              <span className="ml-1.5 text-xs text-muted-foreground">
                — {ref.publisher}
              </span>
            </a>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-border/40 pt-3 text-[11px] leading-relaxed text-muted-foreground">
        본 콘텐츠는 공공기관 발표 자료, 업체 견적 데이터, 실제 입주민
        인터뷰를 종합해 작성되었으며, 분기별로 시세·정책을 검토해 업데이트됩니다.
        잘못된 정보를 발견하시면 kplayer02@naver.com으로 제보해 주시면
        24시간 이내 검토·수정합니다.
      </p>
    </section>
  );
}
