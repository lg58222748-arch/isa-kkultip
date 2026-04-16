export interface Inquiry {
  id: string;
  customerName: string;
  phone: string;
  service: string;
  region: string;
  apartmentSize: string;
  moveDate: string;
  message: string;
  status: "pending" | "in-progress" | "completed";
  createdAt: string;
}

export const dummyInquiries: Inquiry[] = [
  { id: "inq-1", customerName: "김민수", phone: "010-1234-5678", service: "입주청소", region: "서울 강남구", apartmentSize: "32평", moveDate: "2026-05-01", message: "5월 1일 입주 예정인데 입주청소 견적 부탁드립니다.", status: "pending", createdAt: "2026-04-16" },
  { id: "inq-2", customerName: "이서연", phone: "010-2345-6789", service: "줄눈시공", region: "경기 성남시", apartmentSize: "28평", moveDate: "2026-04-25", message: "에폭시 줄눈 시공 희망합니다. 욕실 2개, 주방 1개입니다.", status: "in-progress", createdAt: "2026-04-15" },
  { id: "inq-3", customerName: "박지훈", phone: "010-3456-7890", service: "사전점검", region: "서울 송파구", apartmentSize: "42평", moveDate: "2026-04-20", message: "사전점검일이 4월 20일인데 같이 가주실 수 있나요?", status: "completed", createdAt: "2026-04-14" },
  { id: "inq-4", customerName: "최수아", phone: "010-4567-8901", service: "포장이사", region: "서울 마포구", apartmentSize: "25평", moveDate: "2026-05-10", message: "마포에서 분당으로 이사합니다. 포장이사 견적 부탁합니다.", status: "pending", createdAt: "2026-04-14" },
  { id: "inq-5", customerName: "정우진", phone: "010-5678-9012", service: "탄성코트", region: "인천 연수구", apartmentSize: "34평", moveDate: "2026-04-28", message: "베란다 탄성코트 시공 문의드립니다.", status: "pending", createdAt: "2026-04-13" },
  { id: "inq-6", customerName: "한예진", phone: "010-6789-0123", service: "나노코팅", region: "서울 강동구", apartmentSize: "30평", moveDate: "2026-05-05", message: "싱크대+욕실 유리 나노코팅 견적 부탁드려요.", status: "in-progress", createdAt: "2026-04-12" },
  { id: "inq-7", customerName: "윤도현", phone: "010-7890-1234", service: "새집증후군", region: "경기 화성시", apartmentSize: "38평", moveDate: "2026-05-15", message: "아기가 있어서 새집증후군 제거 시공이 필요합니다.", status: "pending", createdAt: "2026-04-11" },
  { id: "inq-8", customerName: "강하은", phone: "010-8901-2345", service: "입주청소", region: "서울 서초구", apartmentSize: "48평", moveDate: "2026-04-22", message: "48평 입주청소 가능한 업체 찾고 있습니다.", status: "completed", createdAt: "2026-04-10" },
  { id: "inq-9", customerName: "조현우", phone: "010-9012-3456", service: "줄눈시공", region: "서울 용산구", apartmentSize: "35평", moveDate: "2026-05-03", message: "나노 줄눈으로 시공 원합니다. 색상은 화이트요.", status: "pending", createdAt: "2026-04-09" },
  { id: "inq-10", customerName: "임서진", phone: "010-0123-4567", service: "단열필름", region: "경기 고양시", apartmentSize: "33평", moveDate: "2026-05-08", message: "서향 거실 창문에 단열필름 부착하고 싶습니다.", status: "pending", createdAt: "2026-04-08" },
];
