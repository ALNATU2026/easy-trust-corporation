import React from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { Award, Users, Globe2, HeartHandshake, CheckCircle2, Star } from 'lucide-react';
import { motion } from 'motion/react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'Award':
        return <Award className="w-7 h-7 text-[#004AAD]" />;
      case 'Users':
        return <Users className="w-7 h-7 text-[#0A9F3D]" />;
      case 'Globe2':
        return <Globe2 className="w-7 h-7 text-[#0066CC]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-7 h-7 text-[#062B5C]" />;
      default:
        return <Award className="w-7 h-7 text-[#004AAD]" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 relative overflow-hidden border-b border-slate-200/70">
      
      {/* Background Image Layer with Refined Translucent Gradient Overlays */}
      <div className="absolute inset-0 -z-10 bg-slate-100">
        <img
          src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=2000&q=80"
          alt="Sustainable Corporate Infrastructure"
          className="w-full h-full object-cover opacity-15"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFD]/95 via-white/92 to-[#F4F8FC]/97" />
        <div className="absolute inset-0 bg-[radial-gradient(#004AAD_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.035] pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-70px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/80 text-[#004AAD] text-xs font-bold uppercase tracking-wider shadow-2xs">
            <Star className="w-3.5 h-3.5" />
            <span>Why Choose Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B5C] tracking-tight">
            Your Trusted Partner for Growth
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#004AAD] to-[#0A9F3D] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We combine experience, dedication and a customer-first approach to deliver solutions that make a difference.
          </p>
        </motion.div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMPANY_CONFIG.whyChooseUs.map((feature, idx) => (
            <motion.div
              key={feature.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
              id={`why-card-${feature.id}`}
              className="bg-white/95 backdrop-blur-sm p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-2xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Number tag & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-[#F4F8FC] group-hover:bg-blue-50 flex items-center justify-center transition-colors border border-slate-100 shadow-2xs group-hover:scale-110 duration-300">
                    {getIcon(feature.iconName)}
                  </div>
                  <span className="text-xs font-extrabold text-slate-400 group-hover:text-[#004AAD] tracking-wider transition-colors">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-[#062B5C] tracking-tight group-hover:text-[#004AAD] transition-colors mb-2">
                  {feature.title}
                </h3>

                <p className="text-sm font-semibold text-[#0A9F3D] mb-3">
                  “{feature.description}”
                </p>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {feature.extendedText}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#004AAD]">
                <CheckCircle2 className="w-4 h-4 text-[#0A9F3D]" />
                <span>ETC Standard Guarantee</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
