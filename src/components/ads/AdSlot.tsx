/**
 * Google AdSense 광고 슬롯
 *
 * === AdSense 연동 방법 ===
 * 1. Google AdSense 승인 (https://adsense.google.com)
 * 2. layout.tsx <head>에 AdSense 스크립트 추가:
 *    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-XXXXXXXX" crossorigin="anonymous" />
 * 3. ADSENSE_CLIENT_ID를 실제 값으로 교체
 * 4. IS_PRODUCTION을 true로 변경
 * 5. Auto Ads도 AdSense 대시보드에서 켜기 (추가 수익)
 */

export const ADSENSE_CLIENT_ID = "ca-pub-6524877471660554";
/**
 * 광고 실제 노출 여부 플래그.
 * - false: 플레이스홀더만 표시 (AdSense 스크립트도 로드하지 않음 → 모바일 TBT 절감)
 * - true: 실제 광고 + AdSense 스크립트 로드
 */
export const IS_PRODUCTION = false;

type AdFormat =
  | "horizontal"     // 가로 배너 (728x90) — 섹션 사이
  | "rectangle"      // 직사각형 (300x250) — 사이드바
  | "large-rectangle" // 큰 직사각형 (336x280) — 본문 내
  | "leaderboard"    // 리더보드 (970x90) — 페이지 상단/하단
  | "in-article"     // 본문 내 반응형
  | "in-feed"        // 피드 리스트 내
  | "multiplex"      // 멀티플렉스 (추천형)
  | "anchor"         // 앵커 (하단 고정)
  | "auto";          // 자동

const formatConfig: Record<AdFormat, { style: React.CSSProperties; label: string }> = {
  horizontal: { style: { minHeight: 90 }, label: "Banner 728×90" },
  rectangle: { style: { minHeight: 250, maxWidth: 336 }, label: "Rectangle 300×250" },
  "large-rectangle": { style: { minHeight: 280 }, label: "Large Rect 336×280" },
  leaderboard: { style: { minHeight: 90 }, label: "Leaderboard 970×90" },
  "in-article": { style: { minHeight: 120 }, label: "In-Article" },
  "in-feed": { style: { minHeight: 80 }, label: "In-Feed" },
  multiplex: { style: { minHeight: 200 }, label: "Multiplex" },
  anchor: { style: { height: 50 }, label: "Anchor" },
  auto: { style: { minHeight: 100 }, label: "Auto" },
};

export function AdSlot({
  slot,
  format = "auto",
  className = "",
  responsive = true,
}: {
  slot: string;
  format?: AdFormat;
  className?: string;
  responsive?: boolean;
}) {
  const config = formatConfig[format];

  if (IS_PRODUCTION) {
    return (
      <div className={`ad-container ${className}`} aria-label="광고">
        <ins
          className="adsbygoogle"
          style={{ display: "block", ...config.style }}
          data-ad-client={ADSENSE_CLIENT_ID}
          data-ad-slot={slot}
          data-ad-format={responsive ? "auto" : undefined}
          data-full-width-responsive={responsive ? "true" : undefined}
        />
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center rounded border border-dashed border-border/40 bg-muted/15 text-[10px] text-muted-foreground/30 ${className}`}
      style={config.style}
      data-ad-slot={slot}
      aria-label="광고"
    >
      AD · {config.label}
    </div>
  );
}

/** 블로그/가이드 피드 사이에 삽입 */
export function InFeedAd({ slot }: { slot: string }) {
  return (
    <div className="rounded-xl border border-dashed border-border/40 bg-muted/10 p-3">
      <AdSlot slot={slot} format="in-feed" />
    </div>
  );
}

/** 블로그 본문 중간에 삽입 */
export function InArticleAd({ slot }: { slot: string }) {
  return (
    <div className="my-6">
      <AdSlot slot={slot} format="in-article" />
    </div>
  );
}

/** 페이지 하단 고정 앵커 광고 (모바일 최적) */
export function AnchorAd({ slot }: { slot: string }) {
  if (IS_PRODUCTION) {
    return null; // Auto Ads에서 자동 처리
  }
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 flex h-[50px] items-center justify-center border-t border-border/40 bg-background/95 text-[10px] text-muted-foreground/30 backdrop-blur-sm lg:hidden">
      AD · Mobile Anchor · {slot}
    </div>
  );
}

/** 사이드바 고정 광고 (데스크톱) */
export function StickySidebarAd({ slot }: { slot: string }) {
  return (
    <div className="sticky top-20">
      <AdSlot slot={slot} format="rectangle" />
    </div>
  );
}
