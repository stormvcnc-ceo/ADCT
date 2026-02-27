
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Capabilities = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      id: 1,
      title: "Brand Strategy & Campaigns",
      description: "브랜드의 본질을 발견하고, 타겟 오디언스와 공감하는 통합 캠페인을 기획합니다. 데이터 기반 인사이트와 크리에이티브한 아이디어로 브랜드를 세상에 각인시킵니다.",
      items: ["Campaign Strategy", "Brand Positioning", "Market Research", "Consumer Insights", "360° Campaign Planning"]
    },
    {
      id: 2,
      title: "Creative Production",
      description: "영상, 그래픽, 사진에 이르기까지 모든 크리에이티브 제작을 책임집니다. 아이디어를 시각화하고, 감동을 주는 크리에이티브 결과물로 완성합니다.",
      items: ["TVC & Video Production", "Print Design", "Photography & Videography", "Motion Graphics", "Social Media Contents"]
    },
    {
      id: 3,
      title: "Digital & Media Strategy",
      description: "온·오프라인을 넘나드는 통합 미디어 전략을 수립합니다. 올바른 채널에서, 올바른 타이밍에, 올바른 메시지로 타겟에게 도달합니다.",
      items: ["Media Planning & Buying", "Social Media Strategy", "Influencer Marketing", "Performance Marketing", "OOH & DOOH"]
    },
    {
      id: 4,
      title: "Art Direction & Copywriting",
      description: "브랜드의 메시지를 강력하고 아름답게 전달합니다. 크리에이티브 디렉션부터 감성을 자극하는 카피까지, 기억에 남는 광고를 만듭니다.",
      items: ["Creative Direction", "Copywriting", "Art Direction", "Brand Storytelling", "Content Creation"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <h1 className="text-hero mb-8 animate-fade-in">
          Capabilities
        </h1>
        <p className="text-body-large text-muted-foreground max-w-2xl animate-slide-up">
          우리는 컨셉부터 캠페인 실행까지, 브랜드 광고의 모든 단계에서<br />
          크리에이티브 솔루션을 제공합니다.
        </p>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
          {services.map((service) => (
            <div key={service.id} className="group animate-slide-up" style={{ animationDelay: `${service.id * 0.1}s` }}>
              <div className="border-t border-border pt-8">
                <span className="text-caption text-primary mb-4 block">0{service.id}</span>
                <h2 className="text-display mb-6 group-hover:text-primary transition-colors">{service.title}</h2>
                <p className="text-body text-muted-foreground mb-8">
                  {service.description}
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.items.map((item, idx) => (
                    <li key={idx} className="text-sm flex items-center text-muted-foreground">
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>


      {/* CTA */}
      <section className="py-24 bg-muted mt-12">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-display mb-6">Ready to start your project?</h2>
          <div className="flex justify-center gap-4">
            <Button asChild variant="outline" size="lg">
              <Link to="/process">작업 과정 보기</Link>
            </Button>
            <Button asChild size="lg">
              <Link to="/contact">프로젝트 문의하기</Link>
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Capabilities;
