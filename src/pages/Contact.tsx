import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import PageLayout from '@/components/PageLayout';
import { toast } from "sonner";
import { EMAILJS_CONFIG } from '@/config/emailjs';
import { COMPANY_INFO } from '@/config/company';
import KakaoMap from '@/components/KakaoMap';
import ObfuscatedEmail from '@/components/ObfuscatedEmail';

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [agreed, setAgreed] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!agreed) {
            toast.error("개인정보 수집 및 이용에 동의해주세요.");
            return;
        }

        setIsSubmitting(true);

        if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
            toast.error("시스템 설정 오류: 이메일 서비스 연동 정보가 없습니다.");
            console.error("EmailJS Config Error: Missing environment variables. Please check .env file.");
            setIsSubmitting(false);
            return;
        }

        try {
            const templateParams = {
                from_name: formData.name,
                from_email: formData.email,
                subject: formData.subject,
                message: formData.message,
                to_email: EMAILJS_CONFIG.toEmail
            };

            await emailjs.send(
                EMAILJS_CONFIG.serviceId,
                EMAILJS_CONFIG.templateId,
                templateParams,
                EMAILJS_CONFIG.publicKey
            );

            toast.success("문의가 성공적으로 전송되었습니다! 빠른 시일 내에 답변 드리겠습니다.");
            setFormData({ name: '', email: '', subject: '', message: '' });
            setAgreed(false);
        } catch (error) {
            console.error('EmailJS Error:', error);
            const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
            toast.error(`전송 실패: ${errorMessage}. 잠시 후 다시 시도해 주세요.`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <PageLayout>
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
                <div className="max-w-4xl space-y-6">
                    <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-xs font-medium text-cyan-300">
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                        GET IN TOUCH
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-black tracking-tight text-white leading-tight">
                        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Us</span>
                    </h1>

                    <p className="text-base sm:text-xl text-slate-300 font-light leading-relaxed max-w-2xl">
                        브랜드의 새로운 도약을 준비 중이신가요?<br />
                        ADCT의 크리에이티브 디렉터가 귀사의 성공적인 캠페인을 위해 함께 고민하겠습니다.
                    </p>
                </div>
            </section>

            {/* Content Section: Form & Info */}
            <section className="py-20 px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/[0.08]">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    
                    {/* Left: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="p-8 sm:p-10 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl shadow-2xl space-y-6">
                            <div>
                                <h2 className="text-2xl font-bold text-white mb-2">프로젝트 상담 접수</h2>
                                <p className="text-xs text-slate-400">필요한 정보를 남겨주시면 담당 디렉터가 24시간 이내에 회신드립니다.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-semibold text-slate-300">성함 / 담당자명 *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="홍길동"
                                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-semibold text-slate-300">이메일 주소 *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="contact@company.com"
                                            className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-semibold text-slate-300">문의 제목 / 프로젝트명 *</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="브랜드 캠페인 영상 제작 견적 문의"
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-semibold text-slate-300">문의 내용 *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="프로젝트 일정, 예산 범위, 주요 요구사항 등을 자유롭게 작성해 주세요."
                                        className="w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/15 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none leading-relaxed"
                                    />
                                </div>

                                {/* Privacy Consent Box */}
                                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 space-y-3">
                                    <div className="flex items-start gap-3">
                                        <input
                                            id="privacy-agree"
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            className="mt-1 h-4 w-4 rounded border-white/20 bg-black/40 text-cyan-500 focus:ring-cyan-400"
                                        />
                                        <label htmlFor="privacy-agree" className="text-xs text-slate-300 cursor-pointer leading-normal">
                                            <span className="text-cyan-400 font-semibold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                                        </label>
                                    </div>
                                    <p className="text-[11px] text-slate-400 pl-7 leading-relaxed font-light">
                                        수집 목적: 견적 상담 및 문의 응대 | 수집 항목: 성함, 이메일 | 보유 기간: 상담 완료 후 1년 보관 후 파기 (동의 거부 시 상담이 제한될 수 있습니다).
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-500 hover:to-cyan-400 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 hover:scale-[1.01] transition-all disabled:opacity-50"
                                >
                                    {isSubmitting ? "문의 전송 중..." : "문의 메시지 보내기 →"}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Company Info & KakaoMap */}
                    <div className="lg:col-span-5 space-y-8">
                        {/* Direct Contacts Card */}
                        <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 space-y-6">
                            <span className="text-xs uppercase tracking-widest text-amber-400 font-semibold font-mono">Headquarters</span>
                            <h3 className="text-xl font-bold text-white">오피스 및 연락처 안내</h3>
                            
                            <div className="space-y-4 text-sm text-slate-300 leading-relaxed font-light">
                                <div className="flex items-start gap-3">
                                    <span className="text-lg">📍</span>
                                    <div>
                                        <div className="font-semibold text-white">부산 본사</div>
                                        <div className="text-xs text-slate-400">{COMPANY_INFO.address.full}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-lg">📞</span>
                                    <div>
                                        <div className="font-semibold text-white">대표 전화</div>
                                        <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-xs text-cyan-300 hover:underline">{COMPANY_INFO.contact.phone}</a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-lg">✉️</span>
                                    <div>
                                        <div className="font-semibold text-white">이메일 문의</div>
                                        <div className="text-xs text-slate-300"><ObfuscatedEmail /></div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3">
                                    <span className="text-lg">⏰</span>
                                    <div>
                                        <div className="font-semibold text-white">운영 시간</div>
                                        <div className="text-xs text-slate-400">평일 09:30 - 18:30 (주말 및 공휴일 휴무)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Map Card */}
                        <div className="rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] p-2 shadow-2xl">
                            <div className="p-4 text-xs font-semibold text-slate-300 flex items-center justify-between border-b border-white/10 mb-2">
                                <span>LOCATION MAP</span>
                                <span className="text-cyan-400">오션타워 1716호</span>
                            </div>
                            <div className="rounded-2xl overflow-hidden h-72">
                                <KakaoMap />
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </PageLayout>
    );
};

export default Contact;
