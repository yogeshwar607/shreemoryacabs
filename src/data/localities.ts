/**
 * Localities Data - Central source of truth for all locality pages
 * Powers the dynamic locality template at /src/pages/electric-cab-service/[locality].astro
 *
 * This file replaces 13 static locality page files (~10,425 lines)
 */

export interface Locality {
  id: string;
  slug: string;
  name: string;
  displayName: string; // Full descriptive name
  area: string; // Geographic area (e.g., "Pune West")

  coordinates: {
    lat: number;
    lng: number;
  };

  description: string; // Short description for meta
  longDescription: string; // Detailed description for hero section
  highlights: string[]; // Key points about the locality

  popularDestinations: {
    airportDistance: string;
    puneAirportDistance?: string;
    naviMumbaiAirportDistance?: string;
  };

  pricing: {
    mumbaiAirport: number;
    puneAirport?: number;
    naviMumbaiAirport?: number;
    lonavala?: number;
    shirdi?: number;
    mumbaiCity?: number;
  };

  localityType: 'it-hub' | 'residential' | 'commercial' | 'mixed' | 'industrial';
  landmarks: string[]; // Key landmarks, societies, companies
  itCompanies?: string[]; // IT companies in the area

  nearbyLocalities: string[]; // IDs of nearby localities for auto-linking
  relatedRoutes: string[]; // Route slugs related to this locality

  keywords: string[]; // SEO keywords
  popular: boolean; // Is this a popular/featured locality

  coverageAreas?: string[]; // Sub-areas covered (e.g., Hinjewadi Phase 1, 2, 3)
  specialFeatures?: string[]; // Unique features or services for this locality
}

export const localities: Locality[] = [
  {
    id: 'hinjewadi',
    slug: 'hinjewadi',
    name: 'Hinjewadi',
    displayName: 'Hinjewadi Phase 1, 2, 3 - Rajiv Gandhi Infotech Park',
    area: 'Pune West',
    coordinates: { lat: 18.5912, lng: 73.7389 },
    description: 'Premium electric cab service from Hinjewadi to Mumbai Airport, Pune Airport, and all destinations. Professional drivers, luxury 7-seater EVs, transparent pricing. Perfect for IT professionals and corporate travel.',
    longDescription: 'Premium electric cab service from Hinjewadi (Phase 1, 2, 3) to Mumbai Airport, Pune Airport, and all destinations. Professional drivers, luxury 7-seater electric SUVs, transparent pricing. Perfect for IT professionals and corporate travel.',
    highlights: [
      "Pune's largest IT hub with 200,000+ IT professionals",
      'Coverage across all Hinjewadi phases (1, 2, 3)',
      'Direct pickup from TCS, Infosys, Wipro, Cognizant, Tech Mahindra',
      'Corporate packages with GST invoices and monthly billing',
      'Silent electric vehicles perfect for early morning pickups'
    ],
    popularDestinations: {
      airportDistance: '155 km, 2.5-3 hours',
      puneAirportDistance: '25 km, 40-50 minutes',
      naviMumbaiAirportDistance: '140 km, 2.5 hours'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 1200,
      naviMumbaiAirport: 4200,
      lonavala: 2400,
      mumbaiCity: 4500,
      shirdi: 5500
    },
    localityType: 'it-hub',
    landmarks: [
      'Rajiv Gandhi Infotech Park',
      'TCS Synergy Park',
      'Infosys Hinjewadi',
      'Wipro Hinjewadi',
      'Cognizant',
      'Tech Mahindra',
      'Blue Ridge',
      'Megapolis',
      'Xion Mall'
    ],
    itCompanies: [
      'TCS', 'Infosys', 'Wipro', 'Cognizant', 'Tech Mahindra',
      'Capgemini', 'IBM', 'Accenture', 'Syntel', 'KPIT'
    ],
    nearbyLocalities: ['wakad', 'baner', 'pimple-nilakh', 'balewadi'],
    relatedRoutes: ['hinjewadi-to-mumbai-airport'],
    keywords: [
      'electric cab hinjewadi',
      'ev taxi hinjewadi',
      'hinjewadi to mumbai airport cab',
      'hinjewadi airport taxi',
      'electric cab hinjewadi phase 1',
      'hinjewadi phase 2 electric cab',
      'hinjewadi phase 3 cab service',
      'tcs hinjewadi cab',
      'infosys hinjewadi taxi',
      'wipro hinjewadi cab service',
      'rajiv gandhi infotech park cab',
      'hinjewadi it park taxi',
      'hinjewadi corporate cab'
    ],
    popular: true,
    coverageAreas: [
      'Hinjewadi Phase 1',
      'Hinjewadi Phase 2',
      'Hinjewadi Phase 3',
      'Rajiv Gandhi Infotech Park',
      'Blue Ridge',
      'Megapolis',
      'Life Republic'
    ],
    specialFeatures: [
      'Corporate electric cab packages for IT companies',
      'Early morning airport pickups (3-4 AM)',
      'GST invoices for expense claims',
      'Dedicated account manager for corporate clients',
      'Carbon savings reports for ESG goals'
    ]
  },
  {
    id: 'wakad',
    slug: 'wakad',
    name: 'Wakad',
    displayName: 'Wakad - Seasons Mall, Blue Ridge, IT Parks',
    area: 'Pune North-West',
    coordinates: { lat: 18.5974, lng: 73.7679 },
    description: 'Premium electric cab service from Wakad to Mumbai Airport at ₹3,700. Pickup from Seasons Mall, Blue Ridge, IT parks. Professional drivers, luxury 7-seater EVs, zero surge. Corporate packages available 24/7.',
    longDescription: 'Premium electric cab service from Wakad to Mumbai Airport, Pune Airport, and all destinations. Serving Seasons Mall area, Blue Ridge, Megapolis, and all Wakad IT companies. Professional drivers, luxury 7-seater electric SUVs, transparent pricing. Perfect for IT professionals, families, and corporate travel.',
    highlights: [
      'Vibrant neighborhood combining IT sector with modern residential complexes',
      'Complete coverage: Seasons Mall, Blue Ridge, Megapolis, Datta Mandir area',
      'Service to Infosys, Wipro, Capgemini, TCS Sahyadri Park',
      'Strategic location between Hinjewadi and Pune city',
      '24/7 availability for corporate and residential pickups'
    ],
    popularDestinations: {
      airportDistance: '150 km, 2.5-3 hours',
      puneAirportDistance: '18 km, 30-40 minutes',
      naviMumbaiAirportDistance: '135 km, 2.5 hours'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 900,
      naviMumbaiAirport: 4000,
      lonavala: 2200,
      shirdi: 5200,
      mumbaiCity: 4500
    },
    localityType: 'mixed',
    landmarks: [
      'Seasons Mall',
      'Blue Ridge Township',
      'Megapolis',
      'Pristine Prolife',
      'Wakad Bridge',
      'Datta Mandir',
      'Infosys Wakad',
      'Wipro Campus',
      'Capgemini Office'
    ],
    itCompanies: [
      'Infosys', 'Wipro', 'Capgemini', 'TCS Sahyadri Park',
      'Tech companies near Seasons Mall'
    ],
    nearbyLocalities: ['hinjewadi', 'baner', 'pimple-saudagar', 'ravet'],
    relatedRoutes: ['wakad-to-mumbai-airport'],
    keywords: [
      'electric cab wakad',
      'ev taxi wakad',
      'wakad to mumbai airport cab',
      'wakad airport taxi',
      'seasons mall wakad cab',
      'blue ridge wakad taxi',
      'wakad it park cab',
      'infosys wakad taxi',
      'wipro wakad cab service',
      'wakad corporate cab',
      'ev cab wakad to airport'
    ],
    popular: true,
    coverageAreas: [
      'Seasons Mall vicinity',
      'Blue Ridge society',
      'Megapolis residential complex',
      'Datta Mandir area',
      'Wakad Bridge area',
      'IT company campuses'
    ],
    specialFeatures: [
      'Corporate packages for Wakad IT companies',
      'Monthly billing and GST invoices',
      'Sustainability reports for CSR',
      'Familiar with all society gates and security protocols',
      'Silent vehicles perfect for early morning residential pickups'
    ]
  },
  {
    id: 'baner',
    slug: 'baner',
    name: 'Baner',
    displayName: 'Baner - Premium Residential & IT Hub',
    area: 'Pune West',
    coordinates: { lat: 18.5590, lng: 73.7814 },
    description: 'Premium electric cab service from Baner to Mumbai Airport at ₹3,700. Pickup from Baner Road, Pashan, all societies. Professional drivers, luxury 7-seater EVs, zero surge. Corporate packages 24/7.',
    longDescription: 'Premium electric cab service from Baner to Mumbai Airport, Pune Airport, and all destinations. Serving Baner Road, West Baner, Pashan Sus Road, and all Baner residential societies. Professional drivers, luxury 7-seater electric SUVs, transparent pricing. Perfect for IT professionals, families, and corporate travel.',
    highlights: [
      "Pune's upscale neighborhood with premium societies and thriving IT sector",
      'Complete coverage: Baner Road, West Baner, Pashan Sus Road',
      'Service to Kumar Park Infinia, Amanora Park Town, Pride Purple Park',
      'IT companies: Persistent Systems, Infosys, Synechron',
      'Closest to Mumbai-Pune Expressway for fastest Mumbai access'
    ],
    popularDestinations: {
      airportDistance: '145 km, 2.5-3 hours',
      puneAirportDistance: '12 km, 25-30 minutes',
      naviMumbaiAirportDistance: '130 km, 2.5 hours'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 700,
      naviMumbaiAirport: 3900,
      lonavala: 1800,
      mumbaiCity: 4500,
      shirdi: 5000
    },
    localityType: 'mixed',
    landmarks: [
      'Baner Road',
      'Kumar Park Infinia',
      'Amanora Park Town',
      'Pride Purple Park',
      'West Baner (Sus Road)',
      'Pashan Sus Road',
      'Persistent Systems',
      'Infosys Baner',
      'Synechron'
    ],
    itCompanies: [
      'Persistent Systems', 'Infosys', 'Synechron',
      'Various IT offices and startups'
    ],
    nearbyLocalities: ['balewadi', 'aundh', 'hinjewadi', 'wakad', 'kothrud'],
    relatedRoutes: ['baner-to-mumbai-airport'],
    keywords: [
      'electric cab baner',
      'ev taxi baner pune',
      'baner to mumbai airport cab',
      'baner airport taxi',
      'electric cab baner road',
      'baner pashan electric taxi',
      'persistent systems baner cab',
      'kumar park infinia taxi',
      'baner it park cab',
      'west baner electric cab',
      'ev cab baner to airport'
    ],
    popular: true,
    coverageAreas: [
      'Baner Road main area',
      'West Baner (Sus Road)',
      'Pashan Sus Road',
      'Kumar Park Infinia',
      'Amanora Park Town',
      'Pride Purple Park',
      'All Baner societies'
    ],
    specialFeatures: [
      'Expressway proximity - 5 minutes to highway entry',
      'Premium societies familiar to drivers',
      'Corporate packages for IT companies',
      'Eco-conscious service matching Baner values',
      'Silent electric perfect for upscale residential areas'
    ]
  },
  {
    id: 'ravet',
    slug: 'ravet',
    name: 'Ravet',
    displayName: 'Ravet - Growing Residential Hub',
    area: 'Pune North-West',
    coordinates: { lat: 18.6533, lng: 73.7427 },
    description: 'Electric cab service from Ravet to Mumbai Airport. Affordable, reliable service for Ravet residents and IT professionals. Book 24/7.',
    longDescription: 'Premium electric cab service from Ravet to Mumbai Airport, Pune Airport, and all destinations. Serving Ravet MIDC, residential complexes, and IT parks. Professional drivers, luxury 7-seater electric SUVs, transparent pricing.',
    highlights: [
      'Growing residential and industrial area',
      'Proximity to Hinjewadi IT Park',
      'MIDC and industrial area coverage',
      'Affordable rates for airport transfers',
      'Family-friendly 7-seater electric SUVs'
    ],
    popularDestinations: {
      airportDistance: '160 km, 3 hours',
      puneAirportDistance: '30 km, 50 minutes',
      naviMumbaiAirportDistance: '145 km, 2.5-3 hours'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 1000,
      naviMumbaiAirport: 4200,
      lonavala: 2500,
      shirdi: 5500
    },
    localityType: 'mixed',
    landmarks: [
      'Ravet MIDC',
      'Ravet residential societies',
      'Nearby Hinjewadi access',
      'Industrial estates'
    ],
    nearbyLocalities: ['wakad', 'hinjewadi', 'pimple-saudagar', 'nigdi'],
    relatedRoutes: [],
    keywords: [
      'electric cab ravet',
      'ravet to mumbai airport cab',
      'ravet airport taxi',
      'ravet electric taxi'
    ],
    popular: false,
    coverageAreas: [
      'Ravet MIDC',
      'Residential societies',
      'Industrial areas'
    ]
  },
  {
    id: 'pcmc',
    slug: 'pcmc',
    name: 'PCMC',
    displayName: 'Pimpri-Chinchwad Municipal Corporation',
    area: 'Pune North',
    coordinates: { lat: 18.6298, lng: 73.7997 },
    description: 'Premium electric cab service from PCMC (Pimpri-Chinchwad) to Mumbai Airport at ₹3,600. Coverage: Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari. Corporate packages for industrial & IT companies. Book 24/7.',
    longDescription: 'Premium electric cab service from PCMC (Pimpri-Chinchwad) covering all areas - Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari, and industrial belt. Mumbai Airport, Pune Airport, and all destinations. Professional drivers, luxury 7-seater EVs, corporate packages.',
    highlights: [
      "India's industrial powerhouse with 3,000+ manufacturing units",
      'Complete PCMC coverage: Pimpri, Chinchwad, Akurdi, Nigdi, Bhosari',
      'Service to Tata Technologies, Thermax, Forbes Marshall, Kinetic',
      'Strategic location for fastest expressway access via Wakad',
      '₹100 cheaper than similar distance Pune areas'
    ],
    popularDestinations: {
      airportDistance: '148 km, 2.5-3 hours',
      puneAirportDistance: '32 km, 50 minutes',
      naviMumbaiAirportDistance: '138 km, 2.5 hours'
    },
    pricing: {
      mumbaiAirport: 3600,
      puneAirport: 1200,
      naviMumbaiAirport: 4100,
      mumbaiCity: 4400,
      shirdi: 5400
    },
    localityType: 'industrial',
    landmarks: [
      'Pimpri Station',
      'Chinchwad Station',
      'Akurdi Station',
      'Nigdi',
      'Bhosari MIDC',
      'Tata Technologies',
      'Thermax Ltd',
      'Forbes Marshall',
      'Kinetic Engineering',
      'Atlas Copco',
      'Sandvik Asia'
    ],
    itCompanies: [
      'Tata Technologies', 'IT Parks PCMC'
    ],
    nearbyLocalities: ['nigdi', 'pimple-saudagar', 'wakad', 'ravet'],
    relatedRoutes: [],
    keywords: [
      'electric cab pcmc',
      'pimpri chinchwad to mumbai airport cab',
      'pcmc mumbai airport taxi',
      'pimpri to mumbai airport cab',
      'chinchwad to mumbai airport electric cab',
      'akurdi to mumbai airport cab',
      'nigdi to mumbai airport',
      'bhosari airport cab',
      'pcmc corporate cab service'
    ],
    popular: true,
    coverageAreas: [
      'Pimpri Station Area',
      'Chinchwad Station & Gaon',
      'Akurdi Station Area',
      'Nigdi residential',
      'Bhosari MIDC',
      'Industrial estates',
      'All MIDC units'
    ],
    specialFeatures: [
      'Industrial belt specialist',
      'Flexible timing for shift workers',
      'Corporate monthly packages',
      '10-15 minutes faster route via Wakad',
      'Location advantage - closest to expressway'
    ]
  },
  {
    id: 'nigdi',
    slug: 'nigdi',
    name: 'Nigdi',
    displayName: 'Nigdi - PCMC Residential Area',
    area: 'Pune North',
    coordinates: { lat: 18.6501, lng: 73.7674 },
    description: 'Electric cab from Nigdi to Mumbai Airport. Reliable service for Nigdi residents. Part of PCMC area coverage.',
    longDescription: 'Premium electric cab service from Nigdi to Mumbai Airport, Pune Airport, and all destinations. Part of comprehensive PCMC area coverage. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Part of PCMC industrial belt',
      'Residential and commercial area',
      'Good connectivity to Pune and Mumbai',
      'Industrial area access'
    ],
    popularDestinations: {
      airportDistance: '160 km, 3 hours',
      puneAirportDistance: '35 km, 55 minutes'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 1200,
      naviMumbaiAirport: 4200
    },
    localityType: 'mixed',
    landmarks: [
      'Nigdi residential areas',
      'Pradhikaran',
      'PCMC access'
    ],
    nearbyLocalities: ['pcmc', 'ravet', 'akurdi', 'pimple-saudagar'],
    relatedRoutes: [],
    keywords: [
      'electric cab nigdi',
      'nigdi to mumbai airport',
      'nigdi airport taxi'
    ],
    popular: false
  },
  {
    id: 'kothrud',
    slug: 'kothrud',
    name: 'Kothrud',
    displayName: 'Kothrud - Central Pune Residential',
    area: 'Pune Central-West',
    coordinates: { lat: 18.5074, lng: 73.8077 },
    description: 'Electric cab from Kothrud to Mumbai Airport. Central Pune location with excellent connectivity.',
    longDescription: 'Premium electric cab service from Kothrud to Mumbai Airport, Pune Airport, and all destinations. Central Pune residential area with excellent connectivity. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Established residential area in central Pune',
      'Educational institutions hub',
      'Good connectivity to all Pune areas',
      'Close to Mumbai-Pune highway'
    ],
    popularDestinations: {
      airportDistance: '140 km, 2.5-3 hours',
      puneAirportDistance: '10 km, 20-25 minutes'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 600,
      naviMumbaiAirport: 3900,
      lonavala: 1600
    },
    localityType: 'residential',
    landmarks: [
      'Kothrud Depot',
      'University area',
      'Karve Road'
    ],
    nearbyLocalities: ['baner', 'aundh', 'pimple-saudagar'],
    relatedRoutes: [],
    keywords: [
      'electric cab kothrud',
      'kothrud to mumbai airport',
      'kothrud airport taxi'
    ],
    popular: false
  },
  {
    id: 'pimple-saudagar',
    slug: 'pimple-saudagar',
    name: 'Pimple Saudagar',
    displayName: 'Pimple Saudagar - Residential & Commercial Hub',
    area: 'Pune North-West',
    coordinates: { lat: 18.6013, lng: 73.8007 },
    description: 'Electric cab from Pimple Saudagar to Mumbai Airport. Modern residential area with good connectivity.',
    longDescription: 'Premium electric cab service from Pimple Saudagar to Mumbai Airport, Pune Airport, and all destinations. Modern residential and commercial area. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Modern residential and commercial area',
      'Excellent connectivity',
      'Close to both Hinjewadi and Pune city',
      'Growing IT and business hub'
    ],
    popularDestinations: {
      airportDistance: '152 km, 2.5-3 hours',
      puneAirportDistance: '20 km, 35 minutes'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 900,
      naviMumbaiAirport: 4000
    },
    localityType: 'mixed',
    landmarks: [
      'Pimple Saudagar residential societies',
      'Commercial areas',
      'IT offices'
    ],
    nearbyLocalities: ['wakad', 'aundh', 'baner', 'pcmc'],
    relatedRoutes: [],
    keywords: [
      'electric cab pimple saudagar',
      'pimple saudagar to mumbai airport',
      'pimple saudagar airport taxi'
    ],
    popular: false
  },
  {
    id: 'hadapsar',
    slug: 'hadapsar',
    name: 'Hadapsar',
    displayName: 'Hadapsar - IT Park & Magarpatta',
    area: 'Pune East',
    coordinates: { lat: 18.5089, lng: 73.9260 },
    description: 'Electric cab from Hadapsar to Mumbai Airport. Service to Magarpatta City, IT parks, and residential areas.',
    longDescription: 'Premium electric cab service from Hadapsar to Mumbai Airport, Pune Airport, and all destinations. Serving Magarpatta City, IT parks, and residential areas. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Major IT hub with Magarpatta City',
      'Modern residential developments',
      'Excellent road connectivity',
      'Close to Pune Airport'
    ],
    popularDestinations: {
      airportDistance: '165 km, 3-3.5 hours',
      puneAirportDistance: '8 km, 15-20 minutes'
    },
    pricing: {
      mumbaiAirport: 3900,
      puneAirport: 500,
      naviMumbaiAirport: 4100
    },
    localityType: 'mixed',
    landmarks: [
      'Magarpatta City',
      'Hadapsar IT Park',
      'Phoenix Market City'
    ],
    itCompanies: [
      'Magarpatta IT companies',
      'Various tech startups'
    ],
    nearbyLocalities: ['viman-nagar', 'kharadi'],
    relatedRoutes: [],
    keywords: [
      'electric cab hadapsar',
      'hadapsar to mumbai airport',
      'magarpatta city cab'
    ],
    popular: false
  },
  {
    id: 'pimple-nilakh',
    slug: 'pimple-nilakh',
    name: 'Pimple Nilakh',
    displayName: 'Pimple Nilakh - IT Hub Near Hinjewadi',
    area: 'Pune West',
    coordinates: { lat: 18.5792, lng: 73.7974 },
    description: 'Electric cab from Pimple Nilakh to Mumbai Airport. Close to Hinjewadi IT Park.',
    longDescription: 'Premium electric cab service from Pimple Nilakh to Mumbai Airport, Pune Airport, and all destinations. Close proximity to Hinjewadi IT Park. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Strategic location near Hinjewadi',
      'Good connectivity to IT hubs',
      'Residential and commercial area'
    ],
    popularDestinations: {
      airportDistance: '150 km, 2.5-3 hours',
      puneAirportDistance: '20 km, 35 minutes'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 900,
      naviMumbaiAirport: 4000
    },
    localityType: 'mixed',
    landmarks: [
      'Near Hinjewadi IT Park',
      'Residential societies'
    ],
    nearbyLocalities: ['hinjewadi', 'baner', 'aundh'],
    relatedRoutes: [],
    keywords: [
      'electric cab pimple nilakh',
      'pimple nilakh to mumbai airport'
    ],
    popular: false
  },
  {
    id: 'viman-nagar',
    slug: 'viman-nagar',
    name: 'Viman Nagar',
    displayName: 'Viman Nagar - Near Pune Airport',
    area: 'Pune East',
    coordinates: { lat: 18.5679, lng: 73.9143 },
    description: 'Electric cab from Viman Nagar to Mumbai Airport. Closest locality to Pune Airport.',
    longDescription: 'Premium electric cab service from Viman Nagar to Mumbai Airport, Pune Airport, and all destinations. Closest locality to Pune Airport with excellent connectivity. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Closest residential area to Pune Airport',
      'Premium residential societies',
      'Excellent road connectivity',
      'IT offices and business centers'
    ],
    popularDestinations: {
      airportDistance: '170 km, 3-3.5 hours',
      puneAirportDistance: '3 km, 10 minutes'
    },
    pricing: {
      mumbaiAirport: 3900,
      puneAirport: 400,
      naviMumbaiAirport: 4100
    },
    localityType: 'mixed',
    landmarks: [
      'Phoenix Market City',
      'Viman Nagar residential societies',
      'IT offices'
    ],
    nearbyLocalities: ['hadapsar', 'kharadi'],
    relatedRoutes: [],
    keywords: [
      'electric cab viman nagar',
      'viman nagar to mumbai airport',
      'viman nagar airport taxi'
    ],
    popular: false
  },
  {
    id: 'aundh',
    slug: 'aundh',
    name: 'Aundh',
    displayName: 'Aundh - Premium Residential Area',
    area: 'Pune North',
    coordinates: { lat: 18.5593, lng: 73.8078 },
    description: 'Electric cab from Aundh to Mumbai Airport. Premium residential area with excellent connectivity.',
    longDescription: 'Premium electric cab service from Aundh to Mumbai Airport, Pune Airport, and all destinations. Upscale residential area with IT offices. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Premium residential locality',
      'IT offices and corporate centers',
      'Excellent connectivity to expressway',
      'Modern societies and infrastructure'
    ],
    popularDestinations: {
      airportDistance: '147 km, 2.5-3 hours',
      puneAirportDistance: '15 km, 30 minutes'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 800,
      naviMumbaiAirport: 3900,
      lonavala: 1900
    },
    localityType: 'mixed',
    landmarks: [
      'Aundh ITI Road',
      'Premium residential societies',
      'Corporate offices'
    ],
    nearbyLocalities: ['baner', 'balewadi', 'kothrud', 'pimple-saudagar'],
    relatedRoutes: ['aundh-to-mumbai-airport'],
    keywords: [
      'electric cab aundh',
      'aundh to mumbai airport',
      'aundh airport taxi'
    ],
    popular: false
  },
  {
    id: 'balewadi',
    slug: 'balewadi',
    name: 'Balewadi',
    displayName: 'Balewadi - Sports City & Residential',
    area: 'Pune West',
    coordinates: { lat: 18.5645, lng: 73.7684 },
    description: 'Electric cab from Balewadi to Mumbai Airport. Sports complex area with modern residential societies.',
    longDescription: 'Premium electric cab service from Balewadi to Mumbai Airport, Pune Airport, and all destinations. Home to Shiv Chhatrapati Sports Complex and modern residential areas. Professional drivers, luxury 7-seater electric SUVs.',
    highlights: [
      'Shiv Chhatrapati Sports Complex',
      'Modern residential societies',
      'Good connectivity to Baner and Hinjewadi',
      'Close to expressway'
    ],
    popularDestinations: {
      airportDistance: '143 km, 2.5-3 hours',
      puneAirportDistance: '13 km, 25 minutes'
    },
    pricing: {
      mumbaiAirport: 3700,
      puneAirport: 700,
      naviMumbaiAirport: 3900,
      lonavala: 1700
    },
    localityType: 'residential',
    landmarks: [
      'Shiv Chhatrapati Sports Complex',
      'Balewadi Stadium',
      'Residential societies'
    ],
    nearbyLocalities: ['baner', 'aundh', 'hinjewadi'],
    relatedRoutes: [],
    keywords: [
      'electric cab balewadi',
      'balewadi to mumbai airport',
      'balewadi sports complex cab'
    ],
    popular: false
  }
];

// Helper Functions

/**
 * Get locality by slug
 */
export function getLocalityBySlug(slug: string): Locality | undefined {
  return localities.find(locality => locality.slug === slug);
}

/**
 * Get locality by ID
 */
export function getLocalityById(id: string): Locality | undefined {
  return localities.find(locality => locality.id === id);
}

/**
 * Get nearby localities based on nearbyLocalities array
 */
export function getNearbyLocalities(localityId: string, limit: number = 5): Locality[] {
  const locality = getLocalityById(localityId);
  if (!locality) return [];

  return locality.nearbyLocalities
    .map(id => getLocalityById(id))
    .filter((loc): loc is Locality => loc !== undefined)
    .slice(0, limit);
}

/**
 * Get localities by type
 */
export function getLocalitiesByType(type: Locality['localityType']): Locality[] {
  return localities.filter(locality => locality.localityType === type);
}

/**
 * Get popular localities
 */
export function getPopularLocalities(): Locality[] {
  return localities.filter(locality => locality.popular);
}

/**
 * Get all locality slugs (for static path generation)
 */
export function getAllLocalitySlugs(): string[] {
  return localities.map(locality => locality.slug);
}

/**
 * Calculate distance between two coordinates using Haversine formula
 * Returns distance in kilometers
 */
export function calculateDistance(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number
): number {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return Math.round(distance * 10) / 10; // Round to 1 decimal
}

/**
 * Get nearby localities within a radius (km) using geographic distance
 */
export function getLocalitiesWithinRadius(
  localityId: string,
  radiusKm: number = 20
): Locality[] {
  const locality = getLocalityById(localityId);
  if (!locality) return [];

  return localities
    .filter(loc => loc.id !== localityId)
    .map(loc => ({
      locality: loc,
      distance: calculateDistance(
        locality.coordinates.lat,
        locality.coordinates.lng,
        loc.coordinates.lat,
        loc.coordinates.lng
      )
    }))
    .filter(item => item.distance <= radiusKm)
    .sort((a, b) => a.distance - b.distance)
    .map(item => item.locality);
}
