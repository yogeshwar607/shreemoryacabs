export interface Route {
  id: string;
  slug: string;
  name: string;
  from: string;
  to: string;
  distance: string;
  duration: string;
  description: string;
  highlights: string[];
  pricing: {
    kiaCarens: number;
    bydEmax7: number;
  };
  popular: boolean;
}

export const routes: Route[] = [
  {
    id: '1',
    slug: 'pune-mumbai',
    name: 'Pune to Mumbai',
    from: 'Pune',
    to: 'Mumbai',
    distance: '148 km',
    duration: '3-3.5 hours',
    description: 'Premium electric cab service from Pune to Mumbai at the best rate. Professional drivers, luxury 7-seater SUVs (Kia Carens EV & BYD E-MAX 7), and excellent service starting at just ₹3,700. Enjoy comfortable, zero-emission travel on the Mumbai-Pune Expressway with premium amenities at unbeatable prices. Perfect for business travelers and families.',
    highlights: [
      'Best rate ₹3,700 - cheaper than competitors',
      'Professional, experienced drivers',
      'Premium 7-seater electric SUVs',
      'Comfortable door-to-door service',
      'Climate control and spacious interiors',
      'All tolls included - no hidden charges'
    ],
    pricing: {
      kiaCarens: 3700,
      bydEmax7: 4200
    },
    popular: true
  },
  {
    id: '2',
    slug: 'pune-to-mumbai-airport',
    name: 'Pune to Mumbai Airport',
    from: 'Pune',
    to: 'Mumbai Airport (BOM)',
    distance: '148 km',
    duration: '2.5-3 hours',
    description: 'Premium airport transfer from Pune to Mumbai Airport at the best price ₹3,700. Professional drivers, luxury electric SUVs, flight tracking included. Terminal 1 & Terminal 2 drop service with excellent customer care. All tolls included, zero hidden charges. Best value for business travelers and families.',
    highlights: [
      'Best price ₹3,700 - fixed rate, no surge',
      'Professional drivers with excellent service',
      'Complimentary flight tracking included',
      'Terminal 1 & Terminal 2 drop service',
      'Early morning pickups (3 AM, 4 AM)',
      'Spacious luggage capacity - 4-5 suitcases'
    ],
    pricing: {
      kiaCarens: 3700,
      bydEmax7: 4200
    },
    popular: true
  },
  {
    id: '3',
    slug: 'mumbai-airport-to-pune',
    name: 'Mumbai Airport to Pune',
    from: 'Mumbai Airport (BOM)',
    to: 'Pune',
    distance: '148 km',
    duration: '2.5-3 hours',
    description: 'Best-priced premium pickup from Mumbai Airport to Pune at just ₹3,700. Professional drivers with meet & greet service, name board, and flight tracking included. Comfortable journey in luxury electric SUVs. Zero waiting charges for delays. Excellent service at the most competitive rate.',
    highlights: [
      'Best price ₹3,700 with all services included',
      'Meet & greet with name board at arrivals',
      'Free flight tracking - zero delay charges',
      'Terminal 1 & 2 pickup service',
      'Drop anywhere in Pune at no extra cost',
      'Professional drivers - 24/7 available'
    ],
    pricing: {
      kiaCarens: 3700,
      bydEmax7: 4200
    },
    popular: true
  },
  {
    id: '4',
    slug: 'hinjewadi-to-mumbai-airport',
    name: 'Hinjewadi to Mumbai Airport',
    from: 'Hinjewadi',
    to: 'Mumbai Airport (BOM)',
    distance: '155 km',
    duration: '3-3.5 hours',
    description: 'Electric cab from Hinjewadi IT Parks (Phase 1, 2, 3) to Mumbai Airport. Corporate packages available with GST invoice. Perfect for IT professionals with zero surge pricing and 24/7 service. Pickup from all major IT parks - Wipro, TCS, Infosys, Cognizant.',
    highlights: [
      'Pickup from Phase 1, 2, 3 IT parks',
      'Corporate GST invoice',
      'Monthly packages for frequent travelers',
      'Zero surge pricing',
      'Early morning availability',
      'Professional service'
    ],
    pricing: {
      kiaCarens: 3700,
      bydEmax7: 4200
    },
    popular: true
  },
  {
    id: '5',
    slug: 'mumbai-pune',
    name: 'Mumbai to Pune',
    from: 'Mumbai',
    to: 'Pune',
    distance: '148 km',
    duration: '3-3.5 hours',
    description: 'Electric cab service from Mumbai to Pune via Mumbai-Pune Expressway. Enjoy eco-friendly, comfortable travel in our premium EV fleet with zero emissions, spacious seating, and luggage capacity. Ideal for Mumbai airport transfers, business trips, and family travel. Book 24/7 with instant confirmation. Professional drivers, competitive rates, and sustainable transportation for conscious travelers.',
    highlights: [
      'Fast track via Expressway',
      'Airport pickup available',
      'Spacious luggage capacity',
      'Professional drivers',
      'Real-time tracking',
      'Multiple stops allowed'
    ],
    pricing: {
      kiaCarens: 3700,
      bydEmax7: 4200
    },
    popular: true
  },
  {
    id: '6',
    slug: 'pune-shirdi',
    name: 'Pune to Shirdi',
    from: 'Pune',
    to: 'Shirdi',
    distance: '185 km',
    duration: '4-4.5 hours',
    description: 'Book electric cab for Pune to Shirdi pilgrimage trip. Experience spiritual journey in our eco-friendly electric vehicles with zero emissions, comfortable 7-seater capacity, and professional drivers familiar with temple routes. Perfect for family darshan trips with ample luggage space for prasad. Sustainable travel to Sai Baba temple with flexible timing, competitive pricing starting ₹2,999. Make your holy journey environmentally conscious.',
    highlights: [
      'Direct route to Shirdi',
      'Comfortable for pilgrimage',
      'Zero emission spiritual journey',
      'Flexible darshan timings',
      'Experienced drivers',
      'Clean and sanitized vehicles'
    ],
    pricing: {
      kiaCarens: 2999,
      bydEmax7: 6400
    },
    popular: true
  },
  {
    id: '7',
    slug: 'pune-lonavala',
    name: 'Pune to Lonavala',
    from: 'Pune',
    to: 'Lonavala',
    distance: '64 km',
    duration: '1.5-2 hours',
    description: 'Electric cab for Pune to Lonavala hill station getaway. Enjoy scenic Western Ghats drive in premium electric vehicles. Perfect for weekend trips, monsoon tourism, and family outings to Bhushi Dam, Khandala, and Tiger Point. Eco-friendly travel with photography stops, zero emissions, and comfortable seating. Book our electric cabs for sustainable hill station tourism starting ₹2,999.',
    highlights: [
      'Scenic mountain drive',
      'Perfect for weekend getaways',
      'Monsoon special trips',
      'Visit Khandala, Bhushi Dam',
      'Photography stops allowed',
      'Local sightseeing options'
    ],
    pricing: {
      kiaCarens: 2999,
      bydEmax7: 3200
    },
    popular: false
  },
  {
    id: '8',
    slug: 'pune-nashik',
    name: 'Pune to Nashik',
    from: 'Pune',
    to: 'Nashik',
    distance: '210 km',
    duration: '4-5 hours',
    description: 'Premium electric cab service from Pune to Nashik, India\'s wine capital. Explore Sula Vineyards, Trimbakeshwar Temple, and scenic vineyards in zero-emission electric vehicles. Perfect for wine tours, temple visits, and weekend getaways. Comfortable 7-seater EVs with professional drivers, flexible itineraries, and sustainable tourism. Book eco-friendly Pune-Nashik cab service starting ₹2,999.',
    highlights: [
      'Wine tour packages',
      'Temple visits',
      'Comfortable long-distance travel',
      'Sula Vineyards visits',
      'Trimbakeshwar Temple',
      'Multiple stop options'
    ],
    pricing: {
      kiaCarens: 2999,
      bydEmax7: 7200
    },
    popular: false
  },
  {
    id: '9',
    slug: 'pune-mahabaleshwar',
    name: 'Pune to Mahabaleshwar',
    from: 'Pune',
    to: 'Mahabaleshwar',
    distance: '120 km',
    duration: '3-3.5 hours',
    description: 'Book electric cab for Pune to Mahabaleshwar hill station trip. Experience eco-friendly travel to strawberry farms, scenic viewpoints (Wilson Point, Arthur\'s Seat), and Venna Lake. Perfect for weekend getaways and family vacations. Our premium electric vehicles offer comfortable, zero-emission travel through Panchgani. Sustainable tourism with professional drivers, flexible stops, starting ₹2,999.',
    highlights: [
      'Hill station experience',
      'Strawberry farm visits',
      'Scenic viewpoints',
      'Pleasant climate year-round',
      'Photography stops',
      'Panchgani en route'
    ],
    pricing: {
      kiaCarens: 2999,
      bydEmax7: 4900
    },
    popular: true
  },
  {
    id: '10',
    slug: 'pune-to-navi-mumbai-airport',
    name: 'Pune to Navi Mumbai Airport',
    from: 'Pune',
    to: 'Navi Mumbai Airport (NMI)',
    distance: '120 km',
    duration: '2-2.5 hours',
    description: 'Premium electric cab service from Pune to Navi Mumbai International Airport (NMI). Zero surge pricing, 24/7 availability, all tolls included. Perfect for business travelers and families. New world-class airport with modern facilities. Book eco-friendly airport transfer starting ₹3,700.',
    highlights: [
      'Zero surge pricing - ₹3,700 fixed rate 24/7',
      'New world-class airport facility',
      'All tolls & parking included',
      'Early morning pickups (3 AM, 4 AM)',
      'Corporate GST invoice available',
      'Luggage capacity: 4-5 large suitcases'
    ],
    pricing: {
      kiaCarens: 3700,
      bydEmax7: 4200
    },
    popular: true
  },
  {
    id: '11',
    slug: 'navi-mumbai-airport-to-pune',
    name: 'Navi Mumbai Airport to Pune',
    from: 'Navi Mumbai Airport (NMI)',
    to: 'Pune',
    distance: '120 km',
    duration: '2-2.5 hours',
    description: 'Reliable electric cab pickup from Navi Mumbai International Airport to Pune. Real-time flight tracking, meet & greet with name board, zero waiting charges for delays. Available 24/7. Professional airport pickup service starting ₹3,700.',
    highlights: [
      'Flight tracking - automatic delay adjustments',
      'Meet & greet with name board',
      'Zero waiting charges for flight delays',
      'New airport pickup service',
      'Drop anywhere in Pune',
      'Late night pickups available'
    ],
    pricing: {
      kiaCarens: 3700,
      bydEmax7: 4200
    },
    popular: true
  }
];

export function getRouteBySlug(slug: string): Route | undefined {
  return routes.find(r => r.slug === slug);
}

export function getPopularRoutes(): Route[] {
  return routes.filter(r => r.popular);
}
