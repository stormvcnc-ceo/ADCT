import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import AiBadgeWrapper from '@/components/AiBadgeWrapper';

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
        <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-medium text-cyan-300">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
            ABOUT ADCT AGENCY
          </div>

          <h1 className="text-5xl sm:text-7xl font-black tracking-tight leading-tight text-white">
            We Prove<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500">
              Perfection.
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
            ADCT는 단순한 기능을 보여주지 않습니다. 완성도를 증명합니다.<br />
            브랜드의 숨겨진 본질을 발견하고, 매혹적인 디자인과 전략으로 완성하는 크리에이티브 파트너입니다.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-mono">
              01 — OUR STORY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              "왜 대부분의 광고는<br />기억에 남지 않을까?"
            </h2>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              <p>
                2005년, 우리는 단순하지만 본질적인 질문에서 출발했습니다.
              </p>
              <p>
                답을 찾는 과정에서 깨달았습니다. 진정한 광고는 단순히 제품의 스펙을 나열하는 것이 아니라, 사람들의 감정에 깊숙이 닿아 공감을 이끌어내고, 끝내 자발적인 행동을 만들어내는 것에서 시작된다는 사실을.
              </p>
              <p>
                ADCT는 이러한 철학을 바탕으로 설립되었습니다. 우리는 클라이언트와 함께 브랜드 내면에 잠든 고유한 서사를 발굴하고, 세련된 비주얼과 전략적 캠페인으로 세상과 연결합니다.
              </p>
              <p className="text-cyan-300 font-medium pt-2">
                Bold, Creative, Emotional, Strategic, Memorable.<br />
                이것이 우리가 20년간 지켜온 크리에이티브의 지향점입니다.
              </p>
            </div>
          </div>

          <div className="relative">
            <AiBadgeWrapper className="relative w-full aspect-video sm:aspect-[4/3] block rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/images/about-story.png"
                alt="Creative process"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131f]/80 via-transparent to-transparent" />
            </AiBadgeWrapper>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.06] bg-[#080e1a]/80">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-3">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">Core Values</span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Our Values</h2>
            <p className="text-sm text-slate-400 max-w-xl mx-auto">
              ADCT의 모든 프로젝트는 이 세 가지 핵심 가치를 뼈대로 구축됩니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Creative Storytelling",
                description: "모든 브랜드에는 고유한 이야기가 있습니다. 우리는 그 이야기를 발견하고 사람들의 마음을 움직이는 독창적 내러티브로 재창조합니다.",
                icon: "💡",
                tag: "STORY"
              },
              {
                title: "Emotional Impact",
                description: "광고는 감정에서 시작합니다. 우리는 정밀한 데이터와 인간적 인사이트를 결합해 깊은 감동과 공감을 이끌어냅니다.",
                icon: "❤️",
                tag: "EMOTION"
              },
              {
                title: "Strategic Campaigns",
                description: "아름다운 디자인만으로는 충분하지 않습니다. 명확한 목표와 채널 전략을 통해 측정 가능한 비즈니스 결과를 도출합니다.",
                icon: "🎯",
                tag: "STRATEGY"
              }
            ].map((value, index) => (
              <div
                key={index}
                className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 hover:border-cyan-500/40 hover:bg-white/[0.05] transition-all duration-300 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{value.icon}</span>
                  <span className="text-[10px] font-mono font-semibold px-2.5 py-1 rounded-full bg-cyan-400/10 text-cyan-300 border border-cyan-400/20">
                    {value.tag}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed font-light">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
            <AiBadgeWrapper className="relative w-full aspect-video sm:aspect-[4/3] block rounded-3xl overflow-hidden border border-white/15 shadow-2xl">
              <img
                src="/images/team-roles-abstract.png"
                alt="Creative teamwork"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e131f]/80 via-transparent to-transparent" />
            </AiBadgeWrapper>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">
              02 — TEAM PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight">
              전문가들이 모여<br />하나의 비전을 완성합니다.
            </h2>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
              <p>
                ADCT는 카피라이터, 아트 디렉터, 브랜드 전략가, 크리에이티브 테크니션 등 각 분야 최고의 전문가들이 긴밀하게 협업하는 크리에이티브 집단입니다.
              </p>
              <p>
                "광고는 판매를 위해 존재하는 것이 아니라, 감동을 위해 존재한다."<br />
                이것이 우리 팀이 공유하는 변함없는 신념입니다.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/10">
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs text-slate-400 block mb-1">설립</span>
                <span className="text-lg font-bold font-mono text-cyan-300">2005년</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs text-slate-400 block mb-1">완료 캠페인</span>
                <span className="text-lg font-bold font-mono text-cyan-300">500+</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs text-slate-400 block mb-1">신뢰 파트너</span>
                <span className="text-lg font-bold font-mono text-cyan-300">100+</span>
              </div>
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 text-center">
                <span className="text-xs text-slate-400 block mb-1">고객 만족도</span>
                <span className="text-lg font-bold font-mono text-amber-400">98.4%</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 border-t border-white/[0.06] bg-[#080e1a]/80 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">Let's Connect</span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white">Let's start together</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            브랜드의 진정한 가치를 발굴하고 싶다면, 지금 바로 ADCT와 함께 새로운 여정을 시작하세요.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/capabilities"
              className="px-8 py-4 rounded-full bg-white/5 border border-white/15 text-white font-medium text-sm hover:bg-white/10 transition-all"
            >
              서비스 알아보기
            </Link>
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-105 transition-all"
            >
              프로젝트 문의하기 →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
};

export default About;
