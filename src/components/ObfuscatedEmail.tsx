import { COMPANY_INFO } from '@/config/company';

const ObfuscatedEmail = ({ className = "" }: { className?: string }) => {
    const email = COMPANY_INFO.contact.email;
    const [user, domain] = email.split('@');

    return (
        <span className={className}>
            {user}
            <span className="hidden">_no_spam_</span>
            <span>@</span>
            {domain}
        </span>
    );
};

export default ObfuscatedEmail;
