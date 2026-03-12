'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';

export default function LogoOverlap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-5%' });
  const locale = useLocale();

  const content = {
    pt: {
      tagline: 'A Arte da Grelha em Cascais',
      title: 'Onde Cada Corte Conta Uma História',
      description: 'No coração de Cascais, celebramos carnes nobres maturadas com precisão cirúrgica, grelhadas sobre brasas ardentes e servidas no ponto exato da perfeição. Cada prato é uma experiência que desperta os sentidos.'
    },
    en: {
      tagline: 'The Art of Grilling in Cascais',
      title: 'Where Every Cut Tells a Story',
      description: 'In the heart of Cascais, we celebrate noble meats aged with surgical precision, grilled over hot coals and served at the exact point of perfection. Every dish is an experience that awakens the senses.'
    },
    fr: {
      tagline: 'L\'Art du Grill à Cascais',
      title: 'Où Chaque Coupe Raconte une Histoire',
      description: 'Au cœur de Cascais, nous célébrons les viandes nobles affinées avec précision chirurgicale, grillées sur braises et servies au point exact de la perfection. Chaque plat est une expérience qui éveille les sens.'
    }
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
            {/* Logo Pequeno Sobreposto - Efeito 3D Sutil */}
            <div className="flex justify-center -mt-16 lg:-mt-20 mb-12">
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={isInView ? { scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Sombra 3D */}
                <div className="absolute inset-0 bg-red/20 blur-2xl -z-10 transform translate-y-2" />
                
                {/* Logo */}
                <div className="relative w-32 h-32 lg:w-40 lg:h-40 bg-black border-2 border-white/20 p-4">
                  <Image
                    src="/logo.png"
                    alt="Latina Grill"
                    fill
                    className="object-contain drop-shadow-[0_0_30px_rgba(220,38,38,0.6)] p-2"
                    priority
                  />
                </div>
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
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-red to-transparent mx-auto mb-8" />
              
              {/* Descrição */}
              <p className="text-center text-lg md:text-xl text-white/70 leading-relaxed max-w-4xl mx-auto font-light">
                {t.description}
              </p>
            </motion.div>

            {/* Cantos Decorativos */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t border-l border-red/20" />
            <div className="absolute top-0 right-0 w-20 h-20 border-t border-r border-red/20" />
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b border-l border-red/20" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b border-r border-red/20" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
