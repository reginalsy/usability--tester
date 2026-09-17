import React, { useState } from 'react';
import { Article } from '../types';
import { ArrowLeft } from 'lucide-react';

interface CategoryViewProps {
  category: string;
  articles: Article[];
  onSelectArticle: (article: Article) => void;
  onBackToHome: () => void;
}

export const CategoryView: React.FC<CategoryViewProps> = ({
  category,
  articles,
  onSelectArticle,
  onBackToHome
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filteredArticles = activeFilter === 'All'
    ? articles
    : articles.filter(a => a.subcategoryTag === activeFilter);

  const subcategories: Record<string, string[]> = {
    Singapore: ['All', 'Courts & Crime', 'Housing', 'Transport', 'Community'],
    Business: ['All', 'ECONOMY', 'Markets', 'Banking', 'Tech'],
    Opinion: ['All', 'ANALYSIS', 'GLOBAL VIEW', 'PERSONAL ESSAY', 'Editorial'],
    Asia: ['All', 'East Asia', 'SE Asia', 'South Asia'],
    World: ['All', 'United States', 'Europe', 'Middle East']
  };

  const tags = subcategories[category] || ['All', 'Latest', 'Popular'];

  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      {/* Category Breadcrumb */}
      <div className="flex items-center justify-between pb-3 border-b border-gray-200 text-xs mb-6">
        <button
          onClick={onBackToHome}
          className="flex items-center gap-1.5 font-bold text-[#0c2340] hover:text-[#00427a] cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Front Page</span>
        </button>
        <span className="text-gray-500 font-sans">
          The Straits Times &gt; {category}
        </span>
      </div>

      {/* Category Header */}
      <div className="border-b-4 border-[#0c2340] pb-3 mb-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-black text-[#0c2340] tracking-tight uppercase">
          {category} News
        </h2>
        <p className="text-gray-600 text-sm mt-1 font-serif">
          In-depth coverage, breaking reports, analysis, and multimedia stories from our correspondents.
        </p>

        {/* Filter Pills */}
        <div className="flex items-center gap-2 mt-4 overflow-x-auto pb-1 scrollbar-none">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-3 py-1 text-xs rounded-full font-sans cursor-pointer transition-colors ${
                activeFilter === tag
                  ? 'bg-[#0c2340] text-white font-semibold'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Category Articles Grid */}
      {filteredArticles.length === 0 ? (
        <div className="text-center py-16 bg-gray-50 border border-gray-200">
          <p className="text-gray-500 font-serif">No articles currently listed under "{activeFilter}".</p>
          <button
            onClick={() => setActiveFilter('All')}
            className="mt-3 text-xs text-[#00427a] font-bold hover:underline cursor-pointer"
          >
            Show all {category} stories
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Main Lead Story in Category (8 Columns) */}
          <div className="md:col-span-8 space-y-6">
            <article
              onClick={() => onSelectArticle(filteredArticles[0])}
              className="cursor-pointer group border-b border-gray-200 pb-6"
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-3">
                <img
                  src={filteredArticles[0].imageUrl}
                  alt={filteredArticles[0].title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#00427a]">
                {filteredArticles[0].subcategoryTag || filteredArticles[0].category}
              </span>
              <h3 className="font-serif text-2xl font-bold text-gray-900 group-hover:text-[#00427a] leading-tight mt-1">
                {filteredArticles[0].title}
              </h3>
              <p className="font-serif text-gray-700 text-sm mt-2 leading-relaxed">
                {filteredArticles[0].excerpt}
              </p>
              <div className="mt-3 text-xs text-gray-500">
                <span>{filteredArticles[0].publishedTime}</span>
                {filteredArticles[0].author && (
                  <span> • By {filteredArticles[0].author}</span>
                )}
              </div>
            </article>

            {/* Subsequent Category Stories */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {filteredArticles.slice(1).map((art) => (
                <article
                  key={art.id}
                  onClick={() => onSelectArticle(art)}
                  className="cursor-pointer group flex flex-col justify-between border-b border-gray-200 pb-4"
                >
                  <div>
                    <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-2">
                      <img
                        src={art.imageUrl}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    {art.subcategoryTag && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#00427a]">
                        {art.subcategoryTag}
                      </span>
                    )}
                    <h4 className="font-serif font-bold text-base text-gray-900 group-hover:text-[#00427a] leading-snug mt-1">
                      {art.title}
                    </h4>
                    <p className="font-serif text-xs text-gray-600 line-clamp-2 mt-1">
                      {art.excerpt}
                    </p>
                  </div>
                  <span className="text-[11px] text-gray-500 mt-2 font-sans">
                    {art.publishedTime}
                  </span>
                </article>
              ))}
            </div>
          </div>

          {/* Category Sidebar (4 Columns) */}
          <aside className="md:col-span-4 md:border-l md:border-gray-200 md:pl-6 space-y-6">
            <div className="bg-slate-50 p-4 border border-gray-200">
              <h4 className="font-sans font-bold text-xs uppercase tracking-wider text-[#0c2340] mb-3">
                Trending in {category}
              </h4>
              <ul className="space-y-3 font-serif text-sm">
                {articles.slice(0, 4).map((item, idx) => (
                  <li
                    key={item.id}
                    onClick={() => onSelectArticle(item)}
                    className="cursor-pointer group border-b border-gray-200 last:border-0 pb-2"
                  >
                    <span className="text-[11px] font-sans font-bold text-gray-400 block mb-0.5">
                      0{idx + 1}
                    </span>
                    <span className="font-bold text-gray-900 group-hover:text-[#00427a] leading-snug block">
                      {item.title}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      )}
    </main>
  );
};
