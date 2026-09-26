'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { ArrowDown, ArrowUpRight } from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-5rem)] flex flex-col justify-center pt-16 pb-24 px-6 sm:px-8 lg:px-12 overflow-hidden bg-pureWhite"
    >
      {/* Subtle luxury ambient grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            'radial-gradient(#0A192F 1px, transparent 1px), radial-gradient(#0A192F 1px, #FFFFFF 1px)',
          backgroundSize: '40px 40px',
          backgroundPosition: '0 0, 20px 20px',
        }}
        aria-hidden="true"
      />

      <div className="relative max-w-5xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-start"
        >
          {/* Subheading Greeting */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg font-medium text-deepBlack/60 mb-2 tracking-wide"
          >
            {t('greeting')}
          </motion.p>

          {/* Bold Name Header */}
          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight text-deepBlack leading-[1.08] mb-4 sm:mb-6"
          >
            {t('name')}
          </motion.h1>

          {/* Role / Discipline Title */}
          <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-darkBlue tracking-tight">
              {t('title')}
            </h2>
          </motion.div>

          {/* Executive Summary Value Prop */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl lg:text-2xl text-deepBlack/75 font-normal max-w-3xl leading-relaxed mb-10 sm:mb-12 text-balance"
          >
            {t('description')}
          </motion.p>

          {/* Call to Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto"
          >
            <a
              href="#expertise"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-darkBlue text-pureWhite text-sm font-semibold tracking-wide uppercase shadow-btn transition-all duration-300 hover:bg-darkBlue-hover hover:shadow-luxury hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t('primaryCta')}</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-pureWhite text-darkBlue border border-darkBlue/25 text-sm font-semibold tracking-wide uppercase transition-all duration-300 hover:bg-darkBlue/5 hover:border-darkBlue hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>{t('secondaryCta')}</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
