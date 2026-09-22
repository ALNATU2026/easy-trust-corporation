import React from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { TrendingUp, CheckCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export const Impact: React.FC = () => {
  return (
    <section id="impact" className="py-20 lg:py-28 bg-[#062B5C] text-white relative overflow-hidden">
      
      {/* Photographic Background Image Layer with Corporate Navy Gradient */}
      <div className="absolute inset-0 -z-0">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=2000&q=80"
          alt="ETC Operational Impact Background"
          className="w-full h-full object-cover opacity-20 mix-blend-luminosity"
          loading="lazy"
        />
        {/* Navy & Emerald Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#062B5C]/95 via-[#062B5C]/90 to-[#062B5C]/98" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(32,200,74,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(0,102,204,0.2),transparent_60%)]" />
      </div>

      {/* Hex / Dot pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(#20C84A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.08] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-emerald-400 text-xs font-bold uppercase tracking-wider border border-white/10">
            <TrendingUp className="w-3.5 h-3.5" />
            <span>Operational Milestones</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
            Our Impact
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#20C84A] to-[#0066CC] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
            Creating value across sectors, empowering people and building stronger communities.
          </p>
        </motion.div>

        {/* 4 Impact Metrics Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_CONFIG.impactMetrics.map((metric, idx) => (
            <motion.div
              key={metric.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6, scale: 1.02 }}
              id={`impact-card-${metric.id}`}
              className="relative p-7 rounded-2xl bg-white/[0.08] backdrop-blur-md border border-white/15 hover:border-emerald-400/50 hover:bg-white/[0.12] transition-all duration-300 flex flex-col justify-between group shadow-xl"
            >
              <div>
                <span className="text-[11px] font-extrabold uppercase tracking-wider text-emerald-400 block mb-2">
                  {metric.sector}
                </span>

                {/* Main Large Stat Display */}
                <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight flex items-baseline gap-1 my-3 group-hover:scale-105 transition-transform duration-300">
                  <span className="bg-gradient-to-r from-white via-slate-100 to-emerald-300 bg-clip-text text-transparent">
                    {metric.value}
                  </span>
                </div>

                <h3 className="text-base font-bold text-sky-200 mt-2">
                  {metric.label}
                </h3>

                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {metric.description}
                </p>
              </div>

              {metric.highlightText && (
                <div className="mt-5 pt-4 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-emerald-300 font-semibold">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                  <span>{metric.highlightText}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Corporate Trust Statement & Slogan Anchor */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-emerald-500/20 text-[#20C84A] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs font-bold tracking-wider text-emerald-400 uppercase">
                {COMPANY_CONFIG.slogan}
              </p>
              <p className="text-xs text-slate-400">
                Verified figures reflecting Easy Trust Corporation standard operational targets.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold bg-white text-[#062B5C] hover:bg-emerald-400 transition-colors shadow-sm"
          >
            <span>Partner With ETC Today</span>
            <Sparkles className="w-3.5 h-3.5" />
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
