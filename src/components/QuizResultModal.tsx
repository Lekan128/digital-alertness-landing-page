import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Share2, Copy, CheckCircle2, Play, ArrowDown } from 'lucide-react';

interface QuizResultModalProps {
  score: number;
  lastQuestionAnswer: number;
  onClose: () => void;
  onReturnHome: () => void;
}

// --- Professional SVG Icons ---

const ClockAlertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-rose-500">
    <circle cx="12" cy="12" r="9" />
    <line x1="12" y1="7" x2="12" y2="12" />
    <line x1="12" y1="15.5" x2="12" y2="16" />
    <polyline points="12 7 12 12 14.5 10" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-indigo-500">
    <path d="M12 2L4 6v6c0 5.25 3.5 10.15 8 11.35C17.5 22.15 21 17.25 21 12V6l-8-4z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

const CheckCircleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10 text-emerald-500">
    <circle cx="12" cy="12" r="9" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);

// --- OS Detection Utility ---
const detectOS = (): 'ios' | 'android' | 'other' => {
  if (typeof window === 'undefined') return 'other';
  const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || '';
  if (/android/i.test(userAgent) && /mobi/i.test(userAgent)) return 'android';
  if (/iPad|iPhone|iPod/.test(userAgent) && !(window as unknown as { MSStream?: unknown }).MSStream) return 'ios';
  return 'other';
};

const QuizResultModal = ({ score, lastQuestionAnswer, onClose, onReturnHome }: QuizResultModalProps) => {
  const navigate = useNavigate();
  const [os] = useState<'ios' | 'android' | 'other'>(detectOS);
  const [showDropdown, setShowDropdown] = useState(false);
  const [emailStatus, setEmailStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

  const getResultTier = () => {
    if (score >= 8) return 'strong';
    if (score >= 4 || lastQuestionAnswer === 3) return 'good';
    return 'none';
  };

  const tier = getResultTier();

  // --- iOS Waitlist Navigation ---
  const navigateToWaitlist = () => {
    navigate('/');
    setTimeout(() => {
      const el = document.getElementById('waitlist');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
    setShowDropdown(false);
  };

  // --- Primary CTA Handler ---
  const handleMobileAction = () => {
    if (os === 'android') {
      window.open('https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness', '_blank');
    } else if (os === 'ios') {
      navigateToWaitlist();
    } else {
      setShowDropdown(prev => !prev);
    }
  };

  const handleEmailSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setEmailStatus('submitting');

    const formData = new FormData(e.currentTarget);
    formData.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    formData.append("subject", tier === 'none' ? "New Habit Insight from User" : "New Quiz Lead for Digital Alertness");
    formData.append("score", score.toString());
    formData.append("tier", tier);

    try {
      const response = await fetch("https://api.web3forms.com/submit", { method: "POST", body: formData });
      const data = await response.json();
      setEmailStatus(data.success ? 'success' : 'error');
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
      try { await navigator.share(shareData); } catch (err) { console.log('Error sharing:', err); }
    } else {
      try {
        await navigator.clipboard.writeText(shareData.url);
        setShareStatus('copied');
        setTimeout(() => setShareStatus('idle'), 2000);
      } catch (err) { console.error('Failed to copy fallback URL:', err); }
    }
  };

  const renderContent = () => {
    switch (tier) {
      case 'strong':
        return {
          icon: <ClockAlertIcon />,
          iconBg: 'bg-rose-100',
          title: "Your phone is definitely stealing your time.",
          body: "Your answers suggest you frequently get caught in the scroll. Digital Alertness gently nudges you after 20 minutes on selected apps, helping you break the loop without restrictive blocks.",
          showDownload: true
        };
      case 'good':
        return {
          icon: <ShieldCheckIcon />,
          iconBg: 'bg-indigo-100',
          title: "You're mostly in control, but...",
          body: "Social media sometimes pulls you in longer than expected. A simple, private 20-minute reminder can help you stay completely on track.",
          showDownload: true
        };
      case 'none':
        return {
          icon: <CheckCircleIcon />,
          iconBg: 'bg-emerald-100',
          title: "You have excellent digital habits!",
          body: "Looks like you already manage your phone use really well. You probably don't need this app!",
          showDownload: false,
          showFeedback: true
        };
    }
  };

  const content = renderContent();

  // Label for primary CTA button
  const ctaLabel = os === 'android'
    ? <><Play size={18} className="fill-white" /> Get it on Google Play</>
    : os === 'ios'
    ? 'Join iOS Waitlist'
    : <><ArrowDown size={16} className="stroke-white" /> Get the App</>;

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
            <div className={`w-20 h-20 ${content.iconBg} rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm`}>
              {content.icon}
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
                {/* Primary CTA with dropdown for "other" OS */}
                <div className="relative">
                  <button
                    onClick={handleMobileAction}
                    className="w-full py-4 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] text-white rounded-xl font-semibold text-center transition-colors shadow-lg flex items-center justify-center gap-2"
                  >
                    {ctaLabel}
                  </button>

                  {/* Dropdown for unknown/desktop OS */}
                  {showDropdown && (
                    <div className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2 z-10 animate-in slide-in-from-top-2">
                      <a
                        href="https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-slate-50 text-slate-900 font-medium transition-colors"
                      >
                        <Play size={16} className="text-pink-500 fill-pink-500" />
                        Get for Android
                      </a>
                      <button
                        onClick={navigateToWaitlist}
                        className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-slate-50 text-slate-700 font-medium transition-colors"
                      >
                        <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center">
                          <div className="w-1 h-1 bg-slate-400 rounded-full" />
                        </div>
                        iOS Waitlist
                      </button>
                    </div>
                  )}
                </div>

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

            {/* Habit Feedback Form for 'none' tier */}
            {content.showFeedback && (
              <div className="flex flex-col gap-4 mt-2">
                {emailStatus === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-sm rounded-xl p-4 flex items-start gap-3">
                    <CheckCircle2 size={18} className="mt-0.5 shrink-0" />
                    <p className="font-medium">Thank you for sharing! We appreciate your insights on staying disciplined.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEmailSubmit} className="flex flex-col gap-3">
                    <div className="space-y-2">
                      <p className="text-sm font-semibold text-slate-800">We’d love to learn from you.</p>
                      <p className="text-xs text-slate-600 leading-relaxed">What tools or habits help you stay disciplined with your phone use?</p>
                    </div>
                    
                    <textarea
                      name="message"
                      placeholder="e.g., I use screen time limits, or I keep my phone in another room..."
                      required
                      className="w-full p-4 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all min-h-[100px] resize-none"
                    />

                    <div className="relative flex">
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <Mail className="h-4 w-4 text-slate-400" />
                      </div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email (we'll keep it private)"
                        className="w-full pl-9 pr-24 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm text-slate-900 placeholder:text-slate-400 outline-none transition-all"
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
                      <p className="text-red-500 text-xs mt-1 font-medium px-1">Oops! Something went wrong. Please try again.</p>
                    )}
                  </form>
                )}
              </div>
            )}

            <div className="w-full h-px bg-slate-100 my-2" />

            <button
              onClick={handleShare}
              className="w-full py-3.5 border-2 border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 rounded-xl font-medium transition-all flex items-center justify-center gap-2"
            >
              {shareStatus === 'copied' ? (
                <><CheckCircle2 size={18} className="text-green-500" /> Link Copied!</>
              ) : (
                <>{typeof navigator.share === 'function' ? <Share2 size={18} /> : <Copy size={18} />} Share this quiz</>
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
