import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_ITEMS } from '@/config/company';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="inline-block">
              <h3 className="text-3xl font-light tracking-tight mb-6 hover:opacity-80 transition-opacity">
                {COMPANY_INFO.name.english}
              </h3>
            </Link>
            <p className="text-body text-primary-foreground/80 max-w-md mb-4 leading-relaxed">
              {COMPANY_INFO.description.korean}<br />
              <span className="text-sm opacity-70">{COMPANY_INFO.description.english}</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="md:ml-auto">
            <h4 className="text-caption mb-6 opacity-60">Navigation</h4>
            <ul className="space-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-white text-primary-foreground/80 transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Info (Minimal) */}
        <div className="border-t border-primary-foreground/10 mt-16 pt-8">
          <div className="text-[10px] text-primary-foreground/40 mb-4 space-y-1">
            <p>
              {COMPANY_INFO.name.full} | 대표자: {COMPANY_INFO.ceo.name} | 사업자등록번호: {COMPANY_INFO.business.registrationNumber}
            </p>
            <p>
              주소: {COMPANY_INFO.address.full} | Tel: {COMPANY_INFO.contact.phone} | Fax: {COMPANY_INFO.contact.fax} | Email: <ObfuscatedEmail />
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-primary-foreground/40">
              © {COMPANY_INFO.copyright.year} {COMPANY_INFO.copyright.text}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                <Link to="/business-info" className="text-xs font-medium text-primary-foreground/70 hover:text-white transition-colors">
                  회사정보 보기
                </Link>
                <Link to="/privacy-policy" className="text-xs text-primary-foreground/50 hover:text-white transition-colors">
                  개인정보처리방침
                </Link>
                <Link to="/terms-of-service" className="text-xs text-primary-foreground/50 hover:text-white transition-colors">
                  이용약관
                </Link>
                <Link to="/email-refusal" className="text-xs text-primary-foreground/50 hover:text-white transition-colors">
                  이메일무단수집거부
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;