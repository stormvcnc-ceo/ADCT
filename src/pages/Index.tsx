import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import AdctShaderBackground from '@/components/AdctShaderBackground';
import AiBadgeWrapper from '@/components/AiBadgeWrapper';

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#0e131f] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
      <Navigation />

      {/* Hero Section with WebGL Shader */}
      <section className="relative min-h-[90vh] flex items-center pt-16 pb-24 px-6 overflow-hidden">
        <AdctShaderBackground />

        {/* AI Graphic License Notice */}
        <div className="absolute bottom-6 left-6 z-20 bg-black/60 backdrop-blur-[2px] border border-white/10 text-[10px] text-white/70 px-2 py-0.5 rounded-sm select-none pointer-events-none tracking-widest font-mono font-medium">
          A.I
        </div>

        <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col justify-center">
          
          {/* 타이틀 & 슬로건 */}
          <div className="max-w-4xl space-y-8 animate-fade-in">
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight leading-[1.05] text-white">
              CREATIVE IDEAS,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
                POWERFUL
              </span><br />
              <span className="text-slate-100">IMPACT.</span>
            </h1>
          </div>

        </div>
      </section>

      {/* Core Vision & Visual Engine */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/80">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">
              ● Creative Focus &amp; Core Vision
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold leading-tight text-white">
              기술과 감성의 교차점에서<br />
              독창적인 브랜딩을 실현합니다.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              주식회사 애드시티(ADCT)는 전통적인 미디어 매체 기획부터 미래지향적 3D 모션 그래픽, AI 생성 비주얼 및 인터랙티브 웹 솔루션에 이르기까지 브랜드의 모든 고객 접점을 설계합니다.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] uppercase text-cyan-400 font-bold tracking-wider">Integrated</span>
                <div className="text-base font-bold text-white mt-1">All-in-One</div>
                <div className="text-xs text-slate-400 mt-1">기획부터 제작 집행까지</div>
              </div>
              <div className="p-5 rounded-2xl bg-white/[0.03] border border-white/10">
                <span className="text-[10px] uppercase text-amber-400 font-bold tracking-wider">Speed &amp; Quality</span>
                <div className="text-base font-bold text-white mt-1">Top Tier</div>
                <div className="text-xs text-slate-400 mt-1">검증된 프로덕션 퀄리티</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <AiBadgeWrapper className="relative w-full aspect-video block rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/images/brand-manifesto-abstract.png"
                alt="ADCT Visual Engine"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131f] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 z-10">
                <div className="text-xs text-cyan-300 font-medium">ADCT Studio Engine</div>
                <div className="text-sm font-semibold text-white">Generative 3D Visualizer &amp; Dynamic Art Direction</div>
              </div>
            </AiBadgeWrapper>
          </div>
        </div>
      </section>

      {/* Our Capabilities (3열 그리드) */}
      <section id="capabilities" className="py-24 px-6 border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Our Core Capabilities</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Our Capabilities</h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              브랜드 캠페인부터 크리에이티브 제작까지, 통합적 접근으로 강력한 임팩트를 만듭니다.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                no: '01 / Strategy',
                title: 'Campaign Strategy',
                desc: '데이터와 인사이트 기반으로 강력한 브랜드 캠페인 전략을 수립하고, 목표 고객을 관통하는 최적의 미디어 믹스를 설계합니다.',
                badge: '시장 분석 및 타겟 리포트',
                image: '/images/service-strategy-korean.png'
              },
              {
                no: '02 / Production',
                title: 'Creative Production',
                desc: '영상, TV 광고, 디지털 모션 그래픽, 3D CGI 등 모든 영역의 오리지널 크리에이티브 콘텐츠를 최고 수준으로 제작합니다.',
                badge: 'CGI • 4K/8K Film Production',
                image: '/images/service-production.png'
              },
              {
                no: '03 / Advertising',
                title: 'Brand Advertising',
                desc: '브랜드 고유의 철학과 스토리를 심금을 울리는 강력한 내러티브로 풀어내어 소비자에게 대체 불가능한 각인을 남깁니다.',
                badge: 'DOOH • 디지털 브랜드 각인',
                image: '/images/service-ad.png'
              },
            ].map((cap, i) => (
              <div
                key={i}
                className="group p-8 rounded-3xl bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-cyan-500/40 transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="relative overflow-hidden rounded-2xl aspect-[16/10]">
                    <AiBadgeWrapper className="relative w-full h-full block">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    </AiBadgeWrapper>
                  </div>
                  <span className="text-xs font-mono text-cyan-400 block pt-2">{cap.no}</span>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cap.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{cap.desc}</p>
                </div>
                <div className="pt-4 flex items-center justify-between border-t border-white/10 text-xs">
                  <span className="text-slate-400">{cap.badge}</span>
                  <Link to="/capabilities" className="text-cyan-400 group-hover:translate-x-1 transition-transform flex items-center gap-1 font-semibold">
                    상세보기 <span>→</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/15 text-slate-200 text-sm font-semibold transition-all hover:scale-105"
            >
              모든 서비스 보기 <span>→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* ADCT Integrated Solutions (01~04 워크플로우) */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/60">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold">Precision Workflow</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">ADCT Integrated Solutions</h2>
            <p className="text-sm text-slate-400 leading-relaxed">
              각 단계별 크리에이티브 파이프라인은 정교한 분석과 감각적인 아트 디렉션을 결합하여 타겟의 실질적인 행동 변화를 유도합니다.
            </p>
            <div className="pt-4">
              <Link
                to="/process"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500/10 border border-cyan-400/30 text-cyan-300 text-xs font-semibold hover:bg-cyan-500/20 transition-all"
              >
                전체 제작 프로세스 확인하기 <span>→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-7 space-y-4">
            {[
              {
                step: '01',
                title: '통합 마케팅 캠페인 (IMC & Brand Strategy)',
                desc: '시장 및 경쟁사 데이터 딥다이브, 크리에이티브 콘셉트 개발, 온·오프라인 통합 채널 실행 플랜 수립',
                tag: '전략 수립',
              },
              {
                step: '02',
                title: '필름 & 미디어 프로덕션 (Film, TV CF, 3D Motion)',
                desc: 'TVC, 디지털 바이럴 필름, 옥외 초대형 3D 아나모픽 콘텐츠, 브랜드드 무비 디렉팅 및 포스트 프로덕션',
                tag: '영상 제작',
              },
              {
                step: '03',
                title: '디지털 인터랙티브 웹 & AI 비주얼 엔지니어링',
                desc: 'AI 기반 제너레이티브 비주얼 설계, 하이엔드 인터랙티브 웹사이트 개발, 모바일 몰입형 프로모션 환경 구현',
                tag: '인터랙티브 웹',
              },
              {
                step: '04',
                title: '퍼포먼스 미디어 플래닝 & 그로스 마케팅',
                desc: '실시간 데이터 트래킹 및 머신러닝 최적화 알고리즘 기반 미디어 바잉, ROAS 극대화 애널리틱스',
                tag: '미디어 집행',
              },
            ].map((sol) => (
              <div
                key={sol.step}
                className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all flex items-start gap-6"
              >
                <div className="text-xl font-bold font-mono text-cyan-400">{sol.step}</div>
                <div className="space-y-1 flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white">{sol.title}</h4>
                    <span className="text-[11px] text-cyan-400 bg-cyan-400/10 px-2.5 py-1 rounded-full">{sol.tag}</span>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">{sol.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/[0.06] text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold">Next Creative Chapter</span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white">Ready to create together?</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            "20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다."<br />
            <span className="text-amber-400 font-medium">Innovative today, Creative tomorrow.</span>
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-white text-slate-900 font-bold text-sm hover:bg-slate-200 transition-all shadow-xl hover:scale-105"
            >
              프로젝트 문의하기 →
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
