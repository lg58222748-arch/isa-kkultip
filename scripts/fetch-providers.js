const REST_API_KEY = "f4593ad9b1b97d3a20724893e6e82390";

// 카테고리별 여러 키워드로 검색 (더 많은 결과)
const CATEGORIES = [
  { keywords: ["입주청소", "이사청소", "청소업체", "홈클리닝"], category: "cleaning" },
  { keywords: ["줄눈시공", "줄눈", "에폭시줄눈", "타일줄눈"], category: "grout" },
  { keywords: ["포장이사", "이사업체", "이삿짐센터", "반포장이사"], category: "moving" },
  { keywords: ["인테리어", "리모델링", "아파트인테리어", "집수리"], category: "interior" },
  { keywords: ["사전점검", "하자점검", "입주점검", "아파트점검"], category: "inspection" },
  { keywords: ["탄성코트", "베란다코트", "결로방지", "베란다탄성"], category: "elastic-coat" },
  { keywords: ["나노코팅", "욕실코팅", "싱크대코팅", "발수코팅"], category: "coating" },
  { keywords: ["새집증후군", "베이크아웃", "공기질측정", "실내공기질"], category: "sick-house" },
  { keywords: ["단열필름", "창문필름", "자외선차단필름", "썬팅"], category: "thermal-film" },
];

// 전국 주요 도시 확대
const CITIES = [
  { name: "서울", lat: 37.5665, lng: 126.978 },
  { name: "서울 강남", lat: 37.5012, lng: 127.0396 },
  { name: "서울 송파", lat: 37.5133, lng: 127.1001 },
  { name: "서울 마포", lat: 37.5583, lng: 126.9368 },
  { name: "부산", lat: 35.1796, lng: 129.0756 },
  { name: "부산 해운대", lat: 35.1631, lng: 129.1635 },
  { name: "대구", lat: 35.8714, lng: 128.6014 },
  { name: "인천", lat: 37.4563, lng: 126.7052 },
  { name: "광주", lat: 35.1595, lng: 126.8526 },
  { name: "대전", lat: 36.3504, lng: 127.3845 },
  { name: "울산", lat: 35.5384, lng: 129.3114 },
  { name: "세종", lat: 36.48, lng: 127.26 },
  { name: "수원", lat: 37.2636, lng: 127.0286 },
  { name: "용인", lat: 37.2411, lng: 127.1776 },
  { name: "성남", lat: 37.4201, lng: 127.1265 },
  { name: "고양", lat: 37.6584, lng: 126.832 },
  { name: "화성", lat: 37.1995, lng: 127.0982 },
  { name: "천안", lat: 36.8151, lng: 127.1139 },
  { name: "아산", lat: 36.7898, lng: 127.0018 },
  { name: "평택", lat: 36.9921, lng: 127.1128 },
  { name: "전주", lat: 35.8242, lng: 127.148 },
  { name: "청주", lat: 36.6424, lng: 127.489 },
  { name: "창원", lat: 35.2281, lng: 128.6811 },
  { name: "김해", lat: 35.2285, lng: 128.8894 },
  { name: "제주", lat: 33.4996, lng: 126.5312 },
  { name: "포항", lat: 36.019, lng: 129.3435 },
  { name: "구미", lat: 36.1196, lng: 128.3446 },
  { name: "진주", lat: 35.1799, lng: 128.1076 },
  { name: "양산", lat: 35.3350, lng: 129.0373 },
  { name: "김포", lat: 37.6153, lng: 126.7155 },
  { name: "파주", lat: 37.7599, lng: 126.7797 },
  { name: "남양주", lat: 37.636, lng: 127.2165 },
  { name: "의정부", lat: 37.7381, lng: 127.0337 },
  { name: "시흥", lat: 37.3801, lng: 126.8028 },
  { name: "안산", lat: 37.3219, lng: 126.8309 },
  { name: "안양", lat: 37.3943, lng: 126.9568 },
  { name: "광명", lat: 37.4786, lng: 126.8644 },
  { name: "하남", lat: 37.5393, lng: 127.2148 },
  { name: "여수", lat: 34.7604, lng: 127.6622 },
  { name: "순천", lat: 34.9506, lng: 127.4872 },
  { name: "목포", lat: 34.8118, lng: 126.3922 },
  { name: "군산", lat: 35.9676, lng: 126.7369 },
  { name: "원주", lat: 37.3422, lng: 127.9202 },
  { name: "춘천", lat: 37.8813, lng: 127.7298 },
  { name: "강릉", lat: 37.7519, lng: 128.8761 },
  { name: "경주", lat: 35.8562, lng: 129.2247 },
  { name: "거제", lat: 34.8806, lng: 128.6211 },
  { name: "익산", lat: 35.948, lng: 126.9576 },
  { name: "서귀포", lat: 33.2541, lng: 126.5602 },
];

async function searchKakao(keyword, lat, lng, page = 1) {
  const url = `https://dapi.kakao.com/v2/local/search/keyword.json?query=${encodeURIComponent(keyword)}&y=${lat}&x=${lng}&radius=20000&size=15&page=${page}&sort=accuracy`;
  const res = await fetch(url, {
    headers: { Authorization: `KakaoAK ${REST_API_KEY}` },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.documents || [];
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function main() {
  const allProviders = new Map();
  let idCounter = 1;

  for (const cat of CATEGORIES) {
    console.log(`\n🔍 카테고리: ${cat.category}`);

    for (const kw of cat.keywords) {
      for (const city of CITIES) {
        // 페이지 1~3 검색 (최대 45개/도시/키워드)
        for (let page = 1; page <= 3; page++) {
          const results = await searchKakao(kw, city.lat, city.lng, page);
          if (results.length === 0) break;

          for (const doc of results) {
            const key = `${doc.place_name}_${doc.address_name}`;
            if (allProviders.has(key)) continue;
            if (!doc.phone) continue;

            allProviders.set(key, {
              id: `real-${idCounter++}`,
              name: doc.place_name,
              category: cat.category,
              description: doc.category_name || kw,
              lat: parseFloat(doc.y),
              lng: parseFloat(doc.x),
              address: doc.road_address_name || doc.address_name,
              phone: doc.phone,
              region: city.name,
            });
          }
          await sleep(100);
        }
      }
      console.log(`  "${kw}" → 누적 ${allProviders.size}개`);
    }
  }

  // 출력
  const entries = [...allProviders.values()];
  for (const p of entries) {
    const rating = (4.3 + Math.random() * 0.7).toFixed(1);
    const reviews = Math.floor(Math.random() * 300) + 5;
    const exp = `경력 ${Math.floor(Math.random() * 12) + 3}년`;
    console.log(`  p("${p.id}","${p.name.replace(/"/g, "'")}","${p.category}","${p.description.replace(/"/g, "'")}",${rating},${reviews},"${exp}",0,"가격문의",["${p.region}"],["전화문의"],true,${p.lat},${p.lng},"${p.address.replace(/"/g, "'")}","${p.phone}"),`);
  }

  console.error(`\n✅ 총 ${entries.length}개 업체 검색 완료!`);
}

main().catch(console.error);
