import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const STEPS = [
  {
    id: '01',
    title: 'Brief & Deep Research',
    subtitle: '문제 정의 및 시장 분석',
    description:
      '클라이언트의 사업 목표, 타겟 오디언스, 경쟁 구도 및 지역·산업 환경을 정밀하게 분석합니다. 브리프 미팅과 현장 리서치를 통해 캠페인의 핵심 소구점을 도출합니다.',
    tags: ['Client Brief', 'Market Analysis', 'Competitor Research', 'Consumer Persona'],
  },
  {
    id: '02',
    title: 'Creative Concept & Strategy',
    subtitle: '아이데이션 및 전략 수립',
    description:
      '인사이트를 바탕으로 수용자의 선택을 이끌어내는 크리에이티브 콘셉트를 도출합니다. 비주얼 방향성과 온·오프라인 매체 믹스 실행 계획을 수립합니다.',
    tags: ['Ideation', 'Creative Concept', 'Channel Architecture', 'Media Budgeting'],
  },
  {
    id: '03',
    title: 'Production & Art Direction',
    subtitle: '비주얼 및 콘텐츠 제작',
    description:
      '수립된 콘셉트를 실제 산출물로 구현합니다. 카피라이팅, 영상 촬영 및 디렉팅, 지면/옥외 디자인, 인터랙티브 웹 개발까지 전 과정을 직접 관리합니다.',
    tags: ['Film / TVC', '3D Motion', 'Art Direction', 'Copywriting'],
  },
  {
    id: '04',
    title: 'Launch & Performance Media',
    subtitle: '통합 캠페인 집행',
    description:
      '완성된 크리에이티브를 최적의 채널에 배포하고 실시간 반응을 모니터링합니다. 정밀한 매체 운영을 통해 타겟 도달률과 문의 전환 효율을 높입니다.',
    tags: ['Media Buying', 'DOOH & OOH', 'Digital Marketing', 'A/B Testing'],
  },
  {
    id: '05',
    title: 'Analysis & Optimization',
    subtitle: '데이터 분석 및 성과 정리',
    description:
      '캠페인 집행 후 유입 데이터와 전환 성과를 정밀하게 분석해 투명한 결과 보고서를 제공하고, 후속 마케팅을 위한 인사이트를 정리합니다.',
    tags: ['Performance Tracking', 'ROAS Analytics', 'Post-Campaign Report', 'Next Step Guide'],
  },
];

const Process = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-5">
          <span className="text-xs font-mono text-zinc-500 tracking-wide block">Workflow</span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-950">
            Our <span className="text-zinc-500">Process</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-prose">
            체계적인 프로세스는 안정적인 캠페인 결과로 이어집니다. 20년간 현장에서 검증해 온 ADCT의 5단계 실행 워크플로우입니다.
          </p>
        </div>
      </section>

      {/* Stepped Editorial List */}
      <section className="py-12 px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
        <div className="divide-y divide-zinc-200">
          {STEPS.map((step) => (
            <div
              key={step.id}
              className="py-10 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start"
            >
              <div className="md:col-span-2">
                <span className="text-2xl sm:text-3xl font-medium font-mono text-zinc-400">
                  {step.id}
                </span>
              </div>

              <div className="md:col-span-4 space-y-1">
                <span className="text-xs font-mono text-zinc-500 block">{step.subtitle}</span>
                <h2 className="text-xl sm:text-2xl font-semibold text-zinc-950">{step.title}</h2>
              </div>

              <div className="md:col-span-6 space-y-4">
                <p className="text-sm text-zinc-600 leading-relaxed max-w-prose">
                  {step.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded bg-white border border-zinc-200 text-xs text-zinc-600"
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
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.08] bg-[#141416] text-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-zinc-400">Start A Project</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50">
              첫 브리핑부터 온에어까지 함께합니다.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              명확한 일정과 투명한 커뮤니케이션으로 안정적인 프로젝트 진행을 약속합니다.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-all active:scale-[0.98]"
            >
              프로젝트 상담 예약하기
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Process;
