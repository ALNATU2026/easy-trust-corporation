import React, { useState } from 'react';
import { COMPANY_CONFIG } from '../data/config';

interface EtcLogoProps {
  variant?: 'full' | 'emblem' | 'white' | 'horizontal-compact';
  className?: string;
  height?: number | string;
  width?: number | string;
}

export const EtcLogo: React.FC<EtcLogoProps> = ({
  variant = 'full',
  className = '',
  height,
  width,
}) => {
  const [imgSrc, setImgSrc] = useState(COMPANY_CONFIG.logoUrl || 'https://imgur.com/KgFcYl2.png');
  const isWhite = variant === 'white';
  const isEmblemOnly = variant === 'emblem';

  const handleError = () => {
    // If the remote Imgur URL fails or is blocked by network policy, gracefully fallback to the local public asset
    if (imgSrc !== '/etc-logo.png') {
      setImgSrc('/etc-logo.png');
    }
  };

  if (isEmblemOnly) {
    return (
      <div className={`inline-flex items-center justify-center shrink-0 ${className}`}>
        <img
          src={imgSrc}
          alt="Easy Trust Corporation Emblem"
          className="h-10 w-auto sm:h-11 object-contain"
          style={{ height, width }}
          loading="eager"
          referrerPolicy="no-referrer"
          onError={handleError}
        />
      </div>
    );
  }

  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      {/* Container - on dark footer backgrounds, frame with a clean white backing so original logo colors shine with pristine contrast */}
      <div
        className={`relative inline-flex items-center justify-center transition-all ${
          isWhite
            ? 'p-2 bg-white rounded-xl shadow-md border border-white/20 hover:shadow-lg'
            : ''
        }`}
      >
        <img
          src={imgSrc}
          alt="Easy Trust Corporation (ETC) - Building Trust. Delivering Excellence."
          className={`w-auto object-contain transition-transform duration-200 ${
            isWhite
              ? 'h-10 sm:h-12 max-w-[200px] sm:max-w-[240px]'
              : 'h-11 sm:h-12 md:h-14 max-w-[220px] sm:max-w-[260px]'
          }`}
          style={{ height, width }}
          loading="eager"
          referrerPolicy="no-referrer"
          onError={handleError}
        />
      </div>
    </div>
  );
};
