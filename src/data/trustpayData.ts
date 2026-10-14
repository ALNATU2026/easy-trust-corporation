// Trustpay Fintech Ecosystem Data
// Easy Trust Corporation (ETC) Mobile Banking, Payments & Cards

export interface TrustpayService {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  category: 'transfer' | 'bills' | 'cards' | 'pos' | 'banking';
  description: string;
  features: string[];
  supportedPartners?: string[];
  badge?: string;
}

export const TRUSTPAY_IMAGES = {
  heroApp: 'https://i.imgur.com/ppo8n3L.png',
  cardPreview: 'https://i.imgur.com/gnk3Bmz.png',
  posTerminal: 'https://i.imgur.com/pi8P7fB.png',
  fallbackHero: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80',
  fallbackCard: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=1200&q=80',
  fallbackPos: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
};

export const TRUSTPAY_SERVICES: TrustpayService[] = [
  {
    id: 'mobile-money',
    title: 'Orange Money, AfriMoney & QMoney Transfers',
    subtitle: 'Unified Mobile Money Gateway',
    iconName: 'Smartphone',
    category: 'transfer',
    badge: 'Popular in Sierra Leone',
    description: 'Send and receive money seamlessly across all telecom networks in Sierra Leone. Direct wallet-to-wallet transfers between Orange Money, AfriMoney, and QMoney with zero failed transactions and instant confirmation SMS.',
    features: [
      'Instant cross-network mobile money interoperability',
      'Direct wallet cash-in & cash-out without vendor delays',
      'Scheduled recurring remittances and payroll dispatches',
      'Real-time transaction receipts and balance inquiries'
    ],
    supportedPartners: ['Orange Money', 'AfriMoney', 'QMoney']
  },
  {
    id: 'cards',
    title: 'Physical & Virtual Debit Cards',
    subtitle: 'Global Online & Supermarket Payments',
    iconName: 'CreditCard',
    category: 'cards',
    badge: 'Dual Currency USD & SLL',
    description: 'Create instant virtual cards in seconds for international online purchases, streaming subscriptions, and flight bookings. Request an EMV chip physical card for contactless supermarket checkouts, fuel stations, and ATM withdrawals nationwide.',
    features: [
      'Instant virtual dollar cards for Apple, Google, Netflix, Amazon & AliExpress',
      'Contactless NFC physical cards accepted at all supermarket POS machines',
      'In-app instant card freeze/unfreeze and dynamic CVV for anti-fraud protection',
      'Zero monthly maintenance fee with real-time spend analytics'
    ],
    supportedPartners: ['Visa Certified', 'Mastercard Network', 'National Switch']
  },
  {
    id: 'pos-terminal',
    title: 'Smart Merchant POS Terminal System',
    subtitle: 'For Retail Shops, Agents & Businesses',
    iconName: 'Store',
    category: 'pos',
    badge: 'Business & Agents',
    description: 'Empower your supermarket, pharmacy, or agent shop with Trustpay Smart Android POS terminals. Accept card taps, mobile money QR payments, and process cash-in/cash-out with instant automated thermal receipts and 4G dual-SIM failover.',
    features: [
      'Accepts physical cards, NFC contactless phones & Mobile Money QR',
      'Built-in ultra-fast thermal receipt printer and barcode scanner',
      'Next-day automatic settlement into any local commercial bank account',
      'Agent commission portal with competitive transaction revenue sharing'
    ],
    supportedPartners: ['All Local Merchants', 'Supermarkets', 'Fuel Stations', 'Agent Network']
  },
  {
    id: 'airtime-data',
    title: 'Instant Airtime & High-Speed Data Bundles',
    subtitle: 'Discounted Top-ups Across All Networks',
    iconName: 'Zap',
    category: 'bills',
    badge: '2% Cashback',
    description: 'Recharge prepaid airtime and high-speed 4G/5G data packages for Orange, Africell, and QCell in a single tap. Earn instant cashback on every recharge with automated recurring data subscriptions.',
    features: [
      'Supports Orange, Africell & QCell airtime recharges 24/7',
      'Daily, weekly & monthly high-speed data bundles with special Trustpay discounts',
      'Bulk airtime dispatch for corporate teams and family phone lists',
      'Saved recipient contacts for lightning 1-click recharges'
    ],
    supportedPartners: ['Orange SL', 'Africell SL', 'QCell SL']
  },
  {
    id: 'utility-bills',
    title: 'Bill Payments (EDSA Electricity, Water & Cable TV)',
    subtitle: 'Zero Queues & Instant Token Generation',
    iconName: 'Receipt',
    category: 'bills',
    badge: 'Instant Token Delivery',
    description: 'Buy EDSA prepaid electricity meter tokens, settle Guma Valley water bills, and renew DStv, GOtv, and StarTimes entertainment subscriptions without visiting physical offices.',
    features: [
      'Instant 20-digit EDSA electricity token generation via SMS and in-app display',
      'Saved meter numbers for instant recurring household purchases',
      'Direct DStv, GOtv, and StarTimes smartcard bouquet renewals',
      'Official downloadable payment receipts for corporate tax accounting'
    ],
    supportedPartners: ['EDSA Electricity', 'Guma Valley Water', 'DStv / MultiChoice', 'StarTimes']
  },
  {
    id: 'bank-transfers',
    title: 'Commercial Bank Account Transfers (ACH / NIFT)',
    subtitle: 'Direct Interbank Clearing',
    iconName: 'Building',
    category: 'banking',
    badge: 'Bank Grade Security',
    description: 'Move funds directly from your Trustpay wallet to any bank account in Sierra Leone. Interconnected with the National Payment Switch for lightning-fast interbank credit.',
    features: [
      'Instant transfers to Rokel Commercial Bank, SLCB, Ecobank, UBA, Zenith & GTBank',
      'Automated account name verification before money is debited',
      'Low flat-rate interbank settlement fees',
      'Bulk corporate salary distribution files support'
    ],
    supportedPartners: ['Rokel Commercial Bank', 'Sierra Leone Commercial Bank', 'Ecobank', 'Zenith Bank', 'UBA', 'GTBank']
  }
];

export const TRUSTPAY_METRICS = [
  { value: '99.98%', label: 'Transaction Uptime', sub: 'Reliable cloud switch architecture' },
  { value: '3 Seconds', label: 'Average Speed', sub: 'From tap to instant SMS notification' },
  { value: '256-Bit', label: 'Military Encryption', sub: 'PCI-DSS & ISO 27001 standard' },
  { value: 'Le 0.00', label: 'Account Maintenance', sub: 'No hidden monthly or dormancy fees' },
];

export const TRUSTPAY_STEPS = [
  {
    step: '01',
    title: 'Download the App',
    desc: 'Install Trustpay from Google Play Store or Apple App Store on your smartphone.'
  },
  {
    step: '02',
    title: 'Register in 2 Minutes',
    desc: 'Sign up with your phone number and valid Sierra Leone National ID / Passport for instant KYC.'
  },
  {
    step: '03',
    title: 'Fund Your Wallet',
    desc: 'Add funds through Orange Money, AfriMoney, QMoney, bank transfer, or at any Trustpay POS agent.'
  },
  {
    step: '04',
    title: 'Transact Worldwide',
    desc: 'Pay bills, send interbank transfers, swipe in supermarkets, or shop globally with virtual cards.'
  }
];

export const TRUSTPAY_FAQS = [
  {
    q: 'How do I fund my Trustpay account?',
    a: 'You can fund your wallet via Orange Money, AfriMoney, QMoney, direct bank transfer from any commercial bank, or by visiting any licensed Trustpay POS agent kiosk across Sierra Leone.'
  },
  {
    q: 'Can I use the Trustpay Virtual Card for Netflix, Apple, and international shopping?',
    a: 'Yes! Trustpay Virtual Cards are globally accepted 16-digit debit cards enabled for online USD/GBP transactions including Netflix, Apple App Store, Google Play, Amazon, and AliExpress with automatic currency conversion.'
  },
  {
    q: 'How does a business or agent obtain a Trustpay POS terminal?',
    a: 'Registered business owners and licensed mobile money agents can apply through the Trustpay app or visit our Easy Trust Corporation headquarters. We issue terminals within 24 to 48 hours with full merchant training.'
  },
  {
    q: 'Is my money secure with Trustpay?',
    a: 'Yes. Trustpay operates under strict regulatory oversight from the Bank of Sierra Leone, utilizes PCI-DSS Level 1 certified payment processing, end-to-end 256-bit encryption, and biometric two-factor authentication (Fingerprint / Face ID).'
  }
];
