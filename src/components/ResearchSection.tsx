import { BrainCircuit, Activity, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const ResearchSection = () => {
  return (
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
  );
};

export default ResearchSection;
