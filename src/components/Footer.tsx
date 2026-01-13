import { Link } from 'react-router-dom';
import { COMPANY_INFO, NAV_ITEMS } from '@/config/company';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-light tracking-tight mb-4">{COMPANY_INFO.name.english}</h3>
            <p className="text-body text-primary-foreground/80 max-w-md mb-4">
              {COMPANY_INFO.description.korean}<br />
              {COMPANY_INFO.description.english}
            </p>

            {/* 회사 정보 */}
            <div className="text-sm text-primary-foreground/70 space-y-1 mt-6">
              <p><strong>상호명:</strong> {COMPANY_INFO.name.full}</p>
              <p><strong>대표자:</strong> {COMPANY_INFO.ceo.name}</p>
              {COMPANY_INFO.business.registrationNumber && (
                <p><strong>사업자등록번호:</strong> {COMPANY_INFO.business.registrationNumber}</p>
              )}
              <p><strong>개인정보보호책임자:</strong> {COMPANY_INFO.privacy.officer}</p>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-caption mb-4">Navigation</h4>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm hover:text-white transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-caption mb-4">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/80">
              <div className="h-7 overflow-hidden flex items-center">
                <img src="/images/email-white.png" alt="Email" className="h-40 max-w-none mix-blend-screen object-cover" />
              </div>
              <p>T. {COMPANY_INFO.contact.phone}</p>
              {COMPANY_INFO.contact.fax && <p>F. {COMPANY_INFO.contact.fax}</p>}
              <p>
                {COMPANY_INFO.address.street}<br />
                {COMPANY_INFO.address.building}
              </p>
              <p className="text-xs mt-2">우편번호: {COMPANY_INFO.address.postalCode}</p>
              <p className="text-[10px] text-primary-foreground/50 mt-4 leading-tight break-keep">
                본 웹사이트에 게시된 이메일 주소가 무단으로 수집되는 것을 거부하며, 위반 시 정보통신망법에 의해 처벌될 수 있습니다.
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-primary-foreground/60">
            © {COMPANY_INFO.copyright.year} {COMPANY_INFO.copyright.text} <span className="mx-1">|</span> 본 사이트의 모든 디자인 자산은 저작권법의 보호를 받습니다.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-sm text-primary-foreground/60 hover:text-white transition-colors">
              개인정보처리방침
            </Link>
            <Link to="/terms-of-service" className="text-sm text-primary-foreground/60 hover:text-white transition-colors">
              이용약관
            </Link>
            <Link to="/email-refusal" className="text-sm font-medium text-primary-foreground/80 hover:text-white transition-colors border px-2 py-0.5 rounded border-white/20 hover:border-white/50">
              이메일무단수집거부
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;