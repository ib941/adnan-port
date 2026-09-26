'use client';

import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import { Phone, Mail, MapPin, ArrowUpRight, ShieldCheck } from 'lucide-react';

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

const fadeUpVariants: Variants = {
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

export default function Contact() {
  const t = useTranslations('Contact');

  const contactCards = [
    {
      icon: Phone,
      label: t('phoneLabel'),
      value: t('phoneValue'),
      href: 'tel:+966504517869',
      isExternal: false,
    },
    {
      icon: Mail,
      label: t('emailLabel'),
      value: t('emailValue'),
      href: 'mailto:Adnanalthour@gmail.com',
      isExternal: false,
    },
    {
      icon: MapPin,
      label: t('locationLabel'),
      value: t('locationValue'),
      href: 'https://maps.google.com/?q=Riyadh,+Saudi+Arabia',
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
      className="py-28 sm:py-36 px-6 sm:px-8 lg:px-12 bg-pureWhite border-t border-black/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
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
              {t('subtitle')}
            </motion.p>
          </div>

          {/* 3 Clickable Contact Cards Grid */}
          <motion.div
            variants={fadeUpVariants}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-10"
          >
            {contactCards.map((item, index) => {
              const Icon = item.icon;
              return (
                <a
                  key={index}
                  href={item.href}
                  target={item.isExternal ? '_blank' : undefined}
                  rel={item.isExternal ? 'noopener noreferrer' : undefined}
                  className="group relative p-8 sm:p-10 rounded-2xl bg-pureWhite border border-black/[0.08] hover:border-darkBlue shadow-sm hover:shadow-luxury hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden min-h-[220px]"
                >
                  <div className="absolute top-0 left-0 right-0 h-[2px] bg-transparent group-hover:bg-darkBlue transition-colors duration-300" />

                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-xl bg-darkBlue/5 text-darkBlue flex items-center justify-center transition-colors duration-300 group-hover:bg-darkBlue group-hover:text-pureWhite shadow-sm">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="w-8 h-8 rounded-full border border-black/[0.08] flex items-center justify-center text-deepBlack/40 group-hover:border-darkBlue group-hover:text-darkBlue transition-colors">
                      <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                    </div>
                  </div>

                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-deepBlack/50 mb-1.5">
                      {item.label}
                    </p>
                    <p className="text-base sm:text-lg lg:text-xl font-bold text-deepBlack group-hover:text-darkBlue transition-colors font-mono sm:font-sans break-words">
                      {item.value}
                    </p>
                  </div>
                </a>
              );
            })}
          </motion.div>

          {/* Executive Availability Notice */}
          <motion.div
            variants={fadeUpVariants}
            className="p-6 sm:p-8 rounded-2xl bg-darkBlue/[0.02] border border-darkBlue/15"
          >
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-darkBlue/5 text-darkBlue flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <p className="text-xs sm:text-sm text-deepBlack/80 leading-relaxed font-medium">
                {t('availabilityNotice')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
