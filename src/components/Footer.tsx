import React from 'react';
import { EtcLogo } from './EtcLogo';
import { COMPANY_CONFIG, getWhatsAppUrl, getTelUrl, getMailtoUrl } from '../data/config';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  ChevronRight,
  ShieldCheck,
} from 'lucide-react';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Our Impact', href: '#impact' },
    { label: 'Why Choose Us', href: '#why-choose-us' },
    { label: 'News & Updates', href: '#news' },
    { label: 'Contact Us', href: '#contact' },
  ];

  const serviceLinks = [
    { label: 'Agriculture', href: '#services' },
    { label: 'Transportation', href: '#services' },
    { label: 'Procurement & Logistics', href: '#services' },
    { label: 'Real Estate', href: '#services' },
  ];

  return (
    <footer id="corporate-footer" className="bg-[#062B5C] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-14 border-b border-white/10">
          
          {/* Column 1: Brand Info (5 cols) */}
          <div className="lg:col-span-5 space-y-5">
            <a href="#home" className="inline-block focus:outline-none" aria-label="Easy Trust Corporation">
              <EtcLogo variant="white" />
            </a>

            <p className="text-sm font-semibold text-emerald-400">
              “{COMPANY_CONFIG.slogan}”
            </p>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              {COMPANY_CONFIG.positioning}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={COMPANY_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#20C84A] hover:text-[#062B5C] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#20C84A] hover:text-[#062B5C] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#20C84A] hover:text-[#062B5C] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#20C84A] hover:text-[#062B5C] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="X (Twitter)"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href={COMPANY_CONFIG.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-white/10 hover:bg-[#20C84A] hover:text-[#062B5C] text-slate-300 flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-slate-500" />
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Our Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {serviceLinks.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="hover:text-emerald-400 transition-colors inline-flex items-center gap-1.5"
                  >
                    <ChevronRight className="w-3 h-3 text-emerald-500" />
                    <span>{service.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <div className="pt-2">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[11px] text-slate-300">
                <span className="font-bold text-emerald-400 block mb-0.5">Integrity & Quality</span>
                All divisions operate under stringent corporate safety & compliance standards.
              </div>
            </div>
          </div>

          {/* Column 4: Contact Us (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider">
              Contact Us
            </h4>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>{COMPANY_CONFIG.contact.address} and beyond</span>
              </div>

              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={getTelUrl()} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.contact.phoneDisplay}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a href={getMailtoUrl()} className="hover:text-white transition-colors">
                  {COMPANY_CONFIG.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-semibold transition-colors"
                >
                  WhatsApp: +232 75 195 672
                </a>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#0A9F3D] hover:bg-[#20C84A] hover:text-[#062B5C] text-white text-xs font-bold rounded-xl transition-all shadow-sm"
              >
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Direct WhatsApp Chat</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Footer Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            <p>© 2026 Easy Trust Corporation (ETC). All rights reserved.</p>
            <p className="text-[11px] text-slate-500 mt-0.5">
              “Building Trust. Delivering Excellence.”
            </p>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors"
            >
              Terms & Conditions
            </button>
            <a
              href="#home"
              className="hover:text-emerald-400 transition-colors"
            >
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
