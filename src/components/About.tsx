import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { ShieldCheck, Clock, Lightbulb, Leaf, ArrowRight, CheckCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const About: React.FC = () => {
  const [showFullStory, setShowFullStory] = useState(false);

  // Map value icons
  const getValueIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#004AAD]" />;
      case 'ClockCheck':
      case 'Clock':
        return <Clock className="w-5 h-5 text-[#062B5C]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-5 h-5 text-[#0066CC]" />;
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#0A9F3D]" />;
      default:
        return <ShieldCheck className="w-5 h-5 text-[#004AAD]" />;
    }
  };

  return (
    <section id="about" className="py-20 lg:py-28 relative overflow-hidden border-b border-slate-200/60">
      
      {/* Background Graphic & Subtle Blueprint Layer */}
      <div className="absolute inset-0 -z-10 bg-white">
        <img
          src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=2000&q=80"
          alt="Agriculture & Corporate Operations Background"
          className="w-full h-full object-cover opacity-[0.04]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-slate-50/90" />
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* LEFT COLUMN: Narrative & Values (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-6 text-left"
          >
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0A9F3D] text-xs font-bold uppercase tracking-wider">
              <span>ABOUT US</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B5C] tracking-tight">
              Who We Are
            </h2>

            <div className="h-1.5 w-20 bg-gradient-to-r from-[#004AAD] to-[#0A9F3D] rounded-full" />

            {/* Core User Specified Text */}
            <p className="text-lg sm:text-xl text-slate-700 font-medium leading-relaxed">
              {COMPANY_CONFIG.aboutShort}
            </p>

            {/* Expandable detailed corporate background */}
            <AnimatePresence>
              {showFullStory && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-4 pt-2 text-slate-600 text-base leading-relaxed border-t border-slate-100 overflow-hidden"
                >
                  {COMPANY_CONFIG.aboutFull.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>

            {/* More About Us Button */}
            <div>
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                id="about-toggle-story-btn"
                onClick={() => setShowFullStory(!showFullStory)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-[#004AAD] bg-blue-50/80 hover:bg-[#004AAD] hover:text-white transition-all duration-200 border border-blue-100 cursor-pointer"
              >
                <span>{showFullStory ? 'Show Less' : 'More About Us'}</span>
                {showFullStory ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ArrowRight className="w-4 h-4" />
                )}
              </motion.button>
            </div>

            {/* Core Values Panel (4 items) */}
            <div className="pt-6">
              <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">
                Our Core Operating Values
              </h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {COMPANY_CONFIG.values.map((val, idx) => (
                  <motion.div
                    key={val.id}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    id={`value-card-${val.id}`}
                    className="p-4 rounded-xl bg-[#F8FAFD] border border-slate-200/80 hover:border-blue-300 transition-colors flex items-start gap-3.5 shadow-2xs"
                  >
                    <div className="p-2.5 rounded-lg bg-white shadow-2xs shrink-0 border border-slate-100">
                      {getValueIcon(val.iconName)}
                    </div>
                    <div>
                      <h4 className="text-sm font-extrabold text-[#062B5C] tracking-wide">
                        {val.title}
                      </h4>
                      <p className="text-xs font-semibold text-[#004AAD] mt-0.5">
                        “{val.subtitle}”
                      </p>
                      <p className="text-xs text-slate-500 mt-1 leading-snug">
                        {val.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          </motion.div>

          {/* RIGHT COLUMN: Professional Multi-Image Sector Collage (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-70px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative p-3 bg-gradient-to-br from-slate-100 to-slate-50 rounded-3xl border border-slate-200 shadow-xl">
              
              {/* Sector Quad Collage */}
              <div className="grid grid-cols-2 gap-3">
                {/* 1. Agriculture */}
                <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=500&q=80"
                    alt="ETC Agriculture"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    🌾 Agriculture
                  </span>
                </motion.div>

                {/* 2. Transportation */}
                <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=500&q=80"
                    alt="ETC Transportation"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    🚛 Transportation
                  </span>
                </motion.div>

                {/* 3. Procurement & Logistics */}
                <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=500&q=80"
                    alt="ETC Procurement & Logistics"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    📦 Logistics & Ports
                  </span>
                </motion.div>

                {/* 4. Real Estate */}
                <motion.div whileHover={{ scale: 1.03 }} className="relative rounded-2xl overflow-hidden aspect-[4/3] group">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=500&q=80"
                    alt="ETC Real Estate"
                    className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent" />
                  <span className="absolute bottom-2.5 left-2.5 text-xs font-bold text-white bg-black/40 px-2 py-0.5 rounded backdrop-blur-xs">
                    🏢 Real Estate
                  </span>
                </motion.div>
              </div>

              {/* Central Floating Seal */}
              <div className="mt-3 p-4 bg-white rounded-2xl border border-slate-200/90 shadow-sm flex items-center justify-between">
                <div>
                  <p className="text-xs font-extrabold text-[#062B5C] uppercase tracking-wider">
                    Easy Trust Corporation
                  </p>
                  <p className="text-[11px] text-[#0A9F3D] font-bold">
                    Building Trust. Delivering Excellence.
                  </p>
                </div>
                <div className="flex items-center gap-1 text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-full">
                  <CheckCircle className="w-3.5 h-3.5 text-[#0A9F3D]" />
                  <span>Diversified Value</span>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
