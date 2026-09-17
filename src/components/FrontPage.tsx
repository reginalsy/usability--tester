import React from 'react';
import { Article, VisualStory } from '../types';
import {
  LEAD_ARTICLE,
  LATEST_HEADLINES,
  SINGAPORE_LEAD,
  SINGAPORE_SUB_ARTICLES,
  ASIA_WORLD_LEAD,
  ASIA_WORLD_SUB_ARTICLES,
  OPINION_ARTICLES,
  VISUAL_STORIES
} from '../data/newsData';

interface FrontPageProps {
  onSelectArticle: (article: Article) => void;
  onSelectVisualStory: (story: VisualStory) => void;
  onSelectCategory: (category: string) => void;
}

export const FrontPage: React.FC<FrontPageProps> = ({
  onSelectArticle,
  onSelectVisualStory,
  onSelectCategory
}) => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6" id="front-page-main">
      {/* Hero Section: Featured Story & Latest Headlines Sidebar */}
      <section
        className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-8 border-b border-gray-200"
        data-purpose="top-news-grid"
      >
        {/* Main Lead Story Feature (8 Columns) */}
        <article
          id={`hero-lead-article-${LEAD_ARTICLE.id}`}
          className="lg:col-span-8 flex flex-col md:flex-row gap-6 items-start cursor-pointer group"
          onClick={() => onSelectArticle(LEAD_ARTICLE)}
        >
          {/* Lead Copy Left */}
          <div className="w-full md:w-1/2 flex flex-col justify-start order-2 md:order-1">
            <h2 className="font-serif text-2xl md:text-[29px] font-bold text-[#0c2340] leading-tight tracking-tight headline-hover group-hover:text-[#00427a]">
              {LEAD_ARTICLE.title}
            </h2>
            <p className="font-serif text-gray-700 text-sm md:text-base leading-relaxed mt-3.5">
              {LEAD_ARTICLE.excerpt}
            </p>
            <div className="mt-4 flex items-center space-x-2 text-xs text-gray-500">
              <span className="font-semibold text-[#00427a] uppercase tracking-wider">
                {LEAD_ARTICLE.subcategoryTag || LEAD_ARTICLE.category}
              </span>
              <span>•</span>
              <span>{LEAD_ARTICLE.publishedTime}</span>
            </div>
          </div>

          {/* Lead Image Right */}
          <div className="w-full md:w-1/2 order-1 md:order-2">
            <div className="aspect-[4/3] bg-gray-100 overflow-hidden relative border border-gray-100 shadow-xs">
              <img
                alt="Federal Reserve press conference speaker in front of US flags"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                src={LEAD_ARTICLE.imageUrl}
                referrerPolicy="no-referrer"
              />
            </div>
            {LEAD_ARTICLE.imageCaption && (
              <p className="text-[11px] text-gray-500 mt-1.5 leading-snug">
                {LEAD_ARTICLE.imageCaption} {LEAD_ARTICLE.imageCredit}
              </p>
            )}
          </div>
        </article>

        {/* Latest Headlines List (4 Columns) */}
        <aside className="lg:col-span-4 lg:border-l lg:border-gray-200 lg:pl-6" id="latest-headlines-sidebar">
          <div className="flex items-center justify-between pb-3 border-b border-gray-900">
            <h3 className="font-bold text-gray-900 text-base tracking-tight flex items-center space-x-1">
              <span>Latest headlines</span>
              <span className="text-[#00427a] font-bold">&gt;</span>
            </h3>
          </div>
          <ul className="divide-y divide-gray-100 text-sm font-serif">
            {LATEST_HEADLINES.map((item) => (
              <li
                key={item.id}
                id={`latest-headline-${item.id}`}
                className="py-3 group cursor-pointer"
                onClick={() => onSelectArticle(item)}
              >
                <span className="block text-[11px] font-sans font-semibold text-gray-500 mb-1">
                  {item.publishedTime}
                </span>
                <span className="headline-hover text-gray-900 font-bold leading-snug block group-hover:text-[#00427a]">
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </aside>
      </section>

      {/* SubSection Columns (Singapore, Asia & World, Opinion) */}
      <section className="mt-8 pt-2" data-purpose="editorial-section-grid">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: Singapore News Focus */}
          <div className="space-y-6" id="singapore-section-column">
            <div className="border-b-2 border-[#0c2340] pb-1">
              <button
                onClick={() => onSelectCategory('Singapore')}
                className="font-sans font-extrabold text-sm uppercase tracking-wider text-[#0c2340] hover:text-[#00427a] flex items-center justify-between w-full cursor-pointer"
              >
                <span>Singapore</span>
                <span>&gt;</span>
              </button>
            </div>

            {/* Singapore Lead Story */}
            <article
              id={`singapore-lead-${SINGAPORE_LEAD.id}`}
              className="space-y-2 group cursor-pointer"
              onClick={() => onSelectArticle(SINGAPORE_LEAD)}
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-2.5">
                <img
                  alt="Taiwan emergency vehicle scene"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  src={SINGAPORE_LEAD.imageUrl}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-serif font-bold text-lg leading-snug text-gray-900 group-hover:text-[#00427a]">
                <span className="headline-hover">{SINGAPORE_LEAD.title}</span>
              </h4>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                {SINGAPORE_LEAD.excerpt}
              </p>
            </article>

            {/* Singapore Sub Articles */}
            <div className="border-t border-gray-100 pt-3 space-y-3 font-serif">
              {SINGAPORE_SUB_ARTICLES.map((item, idx) => (
                <div
                  key={item.id}
                  id={`singapore-sub-${item.id}`}
                  className={`group cursor-pointer ${idx > 0 ? 'border-t border-gray-100 pt-3' : ''}`}
                  onClick={() => onSelectArticle(item)}
                >
                  <h5 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#00427a]">
                    <span className="headline-hover">{item.title}</span>
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Column 2: Asia & World News */}
          <div className="space-y-6" id="asia-world-section-column">
            <div className="border-b-2 border-[#0c2340] pb-1">
              <button
                onClick={() => onSelectCategory('Asia')}
                className="font-sans font-extrabold text-sm uppercase tracking-wider text-[#0c2340] hover:text-[#00427a] flex items-center justify-between w-full cursor-pointer"
              >
                <span>Asia &amp; World</span>
                <span>&gt;</span>
              </button>
            </div>

            {/* Asia & World Lead Story */}
            <article
              id={`asia-lead-${ASIA_WORLD_LEAD.id}`}
              className="space-y-2 group cursor-pointer"
              onClick={() => onSelectArticle(ASIA_WORLD_LEAD)}
            >
              <div className="aspect-[16/9] bg-gray-100 overflow-hidden mb-2.5">
                <img
                  alt="Diplomatic meeting room"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                  src={ASIA_WORLD_LEAD.imageUrl}
                  referrerPolicy="no-referrer"
                />
              </div>
              <h4 className="font-serif font-bold text-lg leading-snug text-gray-900 group-hover:text-[#00427a]">
                <span className="headline-hover">{ASIA_WORLD_LEAD.title}</span>
              </h4>
              <p className="text-xs text-gray-600 font-serif leading-relaxed">
                {ASIA_WORLD_LEAD.excerpt}
              </p>
            </article>

            {/* Asia & World Sub Articles */}
            <div className="border-t border-gray-100 pt-3 space-y-3 font-serif">
              {ASIA_WORLD_SUB_ARTICLES.map((item, idx) => (
                <div
                  key={item.id}
                  id={`asia-sub-${item.id}`}
                  className={`group cursor-pointer ${idx > 0 ? 'border-t border-gray-100 pt-3' : ''}`}
                  onClick={() => onSelectArticle(item)}
                >
                  <h5 className="text-sm font-bold text-gray-900 leading-snug group-hover:text-[#00427a]">
                    <span className="headline-hover">{item.title}</span>
                  </h5>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Opinion & Columns */}
          <div
            id="opinion-section-column"
            className="space-y-6 bg-slate-50 p-4 border border-slate-200"
          >
            <div className="border-b-2 border-[#d8232a] pb-1">
              <button
                onClick={() => onSelectCategory('Opinion')}
                className="font-sans font-extrabold text-sm uppercase tracking-wider text-[#0c2340] hover:text-[#d8232a] flex items-center justify-between w-full cursor-pointer"
              >
                <span>Opinion</span>
                <span>&gt;</span>
              </button>
            </div>

            {OPINION_ARTICLES.map((item, idx) => (
              <article
                key={item.id}
                id={`opinion-article-${item.id}`}
                className={`group cursor-pointer ${
                  idx < OPINION_ARTICLES.length - 1 ? 'pb-3 border-b border-gray-200' : ''
                }`}
                onClick={() => onSelectArticle(item)}
              >
                <span className="text-[11px] font-sans font-bold uppercase tracking-wider text-[#d8232a]">
                  {item.subcategoryTag || 'OPINION'}
                </span>
                <h4 className="font-serif font-bold text-base text-gray-900 leading-snug mt-1 group-hover:text-[#00427a]">
                  <span className="headline-hover">{item.title}</span>
                </h4>
                {item.author && (
                  <p className="text-xs text-gray-500 mt-1 font-sans">
                    By {item.author} {item.authorRole ? `/ ${item.authorRole}` : ''}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Stories Carousel */}
      <section
        id="visual-stories-carousel-band"
        className="mt-12 bg-[#0c2340] text-white p-6 rounded-none"
        data-purpose="visual-stories-band"
      >
        <div className="flex items-center justify-between mb-5 border-b border-slate-700 pb-3">
          <div className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-red-600 inline-block"></span>
            <h3 className="text-lg font-bold uppercase tracking-wider font-sans">
              Visual Stories
            </h3>
          </div>
          <button
            onClick={() => onSelectCategory('Visual')}
            className="text-xs text-gray-300 hover:text-white uppercase font-semibold tracking-wider cursor-pointer"
          >
            Explore all &gt;
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {VISUAL_STORIES.map((story) => (
            <div
              key={story.id}
              id={`visual-story-card-${story.id}`}
              className="group cursor-pointer"
              onClick={() => onSelectVisualStory(story)}
            >
              <div className="aspect-[16/10] bg-gray-800 overflow-hidden relative">
                <img
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 group-hover:opacity-100"
                  src={story.imageUrl}
                  referrerPolicy="no-referrer"
                />
                <span className="absolute bottom-2 left-2 bg-black/75 backdrop-blur-xs text-[10px] px-2 py-0.5 uppercase tracking-wider font-sans font-medium">
                  {story.type}
                </span>
              </div>
              <h4 className="font-serif text-sm font-semibold mt-2.5 leading-snug text-gray-100 group-hover:text-blue-300 transition-colors">
                {story.title}
              </h4>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};
