import { ExternalLink } from 'lucide-react';
import appIcon from '../../assets/images/app icon.png';

interface FooterSectionProps {
  onOpenContactModal: () => void;
}

const FooterSection = ({ onOpenContactModal }: FooterSectionProps) => {
  return (
    <footer className="bg-white py-12 border-t border-slate-100 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-3">
             <img src={appIcon} alt="Digital Alertness Logo" className="w-8 h-8 object-contain grayscale opacity-60" />
            <span className="font-semibold text-slate-900 tracking-tight">Digital Alertness</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-pink-600 hover:text-pink-700 transition-colors">
              Privacy Policy (PbD) <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-1 text-slate-500 hover:text-slate-800 transition-colors">
              Terms of Service <ExternalLink size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
            </a>
            <button type="button" onClick={onOpenContactModal} className="text-slate-500 hover:text-slate-800 transition-colors">Contact Us</button>
          </div>
          
          <div className="text-slate-400 text-sm">
            &copy; {new Date().getFullYear()} Digital Alertness. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
