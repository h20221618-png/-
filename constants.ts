import { Project, Executive, Activity, Notice } from './types';

export const NAV_ITEMS = [
  { label: '임원진 소개', href: '#intro' },
  { label: '학생회 활동', href: '#activities' },
  { label: '알림 사항', href: '#notices' },
];

export const PROJECTS: Project[] = [
  { id: 1, title: '미디어제: Prism', category: 'Festival', imageUrl: 'https://picsum.photos/id/48/600/400' },
  { id: 2, title: '학술 세미나: Insight', category: 'Academic', imageUrl: 'https://picsum.photos/id/20/600/400' },
  { id: 3, title: '신입생 오리엔테이션', category: 'Event', imageUrl: 'https://picsum.photos/id/180/600/400' },
  { id: 4, title: 'e-Sports 대회', category: 'Competition', imageUrl: 'https://picsum.photos/id/96/600/400' },
  { id: 5, title: '졸업 전시회: Bloom', category: 'Exhibition', imageUrl: 'https://picsum.photos/id/366/600/400' },
];

export const EXECUTIVES: Executive[] = [
  { id: 1, name: '김한림', role: '학생회장', imageUrl: 'https://picsum.photos/id/64/300/300' },
  { id: 2, name: '이미디어', role: '부학생회장', imageUrl: 'https://picsum.photos/id/65/300/300' },
  { id: 3, name: '박기획', role: '기획국장', imageUrl: 'https://picsum.photos/id/91/300/300' },
  { id: 4, name: '최홍보', role: '홍보국장', imageUrl: 'https://picsum.photos/id/177/300/300' },
];

export const ACTIVITIES: Activity[] = [
  { 
    id: 1, 
    title: '봄 MT', 
    date: '2024.03.20', 
    description: '미디어스쿨 학우들이 하나되는 즐거운 봄 MT!', 
    imageUrl: 'https://picsum.photos/id/28/500/300' 
  },
  { 
    id: 2, 
    title: '스승의 날 행사', 
    date: '2024.05.15', 
    description: '교수님께 감사의 마음을 전하는 따뜻한 시간.', 
    imageUrl: 'https://picsum.photos/id/56/500/300' 
  },
  { 
    id: 3, 
    title: '기말고사 간식행사', 
    date: '2024.06.10', 
    description: '시험기간 지친 학우들을 위한 달콤한 응원!', 
    imageUrl: 'https://picsum.photos/id/225/500/300' 
  },
];

export const NOTICES: Notice[] = [
  { id: 1, title: '2024학년도 2학기 개강총회 안내', date: '2024.08.28', isImportant: true },
  { id: 2, title: '제29대 학생회 국원 추가 모집', date: '2024.08.20', isImportant: true },
  { id: 3, title: '미디어관 사물함 신청 기간 연장', date: '2024.08.15', isImportant: false },
  { id: 4, title: '졸업작품 전시회 관람 에티켓', date: '2024.08.10', isImportant: false },
];