
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import Navigation from '@/components/Navigation';
import ScrollToTop from '@/components/ScrollToTop';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
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
            toast.error("이용약관 및 개인정보처리방침에 동의해주세요.");
            return;
        }

        setIsSubmitting(true);

        // 환경변수 확인
        if (!EMAILJS_CONFIG.serviceId || !EMAILJS_CONFIG.templateId || !EMAILJS_CONFIG.publicKey) {
            toast.error("시스템 설정 오류: 이메일 서비스 연동 정보가 없습니다.");
            console.error("EmailJS Config Error: Missing environment variables. Please check .env file and restart server.");
            setIsSubmitting(false);
            return;
        }

        try {
            // EmailJS로 이메일 전송
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
        } catch (error) {
            console.error('EmailJS Error:', error);
            // 에러 메시지 상세 표시
            const errorMessage = error instanceof Error ? error.message : JSON.stringify(error);
            toast.error(`전송 실패: ${errorMessage}. (콘솔 확인 필요)`);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-background">
            <Navigation />

            {/* Hero */}
            <section className="pt-32 pb-16 px-6 lg:px-8 max-w-7xl mx-auto">
                <h1 className="text-hero mb-8 animate-fade-in">
                    Contact
                </h1>
                <p className="text-body-large text-muted-foreground max-w-2xl animate-slide-up">
                    새로운 프로젝트, 협업 제안, 또는 단순한 인사도 환영합니다.<br />
                    ADCT는 항상 열려있습니다.
                </p>
            </section>

            <section className="py-12 px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

                    {/* Info Side */}
                    <div className="space-y-12 animate-slide-up">
                        <div>
                            <h3 className="text-headline mb-6">Office</h3>
                            <p className="text-body text-muted-foreground">
                                부산광역시 해운대구 해운대해변로 203<br />
                                오션타워 1716호<br />
                                (48093)
                            </p>
                        </div>

                        <div>
                            <h3 className="text-headline mb-6">Contact Info</h3>
                            <div className="text-body text-muted-foreground mb-2 flex items-center gap-2">
                                <span className="font-medium text-foreground">Email:</span>
                                <ObfuscatedEmail />
                            </div>
                            <p className="text-body text-muted-foreground">
                                <span className="font-medium text-foreground">Tel:</span> {COMPANY_INFO.contact.phone}
                            </p>
                            <p className="text-[10px] text-muted-foreground/60 mt-4 leading-tight break-keep max-w-sm">
                                본 웹사이트에 게시된 이메일 주소가 무단으로 수집되는 것을 거부하며, 위반 시 정보통신망법에 의해 처벌될 수 있습니다.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-headline mb-6">Social</h3>
                            <div className="flex gap-4">
                                <a href="#" className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4">
                                    Instagram
                                </a>
                            </div>
                        </div>

                        <div className="h-64 w-full rounded-lg overflow-hidden border border-border mt-4">
                            <KakaoMap />
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="bg-card p-8 border border-border rounded-xl shadow-sm animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        <h2 className="text-2xl font-normal mb-6">Send Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="name">Name</Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        placeholder="홍길동"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        placeholder="hello@example.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="subject">Subject</Label>
                                <Input
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="프로젝트 의뢰"
                                />
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="message">Message</Label>
                                <Textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    placeholder="프로젝트에 대해 자세히 말씀해 주세요."
                                    className="min-h-[150px]"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <Checkbox
                                    id="terms"
                                    checked={agreed}
                                    onCheckedChange={(checked) => setAgreed(checked as boolean)}
                                />
                                <Label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                                >
                                    <Link to="/terms-of-service" className="underline hover:text-primary" target="_blank" onClick={(e) => e.stopPropagation()}>이용약관</Link> 및 <Link to="/privacy-policy" className="underline hover:text-primary" target="_blank" onClick={(e) => e.stopPropagation()}>개인정보처리방침</Link>에 동의합니다.
                                    <span className="text-destructive ml-1">*</span>
                                </Label>
                            </div>

                            <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                                {isSubmitting ? '전송 중...' : '메시지 전송'}
                            </Button>
                        </form>
                    </div>

                </div>
            </section>

            <ScrollToTop />
            <Footer />
        </div>
    );
};

export default Contact;
