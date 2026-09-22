import React from 'react';
import { COMPANY_CONFIG, getWhatsAppUrl, getTelUrl } from '../data/config';
import { ArrowRight, Phone, MessageSquare, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

export const CTA: React.FC = () => {
  return (
    <section className="relative py-20 lg:py-24 overflow-hidden">
      {/* Background Image with Dark & Gradient Overlays */}
      <div className="absolute inset-0 -z-10 bg-slate-900 overflow-hidden">
        <motion.img
          initial={{ scale: 1 }}
          animate={{ scale: [1, 1.08, 1] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
          alt="ETC Logistics & Corporate Expansion"
          className="w-full h-full object-cover opacity-25"
          loading="lazy"
        />
        {/* Blue to Green Corporate Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#062B5C]/95 via-[#004AAD]/90 to-[#0A9F3D]/85 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto space-y-6"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-md text-emerald-300 text-xs font-bold uppercase tracking-wider border border-white/20">
            <ShieldCheck className="w-4 h-4 text-emerald-300" />
            <span>{COMPANY_CONFIG.slogan}</span>
          </div>

          {/* Heading & Main Text */}
          <div className="space-y-3">
            <p className="text-xl sm:text-2xl font-bold text-emerald-300 tracking-wide">
              Let’s Grow Together
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Partner with Easy Trust Corporation
            </h2>
          </div>

          {/* Supporting Text */}
          <p className="text-lg sm:text-xl text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
            For reliable, innovative and sustainable solutions across Agriculture, Transportation, Logistics, and Real Estate.
          </p>

          {/* Slogan reinforcement */}
          <p className="text-sm font-semibold tracking-widest uppercase text-sky-200">
            “Building Trust. Delivering Excellence.”
          </p>

          {/* Action Buttons */}
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              id="cta-contact-us-btn"
              href="#contact"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-4 text-base font-extrabold text-[#062B5C] bg-white hover:bg-emerald-300 rounded-xl shadow-xl transition-all duration-200"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 text-[#062B5C]" />
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              id="cta-whatsapp-quick-btn"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-emerald-600/90 hover:bg-emerald-500 border border-emerald-400/40 rounded-xl shadow-lg transition-all duration-200"
            >
              <MessageSquare className="w-5 h-5 text-white" />
              <span>Chat on WhatsApp</span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              id="cta-call-quick-btn"
              href={getTelUrl()}
              className="inline-flex items-center justify-center gap-2 px-6 py-4 text-base font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl backdrop-blur-md transition-all duration-200"
            >
              <Phone className="w-4 h-4 text-white" />
              <span>Call +232 75 195 672</span>
            </motion.a>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
