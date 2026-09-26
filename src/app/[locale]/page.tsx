import { setRequestLocale } from 'next-intl/server';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Expertise from '@/components/sections/Expertise';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div className="flex flex-col min-h-screen bg-pureWhite text-charcoal selection:bg-darkBlue selection:text-pureWhite">
      <Navbar />

      <main className="flex-1">
        <Hero />
        <About />
        <Expertise />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
