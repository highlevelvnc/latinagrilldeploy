'use client';

import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useCallback } from 'react';

export default function Hero() {
  // Mouse position (–0.5 → +0.5 relative to section)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics — soft, laggy follow for luxury feel
  const springX = useSpring(mouseX, { stiffness: 35, damping: 18 });
  const springY = useSpring(mouseY, { stiffness: 35, damping: 18 });

  // 3D tilt — subtle, never more than ±10°
  const rotateX = useTransform(springY, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  // Parallax drift — logo follows cursor slightly in screen-space
  const driftX = useTransform(springX, [-0.5, 0.5], [-10, 10]);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      const rect = e.currentTarget.getBoundingClientRect();
      mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
      mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
    },
    [mouseX, mouseY]
  );

  const handleMouseLeave = useCallback(() => {
    mouseX.set(0);
    mouseY.set(0);
  }, [mouseX, mouseY]);

  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  return (
    <section
      className="relative h-screen flex items-center justify-center overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── Video Background ── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/header.mp4" type="video/mp4" />
        </video>

        {/* Cinematic vignette — stronger at edges, open at center */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-transparent to-black/55" />
        {/* Subtle warm grade into the bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-anthracite/60 to-transparent" />
      </div>

      {/* ── Logo 3D Overlay ── */}
      <div
        className="absolute inset-0 flex items-center justify-center z-10"
        style={{ perspective: '900px' }}
      >
        {/* Entrance animation wrapper */}
        <motion.div
          initial={{ opacity: 0, scale: 0.72, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
          className="relative flex items-center justify-center"
        >
          {/* Float wrapper — outer vertical oscillation */}
          <motion.div
            animate={{ y: [0, -16, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
            className="relative"
          >
            {/* 3D tilt + parallax wrapper */}
            <motion.div
              style={{ rotateX, rotateY, x: driftX }}
              className="relative"
            >
              {/* Outer ambient aura — breathes independently */}
              <div className="absolute inset-0 bg-red/25 blur-[110px] scale-[2.8] animate-breathe rounded-full" />

              {/* Mid glow ring — pulsing border */}
              <motion.div
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(220,38,38,0.25), 0 0 60px rgba(220,38,38,0.08)',
                    '0 0 50px rgba(220,38,38,0.55), 0 0 100px rgba(220,38,38,0.2)',
                    '0 0 20px rgba(220,38,38,0.25), 0 0 60px rgba(220,38,38,0.08)',
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute inset-[-22px] rounded-full border border-white/[0.07]"
              />

              {/* Inner glass disc — diffuse frost behind logo */}
              <div className="absolute inset-[-10px] rounded-full glass border border-white/[0.06]" />

              {/* Logo */}
              <div className="relative w-44 h-44 lg:w-60 lg:h-60 logo-depth">
                <Image
                  src="/logo.png"
                  alt="Latina Grill"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Scroll Indicator ── */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.3 }}
        onClick={scrollToContent}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 text-white/65 hover:text-white transition-colors duration-300 cursor-pointer z-20"
        aria-label="Scroll down"
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-3"
        >
          <div className="w-px h-20 bg-gradient-to-b from-transparent via-white/55 to-transparent" />
          <ChevronDown size={32} className="drop-shadow-2xl" />
        </motion.div>
      </motion.button>
    </section>
  );
}
