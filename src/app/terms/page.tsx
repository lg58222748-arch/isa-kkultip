import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "이사꿀팁 서비스 이용약관입니다. 서비스 이용 조건, 이용자 책임, 면책 사항 등을 안내합니다.",
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
      <h1 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl">
        이용약관
      </h1>
      <p className="mb-8 text-sm text-muted-foreground">
        시행일: 2026년 4월 17일
      </p>

      <div className="space-y-10 text-[15px] leading-relaxed text-foreground/90">
        <Section title="제1조 (목적)">
          <p>
            본 약관은 이사꿀팁(이하 &quot;서비스&quot;)이 제공하는 웹사이트 및
            관련 서비스의 이용 조건과 절차, 서비스와 이용자 간의 권리, 의무 및
            책임 사항을 규정함을 목적으로 합니다.
          </p>
        </Section>

        <Section title="제2조 (서비스의 내용)">
          <p>서비스는 다음과 같은 기능을 제공합니다.</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>
              새아파트 및 구축아파트 이사 순서 가이드 및 체크리스트 제공
            </li>
            <li>이사 관련 블로그 콘텐츠 제공</li>
            <li>이사 관련 업체 정보 및 지도 기반 검색 기능</li>
            <li>업체 입점 및 파트너 서비스</li>
            <li>맘카페 커뮤니티 정보 제공</li>
            <li>기타 이사 관련 정보 및 편의 기능</li>
          </ul>
        </Section>

        <Section title="제3조 (약관의 효력 및 변경)">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              본 약관은 서비스 화면에 게시하거나 기타의 방법으로 이용자에게
              공지함으로써 효력이 발생합니다.
            </li>
            <li>
              서비스는 합리적인 사유가 발생할 경우 약관을 변경할 수 있으며,
              변경된 약관은 공지 후 적용됩니다.
            </li>
            <li>
              이용자가 변경된 약관에 동의하지 않을 경우 서비스 이용을 중단할 수
              있습니다.
            </li>
          </ol>
        </Section>

        <Section title="제4조 (이용자의 의무)">
          <p>이용자는 다음 행위를 해서는 안 됩니다.</p>
          <ul className="mt-3 list-disc space-y-1 pl-5">
            <li>타인의 개인정보를 도용하거나 허위 정보를 등록하는 행위</li>
            <li>서비스의 정상적인 운영을 방해하는 행위</li>
            <li>
              서비스에 게시된 정보를 허가 없이 수집, 복제, 배포하는 행위
            </li>
            <li>다른 이용자의 서비스 이용을 방해하는 행위</li>
            <li>관련 법령에 위반되는 행위</li>
            <li>
              서비스를 이용하여 상업적 목적의 광고, 홍보 활동을 무단으로 하는
              행위
            </li>
          </ul>
        </Section>

        <Section title="제5조 (서비스의 제공 및 변경)">
          <ol className="list-decimal space-y-2 pl-5">
            <li>서비스는 연중무휴, 24시간 제공을 원칙으로 합니다.</li>
            <li>
              시스템 점검, 설비 교체 등 운영상 필요한 경우 서비스의 전부 또는
              일부를 일시적으로 중단할 수 있습니다.
            </li>
            <li>
              서비스의 내용, 이용 방법, 이용 시간 등은 운영상 필요에 따라
              변경될 수 있으며, 변경 시 사전에 공지합니다.
            </li>
          </ol>
        </Section>

        <Section title="제6조 (지적재산권)">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              서비스가 제공하는 콘텐츠(텍스트, 이미지, 디자인, 로고 등)에 대한
              저작권 및 지적재산권은 서비스에 귀속됩니다.
            </li>
            <li>
              이용자는 서비스를 통해 얻은 정보를 개인적인 용도로만 사용할 수
              있으며, 서비스의 사전 동의 없이 상업적으로 이용할 수 없습니다.
            </li>
            <li>
              이용자가 게시한 콘텐츠의 저작권은 해당 이용자에게 귀속되며,
              서비스는 서비스 운영 목적 범위 내에서 해당 콘텐츠를 이용할 수
              있습니다.
            </li>
          </ol>
        </Section>

        <Section title="제7조 (면책 조항)">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              서비스에서 제공하는 이사 비용, 업체 정보 등은 참고용이며, 실제와
              다를 수 있습니다. 서비스는 해당 정보의 정확성이나 완전성을
              보증하지 않습니다.
            </li>
            <li>
              이용자가 서비스를 통해 연결된 외부 업체와의 거래에서 발생하는
              문제에 대해 서비스는 책임을 지지 않습니다.
            </li>
            <li>
              천재지변, 시스템 장애 등 불가항력으로 인한 서비스 중단에 대해
              서비스는 책임을 지지 않습니다.
            </li>
            <li>
              이용자 간 또는 이용자와 제3자 간에 발생한 분쟁에 대해 서비스는
              개입하거나 책임을 지지 않습니다.
            </li>
          </ol>
        </Section>

        <Section title="제8조 (업체 정보의 제공)">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              서비스에 등록된 업체 정보는 해당 업체가 직접 제공한 것으로,
              서비스는 정보의 정확성을 보증하지 않습니다.
            </li>
            <li>
              이용자는 업체 이용 전 직접 확인하고 판단해야 하며, 업체와의
              거래에서 발생하는 모든 책임은 이용자 본인에게 있습니다.
            </li>
          </ol>
        </Section>

        <Section title="제9조 (광고 게재)">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              서비스는 Google AdSense 등 외부 광고 서비스를 통해 광고를 게재할
              수 있습니다.
            </li>
            <li>
              광고 콘텐츠와 관련된 책임은 해당 광고주에게 있으며, 서비스는
              광고를 통해 발생하는 거래에 대해 책임을 지지 않습니다.
            </li>
          </ol>
        </Section>

        <Section title="제10조 (분쟁 해결)">
          <ol className="list-decimal space-y-2 pl-5">
            <li>
              서비스와 이용자 간에 발생한 분쟁은 상호 협의를 통해 해결하는 것을
              원칙으로 합니다.
            </li>
            <li>
              협의가 이루어지지 않을 경우 관할 법원은 서비스의 소재지를 관할하는
              법원으로 합니다.
            </li>
          </ol>
        </Section>

        <Section title="제11조 (연락처)">
          <ul className="list-disc space-y-1 pl-5">
            <li>서비스명: 이사꿀팁 (주식회사 새집느낌)</li>
            <li>대표자: 권선우</li>
            <li>사업자등록번호: 370-86-03860</li>
            <li>주소: 충청남도 천안시 두정동 1498 대우프라자</li>
            <li>전화: 010-5763-3059</li>
            <li>이메일: kplayer02@naver.com</li>
          </ul>
          <p className="mt-3">
            본 약관에 관한 문의 사항은 위 연락처로 문의해 주시기 바랍니다.
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
