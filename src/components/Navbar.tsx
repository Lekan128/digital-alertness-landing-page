import { useState } from 'react';
import { Play, ArrowDown } from 'lucide-react';
import appIcon from '../../assets/images/app icon.png';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
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

  const handleMobileAction = () => {
    if (os === 'android') {
      window.open('https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness', '_blank');
    } else if (os === 'ios') {
      scrollToWaitlist();
    } else {
      setShowDropdown(!showDropdown);
    }
  };

//   const scrollToWaitlist = () => {
//     document.getElementById('waitlist')?.scrollIntoView({ behavior: 'smooth' });
//     setShowDropdown(false);
//   };
  const scrollToWaitlist = () => {
    const element = document.getElementById('waitlist');
    const navbarHeight = 80; // Adjust this to match your Navbar height

    if (element) {
        const top = element.getBoundingClientRect().top + window.pageYOffset - navbarHeight;
        window.scrollTo({ top, behavior: 'smooth' });
    }
    
    setShowDropdown(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 bg-white/70 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Left Side: Logo & Text */}
        <div className="flex items-center gap-3">
          <img src={appIcon} alt="Digital Alertness Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(236,72,153,0.2)]" />
          <span className="font-semibold text-lg tracking-tight text-slate-900">Digital Alertness</span>
        </div>

        {/* Right Side: Desktop Buttons (Hidden on mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <button 
            onClick={scrollToWaitlist}
            className="text-slate-600 hover:text-slate-900 font-medium px-4 py-2 rounded-xl transition-colors"
          >
            iOS Waitlist
          </button>
          <a 
            href="https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md shadow-pink-500/20 active:scale-95 transition-all"
          >
            <Play size={16} className="fill-white" />
            Get for Android
          </a>
        </div>

        {/* Right Side: Mobile Single Action & Dropdown */}
        <div className="md:hidden relative">
          <button 
            onClick={handleMobileAction}
            className="flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-5 py-2.5 rounded-xl font-semibold shadow-md shadow-pink-500/20 active:scale-95 transition-all text-sm"
          >
            {os === 'android' ? (
              <><Play size={16} className="fill-white" /> Get App</>
            ) : os === 'ios' ? (
              'Join Waitlist'
            ) : (
              <><ArrowDown size={16} className="stroke-white" /> Get the App</>
            )}
          </button>

          {/* Mobile Dropdown for Unknown OS / Desktop Viewers squeezing screen */}
          {showDropdown && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden py-2 animate-in slide-in-from-top-2">
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
                onClick={scrollToWaitlist}
                className="flex items-center gap-3 w-full px-4 py-3 text-left hover:bg-slate-50 text-slate-700 font-medium transition-colors"
              >
                <div className="w-4 h-4 rounded-full border border-slate-400 flex items-center justify-center">
                  <div className="w-1 h-1 bg-slate-400 rounded-full"></div>
                </div>
                iOS Waitlist
              </button>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
