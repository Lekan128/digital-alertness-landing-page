import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import ContactModal from '../components/ContactModal';

export default function PrivacyPolicyPage() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 selection:bg-pink-500/30 font-sans pt-20">
      <Navbar />

      <main className="container mx-auto px-6 md:px-12 py-16 max-w-3xl bg-white rounded-3xl shadow-sm border border-slate-100 my-12">
        <Link to="/" className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium mb-8 transition-colors">
          <ArrowLeft size={16} /> Back to Home
        </Link>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Privacy Policy</h1>
        <p className="text-slate-500 mb-10">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-600 prose-headings:text-slate-900">
          <p>
            At Digital Alertness, we believe that your digital wellbeing should not come at the cost of your digital privacy. This Privacy Policy outlines our commitment to a "Privacy by Design" architecture.
          </p>

          <h2>1. Zero Data Collection</h2>
          <p>
            <strong>Digital Alertness collects absolutely zero personal data.</strong> We do not track your location, we do not monitor your keystrokes, and we do not harvest your personal information. Our application operates entirely offline, meaning there are no hidden servers receiving telemetry or analytics from your device.
          </p>

          <h2>2. Local Storage Only</h2>
          <p>
            Any preferences you set within the application—such as which apps to monitor, your customized alert times, or notification preferences—are stored locally on your device using native, secure storage mechanisms. We have no access to this data.
          </p>

          <h2>3. No Accounts Required</h2>
          <p>
            You are not required to create an account, log in, or provide an email address to use the core features of Digital Alertness. We intentionally designed the app to function flawlessly without user registration, neutralizing the risks associated with data breaches.
          </p>

          <h2>4. Third-Party Services</h2>
          <p>
            Because the app operates offline, we do not integrate with third-party tracking pixels, ad networks, or analytics providers within the mobile application. (Note: Waitlist submissions via this website use Web3Forms, which securely transmits your email to our inbox without storing it in a persistent marketing database without consent).
          </p>

          <h2>5. Your Rights</h2>
          <p>
            Since we do not hold any data on you, there is no data to delete, export, or modify on our end. You retain total control. If you wish to erase your usage history, simply clear the app data in your device settings or uninstall the application.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions regarding this privacy policy or our zero-data approach, please feel free to <button type="button" onClick={() => setIsContactModalOpen(true)} className="text-pink-600 font-semibold hover:underline">contact us</button>.
          </p>
        </div>
      </main>

      <FooterSection onOpenContactModal={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
