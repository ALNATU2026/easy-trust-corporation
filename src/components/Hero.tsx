import React from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { ArrowRight, ShieldCheck, Sprout, Truck, Boxes, Building2, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onSelectSector?: (sectorId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectSector }) => {
  const sectorPills = [
    { id: 'agri', label: 'Agriculture', icon: Sprout, color: 'text-emerald-300', bg: 'bg-emerald-950/60 hover:bg-emerald-900/80', border: 'border-emerald-400/50' },
    { id: 'trans', label: 'Transportation', icon: Truck, color: 'text-sky-300', bg: 'bg-blue-950/60 hover:bg-blue-900/80', border: 'border-sky-400/50' },
    { id: 'logistics', label: 'Procurement & Logistics', icon: Boxes, color: 'text-teal-300', bg: 'bg-teal-950/60 hover:bg-teal-900/80', border: 'border-teal-400/50' },
    { id: 'realestate', label: 'Real Estate', icon: Building2, color: 'text-indigo-300', bg: 'bg-indigo-950/60 hover:bg-indigo-900/80', border: 'border-indigo-400/50' },
  ];

  return (
    <section id="home" className="relative overflow-hidden bg-[#062B5C] text-white pt-10 pb-20 lg:pt-16 lg:pb-28 border-b border-slate-800">
      
      {/* Background Atmosphere Image Layer */}
      <div className="absolute inset-0 -z-20 overflow-hidden">
        <motion.img
          initial={{ scale: 1.05 }}
          animate={{ scale: [1.05, 1.12, 1.05] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Easy Trust Corporation Global Operations"
          className="w-full h-full object-cover object-center opacity-25"
          loading="eager"
        />
        {/* Multi-tone Deep Navy & Corporate Emerald Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062B5C] via-[#062B5C]/95 to-[#004AAD]/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(10,159,61,0.22),transparent_70%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,102,204,0.25),transparent_70%)]" />
      </div>

      {/* Animated Floating Particle / Light Orbs */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
          opacity: [0.15, 0.3, 0.15],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-10 w-72 h-72 rounded-full bg-[#20C84A]/20 blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 40, 0],
          opacity: [0.2, 0.35, 0.2],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-[#0066CC]/25 blur-3xl pointer-events-none -z-10"
      />

      {/* Decorative Blueprint Texture */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(#20C84A_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.06] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Brand Messaging & CTAs (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-7 flex flex-col justify-center space-y-6 text-left"
          >
            
            {/* Trust Slogan Chip */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm self-start"
            >
              <span className="flex h-2 w-2 rounded-full bg-[#20C84A] animate-ping" />
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-emerald-300">
                {COMPANY_CONFIG.slogan}
              </span>
            </motion.div>

            {/* ========================================================================= */}
            {/* DEDICATED BACKGROUND IMAGE DESIGN BOX FOR THE SPECIFIED INTRO SECTION     */}
            {/* "Welcome to Easy Trust Corporation (ETC)... Our Core Operating Pillars"    */}
            {/* ========================================================================= */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.7 }}
              id="hero-intro-featured-banner"
              className="relative p-6 sm:p-8 lg:p-9 rounded-3xl overflow-hidden border border-white/25 shadow-2xl backdrop-blur-xl bg-slate-900/60 group"
            >
              {/* Dedicated High-Impact Background Image */}
              <div className="absolute inset-0 -z-10 overflow-hidden">
                <motion.img
                  initial={{ scale: 1 }}
                  animate={{ scale: [1, 1.06, 1] }}
                  transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1400&q=80"
                  alt="Easy Trust Corporation Global Corporate Growth"
                  className="w-full h-full object-cover object-center opacity-30 group-hover:opacity-40 transition-opacity duration-700"
                />
                
                {/* Multi-layered corporate gradient overlay protecting text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#062B5C]/95 via-[#004AAD]/85 to-[#0A9F3D]/80 mix-blend-multiply" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/95 via-transparent to-[#062B5C]/40" />
                
                {/* Subtle illuminated accent line on top edge */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#20C84A] to-transparent" />
              </div>

              {/* Main Headings */}
              <div className="space-y-2">
                <motion.p
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="text-sm sm:text-base font-bold text-emerald-400 uppercase tracking-widest flex items-center gap-2"
                >
                  <span className="w-6 h-[2px] bg-[#20C84A] rounded-full inline-block" />
                  Welcome to
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.45, duration: 0.6 }}
                  className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-extrabold text-white leading-[1.12] tracking-tight drop-shadow-md"
                >
                  Easy Trust Corporation <span className="text-[#20C84A] font-black">(ETC)</span>
                </motion.h1>

                <div className="h-1.5 w-24 bg-gradient-to-r from-[#20C84A] via-emerald-400 to-[#0066CC] rounded-full my-3 shadow-sm" />

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.55, duration: 0.6 }}
                  className="text-lg sm:text-xl md:text-2xl font-bold text-sky-100 italic tracking-wide"
                >
                  “Building Trust. Delivering Excellence.”
                </motion.p>
              </div>

              {/* Supporting Positioning Statement */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65, duration: 0.6 }}
                className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal mt-4 drop-shadow-sm"
              >
                {COMPANY_CONFIG.positioning}
              </motion.p>

              {/* Quick Sector Tags: Our Core Operating Pillars */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="pt-5 mt-5 border-t border-white/15"
              >
                <p className="text-xs font-bold text-emerald-300 uppercase tracking-wider mb-3 flex items-center gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Our Core Operating Pillars:</span>
                </p>
                <div className="flex flex-wrap gap-2.5">
                  {sectorPills.map((pill) => {
                    const Icon = pill.icon;
                    return (
                      <motion.a
                        key={pill.id}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.96 }}
                        href={`#services`}
                        onClick={() => onSelectSector && onSelectSector(pill.id)}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold border backdrop-blur-md ${pill.bg} ${pill.border} ${pill.color} transition-colors duration-200 shadow-sm`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        <span>{pill.label}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.85, duration: 0.6 }}
              className="pt-2 flex flex-wrap items-center gap-4"
            >
              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                id="hero-explore-services-cta"
                href="#services"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold text-[#062B5C] bg-white hover:bg-emerald-300 rounded-xl shadow-xl transition-all duration-200"
              >
                <span>Explore Our Services</span>
                <ArrowRight className="w-5 h-5 text-[#062B5C]" />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.98 }}
                id="hero-learn-more-cta"
                href="#about"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md shadow-lg transition-all duration-200"
              >
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 text-slate-300" />
              </motion.a>
            </motion.div>

            {/* Credibility Markers */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.95, duration: 0.6 }}
              className="pt-2 border-t border-white/15 flex flex-wrap items-center gap-6 text-xs text-slate-300 font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#20C84A]" />
                <span>Multidisciplinary Operations</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400" />
                <span>Headquarters in Freetown</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Quality & Integrity</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT COLUMN: Professional Multi-Sector Collage (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: "easeOut" }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              
              {/* Outer decorative framed glow */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#0066CC]/30 via-[#20C84A]/30 to-[#062B5C]/50 rounded-3xl blur-2xl -z-10" />

              {/* Main Collage Grid representing the 4 sectors */}
              <div className="grid grid-cols-2 gap-3.5 p-3.5 bg-white/10 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl">
                
                {/* 1. Agriculture Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md"
                >
                  <img
                    src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=600&q=80"
                    alt="Agriculture and sustainable farming"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/95 via-transparent to-black/20" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#0A9F3D] flex items-center justify-center">
                        <Sprout className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-xs font-bold tracking-wide">Agriculture</span>
                    </div>
                  </div>
                </motion.div>

                {/* 2. Transportation Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md"
                >
                  <img
                    src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=600&q=80"
                    alt="Transportation fleet trucks"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/95 via-transparent to-black/20" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#004AAD] flex items-center justify-center">
                        <Truck className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-xs font-bold tracking-wide">Transportation</span>
                    </div>
                  </div>
                </motion.div>

                {/* 3. Procurement & Logistics Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md"
                >
                  <img
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80"
                    alt="Procurement and supply chain warehouse"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/95 via-transparent to-black/20" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#087A32] flex items-center justify-center">
                        <Boxes className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-xs font-bold tracking-wide">Logistics</span>
                    </div>
                  </div>
                </motion.div>

                {/* 4. Real Estate Card */}
                <motion.div
                  whileHover={{ scale: 1.03 }}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-900 shadow-md"
                >
                  <img
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80"
                    alt="Modern commercial and residential real estate"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C]/95 via-transparent to-black/20" />
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between text-white">
                    <div className="flex items-center gap-1.5">
                      <div className="w-6 h-6 rounded-md bg-[#0066CC] flex items-center justify-center">
                        <Building2 className="w-3.5 h-3.5 text-white" />
                      </div>
                      <span className="text-xs font-bold tracking-wide">Real Estate</span>
                    </div>
                  </div>
                </motion.div>

              </div>

              {/* Floating Center Badge: Trust & Excellence Handshake Overlay */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[92%] sm:w-[88%] bg-white/95 backdrop-blur-md p-3.5 rounded-2xl border border-white/40 shadow-2xl flex items-center justify-between gap-3 text-slate-800"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#062B5C] to-[#004AAD] text-white flex items-center justify-center shrink-0 shadow-sm">
                    <ShieldCheck className="w-5 h-5 text-[#20C84A]" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold text-[#062B5C] uppercase tracking-wide">
                      Easy Trust Corporation
                    </h4>
                    <p className="text-[11px] text-slate-600 font-medium">
                      Building Trust. Delivering Excellence.
                    </p>
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#contact"
                  className="shrink-0 px-3 py-1.5 bg-[#0A9F3D] hover:bg-[#087A32] text-white font-bold text-xs rounded-lg transition-colors shadow-xs"
                >
                  Partner With Us
                </motion.a>
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
