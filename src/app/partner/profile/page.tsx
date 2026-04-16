"use client";

import { useState } from "react";
import { Shield, MapPin, Phone, Clock, Save } from "lucide-react";

export default function PartnerProfile() {
  const [saved, setSaved] = useState(false);

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-xl font-bold text-foreground">업체 정보 관리</h1>
        <p className="text-xs text-muted-foreground">고객에게 보여지는 업체 정보를 수정하세요</p>
      </div>

      <div className="max-w-2xl">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
          }}
          className="flex flex-col gap-6"
        >
          {/* Basic Info */}
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h2 className="mb-4 text-sm font-bold text-foreground">기본 정보</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">업체명</label>
                <input type="text" defaultValue="입주하자" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">한줄 소개</label>
                <input type="text" defaultValue="프리미엄 아파트 사전점검 전문, 꼼꼼한 하자체크" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">상세 소개</label>
                <textarea rows={4} defaultValue="10년 이상의 경력을 가진 전문가 팀이 100개 이상의 항목을 체크합니다. 사전점검 후 상세 보고서를 당일 제공하며, 하자 보수 요청서까지 대신 작성해드립니다." className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
            </div>
          </div>

          {/* Contact */}
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h2 className="mb-4 text-sm font-bold text-foreground">연락처</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">대표 전화번호</label>
                <input type="tel" defaultValue="02-1234-5678" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">이메일</label>
                <input type="email" defaultValue="contact@ipjuhaja.com" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1 block text-xs font-medium text-foreground">주소</label>
                <input type="text" defaultValue="서울 강남구 역삼동 123-4" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
            </div>
          </div>

          {/* Service Info */}
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h2 className="mb-4 text-sm font-bold text-foreground">서비스 정보</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">업종</label>
                <select defaultValue="inspection" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary">
                  <option value="inspection">사전점검</option>
                  <option value="elastic-coat">탄성코트</option>
                  <option value="grout">줄눈시공</option>
                  <option value="cleaning">입주청소</option>
                  <option value="sick-house">새집증후군</option>
                  <option value="coating">나노코팅</option>
                  <option value="thermal-film">단열필름</option>
                  <option value="moving">포장이사</option>
                </select>
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">경력</label>
                <input type="text" defaultValue="8년" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">시작 가격</label>
                <input type="text" defaultValue="129,000원~" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-foreground">서비스 지역</label>
                <input type="text" defaultValue="서울, 경기" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
              </div>
            </div>
            <div className="mt-4">
              <label className="mb-1 block text-xs font-medium text-foreground">강점 태그 (쉼표로 구분)</label>
              <input type="text" defaultValue="당일 보고서, 사진 리포트" className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none focus:border-primary focus:ring-1 focus:ring-primary" />
            </div>
          </div>

          {/* Notification Settings */}
          <div className="rounded-xl border border-border/60 bg-card p-5">
            <h2 className="mb-4 text-sm font-bold text-foreground">알림 설정</h2>
            <div className="flex flex-col gap-3">
              <label className="flex items-center justify-between">
                <span className="text-sm text-foreground">새 문의 알림 (문자)</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-input text-primary" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-foreground">새 문의 알림 (이메일)</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-input text-primary" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-foreground">새 후기 알림</span>
                <input type="checkbox" defaultChecked className="h-4 w-4 rounded border-input text-primary" />
              </label>
              <label className="flex items-center justify-between">
                <span className="text-sm text-foreground">주간 리포트 수신</span>
                <input type="checkbox" className="h-4 w-4 rounded border-input text-primary" />
              </label>
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90"
          >
            <Save className="h-4 w-4" />
            {saved ? "저장 완료!" : "변경사항 저장"}
          </button>
        </form>
      </div>
    </div>
  );
}
