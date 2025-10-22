import type { Vehicle } from '@/data/vehicles';
import type { Route } from '@/data/routes';

const SITE_URL = 'https://greenevcabs.com';
const BUSINESS_NAME = 'GreenEVCabs';

// Local Business Schema
export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${SITE_URL}/#business`,
    name: BUSINESS_NAME,
    image: `${SITE_URL}/og-image.jpg`,
    url: SITE_URL,
    telephone: '+919876543210',
    email: 'info@greenevcabs.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 18.5204,
      longitude: 73.8567,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    sameAs: [
      'https://www.facebook.com/greenevcabs',
      'https://www.instagram.com/greenevcabs',
      'https://twitter.com/greenevcabs',
    ],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '156',
    },
    description:
      'Premium electric cab services in Maharashtra. Eco-friendly, comfortable, and reliable transportation with zero emissions.',
  };
}

// Vehicle Schema (Product + Vehicle)
export function generateVehicleSchema(vehicle: Vehicle) {
  return {
    '@context': 'https://schema.org',
    '@type': ['Product', 'Vehicle'],
    '@id': `${SITE_URL}/fleet/${vehicle.slug}#vehicle`,
    name: vehicle.name,
    description: vehicle.description,
    image: `${SITE_URL}${vehicle.image}`,
    url: `${SITE_URL}/fleet/${vehicle.slug}`,
    brand: {
      '@type': 'Brand',
      name: vehicle.name.split(' ')[0], // Extract brand name
    },
    vehicleEngine: {
      '@type': 'EngineSpecification',
      fuelType: 'Electric',
      enginePower: {
        '@type': 'QuantitativeValue',
        value: 'Electric Motor',
        unitText: 'kW',
      },
    },
    numberOfSeats: vehicle.seating,
    fuelType: 'Electric',
    vehicleTransmission: 'Automatic',
    offers: {
      '@type': 'Offer',
      price: vehicle.pricing.perKm,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'UnitPriceSpecification',
        price: vehicle.pricing.perKm,
        priceCurrency: 'INR',
        unitText: 'per kilometer',
      },
      seller: {
        '@type': 'Organization',
        name: BUSINESS_NAME,
      },
    },
    itemCondition: 'https://schema.org/NewCondition',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.8',
      reviewCount: '45',
    },
  };
}

// Route Schema (TouristTrip + Offer)
export function generateRouteSchema(route: Route) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${SITE_URL}/routes/${route.slug}#trip`,
    name: route.name,
    description: route.description,
    url: `${SITE_URL}/routes/${route.slug}`,
    touristType: 'Eco-conscious travelers, Families, Business travelers',
    itinerary: {
      '@type': 'ItemList',
      itemListElement: [
        {
          '@type': 'City',
          name: route.from,
        },
        {
          '@type': 'City',
          name: route.to,
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      price: route.pricing.kiaCarens,
      priceCurrency: 'INR',
      availability: 'https://schema.org/InStock',
      validFrom: new Date().toISOString(),
      priceValidUntil: new Date(Date.now() + 90 * 24 * 60 * 60 * 1000).toISOString(),
      seller: {
        '@type': 'Organization',
        name: BUSINESS_NAME,
      },
    },
    provider: {
      '@type': 'Organization',
      name: BUSINESS_NAME,
      url: SITE_URL,
    },
  };
}

// Organization Schema
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description:
      'Leading provider of electric cab services in Maharashtra, India. Offering sustainable, comfortable, and reliable transportation solutions.',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+919876543210',
      contactType: 'Customer Service',
      email: 'info@greenevcabs.com',
      availableLanguage: ['English', 'Hindi', 'Marathi'],
    },
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Pune',
      addressRegion: 'Maharashtra',
      addressCountry: 'IN',
    },
    sameAs: [
      'https://www.facebook.com/greenevcabs',
      'https://www.instagram.com/greenevcabs',
      'https://twitter.com/greenevcabs',
    ],
  };
}

// Website Schema
export function generateWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    description: 'Premium electric cab services for sustainable travel',
    publisher: {
      '@id': `${SITE_URL}/#organization`,
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

// Breadcrumb Schema
export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}

// FAQ Schema
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

// Service Schema
export function generateServiceSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/#service`,
    serviceType: 'Electric Cab Service',
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
    areaServed: {
      '@type': 'State',
      name: 'Maharashtra',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Electric Cab Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Airport Transfers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Outstation Travel',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Corporate Bookings',
          },
        },
      ],
    },
  };
}
