import React from 'react';

interface QuizProgressBarProps {
  current: number;
  total: number;
}

const QuizProgressBar: React.FC<QuizProgressBarProps> = ({ current, total }) => {
  const progressPercentage = (current / total) * 100;

  return (
    <div className="sticky top-6 z-40 mb-8 max-w-md mx-auto transition-all duration-300">
      <div className="bg-white/70 backdrop-blur-md border border-slate-200/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 rounded-3xl">
        <div className="flex justify-between items-end mb-3">
          <span className="text-sm font-semibold text-slate-600 tracking-wider">
            Question {current} of {total}
          </span>
          <span className="text-xs font-bold text-pink-600 bg-pink-100/80 px-2.5 py-0.5 rounded-full">
            {Math.round(progressPercentage)}%
          </span>
        </div>
        <div className="w-full h-2 bg-slate-200/60 rounded-full overflow-hidden shadow-inner">
          <div 
            className="h-full bg-[var(--color-primary)] rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QuizProgressBar;
