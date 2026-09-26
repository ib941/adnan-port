'use client';

import { useState, useEffect } from 'react';
import { useTranslations } from 'next-intl';
import LanguageToggle from './LanguageToggle';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const t = useTranslations('Navbar');
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('hero'), href: '#hero' },
    { name: t('about'), href: '#about' },
    { name: t('expertise'), href: '#expertise' },
    { name: t('contact'), href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-pureWhite/90 backdrop-blur-md border-b border-black/[0.08] shadow-sm'
          : 'bg-pureWhite/75 backdrop-blur-sm border-b border-black/[0.04]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand / Logo */}
        <a
          href="#hero"
          className="group flex items-center gap-2 tracking-tight transition-opacity hover:opacity-80"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-darkBlue transition-transform duration-300 group-hover:scale-125" />
          <span className="text-base sm:text-lg font-bold tracking-wider text-deepBlack uppercase">
            {t('brand')}
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10" aria-label="Main Navigation">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-deepBlack/70 hover:text-deepBlack transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-darkBlue hover:after:w-full after:transition-all after:duration-300"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Actions: Language Toggle & CTA */}
        <div className="hidden md:flex items-center gap-5">
          <LanguageToggle />

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-darkBlue text-pureWhite text-xs font-semibold tracking-wide uppercase shadow-btn transition-all duration-300 hover:bg-darkBlue-hover hover:shadow-lg active:scale-95"
          >
            <span>{t('cta')}</span>
            <ArrowUpRight className="w-3.5 h-3.5 rtl:rotate-[-90deg] transition-transform duration-200" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3">
          <LanguageToggle />
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg text-deepBlack hover:bg-black/5 transition-colors"
            aria-label="Toggle Navigation Menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Glass Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-black/[0.08] bg-pureWhite/95 backdrop-blur-xl px-6 py-6 space-y-4 shadow-xl animate-fade-in">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-deepBlack/80 hover:text-deepBlack py-2 border-b border-black/[0.04] transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-darkBlue text-pureWhite text-sm font-semibold tracking-wide shadow-btn"
            >
              <span>{t('cta')}</span>
              <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
