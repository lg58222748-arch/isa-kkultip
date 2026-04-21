import { readFileSync, writeFileSync } from "fs";

const mapping = {
  "입주청소-비용-업체-비교": "move-in-cleaning-cost-guide",
  "줄눈시공-에폭시-나노-차이": "grout-epoxy-vs-nano",
  "사전점검-체크리스트-완벽가이드": "pre-inspection-checklist",
  "포장이사-비용-절약-방법": "packed-moving-cost-saving",
  "탄성코트-꼭-해야하나": "elastic-coating-guide",
  "새집증후군-증상-해결방법": "sick-house-syndrome",
  "구축아파트-리모델링-순서": "old-apartment-renovation-order",
  "나노코팅-효과-지속기간": "nano-coating-effect-duration",
  "이사-전입신고-주소변경-총정리": "move-in-registration-guide",
  "이사-준비-체크리스트-30일-일정표": "30-day-moving-checklist",
  "이사-쓰레기-버리는-방법-총정리": "moving-waste-disposal",
  "전세-월세-이사-주의사항-보증금-반환": "jeonse-wolse-deposit-guide",
  "아파트-이사-비용-평수별-총정리": "apartment-moving-cost-by-size",
  "이사-업체-사기-피하는-방법": "avoid-moving-scams",
  "장거리-이사-지방-서울-비용-팁": "long-distance-moving-cost",
  "가전제품-이사-포장-완벽-가이드": "appliance-packing-guide",
  "혼자-하는-반포장-이사-총정리": "semi-pack-solo-moving",
  "이사-당일-체크리스트-20가지": "moving-day-checklist",
  "이사-후-인터넷-TV-이전-설치-가이드": "internet-tv-transfer-guide",
  "보관이사-비용-이용방법-총정리": "storage-moving-guide",
  "반려동물-이사-스트레스-줄이는-법": "pet-moving-stress-tips",
  "원룸-이사-비용-1인가구-가이드": "studio-moving-cost-guide",
  "이사-견적-방문-온라인-비교": "moving-quote-comparison",
  "에어컨-이전-설치-비용-주의사항": "aircon-transfer-cost",
  "도배-장판-교체-타이밍-비용": "wallpaper-flooring-timing",
  "이사-관리비-정산-전입전출": "maintenance-fee-settlement",
  "이사-후-집-정리-순서": "post-move-organization",
  "이삿날-기사님-식사-음료-매너": "moving-day-driver-etiquette",
  "이사-스트레스-관리-피로-회복": "moving-stress-recovery",
};

function migrate(path) {
  let content = readFileSync(path, "utf-8");
  let replaced = 0;
  for (const [ko, en] of Object.entries(mapping)) {
    // Match slug inside double quotes to avoid replacing plain text mentions
    const quoted = `"${ko}"`;
    const target = `"${en}"`;
    const before = content.length;
    while (content.includes(quoted)) {
      content = content.replace(quoted, target);
      replaced++;
    }
  }
  writeFileSync(path, content, "utf-8");
  console.log(`${path}: replaced ${replaced} slug(s)`);
}

migrate("src/data/blog-posts.ts");
migrate("src/data/blog-images.ts");
