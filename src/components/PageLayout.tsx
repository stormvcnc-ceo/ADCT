import { useEffect, ReactNode } from 'react';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';

interface PageLayoutProps {
    children: ReactNode;
}

const PageLayout = ({ children }: PageLayoutProps) => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-[#0e131f] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black relative overflow-x-hidden">
            <Navigation />
            <main>{children}</main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default PageLayout;
