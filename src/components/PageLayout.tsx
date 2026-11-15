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
        <div className="min-h-screen bg-[#F8F8F6] text-[#141416] font-sans selection:bg-zinc-900 selection:text-zinc-50 relative overflow-x-hidden">
            <Navigation />
            <main>{children}</main>
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default PageLayout;
