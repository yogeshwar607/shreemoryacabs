export interface Vehicle {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  image: string;
  seating: number;
  range: string;
  features: string[];
  pricing: {
    perKm: number;
    minimumKm: number;
    fullDay: number;
  };
  specifications: {
    battery: string;
    charging: string;
    topSpeed: string;
    acceleration: string;
  };
}

export const vehicles: Vehicle[] = [
  {
    id: '1',
    slug: 'kia-carens-ev',
    name: 'Kia Carens EV',
    tagline: 'Spacious Comfort for Family & Group Travel',
    description: 'Book Kia Carens EV electric cab for premium, eco-friendly travel in Maharashtra. This spacious 7-seater electric vehicle features 400+ km range, advanced ADAS Level 2 safety, panoramic sunroof, and climate control. Perfect for family trips, corporate travel, and outstation journeys. Zero-emission travel without compromising comfort. Starting at ₹18/km. Experience sustainable mobility with Kia\'s cutting-edge electric MPV technology.',
    image: '/images/vehicles/kia-carens-ev.jpg',
    seating: 7,
    range: '400+ km',
    features: [
      'Seating for 6-7 passengers',
      'Spacious cabin with premium interiors',
      'Advanced safety features',
      'Climate control',
      'Ample luggage space',
      'USB charging ports',
      'Panoramic sunroof',
      'ADAS Level 2'
    ],
    pricing: {
      perKm: 18,
      minimumKm: 250,
      fullDay: 5500
    },
    specifications: {
      battery: '64.8 kWh',
      charging: '10-80% in 45 mins (DC Fast)',
      topSpeed: '165 km/h',
      acceleration: '0-100 km/h in 9.5s'
    }
  },
  {
    id: '2',
    slug: 'byd-emax-7',
    name: 'BYD E-MAX 7',
    tagline: 'Premium Electric MPV Experience',
    description: 'BYD E-MAX 7 - Premium luxury electric cab with extended 530+ km range. Features leather interiors, ventilated seats, dual-zone climate control, 360° camera, and wireless charging. Perfect for long-distance outstation trips, corporate executives, and luxury travel across Maharashtra. This advanced electric MPV combines superior comfort with zero emissions. Starting at ₹22/km. Experience world-class electric vehicle technology with BYD E-MAX 7.',
    image: '/images/vehicles/byd-emax-7.jpg',
    seating: 7,
    range: '530+ km',
    features: [
      'Extended range of 530+ km',
      'Luxury interiors with leather seats',
      'Advanced driver assistance systems',
      'Wireless charging',
      'Premium sound system',
      'Dual-zone climate control',
      '360-degree camera',
      'Ventilated seats'
    ],
    pricing: {
      perKm: 22,
      minimumKm: 250,
      fullDay: 6500
    },
    specifications: {
      battery: '71.8 kWh',
      charging: '10-80% in 40 mins (DC Fast)',
      topSpeed: '175 km/h',
      acceleration: '0-100 km/h in 8.5s'
    }
  },
  {
    id: '3',
    slug: 'citroen-ec3',
    name: 'Citroen eC3',
    tagline: 'Affordable & Efficient City Electric',
    description: 'Citroen eC3 - Compact and efficient electric hatchback perfect for city rides and short trips. Features 320 km ARAI range, 10.2-inch touchscreen with wireless Apple CarPlay/Android Auto, and modern LED lighting. Ideal for daily commutes, airport pickups, and local travel in Pune and Mumbai. Zero-emission mobility at affordable rates. Starting at ₹14/km. Experience smart electric travel with India\'s popular electric hatchback.',
    image: '/images/vehicles/citroen-ec3.jpg',
    seating: 5,
    range: '320 km',
    features: [
      'Seating for 5 passengers',
      '10.2-inch touchscreen infotainment',
      'Wireless Apple CarPlay & Android Auto',
      'LED DRLs and split headlamps',
      'Height-adjustable driver seat',
      'Compact & efficient design',
      '7-year battery warranty',
      'Fast DC charging capability'
    ],
    pricing: {
      perKm: 14,
      minimumKm: 150,
      fullDay: 3500
    },
    specifications: {
      battery: '29 kWh',
      charging: '0-100% in 57 mins (DC Fast)',
      topSpeed: '107 km/h',
      acceleration: '0-60 km/h in 6.8s'
    }
  },
  {
    id: '4',
    slug: 'mg-zs-ev',
    name: 'MG ZS EV',
    tagline: 'Premium Electric SUV Comfort',
    description: 'MG ZS EV - Premium electric SUV with impressive 461 km ARAI range and cutting-edge technology. Features ADAS Level 2, panoramic sunroof, 75+ connected car features, and 6 airbags for maximum safety. Perfect for long-distance travel, business trips, and luxury airport transfers across Maharashtra. Combines SUV comfort with zero emissions. Starting at ₹19/km. Experience India\'s best-selling electric SUV technology.',
    image: '/images/vehicles/mg-zs-ev.jpg',
    seating: 5,
    range: '461 km',
    features: [
      'ARAI range of 461 km',
      'ADAS Level 2 safety features',
      'Panoramic sunroof',
      '75+ connected car features',
      '6 airbags for safety',
      'Powerful 175 bhp motor',
      '50 kW fast charging',
      'Premium SUV comfort'
    ],
    pricing: {
      perKm: 19,
      minimumKm: 200,
      fullDay: 5000
    },
    specifications: {
      battery: '50.3 kWh',
      charging: '0-80% in 60 mins (50 kW DC Fast)',
      topSpeed: '140 km/h',
      acceleration: '0-100 km/h in 8.5s'
    }
  }
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find(v => v.slug === slug);
}
