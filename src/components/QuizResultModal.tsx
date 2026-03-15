import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, AlertTriangle, Smartphone, Trophy, Mail, Share2, Copy, CheckCircle2, Play } from 'lucide-react';

interface QuizResultModalProps {
  score: number;
  lastQuestionAnswer: number;
  onClose: () => void;
  onReturnHome: () => void;
}

const QuizResultModal = ({ score, lastQuestionAnswer, onClose, onReturnHome }: QuizResultModalProps) => {
  const [os] = useState<'ios' | 'android' | 'other'>(() => {
    if (typeof window === 'undefined') return 'other';
    const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
    if (/android/i.test(userAgent) && /mobi/i.test(userAgent)) {
      return 'android';
    } else if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream) {
      return 'ios';
    }
    return 'other';
  });
  const [emailStatus, setEmailStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  const getResultTier = () => {
    if (score >= 8) return 'strong';
    if (score >= 4 || lastQuestionAnswer === 3) return 'good';
    return 'none';
  };

  const tier = getResultTier();

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailStatus('submitting');
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", "New Quiz Lead for Digital Alertness");
    formData.append("score", score.toString());
    formData.append("tier", tier);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      const data = await response.json();
      if (data.success) {
        setEmailStatus('success');
      } else {
        setEmailStatus('error');
      }
    } catch {
      setEmailStatus('error');
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: "30-Second Phone Habit Check",
      text: "Know someone who always says 'just 5 minutes' on social media? Send them this quick habit check!",
      url: window.location.origin + '/fit'
    };

    if (typeof navigator.share === 'function') {
      try {
        await navigator.share(shareData);
      } catch (err) {
        console.log('Error sharing:', err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShareStatus('copied');
        setTimeout(() => setShareStatus('idle'), 2000);
      } catch (err) {
        console.error('Failed to copy fallback URL:', err);
      }
    }
  };

  const renderContent = () => {
    switch (tier) {
      case 'strong':
        return {
          icon: <AlertTriangle className="w-8 h-8 text-rose-500" />,
          iconBg: 'bg-rose-100',
          title: "Your phone is definitely stealing your time.",
          body: "Your answers suggest you frequently get caught in the scroll. Digital Alertness gently nudges you after 20 minutes on selected apps, helping you break the loop without restrictive blocks.",
          showDownload: true
        };
      case 'good':
        return {
          icon: <Smartphone className="w-8 h-8 text-blue-500" />,
          iconBg: 'bg-blue-100',
          title: "You're mostly in control, but...",
          body: "Social media sometimes pulls you in longer than expected. A simple, private 20-minute reminder can help you stay completely on track.",
          showDownload: true
        };
      case 'none':
        return {
          icon: <Trophy className="w-8 h-8 text-amber-500" />,
          iconBg: 'bg-amber-100',
          title: "You have excellent digital habits!",
          body: "Looks like you already manage your phone use really well. You probably don't need this app!",
          showDownload: false
        };
    }
  };

  const content = renderContent();

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md overflow-y-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white rounded-[2rem] p-6 md:p-8 max-w-md w-full shadow-2xl relative my-8"
        >
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors bg-slate-100 hover:bg-slate-200 rounded-full p-1.5"
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
          
          <div className="text-center mb-6 mt-2">
            <div className={`w-16 h-16 ${content.iconBg} rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm`}>
              {content.icon}
            </div>
            
            <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold tracking-widest uppercase mb-3">
              Score: {score}/12
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-3 leading-tight">
              {content.title}
            </h3>
            <p className="text-slate-600 leading-relaxed text-sm md:text-base">
              {content.body}
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {content.showDownload && (
              <div className="flex flex-col gap-3">
                {os === 'android' || os === 'other' ? (
                  <a 
                    href="https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl font-semibold text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    <Play size={18} className="fill-white" />
                    Get it on Google Play
                  </a>
                ) : (
                  <a 
                    href="#waitlist"
                    onClick={(e) => {
                      e.preventDefault();
                      onReturnHome();
                      setTimeout(() => {
                        document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
                      }, 100);
                    }}
                    className="w-full py-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl font-semibold text-center transition-colors shadow-lg"
                  >
                    Join iOS Waitlist
                  </a>
                )}

                {/* Optional Email Capture */}
                {emailStatus === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-700 text-sm rounded-xl p-3 flex items-start gap-2">
                    <CheckCircle2 size={16} className="mt-0.5 shrink-0" />
                    <p>Thanks! We'll send you a digital wellness tip soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="mt-2">
                    <p className="text-xs text-slate-500 mb-2 font-medium">Want digital wellness tips? (Optional)</p>
                    <div className="relative flex">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-slate-400" />
                      </div>
                      <input 
                        type="email" 
                        name="email"
                        placeholder="Drop your email here" 
                        disabled={emailStatus === 'submitting'}
                        className="w-full pl-9 pr-24 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all disabled:opacity-60"
                      />
                      <button 
                        type="submit" 
                        disabled={emailStatus === 'submitting'}
                        className="absolute right-1 top-1 bottom-1 bg-slate-900 hover:bg-slate-800 text-white px-4 rounded-lg text-sm font-medium transition-colors disabled:opacity-60"
                      >
                        {emailStatus === 'submitting' ? '...' : 'Send'}
                      </button>
                    </div>
                    {emailStatus === 'error' && (
                      <p className="text-red-500 text-xs mt-1">Oops! Something went wrong.</p>
                    )}
                  </form>
                )}
              </div>
            )}

            <div className="w-full h-px bg-slate-100 my-2"></div>

            <button
              onClick={handleShare}
              className="w-full py-3.5 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              {shareStatus === 'copied' ? (
                <>
                  <CheckCircle2 size={18} className="text-green-500" />
                  Link Copied!
                </>
              ) : (
                <>
                  {typeof navigator.share === 'function' ? <Share2 size={18} /> : <Copy size={18} />}
                  Share this quiz
                </>
              )}
            </button>
            
            <button
              onClick={onReturnHome}
              className="w-full py-2 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors"
            >
              Return to home
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default QuizResultModal;
