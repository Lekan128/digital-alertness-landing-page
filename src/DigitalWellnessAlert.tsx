import appIcon from '../assets/images/app icon.png';

const DigitalWellnessAlert = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-gray-100 min-h-screen">
      {/* Main Notification Container */}
      <div className="flex w-full max-w-md items-start bg-white/80 backdrop-blur-md rounded-[2.5rem] p-5 shadow-lg border border-gray-100 font-sans">
        
        {/* App Icon Container */}
        <div className="flex-shrink-0 mr-4">
          <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center border border-gray-200 shadow-sm overflow-hidden">
            <img 
              src={appIcon} 
              alt="App Icon" 
              className="w-10 h-10 object-contain"
            />
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-grow pt-1">
          <div className="flex justify-between items-center mb-0.5">
            <h3 className="text-gray-900 font-semibold text-[1.05rem] tracking-tight">
              Digital Wellness Alert
            </h3>
            <span className="text-gray-400 text-sm font-medium">
              00:27
            </span>
          </div>
          
          <p className="text-gray-700 leading-snug text-[1.05rem]">
            Time's Up! You've successfully used 20 minutes on this app.
          </p>

          {/* Action Button */}
          <div className="mt-5 flex justify-center">
            <button className="text-black font-semibold text-lg hover:opacity-70 transition-opacity">
              Dismiss
            </button>
          </div>
        </div>

        {/* Chevron Icon */}
        <div className="ml-2 pt-2">
          <svg 
            className="w-5 h-5 text-gray-400" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default DigitalWellnessAlert;
