// 회사 정보 설정 파일
// 이 파일을 수정하면 웹사이트 전체에 반영됩니다.

export const COMPANY_INFO = {
    // 기본 정보
    name: {
        korean: '(주)애드시티',
        english: 'ADCT',
        full: '(주)애드시티 (ADCT)'
    },

    // 대표자 정보
    ceo: {
        name: '김언태',
        title: '대표이사'
    },

    // 사업자 정보
    business: {
        registrationNumber: '602-81-63381', // 사업자등록번호
        establishedYear: '2005'
    },

    // 연락처
    contact: {
        email: 'gimeontae@gmail.com',
        phone: '051-740-5716',
        fax: '051-740-5716' // 팩스번호
    },

    // 주소
    address: {
        full: '부산광역시 해운대구 해운대해변로 203 오션타워 1716호',
        street: '부산광역시 해운대구 해운대해변로 203',
        building: '오션타워 1716호',
        postalCode: '48093'
    },

    // 개인정보보호
    privacy: {
        officer: '김언태',
        officerEmail: 'gimeontae@gmail.com'
    },

    // 소셜 미디어 (필요시 URL 입력)
    social: {
        instagram: '#',
        linkedin: '',
        behance: ''
    },

    // 회사 소개
    description: {
        korean: '20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다.',
        english: 'Innovative today, Creative tomorrow.',
        tagline: 'Creative Impact, Visible Result'
    },

    // 저작권
    copyright: {
        year: new Date().getFullYear(),
        text: 'ADCT. All rights reserved.'
    }
};

// 네비게이션 메뉴
export const NAV_ITEMS = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Capabilities', path: '/capabilities' },
    { name: 'Process', path: '/process' },
    { name: 'Works', path: '/works' },
    { name: 'Contact', path: '/contact' }
];
