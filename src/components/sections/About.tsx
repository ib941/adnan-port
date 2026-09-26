'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { HardHat, ShoppingBag, CheckCircle, Quote, ArrowRight, Layers } from 'lucide-react';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function About() {
  const t = useTranslations('About');

  const pillar1Points = [
    t('pillar1Points.0'),
    t('pillar1Points.1'),
    t('pillar1Points.2'),
  ];

  const pillar2Points = [
    t('pillar2Points.0'),
    t('pillar2Points.1'),
    t('pillar2Points.2'),
  ];

  return (
    <section
      id="about"
      className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-pureWhite border-t border-black/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="flex flex-col"
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <motion.div variants={fadeUpVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-darkBlue/15 bg-darkBlue/[0.03] text-darkBlue text-xs font-semibold uppercase tracking-wider">
                {t('tag')}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-deepBlack leading-[1.12] mb-6"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-lg sm:text-xl text-deepBlack/80 font-normal leading-relaxed text-balance"
            >
              {t('lead')}
            </motion.p>
          </div>

          {/* Narrative Editorial Card */}
          <motion.div
            variants={fadeUpVariants}
            className="mb-16 p-8 sm:p-10 rounded-2xl bg-pureWhite border border-black/[0.06] shadow-sm relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-darkBlue via-darkBlue/40 to-transparent" />
            <p className="text-base sm:text-lg text-deepBlack/75 leading-relaxed font-normal">
              {t('narrative')}
            </p>
          </motion.div>

          {/* Dual Pillars: Physical Operations vs Digital Commerce */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mb-16 sm:mb-20">
            {/* Pillar 1: Physical Operations */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative p-8 sm:p-10 rounded-2xl bg-pureWhite border border-black/[0.08] hover:border-darkBlue/40 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-darkBlue text-pureWhite flex items-center justify-center shadow-btn">
                    <HardHat className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-deepBlack/40 font-semibold">
                    PHYSICAL DOMAIN
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-deepBlack mb-2">
                  {t('pillar1Title')}
                </h3>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-darkBlue mb-4">
                  {t('pillar1Subtitle')}
                </p>
                <p className="text-sm sm:text-base text-deepBlack/70 leading-relaxed mb-8">
                  {t('pillar1Desc')}
                </p>

                <div className="space-y-3.5 pt-6 border-t border-black/[0.06]">
                  {pillar1Points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-darkBlue flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm text-deepBlack/80 font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Pillar 2: Digital Commerce & Scaling */}
            <motion.div
              variants={fadeUpVariants}
              className="group relative p-8 sm:p-10 rounded-2xl bg-pureWhite border border-black/[0.08] hover:border-darkBlue/40 shadow-sm hover:shadow-luxury transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-darkBlue text-pureWhite flex items-center justify-center shadow-btn">
                    <ShoppingBag className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-widest text-deepBlack/40 font-semibold">
                    DIGITAL DOMAIN
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-deepBlack mb-2">
                  {t('pillar2Title')}
                </h3>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-darkBlue mb-4">
                  {t('pillar2Subtitle')}
                </p>
                <p className="text-sm sm:text-base text-deepBlack/70 leading-relaxed mb-8">
                  {t('pillar2Desc')}
                </p>

                <div className="space-y-3.5 pt-6 border-t border-black/[0.06]">
                  {pillar2Points.map((point, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-darkBlue flex-shrink-0 mt-1" />
                      <span className="text-xs sm:text-sm text-deepBlack/80 font-medium leading-snug">
                        {point}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Executive Philosophy Quote */}
          <motion.div
            variants={fadeUpVariants}
            className="p-8 sm:p-12 rounded-2xl bg-darkBlue/[0.02] border-l-4 rtl:border-l-0 rtl:border-r-4 border-darkBlue border-y border-r rtl:border-l border-black/[0.06] relative"
          >
            <div className="flex items-start gap-5">
              <Quote className="w-8 h-8 text-darkBlue flex-shrink-0 opacity-40" />
              <div>
                <blockquote className="text-lg sm:text-2xl font-medium text-deepBlack italic leading-relaxed mb-4">
                  &ldquo;{t('quote')}&rdquo;
                </blockquote>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-darkBlue">
                  — {t('quoteRole')}
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
