import { useState } from 'react';
import { Mail } from 'lucide-react';

interface WaitlistSectionProps {
  onOpenContactModal: () => void;
}

const WaitlistSection = ({ onOpenContactModal }: WaitlistSectionProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Waitlist Signup for Digital Alertness");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section className="py-24 bg-pink-500 relative z-10 overflow-hidden text-center">
      {/* Decorative Circles */}
      <div className="absolute top-[-50%] left-[-10%] w-[400px] h-[400px] bg-pink-400/30 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-[-50%] right-[-10%] w-[300px] h-[300px] bg-rose-400/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
            Waiting for iOS?
          </h2>
          <p className="text-pink-50 text-lg mb-10 leading-relaxed max-w-lg mx-auto">
            We're crafting the perfect Apple ecosystem experience. Join the waitlist to be notified the moment we launch.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 inline-block">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
              </div>
              <h3 className="text-white text-xl font-bold">You're on the list!</h3>
              <p className="text-pink-100 text-sm mt-1">We'll email you the moment we launch on iOS.</p>
            </div>
          ) : (
            <form 
              onSubmit={handleSubmit} 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <div className="relative flex-grow">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-slate-400" />
                </div>
                <input 
                  type="email" 
                  name="email"
                  required 
                  placeholder="Enter your email address" 
                  className="w-full pl-11 pr-4 py-4 rounded-2xl border-0 ring-1 ring-inset ring-pink-400 bg-white shadow-sm focus:ring-2 focus:ring-inset focus:ring-white text-slate-900 placeholder:text-slate-400 outline-none transition-shadow"
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'submitting'}
                className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-4 rounded-2xl font-semibold transition-colors shadow-lg shadow-slate-900/20 active:scale-95 whitespace-nowrap disabled:opacity-70 disabled:active:scale-100"
              >
                {status === 'submitting' ? 'Joining...' : 'Join Waitlist'}
              </button>
            </form>
          )}

          {status === 'error' && (
            <p className="text-white text-sm mt-3 bg-red-400/20 inline-block px-3 py-1 rounded-md border border-red-400/30">An error occurred. Please try again.</p>
          )}

          <div className="text-pink-100 text-sm mt-8 space-y-1">
            <p>We respect your inbox. No spam, ever.</p>
            <p className="opacity-80">
              Have a question? <button type="button" onClick={onOpenContactModal} className="font-semibold text-white hover:underline underline-offset-2">Get in touch</button>
            </p>
          </div>
        </div>
      </div>
      
    </section>
  );
};

export default WaitlistSection;
