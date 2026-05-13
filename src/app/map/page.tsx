import type { Metadata } from "next";
import { MapPageClient } from "./MapPageClient";

export const metadata: Metadata = {
  title: "업체 지도 - 이사 관련 업체 찾기",
  description:
    "지도에서 내 주변 이사 관련 업체를 찾아보세요. 사전점검, 입주청소, 줄눈시공, 포장이사 등 업체별 평점과 후기를 한눈에 확인할 수 있습니다.",
};

export default function MapPage() {
  return (
    <>
      <MapPageClient />

      {/* SEO 본문 — 지도만 있는 페이지의 텍스트 콘텐츠 보강 */}
      <section className="border-t border-border/40 bg-background px-4 py-12 sm:px-6 sm:py-16">
        <article className="mx-auto max-w-3xl prose-custom">
          <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground sm:text-2xl">
            전국 이사 관련 업체를 한눈에 비교하세요
          </h2>
          <p className="text-sm leading-relaxed text-muted-foreground">
            이사꿀팁의 업체 지도는 전국 49개 도시에서 수집한 2,800곳 이상의
            이사 관련 업체 정보를 제공합니다. 사전점검, 줄눈시공, 입주청소,
            새집증후군 제거, 나노코팅, 단열필름, 포장이사, 인테리어 등 카테고리별로
            업체를 검색할 수 있고, 평점·후기·가격을 한눈에 비교할 수 있습니다.
            네이버 카카오 로컬 API를 활용해 매월 자동 업데이트되며, 사용자
            후기를 기반으로 신뢰도 높은 업체를 우선 노출합니다.
          </p>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            카테고리별 업체 종류
          </h3>
          <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
            <li>
              <strong className="text-foreground">포장이사</strong>: 짐 포장부터
              운반·정리까지 전 과정을 대행하는 업체. 30평 기준 80만~150만원선.
            </li>
            <li>
              <strong className="text-foreground">입주청소</strong>: 신축·구축
              아파트 입주 전 전문 청소 업체. 30평 기준 20만~45만원선.
            </li>
            <li>
              <strong className="text-foreground">줄눈시공</strong>: 욕실·주방
              타일 줄눈을 에폭시·나노 소재로 교체하는 업체. 30평 기준 20만~50만원선.
            </li>
            <li>
              <strong className="text-foreground">사전점검</strong>: 새 아파트
              하자 점검을 대행하는 전문 업체. 30평 기준 5만~15만원선.
            </li>
            <li>
              <strong className="text-foreground">인테리어·리모델링</strong>:
              구축 아파트 전체 또는 부분 리모델링 업체. 30평 기준 500만~5,000만원.
            </li>
            <li>
              <strong className="text-foreground">탄성코트·새집증후군</strong>:
              결로 방지 코팅과 VOC 제거 전문 업체.
            </li>
          </ul>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            업체 비교 시 확인할 점
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            업체를 선택할 때는 단순히 가격만 보지 마시고 다음 4가지를 함께
            확인하세요. 첫째, 후기 50개 이상에 평점 4.5+인 업체를 우선
            검토합니다. 둘째, 영업 배상 책임 보험에 가입되어 있는지 확인합니다.
            셋째, 작업 인원과 시간이 견적서에 명시되어 있는지 확인합니다.
            넷째, A/S 정책(시공 후 미흡한 부분 무상 재처리 여부)을 명확히
            확인합니다. 너무 저렴한 업체는 인원·시간·자재를 줄여 결국 만족도가
            떨어지므로, 적정 가격대의 후기 좋은 업체를 선택하는 것이 가장
            합리적입니다.
          </p>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            지도 사용 방법
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            상단 카테고리 버튼에서 원하는 업체 종류를 선택하면 지도와 리스트가
            함께 필터링됩니다. 지역 검색은 시·구 단위로 가능하고, 텍스트 검색은
            업체명과 위치 모두에서 동작합니다. 지도에 표시된 마커를 클릭하면
            업체 상세 정보(주소·전화번호·평점·후기·가격대)를 확인할 수 있고,
            업체 리스트에서는 평점순·후기순·가격순 정렬이 가능합니다. 지도에서
            "내 위치"를 누르면 GPS·IP 기반으로 가까운 업체부터 표시됩니다.
          </p>
          <h3 className="mb-3 mt-8 text-base font-bold text-foreground">
            업체 정보가 정확한가요?
          </h3>
          <p className="text-sm leading-relaxed text-muted-foreground">
            모든 업체 정보는 카카오·네이버 로컬 API와 사용자 제보를 기반으로
            매월 갱신됩니다. 다만 업체 사정에 따라 영업 시간·전화번호가 변경될
            수 있으므로, 방문 또는 견적 요청 전 업체에 직접 확인해 주세요.
            잘못된 정보를 발견하시면 kplayer02@naver.com으로 제보해 주시면
            24시간 이내 검토·수정합니다.
          </p>
        </article>
      </section>
    </>
  );
}
