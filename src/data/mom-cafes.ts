export interface MomCafe {
  id: string;
  name: string;
  region: string;
  subRegion: string;
  members: string;
  url: string;
  description: string;
}

export const momCafes: MomCafe[] = [
  // ── 서울 ──
  { id: "mc1", name: "강남엄마 VS 목동엄마", region: "서울", subRegion: "강남/목동", members: "39만", url: "https://cafe.naver.com/gangmommok", description: "서울 대표 맘카페, 교육/입시 정보 활발" },
  { id: "mc2", name: "강북노원도봉맘 모여라", region: "서울", subRegion: "노원/강북/도봉", members: "11만", url: "https://cafe.naver.com/momsnowon", description: "강북권 대표 맘카페" },
  { id: "mc3", name: "송파맘들 오세요", region: "서울", subRegion: "송파", members: "1만", url: "https://cafe.naver.com/songpamom", description: "송파구 지역 맘카페" },
  { id: "mc4", name: "강동맘", region: "서울", subRegion: "강동", members: "3만", url: "https://cafe.naver.com/gangdongmom", description: "강동구 육아/생활 정보" },
  { id: "mc5", name: "서초맘카페", region: "서울", subRegion: "서초", members: "2만", url: "https://ssc.mcafe.me/", description: "서초구 지역 맘카페" },
  { id: "mc6", name: "성동맘 모여라", region: "서울", subRegion: "성동/광진", members: "1.5만", url: "https://cafe.naver.com/sdmom", description: "성동·광진구 맘카페" },
  { id: "mc7", name: "마포맘 모여라", region: "서울", subRegion: "마포", members: "2만", url: "https://cafe.naver.com/mapomom", description: "마포구 지역 맘카페" },
  { id: "mc8", name: "노원구 월계맘 모여라", region: "서울", subRegion: "노원/월계", members: "2만", url: "https://cafe.naver.com/wolgye", description: "노원구 월계동 중심 맘카페" },

  // ── 경기 ──
  { id: "mc10", name: "동탄맘들 모여라", region: "경기", subRegion: "화성/동탄", members: "30만", url: "https://cafe.naver.com/dongtanmom", description: "동탄 최대 맘카페, 전국구 유명" },
  { id: "mc11", name: "분당판교 따라잡기", region: "경기", subRegion: "성남/분당/판교", members: "15만", url: "https://cafe.naver.com/2008bunsamo", description: "분당·판교 교육/생활 정보" },
  { id: "mc12", name: "일산아지매", region: "경기", subRegion: "고양/일산", members: "20만", url: "https://cafe.naver.com/isajime", description: "일산 대표 맘카페" },
  { id: "mc13", name: "수원맘 모여라", region: "경기", subRegion: "수원", members: "8만", url: "https://cafe.naver.com/byungs94", description: "수원 지역 맘카페" },
  { id: "mc14", name: "용광맘 모여라", region: "경기", subRegion: "용인/광교", members: "10만", url: "https://cafe.naver.com/yonggwangmom", description: "용인·광교 지역 맘카페" },
  { id: "mc15", name: "구리남양주맘", region: "경기", subRegion: "구리/남양주", members: "5만", url: "https://cafe.naver.com/momingrnyj", description: "구리·남양주 지역 맘카페" },
  { id: "mc16", name: "파주맘", region: "경기", subRegion: "파주", members: "3만", url: "https://cafe.naver.com/pajumom", description: "파주 지역 맘카페" },
  { id: "mc17", name: "평택안포맘", region: "경기", subRegion: "평택", members: "4만", url: "https://cafe.naver.com/anjungmom", description: "평택·안중 지역 맘카페" },
  { id: "mc18", name: "하남 미사 맘스클럽", region: "경기", subRegion: "하남/미사", members: "3만", url: "https://cafe.naver.com/ira111", description: "하남·미사 지역 맘카페" },
  { id: "mc19", name: "김포 한아름", region: "경기", subRegion: "김포", members: "4만", url: "https://cafe.naver.com/momroom2013", description: "김포 지역 맘카페" },
  { id: "mc20", name: "안양군포의왕 맘스홀릭", region: "경기", subRegion: "안양/군포/의왕", members: "5만", url: "https://cafe.naver.com/allgirl", description: "안양·군포·의왕 맘카페" },
  { id: "mc21", name: "부천 애솔나무", region: "경기", subRegion: "부천", members: "3만", url: "https://cafe.naver.com/buchonmom", description: "부천 지역 맘카페" },
  { id: "mc22", name: "광명 나눔카페", region: "경기", subRegion: "광명", members: "2만", url: "https://cafe.naver.com/ilovegm1", description: "광명 지역 맘카페" },
  { id: "mc23", name: "위례맘홀릭", region: "경기", subRegion: "위례", members: "3만", url: "https://cafe.naver.com/bbbx", description: "위례신도시 맘카페" },
  { id: "mc24", name: "별내맘", region: "경기", subRegion: "별내", members: "1.5만", url: "https://cafe.naver.com/star4sarang", description: "별내신도시 맘카페" },
  { id: "mc25", name: "안산 안시모", region: "경기", subRegion: "안산", members: "3만", url: "https://cafe.naver.com/doorkong", description: "안산 지역 맘카페" },
  { id: "mc26", name: "의정부엄마들의모임", region: "경기", subRegion: "의정부", members: "2만", url: "https://cafe.naver.com/pianisthb", description: "의정부 지역 맘카페" },
  { id: "mc27", name: "병점맘", region: "경기", subRegion: "화성/병점", members: "2만", url: "https://cafe.naver.com/bgga", description: "병점 지역 맘카페" },
  { id: "mc28", name: "죽전마북보정맘", region: "경기", subRegion: "용인/죽전", members: "1만", url: "https://cafe.naver.com/jookjeonmom", description: "죽전·마북·보정 맘카페" },

  // ── 인천 ──
  { id: "mc30", name: "인천아띠아모", region: "인천", subRegion: "인천 전체", members: "8만", url: "https://cafe.naver.com/kyungmammo", description: "인천 대표 맘카페" },
  { id: "mc31", name: "인천맘 소중한인연", region: "인천", subRegion: "인천 전체", members: "5만", url: "https://cafe.naver.com/incmom", description: "인천 지역 맘카페" },

  // ── 충청 ──
  { id: "mc35", name: "천안아산 줌마렐라", region: "충남", subRegion: "천안/아산", members: "15만", url: "https://cafe.naver.com/cheonanmom", description: "천안·아산 대표 맘카페" },
  { id: "mc36", name: "대전맘 모여라", region: "대전", subRegion: "대전 전체", members: "8만", url: "https://cafe.naver.com/daejeonmom", description: "대전 대표 맘카페" },
  { id: "mc37", name: "세종맘 모여라", region: "세종", subRegion: "세종시", members: "5만", url: "https://cafe.naver.com/sejongmom", description: "세종시 맘카페" },
  { id: "mc38", name: "청주맘 모여라", region: "충북", subRegion: "청주", members: "3만", url: "https://cafe.naver.com/cheongjumom", description: "청주 지역 맘카페" },

  // ── 부산/경남 ──
  { id: "mc40", name: "부산맘카페", region: "부산", subRegion: "부산 전체", members: "10만", url: "https://cafe.naver.com/busanmom", description: "부산 대표 맘카페" },
  { id: "mc41", name: "창원 줌마렐라", region: "경남", subRegion: "창원/마산/진해", members: "25만", url: "https://cafe.naver.com/changwonmom", description: "창원·마산·진해·함안 대표 맘카페" },
  { id: "mc42", name: "김해 줌마렐라", region: "경남", subRegion: "김해", members: "11만", url: "https://cafe.naver.com/gimhaemom", description: "김해 지역 맘카페" },
  { id: "mc43", name: "울산맘's 모여라", region: "울산", subRegion: "울산 전체", members: "8만", url: "https://cafe.naver.com/ulsanmom", description: "울산 대표 맘카페" },
  { id: "mc44", name: "러브양산맘카페", region: "경남", subRegion: "양산", members: "8만", url: "https://cafe.naver.com/yangsanmom", description: "양산 지역 맘카페" },
  { id: "mc45", name: "진주아지매", region: "경남", subRegion: "진주", members: "8만", url: "https://cafe.naver.com/jinjuajimae", description: "진주 지역 맘카페" },

  // ── 대구/경북 ──
  { id: "mc50", name: "대구맘 대표카페", region: "대구", subRegion: "대구 전체", members: "3만", url: "https://cafe.naver.com/daegumom", description: "대구 대표 맘카페" },
  { id: "mc51", name: "구미맘맘맘", region: "경북", subRegion: "구미", members: "1만", url: "https://cafe.naver.com/gumimom", description: "구미 지역 맘카페" },

  // ── 광주/전라 ──
  { id: "mc55", name: "광주맘 모여라", region: "광주", subRegion: "광주 전체", members: "5만", url: "https://cafe.naver.com/gwangjumom", description: "광주 대표 맘카페" },
  { id: "mc56", name: "전주맘 모여라", region: "전북", subRegion: "전주", members: "3만", url: "https://cafe.naver.com/jeonjumom", description: "전주 지역 맘카페" },

  // ── 강원 ──
  { id: "mc60", name: "춘천맘 모여라", region: "강원", subRegion: "춘천", members: "1.5만", url: "https://cafe.naver.com/chuncheonmom", description: "춘천 지역 맘카페" },

  // ── 제주 ──
  { id: "mc65", name: "제주맘 모여라", region: "제주", subRegion: "제주 전체", members: "3만", url: "https://cafe.naver.com/jejumom", description: "제주 지역 맘카페" },
];

export const regions = [...new Set(momCafes.map((c) => c.region))];
