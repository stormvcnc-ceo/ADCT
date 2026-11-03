import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_ITEMS } from '@/config/company';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

const Footer = () => {
  return (
    <footer className="border-t border-white/[0.08] bg-[#080e1a] text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand */}
          <div className="md:col-span-2 space-y-4">
            <Link to="/" className="inline-block">
              <h3 className="text-3xl font-black text-white hover:text-cyan-300 transition-colors">
                {COMPANY_INFO.name.english}
              </h3>
            </Link>
            <p className="text-sm text-slate-300 max-w-xl leading-relaxed font-light">
              {COMPANY_INFO.description.korean}<br />
              <span className="text-xs text-slate-400 mt-1 block">{COMPANY_INFO.description.english}</span>
            </p>
          </div>

          {/* Navigation */}
          <div className="md:ml-auto space-y-3">
            <h4 className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">Navigation</h4>
            <ul className="space-y-2.5">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    className="text-xs text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal Info (사업자 및 연락처 상세) */}
        <div className="border-t border-white/[0.06] mt-12 pt-8 space-y-4">
          <div className="text-[11px] text-slate-400 space-y-1.5 leading-relaxed font-light">
            <p>
              {COMPANY_INFO.name.full} | 대표자: {COMPANY_INFO.ceo.name} | 사업자등록번호: {COMPANY_INFO.business.registrationNumber}
            </p>
            <p>
              주소: {COMPANY_INFO.address.full} | Tel: <a href={`tel:${COMPANY_INFO.contact.phone}`} className="hover:text-cyan-400 text-slate-300">{COMPANY_INFO.contact.phone}</a> | Fax: {COMPANY_INFO.contact.fax} | Email: <ObfuscatedEmail />
            </p>
          </div>

          {/* Copyright & Links */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-4 border-t border-white/[0.04]">
            <p className="text-[11px] text-slate-500 font-mono">
              © {COMPANY_INFO.copyright.year} {COMPANY_INFO.name.full}. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs">
              <Link
                to="/business-info"
                className="font-medium text-slate-300 hover:text-cyan-300 transition-colors"
              >
                회사정보 보기
              </Link>
              <Link
                to="/privacy-policy"
                className="text-slate-400 hover:text-white transition-colors"
              >
                개인정보처리방침
              </Link>
              <Link
                to="/terms-of-service"
                className="text-slate-400 hover:text-white transition-colors"
              >
                이용약관
              </Link>
              <Link
                to="/email-refusal"
                className="text-slate-400 hover:text-white transition-colors"
              >
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
