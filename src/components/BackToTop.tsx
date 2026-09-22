import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <button
      id="back-to-top-btn"
      onClick={scrollToTop}
      className="fixed bottom-6 left-6 z-40 p-3 rounded-full bg-white/90 backdrop-blur-md text-[#062B5C] hover:text-[#004AAD] hover:bg-white shadow-lg border border-slate-200 transition-all duration-300 hover:scale-110 active:scale-95 focus:outline-none"
      aria-label="Scroll back to top"
      title="Back to Top"
    >
      <ArrowUp className="w-5 h-5" />
    </button>
  );
};
