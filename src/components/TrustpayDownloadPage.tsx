import React, { useState } from 'react';
import {
  TRUSTPAY_SERVICES,
  TRUSTPAY_METRICS,
  TRUSTPAY_STEPS,
  TRUSTPAY_FAQS,
  TRUSTPAY_IMAGES,
} from '../data/trustpayData';
import { COMPANY_CONFIG, getWhatsAppUrl, getTelUrl } from '../data/config';
import {
  ArrowLeft,
  Download,
  Smartphone,
  CreditCard,
  Store,
  Zap,
  Receipt,
  Building,
  ShieldCheck,
  CheckCircle2,
  Lock,
  ChevronRight,
  Phone,
  MessageSquare,
  QrCode,
  Copy,
  Check,
  Award,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { playMenuHoverSound, playCtaHoverSound } from '../utils/audio';

interface TrustpayDownloadPageProps {
  onBackToTrustpay: () => void;
  onBackToHome: () => void;
}

export const TrustpayDownloadPage: React.FC<TrustpayDownloadPageProps> = ({
  onBackToTrustpay,
  onBackToHome,
}) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('mobile-money');
  const [downloadModalPlatform, setDownloadModalPlatform] = useState<'android' | 'ios' | null>(null);
  const [copiedLink, setCopiedLink] = useState(false);
  const [simulatedToken, setSimulatedToken] = useState<string | null>(null);
  const [meterInput, setMeterInput] = useState('0418-9281-7462');
  const [meterAmount, setMeterAmount] = useState('100');

  const selectedService =
    TRUSTPAY_SERVICES.find((s) => s.id === selectedServiceId) || TRUSTPAY_SERVICES[0];

  const handleSimulateToken = (e: React.FormEvent) => {
    e.preventDefault();
    playCtaHoverSound();
    // Generate a realistic 20-digit EDSA token in 4-digit groups
    const part1 = Math.floor(1000 + Math.random() * 9000);
    const part2 = Math.floor(1000 + Math.random() * 9000);
    const part3 = Math.floor(1000 + Math.random() * 9000);
    const part4 = Math.floor(1000 + Math.random() * 9000);
    const part5 = Math.floor(1000 + Math.random() * 9000);
    setSimulatedToken(`${part1}-${part2}-${part3}-${part4}-${part5}`);
  };

  const handleCopyAppStoreLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <div className="bg-[#F8FAFD] min-h-screen text-slate-800 pb-20">
      
      {/* 1. Header Breadcrumbs Bar */}
      <div className="bg-[#062B5C] text-white border-b border-white/10 sticky top-[69px] z-30 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                playMenuHoverSound();
                onBackToTrustpay();
              }}
              onMouseEnter={playMenuHoverSound}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-300 hover:text-white transition-colors cursor-pointer group"
              aria-label="Back to Trustpay Overview"
            >
              <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span>Back to Trustpay Overview</span>
            </button>
            <span className="text-slate-500">/</span>
            <span className="text-xs sm:text-sm font-medium text-slate-300 truncate">
              Download & Comprehensive Services
            </span>
          </div>

          <button
            onClick={() => {
              playMenuHoverSound();
              onBackToHome();
            }}
            className="hidden sm:inline-flex items-center text-xs font-semibold text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Corporate Home
          </button>
        </div>
      </div>

      {/* 2. Download Hero with Official Store Badges */}
      <section className="relative overflow-hidden bg-gradient-to-b from-[#062B5C] to-[#083875] text-white pt-12 pb-20 lg:pt-16 lg:pb-24 border-b border-slate-800">
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider">
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Official Release · Version 3.4.1 (Latest)</span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-black tracking-tight leading-tight text-balance">
              Download Trustpay for Android & iOS
            </h1>

            <p className="text-base sm:text-lg text-slate-200 max-w-2xl mx-auto font-normal leading-relaxed">
              Fast, licensed, and verified mobile banking. Instant airtime, data top-up, EDSA electricity tokens, interbank clearing, Orange Money, AfriMoney & QMoney transfers, smart POS systems, and debit cards.
            </p>

            {/* Official App Store & Google Play Store Badges */}
            <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
              
              {/* Google Play Store Badge Button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                id="btn-download-google-play"
                onClick={() => {
                  playCtaHoverSound();
                  setDownloadModalPlatform('android');
                }}
                onMouseEnter={playCtaHoverSound}
                className="group flex items-center gap-3.5 px-6 py-3.5 bg-black hover:bg-slate-900 text-white rounded-2xl border border-white/25 shadow-xl transition-all cursor-pointer text-left"
              >
                {/* Official Google Play SVG Logo */}
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 512 512" fill="none">
                  <path
                    d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
                    fill="#EA4335"
                  />
                  <path
                    d="M47 0C44 2.8 42.1 7.1 42.1 12.8v486.4c0 5.7 1.9 10 4.9 12.8L269.7 256 47 0z"
                    fill="#4285F4"
                  />
                  <path
                    d="M325.3 277.7l60.1 60.1L104.6 499c-2.8-1.6-4.9-3.9-4.9-7.1 0-1.8.6-3.7 1.8-5.5l223.8-208.7z"
                    fill="#34A853"
                  />
                  <path
                    d="M466.8 238.1l-81.4-46.8-60.1 64.7 60.1 60.1 81.4-46.8c12.2-7 19.2-19.3 19.2-31.2s-7-24.2-19.2-30z"
                    fill="#FBBC04"
                  />
                </svg>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 leading-tight">
                    GET IT ON
                  </span>
                  <span className="block text-base sm:text-lg font-extrabold text-white leading-tight">
                    Google Play
                  </span>
                </div>
              </motion.button>

              {/* Apple App Store Badge Button */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                id="btn-download-apple-store"
                onClick={() => {
                  playCtaHoverSound();
                  setDownloadModalPlatform('ios');
                }}
                onMouseEnter={playCtaHoverSound}
                className="group flex items-center gap-3.5 px-6 py-3.5 bg-black hover:bg-slate-900 text-white rounded-2xl border border-white/25 shadow-xl transition-all cursor-pointer text-left"
              >
                {/* Official Apple Logo SVG */}
                <svg className="w-8 h-8 fill-current shrink-0 text-white" viewBox="0 0 170 170">
                  <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.69-3.04-7.66-7.85-11.91-14.42-7.53-11.64-13.29-24.8-17.27-39.49-3.98-14.69-5.97-28.71-5.97-42.06 0-15.69 3.98-28.69 11.93-39 7.96-10.31 18.06-15.61 30.33-15.9 4.35 0 9.29 1.13 14.83 3.39 5.54 2.26 9.4 3.44 11.58 3.55 2.05-.11 6.06-1.35 12.03-3.71 5.97-2.36 10.9-3.41 14.8-3.15 11.53.64 21.05 4.86 28.57 12.67-10.23 6.18-15.22 14.83-14.97 25.96.25 8.78 3.65 16.27 10.21 22.48 6.56 6.21 14.42 9.87 23.58 10.99-2.56 8.35-5.92 16.88-10.09 25.59zM119.22 33.64c-.11-5.69 1.93-11.29 6.12-16.8 4.19-5.51 9.48-9.4 15.87-11.68.21 1.07.32 2.07.32 3 0 5.48-2.12 11.08-6.35 16.8-4.24 5.72-9.67 9.4-16.3 11.05-.21-1.07-.32-1.86-.32-2.37z" />
                </svg>
                <div>
                  <span className="block text-[10px] uppercase font-bold tracking-wider text-slate-400 leading-tight">
                    Download on the
                  </span>
                  <span className="block text-base sm:text-lg font-extrabold text-white leading-tight">
                    App Store
                  </span>
                </div>
              </motion.button>

            </div>

            {/* Quick trust reassurance */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#20C84A]" /> Bank of Sierra Leone Regulatory Oversight
              </span>
              <span className="flex items-center gap-1.5">
                <Lock className="w-4 h-4 text-emerald-400" /> End-to-End 256-Bit SSL Encryption
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-sky-400" /> Instant Free Account Setup
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Interactive Service Deep-Dive Navigator */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-6">
        
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-bold text-[#0A9F3D] uppercase tracking-wider">
            All-In-One FinTech Infrastructure
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#062B5C] tracking-tight">
            Detailed Explanation of Trustpay Services
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-2">
            Click any service category below to inspect full operational details, supported partners, limits, and step-by-step guides.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {TRUSTPAY_SERVICES.map((srv) => (
            <button
              key={srv.id}
              onClick={() => {
                playMenuHoverSound();
                setSelectedServiceId(srv.id);
              }}
              onMouseEnter={playMenuHoverSound}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedServiceId === srv.id
                  ? 'bg-[#004AAD] text-white shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {srv.title.split('(')[0].trim()}
            </button>
          ))}
        </div>

        {/* Selected Service Detailed View Panel */}
        <motion.div
          key={selectedService.id}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl border border-slate-200/90 shadow-lg p-6 sm:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 bg-emerald-50 text-[#0A9F3D] text-xs font-bold rounded-lg border border-emerald-100">
                  {selectedService.badge}
                </span>
                <span className="text-xs text-slate-400 uppercase font-semibold">
                  Category: {selectedService.category}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B5C]">
                {selectedService.title}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {selectedService.description}
              </p>

              {/* Feature Points */}
              <div className="space-y-2.5 pt-2">
                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                  Service Specifications:
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedService.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-[#20C84A] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Supported Partners / Networks */}
              {selectedService.supportedPartners && (
                <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-2">
                  <span className="text-xs font-bold text-slate-500 mr-2">Integrated With:</span>
                  {selectedService.supportedPartners.map((partner, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-slate-100 text-slate-800 text-xs font-semibold rounded-md border border-slate-200"
                    >
                      {partner}
                    </span>
                  ))}
                </div>
              )}

            </div>

            {/* Right Interactive Card / Simulation for Selected Service */}
            <div className="lg:col-span-5 bg-gradient-to-br from-[#062B5C] to-[#004AAD] text-white p-6 sm:p-8 rounded-2xl shadow-xl space-y-5">
              
              {selectedService.category === 'bills' ? (
                // Interactive EDSA / Bill Token Simulator
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300 uppercase">Live Demo Simulator</span>
                    <Zap className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold">Instant EDSA Token Generation</h4>
                  
                  <form onSubmit={handleSimulateToken} className="space-y-3">
                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                        Prepaid Meter Number
                      </label>
                      <input
                        type="text"
                        value={meterInput}
                        onChange={(e) => setMeterInput(e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 rounded-lg text-xs text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>

                    <div>
                      <label className="text-[11px] font-semibold text-slate-300 block mb-1">
                        Amount (SLE)
                      </label>
                      <input
                        type="number"
                        value={meterAmount}
                        onChange={(e) => setMeterAmount(e.target.value)}
                        className="w-full px-3 py-2 bg-white/10 rounded-lg text-xs text-white border border-white/20 focus:outline-none focus:ring-1 focus:ring-emerald-400"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-2.5 bg-[#20C84A] hover:bg-emerald-300 text-[#062B5C] text-xs font-bold rounded-lg transition-colors cursor-pointer"
                    >
                      Generate Electricity Token (Instant)
                    </button>
                  </form>

                  {simulatedToken && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="p-3 bg-white/10 rounded-xl border border-emerald-400/50 space-y-1 text-center"
                    >
                      <p className="text-[10px] text-emerald-300 uppercase font-bold">Generated 20-Digit EDSA Token:</p>
                      <p className="text-sm font-mono font-bold tracking-wider text-white select-all">
                        {simulatedToken}
                      </p>
                      <p className="text-[10px] text-slate-300">Token delivered via SMS in 1.8 seconds.</p>
                    </motion.div>
                  )}
                </div>
              ) : selectedService.category === 'cards' ? (
                // Live Card Preview
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300 uppercase">Card Architecture</span>
                    <CreditCard className="w-4 h-4 text-emerald-400" />
                  </div>
                  
                  {/* Digital Card Graphic */}
                  <div className="p-5 rounded-2xl bg-gradient-to-tr from-slate-900 via-[#062B5C] to-emerald-950 border border-white/20 shadow-2xl space-y-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-extrabold tracking-wider text-white">TRUSTPAY</span>
                      <span className="text-emerald-400 font-bold">VIRTUAL USD</span>
                    </div>
                    <div className="w-10 h-7 rounded bg-amber-400/80 shadow-xs" />
                    <p className="font-mono text-sm tracking-widest text-slate-200">
                      •••• •••• •••• 8842
                    </p>
                    <div className="flex items-center justify-between text-[11px] text-slate-300">
                      <span>EXP: 08/29</span>
                      <span>CVV: Dynamic</span>
                    </div>
                  </div>

                  <p className="text-xs text-slate-200 leading-relaxed">
                    Instantly issue cards for online global services or order a physical contactless chip card for supermarkets across Freetown.
                  </p>
                </div>
              ) : (
                // Fast Network Info
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-emerald-300 uppercase">Interoperability</span>
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                  </div>
                  <h4 className="text-lg font-bold">Universal Money Switch</h4>
                  <p className="text-xs text-slate-200 leading-relaxed">
                    Trustpay unifies Orange Money, AfriMoney, QMoney, and 12 commercial banks into a single instantaneous balance. No more running around finding different vendor agents.
                  </p>
                  <div className="p-4 bg-white/10 rounded-xl space-y-2 text-xs">
                    <div className="flex justify-between">
                      <span className="text-slate-300">Average Transfer Time:</span>
                      <span className="font-bold text-emerald-300">Instant (&lt; 3s)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Transfer Confirmation:</span>
                      <span className="font-bold text-emerald-300">Instant SMS & Receipt</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-slate-300">Daily Volume Limit:</span>
                      <span className="font-bold text-emerald-300">Up to Tier-3 KYC</span>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </motion.div>

      </section>

      {/* 4. Simple 4-Step Onboarding Guide */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs font-bold text-[#0A9F3D] uppercase tracking-wider">
            Getting Started
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#062B5C]">
            How to Start Using Trustpay
          </h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {TRUSTPAY_STEPS.map((s, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-2xl border border-slate-200 space-y-3 relative shadow-xs"
            >
              <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#004AAD] font-extrabold flex items-center justify-center text-sm">
                {s.step}
              </div>
              <h4 className="text-base font-bold text-[#062B5C]">{s.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-extrabold text-[#062B5C]">
            Trustpay Common Questions
          </h3>
        </div>

        <div className="space-y-4">
          {TRUSTPAY_FAQS.map((faq, i) => (
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

      {/* 6. Download Modal Simulation */}
      <AnimatePresence>
        {downloadModalPlatform && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 space-y-6 shadow-2xl border border-slate-200 text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#062B5C] to-[#20C84A] mx-auto flex items-center justify-center shadow-lg text-white">
                <Download className="w-8 h-8" />
              </div>

              <div className="space-y-1.5">
                <h3 className="text-xl font-extrabold text-[#062B5C]">
                  {downloadModalPlatform === 'android'
                    ? 'Google Play Store Release'
                    : 'Apple App Store Release'}
                </h3>
                <p className="text-xs text-slate-600">
                  Trustpay Mobile Wallet App v3.4.1 (Sierra Leone Edition)
                </p>
              </div>

              {/* QR Code preview representation */}
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-2xl max-w-xs mx-auto space-y-2">
                <div className="w-36 h-36 mx-auto bg-white p-2 rounded-xl border border-slate-300 flex items-center justify-center shadow-xs">
                  <QrCode className="w-28 h-28 text-slate-800" />
                </div>
                <p className="text-[11px] text-slate-500 font-medium">
                  Scan with your smartphone camera to install directly
                </p>
              </div>

              <div className="space-y-2">
                <a
                  href={getWhatsAppUrl('Hello ETC Trustpay, I would like assistance installing the Trustpay app on my phone.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 bg-[#20C84A] hover:bg-[#0A9F3D] text-[#062B5C] font-bold text-xs rounded-xl shadow-sm transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Request Direct Download Link on WhatsApp</span>
                </a>

                <button
                  onClick={() => setDownloadModalPlatform(null)}
                  className="w-full py-2.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors cursor-pointer"
                >
                  Close Window
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
};
