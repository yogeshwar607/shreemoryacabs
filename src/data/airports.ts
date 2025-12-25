/**
 * Airports Data - Central source of truth for all airport information
 * Used across route pages, locality pages, and blog content
 *
 * This file centralizes airport metadata for dynamic content generation
 */

export interface Airport {
  id: string;
  slug: string;
  name: string;
  shortName: string;
  iataCode: string;

  coordinates: {
    lat: number;
    lng: number;
  };

  terminals: Array<{
    number: number;
    name: string;
    domestic: boolean;
    international: boolean;
    description?: string;
  }>;

  description: string;
  longDescription: string;

  facilities: string[];
  fromPuneDistance: string;
  fromPuneDuration: string;

  keywords: string[];
  popular: boolean;

  routes?: {
    primaryRoute: string;
    alternateRoute?: string;
  };
}

export const airports: Airport[] = [
  {
    id: 'mumbai-airport',
    slug: 'mumbai-airport',
    name: 'Chhatrapati Shivaji Maharaj International Airport',
    shortName: 'Mumbai Airport',
    iataCode: 'BOM',
    coordinates: { lat: 19.0896, lng: 72.8656 },
    terminals: [
      {
        number: 1,
        name: 'Terminal 1',
        domestic: true,
        international: false,
        description: 'Domestic terminal serving budget airlines and regional flights'
      },
      {
        number: 2,
        name: 'Terminal 2',
        domestic: true,
        international: true,
        description: 'Main terminal serving domestic and international flights, full-service carriers'
      }
    ],
    description: "India's second-busiest airport serving Mumbai. Two terminals handling domestic and international flights.",
    longDescription: 'Chhatrapati Shivaji Maharaj International Airport (BOM) is the primary international airport serving Mumbai and the Mumbai Metropolitan Region. The airport is the second busiest in India by passenger traffic and handles both domestic and international flights across two modern terminals.',
    facilities: [
      'Duty-free shopping',
      'Restaurants and cafes',
      'Lounges (domestic and international)',
      'Currency exchange',
      'ATMs and banking',
      'Free Wi-Fi',
      'Smoking zones',
      'Prayer rooms',
      'Medical facilities',
      'Baggage wrapping',
      'Left luggage service',
      'Airport hotels'
    ],
    fromPuneDistance: '150 km',
    fromPuneDuration: '2.5-3 hours',
    keywords: [
      'mumbai airport',
      'bom airport',
      'chhatrapati shivaji airport',
      'mumbai international airport',
      'pune to mumbai airport',
      'mumbai airport terminal 1',
      'mumbai airport terminal 2'
    ],
    popular: true,
    routes: {
      primaryRoute: 'Via Mumbai-Pune Expressway',
      alternateRoute: 'Via Pune-Mumbai Highway (NH 48)'
    }
  },
  {
    id: 'navi-mumbai-airport',
    slug: 'navi-mumbai-airport',
    name: 'Navi Mumbai International Airport',
    shortName: 'Navi Mumbai Airport',
    iataCode: 'NMI',
    coordinates: { lat: 19.0965, lng: 73.0210 },
    terminals: [
      {
        number: 1,
        name: 'Terminal 1',
        domestic: true,
        international: true,
        description: 'Main terminal serving all domestic and international operations'
      }
    ],
    description: "New airport serving Navi Mumbai and Mumbai region. Modern terminal with domestic and international connectivity.",
    longDescription: "Navi Mumbai International Airport is the newest international airport serving the Mumbai Metropolitan Region. Located in Navi Mumbai's Ulwe area, the airport features modern infrastructure and facilities. The airport provides an alternative to Mumbai's crowded Chhatrapati Shivaji airport with faster connectivity to Pune via the Mumbai-Pune Expressway.",
    facilities: [
      'Modern terminal building',
      'Duty-free shopping',
      'Restaurants and cafes',
      'Airport lounges',
      'Currency exchange',
      'ATMs',
      'Free Wi-Fi',
      'Prayer rooms',
      'Medical facilities',
      'Car rental services',
      'Taxi services'
    ],
    fromPuneDistance: '140 km',
    fromPuneDuration: '2.5 hours',
    keywords: [
      'navi mumbai airport',
      'nmi airport',
      'new mumbai airport',
      'pune to navi mumbai airport',
      'navi mumbai international airport'
    ],
    popular: true,
    routes: {
      primaryRoute: 'Via Mumbai-Pune Expressway to Navi Mumbai'
    }
  },
  {
    id: 'pune-airport',
    slug: 'pune-airport',
    name: 'Pune International Airport',
    shortName: 'Pune Airport',
    iataCode: 'PNQ',
    coordinates: { lat: 18.5821, lng: 73.9197 },
    terminals: [
      {
        number: 1,
        name: 'Main Terminal',
        domestic: true,
        international: true,
        description: 'Single integrated terminal handling all domestic and select international flights'
      }
    ],
    description: 'Pune Airport serves the Pune Metropolitan Region with domestic and international flights. Modern facilities, close to city center.',
    longDescription: "Pune International Airport (Lohegaon Airport) is an international airport serving Pune and its metropolitan area. Located in Lohegaon, the airport features a modern terminal building handling both domestic and international flights. The airport serves as a key aviation hub for Western Maharashtra with excellent connectivity to major Indian cities and select international destinations.",
    facilities: [
      'Duty-free shops',
      'Restaurants and food courts',
      'Lounges',
      'Currency exchange',
      'ATMs',
      'Free Wi-Fi',
      'Parking facilities',
      'Car rental desks',
      'Taxi services',
      'Prayer room',
      'Medical room',
      'Baggage wrapping'
    ],
    fromPuneDistance: '10-35 km (depending on Pune locality)',
    fromPuneDuration: '20-50 minutes',
    keywords: [
      'pune airport',
      'pnq airport',
      'lohegaon airport',
      'pune international airport',
      'pune domestic airport'
    ],
    popular: true,
    routes: {
      primaryRoute: 'Direct access via Airport Road'
    }
  }
];

// Helper Functions

/**
 * Get airport by slug
 */
export function getAirportBySlug(slug: string): Airport | undefined {
  return airports.find(airport => airport.slug === slug);
}

/**
 * Get airport by ID
 */
export function getAirportById(id: string): Airport | undefined {
  return airports.find(airport => airport.id === id);
}

/**
 * Get airport by IATA code
 */
export function getAirportByIATACode(code: string): Airport | undefined {
  return airports.find(airport => airport.iataCode === code);
}

/**
 * Get all popular airports
 */
export function getPopularAirports(): Airport[] {
  return airports.filter(airport => airport.popular);
}

/**
 * Get all airport slugs (for static path generation)
 */
export function getAllAirportSlugs(): string[] {
  return airports.map(airport => airport.slug);
}

/**
 * Get terminals for a specific airport
 */
export function getAirportTerminals(airportId: string): Airport['terminals'] {
  const airport = getAirportById(airportId);
  return airport?.terminals || [];
}

/**
 * Check if airport has international flights
 */
export function hasInternationalFlights(airportId: string): boolean {
  const airport = getAirportById(airportId);
  if (!airport) return false;
  return airport.terminals.some(terminal => terminal.international);
}

/**
 * Get airport terminal info by terminal number
 */
export function getTerminalInfo(airportId: string, terminalNumber: number) {
  const airport = getAirportById(airportId);
  if (!airport) return undefined;
  return airport.terminals.find(t => t.number === terminalNumber);
}
