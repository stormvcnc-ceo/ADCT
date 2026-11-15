import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Download, Loader2, ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';
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

    const hourlyReset = Number(localStorage.getItem(STORAGE_KEYS.HOURLY_RESET_TIME)) || 0;
    const dailyReset = Number(localStorage.getItem(STORAGE_KEYS.DAILY_RESET_TIME)) || 0;

    let hourlyCount = Number(localStorage.getItem(STORAGE_KEYS.HOURLY_DOWNLOADS)) || 0;
    let dailyCount = Number(localStorage.getItem(STORAGE_KEYS.DAILY_DOWNLOADS)) || 0;

    if (now - hourlyReset > DOWNLOAD_LIMITS.HOUR_MS) {
        hourlyCount = 0;
        localStorage.setItem(STORAGE_KEYS.HOURLY_DOWNLOADS, '0');
        localStorage.setItem(STORAGE_KEYS.HOURLY_RESET_TIME, String(now));
    }

    if (now - dailyReset > DOWNLOAD_LIMITS.DAY_MS) {
        dailyCount = 0;
        localStorage.setItem(STORAGE_KEYS.DAILY_DOWNLOADS, '0');
        localStorage.setItem(STORAGE_KEYS.DAILY_RESET_TIME, String(now));
    }

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

const recordDownload = () => {
    const now = Date.now();
    let hourlyCount = Number(localStorage.getItem(STORAGE_KEYS.HOURLY_DOWNLOADS)) || 0;
    let dailyCount = Number(localStorage.getItem(STORAGE_KEYS.DAILY_DOWNLOADS)) || 0;

    localStorage.setItem(STORAGE_KEYS.HOURLY_DOWNLOADS, String(hourlyCount + 1));
    localStorage.setItem(STORAGE_KEYS.DAILY_DOWNLOADS, String(dailyCount + 1));

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

    // 보안 다운로드 핸들러
    const handleSecureDownload = async () => {
        setDownloadError(null);

        const limitCheck = checkDownloadLimit();
        if (!limitCheck.allowed) {
            setDownloadError(limitCheck.message);
            return;
        }

        setIsDownloading(true);

        try {
            const response = await fetch('/documents/ADCT-지명원.pdf');
            if (!response.ok) {
                throw new Error('파일을 불러올 수 없습니다.');
            }

            const blob = await response.blob();
            const blobUrl = window.URL.createObjectURL(blob);
            const link = document.createElement('a');
            link.href = blobUrl;
            link.download = 'ADCT-지명원.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(blobUrl);

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
            {/* Header Section */}
            <section className="pt-28 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl space-y-5">
                    <span className="text-xs font-mono text-zinc-500 tracking-wide block">
                        Portfolio &amp; Archive
                    </span>

                    <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight text-zinc-950">
                        Selected Works
                    </h1>

                    <p className="text-base text-zinc-600 leading-relaxed max-w-prose">
                        20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다.
                        <span className="block text-sm text-zinc-500 mt-1">
                            LH 공공기관 · 대형 건설사 협업 및 주거·상업 분양 마케팅 실무 아카이브
                        </span>
                    </p>

                    {/* Company Profile Download Button */}
                    <div className="pt-3">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-zinc-950 hover:bg-zinc-800 text-zinc-50 text-xs font-medium transition-all duration-150 active:scale-[0.98] disabled:opacity-50"
                            onClick={handleSecureDownload}
                            disabled={isDownloading}
                        >
                            {isDownloading ? (
                                <>
                                    <Loader2 className="w-4 h-4 animate-spin" strokeWidth={1.5} />
                                    다운로드 진행 중...
                                </>
                            ) : (
                                <>
                                    <Download className="w-4 h-4" strokeWidth={1.5} />
                                    ADCT 회사 지명원 다운로드 (PDF)
                                </>
                            )}
                        </button>

                        {downloadError && (
                            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md max-w-md">
                                <p className="text-xs text-red-700 whitespace-pre-line leading-relaxed">{downloadError}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-5 px-6 lg:px-8 max-w-7xl mx-auto border-y border-zinc-200">
                <div className="flex flex-wrap gap-2">
                    {WORK_CATEGORIES.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-150 ${
                                    isActive
                                        ? 'bg-zinc-950 text-zinc-50'
                                        : 'text-zinc-600 hover:text-zinc-950 hover:bg-zinc-200/60 border border-zinc-200 bg-white'
                                }`}
                            >
                                {cat.name}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Projects Grid (Editorial Gallery Style) */}
            <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
                    {filteredProjects.map((project) => (
                        <article key={project.id} className="group space-y-4">
                            {/* Project Image */}
                            <div className="relative overflow-hidden rounded-xl aspect-[4/3] bg-zinc-200/60 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${
                                        [15, 16].includes(project.id) ? 'object-contain p-4 bg-white' : 'object-cover'
                                    } transition-transform duration-700 ease-out group-hover:scale-[1.03]`}
                                    loading="lazy"
                                />
                            </div>

                            {/* Project Info */}
                            <div className="space-y-1.5">
                                <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                                    <span>
                                        {WORK_CATEGORIES.find((c) => c.id === project.category)?.name} · {project.year}
                                    </span>
                                    <span className="text-zinc-800 font-medium">{project.achievement}</span>
                                </div>
                                <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-zinc-600 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>

            {/* CTA Section (Dark Charcoal Bookend) */}
            <section className="py-24 px-6 lg:px-8 border-t border-white/[0.08] bg-[#141416] text-zinc-50">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                    <div className="space-y-3 max-w-2xl">
                        <span className="text-xs font-mono text-zinc-400 tracking-wide">Ready To Partner</span>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50">
                            다음 프로젝트의 결과를 함께 만듭니다.
                        </h2>
                        <p className="text-zinc-400 text-sm leading-relaxed">
                            20년 이상의 현장 실행력과 제작 노하우로 귀사의 프로젝트에 가장 확실한 솔루션을 제안합니다.
                        </p>
                    </div>
                    <div className="shrink-0">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-all duration-150 active:scale-[0.98]"
                        >
                            프로젝트 문의하기
                            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                        </Link>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Works;
