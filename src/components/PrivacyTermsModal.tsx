import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

interface PrivacyTermsModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const PrivacyTermsModal: React.FC<PrivacyTermsModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-fadeIn">
      <div
        className="relative bg-white rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl border border-slate-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="p-6 bg-[#062B5C] text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-emerald-400">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold">
                {isPrivacy ? 'Privacy Policy' : 'Terms & Conditions'}
              </h3>
              <p className="text-xs text-slate-300 mt-0.5">
                {COMPANY_CONFIG.legalName} • Last Updated: 2026
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-4 max-h-[65vh] overflow-y-auto text-sm text-slate-600 leading-relaxed">
          {isPrivacy ? (
            <>
              <p className="font-semibold text-slate-800">
                1. Corporate Commitment to Privacy
              </p>
              <p>
                Easy Trust Corporation (ETC) is dedicated to protecting the privacy and personal data of our clients, suppliers, investors, and web visitors. This policy outlines how information gathered through our digital channels is utilized and protected.
              </p>

              <p className="font-semibold text-slate-800 pt-2">
                2. Information Collection & Usage
              </p>
              <p>
                When you submit an inquiry through our contact form, direct phone line, or WhatsApp channel, we collect relevant details such as your name, corporate organization, email address, phone number, and project requirements. This information is used strictly to fulfill operational inquiries, issue commercial proposals, and coordinate logistics.
              </p>

              <p className="font-semibold text-slate-800 pt-2">
                3. Non-Disclosure & Security
              </p>
              <p>
                We do not sell, lease, or distribute your private commercial data to external third parties. All inquiries are encrypted and handled exclusively by authorized ETC personnel.
              </p>

              <p className="font-semibold text-slate-800 pt-2">
                4. Contact Information
              </p>
              <p>
                For questions regarding our privacy practices, contact our compliance officer at {COMPANY_CONFIG.contact.email} or call {COMPANY_CONFIG.contact.phoneDisplay}.
              </p>
            </>
          ) : (
            <>
              <p className="font-semibold text-slate-800">
                1. Acceptance of Terms
              </p>
              <p>
                By accessing this corporate portal of Easy Trust Corporation (ETC), you agree to comply with and be bound by the operational terms, disclaimers, and guidelines detailed herein.
              </p>

              <p className="font-semibold text-slate-800 pt-2">
                2. Intellectual Property & Brand Assets
              </p>
              <p>
                The Easy Trust Corporation name, acronym (ETC), official logo, slogan (“Building Trust. Delivering Excellence.”), graphics, and textual materials are proprietary assets protected by national and international intellectual property laws.
              </p>

              <p className="font-semibold text-slate-800 pt-2">
                3. Service Representation & Proposals
              </p>
              <p>
                Information presented on this website concerning Agriculture, Transportation, Procurement & Logistics, and Real Estate serves an informational purpose. Formal commercial obligations are governed by executed corporate contracts and master service agreements.
              </p>

              <p className="font-semibold text-slate-800 pt-2">
                4. Governing Law
              </p>
              <p>
                These terms are governed in accordance with the commercial laws and regulations of the Republic of Sierra Leone.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-[#062B5C] text-white text-xs font-bold rounded-xl hover:bg-[#004AAD] transition-colors"
          >
            I Understand & Close
          </button>
        </div>
      </div>
    </div>
  );
};
