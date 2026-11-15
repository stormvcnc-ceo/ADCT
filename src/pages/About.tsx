import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageLayout from '@/components/PageLayout';

const VALUES = [
  {
    no: '01',
    tag: 'STORY',
    title: 'Creative Storytelling',
    description:
      '모든 브랜드에는 고유한 맥락이 있습니다. 시장과 소비자의 언어로 설득력 있는 내러티브를 설계합니다.',
  },
  {
    no: '02',
    tag: 'EMOTION',
    title: 'Emotional Impact',
    description:
      '정보 전달을 넘어 공감을 이끌어내는 크리에이티브. 데이터 기반의 인사이트와 섬세한 아트 디렉션을 결합합니다.',
  },
  {
    no: '03',
    tag: 'STRATEGY',
    title: 'Strategic Campaigns',
    description:
      '명확한 타겟 설정과 매체 전략을 통해 측정 가능한 사업 성과로 이어지는 캠페인을 집행합니다.',
  },
];

const About = () => {
  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-5">
          <span className="text-xs font-mono text-zinc-500 tracking-wide block">About ADCT</span>
          <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-950">
            We Prove
            <br />
            <span className="text-zinc-500">Perfection.</span>
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-prose">
            ADCT는 단순한 광고 제작을 넘어 결과의 완성도를 증명합니다. 브랜드의 본질을 파악하고 전략과 크리에이티브로 시장의 반응을 만듭니다.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-zinc-500">01 — Our Story</span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-snug">
              "왜 대부분의 광고는
              <br />
              기억에 남지 않을까?"
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-prose">
              <p>2005년, 우리는 단순하지만 본질적인 질문에서 출발했습니다.</p>
              <p>
                답을 찾는 과정에서 깨달았습니다. 효과적인 광고는 제품의 스펙을 나열하는 것이 아니라, 수용자의 감정에 닿아 자발적인 행동을 이끌어내는 것에서 시작된다는 사실을.
              </p>
              <p>
                ADCT는 이러한 원칙을 바탕으로 클라이언트와 함께 브랜드 고유의 서사를 발굴하고, 정제된 비주얼과 전략적 매체 집행으로 시장과 연결합니다.
              </p>
              <p className="text-zinc-900 font-medium pt-2">
                Bold, Creative, Strategic, Memorable.
                <span className="block text-xs text-zinc-500 font-normal mt-1">
                  2005년부터 이어온 ADCT의 크리에이티브 기준입니다.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative w-full aspect-[4/3] block rounded-xl overflow-hidden border border-zinc-200/80 bg-zinc-900 shadow-sm">
              <img
                src="/images/about-story.png"
                alt="Creative process"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-6 lg:px-8 border-t border-zinc-200/80 bg-[#EFEFE9]">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-mono text-zinc-500">Core Values</span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950">
              Our Values
            </h2>
            <p className="text-sm text-zinc-600">
              ADCT의 모든 프로젝트는 세 가지 실무 원칙 위에서 움직입니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {VALUES.map((value) => (
              <div key={value.no} className="border-t border-zinc-300 pt-6 space-y-3">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-500">
                  <span>{value.no}</span>
                  <span>{value.tag}</span>
                </div>
                <h3 className="text-xl font-semibold text-zinc-900">{value.title}</h3>
                <p className="text-sm text-zinc-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section className="py-24 px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] block rounded-xl overflow-hidden border border-zinc-200/80 bg-zinc-900 shadow-sm">
              <img
                src="/images/team-roles-abstract.png"
                alt="Creative teamwork"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="text-xs font-mono text-zinc-500">02 — Team Philosophy</span>
            <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-zinc-950 leading-snug">
              각 분야의 전문가가 모여
              <br />
              하나의 결과를 만듭니다.
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-zinc-600 leading-relaxed max-w-prose">
              <p>
                ADCT는 브랜드 전략가, 카피라이터, 아트 디렉터, 미디어 플래너, 디지털 프로덕션 팀이 하나의 호흡으로 움직이는 실무 중심 에이전시입니다.
              </p>
              <p className="text-zinc-800 font-medium">
                "광고는 단순한 노출이 아니라, 신뢰를 쌓는 과정입니다."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section (Dark Charcoal Bookend) */}
      <section className="py-24 px-6 lg:px-8 border-t border-white/[0.08] bg-[#141416] text-zinc-50">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <span className="text-xs font-mono text-zinc-400">Let&apos;s Connect</span>
            <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-50">
              브랜드의 다음 단계를 함께 준비합니다.
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              신규 런칭, 분양 마케팅, 브랜드 리뉴얼까지 프로젝트의 성격에 맞춘 실행안을 제안해 드립니다.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <Link
              to="/capabilities"
              className="px-5 py-3 rounded-md border border-white/[0.15] hover:border-white/30 hover:bg-white/[0.04] text-zinc-200 font-medium text-sm transition-all"
            >
              서비스 알아보기
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-zinc-100 hover:bg-white text-zinc-950 font-medium text-sm transition-all active:scale-[0.98]"
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

export default About;
