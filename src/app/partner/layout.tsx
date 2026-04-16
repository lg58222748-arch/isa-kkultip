"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Building2,
  MessageSquare,
  Star,
  BarChart3,
  LogOut,
  Lock,
  Menu,
  X,
} from "lucide-react";
import { providers } from "@/data/providers";

const navItems = [
  { href: "/partner", label: "대시보드", icon: LayoutDashboard },
  { href: "/partner/inquiries", label: "고객 문의", icon: MessageSquare },
  { href: "/partner/profile", label: "업체 정보", icon: Building2 },
  { href: "/partner/reviews", label: "후기 관리", icon: Star },
  { href: "/partner/stats", label: "통계", icon: BarChart3 },
];

// 로그인 가능한 업체 (더미 - 실제로는 DB에서 인증)
const DEMO_ACCOUNTS = [
  { id: "p1", code: "입주하자", password: "1234" },
  { id: "p8", code: "줄눈마스터", password: "1234" },
  { id: "p10", code: "클린매직", password: "1234" },
];

export default function PartnerLayout({ children }: { children: React.ReactNode }) {
  const [authed, setAuthed] = useState(false);
  const [providerId, setProviderId] = useState<string | null>(null);
  const [loginCode, setLoginCode] = useState("");
  const [loginPw, setLoginPw] = useState("");
  const [mobileNav, setMobileNav] = useState(false);
  const pathname = usePathname();

  const currentProvider = providers.find((p) => p.id === providerId);

  if (!authed) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-card p-8">
          <div className="mb-6 text-center">
            <Lock className="mx-auto mb-3 h-10 w-10 text-primary" />
            <h1 className="text-lg font-bold text-foreground">파트너 로그인</h1>
            <p className="mt-1 text-xs text-muted-foreground">
              입점 업체 전용 관리 페이지입니다
            </p>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const account = DEMO_ACCOUNTS.find(
                (a) => a.code === loginCode && a.password === loginPw
              );
              if (account) {
                setProviderId(account.id);
                setAuthed(true);
              } else {
                alert("업체명 또는 비밀번호가 틀렸습니다.");
              }
            }}
          >
            <div className="mb-3">
              <label className="mb-1 block text-xs font-medium text-foreground">업체명</label>
              <input
                type="text"
                value={loginCode}
                onChange={(e) => setLoginCode(e.target.value)}
                placeholder="예: 입주하자"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1 block text-xs font-medium text-foreground">비밀번호</label>
              <input
                type="password"
                value={loginPw}
                onChange={(e) => setLoginPw(e.target.value)}
                placeholder="비밀번호"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <button
              type="submit"
              className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
            >
              로그인
            </button>
          </form>
          <div className="mt-5 rounded-lg bg-muted/50 p-3">
            <p className="mb-1.5 text-[10px] font-semibold text-muted-foreground">테스트 계정</p>
            <div className="flex flex-col gap-1 text-[10px] text-muted-foreground">
              <span>입주하자 / 1234</span>
              <span>줄눈마스터 / 1234</span>
              <span>클린매직 / 1234</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-[calc(100vh-4rem)]">
      {/* Desktop Sidebar */}
      <aside className="hidden w-60 flex-shrink-0 border-r border-border/60 bg-muted/20 lg:flex lg:flex-col">
        <div className="border-b border-border/60 p-4">
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
              {currentProvider?.name.charAt(0)}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">{currentProvider?.name}</p>
              <p className="text-[10px] text-muted-foreground">파트너 관리</p>
            </div>
          </div>
        </div>
        <nav className="flex flex-1 flex-col gap-0.5 p-2">
          {navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                  active
                    ? "bg-primary/10 text-primary"
                    : "text-muted-foreground hover:bg-accent hover:text-foreground"
                }`}
              >
                <item.icon className="h-4 w-4" />
                {item.label}
                {item.href === "/partner/inquiries" && (
                  <span className="ml-auto flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white">
                    3
                  </span>
                )}
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-border/60 p-2">
          <button
            onClick={() => { setAuthed(false); setProviderId(null); }}
            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <LogOut className="h-4 w-4" />
            로그아웃
          </button>
        </div>
      </aside>

      {/* Mobile nav */}
      <div className="fixed bottom-0 left-0 right-0 z-50 flex border-t border-border/60 bg-background lg:hidden">
        {navItems.map((item) => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`relative flex flex-1 flex-col items-center gap-0.5 py-2 text-[10px] font-medium ${
                active ? "text-primary" : "text-muted-foreground"
              }`}
            >
              <item.icon className="h-4 w-4" />
              {item.label}
              {item.href === "/partner/inquiries" && (
                <span className="absolute right-1/4 top-1 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-red-500 text-[8px] font-bold text-white">
                  3
                </span>
              )}
            </Link>
          );
        })}
      </div>

      {/* Content */}
      <main className="flex-1 overflow-y-auto p-4 pb-20 sm:p-6 lg:p-8 lg:pb-8">
        {children}
      </main>
    </div>
  );
}
