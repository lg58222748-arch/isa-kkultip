"use client";

import { MessageSquare, Eye, Phone, Star, TrendingUp, Clock } from "lucide-react";
import Link from "next/link";

export default function PartnerDashboard() {
  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground">파트너 대시보드</h1>
        <p className="text-xs text-muted-foreground">오늘의 현황을 한눈에 확인하세요</p>
      </div>

      {/* Stats */}
      <div className="mb-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={MessageSquare} label="새 문의" value={3} sub="오늘" color="text-red-500" urgent />
        <StatCard icon={Eye} label="프로필 조회" value={127} sub="이번 주" color="text-blue-500" />
        <StatCard icon={Phone} label="전화 연결" value={8} sub="이번 주" color="text-emerald-500" />
        <StatCard icon={Star} label="평균 평점" value={5.0} sub="리뷰 140건" color="text-amber-500" />
      </div>

      {/* Recent Inquiries */}
      <div className="mb-6 rounded-xl border border-border/60 bg-card">
        <div className="flex items-center justify-between border-b border-border/60 px-5 py-3">
          <h2 className="text-sm font-bold text-foreground">
            새로운 고객 문의
            <span className="ml-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">3</span>
          </h2>
          <Link href="/partner/inquiries" className="text-xs text-primary hover:underline">전체보기</Link>
        </div>
        <div className="divide-y divide-border/30">
          {[
            { name: "김민수", service: "입주청소", size: "32평", region: "서울 강남구", date: "2026-05-01", time: "10분 전", phone: "010-1234-5678" },
            { name: "최수아", service: "입주청소", size: "25평", region: "서울 마포구", date: "2026-05-10", time: "1시간 전", phone: "010-4567-8901" },
            { name: "강하은", service: "입주청소", size: "48평", region: "서울 서초구", date: "2026-04-22", time: "3시간 전", phone: "010-8901-2345" },
          ].map((inq, i) => (
            <div key={i} className="flex items-center justify-between px-5 py-3">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-foreground">{inq.name}</span>
                  <span className="rounded bg-primary/10 px-1.5 py-0.5 text-[10px] font-medium text-primary">{inq.service}</span>
                  <span className="text-[10px] text-muted-foreground">{inq.time}</span>
                </div>
                <div className="mt-0.5 text-xs text-muted-foreground">
                  {inq.region} · {inq.size} · 입주 {inq.date}
                </div>
              </div>
              <div className="flex gap-2">
                <a
                  href={`tel:${inq.phone}`}
                  className="rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  전화하기
                </a>
                <button className="rounded-lg border border-border bg-card px-3 py-1.5 text-[11px] font-medium text-foreground hover:bg-accent">
                  상세보기
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions & Recent Reviews */}
      <div className="grid gap-6 lg:grid-cols-2">
        {/* Quick Actions */}
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <h2 className="mb-4 text-sm font-bold text-foreground">빠른 실행</h2>
          <div className="grid grid-cols-2 gap-2">
            <Link href="/partner/profile" className="flex flex-col items-center gap-1.5 rounded-lg border border-border/40 p-3 text-center transition-colors hover:bg-accent/30">
              <TrendingUp className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">프로필 수정</span>
            </Link>
            <Link href="/partner/inquiries" className="flex flex-col items-center gap-1.5 rounded-lg border border-border/40 p-3 text-center transition-colors hover:bg-accent/30">
              <MessageSquare className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">문의 확인</span>
            </Link>
            <Link href="/partner/reviews" className="flex flex-col items-center gap-1.5 rounded-lg border border-border/40 p-3 text-center transition-colors hover:bg-accent/30">
              <Star className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">후기 관리</span>
            </Link>
            <Link href="/partner/stats" className="flex flex-col items-center gap-1.5 rounded-lg border border-border/40 p-3 text-center transition-colors hover:bg-accent/30">
              <Eye className="h-5 w-5 text-primary" />
              <span className="text-xs font-medium">통계 보기</span>
            </Link>
          </div>
        </div>

        {/* Recent Reviews */}
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">최근 후기</h2>
            <Link href="/partner/reviews" className="text-xs text-primary hover:underline">전체보기</Link>
          </div>
          <div className="flex flex-col gap-3">
            {[
              { author: "김**", rating: 5, content: "정말 꼼꼼하게 체크해주셨어요.", date: "2026-03-15" },
              { author: "이**", rating: 5, content: "친절하시고 전문적이었습니다.", date: "2026-03-10" },
            ].map((review, i) => (
              <div key={i} className="rounded-lg bg-muted/30 p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold">{review.author}</span>
                    <div className="flex">
                      {Array.from({ length: review.rating }).map((_, j) => (
                        <Star key={j} className="h-3 w-3 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                  <span className="text-[10px] text-muted-foreground">{review.date}</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Plan Info */}
      <div className="mt-6 rounded-xl border-2 border-primary/20 bg-primary/5 p-5">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary px-2.5 py-0.5 text-[10px] font-bold text-primary-foreground">무료 플랜</span>
              <span className="text-sm font-bold text-foreground">런칭 기념 무료 이용 중</span>
            </div>
            <p className="mt-1 text-xs text-muted-foreground">
              모든 기능을 무료로 이용하실 수 있습니다. 유료 전환 시 사전 안내드립니다.
            </p>
          </div>
          <Clock className="h-8 w-8 text-primary/30" />
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color, urgent }: { icon: React.ElementType; label: string; value: number; sub: string; color: string; urgent?: boolean }) {
  return (
    <div className={`rounded-xl border bg-card p-4 ${urgent ? "border-red-200 bg-red-50/30" : "border-border/60"}`}>
      <div className="flex items-center gap-3">
        <div className={`flex h-10 w-10 items-center justify-center rounded-lg bg-muted ${color}`}>
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <p className="text-xs text-muted-foreground">{label}</p>
          <p className="text-2xl font-bold text-foreground">{value}</p>
          <p className="text-[10px] text-muted-foreground">{sub}</p>
        </div>
      </div>
    </div>
  );
}
