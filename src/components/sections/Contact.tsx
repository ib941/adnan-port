'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { motion, type Variants } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
  MessageCircle,
  Copy,
  Check,
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

export default function Contact() {
  const t = useTranslations('Contact');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 2500);
  };

  const contactCards = [
    {
      key: 'phone',
      icon: Phone,
      label: t('phoneLabel'),
      value: t('phoneValue'),
      rawVal: '+966504517869',
      href: 'tel:+966504517869',
    },
    {
      key: 'email',
      icon: Mail,
      label: t('emailLabel'),
      value: t('emailValue'),
      rawVal: 'Adnanalthour@gmail.com',
      href: 'mailto:Adnanalthour@gmail.com',
    },
    {
      key: 'location',
      icon: MapPin,
      label: t('locationLabel'),
      value: t('locationValue'),
      rawVal: 'Riyadh, Saudi Arabia',
      href: 'https://maps.google.com/?q=Riyadh,+Saudi+Arabia',
      isExternal: true,
    },
  ];

  return (
    <section
      id="contact"
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

          {/* Contact Cards Grid (Strictly Zero Pills) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* WhatsApp Priority Card */}
            <motion.div
              variants={itemVariants}
              className="p-6 rounded-md bg-darkBlue text-pureWhite flex flex-col justify-between shadow-sm relative overflow-hidden"
            >
              <div>
                <div className="w-10 h-10 rounded-sm bg-white/10 text-goldAccent flex items-center justify-center mb-6">
                  <MessageCircle className="w-5 h-5" />
                </div>

                <h3 className="text-base font-bold mb-1">
                  {t('whatsAppLabel')}
                </h3>
                <p className="text-xs text-white/70 mb-6 leading-relaxed">
                  {t('whatsAppDesc')}
                </p>
              </div>

              <a
                href="https://wa.me/966504517869?text=Hello%20Adnan,%20I%20would%20like%20to%20get%20in%20touch."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 rounded-sm bg-goldAccent text-darkBlue text-xs font-bold uppercase tracking-wider hover:bg-goldAccent-light transition-colors"
              >
                <span>{t('whatsAppButton')}</span>
                <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
              </a>
            </motion.div>

            {/* Other 3 Cards */}
            {contactCards.map((item) => {
              const Icon = item.icon;
              const isCopied = copiedKey === item.key;
              return (
                <motion.div
                  key={item.key}
                  variants={itemVariants}
                  className="p-6 rounded-md bg-white border border-canvas-border hover:border-darkBlue transition-all duration-200 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="w-10 h-10 rounded-sm bg-darkBlue/5 text-darkBlue flex items-center justify-center mb-6 border border-darkBlue/10">
                      <Icon className="w-5 h-5 text-goldAccent" />
                    </div>

                    <span className="block text-[11px] font-mono uppercase tracking-wider text-charcoal-light mb-1">
                      {item.label}
                    </span>
                    <a
                      href={item.href}
                      target={item.isExternal ? '_blank' : undefined}
                      rel={item.isExternal ? 'noopener noreferrer' : undefined}
                      className="text-sm sm:text-base font-bold text-darkBlue hover:text-goldAccent transition-colors break-words block font-mono sm:font-sans"
                    >
                      {item.value}
                    </a>
                  </div>

                  <div className="pt-6 border-t border-darkBlue/10 mt-6 flex items-center justify-between">
                    {item.key !== 'location' ? (
                      <button
                        type="button"
                        onClick={() => handleCopy(item.rawVal, item.key)}
                        className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-charcoal-muted hover:text-darkBlue transition-colors"
                      >
                        {isCopied ? (
                          <>
                            <Check className="w-3.5 h-3.5 text-emerald-600" />
                            <span className="text-emerald-600">{t('copiedToast')}</span>
                          </>
                        ) : (
                          <>
                            <Copy className="w-3.5 h-3.5" />
                            <span>{t('copyButton')}</span>
                          </>
                        )}
                      </button>
                    ) : (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs font-mono uppercase tracking-wider text-charcoal-muted hover:text-darkBlue transition-colors"
                      >
                        <span>Maps</span>
                        <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
