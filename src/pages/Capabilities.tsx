import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';

const Capabilities = () => {
  const services = [
    {
      id: "01",
      code: "STRATEGY",
      title: "Brand Strategy & Campaigns",
      description: "브랜드의 본질을 발견하고, 타겟 오디언스와 공감하는 통합 캠페인을 기획합니다. 데이터 기반 인사이트와 크리에이티브한 아이디어로 브랜드를 시장에 강력하게 각인시킵니다.",
      items: ["Campaign Strategy", "Brand Positioning", "Market Research", "Consumer Insights", "360° IMC Campaign Planning"]
    },
    {
      id: "02",
      code: "PRODUCTION",
      title: "Creative Production & Media",
      description: "TVC, 디지털 바이럴 필름, 3D CGI 모션 그래픽부터 지면 그래픽에 이르기까지 모든 오리지널 비주얼을 하이엔드 퀄리티로 직접 디렉팅 및 제작합니다.",
      items: ["TVC & 4K/8K Film Production", "3D CGI & Motion Graphics", "Print & Key Visual Design", "Commercial Photography", "Viral Social Contents"]
    },
    {
      id: "03",
      code: "DIGITAL & MEDIA",
      title: "Digital & Media Strategy",
      description: "온·오프라인의 경계를 허무는 통합 미디어 전략을 수립합니다. 정밀한 타겟팅과 미디어 믹스로 최고의 전환율과 브랜드 신뢰를 창출합니다.",
      items: ["Media Planning & Buying", "Social Media Performance", "Influencer Collaboration", "DOOH & OOH Large Scale Media", "ROAS Analytics"]
    },
    {
      id: "04",
      code: "ART & COPY",
      title: "Art Direction & Creative Tech",
      description: "브랜드의 철학을 직관적인 카피와 감각적인 아트 디렉션, 그리고 최신 인터랙티브 웹 테크놀로지로 승화시켜 대체 불가능한 브랜딩을 실현합니다.",
      items: ["Creative Direction", "Impactful Copywriting", "Interactive Web & 3D WebGL", "Generative AI Visualizer", "Editorial & Brand Identity"]
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
            END-TO-END CREATIVE SOLUTIONS
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Capabilities</span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            컨셉 도출부터 캠페인 온에어, 그리고 인터랙티브 디지털 경험까지—<br />
            ADCT는 브랜드 성장을 위한 전 방위적 크리에이티브 솔루션을 제공합니다.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.04] transition-all duration-300 flex flex-col justify-between space-y-8 shadow-xl"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-2xl font-black font-mono text-cyan-400">{service.id}</span>
                  <span className="text-[11px] font-mono tracking-wider text-amber-400 bg-amber-400/10 px-3 py-1 rounded-full border border-amber-400/20">
                    {service.code}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-bold text-white leading-snug">
                  {service.title}
                </h2>

                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {service.description}
                </p>
              </div>

              {/* Tag Items */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold block">Key Scope</span>
                <div className="flex flex-wrap gap-2">
                  {service.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/10 text-xs text-slate-300"
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
      <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/80 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">Custom Proposal</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">귀사만을 위한 맞춤 전략이 필요하신가요?</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            ADCT의 전문가가 귀사의 현재 시장 포지션을 분석하고 최적화된 크리에이티브 로드맵을 제안해 드립니다.
          </p>
          <div className="pt-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all"
            >
              제안서 요청 및 프로젝트 문의하기 →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default Capabilities;
