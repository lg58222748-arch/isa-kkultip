"use client";

import { Star, MessageSquare, ThumbsUp } from "lucide-react";

const reviews = [
  { id: "r1", author: "김**", rating: 5, content: "정말 꼼꼼하게 체크해주셨어요. 보고서도 사진 첨부해서 바로 보내주시고 하자 보수 요청도 대신 해주셔서 너무 편했습니다.", date: "2026-03-15", size: "34평", replied: true, reply: "감사합니다! 꼼꼼한 점검을 위해 항상 노력하겠습니다." },
  { id: "r2", author: "이**", rating: 5, content: "친절하시고 전문적이었습니다. 제가 놓친 부분까지 체크해주셔서 감사했어요.", date: "2026-03-10", size: "25평", replied: false, reply: "" },
  { id: "r3", author: "박**", rating: 5, content: "사전점검 전문가라 믿고 맡겼는데 역시 다르네요. 100개 넘는 항목을 체크해주셨어요.", date: "2026-02-28", size: "42평", replied: true, reply: "믿고 맡겨주셔서 감사합니다. 언제든 문의 주세요!" },
  { id: "r4", author: "최**", rating: 4, content: "전반적으로 만족하지만 시간이 좀 촉박했어요. 그래도 꼼꼼하게 봐주셔서 감사합니다.", date: "2026-02-15", size: "30평", replied: false, reply: "" },
];

export default function PartnerReviews() {
  const avgRating = (reviews.reduce((s, r) => s + r.rating, 0) / reviews.length).toFixed(1);
  const unreplied = reviews.filter((r) => !r.replied).length;

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground">후기 관리</h1>
        <p className="text-xs text-muted-foreground">고객 후기를 확인하고 답변을 달아보세요</p>
      </div>

      {/* Summary */}
      <div className="mb-6 grid gap-3 sm:grid-cols-3">
        <div className="rounded-xl border border-border/60 bg-card p-4 text-center">
          <div className="flex items-center justify-center gap-1">
            <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
            <span className="text-2xl font-bold text-foreground">{avgRating}</span>
          </div>
          <p className="mt-1 text-xs text-muted-foreground">평균 평점</p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-4 text-center">
          <span className="text-2xl font-bold text-foreground">{reviews.length}</span>
          <p className="mt-1 text-xs text-muted-foreground">총 후기 수</p>
        </div>
        <div className="rounded-xl border border-border/60 bg-card p-4 text-center">
          <span className="text-2xl font-bold text-red-500">{unreplied}</span>
          <p className="mt-1 text-xs text-muted-foreground">미답변 후기</p>
        </div>
      </div>

      {/* Review List */}
      <div className="flex flex-col gap-4">
        {reviews.map((review) => (
          <div key={review.id} className={`rounded-xl border bg-card p-4 ${!review.replied ? "border-amber-200" : "border-border/60"}`}>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold text-foreground">{review.author}</span>
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`h-3.5 w-3.5 ${i < review.rating ? "fill-amber-400 text-amber-400" : "text-border"}`} />
                  ))}
                </div>
                <span className="text-[10px] text-muted-foreground">{review.size}</span>
                {!review.replied && (
                  <span className="rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-semibold text-amber-700">답변 필요</span>
                )}
              </div>
              <span className="text-[10px] text-muted-foreground">{review.date}</span>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{review.content}</p>

            {/* Reply */}
            {review.replied && review.reply && (
              <div className="mt-3 rounded-lg bg-primary/5 p-3">
                <div className="flex items-center gap-1 text-[10px] font-semibold text-primary">
                  <ThumbsUp className="h-3 w-3" />
                  업체 답변
                </div>
                <p className="mt-1 text-xs text-muted-foreground">{review.reply}</p>
              </div>
            )}

            {/* Reply Form */}
            {!review.replied && (
              <div className="mt-3">
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="고객 후기에 답변을 남겨보세요..."
                    className="flex-1 rounded-lg border border-input bg-background px-3 py-2 text-xs outline-none focus:border-primary focus:ring-1 focus:ring-primary"
                  />
                  <button className="flex-shrink-0 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:bg-primary/90">
                    답변 등록
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
