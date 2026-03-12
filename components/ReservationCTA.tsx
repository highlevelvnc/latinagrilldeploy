'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { useLocale } from 'next-intl';
import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export default function ReservationCTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const locale = useLocale();

  const content = {
    pt: {
      title: 'Reserve a Sua Mesa',
      subtitle: 'Garanta uma experiência inesquecível',
      cta: 'Fazer Reserva',
      phone: 'Ligar Agora',
      phoneNumber: '+351 968 707 515'
    },
    en: {
      title: 'Book Your Table',
      subtitle: 'Guarantee an unforgettable experience',
      cta: 'Make Reservation',
      phone: 'Call Now',
      phoneNumber: '+351 968 707 515'
    },
    fr: {
      title: 'Réservez Votre Table',
      subtitle: 'Garantissez une expérience inoubliable',
      cta: 'Faire une Réservation',
      phone: 'Appeler',
      phoneNumber: '+351 968 707 515'
    }
  };

  const t = content[locale as keyof typeof content] || content.pt;

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-gradient-to-b from-dark-light to-dark overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-red/10 rounded-full blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-light mb-6 leading-tight">
            {t.title}
          </h2>

          <p className="text-xl md:text-2xl text-light/70 mb-12 font-light">
            {t.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href={`/${locale}/reservations`}
              className="group relative bg-gradient-to-r from-red via-red-dark to-accent-orange text-light px-12 py-6 rounded-full text-lg font-semibold transition-all duration-500 hover:shadow-2xl hover:shadow-red/50 hover:scale-105 w-full sm:w-auto overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Calendar className="w-5 h-5" />
                {t.cta}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-accent-orange to-red opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Link>

            <a
              href={`tel:${t.phoneNumber.replace(/\s/g, '')}`}
              className="bg-transparent border-2 border-light/20 hover:border-light hover:bg-light/5 text-light px-12 py-6 rounded-full text-lg font-semibold transition-all duration-300 backdrop-blur-md w-full sm:w-auto flex items-center justify-center gap-3"
            >
              <Phone className="w-5 h-5" />
              {t.phone}
            </a>
          </div>

          {/* Decorative Line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 1, delay: 0.5 }}
            className="h-px bg-gradient-to-r from-transparent via-accent-orange to-transparent max-w-xs mx-auto mt-16"
          />
        </motion.div>
      </div>
    </section>
  );
}
