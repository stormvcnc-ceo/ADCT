import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '@/config/company';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 120);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  // 메인 최상단(다크 히어로 위)일 때만 다크 헤더, 스크롤 또는 서브페이지는 오프화이트 헤더
  const useDarkHeader = isHome && !isScrolled;

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-200 ${
        useDarkHeader
          ? 'bg-[#111216]/75 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-[#F8F8F6]/90 backdrop-blur-md border-b border-zinc-200/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3.5">
          <Link
            to="/"
            className={`text-xl font-semibold tracking-tight transition-colors ${
              useDarkHeader
                ? 'text-zinc-50 hover:text-white'
                : 'text-zinc-950 hover:text-zinc-700'
            }`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            ADCT
          </Link>
          <span
            className={`text-[11px] tracking-wide font-normal hidden sm:inline-block border-l pl-3.5 ${
              useDarkHeader
                ? 'text-zinc-400 border-white/[0.15]'
                : 'text-zinc-500 border-zinc-300'
            }`}
          >
            Creative Advertising
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`relative py-1.5 transition-colors duration-150 ${
                  useDarkHeader
                    ? isActive
                      ? 'text-zinc-50'
                      : 'text-zinc-400 hover:text-zinc-100'
                    : isActive
                      ? 'text-zinc-950'
                      : 'text-zinc-500 hover:text-zinc-950'
                }`}
              >
                {item.name}
                {isActive && (
                  <span
                    className={`absolute bottom-0 left-0 w-full h-[1.5px] ${
                      useDarkHeader ? 'bg-zinc-100' : 'bg-zinc-950'
                    }`}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center">
          <Link
            to="/contact"
            className={`px-4 py-2 rounded-md text-xs font-medium transition-all duration-150 active:scale-[0.98] ${
              useDarkHeader
                ? 'bg-zinc-100 hover:bg-white text-zinc-950'
                : 'bg-zinc-950 hover:bg-zinc-800 text-zinc-50'
            }`}
          >
            프로젝트 문의
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          className={`md:hidden p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center ${
            useDarkHeader
              ? 'text-zinc-300 hover:text-white'
              : 'text-zinc-700 hover:text-zinc-950'
          }`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-4 flex flex-col justify-between">
            <span className={`block h-[1.5px] w-full bg-current transition-all duration-200 ${isMobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block h-[1.5px] w-full bg-current transition-opacity duration-200 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block h-[1.5px] w-full bg-current transition-all duration-200 ${isMobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </div>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden backdrop-blur-md border-b px-6 py-6 space-y-2 ${
            useDarkHeader
              ? 'bg-[#111216]/95 border-white/[0.08]'
              : 'bg-[#F8F8F6]/95 border-zinc-200'
          }`}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.name}
                to={item.path}
                className={`block py-3 text-base font-medium transition-colors border-b ${
                  useDarkHeader
                    ? `border-white/[0.05] ${isActive ? 'text-zinc-50' : 'text-zinc-400 hover:text-zinc-100'}`
                    : `border-zinc-200/70 ${isActive ? 'text-zinc-950' : 'text-zinc-600 hover:text-zinc-950'}`
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            );
          })}
          <div className="pt-4">
            <Link
              to="/contact"
              className={`block w-full text-center py-3 rounded-md text-sm font-medium transition-all active:scale-[0.98] ${
                useDarkHeader
                  ? 'bg-zinc-100 hover:bg-white text-zinc-950'
                  : 'bg-zinc-950 hover:bg-zinc-800 text-zinc-50'
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              프로젝트 문의
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;
