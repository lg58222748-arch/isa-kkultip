const UNSPLASH = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?w=${w}&auto=format&fit=crop&q=80`;

const CATEGORY_FALLBACK: Record<string, string> = {
  가이드: UNSPLASH("1484154218962-a197022b5858"),
  비용: UNSPLASH("1554224155-6726b3ff858f"),
  비교: UNSPLASH("1556228578-8c89e6adf883"),
  꿀팁: UNSPLASH("1556761175-5973dc0f32e7"),
  건강: UNSPLASH("1544005313-94ddf0286df2"),
  행정: UNSPLASH("1568992687947-868a62a9f521"),
};

const SLUG_TO_IMAGE: Record<string, string> = {
  "new-apartment-moving-order": UNSPLASH("1545324418-cc1a3fa10c00"),
  "입주청소-비용-업체-비교": UNSPLASH("1527515637462-cff94eecc1ac"),
  "줄눈시공-에폭시-나노-차이": UNSPLASH("1552321554-5fefe8c9ef14"),
  "사전점검-체크리스트-완벽가이드": UNSPLASH("1554224155-6726b3ff858f"),
  "포장이사-비용-절약-방법": UNSPLASH("1600585154340-be6161a56a0c"),
  "탄성코트-꼭-해야하나": UNSPLASH("1513694203232-719a280e022f"),
  "새집증후군-증상-해결방법": UNSPLASH("1544005313-94ddf0286df2"),
  "구축아파트-리모델링-순서": UNSPLASH("1556909114-f6e7ad7d3136"),
  "나노코팅-효과-지속기간": UNSPLASH("1564013799919-ab600027ffc6"),
  "이사-전입신고-주소변경-총정리": UNSPLASH("1568992687947-868a62a9f521"),
  "이사-준비-체크리스트-30일-일정표": UNSPLASH("1506784983877-45594efa4cbe"),
  "이사-쓰레기-버리는-방법-총정리": UNSPLASH("1532996122724-e3c354a0b15b"),
  "전세-월세-이사-주의사항-보증금-반환": UNSPLASH("1450101499163-c8848c66ca85"),
  "아파트-이사-비용-평수별-총정리": UNSPLASH("1502672260266-1c1ef2d93688"),
  "이사-업체-사기-피하는-방법": UNSPLASH("1507003211169-0a1dd7228f2d"),
  "장거리-이사-지방-서울-비용-팁": UNSPLASH("1601584115197-04ecc0da31d7"),
  "가전제품-이사-포장-완벽-가이드": UNSPLASH("1558618666-fcd25c85cd64"),
  "혼자-하는-반포장-이사-총정리": UNSPLASH("1586528116311-ad8dd3c8310d"),
  "이사-당일-체크리스트-20가지": UNSPLASH("1586023492125-27b2c045efd7"),
  "이사-후-인터넷-TV-이전-설치-가이드": UNSPLASH("1515488764276-beab7607c1e6"),
  "보관이사-비용-이용방법-총정리": UNSPLASH("1564501049412-61c2a3083791"),
  "반려동물-이사-스트레스-줄이는-법": UNSPLASH("1548199973-03cce0bbc87b"),
  "원룸-이사-비용-1인가구-가이드": UNSPLASH("1522708323590-d24dbb6b0267"),
  "이사-견적-방문-온라인-비교": UNSPLASH("1556228578-8c89e6adf883"),
  "에어컨-이전-설치-비용-주의사항": UNSPLASH("1631679706909-1844bbd07221"),
  "도배-장판-교체-타이밍-비용": UNSPLASH("1484154218962-a197022b5858"),
  "이사-관리비-정산-전입전출": UNSPLASH("1520333789090-1afc82db536a"),
  "이사-후-집-정리-순서": UNSPLASH("1519710164239-da123dc03ef4"),
  "이삿날-기사님-식사-음료-매너": UNSPLASH("1484723091739-30a097e8f929"),
  "이사-스트레스-관리-피로-회복": UNSPLASH("1556761175-5973dc0f32e7"),
};

export function getBlogImage(slug: string, category?: string): string {
  return (
    SLUG_TO_IMAGE[slug] ??
    (category ? CATEGORY_FALLBACK[category] : undefined) ??
    UNSPLASH("1484154218962-a197022b5858")
  );
}
