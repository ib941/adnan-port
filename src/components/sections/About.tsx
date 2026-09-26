'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { Quote, ShieldCheck, CheckCircle2, Compass, Wrench } from 'lucide-react';

const sectionVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const fadeUpVariants: Variants = {
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

export default function About() {
  const t = useTranslations('About');

  const tenets = [
    {
      num: t('tenets.0.num'),
      title: t('tenets.0.title'),
      desc: t('tenets.0.desc'),
    },
    {
      num: t('tenets.1.num'),
      title: t('tenets.1.title'),
      desc: t('tenets.1.desc'),
    },
    {
      num: t('tenets.2.num'),
      title: t('tenets.2.title'),
      desc: t('tenets.2.desc'),
    },
    {
      num: t('tenets.3.num'),
      title: t('tenets.3.title'),
      desc: t('tenets.3.desc'),
    },
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-canvas-subtle border-t border-canvas-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col"
        >
          {/* Header */}
          <div className="max-w-3xl mb-12 sm:mb-14">
            <motion.div variants={fadeUpVariants} className="mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-goldAccent font-semibold">
                {t('tag')}
              </span>
            </motion.div>

            <motion.h2
              variants={fadeUpVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-darkBlue leading-[1.15] mb-4"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={fadeUpVariants}
              className="text-base sm:text-lg text-charcoal-muted font-normal leading-relaxed text-balance"
            >
              {t('lead')}
            </motion.p>
          </div>

          {/* Narrative & Quote Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-14 items-stretch">
            {/* Left Narrative (7 cols) */}
            <motion.div
              variants={fadeUpVariants}
              className="lg:col-span-7 p-7 sm:p-8 rounded-md bg-white border border-canvas-border shadow-sm flex flex-col justify-center"
            >
              <p className="text-sm sm:text-base text-charcoal leading-relaxed">
                {t('narrative')}
              </p>
            </motion.div>

            {/* Right Quote (5 cols) */}
            <motion.div
              variants={fadeUpVariants}
              className="lg:col-span-5 p-7 sm:p-8 rounded-md bg-white border-l-4 rtl:border-l rtl:border-r-4 border-darkBlue border-y border-r rtl:border-l-canvas-border border-canvas-border shadow-sm flex flex-col justify-between"
            >
              <div>
                <Quote className="w-6 h-6 text-goldAccent mb-4 opacity-75" />
                <blockquote className="text-base sm:text-lg font-medium text-darkBlue italic leading-relaxed mb-4">
                  &ldquo;{t('quote')}&rdquo;
                </blockquote>
              </div>
              <p className="text-xs font-mono uppercase tracking-wider text-charcoal-light">
                — {t('quoteRole')}
              </p>
            </motion.div>
          </div>

          {/* 4 Core Operational Tenets */}
          <div>
            <motion.h3
              variants={fadeUpVariants}
              className="text-xs font-mono uppercase tracking-widest text-darkBlue font-bold mb-6 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-goldAccent" />
              <span>{t('tenetsTitle')}</span>
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {tenets.map((tenet, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeUpVariants}
                  className="p-6 rounded-md bg-white border border-canvas-border hover:border-darkBlue transition-all duration-200 shadow-sm group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-mono font-bold text-goldAccent">
                      {tenet.num}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-none bg-darkBlue/20 group-hover:bg-darkBlue transition-colors" />
                  </div>

                  <h4 className="text-base font-bold text-darkBlue mb-2 group-hover:text-goldAccent transition-colors">
                    {tenet.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {tenet.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
