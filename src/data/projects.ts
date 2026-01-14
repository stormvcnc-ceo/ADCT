// Works 페이지 프로젝트 데이터
export const PROJECTS = [
    // 아파트/주거
    {
        id: 1,
        category: 'apartment',
        title: '이안동래 센트럴시티',
        description: '사전점검 및 입주지원',
        year: '2023',
        achievement: '안정적 입주 완료',
        image: '/images/works/work-1.png'
    },
    {
        id: 2,
        category: 'apartment',
        title: '영주 아이파크',
        description: '일반분양 광고',
        year: '2022',
        achievement: '분양 완료',
        image: '/images/works/work-2.png'
    },
    {
        id: 3,
        category: 'apartment',
        title: '연산포레 서희스타힐스',
        description: '일반분양 광고',
        year: '2021',
        achievement: '2개월 만에 분양 마감',
        image: '/images/works/work-3.png'
    },
    {
        id: 4,
        category: 'apartment',
        title: 'LH 부산좌천 오션브릿지',
        description: '주상복합/오피스텔 분양',
        year: '2020',
        achievement: '791세대 분양 완료',
        image: '/images/works/work-4-v2.png'
    },
    {
        id: 5,
        category: 'apartment',
        title: 'LH 부산신평 천년나무',
        description: '공공주택 분양광고',
        year: '2019',
        achievement: '900세대 분양 완료',
        image: '/images/works/work-5.png'
    },
    {
        id: 6,
        category: 'apartment',
        title: '오륙도 SK VIEW',
        description: '부산 최대 랜드마크 마케팅',
        year: '2018',
        achievement: '계약률 95% 달성',
        image: '/images/works/work-6.png'
    },
    // 상업/복합시설
    {
        id: 7,
        category: 'commercial',
        title: '해운대 더샵 센텀그린',
        description: '단지 내 상가 분양/임대',
        year: '2022',
        achievement: '독점 분양 완료',
        image: '/images/works/work-7.png'
    },
    {
        id: 8,
        category: 'commercial',
        title: '연제 롯데캐슬 & 데시앙',
        description: '단지 내 상가 독점 분양',
        year: '2021',
        achievement: '만실 달성',
        image: '/images/works/work-8.png'
    },
    {
        id: 9,
        category: 'commercial',
        title: '부산개금역 금강펜테리움',
        description: '초역세권 상가 공개입찰',
        year: '2020',
        achievement: '경쟁률 8:1 달성',
        image: '/images/works/work-9.png'
    },
    {
        id: 10,
        category: 'commercial',
        title: '세븐스퀘어 광안수영지하상가',
        description: '캐릭터 개발 및 개통확정 분양광고',
        year: '2019',
        achievement: '개통 완료',
        image: '/images/works/work-10.png'
    },
    // 브랜드 디자인

    {
        id: 12,
        category: 'branding',
        title: '(주)경신 KSP 화성공장',
        description: 'CIP 개발 및 외관 디자인',
        year: '2021',
        achievement: '기업 이미지 혁신',
        image: '/images/works/work-12.png'
    },
    {
        id: 13,
        category: 'branding',
        title: '기현정공(주)',
        description: '기업 아이덴티티(CI) 디자인',
        year: '2020',
        achievement: 'CI 시스템 전면 리뉴얼',
        image: '/images/works/work-13.png'
    },
    {
        id: 14,
        category: 'branding',
        title: '바벨몬스터 BARBELL MONSTER',
        description: '크로스핏 브랜드 BI 개발',
        year: '2022',
        achievement: '브랜드 론칭 성공',
        image: '/images/works/work-14.png'
    },
    // 스페셜 캠페인
    {
        id: 15,
        category: 'campaign',
        title: '배덕광 국회의원 선거캠프',
        description: '해운대구·기장군 갑 선거 총괄 홍보',
        year: '2014-2016',
        achievement: '당선 성공',
        image: '/images/works/work-15.png'
    },
    {
        id: 16,
        category: 'campaign',
        title: '석동현 예비후보 선거캠프',
        description: '부산 사하을 선거 캠페인 홍보 총괄',
        year: '2016',
        achievement: '전략 기획 완료',
        image: '/images/works/work-16.png'
    }
];

// 카테고리 정의
export const WORK_CATEGORIES = [
    { id: 'all', name: 'All Projects' },
    { id: 'apartment', name: '아파트/주거' },
    { id: 'commercial', name: '상업/복합시설' },
    { id: 'branding', name: '브랜드 디자인' },
    { id: 'campaign', name: '스페셜 캠페인' }
];
