import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "이사꿀팁의 개인정보처리방침입니다. 수집하는 개인정보, 이용 목적, 보관 기간 등을 안내합니다.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
        개인정보처리방침
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        시행일: 2026년 4월 17일
      </p>

      <div className="space-y-10 text-[15px] leading-relaxed text-foreground/90">
        <Section title="1. 개인정보의 수집 항목 및 수집 방법">
          <p>
            이사꿀팁(이하 &quot;서비스&quot;)은 서비스 제공을 위해 아래와 같은
            개인정보를 수집할 수 있습니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <strong>자동 수집 항목:</strong> 방문 기록, IP 주소, 브라우저 유형,
              기기 정보, 쿠키 정보, 서비스 이용 기록
            </li>
            <li>
              <strong>업체 입점 신청 시:</strong> 업체명, 대표자명, 연락처,
              이메일, 사업자등록번호, 서비스 지역
            </li>
            <li>
              <strong>문의 시:</strong> 이름, 이메일, 문의 내용
            </li>
          </ul>
        </Section>

        <Section title="2. 개인정보의 수집 및 이용 목적">
          <ul className="list-disc space-y-1 pl-5">
            <li>서비스 제공 및 운영</li>
            <li>업체 입점 신청 처리 및 관리</li>
            <li>이용자 문의 응대 및 서비스 개선</li>
            <li>
              웹사이트 이용 통계 분석 및 맞춤형 콘텐츠 제공 (Google Analytics)
            </li>
            <li>광고 서비스 제공 (Google AdSense)</li>
            <li>부정 이용 방지 및 서비스 안정성 확보</li>
          </ul>
        </Section>

        <Section title="3. 개인정보의 보유 및 이용 기간">
          <p>
            수집된 개인정보는 수집 목적이 달성된 후 지체 없이 파기합니다. 단,
            관련 법령에 따라 보존이 필요한 경우 해당 기간 동안 보관합니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>업체 입점 정보: 입점 해지 후 1년</li>
            <li>이용자 문의 기록: 처리 완료 후 1년</li>
            <li>
              웹사이트 방문 로그: 3개월 (통계 분석 완료 후 익명화 처리)
            </li>
          </ul>
        </Section>

        <Section title="4. 쿠키(Cookie)의 사용">
          <p>
            서비스는 이용자의 편의 향상과 맞춤형 서비스 제공을 위해 쿠키를
            사용합니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              <strong>필수 쿠키:</strong> 서비스 기본 기능 제공에 필요한 쿠키
            </li>
            <li>
              <strong>분석 쿠키:</strong> Google Analytics를 통한 방문 통계 수집
            </li>
            <li>
              <strong>광고 쿠키:</strong> Google AdSense를 통한 맞춤형 광고 제공
            </li>
          </ul>
          <p className="mt-3">
            이용자는 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으나, 이 경우
            서비스 이용에 일부 제한이 있을 수 있습니다.
          </p>
        </Section>

        <Section title="5. Google AdSense 및 Google Analytics">
          <p>
            서비스는 Google AdSense를 통해 광고를 게재하며, Google Analytics를
            통해 웹사이트 이용 통계를 수집합니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              Google은 쿠키를 사용하여 이용자의 웹사이트 방문 기록을 기반으로
              맞춤형 광고를 제공할 수 있습니다.
            </li>
            <li>
              이용자는{" "}
              <a
                href="https://adssettings.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Google 광고 설정
              </a>
              에서 맞춤형 광고를 비활성화할 수 있습니다.
            </li>
            <li>
              Google의 개인정보 처리에 대한 자세한 내용은{" "}
              <a
                href="https://policies.google.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline underline-offset-2 hover:text-primary/80"
              >
                Google 개인정보처리방침
              </a>
              을 참고하시기 바랍니다.
            </li>
          </ul>
        </Section>

        <Section title="6. 개인정보의 제3자 제공">
          <p>
            서비스는 이용자의 동의 없이 개인정보를 제3자에게 제공하지 않습니다.
            다만, 다음의 경우에는 예외로 합니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>이용자가 사전에 동의한 경우</li>
            <li>법령에 의해 요구되는 경우</li>
            <li>
              서비스 제공을 위해 필요한 경우 (예: 업체 매칭 서비스 이용 시 해당
              업체에 연락처 전달)
            </li>
          </ul>
        </Section>

        <Section title="7. 개인정보의 파기 절차 및 방법">
          <p>
            보유 기간이 만료되거나 처리 목적이 달성된 개인정보는 지체 없이
            파기합니다.
          </p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>전자적 파일: 복구 불가능한 방법으로 영구 삭제</li>
            <li>서면 자료: 분쇄 또는 소각하여 파기</li>
          </ul>
        </Section>

        <Section title="8. 이용자의 권리">
          <p>이용자는 언제든지 다음의 권리를 행사할 수 있습니다.</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>개인정보 열람 요청</li>
            <li>개인정보 정정 및 삭제 요청</li>
            <li>개인정보 처리 정지 요청</li>
            <li>동의 철회</li>
          </ul>
          <p className="mt-3">
            위 요청은 아래 연락처를 통해 접수할 수 있으며, 지체 없이 조치하겠습니다.
          </p>
        </Section>

        <Section title="9. 개인정보 보호책임자 및 연락처">
          <ul className="list-disc space-y-1 pl-5">
            <li>서비스명: 이사꿀팁 (주식회사 새집느낌)</li>
            <li>대표자: 권선우</li>
            <li>사업자등록번호: 370-86-03860</li>
            <li>주소: 충청남도 천안시 두정동 1498 대우프라자</li>
            <li>전화: 010-5763-3059</li>
            <li>이메일: kplayer02@naver.com</li>
          </ul>
          <p className="mt-3">
            개인정보 처리에 관한 문의, 불만 처리, 피해 구제 등은 위 연락처로
            문의해 주시기 바랍니다.
          </p>
        </Section>

        <Section title="10. 방침 변경에 관한 사항">
          <p>
            본 개인정보처리방침은 법령, 정책 또는 서비스 변경에 따라 수정될 수
            있습니다. 변경 시 웹사이트를 통해 공지하며, 변경된 방침은 공지한
            날로부터 효력이 발생합니다.
          </p>
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="mb-3 text-lg font-semibold text-foreground">{title}</h2>
      {children}
    </section>
  );
}
