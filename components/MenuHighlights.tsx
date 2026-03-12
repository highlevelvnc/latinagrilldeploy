'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { useLocale } from 'next-intl';
import Link from 'next/link';

export default function MenuHighlights() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-10%' });
  const locale = useLocale();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const content = {
    pt: {
      badge: 'Seleção Exclusiva',
      title: 'Cortes que Definem Excelência',
      subtitle: 'Do pasto à grelha, cada etapa é uma obsessão pela perfeição',
      cta: 'Explorar Menu Completo',
      sections: [
        {
          title: 'Dry-Aged Signature',
          tagline: 'Maturados até 45 dias para intensidade máxima',
          dishes: [
            {
              name: 'Chuletón Rubia Gallega Gold',
              desc: 'O lendário corte espanhol. Maturação de 45 dias que transforma músculo em manteiga',
              image: '/tomahawkchamas.jpeg'
            },
            {
              name: 'Tomahawk Wagyu Austrália',
              desc: 'Marmorização excepcional. Apresentação teatral. Sabor inesquecível',
              image: '/tomahawklinda.jpeg'
            },
            {
              name: 'Tomahawk Maturado Conhaque & Madeira',
              desc: 'Nossa assinatura exclusiva. Infusão aromática que desafia convenções',
              image: '/tomahawklatina.jpeg'
            }
          ]
        },
        {
          title: 'Wagyu Experience',
          tagline: 'O padrão ouro da carne mundial',
          dishes: [
            {
              name: 'Trio Wagyu Omakase',
              desc: 'Três cortes premium com pickle artesanal e ponzu trufado. Deixe o chef decidir',
              image: '/prato9.jpeg'
            },
            {
              name: 'Rib Eye Wagyu Japonês A5',
              desc: 'Grau máximo de marmorização. Derrete-se literalmente na língua',
              image: '/carne3.jpeg'
            }
          ]
        },
        {
          title: 'Do Mar para a Brasa',
          tagline: 'Marisco nobre encontra o calor perfeito',
          dishes: [
            {
              name: 'Lavagante Azul Selvagem',
              desc: 'Capturado fresco. Grelhado com precisão. Servido com manteiga de alho negro',
              image: '/camaraovgpronto.jpeg'
            },
            {
              name: 'Lagosta Premium',
              desc: 'Carne doce e firme. Grelha selada. Acompanhamentos da estação',
              image: '/camaraoprato.jpeg'
            }
          ]
        },
        {
          title: 'Cortes Nobres',
          tagline: 'Clássicos executados com maestria',
          dishes: [
            {
              name: 'Picanha Premium',
              desc: 'O corte brasileiro icônico. Austrália ou EUA. Maturação 21 dias',
              image: '/costela.jpeg'
            },
            {
              name: 'Maminha Black Angus',
              desc: 'Maciez surpreendente. Sabor profundo. Selada em alta temperatura',
              image: '/espetocarne.jpeg'
            },
            {
              name: 'Filet Mignon',
              desc: 'O corte mais nobre. Textura amanteigada. Preparação respeitosa',
              image: '/prato1.jpeg'
            }
          ]
        }
      ]
    },
    en: {
      badge: 'Exclusive Selection',
      title: 'Cuts that Define Excellence',
      subtitle: 'From pasture to grill, every step is an obsession with perfection',
      cta: 'Explore Full Menu',
      sections: [
        {
          title: 'Dry-Aged Signature',
          tagline: 'Aged up to 45 days for maximum intensity',
          dishes: [
            {
              name: 'Chuletón Rubia Gallega Gold',
              desc: 'The legendary Spanish cut. 45-day aging that transforms muscle into butter',
              image: '/tomahawkchamas.jpeg'
            },
            {
              name: 'Australian Wagyu Tomahawk',
              desc: 'Exceptional marbling. Theatrical presentation. Unforgettable flavor',
              image: '/tomahawklinda.jpeg'
            },
            {
              name: 'Tomahawk Cognac & Madeira Wine',
              desc: 'Our exclusive signature. Aromatic infusion that defies conventions',
              image: '/tomahawklatina.jpeg'
            }
          ]
        },
        {
          title: 'Wagyu Experience',
          tagline: 'The gold standard of world beef',
          dishes: [
            {
              name: 'Wagyu Trio Omakase',
              desc: 'Three premium cuts with artisan pickle and truffled ponzu. Trust the chef',
              image: '/prato9.jpeg'
            },
            {
              name: 'Japanese Wagyu Rib Eye A5',
              desc: 'Maximum marbling grade. Literally melts on your tongue',
              image: '/carne3.jpeg'
            }
          ]
        },
        {
          title: 'From Sea to Fire',
          tagline: 'Noble seafood meets perfect heat',
          dishes: [
            {
              name: 'Wild Blue Lobster',
              desc: 'Freshly caught. Precision grilled. Served with black garlic butter',
              image: '/camaraovgpronto.jpeg'
            },
            {
              name: 'Premium Lobster',
              desc: 'Sweet, firm meat. Seared grill. Seasonal accompaniments',
              image: '/camaraoprato.jpeg'
            }
          ]
        },
        {
          title: 'Noble Cuts',
          tagline: 'Classics executed with mastery',
          dishes: [
            {
              name: 'Premium Picanha',
              desc: 'The iconic Brazilian cut. Australia or USA. 21-day aging',
              image: '/costela.jpeg'
            },
            {
              name: 'Black Angus Maminha',
              desc: 'Surprising tenderness. Deep flavor. Seared at high temperature',
              image: '/espetocarne.jpeg'
            },
            {
              name: 'Filet Mignon',
              desc: 'The noblest cut. Buttery texture. Respectful preparation',
              image: '/prato1.jpeg'
            }
          ]
        }
      ]
    },
    fr: {
      badge: 'Sélection Exclusive',
      title: 'Coupes qui Définissent l\'Excellence',
      subtitle: 'Du pâturage au grill, chaque étape est une obsession de la perfection',
      cta: 'Explorer Menu Complet',
      sections: [
        {
          title: 'Dry-Aged Signature',
          tagline: 'Affiné jusqu\'à 45 jours pour une intensité maximale',
          dishes: [
            {
              name: 'Chuletón Rubia Gallega Gold',
              desc: 'La légendaire coupe espagnole. Affinage de 45 jours qui transforme le muscle en beurre',
              image: '/tomahawkchamas.jpeg'
            },
            {
              name: 'Tomahawk Wagyu Australien',
              desc: 'Marbrure exceptionnelle. Présentation théâtrale. Saveur inoubliable',
              image: '/tomahawklinda.jpeg'
            },
            {
              name: 'Tomahawk Cognac & Vin Madeira',
              desc: 'Notre signature exclusive. Infusion aromatique qui défie les conventions',
              image: '/tomahawklatina.jpeg'
            }
          ]
        },
        {
          title: 'Wagyu Experience',
          tagline: 'L\'étalon-or du bœuf mondial',
          dishes: [
            {
              name: 'Trio Wagyu Omakase',
              desc: 'Trois coupes premium avec pickle artisan et ponzu truffé. Faites confiance au chef',
              image: '/prato9.jpeg'
            },
            {
              name: 'Rib Eye Wagyu Japonais A5',
              desc: 'Grade maximal de marbrure. Fond littéralement sur la langue',
              image: '/carne3.jpeg'
            }
          ]
        },
        {
          title: 'De la Mer au Feu',
          tagline: 'Fruits de mer nobles rencontrent la chaleur parfaite',
          dishes: [
            {
              name: 'Homard Bleu Sauvage',
              desc: 'Fraîchement capturé. Grillé avec précision. Beurre à l\'ail noir',
              image: '/camaraovgpronto.jpeg'
            },
            {
              name: 'Homard Premium',
              desc: 'Chair douce et ferme. Grill saisi. Accompagnements de saison',
              image: '/camaraoprato.jpeg'
            }
          ]
        },
        {
          title: 'Coupes Nobles',
          tagline: 'Classiques exécutés avec maestria',
          dishes: [
            {
              name: 'Picanha Premium',
              desc: 'La coupe brésilienne iconique. Australie ou USA. Affinage 21 jours',
              image: '/costela.jpeg'
            },
            {
              name: 'Maminha Black Angus',
              desc: 'Tendreté surprenante. Saveur profonde. Saisi à haute température',
              image: '/espetocarne.jpeg'
            },
            {
              name: 'Filet Mignon',
              desc: 'La coupe la plus noble. Texture beurrée. Préparation respectueuse',
              image: '/prato1.jpeg'
            }
          ]
        }
      ]
    }
  };

  const t = content[locale as keyof typeof content] || content.pt;

  return (
    <section ref={ref} className="relative py-32 lg:py-40 bg-black overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        style={{ y }}
        className="absolute inset-0 opacity-5"
      >
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-red rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-white rounded-full blur-[150px]" />
      </motion.div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="text-center max-w-4xl mx-auto mb-24"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block border border-red/30 px-6 py-2 mb-10"
          >
            <span className="text-xs text-red uppercase tracking-[0.5em] font-medium">
              {t.badge}
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-8 leading-[1.1] tracking-tight">
            {t.title}
          </h2>

          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-red" />
            <div className="w-2 h-2 bg-red rotate-45" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-red" />
          </div>

          <p className="text-xl md:text-2xl text-white/60 font-light tracking-wide leading-relaxed">
            {t.subtitle}
          </p>
        </motion.div>

        {/* Menu Sections */}
        {t.sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-28 last:mb-20">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.7, delay: sectionIndex * 0.15 }}
              className="mb-12"
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="w-12 h-px bg-red" />
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-white">
                  {section.title}
                </h3>
              </div>
              <p className="text-white/50 text-sm uppercase tracking-[0.3em] ml-[72px]">
                {section.tagline}
              </p>
            </motion.div>

            {/* Dishes Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {section.dishes.map((dish, dishIndex) => (
                <motion.div
                  key={dishIndex}
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  whileHover={{ y: -10 }}
                  transition={{
                    initial: { duration: 0.8, delay: sectionIndex * 0.15 + dishIndex * 0.12 },
                    hover: { duration: 0.4 }
                  }}
                  className="group relative bg-white/5 border border-white/10 overflow-hidden hover:border-red/60 transition-all duration-700 hover:shadow-2xl hover:shadow-red/20"
                >
                  {/* Image */}
                  <div className="relative h-[380px] overflow-hidden">
                    <Image
                      src={dish.image}
                      alt={dish.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
                    
                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-white/30 group-hover:border-red transition-colors duration-500" />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h4 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-red transition-colors duration-300 leading-tight">
                      {dish.name}
                    </h4>
                    <p className="text-sm text-white/60 leading-relaxed font-light tracking-wide">
                      {dish.desc}
                    </p>
                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red to-white group-hover:w-full transition-all duration-1000" />
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 1.2 }}
          className="text-center"
        >
          <Link
            href={`/${locale}/menu`}
            className="group inline-block border-2 border-red hover:bg-red text-white px-16 py-6 text-sm font-bold uppercase tracking-[0.3em] transition-all duration-500 hover:shadow-2xl hover:shadow-red/60 relative overflow-hidden"
          >
            <span className="relative z-10">{t.cta}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-red/0 via-white/10 to-red/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          </Link>
        </motion.div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }}
      />
    </section>
  );
}
