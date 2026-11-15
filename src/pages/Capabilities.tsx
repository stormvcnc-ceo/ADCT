import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const SERVICES = [
  {
    id: '01',
    code: 'STRATEGY',
    title: 'Brand Strategy & Campaigns',
    description:
      '브랜드의 본질을 파악하고 타겟 오디언스와 공감하는 통합 캠페인을 기획합니다. 시장 조사와 현장 데이터를 바탕으로 효과적인 포지셔닝을 설계합니다.',
    items: ['Campaign Strategy', 'Brand Positioning', 'Market Research', 'Consumer Insights', '360° IMC Planning'],
  },
  {
    id: '02',
    code: 'PRODUCTION',
    title: 'Creative Production & Media',
    description:
      'TVC, 디지털 필름, 3D 모션 그래픽부터 지면 및 옥외 키 비주얼까지 모든 오리지널 콘텐츠를 직접 디렉팅하고 제작합니다.',
    items: ['TVC & Film Production', '3D Motion Graphics', 'Print & Key Visual', 'Commercial Photography', 'Digital Contents'],
  },
  {
    id: '03',
    code: 'DIGITAL & MEDIA',
    title: 'Digital & Media Strategy',
    description:
      '온·오프라인 채널을 유기적으로 연결하는 매체 전략을 수립합니다. 정밀한 타겟팅과 옥외 매체 바잉으로 실질적인 전환과 인지도를 확보합니다.',
    items: ['Media Planning & Buying', 'Social Performance', 'OOH & DOOH Media', 'Local & Outdoor AD', 'ROAS Analytics'],
  },
  {
    id: '04',
    code: 'ART & COPY',
    title: 'Art Direction & Interactive Web',
    description:
      '명확한 카피라이팅과 정제된 아트 디렉션, 그리고 인터랙티브 웹 기술을 결합해 브랜드 고유의 디지털 경험을 구축합니다.',
    items: ['Creative Direction', 'Copywriting', 'Interactive Website', 'Brand Identity', 'Editorial Design'],
  },
];

const Capabilities = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-5">
          <span className="text-xs font-mono text-zinc-500 tracking-wide block">Capabilities</span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-950">
            Our <span className="text-zinc-500">Capabilities</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-prose">
            컨셉 도출부터 캠페인 온에어, 옥외·디지털 매체 집행까지 브랜드 성장에 필요한 전 과정을 통합 수행합니다.
          </p>
        </div>
      </section>

      {/* Services Editorial Grid */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-14">
          {SERVICES.map((service) => (
            <div key={service.id} className="border-t border-zinc-300 pt-8 space-y-6">
              <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                <span>{service.id}</span>
                <span>{service.code}</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl font-semibold text-zinc-950">{service.title}</h2>
                <p className="text-sm text-zinc-600 leading-relaxed max-w-prose">
                  {service.description}
                </p>
              </div>

              <div className="pt-2">
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded bg-white border border-zinc-200 text-xs text-zinc-700"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Capabilities CTA */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.08] bg-[#141416] text-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-zinc-400">Custom Proposal</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50">
              프로젝트에 맞는 실행 전략이 필요하신가요?
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              현재 시장 상황과 목표에 맞춘 현실적인 매체 믹스와 크리에이티브 제안서를 준비해 드립니다.
            </p>
          </div>
          <div className="shrink-0">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-all active:scale-[0.98]"
            >
              제안서 요청 및 프로젝트 문의
              <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Capabilities;
