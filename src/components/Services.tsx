import React from 'react';
import { COMPANY_CONFIG } from '../data/config';
import { ServiceCard } from './ServiceCard';
import { ServiceItem } from '../types';
import { Layers, ShieldCheck } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicesProps {
  onOpenDetails: (service: ServiceItem) => void;
  onNavigateToAgriculture?: () => void;
}

export const Services: React.FC<ServicesProps> = ({ onOpenDetails, onNavigateToAgriculture }) => {
  return (
    <section id="services" className="py-20 lg:py-28 bg-[#F4F8FC]/60 border-b border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-100/70 text-[#004AAD] text-xs font-bold uppercase tracking-wider">
            <Layers className="w-3.5 h-3.5" />
            <span>Our Services</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B5C] tracking-tight">
            What We Do
          </h2>

          <div className="h-1 w-20 bg-gradient-to-r from-[#004AAD] to-[#0A9F3D] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            We deliver reliable and efficient solutions across key sectors, helping individuals, businesses, and communities grow and thrive.
          </p>
        </motion.div>

        {/* 4 Large Professional Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {COMPANY_CONFIG.services.map((service, idx) => (
            <ServiceCard
              key={service.id}
              service={service}
              onOpenDetails={onOpenDetails}
              onNavigateToAgriculture={onNavigateToAgriculture}
              index={idx}
            />
          ))}
        </div>

        {/* Integrated Corporate Assurance Banner */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-14 p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#004AAD] flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#0A9F3D]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-[#062B5C]">
                Need a Custom Multidisciplinary Solution?
              </h4>
              <p className="text-sm text-slate-600">
                ETC seamlessly integrates Agriculture, Transportation, Logistics, and Real Estate packages for corporate and governmental partners.
              </p>
            </div>
          </div>

          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="shrink-0 inline-flex items-center justify-center px-6 py-3 rounded-xl font-bold text-sm text-white bg-[#062B5C] hover:bg-[#004AAD] transition-colors shadow-sm"
          >
            Consult With Our Experts
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
};
