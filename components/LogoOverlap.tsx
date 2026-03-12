'use client';

import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { useRef, useCallback } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function LogoOverlap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });
  const locale = useLocale();

  // Mouse tracking for 3D tilt on logo
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 45, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 45, damping: 20 });

  const rotateX = useTransform(springY, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-12, 12]);
  const scaleMotion = useTransform(
    [springX, springY],
    ([x, y]: number[]) => 1 + Math.sqrt(x * x + y * y) * 0.04
  );

  const handleLogoMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleLogoMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const content = {
    pt: {
      tagline: 'A Arte da Grelha em Cascais',
      title: 'Onde Cada Corte Conta Uma História',
      description:
        'No coração de Cascais, celebramos carnes nobres maturadas com precisão cirúrgica, grelhadas sobre brasas ardentes e servidas no ponto exato da perfeição. Cada prato é uma experiência que desperta os sentidos.',
    },
    en: {
      tagline: 'The Art of Grilling in Cascais',
      title: 'Where Every Cut Tells a Story',
      description:
        'In the heart of Cascais, we celebrate noble meats aged with surgical precision, grilled over hot coals and served at the exact point of perfection. Every dish is an experience that awakens the senses.',
    },
    fr: {
      tagline: "L'Art du Grill à Cascais",
      title: 'Où Chaque Coupe Raconte une Histoire',
      description:
        "Au cœur de Cascais, nous célébrons les viandes nobles affinées avec précision chirurgicale, grillées sur braises et servies au point exact de la perfection. Chaque plat est une expérience qui éveille les sens.",
    },
  };

  const t = content[locale as keyof typeof content] || content.pt;

  return (
    <section ref={ref} className="relative -mt-20 lg:-mt-24 z-20 pb-32">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Card Principal */}
          <div className="relative bg-black border border-white/10 overflow-hidden">
            {/* Logo Sobreposto com efeito 3D interativo */}
            <div
              className="flex justify-center -mt-16 lg:-mt-20 mb-12"
              style={{ perspective: '800px' }}
              onMouseMove={handleLogoMouseMove}
              onMouseLeave={handleLogoMouseLeave}
            >
              <motion.div
                initial={{ scale: 0.85, y: 24, opacity: 0 }}
                animate={isInView ? { scale: 1, y: 0, opacity: 1 } : {}}
                transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                className="relative cursor-pointer"
              >
                {/* 3D tilt inner wrapper */}
                <motion.div
                  style={{ rotateX, rotateY, scale: scaleMotion }}
                  className="relative"
                >
                  {/* Ambient glow — breathes */}
                  <div className="absolute inset-0 bg-red/20 blur-[60px] scale-[2] animate-breathe rounded-full" />

                  {/* Depth shadow stack */}
                  <motion.div
                    animate={{
                      boxShadow: [
                        '0 0 20px rgba(220,38,38,0.2), 0 8px 40px rgba(0,0,0,0.7)',
                        '0 0 45px rgba(220,38,38,0.5), 0 16px 60px rgba(0,0,0,0.85)',
                        '0 0 20px rgba(220,38,38,0.2), 0 8px 40px rgba(0,0,0,0.7)',
                      ],
                    }}
                    transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
                    className="relative w-32 h-32 lg:w-40 lg:h-40 bg-black border-2 border-white/15 p-4"
                  >
                    <Image
                      src="/logo.png"
                      alt="Latina Grill"
                      fill
                      className="object-contain logo-depth-intense p-2"
                      priority
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>

            {/* Conteúdo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="px-8 lg:px-20 pb-16 lg:pb-20"
            >
              {/* Tagline */}
              <div className="text-center mb-6">
                <span className="text-red text-xs lg:text-sm uppercase tracking-[0.4em] font-medium">
                  {t.tagline}
                </span>
              </div>

              {/* Título Principal */}
              <h2 className="text-center text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-8 leading-tight">
                {t.title}
              </h2>

              {/* Divider */}
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-px bg-gradient-to-r from-transparent to-red" />
                <div className="w-1.5 h-1.5 bg-red rotate-45 flex-shrink-0" />
                <div className="w-20 h-px bg-gradient-to-l from-transparent to-red" />
              </div>

              {/* Descrição */}
              <p className="text-center text-lg md:text-xl text-white/65 leading-relaxed max-w-4xl mx-auto font-light">
                {t.description}
              </p>
            </motion.div>

            {/* Cantos Decorativos */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-red/20" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-red/20" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-red/20" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-red/20" />

            {/* Shimmer sweep across card */}
            <div
              className="absolute inset-0 pointer-events-none overflow-hidden opacity-60"
              style={{ position: 'absolute' }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background:
                    'linear-gradient(105deg, transparent 35%, rgba(255,255,255,0.04) 50%, transparent 65%)',
                  backgroundSize: '200% 100%',
                  animation: 'shimmerSweep 3s ease-in-out infinite',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
