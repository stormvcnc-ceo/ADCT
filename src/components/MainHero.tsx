import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const MainHero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse Parallax
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseX = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseY = useSpring(y, { stiffness: 50, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        x.set(clientX / innerWidth - 0.5);
        y.set(clientY / innerHeight - 0.5);
    };

    const bgX = useTransform(mouseX, [-0.5, 0.5], ['-2%', '2%']);
    const bgY = useTransform(mouseY, [-0.5, 0.5], ['-2%', '2%']);

    return (
        <div
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-black"
            onMouseMove={handleMouseMove}
        >
            {/* Background Image with Parallax */}
            <motion.div
                className="absolute inset-0 w-full h-full z-0"
                style={{
                    backgroundImage: 'url("/images/flash_hero.png")',
                    backgroundSize: '100% 100%',
                    backgroundPosition: 'center',
                    y: y1, // Keep scroll parallax
                    filter: 'saturate(0.7) brightness(1.2) contrast(1.1)', // Adjusted for brighter, softer look
                }}
            />

            {/* Overlay Gradient for Depth - Reduced opacity for brightness */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/40 z-1" />

            {/* Particles Effect - Enhanced Visibility */}
            <div className="absolute inset-0 z-5 pointer-events-none">
                {[...Array(25)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-300/60 blur-[0.5px] shadow-[0_0_10px_rgba(147,197,253,0.5)]" // More visible particles with glow
                        style={{
                            width: Math.random() * 6 + 2, // Slightly larger
                            height: Math.random() * 6 + 2,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                        animate={{
                            y: [0, -150], // Faster/Higher movement
                            opacity: [0, 0.8, 0], // Higher max opacity
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                    />
                ))}
            </div>

            {/* Glow Pulse Effect */}
            <motion.div
                className="absolute inset-0 z-5 pointer-events-none bg-blue-500/10 mix-blend-overlay"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Hero Content */}
            <motion.div
                className="relative z-10 flex flex-col items-end justify-end h-full text-right px-6 pb-20 md:pb-32 md:pr-20 max-w-7xl mx-auto w-full"
                style={{ opacity }}
            >
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="mb-8"
                >
                    <h2 className="text-lg md:text-xl font-light tracking-[0.3em] text-blue-200 mb-2 animate-fade-in block">
                        FLOW OF COMMUNICATION
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white drop-shadow-[0_0_30px_rgba(59,130,246,0.5)] leading-none">
                        IMPACT
                    </h1>
                    <p className="mt-2 text-xl md:text-2xl font-light text-blue-100/70 tracking-widest uppercase">
                        WITH <span className="font-bold text-white">ADCT</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.8 }}
                    className="flex gap-4"
                >
                    <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 transition-all rounded-full px-8 text-lg hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                        <Link to="/about">About</Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 transition-all rounded-full px-8 text-lg backdrop-blur-sm">
                        <Link to="/contact">Contact Us</Link>
                    </Button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-10 hidden md:block"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </div>
    );
};

export default MainHero;
