import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const Process = () => {
    const steps = [
        {
            id: "01",
            title: "Brief & Deep Research",
            subtitle: "본질적 문제 정의 및 시장 분석",
            description: "클라이언트의 목표, 타겟 오디언스, 경쟁 구도 및 시장 환경을 정밀하게 분석합니다. 브리프 미팅과 데이터 리서치를 통해 캠페인의 핵심 소구점과 방향성을 설정합니다.",
            tags: ["Client Brief", "Market Analysis", "Competitor Research", "Consumer Persona"]
        },
        {
            id: "02",
            title: "Creative Concept & Strategy",
            subtitle: "아이데이션 및 전략 수립",
            description: "인사이트를 바탕으로 대중의 마음을 관통하는 크리에이티브 콘셉트를 도출합니다. 다양한 비주얼 시안과 미디어 믹스 실행 전략을 종합적으로 수립합니다.",
            tags: ["Ideation Workshop", "Creative Big Idea", "Channel Architecture", "Production Budgeting"]
        },
        {
            id: "03",
            title: "Production & Art Direction",
            subtitle: "최고 수준의 비주얼 제작",
            description: "컨셉을 구체적인 크리에이티브 산출물로 현실화합니다. 카피라이팅, 영상 촬영/디렉팅, 3D CGI 모션, 인터랙티브 프로그래밍 등 각 요소의 완성도를 극대화합니다.",
            tags: ["Film / TVC Production", "3D Motion Graphics", "Art Direction", "Copywriting"]
        },
        {
            id: "04",
            title: "Launch & Performance Media",
            subtitle: "통합 캠페인 집행 및 채널 전개",
            description: "완성된 크리에이티브를 최적화된 온·오프라인 채널에 배포하고 실시간 데이터를 모니터링합니다. 정밀한 미디어 바잉을 통해 타겟 도달율을 극대화합니다.",
            tags: ["Media Buying & Optimization", "DOOH Launch", "Digital Viral Marketing", "A/B Testing"]
        },
        {
            id: "05",
            title: "Analysis & Growth Optimization",
            subtitle: "데이터 분석 및 성과 극대화",
            description: "캠페인 집행 후 유입 데이터, 소비자 반응, ROAS 성과를 정밀하게 분석하여 명확한 최종 보고서를 제공하고, 브랜드의 다음 성장을 위한 지속적 가이드를 도출합니다.",
            tags: ["Performance Tracking", "ROAS Analytics", "Post-Campaign Report", "Brand Value Index"]
        }
    ];

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="max-w-4xl space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-medium text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        CREATIVE PRODUCTION PIPELINE
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-tight">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Process</span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                        체계적인 프로세스는 가장 확실한 캠페인 성공을 만듭니다.<br />
                        20년간 검증된 ADCT만의 5단계 엔지니어링 워크플로우를 소개합니다.
                    </p>
                </div>
            </section>

            {/* Stepped Process List */}
            <section className="py-20 px-6 lg:px-8 max-w-5xl mx-auto border-t border-white/[0.08]">
                <div className="space-y-8 relative">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col md:flex-row gap-8 items-start justify-between shadow-xl"
                        >
                            <div className="flex items-center gap-4 md:w-48 shrink-0">
                                <span className="text-4xl sm:text-5xl font-black font-mono text-cyan-400">
                                    {step.id}
                                </span>
                                <div className="h-10 w-[1px] bg-white/20 hidden md:block" />
                            </div>

                            <div className="space-y-4 flex-1">
                                <div>
                                    <span className="text-xs font-mono text-amber-400 font-medium tracking-wider uppercase block mb-1">
                                        {step.subtitle}
                                    </span>
                                    <h2 className="text-2xl font-bold text-white">
                                        {step.title}
                                    </h2>
                                </div>

                                <p className="text-sm text-slate-300 leading-relaxed font-light">
                                    {step.description}
                                </p>

                                <div className="flex flex-wrap gap-2 pt-2">
                                    {step.tags.map((tag, idx) => (
                                        <span
                                            key={idx}
                                            className="px-3 py-1 rounded-full bg-white/[0.04] border border-white/10 text-[11px] text-cyan-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process CTA */}
            <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/80 text-center">
                <div className="max-w-3xl mx-auto space-y-6">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">Start A Project</span>
                    <h2 className="text-3xl sm:text-5xl font-extrabold text-white">체계적인 프로세스로 브랜드의 가치를 높이세요</h2>
                    <p className="text-slate-300 text-sm leading-relaxed">
                        신속하고 명확한 커뮤니케이션으로 첫 기획 단계부터 온에어까지 원활하게 동행합니다.
                    </p>
                    <div className="pt-4">
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all"
                        >
                            프로젝트 상담 예약하기 →
                        </Link>
                    </div>
                </div>
            </section>
        </PageLayout>
    );
};

export default Process;
