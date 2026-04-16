"use client";

import { Building2, Shield, MessageSquare, TrendingUp, Clock } from "lucide-react";
import { providers } from "@/data/providers";
import { dummyInquiries } from "@/data/inquiries";
import Link from "next/link";

export default function AdminDashboard() {
  const totalProviders = providers.length;
  const verifiedProviders = providers.filter((p) => p.verified).length;
  const totalInquiries = dummyInquiries.length;
  const pendingInquiries = dummyInquiries.filter((i) => i.status === "pending").length;

  // 카테고리별 업체 수
  const categoryCount: Record<string, number> = {};
  for (const p of providers) {
    categoryCount[p.category] = (categoryCount[p.category] || 0) + 1;
  }

  const categoryLabels: Record<string, string> = {
    inspection: "사전점검",
    "elastic-coat": "탄성코트",
    grout: "줄눈시공",
    cleaning: "입주청소",
    "sick-house": "새집증후군",
    coating: "나노코팅",
    "thermal-film": "단열필름",
    moving: "포장이사",
  };

  return (
    <div>
      <h1 className="mb-6 text-xl font-bold text-foreground">대시보드</h1>

      {/* Stats */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatCard icon={Building2} label="총 등록 업체" value={totalProviders} sub="전체" color="text-primary" />
        <StatCard icon={Shield} label="인증 업체" value={verifiedProviders} sub={`${Math.round((verifiedProviders / totalProviders) * 100)}% 인증`} color="text-emerald-500" />
        <StatCard icon={MessageSquare} label="총 고객 문의" value={totalInquiries} sub="이번 달" color="text-blue-500" />
        <StatCard icon={Clock} label="대기중 문의" value={pendingInquiries} sub="처리 필요" color="text-amber-500" />
      </div>

      {/* Category Distribution */}
      <div className="mb-8 rounded-xl border border-border/60 bg-card p-5">
        <h2 className="mb-4 text-sm font-bold text-foreground">카테고리별 업체 현황</h2>
        <div className="flex flex-col gap-2">
          {Object.entries(categoryCount)
            .sort((a, b) => b[1] - a[1])
            .map(([cat, count]) => (
              <div key={cat} className="flex items-center gap-3">
                <span className="w-20 text-xs text-muted-foreground">
                  {categoryLabels[cat] || cat}
                </span>
                <div className="flex-1">
                  <div className="h-5 w-full rounded-full bg-muted">
                    <div
                      className="flex h-5 items-center rounded-full bg-primary/80 px-2 text-[10px] font-bold text-primary-foreground"
                      style={{ width: `${Math.max((count / totalProviders) * 100, 15)}%` }}
                    >
                      {count}개
                    </div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Recent Providers */}
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">최근 등록 업체</h2>
            <Link href="/admin/providers" className="text-xs text-primary hover:underline">전체보기</Link>
          </div>
          <div className="flex flex-col gap-2">
            {providers.slice(-5).reverse().map((p) => (
              <div key={p.id} className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2">
                <div>
                  <span className="text-sm font-medium text-foreground">{p.name}</span>
                  <span className="ml-2 text-[10px] text-muted-foreground">{categoryLabels[p.category]}</span>
                </div>
                <div className="flex items-center gap-2">
                  {p.verified && <Shield className="h-3 w-3 text-primary" />}
                  <span className="text-xs text-muted-foreground">{p.region[0]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Inquiries */}
        <div className="rounded-xl border border-border/60 bg-card p-5">
          <div className="mb-3 flex items-center justify-between">
            <h2 className="text-sm font-bold text-foreground">최근 고객 문의</h2>
            <Link href="/admin/inquiries" className="text-xs text-primary hover:underline">전체보기</Link>
          </div>
          <div className="flex flex-col gap-2">
            {dummyInquiries.slice(0, 5).map((inq) => (
              <div key={inq.id} className="flex items-center justify-between rounded-lg bg-muted/30 px-3 py-2">
                <div>
                  <span className="text-sm font-medium text-foreground">{inq.customerName}</span>
                  <span className="ml-2 text-[10px] text-muted-foreground">{inq.service}</span>
                </div>
                <StatusBadge status={inq.status} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon: Icon, label, value, sub, color }: { icon: React.ElementType; label: string; value: number; sub: string; color: string }) {
  return (
    <div className="rounded-xl border border-border/60 bg-card p-4">
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

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700",
    "in-progress": "bg-blue-100 text-blue-700",
    completed: "bg-emerald-100 text-emerald-700",
  };
  const labels: Record<string, string> = {
    pending: "대기",
    "in-progress": "처리중",
    completed: "완료",
  };
  return (
    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${styles[status]}`}>
      {labels[status]}
    </span>
  );
}
