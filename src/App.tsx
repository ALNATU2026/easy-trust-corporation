/**
 * Easy Trust Corporation (ETC)
 * “Building Trust. Delivering Excellence.”
 * 
 * Official Corporate Website Application
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Impact } from './components/Impact';
import { CTA } from './components/CTA';
import { News } from './components/News';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BackToTop } from './components/BackToTop';
import { SearchModal } from './components/SearchModal';
import { ServiceDetailModal } from './components/ServiceDetailModal';
import { ArticleDetailModal } from './components/ArticleDetailModal';
import { PrivacyTermsModal } from './components/PrivacyTermsModal';
import { ServiceItem, NewsArticle } from './types';
import { COMPANY_CONFIG } from './data/config';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  // Intersection observer to track active section for nav highlighting
  useEffect(() => {
    const sectionIds = ['home', 'about', 'services', 'impact', 'why-choose-us', 'news', 'contact'];
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSelectSector = (sectorCode: string) => {
    const s = COMPANY_CONFIG.services.find(item => item.sectorCode === sectorCode);
    if (s) {
      setSelectedService(s);
    }
  };

  const handleInquireFromModal = (serviceTitle: string) => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      // Pre-fill subject if possible
      const subjectInput = document.getElementById('contact-subject') as HTMLInputElement | null;
      if (subjectInput) {
        subjectInput.value = `Inquiry regarding ${serviceTitle}`;
      }
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F8FAFD] text-slate-800 font-sans selection:bg-[#0A9F3D] selection:text-white">
      
      {/* 1. Header with Sticky Navigation & Logo */}
      <Header
        activeSection={activeSection}
        onOpenSearch={() => setSearchOpen(true)}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* 2. Hero Section with Multi-Sector Showcase */}
        <Hero onSelectSector={handleSelectSector} />

        {/* 3. About Us Section with Who We Are & Values Panel */}
        <About />

        {/* 4. Services Section with 4 Large Service Cards */}
        <Services onOpenDetails={(service) => setSelectedService(service)} />

        {/* 5. Our Impact Section (Dark Blue with Key Metrics) */}
        <Impact />

        {/* 6. Why Choose Us (4 Feature Cards) */}
        <WhyChooseUs />

        {/* 7. Call To Action (Large Blue/Green Gradient Banner) */}
        <CTA />

        {/* 8. News & Updates Section */}
        <News onReadArticle={(article) => setSelectedArticle(article)} />

        {/* 9. Contact Us Section with Form, Phone, Email, WhatsApp */}
        <Contact />
      </main>

      {/* 10. Corporate Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
      />

      {/* 11. Floating WhatsApp & Mobile Call Buttons */}
      <FloatingWhatsApp />

      {/* 12. Back To Top Floating Trigger */}
      <BackToTop />

      {/* Search Modal */}
      <SearchModal
        isOpen={searchOpen}
        onClose={() => setSearchOpen(false)}
        onSelectService={(service) => setSelectedService(service)}
        onSelectArticle={(article) => setSelectedArticle(article)}
      />

      {/* Service Details Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromModal}
      />

      {/* Article Details Modal */}
      <ArticleDetailModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      {/* Privacy Policy & Terms Modal */}
      <PrivacyTermsModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />

    </div>
  );
}
