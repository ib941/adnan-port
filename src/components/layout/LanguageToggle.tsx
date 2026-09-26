'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/routing';
import { useTransition } from 'react';

export default function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const handleLocaleChange = (targetLocale: 'en' | 'ar') => {
    if (targetLocale === locale || isPending) return;

    startTransition(() => {
      router.replace(pathname, { locale: targetLocale });
    });
  };

  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center rounded-md border border-darkBlue/20 bg-white p-0.5 shadow-sm"
    >
      <button
        type="button"
        onClick={() => handleLocaleChange('en')}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold tracking-wider rounded-sm transition-colors duration-150 ${
          locale === 'en'
            ? 'bg-darkBlue text-pureWhite'
            : 'text-darkBlue/70 hover:text-darkBlue hover:bg-black/[0.04]'
        }`}
        aria-pressed={locale === 'en'}
      >
        EN
      </button>

      <span className="w-[1px] h-3 bg-darkBlue/20 mx-0.5" aria-hidden="true" />

      <button
        type="button"
        onClick={() => handleLocaleChange('ar')}
        disabled={isPending}
        className={`px-3 py-1 text-xs font-semibold rounded-sm transition-colors duration-150 font-arabic ${
          locale === 'ar'
            ? 'bg-darkBlue text-pureWhite'
            : 'text-darkBlue/70 hover:text-darkBlue hover:bg-black/[0.04]'
        }`}
        aria-pressed={locale === 'ar'}
      >
        العربية
      </button>
    </div>
  );
}
