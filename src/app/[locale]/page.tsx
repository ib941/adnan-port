import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Contact from '@/components/sections/Contact';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen bg-pureWhite selection:bg-darkBlue selection:text-pureWhite">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Contact />
      </main>

      {/* Corporate Minimalist Footer */}
      <footer className="py-12 px-6 sm:px-8 lg:px-12 border-t border-black/[0.06] bg-pureWhite">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-deepBlack/50">
          <p>© {new Date().getFullYear()} Adnan Al-Thour. All rights reserved.</p>
          <p className="font-mono tracking-wider">
            CORPORATE MINIMALISM • NEXT.JS APP ROUTER
          </p>
        </div>
      </footer>
    </div>
  );
}
