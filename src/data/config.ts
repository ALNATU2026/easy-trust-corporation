/**
 * Easy Trust Corporation (ETC)
 * Centralized Configuration File
 * 
 * Edit any company information, contact details, statistics, or services here.
 * All updates propagate automatically across the entire website.
 */

import { CompanyConfig } from '../types';

export const COMPANY_CONFIG: CompanyConfig = {
  name: "Easy Trust Corporation",
  acronym: "ETC",
  legalName: "Easy Trust Corporation (ETC)",
  slogan: "Building Trust. Delivering Excellence.",
  positioning: "A diversified company committed to creating value across Agriculture, Transportation, Procurement & Logistics, and Real Estate.",
  logoUrl: "https://imgur.com/KgFcYl2.png",
  
  aboutShort: "Easy Trust Corporation (ETC) is a diversified company built on a strong foundation of trust, integrity and excellence. We operate in Agriculture, Transportation, Procurement & Logistics, and Real Estate, delivering practical solutions and lasting value to our clients, partners and communities.",
  
  aboutFull: [
    "Easy Trust Corporation (ETC) was established to drive sustainable economic growth through strategic operations in core sectors essential for human progress and commercial development.",
    "Rooted in Freetown, Sierra Leone and expanding across key regional markets, ETC combines local mastery with international standards of excellence. Our leadership team brings decades of multidisciplinary expertise across large-scale commercial farming, modern multimodal transportation, resilient global procurement and supply chains, and forward-looking real estate developments.",
    "Through our four foundational divisions, we provide unified, high-integrity solutions that empower communities, optimize industrial supply chains, and generate durable wealth for our partners and stakeholders."
  ],

  contact: {
    phone: "+23275195672",
    phoneSecondary: "073952752",
    phoneDisplay: "+232 75 195 672 / 073 952 752",
    whatsappNumber: "+23275195672",
    whatsappDefaultMessage: "Hello Easy Trust Corporation, I would like to make an inquiry about your services.",
    email: "info@easytrustcorp.com",
    address: "Freetown, Sierra Leone",
    cityCountry: "Freetown, Sierra Leone",
    locationDetails: "Corporate Headquarters: Central Business District, Freetown, Sierra Leone",
    workingHours: "Monday – Friday: 8:00 AM – 5:30 PM | Saturday: 9:00 AM – 2:00 PM (GMT)"
  },

  social: {
    facebook: "https://facebook.com/easytrustcorp",
    instagram: "https://instagram.com/easytrustcorp",
    linkedin: "https://linkedin.com/company/easy-trust-corporation",
    youtube: "https://youtube.com/@easytrustcorp",
    twitter: "https://x.com/easytrustcorp"
  },

  services: [
    {
      id: "agriculture",
      sectorCode: "agri",
      title: "Agriculture",
      tagline: "Supporting Food Security & Sustainable Farming",
      description: "Supporting food security and sustainable farming for a better tomorrow.",
      longDescription: "Our agricultural division invests in modern mechanized farming, climate-smart irrigation, and sustainable crop cultivation. We partner with local farmers, deploy advanced agronomic practices, and enhance food processing capacity to strengthen national food sovereignty and regional export potential.",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?auto=format&fit=crop&w=1200&q=80",
      iconName: "Sprout",
      accentColor: "#0A9F3D",
      capabilities: [
        "Commercial crop production & grain harvesting",
        "Modern irrigation & precision soil management",
        "Sustainable agro-processing & cold chain storage",
        "Smallholder farmer empowerment & cooperative training",
        "Eco-friendly organic fertilizer & crop protection"
      ],
      keyMetric: {
        label: "Food Security Commitment",
        value: "100%"
      }
    },
    {
      id: "transportation",
      sectorCode: "trans",
      title: "Transportation",
      tagline: "Safe, Reliable & Timely Movement",
      description: "Safe, reliable and timely movement of goods and people.",
      longDescription: "ETC Transportation operates a dependable fleet of heavy-duty haulage vehicles, refrigerated carriers, and passenger transport solutions. Equipped with real-time GPS tracking, rigorous vehicle safety inspections, and trained drivers, we guarantee smooth transit across transit corridors.",
      image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=1200&q=80",
      iconName: "Truck",
      accentColor: "#004AAD",
      capabilities: [
        "Heavy cargo & bulk freight haulage",
        "Temperature-controlled refrigerated transit",
        "Inter-city and cross-border commercial transport",
        "24/7 telematics & live cargo GPS monitoring",
        "Preventative maintenance & high-safety driver training"
      ],
      keyMetric: {
        label: "On-Time Dispatch Rate",
        value: "99.4%"
      }
    },
    {
      id: "procurement-logistics",
      sectorCode: "logistics",
      title: "Procurement & Logistics",
      tagline: "Efficient Sourcing & Seamless Supply Chains",
      description: "Efficient sourcing and seamless supply chain solutions.",
      longDescription: "From industrial machinery to essential consumables, our procurement division manages end-to-end global vendor verification, customs clearing, warehousing, and inventory distribution. We eliminate supply bottlenecks and maximize cost-efficiency for businesses and institutions.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80",
      iconName: "Boxes",
      accentColor: "#062B5C",
      capabilities: [
        "Strategic global sourcing & supplier vetting",
        "Customs brokerage, clearance & tariff advisory",
        "Modern bonded warehousing & inventory control",
        "Last-mile distribution & door-to-door delivery",
        "Contract logistics & project cargo handling"
      ],
      keyMetric: {
        label: "Supply Chain Reliability",
        value: "100%"
      }
    },
    {
      id: "real-estate",
      sectorCode: "realestate",
      title: "Real Estate",
      tagline: "Building & Managing Valuable Properties",
      description: "Building and managing valuable properties for a greater future.",
      longDescription: "ETC Real Estate develops prime residential estates, contemporary commercial office complexes, and industrial storage yards. We integrate modern architecture with sustainable energy and water systems, creating spaces that appreciate in value and elevate community living.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80",
      iconName: "Building2",
      accentColor: "#0066CC",
      capabilities: [
        "Master-planned residential communities & luxury villas",
        "Commercial office developments & retail plazas",
        "Industrial warehouses & logistics park leasing",
        "Professional property management & asset maintenance",
        "Land acquisition, site development & title advisory"
      ],
      keyMetric: {
        label: "Development Pipeline",
        value: "Growing"
      }
    }
  ],

  impactMetrics: [
    {
      id: "agri-growth",
      sector: "Agriculture Growth",
      value: "100%",
      label: "Focus on Food Security",
      description: "Dedicated to bolstering domestic food security and empowering local agricultural value chains.",
      highlightText: "Sustainable farming practices"
    },
    {
      id: "logistics-efficiency",
      sector: "Logistics Efficiency",
      value: "99%",
      label: "On-Time Delivery Rate",
      description: "Precision route planning, reliable fleet availability, and stringent safety protocols.",
      highlightText: "Fleet telematics & 24/7 dispatch"
    },
    {
      id: "procurement-reliability",
      sector: "Procurement Reliability",
      value: "100%",
      label: "Quality & Trusted Supply",
      description: "Vetted international supply partners ensuring verified quality and compliance for every consignment.",
      highlightText: "Zero-compromise QA standards"
    },
    {
      id: "real-estate-dev",
      sector: "Real Estate Development",
      value: "Growing",
      label: "Better Spaces, Brighter Futures",
      description: "Expanding footprint in modern residential, commercial, and industrial infrastructure.",
      highlightText: "Sustainable architectural design"
    }
  ],

  values: [
    {
      id: "integrity",
      title: "INTEGRITY",
      subtitle: "We do what is right.",
      description: "Honesty and ethical conduct guide every transaction, partnership, and corporate decision we make.",
      iconName: "ShieldCheck",
      color: "#004AAD"
    },
    {
      id: "reliability",
      title: "RELIABILITY",
      subtitle: "You can count on us.",
      description: "We honor our commitments with unwavering dependability, timely delivery, and operational excellence.",
      iconName: "ClockCheck",
      color: "#062B5C"
    },
    {
      id: "innovation",
      title: "INNOVATION",
      subtitle: "We seek better ways.",
      description: "We harness modern technology, smart logistics, and creative problem-solving to continuously elevate standards.",
      iconName: "Lightbulb",
      color: "#0066CC"
    },
    {
      id: "sustainability",
      title: "SUSTAINABILITY",
      subtitle: "For a lasting impact.",
      description: "Our initiatives protect the environment, support communities, and create enduring multi-generational value.",
      iconName: "Leaf",
      color: "#0A9F3D"
    }
  ],

  whyChooseUs: [
    {
      id: "track-record",
      title: "Proven Track Record",
      description: "A history of consistent performance.",
      extendedText: "Decades of collective leadership experience executing complex commercial contracts with zero compromises.",
      iconName: "Award"
    },
    {
      id: "skilled-team",
      title: "Skilled Team",
      description: "Experienced professionals you can rely on.",
      extendedText: "Certified agronomists, logistics controllers, transport engineers, and certified real estate developers.",
      iconName: "Users"
    },
    {
      id: "wide-network",
      title: "Wide Network",
      description: "Strong partnerships and reach.",
      extendedText: "Robust domestic presence combined with regional trade corridors and international procurement hubs.",
      iconName: "Globe2"
    },
    {
      id: "customer-focus",
      title: "Customer Focus",
      description: "Your success is our priority.",
      extendedText: "Tailored service packages, responsive dedicated account managers, and transparent communication.",
      iconName: "HeartHandshake"
    }
  ],

  news: [
    {
      id: "news-1",
      title: "ETC Expands Sustainable Farming Operations to Bolster National Food Security",
      category: "Agriculture",
      date: "September 14, 2026",
      readTime: "3 min read",
      summary: "Easy Trust Corporation announces a major expansion in mechanized crop cultivation, introducing solar-powered drip irrigation systems and community training.",
      content: [
        "In line with our corporate mandate to strengthen domestic food supply chains, Easy Trust Corporation has commissioned an additional 500 hectares of mechanized crop farming.",
        "The newly integrated facilities feature solar-powered drip irrigation and precision soil telemetry, drastically reducing water usage while boosting yield consistency.",
        "'Our focus on sustainable agriculture directly translates to food security and local economic empowerment,' stated the Managing Director of ETC Agriculture division."
      ],
      image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80",
      featured: true
    },
    {
      id: "news-2",
      title: "Fleet Modernization: ETC Deploys New Smart Haulage Trucks with GPS Telematics",
      category: "Logistics",
      date: "August 28, 2026",
      readTime: "4 min read",
      summary: "ETC Transportation and Logistics divisions integrate advanced AI telemetry and temperature-regulated cargo carriers for commercial corridors.",
      content: [
        "To ensure our on-time delivery rate remains at industry-leading levels, ETC has welcomed twenty new heavy-duty commercial haulage vehicles to its active fleet.",
        "Each vehicle is equipped with dual dashcams, computerized load monitoring, and round-the-clock satellite dispatch connectivity, ensuring high cargo security.",
        "Clients can now track their high-value consignments with pinpoint accuracy from point of departure to final delivery."
      ],
      image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "news-3",
      title: "ETC Real Estate Unveils Modern Commercial Complex Development in Freetown",
      category: "Real Estate",
      date: "July 19, 2026",
      readTime: "3 min read",
      summary: "Groundbreaking begins on the Horizon Business Plaza, an eco-certified multi-use corporate facility offering modern office spaces and retail.",
      content: [
        "Easy Trust Corporation continues its mission of creating durable value with the launch of its premier commercial real estate venture in the capital.",
        "The project integrates energy-efficient glass facades, rooftop solar arrays, underground secure parking, and high-speed fiber infrastructure.",
        "Pre-leasing interest has been exceptional among multinational organizations and growing local enterprises seeking world-class facilities."
      ],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80"
    },
    {
      id: "news-4",
      title: "Easy Trust Corporation Reaffirms Core Commitment: Building Trust, Delivering Excellence",
      category: "Company News",
      date: "June 05, 2026",
      readTime: "2 min read",
      summary: "Reflecting on corporate milestones and sustainable partnerships across West Africa, ETC announces new client service charters.",
      content: [
        "As Easy Trust Corporation commemorates another quarter of steady cross-sector growth, executive leadership reinforced our core values of Integrity, Reliability, Innovation, and Sustainability.",
        "'Trust is not merely in our name—it is the foundation of every contract we sign and every harvest we deliver,' remarked executive leadership.",
        "The corporation will roll out expanded digital customer service portals and dedicated client assistance desks over the coming months."
      ],
      image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
    }
  ]
};

// Helper function to build direct WhatsApp link with pre-filled message
export function getWhatsAppUrl(customMessage?: string): string {
  const number = COMPANY_CONFIG.contact.whatsappNumber.replace(/[^0-9]/g, '');
  const message = encodeURIComponent(customMessage || COMPANY_CONFIG.contact.whatsappDefaultMessage);
  return `https://wa.me/${number}?text=${message}`;
}

// Helper function for direct phone call
export function getTelUrl(phoneNumber?: string): string {
  const cleanNumber = (phoneNumber || COMPANY_CONFIG.contact.phone).replace(/[^0-9+]/g, '');
  return `tel:${cleanNumber}`;
}

// Helper function for direct email
export function getMailtoUrl(subject?: string): string {
  const email = COMPANY_CONFIG.contact.email;
  const sub = encodeURIComponent(subject || `Inquiry for ${COMPANY_CONFIG.name}`);
  return `mailto:${email}?subject=${sub}`;
}
