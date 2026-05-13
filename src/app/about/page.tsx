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

      {/* 창업 배경 (긴 본문) */}
      <article className="mb-10 rounded-2xl border border-border/60 bg-card p-8 prose-custom">
        <h2 className="mb-4 text-xl font-bold text-foreground">창업 배경</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          이사꿀팁은 2026년, 대한민국에서 매년 약 200만 가구가 이사를 진행함에도
          불구하고 정확하고 신뢰할 수 있는 정보가 너무 흩어져 있다는 문제 의식에서
          시작되었습니다. 운영진 본인의 신축 아파트 입주 경험에서, 사전점검을 어떻게
          준비해야 할지, 줄눈시공은 언제 누구에게 맡겨야 할지, 입주청소 비용은 적정한
          수준인지 알기 어려워 며칠씩 검색하고 카페에 질문해야 했습니다. 결국 입주청소
          업체에 견적을 다섯 곳 받아보니 같은 30평에 가격이 두 배 가까이 차이가
          났고, 시공 순서를 모르고 진행해서 입주청소를 두 번 해야 했습니다. 이런
          시행착오를 다른 분들이 겪지 않도록 모든 정보를 한곳에 정리하기로 결심한
          것이 이사꿀팁의 출발점입니다.
        </p>
        <h3 className="mb-3 mt-6 text-base font-bold text-foreground">
          기존 정보 채널의 한계
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          기존에는 이사 정보를 얻으려면 네이버 카페·블로그·유튜브를 모두 뒤져야 했습니다.
          하지만 카페 글은 작성 시점이 오래되어 가격이 맞지 않거나, 블로그는 광고성
          글이 많아 객관성이 부족했습니다. 유튜브는 영상 시간이 길어 핵심을 빠르게
          파악하기 어려웠습니다. 또한 어느 채널에서도 새 아파트와 구축아파트 시공
          순서, 평형별 비용, 검증된 업체 비교를 한 번에 보여주는 곳이 없었습니다.
          이사꿀팁은 이런 빈 공간을 채우기 위해 만들어졌습니다.
        </p>
      </article>

      {/* 콘텐츠 제작 방식 */}
      <article className="mb-10 rounded-2xl border border-border/60 bg-card p-8 prose-custom">
        <h2 className="mb-4 text-xl font-bold text-foreground">콘텐츠 제작 방식</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          저희가 제공하는 모든 정보는 다음 4단계 검증 프로세스를 거칩니다.
        </p>
        <h3 className="mb-2 mt-6 text-base font-bold text-foreground">
          1단계: 시장 조사
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          매 분기마다 전국 이사 업체 50곳 이상에서 견적을 수집하고, 평수·시기별
          평균 가격을 산출합니다. 사전점검·줄눈시공·입주청소·포장이사 등 카테고리별로
          분리해 정확한 시세를 파악합니다.
        </p>
        <h3 className="mb-2 mt-6 text-base font-bold text-foreground">
          2단계: 사용자 인터뷰
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          실제 이사·입주를 마친 가구 30곳 이상을 인터뷰해 어떤 부분이 어려웠는지,
          어떤 정보가 필요했는지 듣습니다. 단계별 가이드와 블로그 글의 주제는 이
          인터뷰에서 도출된 실제 고민에서 시작됩니다.
        </p>
        <h3 className="mb-2 mt-6 text-base font-bold text-foreground">
          3단계: 전문가 검수
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          작성된 가이드와 비용 정보는 인테리어 업체 운영자, 입주청소 업체 대표,
          공인중개사 등 분야별 전문가의 검수를 거칩니다. 전문가의 피드백은 즉시
          반영되며, 잘못된 정보가 발견되면 24시간 이내 수정됩니다.
        </p>
        <h3 className="mb-2 mt-6 text-base font-bold text-foreground">
          4단계: 정기 업데이트
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          시세는 분기별로 업데이트되며, 정부 정책 변경(전입신고 기한, 자동차 등록 등)이
          있으면 즉시 반영합니다. 업체 정보는 카카오·네이버 로컬 API를 활용해 매월
          자동 갱신됩니다.
        </p>
      </article>

      {/* 운영 원칙 */}
      <article className="mb-10 rounded-2xl border border-border/60 bg-card p-8 prose-custom">
        <h2 className="mb-4 text-xl font-bold text-foreground">운영 원칙</h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          이사꿀팁은 다음 5가지 원칙을 지키며 운영됩니다.
        </p>
        <ul className="mt-4 ml-5 list-disc space-y-2 text-sm leading-relaxed text-muted-foreground">
          <li>
            <strong className="text-foreground">광고 수익 분리</strong>:
            특정 업체로부터 후원이나 광고비를 받지 않습니다. 사이트 운영비는
            구글 애드센스 등 표준 디스플레이 광고와 입점 업체 무료 등록을
            기반으로 합니다.
          </li>
          <li>
            <strong className="text-foreground">중립적 정보 제공</strong>:
            특정 업체를 추천하지 않으며, 모든 업체 정보는 동일한 기준(평점·후기·
            가격)으로 표시합니다. 후기는 실제 이용자 작성분만 반영됩니다.
          </li>
          <li>
            <strong className="text-foreground">투명한 비용 공개</strong>:
            모든 시공·이사 비용은 평수·지역·시기별로 상세히 공개합니다.
            "문의 후 안내" 같은 모호한 표시는 지양합니다.
          </li>
          <li>
            <strong className="text-foreground">개인정보 보호</strong>:
            회원가입 없이 모든 정보를 이용할 수 있습니다. 입력된 개인정보는
            관련 업체 연결 외 어떤 목적으로도 사용되지 않습니다.
          </li>
          <li>
            <strong className="text-foreground">지속적 품질 개선</strong>:
            사용자 피드백을 반영해 매월 콘텐츠를 업데이트합니다. 잘못된 정보
            제보는 24시간 이내 검토·수정합니다.
          </li>
        </ul>
      </article>

      {/* 자주 묻는 질문 */}
      <article className="mb-10 rounded-2xl border border-border/60 bg-card p-8 prose-custom">
        <h2 className="mb-4 text-xl font-bold text-foreground">자주 묻는 질문</h2>
        <h3 className="mb-2 mt-4 text-base font-bold text-foreground">
          Q. 정보를 이용하는데 비용이 드나요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          모든 콘텐츠와 업체 정보는 무료입니다. 회원가입도 필요 없습니다.
        </p>
        <h3 className="mb-2 mt-4 text-base font-bold text-foreground">
          Q. 업체와 직접 연락이 가능한가요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          업체 상세 페이지에 표시된 전화번호·홈페이지로 직접 연락할 수 있습니다.
          이사꿀팁은 정보 제공만 하며, 거래는 사용자와 업체 간 직접 진행됩니다.
        </p>
        <h3 className="mb-2 mt-4 text-base font-bold text-foreground">
          Q. 업체 입점은 어떻게 하나요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          입점 신청 페이지에서 무료로 등록 가능합니다. 사업자등록증 확인 후
          영업일 기준 1~3일 내 등록됩니다.
        </p>
        <h3 className="mb-2 mt-4 text-base font-bold text-foreground">
          Q. 잘못된 정보가 있으면 어떻게 알리나요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          kplayer02@naver.com으로 제보해 주시면 24시간 이내 검토·수정합니다.
          정확한 정보를 위해 항상 사용자 피드백을 기다리고 있습니다.
        </p>
        <h3 className="mb-2 mt-4 text-base font-bold text-foreground">
          Q. 모바일에서도 이용 가능한가요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          네, 모든 페이지가 모바일에 최적화되어 있습니다. 스마트폰·태블릿·PC
          어떤 기기에서도 동일한 기능을 이용할 수 있습니다.
        </p>
      </article>

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
