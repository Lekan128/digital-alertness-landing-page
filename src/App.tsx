import { Play, ArrowRight, BrainCircuit, Activity, Eye, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import appIcon from '../assets/images/app icon.png';
import Hero from './components/Hero';
import WaitlistSection from './components/WaitlistSection';

function App() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 selection:bg-pink-500/30 overflow-hidden relative font-sans">
      
      {/* Background Glow Effects */}
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-pink-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <Hero />

      {/* Privacy by Design Section */}
      <section className="py-24 bg-white relative z-10 border-t border-slate-100">
        <div className="container mx-auto px-6 md:px-12">
          {/* ... (existing PbD content) ... */}
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
                <ShieldCheck className="w-6 h-6" />
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

      {/* Research & Science Section */}
      <section className="py-24 bg-white relative z-10 border-t border-slate-100 overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50/50 -skew-x-12 transform origin-top right-[-10%] z-0"></div>
        
        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            {/* Content Side */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium w-max mb-6">
                <BrainCircuit size={14} />
                Evidence-Based Design
              </div>
              
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                Grounded in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Science.</span>
              </h2>
              
              <div className="space-y-6 mb-10">
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Activity className="text-pink-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">The 5-Hour Problem</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      The average American spends approx. 5 hours and 16 minutes per day on mobile devices—a 14% increase from previous years. Digital Alertness directly targets this escalating consumption.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="mt-1">
                    <Eye className="text-pink-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">The 20-20-20 Rule</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Our default 20-minute cycle isn't arbitrary. It's built on medically recognized strategies to prevent digital eyestrain: every 20 minutes, look 20 feet away for 20 seconds.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="mt-1">
                    <BrainCircuit className="text-pink-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-lg">Behavioral "Soft Nudges"</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Rigid blockers cause frustration and get deleted. Our "Soft Nudge" pauses the dopamine loop gracefully, returning autonomy and driving long-term habit changes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 mb-8">
                <h4 className="font-medium text-slate-900 mb-2">Total Customization</h4>
                <p className="text-sm text-slate-600">
                  Defaults to monitoring TikTok, Instagram, YouTube, X, Facebook, and Snapchat. But you retain absolute control over triggers and alert types (sound/vibration).
                </p>
              </div>

              <Link 
                to="/research"
                className="group inline-flex items-center gap-2 text-pink-600 font-semibold hover:text-pink-700 transition-colors"
              >
                Read the Science & References
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Visual Side */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-100/50 rounded-[3rem] transform rotate-3 scale-105"></div>
              <div className="bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl relative backdrop-blur-sm">
                <div className="grid gap-6">
                  <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 flex items-center justify-between">
                    <div>
                      <div className="text-sm text-slate-500 font-medium mb-1">Average screen time</div>
                      <div className="text-3xl font-bold text-slate-900">5h 16m <span className="text-pink-500 text-lg">+14%</span></div>
                    </div>
                    <Activity className="w-10 h-10 text-slate-300" />
                  </div>
                  
                  <div className="bg-pink-500 rounded-2xl p-6 text-white shadow-lg shadow-pink-500/20 transform hover:-translate-y-1 transition-transform">
                    <div className="text-pink-100 font-medium mb-2 opacity-90 text-sm uppercase tracking-wider">The Physiological Nudge</div>
                    <div className="text-2xl font-bold mb-1">20min • 20ft • 20sec</div>
                    <div className="text-pink-100 text-sm mt-2">Medically proven to reduce eyestrain and break dopamine loops.</div>
                  </div>
                </div>
              </div>
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

      {/* Waitlist Section */}
      <WaitlistSection />

      {/* Footer */}
      <footer className="bg-white py-12 border-t border-slate-100 relative z-10">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex items-center gap-3">
              <img src={appIcon} alt="Digital Alertness Logo" className="w-8 h-8 object-contain grayscale opacity-60" />
              <span className="font-semibold text-slate-900 tracking-tight">Digital Alertness</span>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
              <a href="#" className="text-pink-600 hover:text-pink-700 transition-colors">Privacy Policy (PbD)</a>
              <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors">Terms of Service</a>
              <a href="#" className="text-slate-500 hover:text-slate-800 transition-colors">Contact Us</a>
            </div>
            
            <div className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Digital Alertness. All rights reserved.
            </div>

          </div>
        </div>
      </footer>

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

    </div>
  );
}

export default App;
