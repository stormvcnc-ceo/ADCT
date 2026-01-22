import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import MagneticButton from '@/components/ui/MagneticButton';
import TextReveal from '@/components/ui/TextReveal';

const MainHero = () => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);

    // Mouse Parallax & Interaction
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 50, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 50, damping: 20 });

    // 3D Shadow Extrusion Effect
    // Calculate shadow offset based on mouse position (opposite direction light source)
    const shadowX = useTransform(mouseXSpring, [-0.5, 0.5], [20, -20]);
    const shadowY = useTransform(mouseYSpring, [-0.5, 0.5], [20, -20]);

    // Create a dynamic multi-layered shadow string
    const textShadow = useMotionTemplate`
        ${shadowX}px ${shadowY}px 0px rgba(59, 130, 246, 0.2),
        ${useTransform(shadowX, x => x * 0.5)}px ${useTransform(shadowY, y => y * 0.5)}px 0px rgba(59, 130, 246, 0.4),
        0px 0px 30px rgba(59, 130, 246, 0.6)
    `;

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const { innerWidth, innerHeight } = window;
        x.set(clientX / innerWidth - 0.5);
        y.set(clientY / innerHeight - 0.5);
    };

    // Spotlight Effect
    const spotlightX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
    const spotlightY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

    // We need pixel values for the radial gradient center if we want it to follow exact cursor, 
    // but percentage based on the container is cleaner for this full-screen effect
    // Let's approximate roughly or use a fixed large spotlight that moves slightly
    const backgroundGradient = useMotionTemplate`radial-gradient(circle at ${useTransform(mouseXSpring, [-0.5, 0.5], ["40%", "60%"])} ${useTransform(mouseYSpring, [-0.5, 0.5], ["40%", "60%"])}, rgba(59, 130, 246, 0.15) 0%, transparent 50%)`;

    return (
        <div
            ref={ref}
            className="relative h-screen w-full overflow-hidden bg-black perspective-1000"
            onMouseMove={handleMouseMove}
            style={{ perspective: "1000px" }}
        >
            {/* Background Entrance Animation wrapper */}
            <motion.div
                className="absolute inset-0 w-full h-full z-0"
                initial={{ scale: 1.4, opacity: 0, filter: "blur(20px)" }}
                animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            >
                {/* Background Image with Parallax & Breathing Effect */}
                <motion.div
                    className="absolute inset-0 w-full h-full"
                    style={{
                        backgroundImage: 'url("/images/flash_hero.png")',
                        backgroundSize: '100% 100%',
                        backgroundPosition: 'center',
                        y: y1, // Scroll parallax
                        filter: 'saturate(0.7) brightness(1.2) contrast(1.1)',
                    }}
                    animate={{
                        scale: [1.05, 1.15, 1.05], // Gentle breathing
                        x: ["0%", "-3%", "0%"],    // Subtle horizontal drift
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        repeatType: "reverse",
                        ease: "linear",
                    }}
                />
            </motion.div>

            {/* Spotlight Effect Overlay */}
            <motion.div
                className="absolute inset-0 z-1 pointer-events-none"
                style={{ background: backgroundGradient }}
            />

            {/* Overlay Gradient for Depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-2" />

            {/* Enhanced Particles - Reactive */}
            <div className="absolute inset-0 z-5 pointer-events-none">
                {[...Array(30)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute rounded-full bg-blue-300/60 blur-[0.5px] shadow-[0_0_15px_rgba(147,197,253,0.6)]"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 0.8, 0],
                            y: [0, -150],
                            x: Math.random() * 40 - 20
                        }}
                        transition={{
                            duration: Math.random() * 5 + 5,
                            repeat: Infinity,
                            ease: "linear",
                            delay: Math.random() * 5,
                        }}
                        style={{
                            width: Math.random() * 6 + 2,
                            height: Math.random() * 6 + 2,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            {/* Hero Content */}
            <motion.div
                className="relative z-10 flex flex-col items-end justify-end h-full text-right px-6 pb-20 md:pb-32 md:pr-20 max-w-7xl mx-auto w-full"
                style={{ opacity }}
            >
                <div className="mb-8 perspective-text">
                    <h2 className="text-lg md:text-xl font-light tracking-[0.3em] text-blue-200 mb-2 block min-h-[1.5em]">
                        <TextReveal text="FLOW OF COMMUNICATION" delay={1} />
                    </h2>

                    {/* Dynamic 3D Extrusion Text */}
                    <motion.div
                        className="relative inline-block"
                        style={{ textShadow }}
                    >
                        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter text-white leading-none">
                            {"IMPACT".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    className="inline-block"
                                    initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
                                    animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
                                    transition={{
                                        duration: 0.8,
                                        delay: 1.5 + index * 0.2, // Slower stagger
                                        type: "spring",
                                        stiffness: 50,
                                        damping: 15
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </h1>
                    </motion.div>

                    <p className="mt-2 text-xl md:text-2xl font-light text-blue-100/70 tracking-widest uppercase min-h-[1.5em]">
                        <span className="inline-block mr-2">WITH</span>
                        <TextReveal text="ADCT" delay={2} className="font-bold text-white text-shadow-glow" />
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.5, duration: 0.8 }}
                    className="flex gap-4"
                >
                    <MagneticButton>
                        <Button asChild size="lg" className="bg-white text-black hover:bg-white/90 transition-all rounded-full px-8 text-lg hover:scale-105 shadow-[0_0_20px_rgba(255,255,255,0.4)]">
                            <Link to="/about">About</Link>
                        </Button>
                    </MagneticButton>

                    <MagneticButton>
                        <Button asChild variant="outline" size="lg" className="border-white/50 text-white hover:bg-white/10 transition-all rounded-full px-8 text-lg backdrop-blur-sm">
                            <Link to="/contact">Contact Us</Link>
                        </Button>
                    </MagneticButton>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 z-10 hidden md:block"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 3, duration: 1 },
                    y: { duration: 2, repeat: Infinity }
                }}
            >
                <div className="w-[1px] h-20 bg-gradient-to-b from-white/0 via-white/50 to-white/0" />
            </motion.div>
        </div>
    );
};

export default MainHero;
