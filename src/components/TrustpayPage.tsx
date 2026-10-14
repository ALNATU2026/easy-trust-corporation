import React from 'react';
import { TRUSTPAY_SERVICES, TRUSTPAY_METRICS, TRUSTPAY_IMAGES } from '../data/trustpayData';
import { getWhatsAppUrl, COMPANY_CONFIG } from '../data/config';
import {
  ArrowLeft,
  Smartphone,
  CreditCard,
  Store,
  Zap,
  Receipt,
  Building,
  ShieldCheck,
  CheckCircle2,
  ChevronRight,
  Download,
  Sparkles,
  ArrowRight,
  Lock,
  Phone,
  Layers,
} from 'lucide-react';
import { motion } from 'motion/react';
import { playMenuHoverSound, playCtaHoverSound } from '../utils/audio';

interface TrustpayPageProps {
  onBackToHome: () => void;
  onNavigateToDownload: () => void;
  onNavigateToAgriculture?: () => void;
}

export const TrustpayPage: React.FC<TrustpayPageProps> = ({
  onBackToHome,
  onNavigateToDownload,
}) => {
  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-20">
      
      {/* 1. Sub-Navigation Breadcrumb Bar */}
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
              Trustpay Digital Ecosystem
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playCtaHoverSound();
                onNavigateToDownload();
              }}
              onMouseEnter={playMenuHoverSound}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-[#20C84A] hover:bg-[#0A9F3D] text-[#062B5C] text-xs font-bold rounded-lg shadow-sm transition-all cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Trustpay App</span>
            </button>
          </div>
        </div>
      </div>

      {/* 2. Hero Section Featuring User Provided Imagery */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#062B5C] via-[#004AAD] to-[#0A9F3D] text-white pt-14 pb-24 lg:pt-20 lg:pb-32 border-b border-slate-800">
        
        {/* Glow orbs */}
        <div className="absolute top-1/4 left-10 w-96 h-96 rounded-full bg-[#20C84A]/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#0066CC]/25 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span>Next-Generation FinTech by Easy Trust Corporation</span>
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-black tracking-tight leading-[1.12] text-balance">
                Trustpay: Everything Money, in One Simple Mobile App
              </h1>

              <p className="text-base sm:text-lg text-slate-100 leading-relaxed font-normal">
                Airtime, high-speed data, EDSA electricity & bill payments, POS terminal systems, interbank clearing, Orange Money, AfriMoney & QMoney transfers, plus physical and virtual cards for seamless online and supermarket payments.
              </p>

              {/* Primary Call to Action: Prominent Download Now Button */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  id="trustpay-hero-download-btn"
                  onClick={() => {
                    playCtaHoverSound();
                    onNavigateToDownload();
                  }}
                  onMouseEnter={playCtaHoverSound}
                  className="inline-flex items-center justify-center gap-3 px-8 py-4 text-base font-extrabold text-[#062B5C] bg-[#20C84A] hover:bg-emerald-300 rounded-2xl shadow-xl shadow-emerald-950/30 transition-all cursor-pointer"
                >
                  <Download className="w-5 h-5 text-[#062B5C]" />
                  <span>Download Now</span>
                  <ChevronRight className="w-5 h-5 text-[#062B5C]" />
                </motion.button>

                <a
                  href="#services-breakdown"
                  onMouseEnter={playMenuHoverSound}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-bold text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl backdrop-blur-md transition-all"
                >
                  <span>Explore All Services</span>
                </a>
              </div>

              {/* Supported Networks & Standards Tagline */}
              <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-4 text-xs text-slate-200">
                <span className="font-bold text-emerald-300">Supported Networks:</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md font-semibold">Orange Money</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md font-semibold">AfriMoney</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md font-semibold">QMoney</span>
                <span className="px-2.5 py-1 bg-white/10 rounded-md font-semibold">All Local Banks</span>
              </div>

            </div>

            {/* Right Visual Collage Column (5 cols) Featuring User Provided Images */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                
                {/* Decorative glow backing */}
                <div className="absolute -inset-3 bg-gradient-to-tr from-[#20C84A]/30 via-white/20 to-[#004AAD]/40 rounded-3xl blur-2xl -z-10" />

                {/* Main Hero Visual Card with Imgur Image 1 */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="relative rounded-3xl overflow-hidden border border-white/30 shadow-2xl bg-slate-900/90 aspect-[4/3] group"
                >
                  <img
                    src={TRUSTPAY_IMAGES.heroApp}
                    alt="Trustpay Mobile App Interface"
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = TRUSTPAY_IMAGES.fallbackHero;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-4 left-4 right-4 text-white text-xs space-y-1">
                    <span className="px-2.5 py-0.5 bg-[#20C84A] text-[#062B5C] font-bold rounded-md text-[10px] uppercase">
                      Mobile App
                    </span>
                    <h3 className="text-base font-extrabold text-white">
                      Trustpay Digital Wallet
                    </h3>
                    <p className="text-slate-300 text-[11px]">
                      Instant mobile transfers, bill payments, and card controls.
                    </p>
                  </div>
                </motion.div>

                {/* Sub-grid with User Images 2 & 3: Card & POS */}
                <div className="grid grid-cols-2 gap-3.5 mt-3.5">
                  
                  {/* Card Preview (Imgur Image 2) */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-lg aspect-[4/3] group"
                  >
                    <img
                      src={TRUSTPAY_IMAGES.cardPreview}
                      alt="Trustpay Physical and Virtual Cards"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = TRUSTPAY_IMAGES.fallbackCard;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <p className="text-[10px] font-bold text-emerald-300 uppercase">Physical & Virtual</p>
                      <p className="text-xs font-extrabold truncate">Debit Cards</p>
                    </div>
                  </motion.div>

                  {/* POS Terminal Preview (Imgur Image 3) */}
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className="relative rounded-2xl overflow-hidden border border-white/20 bg-slate-900 shadow-lg aspect-[4/3] group"
                  >
                    <img
                      src={TRUSTPAY_IMAGES.posTerminal}
                      alt="Trustpay Smart POS Terminal"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = TRUSTPAY_IMAGES.fallbackPos;
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                      <p className="text-[10px] font-bold text-emerald-300 uppercase">Merchant & Agent</p>
                      <p className="text-xs font-extrabold truncate">POS Terminal System</p>
                    </div>
                  </motion.div>

                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Performance Metrics Strip */}
      <section className="bg-white border-b border-slate-200 py-7 relative -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 rounded-2xl shadow-md z-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          {TRUSTPAY_METRICS.map((metric, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-2xl sm:text-3xl font-extrabold text-[#062B5C] tracking-tight tabular-nums">
                {metric.value}
              </div>
              <p className="text-xs font-bold text-slate-700">{metric.label}</p>
              <p className="text-[11px] text-slate-500">{metric.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Complete Services Breakdown Grid */}
      <section id="services-breakdown" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-semibold text-[#0A9F3D] mb-1">
            <Layers className="w-4 h-4" />
            <span>Core Ecosystem Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B5C] tracking-tight">
            Six Seamless Financial Solutions
          </h2>
          <p className="text-sm sm:text-base text-slate-600 mt-2">
            Engineered specifically to solve real payment bottlenecks for consumers, market traders, supermarkets, and corporate organizations in Sierra Leone.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUSTPAY_SERVICES.map((service) => {
            const getIcon = () => {
              switch (service.category) {
                case 'transfer':
                  return <Smartphone className="w-5 h-5 text-white" />;
                case 'cards':
                  return <CreditCard className="w-5 h-5 text-white" />;
                case 'pos':
                  return <Store className="w-5 h-5 text-white" />;
                case 'bills':
                  return service.id === 'airtime-data' ? <Zap className="w-5 h-5 text-white" /> : <Receipt className="w-5 h-5 text-white" />;
                case 'banking':
                  return <Building className="w-5 h-5 text-white" />;
                default:
                  return <CreditCard className="w-5 h-5 text-white" />;
              }
            };

            return (
              <motion.div
                key={service.id}
                whileHover={{ y: -6 }}
                className="bg-white rounded-3xl border border-slate-200/90 p-6 sm:p-7 shadow-xs hover:shadow-xl transition-all flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#004AAD] to-[#0A9F3D] flex items-center justify-center shadow-md">
                      {getIcon()}
                    </div>
                    {service.badge && (
                      <span className="text-[11px] font-bold text-[#0A9F3D] bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#062B5C] leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-xs font-semibold text-slate-400 mt-0.5">
                      {service.subtitle}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="pt-2 border-t border-slate-100 space-y-1.5">
                    {service.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#20C84A] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6 mt-4 border-t border-slate-100">
                  <button
                    onClick={() => {
                      playCtaHoverSound();
                      onNavigateToDownload();
                    }}
                    onMouseEnter={playMenuHoverSound}
                    className="w-full inline-flex items-center justify-between px-4 py-2.5 rounded-xl text-xs font-bold text-[#004AAD] bg-blue-50/70 hover:bg-[#004AAD] hover:text-white transition-all cursor-pointer group"
                  >
                    <span>View Specifications & Download</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>

              </motion.div>
            );
          })}
        </div>
      </section>

      {/* 5. Deep-Dive Feature Showcase: Cards & POS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card Showcase Banner */}
          <div className="bg-[#062B5C] text-white rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">
                Physical & Virtual Cards
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Spend Globally Online. Pay Contactless Locally.
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                Generate virtual dollar cards instantly to pay for Apple Music, Google Workspace, Netflix, Amazon, and international university fees. Order an EMV chip card for instant checkout at local supermarkets.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#20C84A]" />
                  <span>Dual currency SLL and USD balance support</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-emerald-200">
                  <CheckCircle2 className="w-4 h-4 text-[#20C84A]" />
                  <span>Instant freeze/unfreeze directly within Trustpay App</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
              <button
                onClick={() => {
                  playCtaHoverSound();
                  onNavigateToDownload();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#20C84A] text-[#062B5C] rounded-xl text-xs font-bold hover:bg-emerald-300 transition-colors cursor-pointer"
              >
                <span>Request Your Card</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* POS Terminal Showcase Banner */}
          <div className="bg-[#004AAD] text-white rounded-3xl p-7 sm:p-9 relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-bold text-sky-200 uppercase tracking-wider">
                Smart POS Terminal System
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold">
                Turn Your Shop into a High-Earning Agency
              </h3>
              <p className="text-xs sm:text-sm text-slate-100 leading-relaxed">
                Empower your supermarket, pharmacy, or agent booth. Accept cards, process Orange Money, AfriMoney, and QMoney cash-in/cash-out, print receipts, and earn commission on every bill settled.
              </p>
              <div className="space-y-2 pt-2">
                <div className="flex items-center gap-2 text-xs text-sky-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Dual 4G SIM + Wi-Fi failover for uninterrupted uptime</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-sky-200">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                  <span>Automated end-of-day bank settlement</span>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/10 relative z-10">
              <button
                onClick={() => {
                  playCtaHoverSound();
                  onNavigateToDownload();
                }}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-[#004AAD] rounded-xl text-xs font-bold hover:bg-blue-50 transition-colors cursor-pointer"
              >
                <span>Apply for Merchant POS</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 6. Prominent Download Now Action Bar */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#062B5C] via-[#004AAD] to-[#0A9F3D] text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider">
              Ready to Upgrade Your Payment Experience?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Get Trustpay on iOS & Android Today
            </h2>
            <p className="text-sm sm:text-base text-slate-200">
              Experience the fast, secure, and all-in-one payment app built for Sierra Leone. Click below to view detailed features and download.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                playCtaHoverSound();
                onNavigateToDownload();
              }}
              onMouseEnter={playCtaHoverSound}
              className="inline-flex items-center justify-center gap-3 px-10 py-4 text-base font-extrabold text-[#062B5C] bg-[#20C84A] hover:bg-emerald-300 rounded-2xl shadow-xl cursor-pointer"
            >
              <Download className="w-5 h-5 text-[#062B5C]" />
              <span>Download Now & Learn More</span>
            </motion.button>
          </div>
        </div>
      </section>

    </div>
  );
};
