import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Download, Calendar } from 'lucide-react';

interface EpaperModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const EpaperModal: React.FC<EpaperModalProps> = ({ isOpen, onClose }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);

  if (!isOpen) return null;

  const totalPages = 32;

  const pages = [
    {
      num: 1,
      title: 'Page 1: Front Page (National & Global)',
      headlines: [
        'US Fed raises interest rates for first time in 3 years',
        'Singaporean in critical condition after bus accident in Taipei',
        'HDB resale prices climb 1.5% in February'
      ]
    },
    {
      num: 2,
      title: 'Page 2: Home & Community News',
      headlines: [
        'National Museum completes historic gallery overhaul',
        'Weekend pop-up bazaars redefine neighborhood retail',
        'Smart urban transport pilot deployed in Punggol'
      ]
    },
    {
      num: 3,
      title: 'Page 3: Business & Financial Markets',
      headlines: [
        'STI gains 14.2 points on banking resilience',
        'Malaysia central bank keeps benchmark rate at 3%',
        'China targets 5% growth with fiscal support'
      ]
    },
    {
      num: 4,
      title: 'Page 4: Opinion & Forum',
      headlines: [
        'From petrodollar to AI dollar: Greenback hegemony',
        'Governing algorithms before catastrophic doomsday fear',
        'Forum: Preserving urban green spaces'
      ]
    }
  ];

  const currentPageData = pages[currentPage - 1] || pages[0];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6">
      <div className="bg-[#1e293b] text-white rounded-xs max-w-5xl w-full h-[90vh] flex flex-col justify-between shadow-2xl border border-slate-700">
        {/* Top bar */}
        <div className="p-3 sm:p-4 border-b border-slate-700 flex items-center justify-between bg-slate-900">
          <div className="flex items-center gap-3">
            <span className="font-masthead text-base sm:text-lg font-bold text-white">
              THE STRAITS TIMES
            </span>
            <span className="text-xs bg-red-600 px-2 py-0.5 rounded-xs font-bold uppercase tracking-wider">
              E-Paper
            </span>
            <span className="text-xs text-slate-400 hidden sm:flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              Thursday Edition
            </span>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-xs text-xs text-slate-300">
              <button
                onClick={() => setZoomLevel(Math.max(0.8, zoomLevel - 0.1))}
                className="hover:text-white p-1 cursor-pointer"
                title="Zoom out"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="w-12 text-center font-mono">{Math.round(zoomLevel * 100)}%</span>
              <button
                onClick={() => setZoomLevel(Math.min(1.4, zoomLevel + 0.1))}
                className="hover:text-white p-1 cursor-pointer"
                title="Zoom in"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>

            <button
              onClick={onClose}
              className="p-1 text-slate-400 hover:text-white rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Newspaper Broadsheet Preview Canvas */}
        <div className="flex-1 overflow-auto p-4 sm:p-8 flex items-center justify-center bg-[#0f172a]">
          <div
            style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'center' }}
            className="w-full max-w-2xl bg-white text-gray-900 p-8 shadow-2xl border border-gray-400 min-h-[600px] flex flex-col justify-between transition-transform duration-150"
          >
            {/* Broadsheet Masthead Header */}
            <div className="border-b-4 border-black pb-3 text-center">
              <div className="flex items-center justify-between text-[10px] font-sans text-gray-600 border-b border-gray-300 pb-1 mb-2">
                <span>ESTABLISHED 1845</span>
                <span>THURSDAY, SPECIAL EDITION</span>
                <span>$1.50 (MCI (P) 048/09/2023)</span>
              </div>
              <h1 className="font-masthead text-4xl sm:text-5xl font-black tracking-tight text-gray-950">
                THE STRAITS TIMES
              </h1>
              <p className="text-[11px] font-serif italic text-gray-700 mt-1">
                {currentPageData.title}
              </p>
            </div>

            {/* Broadsheet Columns Simulation */}
            <div className="my-6 grid grid-cols-2 gap-6 text-left flex-1 border-b border-gray-300 pb-6">
              <div className="space-y-4">
                <h3 className="font-serif font-black text-xl leading-tight text-gray-950">
                  {currentPageData.headlines[0]}
                </h3>
                <p className="font-serif text-xs leading-relaxed text-gray-800">
                  Policymakers concluded their landmark meeting signaling sustained measures to control global core pressures, with regional financial desks tracking developments closely.
                </p>
                <div className="aspect-[4/3] bg-gray-200 border border-gray-300 flex items-center justify-center text-xs text-gray-500 font-serif italic">
                  [Press Conference Photo Feed: Jerome Powell]
                </div>
              </div>

              <div className="space-y-4 border-l border-gray-200 pl-4">
                <h4 className="font-serif font-bold text-base leading-snug text-gray-950">
                  {currentPageData.headlines[1]}
                </h4>
                <p className="font-serif text-xs leading-relaxed text-gray-700">
                  Local authorities and hospital trauma teams deployed specialized resources, providing comprehensive emergency assistance.
                </p>
                <div className="border-t border-gray-200 pt-3">
                  <h4 className="font-serif font-bold text-sm leading-snug text-gray-950">
                    {currentPageData.headlines[2]}
                  </h4>
                  <p className="font-serif text-xs leading-relaxed text-gray-600 mt-1">
                    Strong demand across mature estates continues to shape transaction volume in prime quarters.
                  </p>
                </div>
              </div>
            </div>

            {/* Page Footer */}
            <div className="flex items-center justify-between text-[11px] font-serif text-gray-500">
              <span>THE STRAITS TIMES • SINGAPORE</span>
              <span className="font-bold text-gray-900">PAGE {currentPage}</span>
              <span>WWW.STRAITSTIMES.COM</span>
            </div>
          </div>
        </div>

        {/* Bottom Pagination & Controls */}
        <div className="p-3 bg-slate-900 border-t border-slate-700 flex items-center justify-between text-xs text-slate-300">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-xs flex items-center gap-1 cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous Page</span>
            </button>
            <span className="font-mono text-slate-400">
              Page {currentPage} of {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 disabled:opacity-40 rounded-xs flex items-center gap-1 cursor-pointer"
            >
              <span>Next Page</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => alert('Downloading PDF page archive for subscriber')}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xs flex items-center gap-1.5 cursor-pointer text-xs"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
