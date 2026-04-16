"use client";

import { useState } from "react";
import { Phone, Calendar, MapPin, MessageSquare, Check, Clock, User } from "lucide-react";

interface PartnerInquiry {
  id: string;
  name: string;
  phone: string;
  region: string;
  size: string;
  moveDate: string;
  message: string;
  status: "new" | "contacted" | "quoted" | "completed" | "cancelled";
  createdAt: string;
}

const dummyInquiries: PartnerInquiry[] = [
  { id: "pi1", name: "김민수", phone: "010-1234-5678", region: "서울 강남구", size: "32평", moveDate: "2026-05-01", message: "5월 1일 입주 예정인데 견적 부탁드립니다. 베란다 확장입니다.", status: "new", createdAt: "2026-04-16 14:30" },
  { id: "pi2", name: "최수아", phone: "010-4567-8901", region: "서울 마포구", size: "25평", moveDate: "2026-05-10", message: "마포에서 입주청소 해주실 수 있나요? 평일 오전 희망합니다.", status: "new", createdAt: "2026-04-16 13:15" },
  { id: "pi3", name: "강하은", phone: "010-8901-2345", region: "서울 서초구", size: "48평", moveDate: "2026-04-22", message: "48평 대형 평수인데 가능한가요? 견적 부탁드립니다.", status: "new", createdAt: "2026-04-16 11:00" },
  { id: "pi4", name: "박지훈", phone: "010-3456-7890", region: "서울 송파구", size: "42평", moveDate: "2026-04-25", message: "4월 25일 입주인데 그 전에 가능한가요?", status: "contacted", createdAt: "2026-04-15 16:20" },
  { id: "pi5", name: "정우진", phone: "010-5678-9012", region: "경기 분당구", size: "34평", moveDate: "2026-04-28", message: "분당 지역도 출장 가능한지 문의드립니다.", status: "quoted", createdAt: "2026-04-14 09:45" },
  { id: "pi6", name: "이서연", phone: "010-2345-6789", region: "서울 성동구", size: "28평", moveDate: "2026-04-20", message: "성수동 신축인데 입주청소 부탁드려요.", status: "completed", createdAt: "2026-04-12 10:30" },
  { id: "pi7", name: "한예진", phone: "010-6789-0123", region: "서울 강동구", size: "30평", moveDate: "2026-05-05", message: "청소 + 줄눈 세트로 가능한가요?", status: "contacted", createdAt: "2026-04-11 14:00" },
];

const statusConfig: Record<string, { label: string; color: string; bg: string }> = {
  new: { label: "새 문의", color: "text-red-700", bg: "bg-red-100" },
  contacted: { label: "연락완료", color: "text-blue-700", bg: "bg-blue-100" },
  quoted: { label: "견적발송", color: "text-purple-700", bg: "bg-purple-100" },
  completed: { label: "계약완료", color: "text-emerald-700", bg: "bg-emerald-100" },
  cancelled: { label: "취소", color: "text-gray-500", bg: "bg-gray-100" },
};

export default function PartnerInquiries() {
  const [inquiries, setInquiries] = useState(dummyInquiries);
  const [filter, setFilter] = useState<string>("all");

  const filtered = filter === "all" ? inquiries : inquiries.filter((i) => i.status === filter);
  const newCount = inquiries.filter((i) => i.status === "new").length;

  function updateStatus(id: string, status: PartnerInquiry["status"]) {
    setInquiries((prev) => prev.map((i) => (i.id === id ? { ...i, status } : i)));
  }

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground">
          고객 문의
          {newCount > 0 && (
            <span className="ml-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-500 text-xs font-bold text-white">
              {newCount}
            </span>
          )}
        </h1>
        <p className="text-xs text-muted-foreground">고객 문의를 확인하고 빠르게 응대하세요</p>
      </div>

      {/* Filters */}
      <div className="mb-4 flex flex-wrap gap-1.5">
        {[
          { v: "all", l: `전체 (${inquiries.length})` },
          { v: "new", l: `새 문의 (${inquiries.filter((i) => i.status === "new").length})` },
          { v: "contacted", l: "연락완료" },
          { v: "quoted", l: "견적발송" },
          { v: "completed", l: "계약완료" },
        ].map((opt) => (
          <button
            key={opt.v}
            onClick={() => setFilter(opt.v)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              filter === opt.v ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            {opt.l}
          </button>
        ))}
      </div>

      {/* Inquiry List */}
      <div className="flex flex-col gap-3">
        {filtered.map((inq) => {
          const sc = statusConfig[inq.status];
          return (
            <div key={inq.id} className={`rounded-xl border bg-card p-4 ${inq.status === "new" ? "border-red-200 bg-red-50/20" : "border-border/60"}`}>
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4 text-muted-foreground" />
                    <span className="text-base font-bold text-foreground">{inq.name}</span>
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-semibold ${sc.bg} ${sc.color}`}>
                      {sc.label}
                    </span>
                  </div>
                  <div className="mt-2 flex flex-wrap gap-3 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <Phone className="h-3 w-3" />
                      {inq.phone}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {inq.region} · {inq.size}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      입주 {inq.moveDate}
                    </span>
                  </div>
                </div>
                <span className="text-[10px] text-muted-foreground">{inq.createdAt}</span>
              </div>

              {/* Message */}
              <div className="mt-3 rounded-lg bg-muted/30 p-3">
                <p className="text-xs leading-relaxed text-muted-foreground">{inq.message}</p>
              </div>

              {/* Actions */}
              <div className="mt-3 flex flex-wrap gap-2">
                <a
                  href={`tel:${inq.phone}`}
                  className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-1.5 text-[11px] font-semibold text-primary-foreground hover:bg-primary/90"
                >
                  <Phone className="h-3 w-3" />
                  전화하기
                </a>
                {inq.status === "new" && (
                  <button
                    onClick={() => updateStatus(inq.id, "contacted")}
                    className="rounded-lg bg-blue-50 px-3 py-1.5 text-[11px] font-medium text-blue-700 hover:bg-blue-100"
                  >
                    연락완료 처리
                  </button>
                )}
                {inq.status === "contacted" && (
                  <button
                    onClick={() => updateStatus(inq.id, "quoted")}
                    className="rounded-lg bg-purple-50 px-3 py-1.5 text-[11px] font-medium text-purple-700 hover:bg-purple-100"
                  >
                    견적발송 처리
                  </button>
                )}
                {(inq.status === "contacted" || inq.status === "quoted") && (
                  <button
                    onClick={() => updateStatus(inq.id, "completed")}
                    className="rounded-lg bg-emerald-50 px-3 py-1.5 text-[11px] font-medium text-emerald-700 hover:bg-emerald-100"
                  >
                    계약완료
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
