import React, { useState } from 'react';
import { ChevronDown, LogIn, Menu, Search, Bookmark, Newspaper, Sun, TrendingUp, X } from 'lucide-react';
import { AD_BANNER_DATA, TRENDING_TOPICS } from '../data/newsData';

interface HeaderProps {
  activeCategory: string | null;
  onSelectCategory: (category: string | null) => void;
  onSelectTrendingTag: (tag: string) => void;
  onOpenMenu: () => void;
  onOpenSubscribe: () => void;
  onOpenLogin: () => void;
  onOpenEpaper: () => void;
  onOpenSaved: () => void;
  onOpenAdDetails: () => void;
  onSearch: (query: string) => void;
  savedCount: number;
  isLoggedIn: boolean;
  edition: 'International' | 'Singapore';
  onChangeEdition: (edition: 'International' | 'Singapore') => void;
  onGoHome: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeCategory,
  onSelectCategory,
  onSelectTrendingTag,
  onOpenMenu,
  onOpenSubscribe,
  onOpenLogin,
  onOpenEpaper,
  onOpenSaved,
  onOpenAdDetails,
  onSearch,
  savedCount,
  isLoggedIn,
  edition,
  onChangeEdition,
  onGoHome,
}) => {
  const [editionDropdownOpen, setEditionDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [adDismissed, setAdDismissed] = useState(false);

  const categories = [
    'Singapore',
    'Asia',
    'World',
    'Opinion',
    'Life',
    'Business',
    'Sport',
    'Visual',
    'Podcasts',
  ];

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-40 shadow-xs">
      {/* Top Leaderboard Ad */}
      {!adDismissed && (
        <aside
          id="top-leaderboard-banner"
          className="bg-[#f0f2f5] py-2 sm:py-3.5 border-b border-gray-200 relative"
          data-purpose="top-leaderboard-banner"
        >
          <button
            onClick={() => setAdDismissed(true)}
            className="absolute right-2 top-2 p-1 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200"
            title="Dismiss advertisement"
            aria-label="Dismiss advertisement"
          >
            <X className="w-3.5 h-3.5" />
          </button>
          <div className="max-w-7xl mx-auto px-4 flex justify-center">
            <div
              onClick={onOpenAdDetails}
              className="bg-white border border-gray-300 shadow-xs flex items-stretch overflow-hidden max-w-2xl w-full h-[84px] cursor-pointer hover:border-gray-400 transition-colors"
            >
              {/* Ad Image Thumbnail */}
              <div className="w-1/3 bg-gray-200 relative overflow-hidden shrink-0">
                <img
                  alt="Investment banner thumbnail"
                  className="w-full h-full object-cover"
                  src={AD_BANNER_DATA.imageUrl}
                  referrerPolicy="no-referrer"
                />
              </div>
              {/* Ad Copy */}
              <div className="w-2/3 px-3 sm:px-4 py-2 flex flex-col justify-between bg-white">
                <div>
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">
                    {AD_BANNER_DATA.headline}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-[11px] text-gray-500 pt-1">
                  <span className="truncate">{AD_BANNER_DATA.sponsor}</span>
                  <span className="font-bold text-gray-700 hover:text-[#00427a] flex items-center tracking-wider uppercase text-[10px]">
                    {AD_BANNER_DATA.actionText}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Utility Nav Bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-1.5 sm:py-2 text-xs text-gray-700 flex justify-between items-center">
          {/* Left: Edition Switcher & E-paper */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <div className="relative">
              <button
                id="edition-selector-btn"
                onClick={() => setEditionDropdownOpen(!editionDropdownOpen)}
                className="flex items-center space-x-1 font-semibold text-gray-900 hover:text-[#00427a] cursor-pointer"
              >
                <span>{edition}</span>
                <ChevronDown className="w-3.5 h-3.5 text-gray-500" />
              </button>

              {editionDropdownOpen && (
                <div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-sm shadow-lg py-1 z-50">
                  <button
                    onClick={() => {
                      onChangeEdition('International');
                      setEditionDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                      edition === 'International'
                        ? 'font-bold text-[#00427a] bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>International Edition</span>
                    {edition === 'International' && <span>✓</span>}
                  </button>
                  <button
                    onClick={() => {
                      onChangeEdition('Singapore');
                      setEditionDropdownOpen(false);
                    }}
                    className={`w-full text-left px-3 py-1.5 text-xs flex items-center justify-between ${
                      edition === 'Singapore'
                        ? 'font-bold text-[#00427a] bg-blue-50'
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span>Singapore Edition</span>
                    {edition === 'Singapore' && <span>✓</span>}
                  </button>
                </div>
              )}
            </div>

            <div className="h-3 w-[1px] bg-gray-300 hidden sm:block"></div>

            <button
              id="epaper-nav-btn"
              onClick={onOpenEpaper}
              className="hover:text-[#00427a] font-medium text-gray-700 flex items-center space-x-1 cursor-pointer"
            >
              <Newspaper className="w-3.5 h-3.5 hidden sm:inline text-gray-500" />
              <span>E-paper</span>
            </button>

            <div className="hidden lg:flex items-center space-x-3 text-gray-500 text-[11px] pl-3 border-l border-gray-200">
              <span className="flex items-center gap-1">
                <Sun className="w-3.5 h-3.5 text-amber-500" />
                Singapore 31°C
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <TrendingUp className="w-3 h-3 text-emerald-600" />
                STI 3,189.45 (+0.45%)
              </span>
            </div>
          </div>

          {/* Right: Subscriptions, Bookmarks, Auth, Search Toggle */}
          <div className="flex items-center space-x-3 sm:space-x-5">
            <button
              id="saved-bookmarks-btn"
              onClick={onOpenSaved}
              className="flex items-center space-x-1 hover:text-[#00427a] font-medium text-gray-700 cursor-pointer relative"
              title="Saved Articles"
            >
              <Bookmark className="w-3.5 h-3.5 text-gray-600" />
              <span className="hidden sm:inline">Saved</span>
              {savedCount > 0 && (
                <span className="ml-0.5 bg-[#d8232a] text-white text-[10px] font-bold px-1.5 py-0.2 rounded-full">
                  {savedCount}
                </span>
              )}
            </button>

            <button
              id="subscribe-nav-btn"
              onClick={onOpenSubscribe}
              className="hover:text-[#00427a] font-semibold text-[#0c2340] cursor-pointer"
            >
              Subscribe
            </button>

            <button
              id="login-nav-btn"
              onClick={onOpenLogin}
              className="flex items-center space-x-1 hover:text-[#00427a] font-medium text-gray-700 cursor-pointer"
            >
              <LogIn className="w-3.5 h-3.5 text-gray-600" />
              <span>{isLoggedIn ? 'Account' : 'Log in'}</span>
            </button>

            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-1 hover:text-[#00427a] text-gray-600 cursor-pointer"
              title="Search news"
            >
              <Search className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Collapsible Quick Search Bar */}
        {searchOpen && (
          <div className="bg-gray-50 border-t border-gray-200 py-2.5 px-4">
            <form onSubmit={handleSearchSubmit} className="max-w-2xl mx-auto flex items-center gap-2">
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search The Straits Times archive, topics, or authors..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-1.5 text-sm bg-white border border-gray-300 rounded-sm focus:outline-hidden focus:border-[#00427a]"
                  autoFocus
                />
              </div>
              <button
                type="submit"
                className="bg-[#0c2340] hover:bg-[#00427a] text-white px-4 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-sm"
              >
                Search
              </button>
              <button
                type="button"
                onClick={() => setSearchOpen(false)}
                className="text-gray-500 hover:text-gray-800 text-xs px-2"
              >
                Cancel
              </button>
            </form>
          </div>
        )}
      </div>

      {/* Main Masthead Brand Title */}
      <div className="max-w-7xl mx-auto px-4 pt-3 pb-3 sm:pt-4 sm:pb-4 flex justify-center items-center">
        <button
          id="masthead-home-btn"
          onClick={onGoHome}
          className="text-center group cursor-pointer focus:outline-hidden"
        >
          <h1 className="font-masthead text-[36px] sm:text-[46px] md:text-[62px] text-[#0c2340] tracking-tight uppercase leading-none select-none group-hover:opacity-95 transition-opacity">
            THE STRAITS TIMES
          </h1>
        </button>
      </div>

      {/* Primary Topic Navigation & Hamburger Menu */}
      <nav className="border-t border-b border-gray-200 bg-white" data-purpose="primary-navigation">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm font-medium">
          <ul className="flex items-center space-x-5 sm:space-x-6 lg:space-x-8 py-2.5 overflow-x-auto whitespace-nowrap scrollbar-none text-gray-800 font-sans">
            <li>
              <button
                onClick={() => {
                  onSelectCategory(null);
                  onGoHome();
                }}
                className={`transition-colors cursor-pointer ${
                  activeCategory === null
                    ? 'text-[#0c2340] font-extrabold border-b-2 border-[#0c2340] pb-0.5'
                    : 'text-gray-800 hover:text-[#00427a]'
                }`}
              >
                Top Stories
              </button>
            </li>
            {categories.map((cat) => {
              const isSelected = activeCategory === cat;
              return (
                <li key={cat}>
                  <button
                    onClick={() => onSelectCategory(cat)}
                    className={`transition-colors cursor-pointer ${
                      isSelected
                        ? 'text-[#0c2340] font-extrabold border-b-2 border-[#0c2340] pb-0.5'
                        : 'text-gray-800 hover:text-[#00427a]'
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Hamburger Menu Trigger */}
          <button
            id="menu-drawer-trigger-btn"
            onClick={onOpenMenu}
            className="flex items-center space-x-1.5 py-2 pl-4 text-gray-800 hover:text-[#00427a] shrink-0 font-medium border-l border-gray-200 ml-3 cursor-pointer"
            type="button"
          >
            <Menu className="w-5 h-5 text-gray-700" />
            <span className="text-sm">Menu</span>
          </button>
        </div>
      </nav>

      {/* Trending Topics Strip */}
      <section className="bg-gray-50 border-b border-gray-200 py-2" data-purpose="trending-topics">
        <div className="max-w-7xl mx-auto px-4 flex items-center space-x-3 text-xs overflow-x-auto whitespace-nowrap scrollbar-none">
          <span className="font-bold text-gray-900 uppercase tracking-wider text-[11px] shrink-0">
            Trending:
          </span>
          {TRENDING_TOPICS.map((topic, idx) => (
            <React.Fragment key={topic}>
              {idx > 0 && <span className="text-gray-300">•</span>}
              <button
                onClick={() => onSelectTrendingTag(topic)}
                className="text-gray-600 hover:text-[#00427a] hover:underline cursor-pointer transition-colors"
              >
                {topic}
              </button>
            </React.Fragment>
          ))}
        </div>
      </section>
    </header>
  );
};
