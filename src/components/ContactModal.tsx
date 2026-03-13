import { useState } from 'react';
import { X } from 'lucide-react';

type ContactModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const ContactModal = ({ isOpen, onClose }: ContactModalProps) => {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-white rounded-[2rem] p-8 w-full max-w-md relative shadow-2xl">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors bg-slate-50 hover:bg-slate-100 p-2 rounded-full"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Get in touch</h3>
        <p className="text-slate-600 mb-6 text-sm">Have a question or feedback? We'd love to hear from you.</p>

        {status === 'success' ? (
          <div className="py-8 text-center bg-green-50 rounded-2xl border border-green-100">
            <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-3">
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            </div>
            <h4 className="text-green-800 font-semibold mb-1">Message sent!</h4>
            <p className="text-green-600 text-sm">We'll get back to you shortly.</p>
            <button onClick={onClose} className="mt-6 text-green-700 font-medium text-sm hover:underline">Close window</button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
              <input 
                type="email" 
                id="email"
                name="email"
                required 
                placeholder="you@example.com"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all text-slate-900 placeholder:text-slate-400"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message</label>
              <textarea 
                id="message"
                name="message"
                required 
                rows={4}
                placeholder="How can we help?"
                className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-pink-500/20 focus:border-pink-500 outline-none transition-all text-slate-900 placeholder:text-slate-400 resize-none"
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={status === 'submitting'}
              className="mt-2 w-full bg-[#EC4899] hover:bg-[#D946EF] text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-pink-500/25 active:scale-[0.98] transition-all disabled:opacity-70 disabled:active:scale-100"
            >
              {status === 'submitting' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'error' && (
              <p className="text-red-500 text-sm text-center mt-2">Oops! Something went wrong. Please try again.</p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
