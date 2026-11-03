import { useState } from 'react';
import { Link } from 'react-router-dom';
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
            {/* Header Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="max-w-4xl space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-medium text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        FEATURED PORTFOLIO &amp; ARCHIVE
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white">
                        Selected <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Works</span>
                    </h1>

                    <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                        20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다.<br />
                        <span className="text-amber-400 font-medium">Innovative today, Creative tomorrow.</span>
                    </p>

                    <div className="flex flex-wrap gap-2.5 pt-2">
                        <span className="text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 text-cyan-300 rounded-full font-medium">20+ Years Experience</span>
                        <span className="text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 text-cyan-300 rounded-full font-medium">LH 공공기관 실적</span>
                        <span className="text-xs px-3.5 py-1.5 bg-white/5 border border-white/10 text-cyan-300 rounded-full font-medium">대형 건설사 협업</span>
                    </div>

                    {/* Company Profile Download Button */}
                    <div className="pt-4">
                        <button
                            type="button"
                            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white text-xs font-semibold shadow-lg shadow-cyan-500/20 transition-all hover:scale-105 disabled:opacity-50"
                            onClick={handleSecureDownload}
                            disabled={isDownloading}
                        >
                            {isDownloading ? (
                                <>
                                    <svg className="animate-spin" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 12a9 9 0 1 1-6.219-8.56"></path>
                                    </svg>
                                    다운로드 진행 중...
                                </>
                            ) : (
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                    ADCT 회사 지명원 다운로드 (PDF)
                                </>
                            )}
                        </button>

                        {downloadError && (
                            <div className="mt-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl max-w-md">
                                <p className="text-xs text-red-300 whitespace-pre-line leading-relaxed">{downloadError}</p>
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-6 px-6 lg:px-8 max-w-7xl mx-auto border-y border-white/[0.08]">
                <div className="flex flex-wrap gap-2.5 justify-center sm:justify-start">
                    {WORK_CATEGORIES.map((cat) => {
                        const isActive = activeCategory === cat.id;
                        return (
                            <button
                                key={cat.id}
                                onClick={() => setActiveCategory(cat.id)}
                                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                                    isActive
                                        ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/30 scale-105'
                                        : 'bg-white/[0.03] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
                                }`}
                            >
                                {cat.name}
                            </button>
                        );
                    })}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group relative rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/50 transition-all duration-500 overflow-hidden flex flex-col justify-between shadow-xl"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            {/* Project Image */}
                            <div className="relative overflow-hidden aspect-[4/3] bg-black/40">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${
                                        [15, 16].includes(project.id) ? 'object-contain p-4 bg-white/90' : 'object-cover'
                                    } transition-transform duration-700 group-hover:scale-105`}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#0e131f] via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                                
                                <div className="absolute top-4 left-4">
                                    <span className="px-3 py-1 rounded-full text-[10px] font-mono font-semibold bg-black/60 backdrop-blur-md border border-white/15 text-cyan-300">
                                        {WORK_CATEGORIES.find(c => c.id === project.category)?.name}
                                    </span>
                                </div>

                                <div className="absolute bottom-4 left-4 right-4">
                                    <p className="text-xs text-cyan-300 font-medium tracking-wide">
                                        {project.achievement}
                                    </p>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6 space-y-3">
                                <div className="flex items-center justify-between text-xs text-slate-400">
                                    <span className="font-mono text-amber-400">{project.year}</span>
                                    <span className="text-[11px] text-slate-400">Project #{project.id}</span>
                                </div>
                                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/80 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Ready To Partner</span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Your Success Story Starts Here</h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        20년 이상의 축적된 제작 노하우로 귀사의 브랜드를 독보적인 위치로 이끌어드리겠습니다.
                    </p>
                    <div className="pt-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all"
                        >
                            프로젝트 문의하기 <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Works;
