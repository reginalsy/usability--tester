import React from 'react';
import { X, ExternalLink, Shield, CheckCircle2, TrendingUp, Globe2 } from 'lucide-react';
import { AD_BANNER_DATA } from '../data/newsData';

interface AdDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AdDetailsModal: React.FC<AdDetailsModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xs max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-4">
          <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">
            SPONSORED FEATURE • STRAITSTIMES.COM
          </span>
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#0c2340] leading-snug">
            {AD_BANNER_DATA.headline}
          </h3>
        </div>

        <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-4 border border-gray-200">
          <img
            src={AD_BANNER_DATA.imageUrl}
            alt="Trading platform showcase"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-3 text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
          <p>
            Tired of juggling separate brokerages for Singapore counters and overseas blue-chips? Discover how modern multi-market platforms unite local SGX stocks, REITs, and US/Hong Kong equities under a unified low-cost custodian account.
          </p>

          <div className="grid grid-cols-2 gap-3 py-2">
            <div className="p-3 bg-slate-50 border border-gray-200 rounded-xs">
              <div className="flex items-center gap-1.5 text-[#00427a] font-bold text-xs mb-1">
                <Globe2 className="w-4 h-4" /> Global Execution
              </div>
              <p className="text-[11px] text-gray-600">
                Direct market access to US, SG, HK, and Tokyo exchanges in real-time.
              </p>
            </div>
            <div className="p-3 bg-slate-50 border border-gray-200 rounded-xs">
              <div className="flex items-center gap-1.5 text-emerald-700 font-bold text-xs mb-1">
                <Shield className="w-4 h-4" /> MAS Regulated
              </div>
              <p className="text-[11px] text-gray-600">
                Capital Markets Services licensee with segregated trust accounts.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 flex items-center justify-between">
          <span className="text-[11px] text-gray-500">
            straitstimes.com / Special Advertising Section
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-[#00427a] hover:bg-[#0c2340] text-white text-xs font-bold uppercase tracking-wider rounded-xs cursor-pointer flex items-center gap-1.5 transition-colors"
          >
            <span>Learn More</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
