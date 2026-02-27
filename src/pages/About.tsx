import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

const About = () => {
  const storyRef = useRef<HTMLDivElement>(null);
  const valuesRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    const elements = [storyRef.current, valuesRef.current, teamRef.current].filter(Boolean);
    elements.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-4xl">
            <h1 className="text-hero mb-8 animate-fade-in">
              We Prove<br />
              <span className="text-primary">Perfection</span>
            </h1>
            <p className="text-body-large text-muted-foreground animate-slide-up">
              ADCT는 기능을 보여주지 않습니다. 완성도를 증명합니다.<br />
              브랜드의 본질을 발견하고, 디자인으로 완성하는 전략적 파트너입니다.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section ref={storyRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-display mb-8">Our Story</h2>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  2005년, 우리는 단순한 질문에서 시작했습니다.<br />
                  "왜 대부분의 광고는 기억에 남지 않을까?"
                </p>
                <p>
                  답을 찾는 과정에서 우리는 깨달았습니다. 진정한 광고는 단순히 제품을 보여주는 것이 아닌,
                  사람들의 감정에 닿고, 공감을 이끌어내며, 행동을 만들어내는 데서 나온다는 것을.
                </p>
                <p>
                  ADCT는 이러한 철학을 바탕으로 설립되었습니다.
                  우리는 클라이언트와 함께 브랜드의 이야기를 발굴하고,
                  그것을 세상에 크리에이티브한 캠페인으로 전달합니다.
                </p>
                <p>
                  Bold, Creative, Emotional, Strategic, Memorable.<br />
                  이것이 우리가 추구하는 광고의 방향입니다.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="/images/about-story.png"
                alt="Creative process"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section ref={valuesRef} className="py-24 bg-muted">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display mb-6">Our Values</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              ADCT의 모든 작업은 이 세 가지 핵심 가치를 바탕으로 합니다.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                title: "Creative Storytelling",
                description: "모든 브랜드에는 이야기가 있습니다. 우리는 그 이야기를 발견하고, 사람들의 마음을 움직이는 내러티브로 재창조합니다.",
                icon: "💡"
              },
              {
                title: "Emotional Impact",
                description: "광고는 감정에서 시작합니다. 우리는 데이터와 인사이트를 바탕으로 깊은 공감을 이끌어내는 크리에이티브를 만듭니다.",
                icon: "❤️"
              },
              {
                title: "Strategic Campaigns",
                description: "아름다운 디자인만으로는 충분하지 않습니다. 명확한 목표와 전략을 바탕으로 측정 가능한 결과를 만들어냅니다.",
                icon: "🎯"
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-6">{value.icon}</div>
                <h3 className="text-headline mb-4">{value.title}</h3>
                <p className="text-body text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Philosophy */}
      <section ref={teamRef} className="py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="/images/team-roles-abstract.png"
                alt="Abstract representation of four core advertising roles: Copywriter, Art Director, Brand Strategist, and Creative Director interacting harmoniously"
                className="w-full h-96 object-cover rounded-lg shadow-elegant"
                loading="lazy"
              />
            </div>
            <div>
              <h2 className="text-display mb-8">Our Team</h2>
              <div className="space-y-6 text-body text-muted-foreground">
                <p>
                  ADCT는 다양한 배경을 가진 크리에이티브 전문가들이 모인 팀입니다.
                  카피라이터, 아트 디렉터, 브랜드 전략가, 그리고 크리에이티브 디렉터가
                  하나의 비전을 향해 협력합니다.
                </p>
                <p>
                  우리는 각자의 전문성을 존중하면서도,
                  클라이언트의 성공을 위해 장르와 매체의 경계를 넘나드는 통합 캠페인을 만듭니다.
                </p>
                <p>
                  "광고는 판매를 위해 존재하지 않는다. 감동을 위해 존재한다."<br />
                  이것이 우리 팀이 공유하는 철학입니다.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-6">
                <div>
                  <h4 className="text-caption mb-2">설립</h4>
                  <p className="text-body">2005년</p>
                </div>
                <div>
                  <h4 className="text-caption mb-2">팀 규모</h4>
                  <p className="text-body">12명</p>
                </div>
                <div>
                  <h4 className="text-caption mb-2">완료 프로젝트</h4>
                  <p className="text-body">150+</p>
                </div>
                <div>
                  <h4 className="text-caption mb-2">클라이언트</h4>
                  <p className="text-body">80+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-display mb-6">Let's start together</h2>
          <p className="text-body-large mb-8 opacity-90">
            브랜드의 진정한 가치를 발견하고 싶다면,<br />
            ADCT와 함께 여정을 시작해보세요.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="secondary" size="lg">
              <Link to="/capabilities">서비스 알아보기</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary">
              <Link to="/contact">프로젝트 문의</Link>
            </Button>
          </div>
        </div>
      </section>

      <ScrollToTop />
      <Footer />
    </div>
  );
};

export default About;