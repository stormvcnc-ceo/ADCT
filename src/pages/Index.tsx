import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import MainHero from '@/components/MainHero';
import AiBadgeWrapper from '@/components/AiBadgeWrapper';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const manifestoRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Simple scroll-based animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const elements = [manifestoRef.current, servicesRef.current].filter(Boolean);
    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen">
        <MainHero />
      </section>

      {/* Brand Manifesto */}
      <section ref={manifestoRef} className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-display mb-8">
                Creative Ideas,<br />
                <span className="text-primary">Powerful Impact</span>
              </h2>
              <div className="space-y-6 text-body-large text-muted-foreground">
                <p>
                  광고는 제품을 팔기 전에,<br />
                  사람들의 마음을 먼저 움직입니다.
                </p>
                <p>
                  우리는 복잡함을 단순하게,<br />
                  평범함을 특별하게 만듭니다.
                </p>
                <p>
                  감동 없는 광고는 소음일 뿐입니다.<br />
                  스토리는 공감을 위해 존재합니다.
                </p>
              </div>
            </div>
            <AiBadgeWrapper className="relative w-full h-96 block">
              <img
                src="/images/brand-manifesto-abstract.png"
                alt="Abstract 3D artwork representing creative ideas and powerful impact"
                className="w-full h-full object-cover rounded-lg shadow-elegant"
                loading="lazy"
              />
            </AiBadgeWrapper>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section ref={servicesRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Our Capabilities</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              브랜드 캠페인부터 크리에이티브 제작까지,<br />
              통합적 접근으로 강력한 임팩트를 만듭니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Campaign Strategy",
                description: "데이터와 인사이트 기반으로 강력한 캠페인 전략을 수립합니다.",
                image: "/images/service-strategy-korean.png"
              },
              {
                title: "Creative Production",
                description: "영상, 그래픽, 콘텐츠 등 모든 크리에이티브를 제작합니다.",
                image: "/images/service-production.png"
              },
              {
                title: "Brand Advertising",
                description: "브랜드 스토리를 감동적인 광고로 완성합니다.",
                image: "/images/service-ad.png"
              }
            ].map((service, index) => (
              <div key={index} className="group cursor-pointer">
                <AiBadgeWrapper className="relative overflow-hidden rounded-lg mb-6 block w-full h-64">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                </AiBadgeWrapper>
                <h3 className="text-headline mb-3">{service.title}</h3>
                <p className="text-body text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/capabilities">모든 서비스 보기</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-display mb-6">Ready to create together?</h2>
          <p className="text-body-large mb-8 opacity-90">
            브랜드에 새로운 가치를 불어넣고 싶다면,<br />
            지금 바로 시작해보세요.
          </p>
          <Button asChild variant="secondary" size="lg" className="text-base px-8 py-6">
            <Link to="/contact">프로젝트 문의하기</Link>
          </Button>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default Index;
