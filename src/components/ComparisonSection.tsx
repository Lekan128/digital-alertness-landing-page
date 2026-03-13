const ComparisonSection = () => {
  return (
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
  );
};

export default ComparisonSection;
