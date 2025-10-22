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
    description: 'Book premium electric cab service from Pune to Mumbai on the scenic Mumbai-Pune Expressway. Our eco-friendly electric vehicles (Kia Carens EV & BYD E-MAX 7) offer comfortable, zero-emission travel with professional drivers, 24/7 service, and competitive pricing. Perfect for business travelers, families, and airport transfers. Experience sustainable transportation without compromising on comfort or reliability.',
    highlights: [
      'Mumbai-Pune Expressway - smooth, fast highway',
      'Scenic mountain views',
      'Multiple charging stations en route',
      'Door-to-door pickup and drop',
      'Airport transfers available',
      'Flexible departure times'
    ],
    pricing: {
      kiaCarens: 4500,
      bydEmax7: 5200
    },
    popular: true
  },
  {
    id: '2',
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
      kiaCarens: 4500,
      bydEmax7: 5200
    },
    popular: true
  },
  {
    id: '3',
    slug: 'pune-shirdi',
    name: 'Pune to Shirdi',
    from: 'Pune',
    to: 'Shirdi',
    distance: '185 km',
    duration: '4-4.5 hours',
    description: 'Book electric cab for Pune to Shirdi pilgrimage trip. Experience spiritual journey in our eco-friendly electric vehicles with zero emissions, comfortable 7-seater capacity, and professional drivers familiar with temple routes. Perfect for family darshan trips with ample luggage space for prasad. Sustainable travel to Sai Baba temple with flexible timing, competitive pricing starting ₹5,500. Make your holy journey environmentally conscious.',
    highlights: [
      'Direct route to Shirdi',
      'Comfortable for pilgrimage',
      'Zero emission spiritual journey',
      'Flexible darshan timings',
      'Experienced drivers',
      'Clean and sanitized vehicles'
    ],
    pricing: {
      kiaCarens: 5500,
      bydEmax7: 6400
    },
    popular: true
  },
  {
    id: '4',
    slug: 'pune-lonavala',
    name: 'Pune to Lonavala',
    from: 'Pune',
    to: 'Lonavala',
    distance: '64 km',
    duration: '1.5-2 hours',
    description: 'Electric cab for Pune to Lonavala hill station getaway. Enjoy scenic Western Ghats drive in premium electric vehicles. Perfect for weekend trips, monsoon tourism, and family outings to Bhushi Dam, Khandala, and Tiger Point. Eco-friendly travel with photography stops, zero emissions, and comfortable seating. Book our electric cabs for sustainable hill station tourism starting ₹2,800.',
    highlights: [
      'Scenic mountain drive',
      'Perfect for weekend getaways',
      'Monsoon special trips',
      'Visit Khandala, Bhushi Dam',
      'Photography stops allowed',
      'Local sightseeing options'
    ],
    pricing: {
      kiaCarens: 2800,
      bydEmax7: 3200
    },
    popular: false
  },
  {
    id: '5',
    slug: 'pune-nashik',
    name: 'Pune to Nashik',
    from: 'Pune',
    to: 'Nashik',
    distance: '210 km',
    duration: '4-5 hours',
    description: 'Premium electric cab service from Pune to Nashik, India\'s wine capital. Explore Sula Vineyards, Trimbakeshwar Temple, and scenic vineyards in zero-emission electric vehicles. Perfect for wine tours, temple visits, and weekend getaways. Comfortable 7-seater EVs with professional drivers, flexible itineraries, and sustainable tourism. Book eco-friendly Pune-Nashik cab service starting ₹6,200.',
    highlights: [
      'Wine tour packages',
      'Temple visits',
      'Comfortable long-distance travel',
      'Sula Vineyards visits',
      'Trimbakeshwar Temple',
      'Multiple stop options'
    ],
    pricing: {
      kiaCarens: 6200,
      bydEmax7: 7200
    },
    popular: false
  },
  {
    id: '6',
    slug: 'pune-mahabaleshwar',
    name: 'Pune to Mahabaleshwar',
    from: 'Pune',
    to: 'Mahabaleshwar',
    distance: '120 km',
    duration: '3-3.5 hours',
    description: 'Book electric cab for Pune to Mahabaleshwar hill station trip. Experience eco-friendly travel to strawberry farms, scenic viewpoints (Wilson Point, Arthur\'s Seat), and Venna Lake. Perfect for weekend getaways and family vacations. Our premium electric vehicles offer comfortable, zero-emission travel through Panchgani. Sustainable tourism with professional drivers, flexible stops, starting ₹4,200.',
    highlights: [
      'Hill station experience',
      'Strawberry farm visits',
      'Scenic viewpoints',
      'Pleasant climate year-round',
      'Photography stops',
      'Panchgani en route'
    ],
    pricing: {
      kiaCarens: 4200,
      bydEmax7: 4900
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
