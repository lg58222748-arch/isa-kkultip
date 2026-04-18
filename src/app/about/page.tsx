import type { Metadata } from "next";
import Link from "next/link";
import {
  Building2,
  Users,
  Target,
  Heart,
  Mail,
  Phone,
  MapPin,
  Shield,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "회사 소개 - 이사꿀팁",
  description:
    "이사꿀팁은 주식회사 새집느낌에서 운영하는 이사 정보 플랫폼입니다. 전국 이사 관련 업체 정보를 한곳에서 확인하고 비교할 수 있도록 돕습니다.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-16">
      {/* Hero */}
      <div className="mb-12 text-center">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          <Building2 className="h-4 w-4" />
          회사 소개
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          이사꿀팁이 만드는
          <br />
          더 쉬운 이사 경험
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground sm:text-base">
          복잡한 이사 과정을 단계별로 정리하고, 검증된 업체들을 한눈에 비교할 수 있는
          대한민국 No.1 이사 정보 플랫폼을 만들어갑니다.
        </p>
      </div>

      {/* 미션 */}
      <div className="mb-10 rounded-2xl border border-border/60 bg-card p-8">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Target className="h-5 w-5" />
          </div>
          <h2 className="text-xl font-bold text-foreground">미션</h2>
        </div>
        <p className="text-sm leading-relaxed text-muted-foreground">
          이사는 인생에서 손꼽히는 중요한 이벤트지만, 정보가 파편화되어 있어 많은 분들이
          혼란을 겪습니다. <strong className="text-foreground">이사꿀팁</strong>은
          이러한 불편을 해소하고자 만들어졌습니다. 사전점검부터 입주청소, 줄눈시공,
          포장이사까지 — 복잡한 이사 과정의 모든 단계를 한곳에서 확인하고, 전국
          검증된 업체들을 비교할 수 있게 돕습니다.
        </p>
      </div>

      {/* 가치 */}
      <div className="mb-10 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="text-base font-bold text-foreground">고객 중심</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            이사 준비 고객이 겪는 불편을 해결하는
            <br />
            실용적 정보만 제공합니다
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Shield className="h-6 w-6" />
          </div>
          <h3 className="text-base font-bold text-foreground">투명한 정보</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            업체 정보와 비용을 숨김없이 공개하고
            <br />
            실제 후기를 기반으로 운영합니다
          </p>
        </div>
        <div className="rounded-2xl border border-border/60 bg-card p-6 text-center">
          <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <Heart className="h-6 w-6" />
          </div>
          <h3 className="text-base font-bold text-foreground">지속 가능</h3>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            이사 업계의 상생을 위해
            <br />
            건강한 생태계를 만들어갑니다
          </p>
        </div>
      </div>

      {/* 서비스 */}
      <div className="mb-10 rounded-2xl border border-border/60 bg-card p-8">
        <h2 className="mb-5 text-xl font-bold text-foreground">주요 서비스</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="flex gap-3">
            <span className="text-2xl">🏗️</span>
            <div>
              <h3 className="text-sm font-bold text-foreground">새아파트 가이드</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                사전점검부터 입주까지 8단계 완벽 가이드
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🔨</span>
            <div>
              <h3 className="text-sm font-bold text-foreground">구축아파트 가이드</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                리모델링 11단계 순서와 비용 정리
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">🗺️</span>
            <div>
              <h3 className="text-sm font-bold text-foreground">전국 업체 지도</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                2,800+ 검증된 이사 관련 업체 비교
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="text-sm font-bold text-foreground">이사 꿀팁 블로그</h3>
              <p className="mt-1 text-xs text-muted-foreground">
                20+ 실용적 이사 정보와 절약 팁
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 사업자 정보 */}
      <div className="mb-10 rounded-2xl border border-border/60 bg-card p-8">
        <h2 className="mb-5 text-xl font-bold text-foreground">사업자 정보</h2>
        <div className="grid gap-3 text-sm sm:grid-cols-2">
          <div>
            <span className="text-xs text-muted-foreground">상호</span>
            <p className="mt-0.5 font-medium text-foreground">주식회사 새집느낌</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">대표자</span>
            <p className="mt-0.5 font-medium text-foreground">권선우</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">사업자등록번호</span>
            <p className="mt-0.5 font-medium text-foreground">370-86-03860</p>
          </div>
          <div>
            <span className="text-xs text-muted-foreground">설립년도</span>
            <p className="mt-0.5 font-medium text-foreground">2026년</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-xs text-muted-foreground">주소</span>
            <p className="mt-0.5 font-medium text-foreground">
              충청남도 천안시 두정동 1498 대우프라자
            </p>
          </div>
        </div>
      </div>

      {/* 연락처 */}
      <div className="mb-10 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center">
        <h2 className="mb-4 text-xl font-bold text-foreground">문의하기</h2>
        <p className="mb-5 text-sm text-muted-foreground">
          업체 입점, 제휴, 기타 문의는 아래 연락처로 부탁드립니다
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-6">
          <a
            href="tel:010-5763-3059"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Phone className="h-4 w-4" />
            010-5763-3059
          </a>
          <a
            href="mailto:kplayer02@naver.com"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-3 text-sm font-semibold text-foreground hover:bg-accent"
          >
            <Mail className="h-4 w-4" />
            kplayer02@naver.com
          </a>
        </div>
      </div>

      {/* CTA */}
      <div className="flex justify-center gap-3">
        <Link
          href="/register"
          className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
        >
          업체 입점 신청
          <ArrowRight className="h-4 w-4" />
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground hover:bg-accent"
        >
          홈으로
        </Link>
      </div>
    </div>
  );
}
