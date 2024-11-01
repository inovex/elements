'use client';

import Navbar from './components/navbar';
import Hero from './components/hero';
import FaqSection from './components/faq';
import Footer from './components/footer';

export default function Index() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col items-center gap-12 py-12">
        <Hero />
        <FaqSection />
      </main>
      <Footer />
    </div>
  );
}
