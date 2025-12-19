import { 
  Construction, 
  Paintbrush, 
  Zap, 
  Trees, 
  Truck, 
  ShieldCheck, 
  FileCheck, 
  MapPin, 
  Clock 
} from 'lucide-react';
import { ServiceItem, VehicleType } from './types';

export const COMPANY_INFO = {
  name: "산적스카이",
  slogan: "Your SKY, Our Strength.",
  owner: "전성현 대표",
  phone: "010-5269-6153",
  bank: {
    name: "신한은행",
    account: "110-536-961082",
    holder: "전성현"
  }
};

export const NAV_ITEMS = [
  { label: "홈", href: "#home" },
  { label: "소개", href: "#about" },
  { label: "주요업무", href: "#services" },
  { label: "작업갤러리", href: "#gallery" },
  { label: "배차시스템", href: "#dispatch" },
  { label: "문의하기", href: "#contact" },
];

export const MAIN_SERVICES: ServiceItem[] = [
  {
    title: "외벽 공사 및 보수",
    description: "징크, 판넬, 코킹, 페인트(각종 에어리스), 외벽 물청소 등 모든 외벽 작업을 꼼꼼하게 진행합니다.",
    icon: Paintbrush
  },
  {
    title: "특수 작업 및 설치",
    description: "교량 점검/보수, 고압 전기 공사, 가로등/램프 교체, 태양광 설치, 각종 양중 작업 전문입니다.",
    icon: Zap
  },
  {
    title: "조경 및 기타 작업",
    description: "전지 작업, 벌목, 이삿짐 운반 등 스카이차를 활용한 모든 작업을 수행합니다.",
    icon: Trees
  },
  {
    title: "안전 작업 전문",
    description: "좁은 골목이나 난이도 높은 현장도 숙련된 기술로 안전하게 작업합니다.",
    icon: ShieldCheck
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "1군 서류 완비",
    desc: "1군 건설사 현장에 필요한 모든 서류가 구비되어 있어 즉시 투입이 가능합니다.",
    icon: FileCheck
  },
  {
    title: "젊은 감각, 젊은 기사",
    desc: "젊은 인력 배차를 원하실 경우, 센스있고 활기찬 젊은 기사님으로 우선 배차해 드립니다.",
    icon: Clock
  },
  {
    title: "전국 배차 가능",
    desc: "경기도를 포함한 수도권은 물론, 전국 어디든 이동 및 배차가 가능합니다.",
    icon: MapPin
  }
];

export const DISPATCH_VEHICLES: VehicleType[] = [
  { name: "스카이차", description: "1톤 ~ 75m 다양한 기종 보유" },
  { name: "카고 크레인", description: "중량물 양중 및 운반" },
  { name: "기중기/크레인", description: "대형 건설 현장 양중" },
  { name: "사다리차", description: "이삿짐 및 자재 양중" },
  { name: "포크레인", description: "미니 굴삭기 포함 전 기종" }
];

export const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800&auto=format&fit=crop",
    title: "고층 외벽 작업",
    category: "외벽공사"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1581094794329-cd1096d7a43f?q=80&w=800&auto=format&fit=crop",
    title: "안전한 양중 작업",
    category: "자재양중"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=800&auto=format&fit=crop",
    title: "건설 현장 지원",
    category: "현장지원"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?q=80&w=800&auto=format&fit=crop",
    title: "전기 및 설비 작업",
    category: "특수작업"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1590059390239-01c514798b47?q=80&w=800&auto=format&fit=crop",
    title: "조경 및 전지 작업",
    category: "조경작업"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1590649774376-749c95d82063?q=80&w=800&auto=format&fit=crop",
    title: "야간 긴급 작업",
    category: "기타작업"
  }
];