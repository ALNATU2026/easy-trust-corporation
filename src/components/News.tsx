import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { NewsCard } from './NewsCard';
import { NewsArticle } from '../types';
import { Newspaper } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NewsProps {
  onReadArticle: (article: NewsArticle) => void;
}

export const News: React.FC<NewsProps> = ({ onReadArticle }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Company News', 'Agriculture', 'Logistics', 'Real Estate'];

  const filteredNews = activeCategory === 'All'
    ? COMPANY_CONFIG.news
    : COMPANY_CONFIG.news.filter(item => item.category === activeCategory);

  return (
    <section id="news" className="py-20 lg:py-28 bg-[#F4F8FC]/50 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-[#004AAD] text-xs font-bold uppercase tracking-wider">
            <Newspaper className="w-3.5 h-3.5" />
            <span>Corporate Insights</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B5C] tracking-tight">
            News & Updates
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#004AAD] to-[#0A9F3D] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Stay informed with the latest developments, sector expansions, and operational updates from Easy Trust Corporation.
          </p>
        </motion.div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <motion.button
              whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.04 }}
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#062B5C] text-white shadow-sm'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* News Cards Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredNews.map((article, idx) => (
              <NewsCard
                key={article.id}
                article={article}
                onReadArticle={onReadArticle}
                index={idx}
              />
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
