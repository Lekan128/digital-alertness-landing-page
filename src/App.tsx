import { useState } from 'react';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';
import appIcon from '../assets/images/app icon.png';

function App() {
  const [showIosAlert, setShowIosAlert] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 selection:bg-pink-500/30 overflow-hidden relative font-sans">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
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
                href="#"
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
            
            <div className="relative mx-auto w-[280px] h-[580px] bg-white rounded-[50px] border-[8px] border-slate-100 shadow-2xl overflow-hidden flex flex-col justify-center items-center ring-1 ring-slate-200">
              {/* Dynamic Island Placeholder */}
              <div className="absolute top-4 w-24 h-7 bg-slate-900 rounded-full z-20"></div>
              
              {/* Video Placeholder Content */}
              <div className="w-full h-full relative flex flex-col items-center justify-center p-6 bg-gradient-to-b from-white to-slate-50">
                
                {/* Simulated App UI */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="w-32 h-32 rounded-full border-4 border-pink-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.1)] relative mb-12 bg-white"
                >
                  <div className="absolute inset-0 rounded-full border border-pink-500/30 animate-ping" style={{ animationDuration: '3s' }}></div>
                  <span className="text-4xl font-light text-slate-900">20:00</span>
                </motion.div>
                
                <div className="text-center space-y-3 bg-white/80 backdrop-blur-md p-4 rounded-2xl w-full border border-slate-100 shadow-sm">
                  <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl mx-auto flex items-center justify-center mb-2 border border-pink-100">
                    <span className="text-xl font-bold">!</span>
                  </div>
                  <h3 className="text-slate-900 font-medium">Time for a break</h3>
                  <p className="text-slate-500 text-xs text-balance">Look away from your screen for 20 seconds to protect your eyes and mind.</p>
                </div>

                <div className="absolute bottom-8 text-slate-400 text-[10px] uppercase tracking-widest font-semibold flex items-center gap-2">
                  <Play size={10} className="fill-slate-400" /> App Usage Demo
                </div>
              </div>
            </div>
            
            {/* Floating feature card */}
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -left-12 top-1/3 bg-white/90 p-4 rounded-2xl backdrop-blur-xl border border-slate-100 shadow-xl hidden md:block"
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

      {/* Privacy by Design Section */}
      <section className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              Privacy by Design. <br className="md:hidden" />
              <span className="text-pink-500">Zero Compromise.</span>
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our PbD framework ensures your data never leaves your device. No internet access, no signup, and no login—effectively neutralizing the primary security risks associated with mobile applications. It works seamlessly in the background and only requires a minimal, one-time setup.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-pink-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">No Internet Required</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Runs entirely offline. Your habits and usage stats are stored locally, giving you profound peace of mind.</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-pink-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">No Accounts or Signups</h3>
              <p className="text-slate-600 text-sm leading-relaxed">Skip the tedious onboarding. Download, open once, and let it safeguard your time anonymously.</p>
            </div>
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm border border-slate-100 text-pink-500">
                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3">Zero Data Collection</h3>
              <p className="text-slate-600 text-sm leading-relaxed">No telemetry, no tracking pixels, no hidden analytics. We literally don't want your data.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 bg-slate-50 relative z-10 border-t border-slate-200">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
              The Competitive Advantage
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed">
              See why taking a minimal, privacy-first approach sets Digital Alertness apart from alternatives.
            </p>
          </div>

          <div className="max-w-5xl mx-auto overflow-hidden bg-white rounded-3xl border border-slate-200 shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="p-6 text-slate-500 font-medium text-sm border-b border-slate-200 w-1/4">Feature</th>
                    <th className="p-6 bg-pink-50/50 text-pink-600 font-bold text-lg border-b border-pink-100 text-center relative w-1/4">
                      Digital Alertness
                      <div className="absolute top-0 left-0 right-0 h-1 bg-pink-500"></div>
                    </th>
                    <th className="p-6 text-slate-900 font-semibold text-center border-b border-slate-200 w-1/4">Native "Digital Wellbeing"</th>
                    <th className="p-6 text-slate-900 font-semibold text-center border-b border-slate-200 w-1/4">Premium Suites</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Internet</td>
                    <td className="p-6 bg-pink-50/30 text-pink-600 font-medium text-center text-sm border-x border-pink-50/50">Not Required</td>
                    <td className="p-6 text-slate-500 text-center text-sm">Required</td>
                    <td className="p-6 text-slate-500 text-center text-sm">Required</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">User Registration</td>
                    <td className="p-6 bg-pink-50/30 text-pink-600 font-medium text-center text-sm border-x border-pink-50/50">None</td>
                    <td className="p-6 text-slate-500 text-center text-sm">Google/Apple Account</td>
                    <td className="p-6 text-slate-500 text-center text-sm">Subscription Required</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Data Collection</td>
                    <td className="p-6 bg-pink-50/30 text-pink-600 font-medium text-center text-sm border-x border-pink-50/50">Zero</td>
                    <td className="p-6 text-slate-500 text-center text-sm">High</td>
                    <td className="p-6 text-slate-500 text-center text-sm">High</td>
                  </tr>
                  <tr className="hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 font-medium text-slate-900">Interruption Method</td>
                    <td className="p-6 bg-pink-50/30 text-pink-600 font-medium text-center text-sm border-x border-pink-50/50">Configurable Alert</td>
                    <td className="p-6 text-slate-500 text-center text-sm">Silent Limit/Grayscale</td>
                    <td className="p-6 text-slate-500 text-center text-sm">Content Filtering/Blocking</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
