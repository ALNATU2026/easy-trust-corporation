import React, { useState, useEffect } from 'react';
import { EtcLogo } from './EtcLogo';
import { COMPANY_CONFIG, getWhatsAppUrl, getTelUrl } from '../data/config';
import { Menu, X, Phone, MessageSquare, Search, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeaderProps {
  onOpenSearch: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({ onOpenSearch, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About Us', href: '#about', id: 'about' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Our Impact', href: '#impact', id: 'impact' },
    { label: 'Why Choose Us', href: '#why-choose-us', id: 'why-choose-us' },
    { label: 'News & Updates', href: '#news', id: 'news' },
    { label: 'Contact Us', href: '#contact', id: 'contact' },
  ];

  return (
    <>
      {/* Top Corporate Notice Bar */}
      <div id="top-utility-bar" className="bg-[#062B5C] text-slate-200 text-xs py-2 px-4 border-b border-white/10 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="w-2 h-2 rounded-full bg-[#20C84A] animate-pulse"></span>
              {COMPANY_CONFIG.slogan}
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-300">Freetown, Sierra Leone</span>
          </div>

          <div className="flex items-center gap-5">
            <a
              id="topbar-phone-link"
              href={getTelUrl()}
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#20C84A] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#20C84A]" />
              <span>{COMPANY_CONFIG.contact.phoneDisplay}</span>
            </a>
            <span className="text-slate-400">|</span>
            <a
              id="topbar-whatsapp-link"
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-slate-200 hover:text-[#20C84A] transition-colors"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#20C84A]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Navigation Bar */}
      <header
        id="main-sticky-header"
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5'
            : 'bg-white py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              id="header-brand-logo-link"
              href="#home"
              className="focus:outline-none focus:ring-2 focus:ring-[#004AAD] rounded-lg transition-transform hover:scale-[1.01]"
              aria-label="Easy Trust Corporation Homepage"
            >
              <EtcLogo variant="full" />
            </a>

            {/* Desktop Navigation Links */}
            <nav id="desktop-nav-menu" className="hidden lg:flex items-center gap-1 xl:gap-2" aria-label="Main Navigation">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.id}
                    id={`nav-link-${item.id}`}
                    href={item.href}
                    className={`px-3 py-2 text-sm font-semibold rounded-md transition-all duration-200 ${
                      isActive
                        ? 'text-[#004AAD] bg-blue-50/80 font-bold'
                        : 'text-slate-700 hover:text-[#004AAD] hover:bg-slate-50'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Action Buttons: Search & Get In Touch CTA */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                id="header-search-trigger-btn"
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-[#004AAD] hover:bg-slate-100 rounded-full transition-colors cursor-pointer"
                aria-label="Search website"
                title="Search website"
              >
                <Search className="w-4 h-4" />
              </button>

              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                id="header-get-in-touch-cta"
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold text-white bg-gradient-to-r from-[#0A9F3D] to-[#20C84A] hover:from-[#087A32] hover:to-[#0A9F3D] rounded-full shadow-sm hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#20C84A] focus:ring-offset-2"
              >
                <span>Get In Touch</span>
                <ChevronRight className="w-4 h-4" />
              </motion.a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                id="header-mobile-search-btn"
                onClick={onOpenSearch}
                className="p-2 text-slate-600 hover:text-[#004AAD] hover:bg-slate-100 rounded-full cursor-pointer"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>
              
              <button
                id="header-mobile-menu-toggle-btn"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-slate-700 hover:text-[#004AAD] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-[#004AAD] cursor-pointer"
                aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              id="mobile-nav-drawer"
              className="lg:hidden bg-white border-t border-slate-200 shadow-xl overflow-hidden"
            >
              <div className="px-4 pt-3 pb-6 space-y-1">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    id={`mobile-nav-link-${item.id}`}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="block px-4 py-3 text-base font-semibold text-slate-800 rounded-lg hover:bg-slate-50 hover:text-[#004AAD]"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                  <a
                    id="mobile-menu-cta-contact"
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 font-bold text-white bg-gradient-to-r from-[#0A9F3D] to-[#20C84A] rounded-xl shadow-sm"
                  >
                    <span>Get In Touch</span>
                    <ChevronRight className="w-4 h-4" />
                  </a>

                  <div className="grid grid-cols-2 gap-2 pt-2">
                    <a
                      id="mobile-menu-call-action"
                      href={getTelUrl()}
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-blue-50 text-[#004AAD] text-xs font-semibold rounded-lg"
                    >
                      <Phone className="w-3.5 h-3.5" />
                      <span>Call Now</span>
                    </a>
                    <a
                      id="mobile-menu-whatsapp-action"
                      href={getWhatsAppUrl()}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-1.5 py-2.5 px-3 bg-emerald-50 text-[#0A9F3D] text-xs font-semibold rounded-lg"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};
