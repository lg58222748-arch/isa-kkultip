import type { Metadata } from "next";
import "./globals.css";
import { FloatingMatchButton } from "@/components/FloatingMatchButton";

export const metadata: Metadata = {
  title: {
    default: "이사꿀팁 - 이사 순서 가이드 & 체크리스트",
    template: "%s | 이사꿀팁",
  },
  description:
    "새아파트, 구축아파트 이사할 때 뭐부터 해야 할지 모르겠다면? 단계별 이사 순서 가이드와 체크리스트로 쉽고 빠르게 준비하세요. 입주청소, 줄눈시공, 탄성코트 등 모든 정보를 한곳에서.",
  keywords: [
    "이사",
    "이사꿀팁",
    "이사 순서",
    "이사 체크리스트",
    "입주청소",
    "줄눈시공",
    "새아파트 이사",
    "구축아파트 이사",
    "탄성코트",
    "새집증후군",
    "나노코팅",
    "포장이사",
  ],
  openGraph: {
    title: "이사꿀팁 - 이사 순서 가이드 & 체크리스트",
    description:
      "이사할 때 뭐부터 해야 할지 모르겠다면? 단계별 가이드로 쉽게 준비하세요.",
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="h-full antialiased">
      <head>
        <meta name="google-site-verification" content="rg-w1sgAAAU7c5sOivyOUCOTqFlEdX00vkEP0_AIJ_I" />
        <meta name="naver-site-verification" content="49944c5bc078683774a958e77243566a5c901e48" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6524877471660554" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          as="style"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingMatchButton />
      </body>
    </html>
  );
}

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/95 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2">
          <span className="text-2xl">🍯</span>
          <span className="text-lg font-bold tracking-tight text-foreground">
            이사꿀팁
          </span>
        </a>
        <nav className="hidden items-center gap-6 sm:flex">
          <a
            href="/new-apartment"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            새아파트 이사
          </a>
          <a
            href="/old-apartment"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            구축아파트 이사
          </a>
          <a
            href="/map"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            업체 지도
          </a>
          <a
            href="/community"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            맘카페
          </a>
          <a
            href="/blog"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            블로그
          </a>
          <a
            href="/partner"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            파트너
          </a>
          <a
            href="/register"
            className="rounded-lg bg-primary px-3.5 py-1.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            업체 입점
          </a>
        </nav>
        <MobileMenuButton />
      </div>
    </header>
  );
}

function MobileMenuButton() {
  return (
    <div className="sm:hidden">
      <a href="/blog" className="rounded-md px-2 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">블로그</a>
      <a href="/register" className="rounded-md bg-primary px-2.5 py-1.5 text-xs font-semibold text-primary-foreground">입점</a>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2">
            <span className="text-xl">🍯</span>
            <span className="font-bold text-foreground">이사꿀팁</span>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-muted-foreground">
            이사할 때 필요한 모든 정보를 한곳에서.
            <br />
            단계별 가이드와 체크리스트로 스마트하게 이사 준비하세요.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground sm:gap-6">
            <a href="/new-apartment" className="hover:text-foreground">새아파트 가이드</a>
            <a href="/old-apartment" className="hover:text-foreground">구축아파트 가이드</a>
            <a href="/map" className="hover:text-foreground">업체 지도</a>
            <a href="/blog" className="hover:text-foreground">블로그</a>
            <a href="/register" className="hover:text-foreground">업체 입점</a>
          </div>
          <p className="text-xs text-muted-foreground/60">
            &copy; 2026 이사꿀팁. 모든 비용 정보는 참고용이며 실제와 다를 수
            있습니다.
            <span className="mx-1">·</span>
            <a href="/admin" className="hover:text-muted-foreground">관리자</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
