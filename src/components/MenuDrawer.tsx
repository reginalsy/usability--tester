import React, { useState } from 'react';
import { X, Search, ChevronRight, Sun, TrendingUp, Newspaper, Mail, Check } from 'lucide-react';

interface MenuDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectCategory: (category: string) => void;
  onOpenEpaper: () => void;
  onOpenSubscribe: () => void;
  onSearch: (query: string) => void;
}

export const MenuDrawer: React.FC<MenuDrawerProps> = ({
  isOpen,
  onClose,
  onSelectCategory,
  onOpenEpaper,
  onOpenSubscribe,
  onSearch
}) => {
  const [searchVal, setSearchVal] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  if (!isOpen) return null;

  const sections = [
    {
      title: 'Singapore',
      sub: ['Housing', 'Transport', 'Courts & Crime', 'Health', 'Education', 'Environment']
    },
    {
      title: 'Asia',
      sub: ['SE Asia', 'East Asia', 'South Asia', 'Australia / NZ']
    },
    {
      title: 'World',
      sub: ['United States', 'Europe', 'Middle East']
    },
    {
      title: 'Opinion',
      sub: ['ST Editorial', 'Columnists', 'Forum Letters', 'Cartoons']
    },
    {
      title: 'Business',
      sub: ['Economy', 'Banking', 'Companies & Markets', 'Property']
    },
    {
      title: 'Life',
      sub: ['Food', 'Style & Beauty', 'Travel', 'Arts', 'Entertainment']
    },
    {
      title: 'Sport',
      sub: ['Football', 'Formula 1', 'Swimming', 'Schools']
    },
    {
      title: 'Visual',
      sub: ['Interactive Stories', 'Photo Galleries', 'Infographics']
    },
    {
      title: 'Podcasts',
      sub: ['Green Pulse', 'Asian Insider', 'Health Check', 'True Crimes']
    }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchVal.trim()) {
      onSearch(searchVal.trim());
      onClose();
    }
  };

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setNewsletterSubscribed(true);
      setTimeout(() => setNewsletterSubscribed(false), 3000);
      setEmailInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between overflow-y-auto">
          {/* Drawer Header */}
          <div>
            <div className="p-4 border-b border-gray-200 flex items-center justify-between bg-gray-50">
              <span className="font-masthead text-xl font-bold text-[#0c2340]">
                THE STRAITS TIMES
              </span>
              <button
                onClick={onClose}
                className="p-1.5 rounded-full hover:bg-gray-200 text-gray-600 transition-colors cursor-pointer"
                title="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Quick Live Snapshot Bar */}
            <div className="bg-[#0c2340] text-white px-4 py-2.5 flex items-center justify-between text-xs font-sans">
              <div className="flex items-center gap-1.5">
                <Sun className="w-4 h-4 text-amber-400" />
                <span>Singapore 31°C</span>
              </div>
              <div className="flex items-center gap-1.5">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span>STI 3,189.45 ▲ +0.45%</span>
              </div>
            </div>

            {/* Search Input in Drawer */}
            <form onSubmit={handleSearch} className="p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search articles, topics..."
                  value={searchVal}
                  onChange={(e) => setSearchVal(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-gray-50 border border-gray-300 rounded-sm focus:outline-hidden focus:border-[#00427a]"
                />
              </div>
            </form>

            {/* Subscriber & E-paper Quick Access Buttons */}
            <div className="p-4 grid grid-cols-2 gap-3 border-b border-gray-200 bg-slate-50">
              <button
                onClick={() => {
                  onOpenSubscribe();
                  onClose();
                }}
                className="bg-[#00427a] hover:bg-[#0c2340] text-white text-xs font-bold py-2 px-3 rounded-sm text-center cursor-pointer transition-colors"
              >
                Subscribe Now
              </button>
              <button
                onClick={() => {
                  onOpenEpaper();
                  onClose();
                }}
                className="border border-[#0c2340] text-[#0c2340] hover:bg-white text-xs font-bold py-2 px-3 rounded-sm flex items-center justify-center gap-1.5 cursor-pointer transition-colors"
              >
                <Newspaper className="w-3.5 h-3.5" />
                <span>E-paper</span>
              </button>
            </div>

            {/* Sections Accordion / Directory */}
            <div className="p-4 divide-y divide-gray-100">
              {sections.map((sec) => (
                <div key={sec.title} className="py-2.5">
                  <button
                    onClick={() => {
                      onSelectCategory(sec.title);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between text-left text-sm font-bold text-gray-900 hover:text-[#00427a] cursor-pointer"
                  >
                    <span>{sec.title}</span>
                    <ChevronRight className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="flex flex-wrap gap-x-3 gap-y-1 mt-1 pl-1">
                    {sec.sub.map((s) => (
                      <button
                        key={s}
                        onClick={() => {
                          onSelectCategory(sec.title);
                          onClose();
                        }}
                        className="text-xs text-gray-500 hover:text-[#00427a] cursor-pointer py-0.5"
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Drawer Footer Newsletter Sign-Up */}
          <div className="p-4 bg-gray-50 border-t border-gray-200 mt-6">
            <h5 className="font-bold text-xs uppercase tracking-wider text-gray-700 flex items-center gap-1.5 mb-1.5">
              <Mail className="w-3.5 h-3.5 text-[#00427a]" />
              ST Morning Briefing
            </h5>
            <p className="text-[11px] text-gray-500 mb-2.5">
              Get the top stories delivered to your inbox every weekday morning.
            </p>
            {newsletterSubscribed ? (
              <div className="bg-emerald-50 text-emerald-800 text-xs p-2 rounded-xs flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Subscribed! Check your inbox for confirmation.</span>
              </div>
            ) : (
              <form onSubmit={handleNewsletter} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  className="flex-1 text-xs px-2.5 py-1.5 bg-white border border-gray-300 rounded-xs focus:outline-hidden focus:border-[#00427a]"
                  required
                />
                <button
                  type="submit"
                  className="bg-[#0c2340] hover:bg-[#00427a] text-white text-xs font-semibold px-3 py-1.5 rounded-xs cursor-pointer"
                >
                  Join
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
