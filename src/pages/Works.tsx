
import { useState } from 'react';
import PageLayout from '@/components/PageLayout';
import { Button } from '@/components/ui/button';
import { PROJECTS, WORK_CATEGORIES } from '@/data/projects';

const Works = () => {
    const [activeCategory, setActiveCategory] = useState('all');

    const filteredProjects = activeCategory === 'all'
        ? PROJECTS
        : PROJECTS.filter(p => p.category === activeCategory);

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-4xl">
                    <h1 className="text-hero mb-8 animate-fade-in">
                        Works
                    </h1>
                    <p className="text-body-large text-muted-foreground mb-6 animate-slide-up">
                        20년의 경험이 귀하의 100년 탄탄대로를 건설하는 Bridge가 되겠습니다.<br />
                        Innovative today, Creative tomorrow.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-8">
                        <span className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">20+ Years Experience</span>
                        <span className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">LH 공공기관 실적</span>
                        <span className="text-sm px-4 py-2 bg-primary/10 text-primary rounded-full">대형 건설사 협업</span>
                    </div>

                    {/* Company Profile Download */}
                    <div className="mt-8">
                        <Button asChild variant="outline" size="lg" className="gap-2">
                            <a href="/documents/ADCT-지명원.pdf" download="ADCT-지명원.pdf" className="inline-flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                    <polyline points="7 10 12 15 17 10"></polyline>
                                    <line x1="12" y1="15" x2="12" y2="3"></line>
                                </svg>
                                ADCT 지명원 다운로드
                            </a>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Category Filter */}
            <section className="py-8 px-6 lg:px-8 max-w-7xl mx-auto border-y border-border">
                <div className="flex flex-wrap gap-3 justify-center">
                    {WORK_CATEGORIES.map((cat) => (
                        <Button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            variant={activeCategory === cat.id ? 'default' : 'outline'}
                            size="lg"
                            className="transition-all"
                        >
                            {cat.name}
                        </Button>
                    ))}
                </div>
            </section>

            {/* Projects Grid */}
            <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <div
                            key={project.id}
                            className="group cursor-pointer animate-slide-up"
                            style={{ animationDelay: `${index * 0.05}s` }}
                        >
                            <div className="relative overflow-hidden rounded-lg mb-4 aspect-[4/3]">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className={`w-full h-full ${[15, 16].includes(project.id) ? 'object-contain p-2 bg-white' : 'object-cover'} transition-transform duration-500 group-hover:scale-110`}
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <p className="text-sm font-medium">{project.achievement}</p>
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <span className="text-xs text-primary font-medium">{project.year}</span>
                                    <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                                        {WORK_CATEGORIES.find(c => c.id === project.category)?.name}
                                    </span>
                                </div>
                                <h3 className="text-headline group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-sm text-muted-foreground line-clamp-2">
                                    {project.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-muted mt-12">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <h2 className="text-display mb-6">Your Success Story Starts Here</h2>
                    <p className="text-body-large text-muted-foreground mb-8">
                        20년 이상의 노하우로 귀사의 브랜드를<br />
                        성공으로 이끌어드리겠습니다.
                    </p>
                    <Button asChild size="lg">
                        <a href="#/contact">프로젝트 문의하기</a>
                    </Button>
                </div>
            </section>
        </PageLayout>
    );
};

export default Works;
