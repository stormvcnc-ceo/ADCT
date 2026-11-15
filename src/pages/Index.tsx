import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import AdctShaderBackground from '@/components/AdctShaderBackground';
import { PROJECTS } from '@/data/projects';

const FEATURED_WORKS = PROJECTS.filter((p) => [6, 1, 7].includes(p.id));

const CAPABILITIES = [
  {
    no: '01',
    category: 'Strategy & Media',
    title: 'Campaign Strategy',
    desc: '시장 데이터와 현장 리서치를 바탕으로 타겟 접점을 정밀하게 설계하고, 온·오프라인 매체 믹스를 최적화합니다.',
  },
  {
    no: '02',
    category: 'Film & 3D Motion',
    title: 'Creative Production',
    desc: 'TVC, 디지털 필름, 3D 모션 및 옥외 대형 미디어 콘텐츠까지 브랜드의 메시지를 명확한 시각 언어로 구현합니다.',
  },
  {
    no: '03',
    category: 'Branding & OOH',
    title: 'Brand Advertising',
    desc: '주거·상업 공간 분양 마케팅부터 기업 아이덴티티 구축까지, 20년 현장 노하우로 실질적인 시장 반응을 이끌어냅니다.',
  },
];

const WORKFLOW_STEPS = [
  {
    step: '01',
    title: '통합 마케팅 캠페인 (IMC & Brand Strategy)',
    desc: '경쟁 환경 분석, 핵심 콘셉트 도출, 온·오프라인 통합 매체 집행 전략 수립',
  },
  {
    step: '02',
    title: '필름 & 미디어 프로덕션 (Film, TV CF, 3D Motion)',
    desc: 'TVC, 디지털 필름, 옥외 대형 3D 아나모픽 콘텐츠 디렉팅 및 후반 제작',
  },
  {
    step: '03',
    title: '디지털 인터랙티브 웹 & 비주얼 엔지니어링',
    desc: '브랜드 공식 웹사이트, 분양·프로모션 마이크로사이트 및 인터랙티브 경험 구현',
  },
  {
    step: '04',
    title: '퍼포먼스 미디어 플래닝 & 실행 관리',
    desc: '실시간 매체 효율 트래킹과 데이터 기반 최적화를 통한 안정적 캠페인 성과 달성',
  },
];

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F8F6] text-[#141416] font-sans selection:bg-zinc-900 selection:text-zinc-50 relative overflow-x-hidden">
      <Navigation />

      {/* 1. Hero Section (Dark WebGL Editorial) */}
      <section className="relative min-h-[86vh] bg-[#111216] text-zinc-50 flex items-center pt-16 pb-24 px-6 lg:px-8 overflow-hidden">
        <AdctShaderBackground />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="max-w-4xl space-y-6">
            <h1 className="text-5xl sm:text-7xl xl:text-[5.5rem] font-semibold tracking-tight leading-[1.04] text-zinc-50">
              CREATIVE IDEAS,
              <br />
              <span className="text-zinc-400">POWERFUL</span>
              <br />
              IMPACT.
            </h1>
          </div>
        </div>
      </section>

      {/* 2. Selected Works Showcase (Editorial Off-White) */}
      <section className="py-24 px-6 lg:px-8 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-zinc-200 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono text-zinc-500 tracking-wide">Selected Works</span>
              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
                현장에서 증명해 온 프로젝트
              </h2>
            </div>
            <Link
              to="/works"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-700 hover:text-zinc-950 transition-colors group"
            >
              전체 포트폴리오 보기
              <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {FEATURED_WORKS.map((project) => (
              <Link
                key={project.id}
                to="/works"
                className="group block space-y-4"
              >
                <div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-zinc-200/70 border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between text-xs text-zinc-500 font-mono">
                    <span>{project.year}</span>
                    <span className="text-zinc-700 font-medium">{project.achievement}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-zinc-600">{project.description}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Core Vision Split Section (Warm Stone) */}
      <section className="py-24 px-6 lg:px-8 border-t border-zinc-200/80 bg-[#EFEFE9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-zinc-500 tracking-wide">Core Vision</span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight leading-[1.2] text-zinc-950">
              기획부터 매체 집행까지,
              <br />
              한 팀이 끝까지 책임집니다.
            </h2>
            <p className="text-zinc-600 text-sm sm:text-base leading-relaxed max-w-prose">
              주식회사 애드시티(ADCT)는 2005년부터 축적해 온 오프라인 옥외·분양 마케팅 현장 경험에 3D 모션 그래픽과 인터랙티브 디지털 제작 역량을 결합해, 브랜드가 시장에서 실제로 선택받도록 설계합니다.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-5 border-t border-zinc-300/80">
              <div>
                <div className="text-xs font-mono text-zinc-500">Integrated</div>
                <div className="text-base font-semibold text-zinc-950 mt-1">All-in-One 실행</div>
                <div className="text-xs text-zinc-600 mt-1">전략 수립부터 제작·매체 집행</div>
              </div>
              <div>
                <div className="text-xs font-mono text-zinc-500">Heritage</div>
                <div className="text-base font-semibold text-zinc-950 mt-1">Since 2005</div>
                <div className="text-xs text-zinc-600 mt-1">부산·서울 기반 20년 실무 업력</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[16/10] block rounded-xl overflow-hidden border border-zinc-300/70 bg-zinc-900 shadow-sm">
              <img
                src="/images/brand-manifesto-abstract.png"
                alt="ADCT Creative Direction"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 z-10">
                <div className="text-xs font-mono text-zinc-300">ADCT Studio</div>
                <div className="text-sm font-medium text-white mt-0.5">
                  Brand Strategy &amp; Creative Production
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Capabilities (Editorial List Layout on Off-White) */}
      <section id="capabilities" className="py-24 px-6 lg:px-8 border-t border-zinc-200/80 bg-[#F8F8F6]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs font-mono text-zinc-500 tracking-wide">Capabilities</span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Our Services
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-sm">
              단편적인 디자인 제작을 넘어, 브랜드의 사업 목표에 직결되는 통합 커뮤니케이션을 설계합니다.
            </p>
            <div className="pt-2">
              <Link
                to="/capabilities"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md border border-zinc-300 hover:border-zinc-900 hover:bg-zinc-950 hover:text-zinc-50 text-zinc-900 text-xs font-medium transition-all active:scale-[0.98]"
              >
                모든 서비스 보기
                <ArrowRight className="w-3.5 h-3.5" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-8 divide-y divide-zinc-200 border-y border-zinc-200">
            {CAPABILITIES.map((cap) => (
              <Link
                key={cap.no}
                to="/capabilities"
                className="group py-8 first:pt-6 last:pb-6 flex flex-col sm:flex-row sm:items-start justify-between gap-4 hover:bg-zinc-200/40 transition-colors px-3 -mx-3 rounded-lg"
              >
                <div className="flex items-baseline gap-6 sm:w-5/12 shrink-0">
                  <span className="text-xs font-mono text-zinc-400">{cap.no}</span>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-900 group-hover:text-zinc-950 transition-colors">
                      {cap.title}
                    </h3>
                    <span className="text-xs text-zinc-500 block mt-0.5">{cap.category}</span>
                  </div>
                </div>
                <div className="sm:w-6/12">
                  <p className="text-sm text-zinc-600 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="hidden sm:flex items-center justify-end sm:w-1/12 pt-1">
                  <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-zinc-950 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" strokeWidth={1.5} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Integrated Workflow (Warm Stone) */}
      <section className="py-24 px-6 lg:px-8 border-t border-zinc-200/80 bg-[#EFEFE9]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-5">
            <span className="text-xs font-mono text-zinc-500 tracking-wide">Workflow</span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              ADCT Integrated Solutions
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-prose">
              시장 분석에서 크리에이티브 제작, 매체 바잉까지 분절되지 않는 단일 파이프라인으로 일관된 품질과 빠른 의사결정을 제공합니다.
            </p>
            <div className="pt-2">
              <Link
                to="/process"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-800 hover:text-zinc-950 transition-colors group"
              >
                제작 프로세스 자세히 보기
                <ArrowRight className="w-4 h-4 text-zinc-500 group-hover:text-zinc-950 group-hover:translate-x-0.5 transition-all" strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 divide-y divide-zinc-300/80 border-t border-zinc-300/80">
            {WORKFLOW_STEPS.map((sol) => (
              <div key={sol.step} className="py-6 flex items-start gap-6">
                <span className="text-xs font-mono text-zinc-500 pt-1 shrink-0">{sol.step}</span>
                <div className="space-y-1.5">
                  <h4 className="text-base font-semibold text-zinc-900">{sol.title}</h4>
                  <p className="text-sm text-zinc-600 leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Editorial CTA Section (Dark Charcoal Bookend) */}
      <section className="py-24 px-6 lg:px-8 bg-[#141416] text-zinc-50 border-t border-white/[0.08]">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <span className="text-xs font-mono text-zinc-400 tracking-wide">Next Chapter</span>
            <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-zinc-50 leading-[1.1]">
              새로운 프로젝트의 시작,
              <br />
              ADCT와 함께 논의하세요.
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed">
              20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다.
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

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Index;
