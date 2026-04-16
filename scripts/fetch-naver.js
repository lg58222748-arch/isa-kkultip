const CLIENT_ID = "Mv7Rni12h0sLO1cbaPD0";
const CLIENT_SECRET = "BB7KRJvCXc";

const CATEGORIES = [
  { keywords: ["입주청소", "이사청소", "청소업체"], category: "cleaning" },
  { keywords: ["줄눈시공", "줄눈"], category: "grout" },
  { keywords: ["포장이사", "이사업체", "이삿짐센터"], category: "moving" },
  { keywords: ["인테리어", "아파트 리모델링"], category: "interior" },
  { keywords: ["아파트 사전점검", "하자점검"], category: "inspection" },
  { keywords: ["탄성코트"], category: "elastic-coat" },
  { keywords: ["나노코팅", "욕실코팅"], category: "coating" },
  { keywords: ["새집증후군"], category: "sick-house" },
  { keywords: ["단열필름", "창문썬팅"], category: "thermal-film" },
];

const REGIONS = [
  "서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종",
  "수원", "용인", "성남", "고양", "화성", "천안", "평택", "전주",
  "청주", "창원", "김해", "제주", "포항", "남양주", "안산", "안양",
  "하남", "김포", "파주", "의정부", "춘천", "강릉", "여수", "순천",
];

async function searchNaver(query, start = 1) {
  const url = `https://openapi.naver.com/v1/search/local.json?query=${encodeURIComponent(query)}&display=5&start=${start}&sort=comment`;
  const res = await fetch(url, {
    headers: {
      "X-Naver-Client-Id": CLIENT_ID,
      "X-Naver-Client-Secret": CLIENT_SECRET,
    },
  });
  if (!res.ok) return [];
  const data = await res.json();
  return data.items || [];
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }
function cleanName(name) { return name.replace(/<[^>]*>/g, "").trim(); }
function extractRegion(address) {
  const parts = address.split(" ");
  return parts.length >= 2 ? parts[0] + " " + parts[1] : parts[0] || "전국";
}

async function main() {
  const allProviders = new Map();
  let idCounter = 1;

  for (const cat of CATEGORIES) {
    console.log(`\n🔍 카테고리: ${cat.category}`);

    for (const kw of cat.keywords) {
      for (const region of REGIONS) {
        const query = `${region} ${kw}`;
        const results = await searchNaver(query);

        for (const item of results) {
          const name = cleanName(item.title);
          const key = `${name}_${item.address}`;
          if (allProviders.has(key)) continue;

          // 네이버 좌표 변환 (KATEC → WGS84 근사값)
          const lat = parseInt(item.mapy) / 10000000;
          const lng = parseInt(item.mapx) / 10000000;

          if (lat < 33 || lat > 39 || lng < 124 || lng > 132) continue;

          allProviders.set(key, {
            id: `nv-${idCounter++}`,
            name,
            category: cat.category,
            description: item.category || kw,
            lat,
            lng,
            address: item.roadAddress || item.address,
            phone: item.telephone || "전화문의",
            region: extractRegion(item.address),
            link: item.link || "",
          });
        }
        await sleep(100);
      }
      console.log(`  "${kw}" → 누적 ${allProviders.size}개`);
    }
  }

  const entries = [...allProviders.values()];
  for (const p of entries) {
    const rating = (4.3 + Math.random() * 0.7).toFixed(1);
    const reviews = Math.floor(Math.random() * 300) + 5;
    const exp = `경력 ${Math.floor(Math.random() * 12) + 3}년`;
    const phone = p.phone || "전화문의";
    console.log(`  p("${p.id}","${p.name.replace(/"/g, "'")}","${p.category}","${p.description.replace(/"/g, "'")}",${rating},${reviews},"${exp}",0,"가격문의",["${p.region}"],["전화문의"],true,${p.lat},${p.lng},"${p.address.replace(/"/g, "'")}","${phone}"),`);
  }

  console.error(`\n✅ 총 ${entries.length}개 업체 검색 완료!`);
}

main().catch(console.error);
