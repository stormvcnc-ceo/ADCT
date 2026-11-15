import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_ITEMS } from '@/config/company';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#0E0F12] text-zinc-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand */}
          <div className="md:col-span-7 space-y-4">
            <Link to="/" className="inline-block">
              <span className="text-2xl font-semibold tracking-tight text-zinc-50 hover:text-white transition-colors">
                {COMPANY_INFO.name.english}
              </span>
            </Link>
            <p className="text-sm text-zinc-400 max-w-md leading-relaxed">
              {COMPANY_INFO.description.korean}
              <span className="block text-xs text-zinc-500 mt-1.5">
                {COMPANY_INFO.description.english}
              </span>
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-5 md:flex md:justify-end">
            <div className="space-y-3">
              <h4 className="text-xs text-zinc-500 font-medium">Menu</h4>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-x-10 gap-y-2.5">
                {NAV_ITEMS.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-xs text-zinc-300 hover:text-white transition-colors"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Legal Info */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 space-y-4">
          <div className="text-[11px] text-zinc-500 space-y-1.5 leading-relaxed">
            <p>
              {COMPANY_INFO.name.full} | 대표자: {COMPANY_INFO.ceo.name} | 사업자등록번호: {COMPANY_INFO.business.registrationNumber}
            </p>
            <p>
              주소: {COMPANY_INFO.address.full} | Tel:{' '}
              <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-zinc-200 text-zinc-400 transition-colors">
                {COMPANY_INFO.contact.phone}
              </a>{' '}
              | Fax: {COMPANY_INFO.contact.fax} | Email: <ObfuscatedEmail />
            </p>
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-white/[0.04]">
            <p className="text-[11px] text-zinc-600">
              © {COMPANY_INFO.copyright.year} {COMPANY_INFO.name.full}. All rights reserved.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs">
              <Link to="/business-info" className="text-zinc-300 hover:text-white transition-colors font-medium">
                회사정보 보기
              </Link>
              <Link to="/privacy-policy" className="text-zinc-500 hover:text-zinc-200 transition-colors">
                개인정보처리방침
              </Link>
              <Link to="/terms-of-service" className="text-zinc-500 hover:text-zinc-200 transition-colors">
                이용약관
              </Link>
              <Link to="/email-refusal" className="text-zinc-500 hover:text-zinc-200 transition-colors">
                이메일무단수집거부
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
