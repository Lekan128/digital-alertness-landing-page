import { useState } from 'react';
import { Play } from 'lucide-react';
import Hero from '../components/Hero';
import PrivacySection from '../components/PrivacySection';
import ResearchSection from '../components/ResearchSection';
import ComparisonSection from '../components/ComparisonSection';
import WaitlistSection from '../components/WaitlistSection';
import FooterSection from '../components/FooterSection';
import ContactModal from '../components/ContactModal';

import Navbar from '../components/Navbar';

export default function HomePage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 selection:bg-pink-500/30 overflow-hidden relative font-sans pt-20">
      <Navbar />
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <Hero />
      <PrivacySection />
      <ResearchSection />
      <ComparisonSection />
      <WaitlistSection onOpenContactModal={() => setIsContactModalOpen(true)} />
      <FooterSection onOpenContactModal={() => setIsContactModalOpen(true)} />

      {/* Sticky Bottom CTA (Mobile heavily focused) sm:hidden */}
      <div className="fixed bottom-0 left-0 w-full p-4 bg-white/80 backdrop-blur-md border-t border-slate-200/50 z-50 flex justify-center sm:hidden animate-in slide-in-from-bottom-full duration-500">
         <a 
          href="https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-center gap-2 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white px-6 py-3.5 rounded-2xl font-semibold shadow-lg shadow-pink-500/30 active:scale-95 transition-all text-sm"
        >
          <Play size={16} className="fill-white" />
          Get it on Google Play
        </a>
      </div>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
