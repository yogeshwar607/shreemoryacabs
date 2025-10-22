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
  }
];

export function getVehicleBySlug(slug: string): Vehicle | undefined {
  return vehicles.find(v => v.slug === slug);
}
