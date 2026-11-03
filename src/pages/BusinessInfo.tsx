import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { COMPANY_INFO } from '@/config/company';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

const BusinessInfo = () => {
    return (
        <PageLayout>
            <div className="max-w-4xl mx-auto px-6 py-28 min-h-[70vh]">
                <div className="mb-12 text-center space-y-3">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">Company Verification</span>
                    <h1 className="text-3xl sm:text-5xl font-black text-white">회사 정보</h1>
                    <p className="text-sm text-slate-400">
                        (주)애드시티의 투명하고 검증된 기업 정보를 안내해 드립니다.
                    </p>
                </div>

                <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                        <div>
                            <h2 className="text-lg font-bold text-cyan-300 mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
                                <span>📋</span> 기본 기업 정보
                            </h2>
                            <ul className="space-y-4 text-sm">
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-medium text-slate-400 w-28 shrink-0">상호명</span>
                                    <span className="text-white font-semibold">{COMPANY_INFO.name.full}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-medium text-slate-400 w-28 shrink-0">대표자</span>
                                    <span className="text-white">{COMPANY_INFO.ceo.name}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-medium text-slate-400 w-28 shrink-0">사업자등록번호</span>
                                    <span className="text-white font-mono">{COMPANY_INFO.business.registrationNumber || '211-88-00000'}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-medium text-slate-400 w-28 shrink-0">개인정보책임자</span>
                                    <span className="text-white">{COMPANY_INFO.privacy.officer}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-lg font-bold text-cyan-300 mb-6 border-b border-white/10 pb-3 flex items-center gap-2">
                                <span>📍</span> 연락처 및 본사 소재지
                            </h2>
                            <ul className="space-y-4 text-sm">
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-medium text-slate-400 w-28 shrink-0">주소</span>
                                    <span className="text-slate-200 leading-relaxed">
                                        {COMPANY_INFO.address.street}<br />
                                        {COMPANY_INFO.address.building}<br />
                                        <span className="text-xs text-slate-500 font-mono">(우편번호: {COMPANY_INFO.address.postalCode})</span>
                                    </span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-medium text-slate-400 w-28 shrink-0">전화번호</span>
                                    <span className="text-cyan-300 font-mono">{COMPANY_INFO.contact.phone}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="font-medium text-slate-400 w-28 shrink-0">이메일</span>
                                    <span className="text-slate-300"><ObfuscatedEmail /></span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="mt-12 pt-8 border-t border-white/10 flex flex-wrap justify-between items-center gap-4 text-xs">
                        <Link to="/" className="text-cyan-400 hover:underline">
                            ← 홈으로 돌아가기
                        </Link>
                        <div className="flex gap-4 text-slate-400">
                            <Link to="/terms-of-service" className="hover:text-white">이용약관</Link>
                            <Link to="/privacy-policy" className="hover:text-white">개인정보처리방침</Link>
                        </div>
                    </div>
                </div>
            </div>
        </PageLayout>
    );
};

export default BusinessInfo;
