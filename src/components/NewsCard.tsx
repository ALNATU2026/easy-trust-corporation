import React from 'react';
import { NewsArticle } from '../types';
import { Calendar, Clock, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

interface NewsCardProps {
  article: NewsArticle;
  onReadArticle: (article: NewsArticle) => void;
  index?: number;
}

export const NewsCard: React.FC<NewsCardProps> = ({ article, onReadArticle, index = 0 }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Agriculture':
        return 'bg-emerald-100 text-emerald-800 border-emerald-200';
      case 'Logistics':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Real Estate':
        return 'bg-sky-100 text-sky-800 border-sky-200';
      case 'Company News':
      case 'Corporate Updates':
      default:
        return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      id={`news-card-${article.id}`}
      className="bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group"
    >
      {/* Article Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <motion.img
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.6 }}
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform"
          loading="lazy"
        />
        <div className="absolute top-3.5 left-3.5">
          <span
            className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-xs ${getCategoryColor(
              article.category
            )}`}
          >
            <Tag className="w-3 h-3" />
            <span>{article.category}</span>
          </span>
        </div>

        {article.featured && (
          <div className="absolute top-3.5 right-3.5 bg-[#062B5C] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full shadow-xs">
            Featured
          </div>
        )}
      </div>

      {/* Article Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          {/* Metadata: Date & Read Time */}
          <div className="flex items-center gap-4 text-xs text-slate-500 mb-2.5 font-medium">
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

          <h3 className="text-lg font-bold text-[#062B5C] group-hover:text-[#004AAD] transition-colors leading-snug line-clamp-2">
            {article.title}
          </h3>

          <p className="text-sm text-slate-600 mt-2.5 line-clamp-3 leading-relaxed">
            {article.summary}
          </p>
        </div>

        {/* Read More Action */}
        <div className="pt-3 border-t border-slate-100">
          <motion.button
            whileTap={{ scale: 0.96 }}
            id={`news-read-btn-${article.id}`}
            onClick={() => onReadArticle(article)}
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#004AAD] hover:text-[#0A9F3D] transition-colors group/btn cursor-pointer"
          >
            <span>Read More</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
