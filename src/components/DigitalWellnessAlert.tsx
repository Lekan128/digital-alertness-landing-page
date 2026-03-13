import { motion } from 'framer-motion';
import appIcon from '../../assets/images/app icon.png';

const DigitalWellnessAlert = () => {
return (
  <div>
  <motion.div
    animate={{ scale: [1, 1.03, 1] }}
    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    className="w-full relative"
  >
{/* Pulsating Glow Behind Notification */}

   <div 
    className="absolute inset-0 rounded-3xl border border-pink-500/40 animate-ping" 
    style={{ animationDuration: '3s' }}
  />

  {/* The Notification Card */}
  <div className="relative w-full flex flex-col bg-white/95 backdrop-blur-md rounded-3xl p-3 shadow-lg border border-slate-100/50">
    <div className="flex items-start gap-2">
      {/* App Icon */}
      <div className="flex-shrink-0">
        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center border border-slate-100 shadow-sm overflow-hidden p-1.5">
          <img src={appIcon} alt="App Icon" className="w-full h-full object-contain" />
        </div>
      </div>
      {/* Content */}
      <div className="flex-grow min-w-0 pt-0.5">
        <div className="flex justify-between items-center mb-0.5">
          <h3 className="text-slate-900 font-semibold text-xs tracking-tight truncate">Digital Wellness Alert</h3>
          {/* <span className="text-slate-400 text-[9px] font-medium ml-1 flex-shrink-0">00:27</span> */}
        </div>
        <p className="text-slate-600 leading-tight text-[10px] pr-2">Time's Up! You've successfully used 20 minutes on this app.</p>
      </div>
      {/* Chevron */}
      <div className="flex-shrink-0 pt-1">
        <svg className="w-3 h-3 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" /></svg>
      </div>
    </div>
    {/* Action Button */}
    <div className="mt-3 flex justify-center border-t border-slate-50 pt-2">
      <button className="text-slate-800 font-semibold text-xs hover:opacity-70 transition-opacity">Dismiss</button>
    </div>
  </div>
</motion.div>

    {/* <div className="text-center space-y-3 bg-white/80 backdrop-blur-md p-4 rounded-2xl w-full border border-slate-100 shadow-sm">
      <div className="w-10 h-10 bg-pink-50 text-pink-600 rounded-xl mx-auto flex items-center justify-center mb-2 border border-pink-100">
        <span className="text-xl font-bold">!</span>
      </div>
      <h3 className="text-slate-900 font-medium">Time for a break</h3>
      <p className="text-slate-500 text-xs text-balance">Look away from your screen for 20 seconds to protect your eyes and mind.</p>
    </div> */}
  </div>
);
};

export default DigitalWellnessAlert;
