import { useState, useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import FooterSection from '../components/FooterSection';
import ContactModal from '../components/ContactModal';

export default function TermsOfServicePage() {
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
        
        <h1 className="text-4xl font-bold text-slate-900 mb-6">Terms of Service</h1>
        <p className="text-slate-500 mb-10">Last Updated: {new Date().toLocaleDateString()}</p>

        <div className="prose prose-slate max-w-none prose-p:leading-relaxed prose-p:text-slate-600 prose-headings:text-slate-900">
          <p>
            Welcome to Digital Alertness. By downloading, accessing, or using our application, you agree to be bound by these Terms of Service.
          </p>

          <h2>1. Use License</h2>
          <p>
            Permission is granted to temporarily download one copy of Digital Alertness per device for personal, non-commercial viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
          </p>
          <ul>
            <li>Modify or copy the materials;</li>
            <li>Use the materials for any commercial purpose, or for any public display (commercial or non-commercial);</li>
            <li>Attempt to decompile or reverse engineer any software contained in Digital Alertness;</li>
            <li>Remove any copyright or other proprietary notations from the materials.</li>
          </ul>

          <h2>2. Disclaimer of Warranties</h2>
          <p>
            The materials within Digital Alertness are provided on an 'as is' basis. Digital Alertness makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
          </p>
          <p>
            Furthermore, Digital Alertness does not warrant or make any representations concerning the absolute medical accuracy of the 20-20-20 rule as it applies to your specific physiological needs. The app is a behavioral nudge tool, not a medical device.
          </p>

          <h2>3. Limitations of Liability</h2>
          <p>
            In no event shall Digital Alertness or its developers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the application, even if Digital Alertness or an authorized representative has been notified orally or in writing of the possibility of such damage. We are not responsible for missed alarms, notification failures, or device OS interventions that may prevent the app from functioning.
          </p>

          <h2>4. Accuracy of Materials</h2>
          <p>
            The materials appearing in Digital Alertness could include technical, typographical, or photographic errors. Digital Alertness does not warrant that any of the materials on its website or app are accurate, complete or current. We may make changes to the materials contained at any time without notice.
          </p>

          <h2>5. Revisions and Modifications</h2>
          <p>
            Digital Alertness may revise these terms of service for its website and app at any time without notice. By using this application you are agreeing to be bound by the then current version of these terms of service.
          </p>

          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms, please <button type="button" onClick={() => setIsContactModalOpen(true)} className="text-pink-600 font-semibold hover:underline">contact us</button>.
          </p>
        </div>
      </main>

      <FooterSection onOpenContactModal={() => setIsContactModalOpen(true)} />
      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
    </div>
  );
}
