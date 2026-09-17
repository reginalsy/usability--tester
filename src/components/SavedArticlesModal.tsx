import React from 'react';
import { X, Bookmark, Trash2, ArrowRight } from 'lucide-react';
import { Article } from '../types';

interface SavedArticlesModalProps {
  isOpen: boolean;
  onClose: () => void;
  savedArticles: Article[];
  onSelectArticle: (article: Article) => void;
  onRemoveBookmark: (articleId: string) => void;
  onClearAll: () => void;
}

export const SavedArticlesModal: React.FC<SavedArticlesModalProps> = ({
  isOpen,
  onClose,
  savedArticles,
  onSelectArticle,
  onRemoveBookmark,
  onClearAll
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white rounded-xs max-w-2xl w-full p-6 relative shadow-2xl">
        <div className="flex items-center justify-between pb-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            <Bookmark className="w-5 h-5 text-[#00427a] fill-[#00427a]" />
            <h3 className="font-serif text-xl font-bold text-gray-900">
              Saved Articles ({savedArticles.length})
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {savedArticles.length === 0 ? (
          <div className="py-12 text-center">
            <Bookmark className="w-12 h-12 text-gray-300 mx-auto mb-3" />
            <p className="font-serif text-gray-600">No saved articles yet.</p>
            <p className="text-xs text-gray-400 mt-1">
              Click the bookmark icon on any story to save it for offline reading later.
            </p>
          </div>
        ) : (
          <div>
            <div className="divide-y divide-gray-100 max-h-[60vh] overflow-y-auto my-2">
              {savedArticles.map((art) => (
                <div
                  key={art.id}
                  className="py-3.5 flex items-start justify-between gap-4 group"
                >
                  <div
                    onClick={() => {
                      onSelectArticle(art);
                      onClose();
                    }}
                    className="flex-1 cursor-pointer"
                  >
                    <span className="text-[11px] font-bold text-[#00427a] uppercase tracking-wider">
                      {art.category}
                    </span>
                    <h4 className="font-serif font-bold text-sm text-gray-900 group-hover:text-[#00427a] leading-snug mt-0.5">
                      {art.title}
                    </h4>
                    <span className="text-[11px] text-gray-400 font-sans mt-1 block">
                      {art.publishedTime} • {art.readTimeMinutes} min read
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveBookmark(art.id)}
                    className="text-gray-400 hover:text-red-600 p-1.5 cursor-pointer"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-gray-200 flex items-center justify-between text-xs">
              <button
                onClick={onClearAll}
                className="text-red-600 hover:underline cursor-pointer"
              >
                Clear all bookmarks
              </button>
              <button
                onClick={onClose}
                className="px-4 py-1.5 bg-[#0c2340] hover:bg-[#00427a] text-white font-semibold rounded-xs cursor-pointer"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
