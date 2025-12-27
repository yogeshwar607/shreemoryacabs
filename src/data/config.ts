/**
 * Site Configuration - Central source of truth for business constants
 * Used across all pages for consistent branding, contact info, and SEO
 *
 * This file centralizes all business-related configuration
 */

export const SITE_CONFIG = {
  // Basic Site Info
  url: 'https://shreemoryacabs.com',
  name: 'Shree Morya Cabs',
  tagline: 'Premium Electric Cab Service - Blessed by Lord Ganesha',
  description: 'Premium electric cab service from Pune to Mumbai Airport blessed by Lord Ganesha. Luxury 7-seater EVs, transparent pricing, professional drivers. Book 24/7.',

  // Contact Information
  contact: {
    phone: '+917498264215',
    phoneDisplay: '+91 74982 64215',
    email: 'shreemoryacabs@gmail.com',
    whatsapp: '917498264215', // Without + for WhatsApp API
    whatsappLink: 'https://wa.me/917498264215'
  },

  // Business Address
  address: {
    street: 'Pune, Maharashtra',
    city: 'Pune',
    state: 'Maharashtra',
    postalCode: '411001',
    country: 'India'
  },

  // Headquarters Coordinates (Pune city center)
  coordinates: {
    lat: 18.5204,
    lng: 73.8567
  },

  // Social Media
  social: {
    facebook: '',
    twitter: '',
    instagram: '',
    linkedin: ''
  },

  // Business Hours
  businessHours: {
    display: '24/7',
    alwaysOpen: true
  },

  // Ratings
  rating: {
    value: '4.8',
    count: '156',
    outOf: '5.0'
  },

  // Service Area
  serviceArea: {
    primary: 'Pune Metropolitan Region',
    coverage: [
      'Hinjewadi', 'Wakad', 'Baner', 'Aundh', 'Kothrud',
      'PCMC', 'Pimple Saudagar', 'Viman Nagar', 'Hadapsar',
      'All Pune localities'
    ],
    destinations: [
      'Mumbai Airport',
      'Navi Mumbai Airport',
      'Pune Airport',
      'Mumbai City',
      'Lonavala',
      'Shirdi',
      'All Maharashtra'
    ]
  },

  // Fleet Information
  fleet: {
    vehicles: [
      {
        name: 'Kia Carens EV',
        capacity: 7,
        range: '400+ km',
        type: 'Standard'
      },
      {
        name: 'BYD eMax 7',
        capacity: 7,
        range: '530+ km',
        type: 'Premium'
      }
    ]
  },

  // Key Features
  features: [
    'Premium Electric Fleet',
    '7-Seater Luxury SUVs',
    'Professional Drivers',
    'Transparent Pricing',
    'Zero Surge Pricing',
    'Corporate Packages',
    'GST Invoices',
    '24/7 Availability',
    '99.8% On-Time Record',
    'Eco-Friendly Travel'
  ],

  // Booking Information
  booking: {
    advanceBookingDays: 30,
    minimumNoticeHours: 2,
    cancellationPolicy: 'Free cancellation up to 2 hours before pickup',
    paymentMethods: ['Cash', 'UPI', 'Card', 'Corporate Billing']
  }
};

/**
 * SEO Templates - Dynamic title and description generators
 */
export const SEO_TEMPLATES = {
  // Locality Page Templates
  locality: {
    title: (locality: string, price: number = 3700) =>
      `Electric Cab Service ${locality} ₹${price.toLocaleString('en-IN')} | Mumbai Airport | 24/7 - Shree Morya Cabs`,

    description: (locality: string, area: string, highlights: string) =>
      `Premium electric cab service from ${locality} to Mumbai Airport at ₹3,700 all-inclusive. ${highlights}. Professional drivers, luxury 7-seater EVs, zero surge pricing. Book 24/7 for IT professionals.`,

    ogTitle: (locality: string) =>
      `Electric Cab Service ${locality} | Best Rates to Mumbai Airport`,

    ogDescription: (locality: string) =>
      `Book premium electric cab from ${locality} to Mumbai Airport. Luxury EVs, professional drivers, transparent pricing. Corporate packages available.`
  },

  // Route Page Templates
  route: {
    title: (from: string, to: string, price: number, distance: string) =>
      `${from} to ${to} Electric Cab ₹${price.toLocaleString('en-IN')} | ${distance} | Shree Morya Cabs`,

    description: (from: string, to: string, price: number, duration: string) =>
      `Premium electric cab from ${from} to ${to} at ₹${price.toLocaleString('en-IN')} all-inclusive. ${duration} journey in luxury 7-seater EVs. Professional drivers, zero surge pricing. Book 24/7.`,

    ogTitle: (from: string, to: string) =>
      `${from} to ${to} | Premium Electric Cab Service`,

    ogDescription: (from: string, to: string, price: number) =>
      `Book electric cab from ${from} to ${to} at ₹${price.toLocaleString('en-IN')}. Luxury EVs, professional service, transparent pricing.`
  },

  // Blog Post Templates
  blog: {
    title: (title: string) =>
      `${title} | Shree Morya Cabs Blog`,

    description: (excerpt: string) =>
      `${excerpt} | Premium electric cab service blog by Shree Morya Cabs.`,

    ogTitle: (title: string) =>
      title,

    ogDescription: (excerpt: string) =>
      excerpt
  },

  // Default/Homepage Templates
  default: {
    title: 'Shree Morya Cabs | Premium Electric Cab Service Pune to Mumbai',
    description: 'Premium electric cab service from Pune to Mumbai Airport blessed by Lord Ganesha. Luxury 7-seater EVs, transparent pricing ₹3,700, professional drivers. Corporate packages available. Book 24/7.',
    ogTitle: 'Shree Morya Cabs | Premium Electric Cab Service',
    ogDescription: 'Premium electric cab service from Pune to Mumbai blessed by Lord Ganesha. Luxury EVs, transparent pricing, professional drivers. Book 24/7.'
  }
};

/**
 * Pricing Configuration
 */
export const PRICING_CONFIG = {
  // Base routes
  routes: {
    'pune-to-mumbai-airport': {
      kiaCarens: 3700,
      bydEmax7: 4200,
      distance: '150 km',
      duration: '2.5-3 hours'
    },
    'pune-to-pune-airport': {
      kiaCarens: 600-1200,
      bydEmax7: 700-1400,
      distance: '10-35 km',
      duration: '20-50 minutes'
    },
    'pune-to-navi-mumbai-airport': {
      kiaCarens: 4000,
      bydEmax7: 4500,
      distance: '140 km',
      duration: '2.5 hours'
    }
  },

  // Inclusions
  inclusions: [
    'Pickup from any location',
    'All tolls',
    'Driver allowance',
    'Airport parking',
    'GST (if applicable)',
    'Free waiting (30 minutes)',
    'Flight tracking'
  ],

  // Corporate discounts
  corporate: {
    monthlyTripsDiscount: {
      '4-10': '5%',
      '11-20': '10%',
      '21+': '15%'
    }
  },

  // Additional charges
  additionalCharges: {
    extraWaiting: '₹100 per 30 minutes (after free 30 min)',
    nightSurcharge: 'None - same rate 24/7',
    surgePricing: 'None - fixed transparent pricing'
  }
};

/**
 * Common FAQ items that can be reused across pages
 */
export const COMMON_FAQS = {
  general: [
    {
      question: 'Do you charge surge pricing?',
      answer: 'No, we never charge surge pricing. Our rates are fixed and transparent 24/7. ₹3,700 for Pune to Mumbai Airport whether you book at 3 AM or 3 PM.'
    },
    {
      question: 'How do I book an electric cab?',
      answer: `Book via WhatsApp at ${SITE_CONFIG.contact.phoneDisplay} or call the same number. Provide pickup location, destination, date, and time. Get instant confirmation with driver details.`
    },
    {
      question: 'Do you provide GST invoices?',
      answer: 'Yes, we provide GST invoices for all bookings. Perfect for corporate expense claims and reimbursements. Invoices are sent via email after the trip.'
    },
    {
      question: 'What is included in the price?',
      answer: 'Everything! Our all-inclusive price covers: vehicle, driver, tolls, parking, driver allowance, and GST. No hidden charges, no last-minute surprises.'
    },
    {
      question: 'How reliable are electric vehicles for long distances?',
      answer: 'Extremely reliable! Our Kia Carens EV has 400+ km range and BYD eMax 7 has 530+ km range. Pune to Mumbai (150 km) uses only 30-40% battery. Zero range anxiety.'
    }
  ],

  corporate: [
    {
      question: 'Do you offer corporate packages?',
      answer: 'Yes, we offer dedicated corporate packages including monthly billing, GST invoices, priority booking, dedicated account manager, and volume discounts for 4+ trips per month.'
    },
    {
      question: 'Can we get carbon savings reports for ESG?',
      answer: 'Yes! We provide quarterly CO₂ savings reports for corporate clients showing environmental impact of choosing electric cabs over diesel vehicles. Perfect for CSR and ESG reporting.'
    }
  ],

  earlyMorning: [
    {
      question: 'Do you provide early morning airport pickups?',
      answer: 'Yes, we specialize in early morning pickups (2-4 AM) for early flights. Our drivers are punctual, professional, and our silent electric vehicles won\'t disturb neighbors during pickup.'
    }
  ]
};

/**
 * URL Structure
 */
export const URL_STRUCTURE = {
  localities: '/electric-cab-service',
  routes: '/routes',
  blog: '/blog',
  fleet: '/fleet',
  corporate: '/corporate-electric-cab-pune'
};
