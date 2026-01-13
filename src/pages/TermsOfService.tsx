
import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';
import { COMPANY_INFO } from '@/config/company';

const TermsOfService = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            <main className="pt-32 pb-16 px-6 lg:px-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-light tracking-tight mb-8">이용약관</h1>
                <p className="text-sm text-muted-foreground mb-12">
                    최종 수정일: 2026년 1월 1일
                </p>

                <div className="prose prose-gray max-w-none space-y-8 text-body text-muted-foreground">
                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제1조 (목적)</h2>
                        <p>
                            본 약관은 {COMPANY_INFO.name.full}(이하 "회사"라 함)가 운영하는 웹사이트(이하 "사이트"라 함)에서 제공하는 인터넷 관련 서비스(이하 "서비스"라 함)를 이용함에 있어 회사와 이용자의 권리, 의무 및 책임사항을 규정함을 목적으로 합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제2조 (정의)</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>"사이트"란 회사가 재화 또는 용역(이하 "재화 등"이라 함)을 이용자에게 제공하기 위하여 컴퓨터 등 정보통신설비를 이용하여 재화 등을 거래할 수 있도록 설정한 가상의 영업장을 말하며, 아울러 사이버몰을 운영하는 사업자의 의미로도 사용합니다.</li>
                            <li>"이용자"란 사이트에 접속하여 이 약관에 따라 회사가 제공하는 서비스를 받는 회원 및 비회원을 말합니다.</li>
                            <li>"회원"이라 함은 사이트에 회원등록을 한 자로서, 계속적으로 회사가 제공하는 서비스를 이용할 수 있는 자를 말합니다.</li>
                            <li>"비회원"이라 함은 회원에 가입하지 않고 회사가 제공하는 서비스를 이용하는 자를 말합니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제3조 (약관의 명시와 설명 및 개정)</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>회사는 이 약관의 내용과 상호 및 대표자 성명, 영업소 소재지 주소, 전화번호, 모사전송번호, 전자우편주소, 사업자등록번호 등을 이용자가 쉽게 알 수 있도록 사이트의 초기 서비스화면(전면)에 게시합니다.</li>
                            <li>회사는 「전자상거래 등에서의 소비자보호에 관한 법률」, 「약관의 규제에 관한 법률」, 「전자문서 및 전자거래기본법」, 「전자금융거래법」, 「전자서명법」, 「정보통신망 이용촉진 및 정보보호 등에 관한 법률」, 「방문판매 등에 관한 법률」, 「소비자기본법」 등 관련 법을 위배하지 않는 범위에서 이 약관을 개정할 수 있습니다.</li>
                            <li>회사가 약관을 개정할 경우에는 적용일자 및 개정사유를 명시하여 현행약관과 함께 몰의 초기화면에 그 적용일자 7일 이전부터 적용일자 전일까지 공지합니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제4조 (서비스의 제공 및 변경)</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>회사는 다음과 같은 업무를 수행합니다.
                                <ul className="list-disc pl-5 mt-2 space-y-1">
                                    <li>재화 또는 용역에 대한 정보 제공 및 구매 계약의 체결</li>
                                    <li>구매계약이 체결된 재화 또는 용역의 배송</li>
                                    <li>기타 회사가 정하는 업무</li>
                                </ul>
                            </li>
                            <li>회사는 재화 또는 용역의 품절 또는 기술적 사양의 변경 등의 경우에는 장차 체결되는 계약에 의해 제공할 재화 또는 용역의 내용을 변경할 수 있습니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제5조 (서비스의 중단)</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>회사는 컴퓨터 등 정보통신설비를 보수점검, 교체 및 고장, 통신의 두절 등의 사유가 발생한 경우에는 서비스의 제공을 일시적으로 중단할 수 있습니다.</li>
                            <li>회사는 제1항의 사유로 서비스의 제공이 일시적으로 중단됨으로 인하여 이용자 또는 제3자가 입은 손해에 대하여 배상합니다. 단, 회사가 고의 또는 과실이 없음을 입증하는 경우에는 그러하지 아니합니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제6조 (개인정보보호)</h2>
                        <p>
                            회사는 이용자의 개인정보 수집시 서비스제공을 위하여 필요한 범위에서 최소한의 개인정보를 수집합니다. 회사는 개인정보처리방침을 통해 이용자의 개인정보를 보호하기 위해 노력합니다.
                        </p>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제7조 (회사의 의무)</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>회사는 법령과 이 약관이 금지하거나 공서양속에 반하는 행위를 하지 않으며 이 약관이 정하는 바에 따라 지속적이고, 안정적으로 재화, 용역을 제공하는데 최선을 다하여야 합니다.</li>
                            <li>회사는 이용자가 안전하게 인터넷 서비스를 이용할 수 있도록 이용자의 개인정보(신용정보 포함)보호를 위한 보안 시스템을 갖추어야 합니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제8조 (이용자의 의무)</h2>
                        <p className="mb-2">이용자는 다음 행위를 하여서는 안 됩니다.</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>소프트웨어/데이터 복제(Crawling) 및 역설계(Reverse Engineering)</li>
                            <li>타인의 정보 도용</li>
                            <li>회사가 게시한 정보의 변경</li>
                            <li>회사가 정한 정보 이외의 정보(컴퓨터 프로그램 등) 등의 송신 또는 게시</li>
                            <li>회사 기타 제3자의 저작권 등 지적재산권에 대한 침해</li>
                            <li>회사 기타 제3자의 명예를 손상시키거나 업무를 방해하는 행위</li>
                            <li>외설 또는 폭력적인 메시지, 화상, 음성, 기타 공서양속에 반하는 정보를 몰에 공개 또는 게시하는 행위</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제9조 (분쟁해결)</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>회사는 이용자가 제기하는 정당한 의견이나 불만을 반영하고 그 피해를 보상처리하기 위하여 피해보상처리기구를 설치, 운영합니다.</li>
                            <li>회사는 이용자로부터 제출되는 불만사항 및 의견은 우선적으로 그 사항을 처리합니다. 다만, 신속한 처리가 곤란한 경우에는 이용자에게 그 사유와 처리일정을 즉시 통보해 드립니다.</li>
                        </ol>
                    </section>

                    <section>
                        <h2 className="text-xl font-medium text-foreground mb-4">제10조 (준거법 및 재판관할)</h2>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>회사와 이용자 간에 발생한 전자상거래 분쟁에 관한 소송은 제소 당시의 이용자의 주소에 의하고, 주소가 없는 경우에는 거소를 관할하는 지방법원의 전속관할로 합니다. 다만, 제소 당시 이용자의 주소 또는 거소가 분명하지 않거나 외국 거주자의 경우에는 민사소송법상의 관할법원에 제기합니다.</li>
                            <li>회사와 이용자 간에 제기된 전자상거래 소송에는 한국법을 적용합니다.</li>
                        </ol>
                    </section>

                    <div className="mt-12 pt-8 border-t border-border">
                        <h3 className="text-lg font-medium mb-4">문의처</h3>
                        <p>이용약관과 관련하여 궁금한 점이 있으시면 아래 연락처로 문의해 주시기 바랍니다.</p>
                        <ul className="mt-4 space-y-1">
                            <li>이메일: {COMPANY_INFO.contact.email}</li>
                            <li>전화번호: {COMPANY_INFO.contact.phone}</li>
                        </ul>
                    </div>
                </div>
            </main>

            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default TermsOfService;
