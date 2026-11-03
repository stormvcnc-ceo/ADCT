import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/config/company';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'backdrop-blur-xl bg-[#0e131f]/90 border-b border-white/[0.08] shadow-2xl shadow-black/50' 
        : 'backdrop-blur-md bg-[#0e131f]/60 border-b border-white/[0.04]'
    }`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link
            to="/"
            className="text-2xl font-black tracking-wider text-white hover:text-cyan-300 transition-colors"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ADCT
          </Link>
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-medium hidden sm:inline-block border-l border-white/20 pl-3">
            Creative Advertising
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-1 transition-colors ${
                  isActive 
                    ? 'text-cyan-400 font-semibold' 
                    : 'text-slate-300 hover:text-cyan-300'
                }`}
              >
                {item.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-4">
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-xs font-semibold hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-105 transition-all"
          >
            프로젝트 문의하기
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className="md:hidden p-2 text-slate-300 hover:text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between">
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block h-0.5 w-full bg-current transition-opacity duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-0.5 w-full bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#0e131f]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-fade-in">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-2 text-base font-medium transition-colors ${
                  isActive ? 'text-cyan-400 font-bold' : 'text-slate-300 hover:text-cyan-300'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4 border-t border-white/10">
            <Link
              to="/contact"
              className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-sm font-semibold"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              프로젝트 문의하기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
