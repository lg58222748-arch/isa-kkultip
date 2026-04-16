"use client";

import { Eye, Phone, MessageSquare, Star, TrendingUp, Calendar } from "lucide-react";

const weeklyData = [
  { day: "월", views: 18, calls: 1, inquiries: 0 },
  { day: "화", views: 25, calls: 2, inquiries: 1 },
  { day: "수", views: 32, calls: 1, inquiries: 2 },
  { day: "목", views: 22, calls: 3, inquiries: 1 },
  { day: "금", views: 28, calls: 2, inquiries: 1 },
  { day: "토", views: 15, calls: 0, inquiries: 0 },
  { day: "일", views: 12, calls: 0, inquiries: 0 },
];

const monthlyData = [
  { month: "1월", inquiries: 8, completed: 5 },
  { month: "2월", inquiries: 12, completed: 9 },
  { month: "3월", inquiries: 18, completed: 14 },
  { month: "4월", inquiries: 10, completed: 6 },
];

export default function PartnerStats() {
  const totalViews = weeklyData.reduce((s, d) => s + d.views, 0);
  const totalCalls = weeklyData.reduce((s, d) => s + d.calls, 0);
  const totalInquiries = weeklyData.reduce((s, d) => s + d.inquiries, 0);
  const maxViews = Math.max(...weeklyData.map((d) => d.views));

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground">통계</h1>
        <p className="text-xs text-muted-foreground">이번 주 업체 활동 현황입니다</p>
      </div>

      {/* Weekly Summary */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border/60 bg-card p-4">
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-blue-500" />
            <div>
              <p className="text-xs text-muted-foreground">이번 주 조회수</p>
              <p className="text-xl font-bold text-foreground">{totalViews}회</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-4">
          <div className="flex items-center gap-2">
            <Phone className="h-5 w-5 text-emerald-500" />
            <div>
              <p className="text-xs text-muted-foreground">이번 주 전화 연결</p>
              <p className="text-xl font-bold text-foreground">{totalCalls}건</p>
            </div>
          </div>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-4">
          <div className="flex items-center gap-2">
            <MessageSquare className="h-5 w-5 text-primary" />
            <div>
              <p className="text-xs text-muted-foreground">이번 주 문의</p>
              <p className="text-xl font-bold text-foreground">{totalInquiries}건</p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Chart */}
      <div className="mb-6 rounded-xl border border-border/60 bg-card p-5">
        <h2 className="mb-4 text-sm font-bold text-foreground">
          <Calendar className="mr-1 inline h-4 w-4" />
          일별 프로필 조회수
        </h2>
        <div className="flex items-end gap-2">
          {weeklyData.map((d) => (
            <div key={d.day} className="flex flex-1 flex-col items-center gap-1">
              <span className="text-[10px] font-semibold text-foreground">{d.views}</span>
              <div
                className="w-full rounded-t bg-primary/70 transition-all"
                style={{ height: `${Math.max((d.views / maxViews) * 120, 8)}px` }}
              />
              <span className="text-[10px] text-muted-foreground">{d.day}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Monthly Conversion */}
      <div className="rounded-xl border border-border/60 bg-card p-5">
        <h2 className="mb-4 text-sm font-bold text-foreground">
          <TrendingUp className="mr-1 inline h-4 w-4" />
          월별 문의 → 계약 전환
        </h2>
        <div className="flex flex-col gap-3">
          {monthlyData.map((m) => {
            const rate = m.inquiries > 0 ? Math.round((m.completed / m.inquiries) * 100) : 0;
            return (
              <div key={m.month} className="flex items-center gap-3">
                <span className="w-10 text-xs font-medium text-foreground">{m.month}</span>
                <div className="flex-1">
                  <div className="flex h-6 w-full overflow-hidden rounded-full bg-muted">
                    <div
                      className="flex h-full items-center rounded-full bg-primary/80 px-2 text-[10px] font-bold text-primary-foreground"
                      style={{ width: `${Math.max(rate, 10)}%` }}
                    >
                      {rate}%
                    </div>
                  </div>
                </div>
                <span className="w-24 text-right text-[10px] text-muted-foreground">
                  {m.completed}/{m.inquiries}건 계약
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
