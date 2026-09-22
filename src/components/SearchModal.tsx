import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { Search, X, ArrowRight, Layers, Newspaper, Phone } from 'lucide-react';
import { ServiceItem, NewsArticle } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectService: (service: ServiceItem) => void;
  onSelectArticle: (article: NewsArticle) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectService,
  onSelectArticle,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const q = query.toLowerCase().trim();

  const matchingServices = q
    ? COMPANY_CONFIG.services.filter(
        (s) =>
          s.title.toLowerCase().includes(q) ||
          s.description.toLowerCase().includes(q) ||
          s.capabilities.some((c) => c.toLowerCase().includes(q))
      )
    : [];

  const matchingNews = q
    ? COMPANY_CONFIG.news.filter(
        (n) =>
          n.title.toLowerCase().includes(q) ||
          n.category.toLowerCase().includes(q) ||
          n.summary.toLowerCase().includes(q)
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-start justify-center pt-20 p-4 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-xl w-full overflow-hidden shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="p-4 sm:p-5 border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search ETC services, sectors, news, or contacts..."
            className="w-full text-base bg-transparent focus:outline-none text-slate-800 placeholder-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-full"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-2.5 py-1 text-xs font-semibold text-slate-500 hover:text-slate-800 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors"
          >
            Esc
          </button>
        </div>

        {/* Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-6">
          {!q && (
            <div className="space-y-4">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Quick Suggested Searches
              </p>
              <div className="flex flex-wrap gap-2">
                {['Agriculture', 'Transportation', 'Logistics', 'Real Estate', 'Food Security', 'Freetown Office'].map(
                  (tag) => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-[#004AAD] transition-colors"
                    >
                      {tag}
                    </button>
                  )
                )}
              </div>
            </div>
          )}

          {q && matchingServices.length === 0 && matchingNews.length === 0 && (
            <div className="text-center py-8 text-slate-500">
              <p className="text-sm">No results found for “{query}”.</p>
              <p className="text-xs text-slate-400 mt-1">
                Try searching for “Agriculture”, “Logistics”, or “Transportation”.
              </p>
            </div>
          )}

          {/* Service Results */}
          {matchingServices.length > 0 && (
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Layers className="w-3.5 h-3.5 text-[#004AAD]" />
                <span>Operating Divisions ({matchingServices.length})</span>
              </p>
              <div className="space-y-2">
                {matchingServices.map((service) => (
                  <div
                    key={service.id}
                    onClick={() => {
                      onSelectService(service);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-blue-50/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <h4 className="text-sm font-bold text-[#062B5C] group-hover:text-[#004AAD]">
                        {service.title}
                      </h4>
                      <p className="text-xs text-slate-500 line-clamp-1">{service.description}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#004AAD] transform group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* News Results */}
          {matchingNews.length > 0 && (
            <div>
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <Newspaper className="w-3.5 h-3.5 text-[#0A9F3D]" />
                <span>Articles & Insights ({matchingNews.length})</span>
              </p>
              <div className="space-y-2">
                {matchingNews.map((article) => (
                  <div
                    key={article.id}
                    onClick={() => {
                      onSelectArticle(article);
                      onClose();
                    }}
                    className="p-3 rounded-xl bg-slate-50 hover:bg-emerald-50/80 cursor-pointer transition-colors flex items-center justify-between group"
                  >
                    <div>
                      <span className="text-[10px] font-bold text-[#0A9F3D] uppercase">
                        {article.category}
                      </span>
                      <h4 className="text-sm font-bold text-[#062B5C] group-hover:text-[#0A9F3D] line-clamp-1">
                        {article.title}
                      </h4>
                    </div>
                    <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-[#0A9F3D] transform group-hover:translate-x-1 transition-all" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
