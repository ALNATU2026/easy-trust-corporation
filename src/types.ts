/**
 * Easy Trust Corporation (ETC) - Core Data Types & Interfaces
 */

export interface NavItem {
  label: string;
  href: string;
  isExternal?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  sectorCode: 'agri' | 'trans' | 'logistics' | 'realestate';
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  iconName: string;
  accentColor: string;
  capabilities: string[];
  keyMetric: {
    label: string;
    value: string;
  };
}

export interface ImpactMetric {
  id: string;
  sector: string;
  value: string;
  label: string;
  description: string;
  highlightText?: string;
}

export interface ValueItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
}

export interface WhyChooseUsItem {
  id: string;
  title: string;
  description: string;
  extendedText: string;
  iconName: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  category: 'Company News' | 'Agriculture' | 'Logistics' | 'Real Estate' | 'Corporate Updates';
  date: string;
  readTime: string;
  summary: string;
  content: string[];
  image: string;
  featured?: boolean;
}

export interface ContactInfo {
  phone: string;
  phoneSecondary: string;
  phoneDisplay: string;
  whatsappNumber: string;
  whatsappDefaultMessage: string;
  email: string;
  address: string;
  cityCountry: string;
  locationDetails: string;
  workingHours: string;
}

export interface SocialLinks {
  facebook: string;
  instagram: string;
  linkedin: string;
  youtube: string;
  twitter: string;
}

export interface CompanyConfig {
  name: string;
  acronym: string;
  legalName: string;
  slogan: string;
  positioning: string;
  logoUrl?: string;
  aboutShort: string;
  aboutFull: string[];
  contact: ContactInfo;
  social: SocialLinks;
  services: ServiceItem[];
  impactMetrics: ImpactMetric[];
  values: ValueItem[];
  whyChooseUs: WhyChooseUsItem[];
  news: NewsArticle[];
}

export interface ContactFormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  serviceInterest: string;
  subject: string;
  message: string;
}
