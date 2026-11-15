import { useEffect, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
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
            {/* Header Section */}
            <section className="pt-28 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl space-y-5">
                    <span className="text-xs font-mono text-zinc-500 tracking-wide block">Contact</span>
                    <h1 className="text-4xl sm:text-6xl font-semibold tracking-tight leading-[1.1] text-zinc-950">
                        Contact <span className="text-zinc-500">Us</span>
                    </h1>
                    <p className="text-base sm:text-lg text-zinc-600 leading-relaxed max-w-prose">
                        새로운 캠페인이나 브랜드 프로젝트를 준비 중이신가요? 간단한 내용을 남겨주시면 담당 디렉터가 검토 후 회신드립니다.
                    </p>
                </div>
            </section>

            {/* Content Section: Form & Info */}
            <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto border-t border-zinc-200">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
                    {/* Left: Contact Form */}
                    <div className="lg:col-span-7">
                        <div className="p-6 sm:p-8 rounded-xl bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] space-y-6">
                            <div className="space-y-1">
                                <h2 className="text-xl font-semibold text-zinc-950">프로젝트 상담 접수</h2>
                                <p className="text-xs text-zinc-500">접수된 문의는 영업일 기준 24시간 이내에 회신드립니다.</p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-5">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-1.5">
                                        <label htmlFor="name" className="text-xs font-medium text-zinc-700">성함 / 담당자명 *</label>
                                        <input
                                            id="name"
                                            name="name"
                                            type="text"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="홍길동"
                                            className="w-full px-3.5 py-2.5 rounded-md bg-[#F8F8F6] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                                        />
                                    </div>
                                    <div className="space-y-1.5">
                                        <label htmlFor="email" className="text-xs font-medium text-zinc-700">이메일 주소 *</label>
                                        <input
                                            id="email"
                                            name="email"
                                            type="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="contact@company.com"
                                            className="w-full px-3.5 py-2.5 rounded-md bg-[#F8F8F6] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="subject" className="text-xs font-medium text-zinc-700">문의 제목 / 프로젝트명 *</label>
                                    <input
                                        id="subject"
                                        name="subject"
                                        type="text"
                                        required
                                        value={formData.subject}
                                        onChange={handleChange}
                                        placeholder="브랜드 캠페인 및 제작 견적 문의"
                                        className="w-full px-3.5 py-2.5 rounded-md bg-[#F8F8F6] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 transition-colors"
                                    />
                                </div>

                                <div className="space-y-1.5">
                                    <label htmlFor="message" className="text-xs font-medium text-zinc-700">문의 내용 *</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="프로젝트 일정, 예산 범위, 주요 요구사항 등을 자유롭게 작성해 주세요."
                                        className="w-full px-3.5 py-2.5 rounded-md bg-[#F8F8F6] border border-zinc-200 text-zinc-900 placeholder-zinc-400 text-sm focus:outline-none focus:border-zinc-900 transition-colors resize-none leading-relaxed"
                                    />
                                </div>

                                {/* Privacy Consent Box */}
                                <div className="p-4 rounded-md bg-[#F8F8F6] border border-zinc-200/80 space-y-2">
                                    <div className="flex items-start gap-2.5">
                                        <input
                                            id="privacy-agree"
                                            type="checkbox"
                                            checked={agreed}
                                            onChange={(e) => setAgreed(e.target.checked)}
                                            className="mt-0.5 h-4 w-4 rounded border-zinc-300 text-zinc-900 focus:ring-zinc-900"
                                        />
                                        <label htmlFor="privacy-agree" className="text-xs text-zinc-700 cursor-pointer leading-normal">
                                            <span className="text-zinc-950 font-semibold">[필수]</span> 개인정보 수집 및 이용에 동의합니다.
                                        </label>
                                    </div>
                                    <p className="text-[11px] text-zinc-500 pl-6 leading-relaxed">
                                        수집 목적: 견적 상담 및 문의 응대 | 수집 항목: 성함, 이메일 | 보유 기간: 상담 완료 후 1년 보관 후 파기 (동의 거부 시 상담이 제한될 수 있습니다).
                                    </p>
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full py-3.5 rounded-md bg-zinc-950 hover:bg-zinc-800 text-zinc-50 font-medium text-sm transition-all duration-150 active:scale-[0.98] disabled:opacity-50 inline-flex items-center justify-center gap-2"
                                >
                                    {isSubmitting ? '문의 전송 중...' : (
                                        <>
                                            문의 메시지 보내기
                                            <ArrowRight className="w-4 h-4" strokeWidth={1.5} />
                                        </>
                                    )}
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Right: Company Info & KakaoMap */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="p-6 sm:p-8 rounded-xl bg-white border border-zinc-200/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] space-y-6">
                            <div className="space-y-1">
                                <span className="text-xs font-mono text-zinc-500">Headquarters</span>
                                <h3 className="text-lg font-semibold text-zinc-950">오피스 및 연락처</h3>
                            </div>

                            <div className="space-y-5 text-sm">
                                <div className="flex items-start gap-3.5">
                                    <MapPin className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <div className="space-y-0.5">
                                        <div className="font-medium text-zinc-900 text-xs">부산 본사</div>
                                        <div className="text-xs text-zinc-600">{COMPANY_INFO.address.full}</div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <Phone className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <div className="space-y-0.5">
                                        <div className="font-medium text-zinc-900 text-xs">대표 전화</div>
                                        <a href={`tel:${COMPANY_INFO.contact.phone}`} className="text-xs text-zinc-700 hover:text-zinc-950 transition-colors">
                                            {COMPANY_INFO.contact.phone}
                                        </a>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <Mail className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <div className="space-y-0.5">
                                        <div className="font-medium text-zinc-900 text-xs">이메일 문의</div>
                                        <div className="text-xs text-zinc-700">
                                            <ObfuscatedEmail />
                                        </div>
                                    </div>
                                </div>

                                <div className="flex items-start gap-3.5">
                                    <Clock className="w-4 h-4 text-zinc-500 mt-0.5 shrink-0" strokeWidth={1.5} />
                                    <div className="space-y-0.5">
                                        <div className="font-medium text-zinc-900 text-xs">운영 시간</div>
                                        <div className="text-xs text-zinc-600">평일 09:30 - 18:30 (주말 및 공휴일 휴무)</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Location Map Card */}
                        <div className="rounded-xl overflow-hidden border border-zinc-200/80 bg-white shadow-[0_2px_10px_rgba(0,0,0,0.03)]">
                            <div className="px-5 py-3.5 text-xs font-mono text-zinc-500 flex items-center justify-between border-b border-zinc-200">
                                <span>Location</span>
                                <span className="text-zinc-900 font-medium">오션타워 1716호</span>
                            </div>
                            <div className="h-72">
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
