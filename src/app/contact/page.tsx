import type { Metadata } from "next";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, MessageCircle, Building2 } from "lucide-react";

export const metadata: Metadata = {
  title: "문의하기 — 이사꿀팁",
  description:
    "이사꿀팁 운영팀에 문의하는 방법과 평일 응대 시간을 안내합니다. 콘텐츠 제보, 업체 입점, 광고 제휴 등 모든 문의는 이 페이지에서 시작하세요.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      {/* Header */}
      <div className="mb-10 text-center">
        <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
          <MessageCircle className="h-4 w-4" />
          문의하기
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
          궁금한 점이 있으신가요?
        </h1>
        <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base">
          이사꿀팁 운영팀은 모든 사용자 문의에 24~48시간 이내 응대합니다.
          유형에 맞는 채널로 연락해 주시면 빠르게 도와드리겠습니다.
        </p>
      </div>

      {/* 응대 시간 */}
      <div className="mb-10 rounded-2xl border border-border/60 bg-card p-6">
        <div className="mb-3 flex items-center gap-2 text-foreground">
          <Clock className="h-5 w-5 text-primary" />
          <h2 className="text-base font-bold">응대 시간</h2>
        </div>
        <div className="grid gap-3 text-sm text-muted-foreground sm:grid-cols-2">
          <div>
            <p className="font-medium text-foreground">평일</p>
            <p>오전 10:00 ~ 오후 6:00 (KST)</p>
          </div>
          <div>
            <p className="font-medium text-foreground">주말·공휴일</p>
            <p>휴무 (다음 영업일 응대)</p>
          </div>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          긴급 콘텐츠 정정 요청은 이메일로 24시간 접수되며, 영업일 기준 24시간
          이내 검토·답변드립니다.
        </p>
      </div>

      {/* 문의 채널 */}
      <div className="mb-10 grid gap-4 sm:grid-cols-2">
        <a
          href="mailto:kplayer02@naver.com"
          className="group rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
        >
          <Mail className="mb-3 h-7 w-7 text-primary" />
          <h3 className="text-base font-bold text-foreground group-hover:text-primary">
            이메일
          </h3>
          <p className="mt-1 text-sm text-foreground">kplayer02@naver.com</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            모든 문의 가능. 콘텐츠 정정·광고 제휴·기술 문의 권장.
          </p>
        </a>
        <a
          href="tel:010-5763-3059"
          className="group rounded-2xl border border-border/60 bg-card p-6 transition-colors hover:border-primary/40"
        >
          <Phone className="mb-3 h-7 w-7 text-primary" />
          <h3 className="text-base font-bold text-foreground group-hover:text-primary">
            전화
          </h3>
          <p className="mt-1 text-sm text-foreground">010-5763-3059</p>
          <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
            영업일 평일 10:00~18:00. 입점 상담·긴급 문의 권장.
          </p>
        </a>
      </div>

      {/* 문의 유형별 안내 */}
      <div className="mb-10 rounded-2xl border border-border/60 bg-card p-6">
        <h2 className="mb-4 text-base font-bold text-foreground">
          문의 유형별 안내
        </h2>
        <div className="flex flex-col gap-4 text-sm leading-relaxed text-muted-foreground">
          <div>
            <p className="mb-1 font-semibold text-foreground">콘텐츠 오류·정정 제보</p>
            <p>
              블로그 글이나 가이드에서 잘못된 정보를 발견하셨다면 이메일로
              해당 페이지 URL과 오류 내용을 보내주세요. 24시간 이내 검토 후
              수정합니다.
            </p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-foreground">업체 입점 신청</p>
            <p>
              이사·청소·시공 관련 업체 운영자분께는 무료 입점을 안내합니다.{" "}
              <Link href="/register" className="text-primary hover:underline">
                입점 신청 페이지
              </Link>
              에서 사업자등록증을 제출해 주시면 영업일 기준 1~3일 내 등록됩니다.
            </p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-foreground">광고·제휴 문의</p>
            <p>
              브랜드 협찬, 광고 제휴, 콘텐츠 협업 등은 이메일에 회사명·담당자·
              제안 내용을 포함해 보내주세요. 영업일 기준 48시간 이내 답변드립니다.
            </p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-foreground">개인정보 관련 요청</p>
            <p>
              개인정보 열람·정정·삭제·처리 정지 요청은 이메일로 본인 확인 후
              처리됩니다. 자세한 내용은{" "}
              <Link href="/privacy" className="text-primary hover:underline">
                개인정보처리방침
              </Link>
              을 참고하세요.
            </p>
          </div>
          <div>
            <p className="mb-1 font-semibold text-foreground">사용자 후기·체험기 공유</p>
            <p>
              실제 이사·시공 경험을 콘텐츠에 반영하고 싶습니다. 이메일로 사진과
              경험담을 보내주시면 검토 후 글에 인용하고 답례 드립니다.
            </p>
          </div>
        </div>
      </div>

      {/* 사업자 정보 */}
      <div className="mb-10 rounded-2xl border border-border/60 bg-muted/30 p-6">
        <div className="mb-4 flex items-center gap-2 text-foreground">
          <Building2 className="h-5 w-5 text-primary" />
          <h2 className="text-base font-bold">사업자 정보</h2>
        </div>
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
            <span className="text-xs text-muted-foreground">서비스명</span>
            <p className="mt-0.5 font-medium text-foreground">이사꿀팁 (isamove.co.kr)</p>
          </div>
          <div className="sm:col-span-2">
            <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
              <MapPin className="h-3 w-3" />
              주소
            </span>
            <p className="mt-0.5 font-medium text-foreground">
              충청남도 천안시 두정동 1498 대우프라자
            </p>
          </div>
        </div>
      </div>

      {/* FAQ */}
      <article className="rounded-2xl border border-border/60 bg-card p-6 prose-custom">
        <h2 className="mb-4 text-base font-bold text-foreground">
          자주 묻는 질문
        </h2>
        <h3 className="mb-1 mt-4 text-sm font-bold text-foreground">
          Q. 응답이 늦어지는데 어떻게 하나요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          영업일 기준 48시간 이내 응답이 없다면 스팸함을 확인해 주시고, 전화로
          한 번 더 연락해 주세요. 중요한 문의가 누락되는 일이 없도록 즉시
          확인하겠습니다.
        </p>
        <h3 className="mb-1 mt-4 text-sm font-bold text-foreground">
          Q. 이사 견적을 받을 수 있나요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          이사꿀팁은 정보 제공 서비스이며 직접 견적을 산정하지 않습니다.{" "}
          <Link href="/map" className="text-primary hover:underline">업체 지도</Link>
          에서 인근 업체를 찾아 직접 견적을 요청해 주세요.
        </p>
        <h3 className="mb-1 mt-4 text-sm font-bold text-foreground">
          Q. 카카오톡으로도 문의할 수 있나요?
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          현재 카카오톡 채널은 운영하지 않고 있으며, 이메일과 전화로만 응대합니다.
          가까운 시기에 카카오톡 채널을 오픈할 예정입니다.
        </p>
      </article>
    </div>
  );
}
