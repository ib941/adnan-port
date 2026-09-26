'use client';

import { useTranslations } from 'next-intl';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const t = useTranslations('Footer');
  const tNav = useTranslations('Navbar');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-canvas-border bg-pureWhite">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pb-8 border-b border-darkBlue/10">
          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-sm bg-darkBlue text-pureWhite flex items-center justify-center font-mono text-[11px] font-bold">
              AT
            </div>
            <div>
              <h4 className="text-sm font-bold tracking-wider text-darkBlue uppercase">
                {t('brand')}
              </h4>
              <p className="text-[11px] font-mono text-charcoal-light">
                {t('role')}
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-xs font-semibold uppercase tracking-wider text-charcoal-muted">
            <a href="#hero" className="hover:text-darkBlue transition-colors">
              {tNav('hero')}
            </a>
            <a href="#about" className="hover:text-darkBlue transition-colors">
              {tNav('about')}
            </a>
            <a href="#experience" className="hover:text-darkBlue transition-colors">
              {tNav('experience')}
            </a>
            <a href="#contact" className="hover:text-darkBlue transition-colors">
              {tNav('contact')}
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm border border-darkBlue/15 text-xs font-mono text-charcoal hover:border-darkBlue hover:text-darkBlue transition-colors"
          >
            <span>{t('backToTop')}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-mono text-charcoal-light">
          <p>© {new Date().getFullYear()} {t('copyright')}</p>
          <p>{t('location')}</p>
        </div>
      </div>
    </footer>
  );
}
