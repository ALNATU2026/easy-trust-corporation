import React, { useState } from 'react';
import { ContactFormData } from '../types';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { COMPANY_CONFIG } from '../data/config';

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceInterest: 'general',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide a message or inquiry details';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate reliable dispatch
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        company: '',
        serviceInterest: 'general',
        subject: '',
        message: ''
      });
      setErrors({});
    }, 1200);
  };

  return (
    <div id="contact-form-container" className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-xl">
      <div className="mb-6">
        <h3 className="text-xl sm:text-2xl font-extrabold text-[#062B5C] tracking-tight">
          Send Us a Message
        </h3>
        <p className="text-sm text-slate-500 mt-1">
          Fill out the form below and our corporate dispatch team will respond promptly within 24 business hours.
        </p>
      </div>

      {isSubmitted ? (
        <div className="p-8 text-center bg-emerald-50/80 rounded-2xl border border-emerald-200 animate-fadeIn">
          <div className="w-14 h-14 bg-[#0A9F3D] text-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <h4 className="text-xl font-bold text-[#062B5C]">
            Message Received Successfully!
          </h4>
          <p className="text-sm text-slate-600 mt-2 max-w-md mx-auto">
            Thank you for reaching out to Easy Trust Corporation. Your message has been routed to our corporate desk and we will be in touch shortly.
          </p>
          <button
            onClick={() => setIsSubmitted(false)}
            className="mt-6 px-6 py-2.5 bg-[#004AAD] text-white text-xs font-bold rounded-xl hover:bg-[#062B5C] transition-colors"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4" noValidate>
          
          {/* Full Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-fullName" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact-fullName"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                placeholder="e.g. Samuel Kargbo"
                className={`w-full px-4 py-3 text-sm rounded-xl border ${
                  errors.fullName ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-[#F8FAFD]'
                } focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:bg-white transition-all`}
              />
              {errors.fullName && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.fullName}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-email" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="contact-email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="name@company.com"
                className={`w-full px-4 py-3 text-sm rounded-xl border ${
                  errors.email ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-[#F8FAFD]'
                } focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:bg-white transition-all`}
              />
              {errors.email && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.email}
                </p>
              )}
            </div>
          </div>

          {/* Phone & Company */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-phone" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                id="contact-phone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+232 75 195 672"
                className={`w-full px-4 py-3 text-sm rounded-xl border ${
                  errors.phone ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-[#F8FAFD]'
                } focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:bg-white transition-all`}
              />
              {errors.phone && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.phone}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="contact-company" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                id="contact-company"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                placeholder="Enterprise Ltd."
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-[#F8FAFD] focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:bg-white transition-all"
              />
            </div>
          </div>

          {/* Sector of Interest & Subject */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label htmlFor="contact-serviceInterest" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Area of Interest
              </label>
              <select
                id="contact-serviceInterest"
                value={formData.serviceInterest}
                onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                className="w-full px-4 py-3 text-sm rounded-xl border border-slate-200 bg-[#F8FAFD] focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:bg-white transition-all text-slate-700"
              >
                <option value="general">General Corporate Inquiry</option>
                <option value="agriculture">Agriculture & Farming</option>
                <option value="transportation">Transportation & Haulage</option>
                <option value="logistics">Procurement & Logistics</option>
                <option value="realestate">Real Estate & Property Development</option>
                <option value="partnership">Strategic Partnership</option>
              </select>
            </div>

            <div>
              <label htmlFor="contact-subject" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
                Subject <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="contact-subject"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                placeholder="e.g. Bulk haulage inquiry"
                className={`w-full px-4 py-3 text-sm rounded-xl border ${
                  errors.subject ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-[#F8FAFD]'
                } focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:bg-white transition-all`}
              />
              {errors.subject && (
                <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.subject}
                </p>
              )}
            </div>
          </div>

          {/* Message textarea */}
          <div>
            <label htmlFor="contact-message" className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1.5">
              Message <span className="text-red-500">*</span>
            </label>
            <textarea
              id="contact-message"
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your inquiry, project scope, or requirements..."
              className={`w-full px-4 py-3 text-sm rounded-xl border ${
                errors.message ? 'border-red-400 bg-red-50/20' : 'border-slate-200 bg-[#F8FAFD]'
              } focus:outline-none focus:ring-2 focus:ring-[#004AAD] focus:bg-white transition-all resize-none`}
            />
            {errors.message && (
              <p className="text-xs text-red-500 mt-1 flex items-center gap-1">
                <AlertCircle className="w-3 h-3" /> {errors.message}
              </p>
            )}
          </div>

          {/* Submit Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              id="contact-submit-button"
              className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#004AAD] to-[#0A9F3D] hover:from-[#062B5C] hover:to-[#087A32] shadow-md hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:pointer-events-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Transmitting Secure Message...</span>
                </>
              ) : (
                <>
                  <span>Send Message</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </div>

          <p className="text-[11px] text-slate-400 text-center pt-1">
            Easy Trust Corporation respects your data privacy. Your contact details remain strictly confidential.
          </p>

        </form>
      )}
    </div>
  );
};
