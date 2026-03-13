import { ShieldCheck } from 'lucide-react';

const PrivacySection = () => {
  return (
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
  );
};

export default PrivacySection;
