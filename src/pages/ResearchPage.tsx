import { ArrowLeft, BookOpen, Clock, ShieldCheck, Settings } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function ResearchPage() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#F8F9FA] text-slate-900 font-sans selection:bg-pink-500/30">
      {/* Navigation */}
      <nav className="w-full sticky top-0 bg-white/80 backdrop-blur-md border-b border-slate-200/50 z-50 py-4 px-6 md:px-12">
        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-slate-600 hover:text-pink-600 font-medium transition-colors"
        >
          <ArrowLeft size={18} />
          Back to Home
        </button>
      </nav>

      <main className="container mx-auto px-6 md:px-12 py-16 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium w-max mb-6">
            <BookOpen size={14} />
            The Science of Digital Wellbeing
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-8">
            Evidence-Based <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-rose-400">Habit Architecture</span>
          </h1>

          <p className="text-xl text-slate-600 mb-12 leading-relaxed font-light">
            Digital Alertness isn't just a timer—it's a tool grounded in physiological realities and psychological research designed to break the modern scrolling epidemic without inducing user fatigue.
          </p>

          <div className="space-y-16">
            {/* The Problem */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-rose-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-rose-50 text-rose-500 flex items-center justify-center shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">The Problem: Escalating Consumption</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    The modern attention economy is highly optimized to capture and hold user attention through variable reward schedules and infinite progression loops. Recent studies indicate that the average American spends approximately <strong className="text-slate-900">five hours and sixteen minutes per day</strong> on their mobile device, representing a staggering <strong className="text-slate-900">14% increase</strong> from previous years <sup className="text-pink-500 font-bold"><a href="#ref-2">[2]</a></sup>.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    This hyper-engagement leads not only to significant productivity losses but also to measurable increases in physiological strain and mental fatigue.
                  </p>
                </div>
              </div>
            </section>

            {/* The Solution */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-pink-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-pink-50 text-pink-500 flex items-center justify-center shrink-0">
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">The Solution: The 20-20-20 Rule</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Instead of arbitrary time limits, Digital Alertness defaults to a 20-minute cycle. This is explicitly based on the medically recognized <strong className="text-slate-900">"20-20-20 Rule"</strong> for preventing digital eyestrain: every 20 minutes, a user should look at something 20 feet away for at least 20 seconds <sup className="text-pink-500 font-bold"><a href="#ref-13">[13]</a></sup>.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    By synchronizing psychological interventions (breaking the doom-scroll loop) with physiological necessities (eye health), the app creates a holistic wellness habit rather than a punitive restriction.
                  </p>
                </div>
              </div>
            </section>

            {/* Behavioral Nudges */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-indigo-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-500 flex items-center justify-center shrink-0">
                  <BookOpen size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">Behavioral Efficacy: Soft Nudges</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    Strict blocking applications often fail because they induce high frustration, leading users to simply delete the blocker <sup className="text-pink-500 font-bold"><a href="#ref-17">[17]</a></sup>. Digital Alertness employs a <strong className="text-slate-900">"Soft Nudge"</strong> approach instead.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    Research on digital nudges demonstrates that creating a brief moment of "mindful reflection" is more effective for long-term habit breaking. A soft nudge temporarily pauses the dopamine loop, returning autonomy to the user. This increases awareness and self-control without the irritation that accompanies strict blocks <sup className="text-pink-500 font-bold"><a href="#ref-16">[16]</a></sup>. Furthermore, digital detoxes using these methods have been shown to halve screen time and significantly improve attention spans <sup className="text-pink-500 font-bold"><a href="#ref-15">[15]</a></sup>.
                  </p>
                </div>
              </div>
            </section>

            {/* Customization */}
            <section className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-emerald-500"></div>
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center shrink-0">
                  <Settings size={20} />
                </div>
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-3">User Autonomy and Customization</h2>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    A tool is only effective if it seamlessly maps to an individual's unique workflow. Digital Alertness defaults to monitoring the heaviest attention sinks—<strong className="text-slate-900">TikTok, Instagram, YouTube, X (Twitter), Facebook, and Snapchat</strong>.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    However, users maintain absolute control. The ability to customize which applications trigger the 20-minute alert, and whether the alert uses sound or vibration, prevents the intervention from becoming neurochemically exhausting. This adaptability ensures long-term retention and continued utility.
                  </p>
                </div>
              </div>
            </section>
          </div>

          <hr className="my-16 border-slate-200" />

          {/* References */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-6">Works Cited</h3>
            <ol className="list-decimal pl-5 space-y-4 text-sm text-slate-500">
              <li id="ref-2">
                <span className="font-medium text-slate-700">Phone Screen Time Addiction & Usage - New Survey Data & Statistics</span> - Harmony Healthcare IT. 
                <a href="https://www.harmonyhit.com/phone-screen-time-statistics/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline ml-2">Read source</a>
              </li>
              <li id="ref-13" value={13}>
                <span className="font-medium text-slate-700">20-20-20 Rule: Does It Help Prevent Digital Eyestrain?</span> - Healthline.
                <a href="https://www.healthline.com/health/eye-health/20-20-20-rule" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline ml-2">Read source</a>
              </li>
              <li id="ref-15" value={15}>
                <span className="font-medium text-slate-700">Digital Detoxes Work. How Reduced Screen Time Will Help You</span> - Georgetown University.
                <a href="https://www.georgetown.edu/news/digital-detox-reduce-screen-time-benefits/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline ml-2">Read source</a>
              </li>
              <li id="ref-16" value={16}>
                <span className="font-medium text-slate-700">Digital Nudges for Reducing Social Media Screen Time</span> - Diva-Portal.org.
                <a href="https://www.diva-portal.org/smash/get/diva2:1980816/FULLTEXT01.pdf" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline ml-2">Read source</a>
              </li>
              <li id="ref-17" value={17}>
                <span className="font-medium text-slate-700">Impact of Limiting Time Spent on Social Media</span> - AAP.
                <a href="https://www.aap.org/en/patient-care/media-and-children/center-of-excellence-on-social-media-and-youth-mental-health/qa-portal/qa-portal-library/qa-portal-library-questions/impact-of-limiting-time-spent-on-social-media/" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline ml-2">Read source</a>
              </li>
            </ol>
          </div>

        </motion.div>
      </main>
    </div>
  );
}
