import React from 'react';
import { ServiceItem } from '../types';
import { X, CheckCircle2, MessageSquare, ArrowRight, ShieldCheck } from 'lucide-react';
import { getWhatsAppUrl } from '../data/config';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onInquire,
}) => {
  if (!service) return null;

  const whatsappMessage = `Hello Easy Trust Corporation, I would like to inquire specifically about your ${service.title} services.`;
  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-100 transform transition-all my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Image */}
        <div className="relative aspect-[16/8] w-full bg-slate-900">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-900/30 to-black/20" />

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-black/50 text-white hover:bg-black/80 flex items-center justify-center transition-colors backdrop-blur-xs"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Badge & Title */}
          <div className="absolute bottom-4 left-6 right-6 text-white">
            <span className="text-xs uppercase tracking-wider font-extrabold text-emerald-400">
              Easy Trust Corporation Division
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-0.5">
              {service.title}
            </h3>
            <p className="text-xs sm:text-sm text-slate-200 mt-1">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Main Description */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Operational Scope & Overview
            </h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {service.longDescription}
            </p>
          </div>

          {/* Capabilities Checklist */}
          <div>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">
              Core Capabilities & Solutions
            </h4>
            <div className="grid grid-cols-1 gap-2.5">
              {service.capabilities.map((cap, idx) => (
                <div key={idx} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-100">
                  <CheckCircle2 className="w-4 h-4 text-[#0A9F3D] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-slate-700 font-medium">
                    {cap}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Metric Card */}
          <div className="p-4 rounded-2xl bg-blue-50/70 border border-blue-100 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#004AAD]" />
              <div>
                <span className="text-xs text-slate-500 font-semibold">{service.keyMetric.label}</span>
                <p className="text-lg font-extrabold text-[#062B5C]">{service.keyMetric.value}</p>
              </div>
            </div>
            <span className="text-[11px] text-[#004AAD] font-bold bg-white px-2.5 py-1 rounded-full border border-blue-200">
              Verified ETC Standard
            </span>
          </div>

          {/* Modal Actions */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => {
                onInquire(service.title);
                onClose();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-[#004AAD] hover:bg-[#062B5C] shadow-sm transition-colors"
            >
              <span>Inquire via Contact Form</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm text-white bg-[#0A9F3D] hover:bg-[#087A32] shadow-sm transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Direct WhatsApp Inquiry</span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
