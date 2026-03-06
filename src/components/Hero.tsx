import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import appIcon from '../../assets/images/app icon.png';
import DigitalWellnessAlert from './DigitalWellnessAlert';

const Hero = () => {
  const [showIosAlert, setShowIosAlert] = useState(false);

  return (
    <>
      {/* Navigation Bar */}
      <nav className="w-full absolute top-0 left-0 py-6 px-6 md:px-12 flex items-center justify-between z-10 bg-white/60 backdrop-blur-md border-b border-slate-200/50">
        <div className="flex items-center gap-3">
          <img src={appIcon} alt="Digital Alertness Logo" className="w-10 h-10 object-contain drop-shadow-[0_0_10px_rgba(236,72,153,0.2)]" />
          <span className="font-semibold text-lg tracking-tight">Digital Alertness</span>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 container mx-auto px-6 md:px-12 pt-32 pb-20 min-h-screen flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-6 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-pink-600 text-sm font-medium w-max mb-2 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
              Privacy-First Wellbeing
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Reclaim Your Time. <br/>
              <span className="text-slate-800">
                Break the <br className="hidden md:block"/>Doom-Scroll Loop.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-xl font-light">
              A privacy-first digital wellbeing app that gently nudges you every 20 minutes. 
              <span className="text-slate-800 font-medium"> No internet, no signups, no data harvesting.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a 
                href="https://play.google.com/store/apps/details?id=io.github.lekan128.digital_wellness"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-all duration-300 text-white px-8 py-4 rounded-2xl font-semibold shadow-[0_4px_14px_rgba(236,72,153,0.3)] hover:shadow-[0_6px_20px_rgba(236,72,153,0.4)] active:scale-95"
              >
                <div className="bg-white/20 p-1.5 rounded-full">
                  <Play size={18} className="fill-white" />
                </div>
                Get it on Google Play
              </a>
              
              <button 
                onClick={() => setShowIosAlert(true)}
                className="group relative flex items-center justify-center gap-3 bg-white hover:bg-slate-50 border border-slate-200 transition-all duration-300 text-slate-700 px-8 py-4 rounded-2xl font-medium active:scale-95 shadow-sm"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 opacity-70 group-hover:opacity-100 transition-opacity">
                  <path d="M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V15.34h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 3.34h-2.33v6.539C18.343 21.128 22 16.991 22 12c0-5.523-4.477-10-10-10z" className="hidden" />
                  <path d="M16.365 15.3c.01-.01.996-1.632 1.34-2.506h-2.1c-.246.544-.606 1.154-1.127 1.838-.9731.258-1.594-1.026-1.594-1.026-.14-.298-.242-.647-.242-.99 0-.824.286-1.657.88-2.298.508-.553 1.16-.92 1.85-1.025v-.32c-.006-.217.15-.39.366-.39h.03c1.037.054 1.834.407 2.455.97.433.393.81.994.81 1.637 0 .522-.192 1-.368 1.405-.205.474-.486.914-.846 1.312l-1.455 1.4zM16.59 7.72c-.85-.04-1.62.3-2.14.88-.5.56-.78 1.3-.78 2.05h1.99c.08-.43.32-.8.67-1.06.41-.3 1-.41 1.54-.26 0 0 .53-1.39-1.28-1.6zm-4.5 12.3c2.72.18 5.1-1.16 6.32-3.4l-1.87-.72c-.89 1.62-2.73 2.59-4.7 2.3-3.2-.47-5.5-3.55-4.83-6.83.56-2.75 2.9-4.82 5.67-4.82 1.6 0 3.03.68 4.02 1.84l1.45-1.47C16.89 5.4 15.03 4.5 12.78 4.5 8.35 4.5 4.6 8.34 4.6 13c0 4.6 3.6 8.36 7.48 8.02z" />
                </svg>
                <span>iOS Coming Soon</span>
              </button>
            </div>
            
            {showIosAlert && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-pink-500 text-sm mt-3 flex items-center gap-2 font-medium bg-pink-50 w-max px-3 py-1.5 rounded-lg border border-pink-100"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                We're perfecting the iOS experience. Join the waitlist soon!
              </motion.div>
            )}
          </motion.div>
          
          {/* Visual Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="relative lg:ml-auto w-full max-w-sm mx-auto lg:max-w-none"
          >
            {/* Decorative elements behind the phone */}
            <div className="absolute top-10 right-10 w-32 h-32 bg-pink-400/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-400/20 rounded-full blur-3xl"></div>
            
            <div className="relative mx-auto w-[280px] h-[580px] bg-white rounded-[50px] border-[8px] border-slate-100 shadow-2xl overflow-hidden flex flex-col items-center ring-1 ring-slate-200 z-10">
              {/* Dynamic Island Placeholder */}
              <div className="absolute top-4 w-24 h-7 bg-slate-900 rounded-full z-20"></div>
              
              {/* Phone Content */}
              <div className="w-full h-full relative flex flex-col items-center justify-start pt-16 px-4 pb-6 bg-gradient-to-b from-white to-slate-50">
                <DigitalWellnessAlert />

                <div className="absolute bottom-8 text-slate-400 text-[10px] uppercase tracking-widest font-semibold flex items-center justify-center w-full gap-2 left-0 right-0">
                  <Play size={10} className="fill-slate-400" /> App Usage Demo
                </div>
              </div>
            </div>
            
            {/* Floating feature card */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 top-1/3 bg-white/90 p-4 rounded-2xl backdrop-blur-xl border border-slate-100 shadow-xl hidden md:block z-30"
            >
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-slate-900 text-sm font-medium">100% Private</p>
                  <p className="text-slate-500 text-xs">No data leaves your device</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </main>
    </>
  );
};

export default Hero;
