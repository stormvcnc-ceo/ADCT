
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Process = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const steps = [
        {
            id: "01",
            title: "Brief & Research",
            description: "클라이언트의 목표, 타겟 오디언스, 시장 환경을 깊이 있게 분석합니다. 브리프 미팅과 리서치를 통해 캠페인의 핵심 메시지와 방향성을 설정합니다.",
            details: "Client Brief, Market Analysis, Competitor Research, Consumer Insights, Campaign Objectives"
        },
        {
            id: "02",
            title: "Concept & Planning",
            description: "리서치를 통해 발견한 인사이트를 바탕으로 크리에이티브 컨셉을 개발합니다. 다양한 아이디어를 도출하고 최적의 캠페인 전략을 수립합니다.",
            details: "Ideation Workshop, Creative Concept, Media Strategy, Campaign Timeline, Budget Planning"
        },
        {
            id: "03",
            title: "Creative Execution",
            description: "컨셉을 구체적인 크리에이티브로 구현합니다. 카피, 비주얼, 영상 그리고 모든 크리에이티브 요소를 감동적으로 완성합니다.",
            details: "Copywriting, Art Direction, Video Production, Print Design, Social Contents Creation"
        },
        {
            id: "04",
            title: "Production & Media",
            description: "크리에이티브를 각 채널에 최적화하여 제작합니다. 미디어 바잉부터 컨텐츠 배포까지 모든 제작 과정을 관리합니다.",
            details: "Media Buying, Content Adaptation, Quality Control, Asset Management, Distribution"
        },
        {
            id: "05",
            title: "Launch & Reporting",
            description: "캠페인을 런칭하고 성과를 모니터링합니다. 데이터 분석을 통해 캠페인을 최적화하고, 명확한 성과 보고를 제공합니다.",
            details: "Campaign Launch, Performance Tracking, Data Analysis, Optimization, Final Report"
        }
    ];

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-hero mb-8 animate-fade-in">
                    Process
                </h1>
                <p className="text-body-large text-muted-foreground max-w-2xl animate-slide-up">
                    체계적인 프로세스는 성공적인 캠페인을 만듭니다.<br />
                    ADCT만의 검증된 크리에이티브 워크플로우를 소개합니다.
                </p>
            </section>

            {/* Timeline */}
            <section className="py-16 px-6 lg:px-8 max-w-4xl mx-auto">
                <div className="space-y-24 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-border before:to-transparent">
                    {steps.map((step, index) => (
                        <div key={step.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group animate-slide-up" style={{ animationDelay: `${index * 0.15}s` }}>

                            {/* Icon/Dot */}
                            <div className="flex items-center justify-center w-10 h-10 rounded-full border border-border bg-background shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 group-hover:border-primary transition-colors">
                                <span className="text-xs font-bold text-muted-foreground group-hover:text-primary">{step.id}</span>
                            </div>

                            {/* Content */}
                            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-card border border-border rounded-lg shadow-sm hover:shadow-md transition-shadow">
                                <h3 className="text-headline mb-3">{step.title}</h3>
                                <p className="text-body text-muted-foreground mb-4">
                                    {step.description}
                                </p>
                                <div className="text-xs text-primary/70 font-medium pt-4 border-t border-border/50">
                                    {step.details}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="py-24 bg-primary text-primary-foreground mt-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-display mb-6">Shall we work together?</h2>
                    <p className="text-body-large mb-8 opacity-90">
                        당신의 브랜드도 이 프로세스를 통해<br />
                        감동적인 캠페인으로 탄생할 수 있습니다.
                    </p>
                    <Button asChild variant="secondary" size="lg">
                        <Link to="/contact">프로젝트 문의하기</Link>
                    </Button>
                </div>
            </section>

            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Process;
