import type { Metadata } from "next";
import { Shield, Phone, TrendingUp, Users, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "업체 입점 신청 - 이사꿀팁 파트너",
  description:
    "이사꿀팁에 업체를 등록하고 고객 문의를 받아보세요. 런칭 기념 무료 입점 이벤트 진행 중! 사전점검, 입주청소, 줄눈시공, 포장이사 등 이사 관련 모든 업체를 모집합니다.",
};

export default function RegisterPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          <Shield className="h-4 w-4" />
          런칭 기념 무료 입점
        </div>
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          이사꿀팁 파트너 업체를 모집합니다
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground">
          이사를 준비하는 고객이 매일 찾아옵니다.
          <br />
          업체를 등록하시면 고객 문의를 <strong className="text-foreground">전화 또는 DB</strong>로 바로 받아보실 수 있습니다.
        </p>
      </div>

      {/* Benefits */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-center">
          <Users className="h-8 w-8 text-primary" />
          <h3 className="text-sm font-bold">고객 직접 연결</h3>
          <p className="text-xs text-muted-foreground">
            이사 준비 중인 실제 고객의
            <br />문의를 바로 받아보세요
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-center">
          <TrendingUp className="h-8 w-8 text-primary" />
          <h3 className="text-sm font-bold">매출 증대</h3>
          <p className="text-xs text-muted-foreground">
            검색 상위 노출로
            <br />신규 고객을 확보하세요
          </p>
        </div>
        <div className="flex flex-col items-center gap-2 rounded-xl border border-border/60 bg-card p-5 text-center">
          <Phone className="h-8 w-8 text-primary" />
          <h3 className="text-sm font-bold">간편한 문의 수신</h3>
          <p className="text-xs text-muted-foreground">
            전화 연결 또는 DB 전달로
            <br />편하게 상담하세요
          </p>
        </div>
      </div>

      {/* Pricing */}
      <div className="mb-10 rounded-2xl border-2 border-primary/30 bg-primary/5 p-6 text-center">
        <p className="text-xs font-medium text-primary">런칭 기념 특별 혜택</p>
        <div className="mt-2 flex items-center justify-center gap-3">
          <span className="text-2xl font-extrabold text-foreground line-through opacity-40">
            월 99,000원
          </span>
          <span className="text-3xl font-extrabold text-primary">무료</span>
        </div>
        <p className="mt-2 text-xs text-muted-foreground">
          정식 런칭 전까지 모든 기능을 무료로 이용하실 수 있습니다
        </p>
      </div>

      {/* Registration Form */}
      <div className="rounded-2xl border border-border/60 bg-card p-6 sm:p-8">
        <h2 className="mb-6 text-lg font-bold text-foreground">
          입점 신청서
        </h2>
        <form className="flex flex-col gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                업체명 <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="예: 클린매직"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                대표자명 <span className="text-destructive">*</span>
              </label>
              <input
                type="text"
                placeholder="홍길동"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                연락처 <span className="text-destructive">*</span>
              </label>
              <input
                type="tel"
                placeholder="010-1234-5678"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium text-foreground">
                이메일
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
              />
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              업종 <span className="text-destructive">*</span>
            </label>
            <select className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary">
              <option value="">선택해주세요</option>
              <option value="inspection">사전점검</option>
              <option value="elastic-coat">탄성코트</option>
              <option value="grout">줄눈시공</option>
              <option value="cleaning">입주청소</option>
              <option value="sick-house">새집증후군 제거</option>
              <option value="coating">나노코팅</option>
              <option value="thermal-film">단열필름</option>
              <option value="moving">포장이사</option>
              <option value="other">기타</option>
            </select>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              서비스 지역 <span className="text-destructive">*</span>
            </label>
            <input
              type="text"
              placeholder="예: 서울, 경기, 인천"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              문의 수신 방법 <span className="text-destructive">*</span>
            </label>
            <div className="flex gap-4 pt-1">
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-input" />
                전화 연결
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-input" />
                DB (문자/카톡) 전달
              </label>
              <label className="inline-flex items-center gap-2 text-sm">
                <input type="checkbox" className="rounded border-input" />
                이메일
              </label>
            </div>
          </div>

          <div>
            <label className="mb-1.5 block text-sm font-medium text-foreground">
              업체 소개
            </label>
            <textarea
              rows={3}
              placeholder="업체의 강점, 경력, 특징 등을 자유롭게 작성해주세요"
              className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-primary focus:ring-1 focus:ring-primary"
            />
          </div>

          <button
            type="submit"
            className="mt-2 w-full rounded-lg bg-primary py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            무료 입점 신청하기
          </button>

          <p className="text-center text-xs text-muted-foreground">
            신청 후 1영업일 이내에 담당자가 연락드립니다
          </p>
        </form>
      </div>

      {/* FAQ */}
      <div className="mt-10">
        <h2 className="mb-4 text-base font-bold text-foreground">
          자주 묻는 질문
        </h2>
        <div className="flex flex-col gap-3">
          <FaqItem
            q="입점 비용이 정말 무료인가요?"
            a="네, 정식 런칭 전까지는 모든 기능을 무료로 이용하실 수 있습니다. 유료 전환 시 최소 1개월 전에 사전 안내드립니다."
          />
          <FaqItem
            q="고객 문의는 어떻게 받나요?"
            a="고객이 상담 신청 버튼을 누르면, 선택하신 방법(전화/DB/이메일)으로 즉시 전달됩니다."
          />
          <FaqItem
            q="후기 관리는 어떻게 하나요?"
            a="실제 서비스를 이용한 고객만 후기를 작성할 수 있으며, 부당한 후기는 신고 후 검토를 거쳐 처리됩니다."
          />
          <FaqItem
            q="여러 업종으로 등록할 수 있나요?"
            a="네, 줄눈+나노코팅처럼 복수 업종 등록이 가능합니다. 신청서에 기재해주시면 됩니다."
          />
        </div>
      </div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="rounded-lg border border-border/60 bg-card p-4">
      <div className="flex items-start gap-2">
        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
        <div>
          <p className="text-sm font-semibold text-foreground">{q}</p>
          <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a}</p>
        </div>
      </div>
    </div>
  );
}
