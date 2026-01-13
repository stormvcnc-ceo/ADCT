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
        <div className="min-h-screen bg-background">
            <Navigation />
            {children}
            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default PageLayout;
