import React, { useState } from 'react';
import { getWhatsAppUrl, getTelUrl } from '../data/config';
import { MessageSquare, Phone } from 'lucide-react';
import { motion, AnimatePresence, useAnimationControls } from 'motion/react';
import { playFloatingActionBeep } from '../utils/audio';

export const FloatingWhatsApp: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);
  const callControls = useAnimationControls();
  const whatsAppControls = useAnimationControls();

  // Momentary bounce/pop animation on tap
  const handleCallTap = () => {
    callControls.start({
      scale: [0.85, 1.25, 0.94, 1.06, 1],
      transition: {
        duration: 0.42,
        times: [0, 0.35, 0.65, 0.85, 1],
        ease: 'easeOut',
      },
    });
  };

  const handleWhatsAppTap = () => {
    whatsAppControls.start({
      scale: [0.85, 1.28, 0.92, 1.08, 1],
      transition: {
        duration: 0.45,
        times: [0, 0.35, 0.65, 0.85, 1],
        ease: 'easeOut',
      },
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      id="floating-actions-container"
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3 pointer-events-auto"
    >
      {/* Mobile Floating Quick Call Button */}
      <motion.a
        animate={callControls}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onTap={handleCallTap}
        id="floating-call-mobile-btn"
        href={getTelUrl()}
        onMouseEnter={playFloatingActionBeep}
        className="sm:hidden flex items-center justify-center w-12 h-12 rounded-full bg-[#004AAD] text-white shadow-lg shadow-blue-900/30 hover:bg-[#062B5C] transition-colors"
        aria-label="Direct Phone Call"
      >
        <Phone className="w-5 h-5 text-white" />
      </motion.a>

      {/* Main Floating WhatsApp Button with Tooltip */}
      <div className="relative flex items-center">
        {/* Tooltip on Desktop hover */}
        <AnimatePresence>
          {showTooltip && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              className="hidden sm:block absolute right-full mr-3 px-3.5 py-1.5 bg-[#062B5C] text-white text-xs font-semibold rounded-lg shadow-lg whitespace-nowrap border border-white/10"
            >
              Chat with us on WhatsApp
              <div className="absolute top-1/2 -right-1 transform -translate-y-1/2 w-2 h-2 bg-[#062B5C] rotate-45 border-t border-r border-white/10" />
            </motion.div>
          )}
        </AnimatePresence>

        <motion.a
          animate={whatsAppControls}
          whileHover={{ scale: 1.12 }}
          whileTap={{ scale: 0.92 }}
          onTap={handleWhatsAppTap}
          id="floating-whatsapp-btn"
          href={getWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => {
            setShowTooltip(true);
            playFloatingActionBeep();
          }}
          onMouseLeave={() => setShowTooltip(false)}
          className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#20C84A] text-white shadow-xl shadow-emerald-900/25 hover:bg-[#0A9F3D] transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-emerald-300/60"
          aria-label="Chat with us on WhatsApp"
        >
          {/* Subtle pulse ring animation */}
          <span className="absolute -inset-1 rounded-full bg-[#20C84A] opacity-30 group-hover:opacity-0 animate-ping pointer-events-none" />
          
          <MessageSquare className="w-7 h-7 text-white fill-current" />
        </motion.a>
      </div>
    </motion.div>
  );
};
