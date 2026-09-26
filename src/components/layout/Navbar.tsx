'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: t('hero'), href: '#hero' },
    { name: t('about'), href: '#about' },
    { name: t('experience'), href: '#experience' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header className="sticky top-4 z-50 w-full px-4 sm:px-6 lg:px-8 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        {/* Floating slim rectangular bar */}
        <div className="rounded-md border border-darkBlue/15 bg-white/95 backdrop-blur-md shadow-floating px-5 sm:px-6 py-3 flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            className="flex items-center gap-2.5 group transition-opacity hover:opacity-85"
          >
            <div className="w-7 h-7 rounded-sm bg-darkBlue text-pureWhite flex items-center justify-center font-mono text-[11px] font-bold tracking-tight">
              AT
            </div>
            <span className="text-sm sm:text-base font-bold tracking-wider text-darkBlue uppercase">
              {t('brand')}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-charcoal-muted hover:text-darkBlue transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-darkBlue hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions: Language Toggle & Rectangular CTA */}
          <div className="hidden md:flex items-center gap-3.5">
            <LanguageToggle />

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-darkBlue text-pureWhite text-xs font-semibold uppercase tracking-wider shadow-sm transition-all duration-200 hover:bg-darkBlue-hover active:scale-95"
            >
              <span>{t('cta')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-2.5">
            <LanguageToggle />
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-1.5 rounded-md border border-darkBlue/15 text-darkBlue hover:bg-darkBlue/5 transition-colors"
              aria-label="Toggle Navigation Menu"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 rounded-md border border-darkBlue/15 bg-white/98 backdrop-blur-xl p-5 shadow-floating space-y-4 animate-fade-in">
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-semibold uppercase tracking-wider text-charcoal py-2 border-b border-darkBlue/5 hover:text-darkBlue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-darkBlue text-pureWhite text-xs font-semibold uppercase tracking-wider shadow-sm"
            >
              <span>{t('cta')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg]" />
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
