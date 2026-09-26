'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';
import { Globe } from 'lucide-react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (targetLocale: 'en' | 'ar') => {
    if (targetLocale === locale || isPending) return;

    startTransition(() => {
      // Replaces current route while maintaining current pathname and switching locale
      router.replace(pathname, { locale: targetLocale });
    });
  };

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center p-1 rounded-full border border-black/[0.08] bg-white/70 backdrop-blur-md shadow-sm transition-all hover:border-black/20"
    >
      <button
        type="button"
        onClick={() => handleLocaleChange('en')}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold tracking-wider rounded-full transition-all duration-300 ${
          locale === 'en'
            ? 'bg-darkBlue text-pureWhite shadow-sm'
            : 'text-deepBlack/60 hover:text-deepBlack hover:bg-black/[0.04]'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>

      <span className="w-[1px] h-3 bg-black/10 mx-0.5" aria-hidden="true" />

      <button
        type="button"
        onClick={() => handleLocaleChange('ar')}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold rounded-full transition-all duration-300 font-arabic ${
          locale === 'ar'
            ? 'bg-darkBlue text-pureWhite shadow-sm'
            : 'text-deepBlack/60 hover:text-deepBlack hover:bg-black/[0.04]'
        }`}
        aria-pressed={locale === 'ar'}
      >
        العربية
      </button>
    </div>
  );
}
