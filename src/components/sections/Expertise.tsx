'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import {
  Briefcase,
  Building,
  Store,
  ShoppingCart,
  Truck,
  Headphones,
  Calendar,
  Layers,
  CheckCircle2,
} from 'lucide-react';

const sectionVariants: Variants = {
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
      duration: 0.6,
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
        t('roles.delivery.skills.4'),
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
        t('roles.customerService.skills.4'),
      ],
    },
  ];

  return (
    <section
      id="expertise"
      className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-pureWhite border-t border-black/[0.06] relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col"
        >
          {/* Section Header */}
          <div className="max-w-3xl mb-16 sm:mb-20">
            <motion.div variants={itemVariants} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-darkBlue/15 bg-darkBlue/[0.03] text-darkBlue text-xs font-semibold uppercase tracking-wider">
                {t('tag')}
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-deepBlack leading-[1.12] mb-6"
            >
              {t('title')}
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl text-deepBlack/80 font-normal leading-relaxed text-balance"
            >
              {t('subtitle')}
            </motion.p>
          </div>

          {/* Sleek Vertical Corporate Timeline */}
          <div className="relative ltr:pl-8 sm:ltr:pl-12 rtl:pr-8 sm:rtl:pr-12">
            {/* Timeline Vertical Track Line */}
            <div
              className="absolute top-4 bottom-8 ltr:left-3.5 sm:ltr:left-5 rtl:right-3.5 sm:rtl:right-5 w-[2px] bg-gradient-to-b from-darkBlue via-black/[0.12] to-transparent"
              aria-hidden="true"
            />

            <div className="space-y-10 sm:space-y-12">
              {roles.map((role) => {
                const Icon = role.icon;
                return (
                  <motion.div
                    key={role.key}
                    variants={itemVariants}
                    className="relative group"
                  >
                    {/* Timeline Node Point */}
                    <div
                      className="absolute top-6 ltr:-left-[29px] sm:ltr:-left-[39px] rtl:-right-[29px] sm:rtl:-right-[39px] w-5 h-5 rounded-full bg-pureWhite border-2 border-darkBlue flex items-center justify-center shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:bg-darkBlue group-hover:border-darkBlue"
                      aria-hidden="true"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-darkBlue group-hover:bg-pureWhite transition-colors duration-200" />
                    </div>

                    {/* Timeline Card */}
                    <div className="p-8 sm:p-10 rounded-2xl bg-pureWhite border border-black/[0.08] shadow-sm transition-all duration-300 group-hover:border-darkBlue group-hover:shadow-luxury group-hover:-translate-y-1 relative overflow-hidden">
                      {/* Top subtle highlight */}
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-darkBlue transition-all duration-300" />

                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                        <div className="flex items-center gap-3.5">
                          <div className="w-11 h-11 rounded-xl bg-darkBlue/5 text-darkBlue flex items-center justify-center transition-colors duration-300 group-hover:bg-darkBlue group-hover:text-pureWhite shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-deepBlack group-hover:text-darkBlue transition-colors">
                              {role.title}
                            </h3>
                            <p className="text-xs sm:text-sm font-semibold text-deepBlack/50 uppercase tracking-wider">
                              {role.company}
                            </p>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2.5">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/[0.03] text-deepBlack/70 text-xs font-medium">
                            <Calendar className="w-3.5 h-3.5 text-deepBlack/40" />
                            {role.period}
                          </span>
                          <span className="px-3 py-1 rounded-full bg-darkBlue/[0.04] text-darkBlue text-xs font-semibold uppercase tracking-wider border border-darkBlue/10">
                            {role.type}
                          </span>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base text-deepBlack/75 font-normal leading-relaxed mb-6">
                        {role.description}
                      </p>

                      {/* Key Competencies / Skills Tags */}
                      <div className="flex flex-wrap items-center gap-2 pt-5 border-t border-black/[0.06]">
                        {role.skills.map((skill, skillIdx) => (
                          <span
                            key={skillIdx}
                            className="px-3 py-1 text-xs font-medium rounded-lg bg-pureWhite border border-black/[0.08] text-deepBlack/70 group-hover:border-darkBlue/20 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
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
