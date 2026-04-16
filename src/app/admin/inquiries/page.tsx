"use client";

import { useState } from "react";
import { dummyInquiries, type Inquiry } from "@/data/inquiries";
import { Phone, Calendar, MapPin, MessageSquare } from "lucide-react";

export default function AdminInquiries() {
  const [inquiries, setInquiries] = useState<Inquiry[]>(dummyInquiries);
  const [statusFilter, setStatusFilter] = useState<"all" | "pending" | "in-progress" | "completed">("all");

  const filtered = statusFilter === "all"
    ? inquiries
    : inquiries.filter((i) => i.status === statusFilter);

  function changeStatus(id: string, newStatus: Inquiry["status"]) {
    setInquiries((prev) =>
      prev.map((i) => (i.id === id ? { ...i, status: newStatus } : i))
    );
  }

  const pendingCount = inquiries.filter((i) => i.status === "pending").length;
  const inProgressCount = inquiries.filter((i) => i.status === "in-progress").length;
  const completedCount = inquiries.filter((i) => i.status === "completed").length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground">고객 문의 관리</h1>
        <p className="text-xs text-muted-foreground">총 {inquiries.length}건</p>
      </div>

      {/* Status Summary */}
      <div className="mb-4 flex gap-2">
        {[
          { value: "all" as const, label: "전체", count: inquiries.length },
          { value: "pending" as const, label: "대기", count: pendingCount },
          { value: "in-progress" as const, label: "처리중", count: inProgressCount },
          { value: "completed" as const, label: "완료", count: completedCount },
        ].map((opt) => (
          <button
            key={opt.value}
            onClick={() => setStatusFilter(opt.value)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              statusFilter === opt.value
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {opt.label} ({opt.count})
          </button>
        ))}
      </div>

      {/* Inquiry Cards */}
      <div className="flex flex-col gap-3">
        {filtered.map((inq) => (
          <div
            key={inq.id}
            className="rounded-xl border border-border/60 bg-card p-4"
          >
            <div className="flex items-start justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-base font-bold text-foreground">
                    {inq.customerName}
                  </span>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold text-primary">
                    {inq.service}
                  </span>
                  <StatusBadge status={inq.status} />
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Phone className="h-3 w-3" />
                    {inq.phone}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3 w-3" />
                    {inq.region} · {inq.apartmentSize}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    입주 희망: {inq.moveDate}
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-muted-foreground">{inq.createdAt}</span>
            </div>

            {/* Message */}
            <div className="mt-3 rounded-lg bg-muted/30 p-3">
              <div className="flex items-start gap-2">
                <MessageSquare className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-muted-foreground" />
                <p className="text-xs leading-relaxed text-muted-foreground">
                  {inq.message}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-3 flex gap-2">
              {inq.status !== "pending" && (
                <button
                  onClick={() => changeStatus(inq.id, "pending")}
                  className="rounded-lg bg-amber-50 px-3 py-1.5 text-[11px] font-medium text-amber-700 hover:bg-amber-100"
                >
                  대기로 변경
                </button>
              )}
              {inq.status !== "in-progress" && (
                <button
                  onClick={() => changeStatus(inq.id, "in-progress")}
                  className="rounded-lg bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-700 hover:bg-blue-100"
                >
                  처리중으로 변경
                </button>
              )}
              {inq.status !== "completed" && (
                <button
                  onClick={() => changeStatus(inq.id, "completed")}
                  className="rounded-lg bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700 hover:bg-emerald-100"
                >
                  완료 처리
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const s: Record<string, string> = {
    pending: "bg-amber-100 text-amber-700",
    "in-progress": "bg-blue-100 text-blue-700",
    completed: "bg-emerald-100 text-emerald-700",
  };
  const l: Record<string, string> = { pending: "대기", "in-progress": "처리중", completed: "완료" };
  return <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${s[status]}`}>{l[status]}</span>;
}
