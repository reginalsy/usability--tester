import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Bookmark,
  Share2,
  Printer,
  Volume2,
  VolumeX,
  Play,
  Pause,
  MessageSquare,
  ThumbsUp,
  Clock,
  User,
  Check,
  ChevronRight
} from 'lucide-react';
import { Article, ArticleComment } from '../types';
import { INITIAL_COMMENTS } from '../data/newsData';

interface ArticleViewProps {
  article: Article;
  onBack: () => void;
  onSelectArticle: (article: Article) => void;
  relatedArticles: Article[];
  isBookmarked: boolean;
  onToggleBookmark: (articleId: string) => void;
}

export const ArticleView: React.FC<ArticleViewProps> = ({
  article,
  onBack,
  onSelectArticle,
  relatedArticles,
  isBookmarked,
  onToggleBookmark
}) => {
  const [fontSize, setFontSize] = useState<'normal' | 'large' | 'xlarge'>('normal');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speechSupported, setSpeechSupported] = useState(false);
  const [shareToast, setShareToast] = useState(false);
  const [comments, setComments] = useState<ArticleComment[]>(
    INITIAL_COMMENTS[article.id] || []
  );
  const [newCommentText, setNewCommentText] = useState('');
  const [newCommentName, setNewCommentName] = useState('');
  const [helpfulVoted, setHelpfulVoted] = useState<'yes' | 'no' | null>(null);

  // Check Web Speech API support
  useEffect(() => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      setSpeechSupported(true);
    }
    return () => {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [article.id]);

  const toggleAudio = () => {
    if (!speechSupported) return;

    if (isPlayingAudio) {
      window.speechSynthesis.cancel();
      setIsPlayingAudio(false);
    } else {
      window.speechSynthesis.cancel();
      const textToRead = `${article.title}. ${article.excerpt}. ${article.content.slice(0, 3).join(' ')}`;
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.rate = 0.95;
      utterance.onend = () => setIsPlayingAudio(false);
      utterance.onerror = () => setIsPlayingAudio(false);
      window.speechSynthesis.speak(utterance);
      setIsPlayingAudio(true);
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setShareToast(true);
      setTimeout(() => setShareToast(false), 2500);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const handleAddComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;

    const newComment: ArticleComment = {
      id: 'c_' + Date.now(),
      author: newCommentName.trim() || 'Reader from Singapore',
      location: 'Singapore',
      timestamp: 'Just now',
      content: newCommentText.trim(),
      likes: 1
    };

    setComments([newComment, ...comments]);
    setNewCommentText('');
    setNewCommentName('');
  };

  const handleLikeComment = (commentId: string) => {
    setComments((prev) =>
      prev.map((c) => (c.id === commentId ? { ...c, likes: c.likes + 1 } : c))
    );
  };

  const fontClasses = {
    normal: 'text-base sm:text-[18px] leading-[1.75]',
    large: 'text-lg sm:text-[20px] leading-[1.8]',
    xlarge: 'text-xl sm:text-[22px] leading-[1.85]'
  }[fontSize];

  return (
    <div className="bg-white min-h-screen pb-16">
      {/* Toast Notification */}
      {shareToast && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#0c2340] text-white px-4 py-2.5 rounded-sm shadow-xl flex items-center gap-2 text-sm">
          <Check className="w-4 h-4 text-emerald-400" />
          <span>Article link copied to clipboard</span>
        </div>
      )}

      {/* Top Breadcrumb & Return Bar */}
      <div className="border-b border-gray-200 bg-gray-50 py-2.5 px-4">
        <div className="max-w-4xl mx-auto flex items-center justify-between text-xs text-gray-600">
          <button
            onClick={onBack}
            className="flex items-center gap-1.5 font-bold text-[#0c2340] hover:text-[#00427a] cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Front Page</span>
          </button>
          <div className="hidden sm:flex items-center gap-1 text-gray-500">
            <span>The Straits Times</span>
            <ChevronRight className="w-3 h-3" />
            <span className="font-semibold text-gray-800">{article.category}</span>
            {article.subcategoryTag && (
              <>
                <ChevronRight className="w-3 h-3" />
                <span className="text-gray-600">{article.subcategoryTag}</span>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Article Reader Container */}
      <article className="max-w-4xl mx-auto px-4 pt-8 pb-12">
        {/* Category Badge & Trending */}
        <div className="flex items-center gap-2 mb-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#00427a]">
            {article.subcategoryTag || article.category}
          </span>
          {article.trendingTag && (
            <>
              <span className="text-gray-300">•</span>
              <span className="text-xs font-medium text-gray-600">
                {article.trendingTag}
              </span>
            </>
          )}
        </div>

        {/* Headline */}
        <h1 className="font-serif text-3xl sm:text-4xl md:text-[44px] font-bold text-[#0c2340] leading-tight tracking-tight">
          {article.title}
        </h1>

        {/* Excerpt / Standfirst */}
        <p className="font-serif text-lg sm:text-xl text-gray-700 leading-relaxed mt-4 border-b border-gray-200 pb-5">
          {article.excerpt}
        </p>

        {/* Byline & Timestamps */}
        <div className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-gray-600 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold shrink-0">
              <User className="w-4 h-4" />
            </div>
            <div>
              <p className="font-bold text-gray-900 text-sm">
                {article.author || 'The Straits Times'}
              </p>
              <p className="text-gray-500">
                {article.authorRole || 'SPH Media Editorial Desk'}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-gray-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              Published {article.publishedTime}
            </span>
            <span>•</span>
            <span>{article.readTimeMinutes} min read</span>
          </div>
        </div>

        {/* Action Bar (Audio player + Font size + Bookmark + Share) */}
        <div className="my-5 py-2.5 px-3 bg-gray-50 border border-gray-200 rounded-sm flex flex-wrap items-center justify-between gap-4">
          {/* Audio Listen Feature */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleAudio}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-sm text-xs font-semibold cursor-pointer transition-colors ${
                isPlayingAudio
                  ? 'bg-[#d8232a] text-white'
                  : 'bg-[#0c2340] hover:bg-[#00427a] text-white'
              }`}
            >
              {isPlayingAudio ? (
                <>
                  <Pause className="w-3.5 h-3.5" />
                  <span>Pause narration</span>
                </>
              ) : (
                <>
                  <Play className="w-3.5 h-3.5" />
                  <span>Listen to article ({article.readTimeMinutes} min)</span>
                </>
              )}
            </button>
            {isPlayingAudio && (
              <span className="flex items-center gap-1 text-[11px] text-emerald-700 font-medium">
                <Volume2 className="w-3.5 h-3.5 animate-pulse" />
                Reading aloud
              </span>
            )}
          </div>

          {/* Reader Tools */}
          <div className="flex items-center gap-2 sm:gap-4 text-gray-700">
            {/* Font Resize */}
            <div className="flex items-center border border-gray-300 rounded-sm bg-white overflow-hidden text-xs">
              <button
                onClick={() => setFontSize('normal')}
                className={`px-2 py-1 cursor-pointer ${fontSize === 'normal' ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'}`}
                title="Default text size"
              >
                A
              </button>
              <button
                onClick={() => setFontSize('large')}
                className={`px-2 py-1 cursor-pointer text-sm ${fontSize === 'large' ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'}`}
                title="Large text size"
              >
                A+
              </button>
              <button
                onClick={() => setFontSize('xlarge')}
                className={`px-2 py-1 cursor-pointer text-base ${fontSize === 'xlarge' ? 'bg-gray-200 font-bold' : 'hover:bg-gray-100'}`}
                title="Extra large text size"
              >
                A++
              </button>
            </div>

            {/* Bookmark */}
            <button
              onClick={() => onToggleBookmark(article.id)}
              className={`p-1.5 rounded-sm border border-gray-300 cursor-pointer flex items-center gap-1 text-xs ${
                isBookmarked
                  ? 'bg-amber-50 text-amber-800 border-amber-300'
                  : 'bg-white hover:bg-gray-100 text-gray-700'
              }`}
              title={isBookmarked ? 'Saved to bookmarks' : 'Save article'}
            >
              <Bookmark className={`w-3.5 h-3.5 ${isBookmarked ? 'fill-amber-600 text-amber-600' : ''}`} />
              <span className="hidden sm:inline">{isBookmarked ? 'Saved' : 'Save'}</span>
            </button>

            {/* Share */}
            <button
              onClick={handleShare}
              className="p-1.5 rounded-sm border border-gray-300 bg-white hover:bg-gray-100 cursor-pointer text-gray-700 flex items-center gap-1 text-xs"
              title="Share article link"
            >
              <Share2 className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Share</span>
            </button>

            {/* Print */}
            <button
              onClick={handlePrint}
              className="p-1.5 rounded-sm border border-gray-300 bg-white hover:bg-gray-100 cursor-pointer text-gray-700 hidden md:flex items-center gap-1 text-xs"
              title="Print article"
            >
              <Printer className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Main Article Image */}
        <figure className="my-6">
          <div className="aspect-[16/10] sm:aspect-[16/9] bg-gray-100 overflow-hidden border border-gray-200">
            <img
              alt={article.title}
              className="w-full h-full object-cover"
              src={article.imageUrl}
              referrerPolicy="no-referrer"
            />
          </div>
          {(article.imageCaption || article.imageCredit) && (
            <figcaption className="text-xs text-gray-500 mt-2 font-sans leading-relaxed">
              {article.imageCaption}{' '}
              {article.imageCredit && (
                <span className="font-semibold text-gray-600">{article.imageCredit}</span>
              )}
            </figcaption>
          )}
        </figure>

        {/* Key Takeaways Box (if available) */}
        {article.keyTakeaways && article.keyTakeaways.length > 0 && (
          <div className="my-6 p-4 bg-slate-50 border-l-4 border-[#00427a] rounded-r-xs">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#0c2340] mb-2 font-sans">
              Key Points
            </h4>
            <ul className="space-y-1.5 text-sm font-serif text-gray-800 list-disc list-inside">
              {article.keyTakeaways.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Article Body Paragraphs */}
        <div className={`font-serif text-gray-800 space-y-5 my-6 ${fontClasses}`}>
          {article.content.map((paragraph, idx) => (
            <React.Fragment key={idx}>
              <p>{paragraph}</p>
              {/* Optional pull quote insertion after 2nd paragraph */}
              {idx === 1 && article.pullQuote && (
                <blockquote className="my-8 py-4 px-6 border-y border-gray-300 bg-gray-50/70 text-center">
                  <p className="font-serif italic text-xl sm:text-2xl text-[#0c2340] leading-snug">
                    "{article.pullQuote.quote}"
                  </p>
                  <cite className="block mt-2 text-xs font-sans not-italic font-bold uppercase tracking-wider text-gray-600">
                    — {article.pullQuote.attribution}
                  </cite>
                </blockquote>
              )}
            </React.Fragment>
          ))}
        </div>

        {/* Topic Tag Pills */}
        <div className="mt-8 pt-6 border-t border-gray-200">
          <span className="text-xs font-bold uppercase text-gray-500 tracking-wider block mb-2 font-sans">
            Related Topics
          </span>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs rounded-full font-sans cursor-pointer">
              {article.category}
            </span>
            {article.subcategoryTag && (
              <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs rounded-full font-sans cursor-pointer">
                {article.subcategoryTag}
              </span>
            )}
            {article.trendingTag && (
              <span className="px-3 py-1 bg-blue-50 text-[#00427a] font-semibold text-xs rounded-full font-sans cursor-pointer">
                {article.trendingTag}
              </span>
            )}
            <span className="px-3 py-1 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs rounded-full font-sans cursor-pointer">
              Singapore
            </span>
          </div>
        </div>

        {/* Reader Feedback Poll */}
        <div className="my-8 p-4 bg-gray-50 border border-gray-200 rounded-sm flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <span className="font-semibold text-gray-800">
            Did you find this story informative?
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setHelpfulVoted('yes')}
              className={`px-3 py-1.5 rounded-sm border cursor-pointer font-medium ${
                helpfulVoted === 'yes'
                  ? 'bg-[#0c2340] text-white border-[#0c2340]'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              👍 Yes ({helpfulVoted === 'yes' ? 142 : 141})
            </button>
            <button
              onClick={() => setHelpfulVoted('no')}
              className={`px-3 py-1.5 rounded-sm border cursor-pointer font-medium ${
                helpfulVoted === 'no'
                  ? 'bg-gray-700 text-white border-gray-700'
                  : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-100'
              }`}
            >
              👎 No
            </button>
          </div>
        </div>

        {/* Reader Comments & Discussion */}
        <section className="mt-10 pt-6 border-t-2 border-[#0c2340]" id="comments-section">
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-sans font-bold text-lg text-gray-900 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-[#00427a]" />
              <span>Reader Discussion ({comments.length})</span>
            </h3>
            <span className="text-xs text-gray-500">Moderated by SPH Media</span>
          </div>

          {/* Comment input form */}
          <form onSubmit={handleAddComment} className="bg-gray-50 p-4 border border-gray-200 rounded-sm mb-6">
            <div className="mb-3">
              <input
                type="text"
                placeholder="Your name or handle (e.g. Rachel Tan)"
                value={newCommentName}
                onChange={(e) => setNewCommentName(e.target.value)}
                className="w-full text-xs p-2 bg-white border border-gray-300 rounded-xs focus:outline-hidden focus:border-[#00427a]"
              />
            </div>
            <div className="mb-3">
              <textarea
                placeholder="Share your respectful thoughts on this story..."
                rows={3}
                value={newCommentText}
                onChange={(e) => setNewCommentText(e.target.value)}
                className="w-full text-xs sm:text-sm p-2.5 bg-white border border-gray-300 rounded-xs focus:outline-hidden focus:border-[#00427a]"
                required
              />
            </div>
            <div className="flex justify-between items-center text-xs">
              <span className="text-gray-500">Be civil. Comments undergo automated checks.</span>
              <button
                type="submit"
                className="bg-[#0c2340] hover:bg-[#00427a] text-white px-4 py-1.5 font-semibold rounded-xs cursor-pointer"
              >
                Post Comment
              </button>
            </div>
          </form>

          {/* Comment list */}
          <div className="space-y-4">
            {comments.map((comment) => (
              <div
                key={comment.id}
                className="p-3.5 bg-white border border-gray-200 rounded-sm"
              >
                <div className="flex items-center justify-between text-xs mb-1.5">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-900">{comment.author}</span>
                    <span className="text-gray-400">•</span>
                    <span className="text-gray-500">{comment.location}</span>
                  </div>
                  <span className="text-gray-400">{comment.timestamp}</span>
                </div>
                <p className="text-xs sm:text-sm text-gray-700 font-sans leading-relaxed">
                  {comment.content}
                </p>
                <div className="mt-2.5 flex items-center justify-end">
                  <button
                    onClick={() => handleLikeComment(comment.id)}
                    className="flex items-center gap-1 text-xs text-gray-500 hover:text-[#00427a] cursor-pointer"
                  >
                    <ThumbsUp className="w-3.5 h-3.5" />
                    <span>Agree ({comment.likes})</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* More From The Straits Times */}
        {relatedArticles.length > 0 && (
          <section className="mt-12 pt-8 border-t-2 border-gray-200">
            <h3 className="font-sans font-bold text-base uppercase tracking-wider text-[#0c2340] mb-4">
              More From The Straits Times
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {relatedArticles.slice(0, 3).map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                    onSelectArticle(item);
                  }}
                  className="group cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-[16/10] bg-gray-100 overflow-hidden mb-2">
                      <img
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-300"
                        src={item.imageUrl}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <span className="text-[11px] font-bold text-[#00427a] uppercase tracking-wider">
                      {item.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-gray-900 leading-snug mt-1 group-hover:text-[#00427a]">
                      {item.title}
                    </h4>
                  </div>
                  <span className="text-[11px] text-gray-500 mt-2 font-sans">
                    {item.publishedTime}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};
