import PageLayout from '@/components/PageLayout';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';
import { COMPANY_INFO } from '@/config/company';

const PrivacyPolicy = () => {
    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-4xl space-y-4">
                    <span className="text-xs uppercase tracking-widest text-cyan-400 font-semibold font-mono">Privacy &amp; Policy</span>
                    <h1 className="text-4xl sm:text-6xl font-black text-white">
                        개인정보처리방침
                    </h1>
                    <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                        {COMPANY_INFO.name.full}(이하 '회사'라 함)는 귀하의 개인정보를 중요시하며, 「개인정보 보호법」을 준수하고 있습니다.
                        회사는 개인정보처리방침을 통하여 귀하께서 제공하시는 개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
                        개인정보보호를 위해 어떠한 조치가 취해지고 있는지 알려드립니다.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 px-6 lg:px-8 max-w-4xl mx-auto mb-24">
                <div className="space-y-12 text-slate-300 font-light leading-relaxed text-sm">

                    {/* 1. 개인정보의 수집 및 이용 목적 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">1. 개인정보의 수집 및 이용 목적</h2>
                        <p className="text-slate-300">
                            회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                        </p>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 text-slate-200">
                            <strong>문의 및 상담 처리:</strong> 광고 디자인, 분양 광고, 브랜드 마케팅 관련 견적 문의 및 상담 응대, 서비스 안내
                        </div>
                    </div>

                    {/* 2. 수집하는 개인정보의 항목 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">2. 수집하는 개인정보의 항목</h2>
                        <p className="text-slate-300">
                            회사는 상담 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다.
                        </p>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 space-y-2 text-slate-200">
                            <p>
                                <strong>수집항목:</strong> 이름(또는 담당자명), 업체명, 연락처(전화번호/휴대폰번호), 이메일 주소, 문의 내용
                            </p>
                            <p>
                                <strong>자동 수집항목:</strong> 서비스 이용 기록, 접속 로그, 쿠키, 접속 IP 정보
                            </p>
                        </div>
                    </div>

                    {/* 3. 개인정보의 보유 및 이용기간 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">3. 개인정보의 보유 및 이용기간</h2>
                        <p className="text-slate-300">
                            회사는 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                            단, 관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안 정보를 보관합니다.
                        </p>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 space-y-2 text-slate-200">
                            <p>
                                • <strong>보유 기간:</strong> 상담 완료 후 1년 (내부 방침에 따라 조정 가능)
                            </p>
                            <p>
                                • <strong>소비자의 불만 또는 분쟁처리에 관한 기록:</strong> 3년 (전자상거래 등에서의 소비자보호에 관한 법률)
                            </p>
                        </div>
                    </div>

                    {/* 4. 개인정보의 파기절차 및 방법 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">4. 개인정보의 파기절차 및 방법</h2>
                        <p className="text-slate-300">
                            회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는 해당 정보를 지체 없이 파기합니다.
                        </p>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 space-y-2 text-slate-200">
                            <p>
                                <strong>파기절차:</strong> 상담을 위해 입력하신 정보는 목적이 달성된 후 별도의 DB로 옮겨져(종이의 경우 별도의 서류함)
                                내부 방침 및 기타 관련 법령에 의한 정보보호 사유에 따라 일정 기간 저장된 후 파기됩니다.
                            </p>
                            <p>
                                <strong>파기방법:</strong> 전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는 기술적 방법을 사용하여 삭제합니다.
                            </p>
                        </div>
                    </div>

                    {/* 5. 개인정보 제공 및 공유 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">5. 개인정보 제공 및 공유</h2>
                        <p className="text-slate-300">
                            회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지 않습니다. 다만, 아래의 경우에는 예외로 합니다.
                        </p>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 space-y-2 text-slate-200">
                            <p>• 이용자들이 사전에 동의한 경우</p>
                            <p>• 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진 절차와 방법에 따라 수사기관의 요구가 있는 경우</p>
                        </div>
                    </div>

                    {/* 6. 수집한 개인정보의 위탁 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">6. 수집한 개인정보의 위탁</h2>
                        <p className="text-slate-300">
                            회사는 서비스 이행을 위해 아래와 같이 외부 전문업체에 위탁하여 운영하고 있습니다.
                        </p>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 space-y-2 text-slate-200">
                            <p>• <strong>위탁 대상자:</strong> EmailJS</p>
                            <p>• <strong>위탁 업무 내용:</strong> 이메일 발송 대행</p>
                        </div>
                    </div>

                    {/* 7. 이용자 및 법정대리인의 권리와 그 행사방법 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">7. 이용자 및 법정대리인의 권리와 그 행사방법</h2>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 text-slate-200">
                            이용자는 언제든지 등록되어 있는 자신의 개인정보를 조회하거나 수정할 수 있으며 삭제를 요청할 수도 있습니다.
                            혹은 개인정보관리책임자에게 서면, 전화 또는 이메일로 연락하시면 지체 없이 조치하겠습니다.
                        </div>
                    </div>

                    {/* 8. 개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">8. 개인정보 자동 수집 장치의 설치, 운영 및 그 거부에 관한 사항</h2>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 text-slate-200 leading-relaxed">
                            회사는 귀하의 정보를 수시로 저장하고 찾아내는 '쿠키(cookie)' 등을 운용합니다.
                            귀하는 쿠키 설치에 대한 선택권을 가지고 있으며, 웹브라우저 옵션 설정을 통해 모든 쿠키를 허용하거나, 거부할 수 있습니다.
                            (단, 거부 시 서비스 제공에 어려움이 있을 수 있습니다.)
                        </div>
                    </div>

                    {/* 9. 개인정보에 관한 민원 서비스 */}
                    <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-4">
                        <h2 className="text-xl font-bold text-white">9. 개인정보에 관한 민원 서비스</h2>
                        <p className="text-slate-300">
                            회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을 처리하기 위하여 아래와 같이 관련 부서 및 개인정보관리책임자를 지정하고 있습니다.
                        </p>
                        <div className="bg-white/[0.03] p-5 rounded-2xl border border-white/10 space-y-3 text-slate-200">
                            <p className="font-semibold text-white">개인정보 관리책임자</p>
                            <ul className="space-y-1.5 text-slate-300">
                                <li>• 성명: <span className="text-white font-medium">{COMPANY_INFO.privacy.officer} 대표</span></li>
                                <li>• 전화번호: <span className="text-cyan-300 font-mono">{COMPANY_INFO.contact.phone}</span></li>
                                <li>• 이메일: <ObfuscatedEmail /></li>
                            </ul>
                            <p className="text-slate-400 text-xs mt-4">
                                귀하께서는 회사의 서비스를 이용하시며 발생하는 모든 개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로 신고하실 수 있습니다.
                            </p>
                        </div>
                    </div>

                    {/* 공고일자 및 시행일자 */}
                    <div className="border-t border-white/10 pt-8 mt-12">
                        <div className="p-6 rounded-2xl bg-cyan-500/10 border border-cyan-400/20 text-center text-xs font-mono text-cyan-300">
                            <strong>공고일자:</strong> 2026년 1월 1일 | <strong>시행일자:</strong> 2026년 1월 1일
                        </div>
                    </div>

                </div>
            </section>
        </PageLayout>
    );
};

export default PrivacyPolicy;
