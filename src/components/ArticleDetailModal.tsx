import React from 'react';
import { NewsArticle } from '../types';
import { X, Calendar, Clock, Tag, Share2 } from 'lucide-react';

interface ArticleDetailModalProps {
  article: NewsArticle | null;
  onClose: () => void;
}

export const ArticleDetailModal: React.FC<ArticleDetailModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.summary,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Article Image Banner */}
        <div className="relative aspect-[16/9] w-full bg-slate-900">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />

          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors backdrop-blur-xs"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#0A9F3D] text-white shadow-xs">
              <Tag className="w-3 h-3" />
              <span>{article.category}</span>
            </span>
          </div>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <div className="flex items-center gap-4 text-xs text-slate-300 mb-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" />
                {article.date}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                {article.readTime}
              </span>
            </div>
          </div>
        </div>

        {/* Article Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          <h3 className="text-xl sm:text-2xl font-extrabold text-[#062B5C] leading-snug tracking-tight">
            {article.title}
          </h3>

          <div className="p-4 rounded-xl bg-blue-50/70 border-l-4 border-[#004AAD] text-sm font-medium text-slate-700 italic">
            {article.summary}
          </div>

          <div className="space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
            <button
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#062B5C] transition-colors"
            >
              <Share2 className="w-4 h-4" />
              <span>Share Article</span>
            </button>

            <button
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
