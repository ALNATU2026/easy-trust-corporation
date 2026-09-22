import React from 'react';
import { COMPANY_CONFIG, getWhatsAppUrl, getTelUrl, getMailtoUrl } from '../data/config';
import { ContactForm } from './ContactForm';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ExternalLink,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Building,
} from 'lucide-react';
import { motion } from 'motion/react';

export const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Background Image Layer with Corporate Soft Overlays */}
      <div className="absolute inset-0 -z-10 bg-slate-50">
        <img
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
          alt="Corporate Commerce Background"
          className="w-full h-full object-cover opacity-10"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-[#F8FAFD]/92 to-white/97" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#004AAD]/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A9F3D]/5 rounded-full blur-3xl pointer-events-none" />
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
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 text-[#0A9F3D] text-xs font-bold uppercase tracking-wider">
            <Building className="w-3.5 h-3.5" />
            <span>Connect With Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#062B5C] tracking-tight">
            Let’s Work Together
          </h2>

          <div className="h-1.5 w-20 bg-gradient-to-r from-[#004AAD] to-[#0A9F3D] rounded-full mx-auto" />

          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
            Have a project, partnership opportunity, or inquiry? Get in touch with Easy Trust Corporation.
          </p>
        </motion.div>

        {/* Content Grid: Form (7 cols) & Contact Cards (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Interactive Contact Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <ContactForm />
          </motion.div>

          {/* Right Column: Contact Cards & Channels (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 space-y-5"
          >
            
            {/* 1. Official Location Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-blue-100 text-[#004AAD] flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Corporate Headquarters
                  </h4>
                  <p className="text-base font-bold text-[#062B5C] mt-0.5">
                    {COMPANY_CONFIG.contact.address}
                  </p>
                  <p className="text-xs text-slate-500 mt-1">
                    Operating across key agricultural basins, major transit highways, and regional commercial hubs in West Africa.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 2. Direct Phone Lines */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-[#0A9F3D] flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Telephone Dispatch
                  </h4>
                  <p className="text-base font-bold text-[#062B5C] mt-0.5">
                    {COMPANY_CONFIG.contact.phoneDisplay}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      id="contact-call-btn-primary"
                      href={getTelUrl(COMPANY_CONFIG.contact.phone)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-50 text-[#004AAD] hover:bg-[#004AAD] hover:text-white rounded-lg text-xs font-bold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Line 1</span>
                    </motion.a>
                    <motion.a
                      whileTap={{ scale: 0.95 }}
                      id="contact-call-btn-secondary"
                      href={getTelUrl(COMPANY_CONFIG.contact.phoneSecondary)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 text-slate-700 hover:bg-slate-200 rounded-lg text-xs font-bold transition-colors"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Line 2</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. Official Email */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-[#F8FAFD] border border-slate-200/80 shadow-2xs hover:border-blue-300 transition-colors"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 text-[#0066CC] flex items-center justify-center shrink-0">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                    Electronic Mail
                  </h4>
                  <p className="text-base font-bold text-[#062B5C] mt-0.5">
                    {COMPANY_CONFIG.contact.email}
                  </p>
                  <div className="mt-2.5">
                    <a
                      id="contact-email-btn"
                      href={getMailtoUrl()}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#004AAD] hover:text-[#0A9F3D] transition-colors"
                    >
                      <span>Compose Message</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 4. WhatsApp Direct Action Card */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="p-6 rounded-2xl bg-gradient-to-br from-[#0A9F3D]/10 via-emerald-50 to-white border border-[#20C84A]/40 shadow-xs"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#20C84A] text-white flex items-center justify-center shrink-0 shadow-sm">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-extrabold text-[#0A9F3D] uppercase tracking-wider">
                      Direct WhatsApp
                    </h4>
                    <span className="flex h-2 w-2 rounded-full bg-[#20C84A] animate-ping" />
                  </div>
                  <p className="text-sm font-bold text-[#062B5C] mt-0.5">
                    Instant Corporate Messaging
                  </p>
                  <p className="text-xs text-slate-600 mt-1">
                    Connect directly with our representative on WhatsApp for quick estimates and operational updates.
                  </p>
                  <div className="mt-3">
                    <motion.a
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      id="contact-whatsapp-direct-btn"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#0A9F3D] hover:bg-[#087A32] text-white text-xs font-bold rounded-xl shadow-xs transition-colors"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Open WhatsApp Chat</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Operating Hours & Corporate Social */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-3">
              <div className="flex items-center gap-2 text-slate-700 font-semibold">
                <Clock className="w-4 h-4 text-[#004AAD]" />
                <span>{COMPANY_CONFIG.contact.workingHours}</span>
              </div>
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <span className="text-[11px] font-bold text-slate-400 uppercase">Connect Socially:</span>
                <div className="flex items-center gap-3">
                  <a href={COMPANY_CONFIG.social.facebook} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#004AAD] transition-colors" aria-label="Facebook">
                    <Facebook className="w-4 h-4" />
                  </a>
                  <a href={COMPANY_CONFIG.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#004AAD] transition-colors" aria-label="LinkedIn">
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a href={COMPANY_CONFIG.social.instagram} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#004AAD] transition-colors" aria-label="Instagram">
                    <Instagram className="w-4 h-4" />
                  </a>
                  <a href={COMPANY_CONFIG.social.twitter} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#004AAD] transition-colors" aria-label="X / Twitter">
                    <Twitter className="w-4 h-4" />
                  </a>
                  <a href={COMPANY_CONFIG.social.youtube} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-[#004AAD] transition-colors" aria-label="YouTube">
                    <Youtube className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};
