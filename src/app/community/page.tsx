"use client";

import { useState, useMemo } from "react";
import type { Metadata } from "next";
import { Users, ExternalLink, Search, MapPin } from "lucide-react";
import { momCafes, regions } from "@/data/mom-cafes";

export default function CommunityPage() {
  const [regionFilter, setRegionFilter] = useState("전체");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    let list = regionFilter === "전체" ? momCafes : momCafes.filter((c) => c.region === regionFilter);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.subRegion.toLowerCase().includes(q) ||
          c.region.toLowerCase().includes(q)
      );
    }
    return list;
  }, [regionFilter, search]);

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="mb-8">
        <h1 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
          지역 맘카페 모음
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          새 동네로 이사하면 맘카페부터! 지역별 대표 맘카페를 한눈에 찾아보세요.
        </p>
      </div>

      {/* Search + Region Filter */}
      <div className="mb-6 flex flex-col gap-3 sm:flex-row">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="카페명 또는 지역 검색..."
            className="w-full rounded-lg border border-input bg-background py-2.5 pl-10 pr-4 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setRegionFilter("전체")}
            className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
              regionFilter === "전체"
                ? "bg-primary text-primary-foreground"
                : "bg-muted text-muted-foreground hover:bg-accent"
            }`}
          >
            전체 ({momCafes.length})
          </button>
          {regions.map((r) => (
            <button
              key={r}
              onClick={() => setRegionFilter(r)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors ${
                regionFilter === r
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted text-muted-foreground hover:bg-accent"
              }`}
            >
              {r}
            </button>
          ))}
        </div>
      </div>

      {/* Results Count */}
      <p className="mb-4 text-xs text-muted-foreground">{filtered.length}개 맘카페</p>

      {/* Cafe List */}
      <div className="grid gap-3 sm:grid-cols-2">
        {filtered.map((cafe) => (
          <a
            key={cafe.id}
            href={cafe.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex gap-3 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
          >
            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary">
              {cafe.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-bold text-foreground group-hover:text-primary">
                  {cafe.name}
                </span>
                <ExternalLink className="h-3 w-3 text-muted-foreground opacity-0 group-hover:opacity-100" />
              </div>
              <p className="mt-0.5 text-xs text-muted-foreground">
                {cafe.description}
              </p>
              <div className="mt-1.5 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1">
                  <MapPin className="h-3 w-3" />
                  {cafe.subRegion}
                </span>
                <span className="inline-flex items-center gap-1">
                  <Users className="h-3 w-3" />
                  회원 {cafe.members}명
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="py-16 text-center text-sm text-muted-foreground">
          검색 결과가 없습니다
        </div>
      )}

      {/* Info Box */}
      <div className="mt-8 rounded-xl border border-primary/20 bg-primary/5 p-5 text-center">
        <p className="text-sm font-semibold text-foreground">
          우리 동네 맘카페가 목록에 없나요?
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          추가를 원하시면 문의해주세요. 확인 후 등록해드립니다.
        </p>
      </div>

      {/* SEO 본문 — 외부 링크 디렉토리 인상 완화 */}
      <article className="mt-12 prose-custom">
        <h2 className="mb-4 text-xl font-bold tracking-tight text-foreground">
          새 동네 적응에 맘카페가 왜 중요한가요?
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          이사를 마치고 새 동네에 정착할 때 가장 빠르게 정보를 얻을 수 있는
          채널이 지역 맘카페입니다. 맘카페에는 동네 어린이집·소아과·맛집·미용실
          정보부터 학군·주차·재활용 일정까지 일상의 거의 모든 정보가 공유됩니다.
          이사 직후에는 인근 시설을 잘 모르는 상태이므로, 맘카페에 가입해 한
          달만 활발히 살펴봐도 동네 적응 시간을 절반 이상 줄일 수 있습니다.
        </p>
        <h3 className="mb-3 mt-6 text-base font-bold text-foreground">
          맘카페에서 얻을 수 있는 정보
        </h3>
        <ul className="ml-5 list-disc space-y-1 text-sm leading-relaxed text-muted-foreground">
          <li><strong className="text-foreground">교육 정보</strong>: 어린이집·유치원·학원 후기, 입학 정보, 학군 평가</li>
          <li><strong className="text-foreground">의료 정보</strong>: 동네 소아과·치과·산부인과 추천, 응급실 위치</li>
          <li><strong className="text-foreground">생활 편의</strong>: 마트·반찬가게·세탁소·미용실 평판</li>
          <li><strong className="text-foreground">중고 거래</strong>: 가구·가전·의류 직거래, 무료 나눔</li>
          <li><strong className="text-foreground">긴급 정보</strong>: 단지 공지, 도로 통제, 행사 안내</li>
          <li><strong className="text-foreground">육아 노하우</strong>: 같은 또래 부모와 정보 공유, 모임 형성</li>
        </ul>
        <h3 className="mb-3 mt-6 text-base font-bold text-foreground">
          맘카페 가입 후 활용 팁
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          맘카페는 가입 시 지역·자녀 정보 인증이 필요한 경우가 많습니다.
          신분증·주민등록등본·자녀 사진 등을 미리 준비해 두면 빠르게 가입할 수
          있습니다. 가입 직후 자기 소개 글을 올리면 이웃과 친해지기 쉽고,
          궁금한 점을 자유롭게 질문할 수 있습니다. 다만 맘카페별 운영 규칙이
          다르니 가입 즉시 공지사항을 꼭 확인하시기 바랍니다.
        </p>
        <h3 className="mb-3 mt-6 text-base font-bold text-foreground">
          이사꿀팁이 맘카페 정보를 정리하는 이유
        </h3>
        <p className="text-sm leading-relaxed text-muted-foreground">
          새 동네에서 어떤 맘카페가 활성화되어 있는지 검색만으로는 찾기
          어렵습니다. 회원 수·활동량·신뢰도가 좋은 맘카페를 미리 알면 이사
          첫날부터 정보를 얻을 수 있습니다. 이사꿀팁은 전국 주요 지역의 대표
          맘카페를 회원 수와 함께 정리해, 새 동네 정착이 막막한 분들이 빠르게
          첫 발을 떼실 수 있도록 돕고 있습니다. 본 페이지의 맘카페는 모두
          공개된 네이버 카페로, 가입 여부는 카페 운영진이 결정합니다.
        </p>
      </article>
    </div>
  );
}
