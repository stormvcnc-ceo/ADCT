
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { PROJECTS, WORK_CATEGORIES } from '@/data/projects';

// 다운로드 제한 상수
const DOWNLOAD_LIMITS = {
    HOURLY_MAX: 3,      // 1시간당 최대 3회
    DAILY_MAX: 5,       // 1일 최대 5회
    HOUR_MS: 60 * 60 * 1000,       // 1시간 (밀리초)
    DAY_MS: 24 * 60 * 60 * 1000,   // 1일 (밀리초)
};

// localStorage 키
const STORAGE_KEYS = {
    HOURLY_DOWNLOADS: 'adct_pdf_hourly_downloads',
    DAILY_DOWNLOADS: 'adct_pdf_daily_downloads',
    HOURLY_RESET_TIME: 'adct_pdf_hourly_reset',
    DAILY_RESET_TIME: 'adct_pdf_daily_reset',
};

// 다운로드 제한 체크 함수
const checkDownloadLimit = (): { allowed: boolean; message: string } => {
    const now = Date.now();

    // 시간 기반 리셋 체크
    const hourlyReset = Number(localStorage.getItem(STORAGE_KEYS.HOURLY_RESET_TIME)) || 0;
    const dailyReset = Number(localStorage.getItem(STORAGE_KEYS.DAILY_RESET_TIME)) || 0;

    let hourlyCount = Number(localStorage.getItem(STORAGE_KEYS.HOURLY_DOWNLOADS)) || 0;
    let dailyCount = Number(localStorage.getItem(STORAGE_KEYS.DAILY_DOWNLOADS)) || 0;

    // 1시간이 지났으면 시간당 카운트 리셋
    if (now - hourlyReset > DOWNLOAD_LIMITS.HOUR_MS) {
        hourlyCount = 0;
        localStorage.setItem(STORAGE_KEYS.HOURLY_DOWNLOADS, '0');
        localStorage.setItem(STORAGE_KEYS.HOURLY_RESET_TIME, String(now));
    }

    // 1일이 지났으면 일일 카운트 리셋
    if (now - dailyReset > DOWNLOAD_LIMITS.DAY_MS) {
        dailyCount = 0;
        localStorage.setItem(STORAGE_KEYS.DAILY_DOWNLOADS, '0');
        localStorage.setItem(STORAGE_KEYS.DAILY_RESET_TIME, String(now));
    }

    // 제한 체크
    if (dailyCount >= DOWNLOAD_LIMITS.DAILY_MAX) {
        const resetTime = new Date(dailyReset + DOWNLOAD_LIMITS.DAY_MS);
        return {
            allowed: false,
            message: `일일 다운로드 한도(${DOWNLOAD_LIMITS.DAILY_MAX}회)를 초과하였습니다.\n${resetTime.toLocaleString('ko-KR')} 이후에 다시 시도해 주세요.`
        };
    }

    if (hourlyCount >= DOWNLOAD_LIMITS.HOURLY_MAX) {
        const resetTime = new Date(hourlyReset + DOWNLOAD_LIMITS.HOUR_MS);
        return {
            allowed: false,
            message: `시간당 다운로드 한도(${DOWNLOAD_LIMITS.HOURLY_MAX}회)를 초과하였습니다.\n${resetTime.toLocaleTimeString('ko-KR')} 이후에 다시 시도해 주세요.`
        };
    }

    return { allowed: true, message: '' };
};

// 다운로드 횟수 기록 함수
const recordDownload = () => {
    const now = Date.now();

    // 현재 카운트 가져오기
    let hourlyCount = Number(localStorage.getItem(STORAGE_KEYS.HOURLY_DOWNLOADS)) || 0;
    let dailyCount = Number(localStorage.getItem(STORAGE_KEYS.DAILY_DOWNLOADS)) || 0;

    // 카운트 증가
    localStorage.setItem(STORAGE_KEYS.HOURLY_DOWNLOADS, String(hourlyCount + 1));
    localStorage.setItem(STORAGE_KEYS.DAILY_DOWNLOADS, String(dailyCount + 1));

    // 리셋 시간이 없으면 설정
    if (!localStorage.getItem(STORAGE_KEYS.HOURLY_RESET_TIME)) {
        localStorage.setItem(STORAGE_KEYS.HOURLY_RESET_TIME, String(now));
    }
    if (!localStorage.getItem(STORAGE_KEYS.DAILY_RESET_TIME)) {
        localStorage.setItem(STORAGE_KEYS.DAILY_RESET_TIME, String(now));
    }
};

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadError, setDownloadError] = useState<string | null>(null);

    const filteredProjects = activeCategory === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    // 보안 다운로드 핸들러 (Blob URL 사용)
    const handleSecureDownload = async () => {
        // 에러 메시지 초기화
        setDownloadError(null);

        // 1. 다운로드 제한 체크
        const limitCheck = checkDownloadLimit();
        if (!limitCheck.allowed) {
            setDownloadError(limitCheck.message);
            return;
        }

        setIsDownloading(true);

        try {
            // 2. PDF 파일을 fetch로 메모리에 로드
            const response = await fetch('/documents/ADCT-지명원.pdf');

            if (!response.ok) {
                throw new Error('파일을 불러올 수 없습니다.');
            }

            const blob = await response.blob();

            // 3. Blob 데이터로 임시 URL 생성
            const blobUrl = window.URL.createObjectURL(blob);

            // 4. 임시 <a> 태그 생성하여 다운로드 실행
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'ADCT-지명원.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            // 5. Blob URL 메모리에서 삭제
            window.URL.revokeObjectURL(blobUrl);

            // 6. 다운로드 기록 저장
            recordDownload();

        } catch (error) {
            console.error('다운로드 오류:', error);
            setDownloadError('다운로드 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
        } finally {
            setIsDownloading(false);
        }
    };

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h1 className="text-hero mb-8 animate-fade-in">
                        Works
                    </h1>
                    <p className="text-body-large text-muted-foreground mb-6 animate-slide-up">
                        20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다.<br />
                        Innovative today, Creative tomorrow.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8">
                        <span className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">20+ Years Experience</span>
                        <span className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">LH 공공기관 실적</span>
                        <span className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">대형 건설사 협업</span>
                    </div>

                    {/* Company Profile Download - 보안 다운로드 */}
                    <div className="mt-8">
                        <Button
                            variant="outline"
                            size="lg"
                            className="gap-2"
                            onClick={handleSecureDownload}
                            disabled={isDownloading}
                        >
                            {isDownloading ? (
                                <>
                                    <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                    </svg>
                                    다운로드 중...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    ADCT 지명원 다운로드
                                </>
                            )}
                        </Button>

                        {/* 에러 메시지 표시 */}
                        {downloadError && (
                            <div className="mt-4 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                                <p className="text-sm text-destructive whitespace-pre-line">{downloadError}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 px-6 lg:px-8 max-w-7xl mx-auto border-y border-border">
                <div className="flex flex-wrap gap-3 justify-center">
                    {WORK_CATEGORIES.map((cat) => (
                        <Button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            variant={activeCategory === cat.id ? 'default' : 'outline'}
                            size="lg"
                            className="transition-all"
                        >
                            {cat.name}
                        </Button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer animate-slide-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${[15, 16].includes(project.id) ? 'object-contain p-2 bg-white' : 'object-cover'} transition-transform duration-500 group-hover:scale-110`}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm font-medium">{project.achievement}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-primary font-medium">{project.year}</span>
                                    <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                                        {WORK_CATEGORIES.find(c => c.id === project.category)?.name}
                                    </span>
                                </div>
                                <h3 className="text-headline group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-muted mt-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-display mb-6">Your Success Story Starts Here</h2>
                    <p className="text-body-large text-muted-foreground mb-8">
                        20년 이상의 노하우로 귀사의 브랜드를<br />
                        성공으로 이끌어드리겠습니다.
                    </p>
                    <Button asChild size="lg">
                        <a href="#/contact">프로젝트 문의하기</a>
                    </Button>
                </div>
            </section>
        </PageLayout>
    );
};

export default Works;
