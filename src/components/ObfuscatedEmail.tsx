import React from 'react';
import { Link } from 'react-router-dom';
import { COMPANY_INFO } from '@/config/company';

interface ObfuscatedEmailProps {
    className?: string;
    showRefusalNotice?: boolean;
}

const ObfuscatedEmail: React.FC<ObfuscatedEmailProps> = ({
    className = "",
    showRefusalNotice = true,
}) => {
    const email = COMPANY_INFO.contact.email;
    const [user, domain] = email.split('@');

    return (
        <span className={`inline-flex items-center flex-wrap gap-1 ${className}`}>
            <span className="font-mono">
                {user}
                <span className="hidden">_no_spam_</span>
                <span>@</span>
                {domain}
            </span>
            {showRefusalNotice && (
                <Link
                    to="/email-refusal"
                    className="inline-block text-[11px] text-slate-400 hover:text-cyan-300 underline underline-offset-2 transition-colors ml-0.5"
                    title="이메일 무단 수집 거부 정책 보기"
                >
                    [이메일무단수집거부]
                </Link>
            )}
        </span>
    );
};

export default ObfuscatedEmail;
