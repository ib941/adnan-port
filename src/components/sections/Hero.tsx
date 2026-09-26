'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import {
  ArrowDown,
  ArrowUpRight,
  MessageCircle,
  Building,
  Store,
  Boxes,
  MapPin,
  CheckSquare,
} from 'lucide-react';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <section
      id="hero"
      className="relative min-h-[calc(100vh-6rem)] flex flex-col justify-center pt-8 pb-16 px-6 sm:px-8 lg:px-12 bg-pureWhite bg-grid-architectural"
    >
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center"
        >
          {/* Left Column (7 cols): Editorial Human Intro */}
          <div className="lg:col-span-7 flex flex-col items-start">
            {/* Title / Discipline Label */}
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-goldAccent font-semibold">
                {t('title')}
              </span>
            </motion.div>

            {/* Name */}
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-darkBlue leading-[1.08] mb-5"
            >
              {t('name')}
            </motion.h1>

            {/* Grounded Headline */}
            <motion.h2
              variants={itemVariants}
              className="text-xl sm:text-2xl font-semibold text-charcoal leading-snug mb-5"
            >
              {t('headline')}
            </motion.h2>

            {/* Realistic Bio */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-charcoal-muted leading-relaxed mb-8 max-w-2xl text-balance"
            >
              {t('bio')}
            </motion.p>

            {/* Crisp Rectangular Action Buttons (Strictly Zero Pills) */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto"
            >
              <a
                href="https://wa.me/966504517869?text=Hello%20Adnan,%20I%20would%20like%20to%20discuss%20an%20operational%20opportunity."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-darkBlue text-pureWhite text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-200 hover:bg-darkBlue-hover hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageCircle className="w-4 h-4 text-goldAccent" />
                <span>{t('primaryCta')}</span>
              </a>

              <a
                href="mailto:Adnanalthour@gmail.com"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white border border-darkBlue/25 text-darkBlue text-xs font-semibold uppercase tracking-wider transition-all duration-200 hover:bg-darkBlue/5 hover:border-darkBlue hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>{t('secondaryCta')}</span>
                <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
              </a>

              <a
                href="#experience"
                className="inline-flex items-center justify-center gap-1.5 px-4 py-3.5 text-charcoal-muted hover:text-darkBlue text-xs font-semibold uppercase tracking-wider transition-colors"
              >
                <span>{t('tertiaryCta')}</span>
                <ArrowDown className="w-3.5 h-3.5" />
              </a>
            </motion.div>
          </div>

          {/* Right Column (5 cols): Tactile Career Summary Card */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5"
          >
            <div className="p-6 sm:p-7 rounded-md bg-canvas-subtle border border-canvas-border shadow-card relative">
              {/* Top Card Header */}
              <div className="pb-4 mb-5 border-b border-darkBlue/10 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-wider text-darkBlue">
                    {t('cardTitle')}
                  </h3>
                  <p className="text-[11px] font-mono text-charcoal-light">
                    {t('cardSubtitle')}
                  </p>
                </div>
                <div className="w-6 h-6 rounded-sm bg-darkBlue/5 text-darkBlue flex items-center justify-center">
                  <CheckSquare className="w-3.5 h-3.5 text-goldAccent" />
                </div>
              </div>

              {/* Practical Core Domains */}
              <div className="space-y-4 mb-6">
                <div className="p-3.5 rounded-sm bg-white border border-darkBlue/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Building className="w-3.5 h-3.5 text-goldAccent" />
                    <h4 className="text-xs font-bold text-darkBlue">
                      {t('cardDomain1Title')}
                    </h4>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {t('cardDomain1Desc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-sm bg-white border border-darkBlue/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Store className="w-3.5 h-3.5 text-goldAccent" />
                    <h4 className="text-xs font-bold text-darkBlue">
                      {t('cardDomain2Title')}
                    </h4>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {t('cardDomain2Desc')}
                  </p>
                </div>

                <div className="p-3.5 rounded-sm bg-white border border-darkBlue/10">
                  <div className="flex items-center gap-2 mb-1">
                    <Boxes className="w-3.5 h-3.5 text-goldAccent" />
                    <h4 className="text-xs font-bold text-darkBlue">
                      {t('cardDomain3Title')}
                    </h4>
                  </div>
                  <p className="text-xs text-charcoal-muted leading-relaxed">
                    {t('cardDomain3Desc')}
                  </p>
                </div>
              </div>

              {/* Location & Status Footer */}
              <div className="pt-4 border-t border-darkBlue/10 space-y-2 text-xs">
                <div className="flex items-center justify-between text-charcoal">
                  <span className="font-mono text-charcoal-light uppercase text-[11px] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-goldAccent" />
                    {t('cardLocationLabel')}
                  </span>
                  <span className="font-semibold text-darkBlue">
                    {t('cardLocationVal')}
                  </span>
                </div>

                <div className="flex items-center justify-between text-charcoal">
                  <span className="font-mono text-charcoal-light uppercase text-[11px]">
                    {t('cardAvailabilityLabel')}
                  </span>
                  <span className="text-[11px] text-charcoal-muted">
                    {t('cardAvailabilityVal')}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
