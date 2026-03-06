import { motion } from 'framer-motion';
import appIcon from '../../assets/images/app icon.png';

const DigitalWellnessAlert = () => {
return (
<motion.div
animate={{ scale: [1, 1.03, 1] }}
transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
className="w-full relative rounded-full border-4 border-pink-500/20 flex items-center justify-center shadow-[0_0_20px_rgba(236,72,153,0.1)] relative mb-12 bg-white"
>
{/* Pulsating Glow Behind Notification */}

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
);
};

export default DigitalWellnessAlert;
