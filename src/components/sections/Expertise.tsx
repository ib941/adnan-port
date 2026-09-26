'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import {
  Building,
  Store,
  ShoppingCart,
  Truck,
  Headphones,
  Calendar,
} from 'lucide-react';

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

export default function Expertise() {
  const t = useTranslations('Expertise');

  const roles = [
    {
      key: 'moka',
      icon: Building,
      title: t('roles.moka.title'),
      company: t('roles.moka.company'),
      period: t('roles.moka.period'),
      type: t('roles.moka.type'),
      description: t('roles.moka.description'),
      skills: [
        t('roles.moka.skills.0'),
        t('roles.moka.skills.1'),
        t('roles.moka.skills.2'),
        t('roles.moka.skills.3'),
        t('roles.moka.skills.4'),
      ],
    },
    {
      key: 'masar',
      icon: Store,
      title: t('roles.masar.title'),
      company: t('roles.masar.company'),
      period: t('roles.masar.period'),
      type: t('roles.masar.type'),
      description: t('roles.masar.description'),
      skills: [
        t('roles.masar.skills.0'),
        t('roles.masar.skills.1'),
        t('roles.masar.skills.2'),
        t('roles.masar.skills.3'),
        t('roles.masar.skills.4'),
      ],
    },
    {
      key: 'ecommerce',
      icon: ShoppingCart,
      title: t('roles.ecommerce.title'),
      company: t('roles.ecommerce.company'),
      period: t('roles.ecommerce.period'),
      type: t('roles.ecommerce.type'),
      description: t('roles.ecommerce.description'),
      skills: [
        t('roles.ecommerce.skills.0'),
        t('roles.ecommerce.skills.1'),
        t('roles.ecommerce.skills.2'),
        t('roles.ecommerce.skills.3'),
        t('roles.ecommerce.skills.4'),
      ],
    },
    {
      key: 'delivery',
      icon: Truck,
      title: t('roles.delivery.title'),
      company: t('roles.delivery.company'),
      period: t('roles.delivery.period'),
      type: t('roles.delivery.type'),
      description: t('roles.delivery.description'),
      skills: [
        t('roles.delivery.skills.0'),
        t('roles.delivery.skills.1'),
        t('roles.delivery.skills.2'),
        t('roles.delivery.skills.3'),
      ],
    },
    {
      key: 'customerService',
      icon: Headphones,
      title: t('roles.customerService.title'),
      company: t('roles.customerService.company'),
      period: t('roles.customerService.period'),
      type: t('roles.customerService.type'),
      description: t('roles.customerService.description'),
      skills: [
        t('roles.customerService.skills.0'),
        t('roles.customerService.skills.1'),
        t('roles.customerService.skills.2'),
        t('roles.customerService.skills.3'),
      ],
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 sm:py-28 px-6 sm:px-8 lg:px-12 bg-pureWhite border-t border-canvas-border"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.08 }}
          className="flex flex-col"
        >
          {/* Header */}
          <div className="max-w-3xl mb-14 sm:mb-16">
            <motion.div variants={itemVariants} className="mb-3">
              <span className="text-xs font-mono uppercase tracking-widest text-goldAccent font-semibold">
                {t('tag')}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-darkBlue leading-[1.15] mb-4"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-charcoal-muted font-normal leading-relaxed text-balance"
            >
              {t('subtitle')}
            </motion.p>
          </div>

          {/* Clean Chronological Timeline */}
          <div className="relative ltr:pl-6 sm:ltr:pl-10 rtl:pr-6 sm:rtl:pr-10">
            {/* Timeline Thin Architectural Track */}
            <div
              className="absolute top-4 bottom-8 ltr:left-2 sm:ltr:left-3 rtl:right-2 sm:rtl:right-3 w-[1px] bg-darkBlue/15"
              aria-hidden="true"
            />

            <div className="space-y-8 sm:space-y-10">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.key}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Square Timeline Node (Strictly Zero Pills) */}
                    <div
                      className="absolute top-6 ltr:-left-[21px] sm:ltr:-left-[25px] rtl:-right-[21px] sm:rtl:-right-[25px] w-3 h-3 rounded-none bg-white border-2 border-darkBlue flex items-center justify-center transition-colors group-hover:bg-darkBlue"
                      aria-hidden="true"
                    />

                    {/* Architectural Card */}
                    <div className="p-6 sm:p-8 rounded-md bg-white border border-canvas-border hover:border-darkBlue transition-all duration-200 shadow-sm">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-9 h-9 rounded-sm bg-darkBlue/5 text-darkBlue flex items-center justify-center border border-darkBlue/10 flex-shrink-0">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div>
                            <h3 className="text-lg sm:text-xl font-bold tracking-tight text-darkBlue">
                              {role.title}
                            </h3>
                            <p className="text-xs font-mono uppercase tracking-wider text-charcoal-muted">
                              {role.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1.5 text-xs font-mono text-charcoal-light">
                            <Calendar className="w-3.5 h-3.5 text-goldAccent" />
                            {role.period}
                          </span>
                          <span className="text-xs font-mono uppercase tracking-wider text-goldAccent border-l rtl:border-l-0 rtl:border-r border-darkBlue/15 ltr:pl-2 rtl:pr-2">
                            {role.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-charcoal leading-relaxed mb-5">
                        {role.description}
                      </p>

                      {/* Skills list as plain text with bullets (ZERO PILLS) */}
                      <div className="pt-4 border-t border-darkBlue/10">
                        <span className="block text-[11px] font-mono uppercase tracking-widest text-charcoal-light mb-2">
                          Core Responsibilities & Skills
                        </span>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1.5 text-xs text-charcoal">
                          {role.skills.map((skill, sIdx) => (
                            <div key={sIdx} className="flex items-center gap-1.5">
                              <span className="w-1.5 h-1.5 rounded-none bg-goldAccent" />
                              <span>{skill}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
