import React from 'react';
import { ServiceItem } from '../types';
import { Sprout, Truck, Boxes, Building2, ArrowRight, Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceCardProps {
  service: ServiceItem;
  onOpenDetails: (service: ServiceItem) => void;
  onNavigateToAgriculture?: () => void;
  index?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  service,
  onOpenDetails,
  onNavigateToAgriculture,
  index = 0,
}) => {
  // Map icon name to Lucide Icon
  const getIcon = () => {
    switch (service.sectorCode) {
      case 'agri':
        return <Sprout className="w-6 h-6 text-white" />;
      case 'trans':
        return <Truck className="w-6 h-6 text-white" />;
      case 'logistics':
        return <Boxes className="w-6 h-6 text-white" />;
      case 'realestate':
        return <Building2 className="w-6 h-6 text-white" />;
      default:
        return <Sprout className="w-6 h-6 text-white" />;
    }
  };

  const getAccentGradient = () => {
    switch (service.sectorCode) {
      case 'agri':
        return 'from-[#0A9F3D] to-[#20C84A]';
      case 'trans':
        return 'from-[#004AAD] to-[#0066CC]';
      case 'logistics':
        return 'from-[#062B5C] to-[#004AAD]';
      case 'realestate':
        return 'from-[#0066CC] to-[#0A9F3D]';
      default:
        return 'from-[#004AAD] to-[#0A9F3D]';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      id={`service-card-${service.id}`}
      className="group relative flex flex-col bg-white rounded-2xl border border-slate-200/90 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Top Image Banner */}
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
        <motion.img
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6 }}
          src={service.image}
          alt={`${service.title} - Easy Trust Corporation`}
          className="w-full h-full object-cover opacity-95 transition-transform"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-black/20" />

        {/* Sector Icon Floating Badge */}
        <div
          className={`absolute top-4 left-4 w-12 h-12 rounded-xl bg-gradient-to-br ${getAccentGradient()} flex items-center justify-center shadow-md transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}
        >
          {getIcon()}
        </div>

        {/* Sector Metric Tag */}
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-[#062B5C] shadow-xs">
          {service.keyMetric.value}
        </div>

        {/* Image Bottom Overlay Title */}
        <div className="absolute bottom-3 left-4 right-4">
          <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
            ETC Division
          </span>
          <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            {service.title}
          </h3>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            {service.description}
          </p>

          {/* Key Capabilities Preview */}
          <div className="mt-4 pt-4 border-t border-slate-100 space-y-2">
            {service.capabilities.slice(0, 3).map((capability, idx) => (
              <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                <div className="w-4 h-4 rounded-full bg-emerald-50 text-[#0A9F3D] flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-3 h-3 stroke-[3]" />
                </div>
                <span className="line-clamp-1">{capability}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Button: Learn More */}
        <div className="pt-2 flex flex-col gap-2">
          {service.sectorCode === 'agri' && onNavigateToAgriculture && (
            <button
              type="button"
              id="view-agri-page-btn"
              onClick={(e) => {
                e.stopPropagation();
                onNavigateToAgriculture();
              }}
              className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-[#0A9F3D] to-[#20C84A] hover:from-[#087A32] hover:to-[#0A9F3D] transition-all shadow-xs cursor-pointer"
            >
              <Sprout className="w-3.5 h-3.5" />
              <span>Explore Agriculture Page</span>
            </button>
          )}

          <motion.button
            whileTap={{ scale: 0.97 }}
            id={`learn-more-btn-${service.id}`}
            onClick={() => onOpenDetails(service)}
            className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-sm font-bold text-[#004AAD] bg-blue-50/70 hover:bg-[#004AAD] hover:text-white transition-all duration-200 group/btn cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
