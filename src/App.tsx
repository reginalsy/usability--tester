import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { FrontPage } from './components/FrontPage';
import { ArticleView } from './components/ArticleView';
import { CategoryView } from './components/CategoryView';
import { VisualStoryModal } from './components/VisualStoryModal';
import { MenuDrawer } from './components/MenuDrawer';
import { SubscribeModal } from './components/SubscribeModal';
import { LoginModal } from './components/LoginModal';
import { EpaperModal } from './components/EpaperModal';
import { SavedArticlesModal } from './components/SavedArticlesModal';
import { AdDetailsModal } from './components/AdDetailsModal';
import { Footer } from './components/Footer';
import { ALL_ARTICLES, LEAD_ARTICLE } from './data/newsData';
import { Article, VisualStory } from './types';
import { Search, ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function App() {
  const [currentView, setCurrentView] = useState<'front_page' | 'article' | 'category' | 'search'>('front_page');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedVisualStory, setSelectedVisualStory] = useState<VisualStory | null>(null);

  // Modals & Drawers state
  const [menuDrawerOpen, setMenuDrawerOpen] = useState(false);
  const [subscribeModalOpen, setSubscribeModalOpen] = useState(false);
  const [loginModalOpen, setLoginModalOpen] = useState(false);
  const [epaperModalOpen, setEpaperModalOpen] = useState(false);
  const [savedModalOpen, setSavedModalOpen] = useState(false);
  const [adDetailsModalOpen, setAdDetailsModalOpen] = useState(false);

  // User & Edition state
  const [edition, setEdition] = useState<'International' | 'Singapore'>('International');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState('subscriber@straitstimes.com');
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Bookmarks state with localStorage persistence
  const [savedArticleIds, setSavedArticleIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('st_saved_articles');
      return saved ? JSON.parse(saved) : ['fed-rate-hike-2024'];
    } catch {
      return ['fed-rate-hike-2024'];
    }
  });

  // Search state
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    try {
      localStorage.setItem('st_saved_articles', JSON.stringify(savedArticleIds));
    } catch (e) {
      console.error(e);
    }
  }, [savedArticleIds]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticle(article);
    setCurrentView('article');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectCategory = (category: string | null) => {
    if (!category) {
      setSelectedCategory(null);
      setCurrentView('front_page');
    } else {
      setSelectedCategory(category);
      setCurrentView('category');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectTrendingTag = (tag: string) => {
    setSearchQuery(tag);
    setCurrentView('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    setCurrentView('search');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleBookmark = (articleId: string) => {
    setSavedArticleIds((prev) => {
      if (prev.includes(articleId)) {
        showToast('Removed from saved bookmarks');
        return prev.filter((id) => id !== articleId);
      } else {
        showToast('Article saved to bookmarks');
        return [...prev, articleId];
      }
    });
  };

  const handleRemoveBookmark = (articleId: string) => {
    setSavedArticleIds((prev) => prev.filter((id) => id !== articleId));
    showToast('Removed from bookmarks');
  };

  const handleClearAllBookmarks = () => {
    setSavedArticleIds([]);
    showToast('Cleared all bookmarks');
  };

  const handleSubscribeSuccess = () => {
    setIsLoggedIn(true);
    showToast('Thank you! Your All-Access subscription is now active.');
  };

  const handleLogin = (email: string) => {
    setIsLoggedIn(true);
    setUserEmail(email);
    showToast(`Signed in as ${email}`);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    showToast('Signed out of SPH Media ID');
  };

  // Filtered lists
  const savedArticles = ALL_ARTICLES.filter((a) => savedArticleIds.includes(a.id));
  const categoryArticles = selectedCategory
    ? ALL_ARTICLES.filter((a) => a.category.toLowerCase() === selectedCategory.toLowerCase())
    : ALL_ARTICLES;

  const searchResults = searchQuery
    ? ALL_ARTICLES.filter((a) => {
        const q = searchQuery.toLowerCase().replace('#', '').trim();
        return (
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.category.toLowerCase().includes(q) ||
          (a.subcategoryTag && a.subcategoryTag.toLowerCase().includes(q)) ||
          (a.trendingTag && a.trendingTag.toLowerCase().includes(q)) ||
          (a.author && a.author.toLowerCase().includes(q))
        );
      })
    : [];

  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 left-1/2 -translate-x-1/2 z-50 bg-[#0c2340] text-white px-5 py-2.5 rounded-sm shadow-2xl flex items-center gap-2.5 text-sm font-medium animate-in fade-in slide-in-from-top-3">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Main Masthead & Navigation Header */}
      <Header
        activeCategory={currentView === 'category' ? selectedCategory : null}
        onSelectCategory={handleSelectCategory}
        onSelectTrendingTag={handleSelectTrendingTag}
        onOpenMenu={() => setMenuDrawerOpen(true)}
        onOpenSubscribe={() => setSubscribeModalOpen(true)}
        onOpenLogin={() => setLoginModalOpen(true)}
        onOpenEpaper={() => setEpaperModalOpen(true)}
        onOpenSaved={() => setSavedModalOpen(true)}
        onOpenAdDetails={() => setAdDetailsModalOpen(true)}
        onSearch={handleSearch}
        savedCount={savedArticleIds.length}
        isLoggedIn={isLoggedIn}
        edition={edition}
        onChangeEdition={(ed) => {
          setEdition(ed);
          showToast(`Switched to ${ed} edition`);
        }}
        onGoHome={() => {
          setCurrentView('front_page');
          setSelectedCategory(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      {/* Dynamic Views */}
      <div className="flex-1">
        {currentView === 'front_page' && (
          <FrontPage
            onSelectArticle={handleSelectArticle}
            onSelectVisualStory={(story) => setSelectedVisualStory(story)}
            onSelectCategory={handleSelectCategory}
          />
        )}

        {currentView === 'article' && selectedArticle && (
          <ArticleView
            article={selectedArticle}
            onBack={() => setCurrentView('front_page')}
            onSelectArticle={handleSelectArticle}
            relatedArticles={ALL_ARTICLES.filter((a) => a.id !== selectedArticle.id)}
            isBookmarked={savedArticleIds.includes(selectedArticle.id)}
            onToggleBookmark={handleToggleBookmark}
          />
        )}

        {currentView === 'category' && selectedCategory && (
          <CategoryView
            category={selectedCategory}
            articles={categoryArticles}
            onSelectArticle={handleSelectArticle}
            onBackToHome={() => {
              setCurrentView('front_page');
              setSelectedCategory(null);
            }}
          />
        )}

        {currentView === 'search' && (
          <main className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex items-center justify-between pb-3 border-b border-gray-200 text-xs mb-6">
              <button
                onClick={() => setCurrentView('front_page')}
                className="flex items-center gap-1.5 font-bold text-[#0c2340] hover:text-[#00427a] cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Front Page</span>
              </button>
              <span className="text-gray-500 font-sans">
                Search Results: "{searchQuery}"
              </span>
            </div>

            <div className="border-b-4 border-[#0c2340] pb-3 mb-8 flex items-center justify-between">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0c2340]">
                  Search Results for <span className="italic">"{searchQuery}"</span>
                </h2>
                <p className="text-xs text-gray-500 mt-1 font-sans">
                  Found {searchResults.length} matching stories in the Straits Times index
                </p>
              </div>
            </div>

            {searchResults.length === 0 ? (
              <div className="py-16 text-center bg-gray-50 border border-gray-200">
                <Search className="w-12 h-12 text-gray-300 mx-auto mb-3" />
                <p className="font-serif text-gray-700 text-lg">No matches found for "{searchQuery}"</p>
                <p className="text-xs text-gray-500 mt-1">
                  Try searching for keywords like "Fed", "Taiwan", "HDB", "rates", or "opinion".
                </p>
                <button
                  onClick={() => handleSelectArticle(LEAD_ARTICLE)}
                  className="mt-4 px-4 py-2 bg-[#0c2340] text-white text-xs font-semibold rounded-xs cursor-pointer"
                >
                  Read Top Story Instead
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((item) => (
                  <article
                    key={item.id}
                    onClick={() => handleSelectArticle(item)}
                    className="cursor-pointer group flex flex-col justify-between border border-gray-200 p-4 bg-white hover:border-gray-300 hover:shadow-xs transition-all"
                  >
                    <div>
                      <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-3">
                        <img
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                          referrerPolicy="no-referrer"
                        />
                      </div>
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00427a]">
                        {item.category}
                      </span>
                      <h4 className="font-serif font-bold text-base text-gray-900 group-hover:text-[#00427a] leading-snug mt-1">
                        {item.title}
                      </h4>
                      <p className="font-serif text-xs text-gray-600 line-clamp-2 mt-1.5">
                        {item.excerpt}
                      </p>
                    </div>
                    <span className="text-[11px] text-gray-400 font-sans mt-3 pt-2 border-t border-gray-100">
                      {item.publishedTime} • {item.readTimeMinutes} min read
                    </span>
                  </article>
                ))}
              </div>
            )}
          </main>
        )}
      </div>

      {/* SPH Media Network Footer */}
      <Footer
        onOpenEpaper={() => setEpaperModalOpen(true)}
        onOpenSubscribe={() => setSubscribeModalOpen(true)}
        onSelectCategory={handleSelectCategory}
      />

      {/* Modals and Drawers */}
      <MenuDrawer
        isOpen={menuDrawerOpen}
        onClose={() => setMenuDrawerOpen(false)}
        onSelectCategory={handleSelectCategory}
        onOpenEpaper={() => setEpaperModalOpen(true)}
        onOpenSubscribe={() => setSubscribeModalOpen(true)}
        onSearch={handleSearch}
      />

      <VisualStoryModal
        story={selectedVisualStory}
        onClose={() => setSelectedVisualStory(null)}
      />

      <SubscribeModal
        isOpen={subscribeModalOpen}
        onClose={() => setSubscribeModalOpen(false)}
        onSuccess={handleSubscribeSuccess}
      />

      <LoginModal
        isOpen={loginModalOpen}
        isLoggedIn={isLoggedIn}
        onClose={() => setLoginModalOpen(false)}
        onLogin={handleLogin}
        onLogout={handleLogout}
        userEmail={userEmail}
      />

      <EpaperModal
        isOpen={epaperModalOpen}
        onClose={() => setEpaperModalOpen(false)}
      />

      <SavedArticlesModal
        isOpen={savedModalOpen}
        onClose={() => setSavedModalOpen(false)}
        savedArticles={savedArticles}
        onSelectArticle={handleSelectArticle}
        onRemoveBookmark={handleRemoveBookmark}
        onClearAll={handleClearAllBookmarks}
      />

      <AdDetailsModal
        isOpen={adDetailsModalOpen}
        onClose={() => setAdDetailsModalOpen(false)}
      />
    </div>
  );
}
