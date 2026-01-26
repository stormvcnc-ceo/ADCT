
import { Link } from 'react-router-dom';
import PageLayout from '@/components/PageLayout';
import { COMPANY_INFO } from '@/config/company';

const BusinessInfo = () => {
    return (
        <PageLayout>
            <div className="max-w-4xl mx-auto px-6 py-24 min-h-[60vh]">
                <div className="mb-12 text-center">
                    <h1 className="text-3xl font-bold mb-4">회사 정보</h1>
                    <p className="text-muted-foreground">
                        (주)애드시티의 투명한 기업 정보를 안내해 드립니다.
                    </p>
                </div>

                <div className="bg-white/50 backdrop-blur-sm border rounded-lg p-8 shadow-sm">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h2 className="text-xl font-semibold mb-6 border-b pb-2">기본 정보</h2>
                            <ul className="space-y-4">
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">상호명</span>
                                    <span className="text-base">{COMPANY_INFO.name.full}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">대표자</span>
                                    <span className="text-base">{COMPANY_INFO.ceo.name}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">사업자등록번호</span>
                                    <span className="text-base">{COMPANY_INFO.business.registrationNumber}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">개인정보책임자</span>
                                    <span className="text-base">{COMPANY_INFO.privacy.officer}</span>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-xl font-semibold mb-6 border-b pb-2">연락처 및 주소</h2>
                            <ul className="space-y-4">
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">주소</span>
                                    <span className="text-base">
                                        {COMPANY_INFO.address.street}<br />
                                        {COMPANY_INFO.address.building}<br />
                                        <span className="text-sm text-muted-foreground">(우편번호: {COMPANY_INFO.address.postalCode})</span>
                                    </span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">전화번호</span>
                                    <span className="text-base">{COMPANY_INFO.contact.phone}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">팩스</span>
                                    <span className="text-base">{COMPANY_INFO.contact.fax}</span>
                                </li>
                                <li className="flex flex-col sm:flex-row sm:items-baseline">
                                    <span className="text-sm font-medium text-muted-foreground w-28 shrink-0">이메일</span>
                                    <div className="text-base flex items-center flex-wrap gap-x-4 gap-y-2">
                                        <div className="h-7 overflow-hidden flex items-center">
                                            <img src="/images/email-dark.png" alt="Email" className="h-32 max-w-none object-cover -ml-1" />
                                        </div>
                                        <Link to="/email-refusal" className="text-[10px] sm:text-xs px-2 py-1 border border-border rounded text-muted-foreground hover:text-foreground hover:border-foreground transition-colors">
                                            이메일무단수집거부
                                        </Link>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-sm text-muted-foreground">
                        본 웹사이트의 모든 콘텐츠는 저작권법의 보호를 받습니다. 무단 전재 및 복사, 배포 등을 금합니다.
                    </p>
                </div>
            </div>
        </PageLayout>
    );
};

export default BusinessInfo;
