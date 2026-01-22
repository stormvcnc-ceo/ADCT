import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
    scrambleDuration?: number;
}

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

const TextReveal = ({ text, className = "", delay = 0, scrambleDuration = 1.0 }: TextRevealProps) => {
    const [displayText, setDisplayText] = useState("");
    const [isScrambling, setIsScrambling] = useState(true);

    useEffect(() => {
        let interval: NodeJS.Timeout;
        let timeout: NodeJS.Timeout;

        // Start scrambling after delay
        const startTimeout = setTimeout(() => {
            let iteration = 0;

            interval = setInterval(() => {
                setDisplayText(prev =>
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    setIsScrambling(false);
                    clearInterval(interval);
                }

                iteration += 1 / 3; // Speed of reveal
            }, 30);

        }, delay * 1000);

        return () => {
            clearTimeout(startTimeout);
            clearInterval(interval);
        };
    }, [text, delay]);

    return (
        <motion.span
            className={`${className} inline-block`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay }}
        >
            {displayText || (isScrambling ? " " : text)}
        </motion.span>
    );
};

export default TextReveal;
