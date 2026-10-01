import React, { useState } from 'react';
import { AGRI_PRACTICES, AGRI_STATS, AGRI_FAQS, AgriPractice } from '../data/agricultureData';
import { COMPANY_CONFIG, getWhatsAppUrl, getTelUrl } from '../data/config';
import {
  ArrowLeft,
  Sprout,
  CheckCircle2,
  Calendar,
  Layers,
  ChevronRight,
  Phone,
  MessageSquare,
  Shield,
  Droplets,
  ExternalLink,
  X,
  Award,
  Users,
  Wheat,
  Clock,
  Sparkles,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { playMenuHoverSound, playCtaHoverSound } from '../utils/audio';

interface AgriculturePageProps {
  onBackToHome: () => void;
  onNavigateContact?: () => void;
}

export const AgriculturePage: React.FC<AgriculturePageProps> = ({ onBackToHome }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalPractice, setActiveModalPractice] = useState<AgriPractice | null>(null);
  const [inquiryType, setInquiryType] = useState<string>('Wholesale Produce Purchase');
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);
  const [inquiryForm, setInquiryForm] = useState({
    name: '',
    phone: '',
    email: '',
    interest: 'Fresh Table Eggs & Broiler Meat',
    notes: '',
  });

  const categories = [
    { id: 'all', label: 'All Operations' },
    { id: 'crop', label: 'Crop Farm' },
    { id: 'poultry', label: 'Poultry Farm' },
    { id: 'fish', label: 'Fish Ponds & Aquaculture' },
    { id: 'greenhouse', label: 'Greenhouse Horticulture' },
    { id: 'processing', label: 'Agro-Processing & Milling' },
    { id: 'mechanization', label: 'Mechanization Fleet' },
  ];

  const filteredPractices = AGRI_PRACTICES.filter((p) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'crop') return p.id === 'crop-farm';
    if (selectedCategory === 'poultry') return p.id === 'poultry-farm';
    if (selectedCategory === 'fish') return p.id === 'fish-ponds';
    if (selectedCategory === 'greenhouse') return p.id === 'greenhouse-farming';
    if (selectedCategory === 'processing') return p.id === 'agro-processing';
    if (selectedCategory === 'mechanization') return p.id === 'farm-mechanization';
    return true;
  });

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setInquiryForm({ name: '', phone: '', email: '', interest: 'Fresh Table Eggs & Broiler Meat', notes: '' });
    }, 5000);
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-20">
      
      {/* 1. Sub-Header Navigation & Breadcrumbs Bar */}
      <div className="bg-[#062B5C] text-white border-b border-white/10 sticky top-[69px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playMenuHoverSound();
                onBackToHome();
              }}
              onMouseEnter={playMenuHoverSound}
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer group"
              aria-label="Back to Easy Trust Corporation Homepage"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Corporate Home</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-xs sm:text-sm font-medium text-slate-300 truncate">
              Agriculture & Food Systems Division
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-xs font-semibold text-slate-300">
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-[#20C84A] animate-pulse"></span>
              Farming Operations Active
            </span>
            <span>·</span>
            <a
              href={getWhatsAppUrl('Hello ETC, I am inquiring about your agricultural produce and farm operations.')}
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={playMenuHoverSound}
              className="hover:text-[#20C84A] transition-colors"
            >
              Wholesale Dispatch Desk
            </a>
          </div>
        </div>
      </div>

      {/* 2. Hero Section: Agriculture Division */}
      <section className="relative overflow-hidden bg-[#062B5C] text-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-800">
        
        {/* Background Image Layer */}
        <div className="absolute inset-0 -z-20 overflow-hidden">
          <motion.img
            initial={{ scale: 1.05 }}
            animate={{ scale: [1.05, 1.1, 1.05] }}
            transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
            src="/src/assets/images/agri_crop_farm_1790887233415.jpg"
            alt="Easy Trust Corporation Commercial Crop Farm"
            className="w-full h-full object-cover object-center opacity-30"
            onError={(e) => {
              // Resilient fallback
              const target = e.target as HTMLImageElement;
              target.src = 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1800&q=80';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#062B5C] via-[#062B5C]/95 to-[#0A9F3D]/80 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#062B5C] via-transparent to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-6">
            
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <Sprout className="w-4 h-4 text-[#20C84A]" />
              <span>Easy Trust Corporation</span>
              <span aria-hidden="true">·</span>
              <span>Pillar 01: Sustainable Agribusiness</span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] text-balance">
              Commercial Crop Farming, Modern Poultry, Aquaculture & Integrated Agricultural Practices
            </h1>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Easy Trust Corporation (ETC) operates commercial agricultural estates across Sierra Leone and West Africa. We combine mechanized crop cultivation, bio-secure poultry housing, high-yield freshwater fish ponds, climate-resilient greenhouses, and industrial agro-processing to safeguard food security and deliver export-grade produce.
            </p>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#practices-showcase"
                onMouseEnter={playCtaHoverSound}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-[#062B5C] bg-[#20C84A] hover:bg-emerald-300 rounded-xl shadow-lg transition-all"
              >
                <span>Explore Agricultural Practices</span>
                <ChevronRight className="w-4 h-4 text-[#062B5C]" />
              </a>

              <a
                href="#agri-inquiry-section"
                onMouseEnter={playCtaHoverSound}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/25 rounded-xl backdrop-blur-md transition-all"
              >
                <span>Wholesale & Supply Inquiries</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Operational Proof Stats Bar */}
      <section className="bg-white border-b border-slate-200 py-8 relative -mt-6 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-md z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {AGRI_STATS.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#062B5C] tracking-tight tabular-nums flex items-baseline gap-1">
                <span>{stat.value}</span>
                <span className="text-xs font-bold text-[#0A9F3D] uppercase">{stat.unit}</span>
              </div>
              <p className="text-xs font-bold text-slate-700">{stat.label}</p>
              <p className="text-[11px] text-slate-500 leading-snug">{stat.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Interactive Category Filter Bar */}
      <section id="practices-showcase" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#0A9F3D] mb-1">
              <Wheat className="w-4 h-4" />
              <span>Full Agricultural Spectrum</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#062B5C] tracking-tight">
              Operational Practices & Facilities
            </h2>
            <p className="text-sm text-slate-600 mt-1 max-w-2xl">
              Inspect our specialized agricultural divisions, standard operating procedures, yields, and biosecurity protocols.
            </p>
          </div>

          {/* Category Filter Pills (Functional Buttons) */}
          <div className="flex flex-wrap gap-1.5 p-1 bg-slate-200/70 rounded-xl">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  playMenuHoverSound();
                  setSelectedCategory(cat.id);
                }}
                onMouseEnter={playMenuHoverSound}
                className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat.id
                    ? 'bg-[#004AAD] text-white shadow-sm'
                    : 'text-slate-700 hover:text-[#004AAD] hover:bg-white/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* 5. Detailed Cards Grid for Each Practice */}
        <div className="space-y-12">
          {filteredPractices.map((practice, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6 }}
                id={`practice-${practice.id}`}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
                  
                  {/* Visual Asset Container (5 cols) */}
                  <div className={`lg:col-span-5 relative min-h-[300px] lg:min-h-[420px] bg-slate-900 overflow-hidden ${isReversed ? 'lg:order-2' : ''}`}>
                    <img
                      src={practice.image}
                      alt={practice.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = practice.fallbackImage;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    {/* Floating Practice Tag on Image */}
                    <div className="absolute top-4 left-4 flex items-center gap-2">
                      <span className="px-3 py-1 bg-black/60 backdrop-blur-md text-emerald-300 border border-white/20 text-xs font-bold rounded-md">
                        {practice.category}
                      </span>
                    </div>

                    {/* Image Footer Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                      <p className="font-bold text-sm text-emerald-300">{practice.title}</p>
                      <p className="text-slate-300 text-[11px] line-clamp-2">{practice.outputs}</p>
                    </div>
                  </div>

                  {/* Informational Body (7 cols) */}
                  <div className={`lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between ${isReversed ? 'lg:order-1' : ''}`}>
                    <div className="space-y-4">
                      
                      {/* Quiet Unboxed Metadata */}
                      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                        <span className="text-[#0A9F3D] font-bold">{practice.badge}</span>
                        <span aria-hidden="true">·</span>
                        <span>Commercial Standards</span>
                        <span aria-hidden="true">·</span>
                        <span>Sierra Leone Operations</span>
                      </div>

                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B5C] tracking-tight">
                        {practice.title}
                      </h3>

                      <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                        {practice.fullDesc}
                      </p>

                      {/* Operational Highlights */}
                      <div className="space-y-2 pt-2">
                        <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                          Key Operational Capabilities:
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {practice.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-[#0A9F3D] shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Technical Specs Strip */}
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-3 border-t border-slate-100">
                        {practice.specs.map((spec, i) => (
                          <div key={i} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                            <span className="text-[10px] text-slate-500 block uppercase font-medium truncate">
                              {spec.label}
                            </span>
                            <span className="text-xs font-extrabold text-[#062B5C] truncate block mt-0.5">
                              {spec.value}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                    {/* Bottom Actions */}
                    <div className="pt-6 mt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                      <button
                        onClick={() => {
                          playCtaHoverSound();
                          setActiveModalPractice(practice);
                        }}
                        onMouseEnter={playMenuHoverSound}
                        className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#004AAD] hover:bg-[#062B5C] text-white text-xs font-bold rounded-xl shadow-xs transition-colors cursor-pointer"
                      >
                        <span>View Technical Blueprint</span>
                        <ChevronRight className="w-4 h-4" />
                      </button>

                      <a
                        href={getWhatsAppUrl(`Hello Easy Trust Corporation, I am interested in ordering produce or partnering on: ${practice.title}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onMouseEnter={playMenuHoverSound}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-[#0A9F3D] hover:text-[#087A32] transition-colors"
                      >
                        <MessageSquare className="w-4 h-4" />
                        <span>Inquire About {practice.category}</span>
                      </a>
                    </div>

                  </div>

                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 6. Sustainable Farming & Outgrower Community Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-[#062B5C] via-[#004AAD] to-[#0A9F3D] text-white relative overflow-hidden shadow-xl">
          <div className="relative z-10 max-w-3xl space-y-4">
            
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-emerald-300 border border-white/20">
              <Users className="w-3.5 h-3.5" />
              <span>Smallholder Farmer Empowerment</span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ETC Outgrower Cooperative Network
            </h3>

            <p className="text-sm sm:text-base text-slate-100 leading-relaxed font-normal">
              Easy Trust Corporation supports over 850 registered smallholder farming families across adjacent communities. We furnish tractor land preparation, high-germination seed stocks, and extension training. Upon harvest, ETC provides guaranteed off-take contracts at fair market prices, stabilizing family incomes and stimulating regional food independence.
            </p>

            <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-emerald-200">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Guaranteed Harvest Buy-Back
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Subsidized Tractor Services
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-300" /> Agronomic Agronomist Support
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 7. FAQs for Wholesale & Institutional Buyers */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h3 className="text-2xl font-extrabold text-[#062B5C]">
            Frequently Asked Questions
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Common questions regarding commercial produce purchase, biosecurity, and supply logistics.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {AGRI_FAQS.map((faq, i) => (
            <div key={i} className="p-5 bg-white rounded-2xl border border-slate-200 text-left space-y-1.5 shadow-2xs">
              <h4 className="text-sm sm:text-base font-bold text-[#062B5C] flex items-start gap-2">
                <span className="text-[#0A9F3D]">Q.</span>
                <span>{faq.q}</span>
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-5">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Dedicated Wholesale Produce & Farm Tour Inquiry Form */}
      <section id="agri-inquiry-section" className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white rounded-3xl border border-slate-200 p-6 sm:p-10 shadow-lg">
          
          <div className="text-center space-y-2 mb-8">
            <span className="text-xs font-bold text-[#0A9F3D] uppercase tracking-wider">
              Produce Supply & Partnership Desk
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B5C] tracking-tight">
              Order Wholesale Produce or Book a Farm Visit
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 max-w-lg mx-auto">
              Submit your inquiry directly to our agricultural dispatch team for bulk table eggs, live/dressed poultry, fresh fish, grains, or tractor bookings.
            </p>
          </div>

          {inquirySubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-8 text-center bg-emerald-50 border border-emerald-200 rounded-2xl text-emerald-900 space-y-3"
            >
              <CheckCircle2 className="w-12 h-12 text-[#20C84A] mx-auto" />
              <h4 className="text-lg font-bold">Agricultural Inquiry Received!</h4>
              <p className="text-xs sm:text-sm text-emerald-800 max-w-md mx-auto">
                Thank you for contacting Easy Trust Corporation Agriculture Division. Our farm dispatch team will review your specifications and contact you shortly.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleInquirySubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="agri-name">
                    Full Name / Organization *
                  </label>
                  <input
                    id="agri-name"
                    type="text"
                    required
                    value={inquiryForm.name}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, name: e.target.value })}
                    placeholder="e.g. Freetown Supermarket Ltd"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="agri-phone">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    id="agri-phone"
                    type="tel"
                    required
                    value={inquiryForm.phone}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, phone: e.target.value })}
                    placeholder="+232 75 195 672"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  />
                </div>

              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="agri-email">
                    Email Address
                  </label>
                  <input
                    id="agri-email"
                    type="email"
                    value={inquiryForm.email}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, email: e.target.value })}
                    placeholder="buyer@domain.com"
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="agri-interest">
                    Primary Interest *
                  </label>
                  <select
                    id="agri-interest"
                    value={inquiryForm.interest}
                    onChange={(e) => setInquiryForm({ ...inquiryForm, interest: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                  >
                    <option value="Fresh Table Eggs & Broiler Meat">Fresh Table Eggs & Broiler Meat</option>
                    <option value="Live & Smoked Catfish / Tilapia">Live & Smoked Catfish / Tilapia</option>
                    <option value="Bulk Cassava Flour & Maize Grains">Bulk Cassava Flour & Maize Grains</option>
                    <option value="Greenhouse Peppers & Tomatoes">Greenhouse Peppers & Tomatoes</option>
                    <option value="Tractor Fleet & Mechanization Rental">Tractor Fleet & Mechanization Rental</option>
                    <option value="Outgrower Partnership / Farm Tour">Outgrower Partnership / Farm Tour</option>
                  </select>
                </div>

              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1" htmlFor="agri-notes">
                  Order Details or Volume Requirements
                </label>
                <textarea
                  id="agri-notes"
                  rows={3}
                  value={inquiryForm.notes}
                  onChange={(e) => setInquiryForm({ ...inquiryForm, notes: e.target.value })}
                  placeholder="Specify desired delivery frequency, quantities (e.g. 50 crates/week, 2 MT fish), or proposed farm visit date..."
                  className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#004AAD]"
                />
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  onMouseEnter={playCtaHoverSound}
                  className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#0A9F3D] to-[#20C84A] text-white text-sm font-bold rounded-xl shadow-md hover:from-[#087A32] hover:to-[#0A9F3D] transition-all cursor-pointer"
                >
                  Submit Agricultural Request
                </button>

                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <Phone className="w-4 h-4 text-[#004AAD]" />
                  <span>Direct Hotline: {COMPANY_CONFIG.contact.phoneDisplay}</span>
                </div>
              </div>

            </form>
          )}

        </div>
      </section>

      {/* 9. Technical Practice Modal */}
      <AnimatePresence>
        {activeModalPractice && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
            >
              
              {/* Modal Header Image */}
              <div className="relative h-64 sm:h-72 w-full bg-slate-900 overflow-hidden">
                <img
                  src={activeModalPractice.image}
                  alt={activeModalPractice.title}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = activeModalPractice.fallbackImage;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                
                <button
                  onClick={() => setActiveModalPractice(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors cursor-pointer"
                  aria-label="Close Modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-6 right-6 text-white">
                  <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider mb-1">
                    {activeModalPractice.category} · Technical Blueprint
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {activeModalPractice.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">
                    Operational Overview
                  </h4>
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {activeModalPractice.fullDesc}
                  </p>
                </div>

                {/* Specifics Grid */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Key Specifications & Performance
                  </h4>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {activeModalPractice.specs.map((spec, i) => (
                      <div key={i} className="p-3 bg-slate-50 border border-slate-200/80 rounded-xl">
                        <span className="text-[10px] text-slate-500 font-semibold uppercase block">
                          {spec.label}
                        </span>
                        <span className="text-sm font-extrabold text-[#062B5C] block mt-0.5">
                          {spec.value}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Methods and Standards */}
                <div>
                  <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    Methodologies & Biosecurity Protocols
                  </h4>
                  <ul className="space-y-2">
                    {activeModalPractice.methods.map((m, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#0A9F3D] shrink-0 mt-0.5" />
                        <span>{m}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Sustainability & Environmental Stewardship */}
                <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl space-y-1">
                  <h5 className="text-xs font-bold text-[#0A9F3D] uppercase flex items-center gap-1.5">
                    <Droplets className="w-4 h-4" />
                    <span>Environmental Stewardship</span>
                  </h5>
                  <p className="text-xs text-emerald-950 leading-relaxed">
                    {activeModalPractice.sustainability}
                  </p>
                </div>

                {/* Modal Footer Actions */}
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(`Hello Easy Trust Corporation, I would like to order or inspect: ${activeModalPractice.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#0A9F3D] hover:bg-[#087A32] text-white text-xs font-bold rounded-xl shadow-sm transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Connect with Division Lead</span>
                  </a>

                  <button
                    onClick={() => setActiveModalPractice(null)}
                    className="px-5 py-2.5 text-xs font-semibold text-slate-600 hover:text-slate-900 border border-slate-200 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Close Blueprint
                  </button>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
