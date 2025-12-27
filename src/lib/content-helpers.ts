/**
 * Content Helpers - Smart internal linking and content discovery
 * Core intelligence powering programmatic SEO and auto-linking
 *
 * This file provides functions to:
 * - Discover related content based on geographic proximity and data relationships
 * - Generate dynamic FAQs
 * - Calculate routes and distances
 * - Power the RelatedLinks component across all pages
 */

import {
  localities,
  getLocalityBySlug,
  getLocalityById,
  getNearbyLocalities as getGeoNearbyLocalities,
  calculateDistance,
  type Locality
} from '@/data/localities';

import { routes, getRouteBySlug, type Route } from '@/data/routes';

import { airports, getAirportBySlug, type Airport } from '@/data/airports';

// Re-export for convenience
export { calculateDistance } from '@/data/localities';

/**
 * Interface for FAQ items
 */
export interface FAQ {
  question: string;
  answer: string;
}

/**
 * Interface for related content results
 */
export interface RelatedContent {
  routes: Route[];
  localities: Locality[];
  airports?: Airport[];
}

/**
 * Get routes related to a specific locality
 * Looks for routes that start from, end at, or mention the locality
 */
export function getRoutesForLocality(localitySlug: string): Route[] {
  const locality = getLocalityBySlug(localitySlug);
  if (!locality) return [];

  // Check locality's relatedRoutes array first
  if (locality.relatedRoutes && locality.relatedRoutes.length > 0) {
    const related = locality.relatedRoutes
      .map(slug => getRouteBySlug(slug))
      .filter((r): r is Route => r !== undefined);
    if (related.length > 0) return related;
  }

  // Otherwise, search routes that mention the locality name
  const localityName = locality.name.toLowerCase();
  return routes.filter(route => {
    const from = route.from.toLowerCase();
    const to = route.to.toLowerCase();
    const name = route.name.toLowerCase();
    return (
      from.includes(localityName) ||
      to.includes(localityName) ||
      name.includes(localityName)
    );
  }).slice(0, 6); // Limit to 6 routes
}

/**
 * Get localities related to a specific route
 * Looks for localities mentioned in route or geographically close to route endpoints
 */
export function getLocalitiesForRoute(routeSlug: string): Locality[] {
  const route = getRouteBySlug(routeSlug);
  if (!route) return [];

  const from = route.from.toLowerCase();
  const to = route.to.toLowerCase();

  // Find localities that match the 'from' location
  const matchingLocalities = localities.filter(loc => {
    const name = loc.name.toLowerCase();
    return from.includes(name) || name.includes(from.split(' ')[0]);
  });

  if (matchingLocalities.length > 0) {
    // Get nearby localities for the matching locality
    const nearby = getGeoNearbyLocalities(matchingLocalities[0].id, 5);
    return nearby.slice(0, 6);
  }

  // Fallback: return popular localities
  return localities.filter(loc => loc.popular).slice(0, 6);
}

/**
 * Get related content for any page type
 * This is the CORE function that powers the RelatedLinks component
 */
export function getRelatedContent(params: {
  type: 'route' | 'locality' | 'blog';
  slug: string;
  limit?: number;
}): RelatedContent {
  const { type, slug, limit = 3 } = params;

  if (type === 'locality') {
    return getRelatedContentForLocality(slug, limit);
  } else if (type === 'route') {
    return getRelatedContentForRoute(slug, limit);
  } else if (type === 'blog') {
    return getRelatedContentForBlog(slug, limit);
  }

  // Default fallback
  return {
    routes: routes.filter(r => r.popular).slice(0, limit),
    localities: localities.filter(l => l.popular).slice(0, limit)
  };
}

/**
 * Get related content for a locality page
 */
function getRelatedContentForLocality(localitySlug: string, limit: number): RelatedContent {
  const locality = getLocalityBySlug(localitySlug);
  if (!locality) {
    return { routes: [], localities: [] };
  }

  // Get related routes
  const relatedRoutes = getRoutesForLocality(localitySlug).slice(0, limit);

  // Get nearby localities
  const nearbyLocalities = getGeoNearbyLocalities(locality.id, limit);

  // Get airports (always include Mumbai Airport + Pune Airport for most localities)
  const relatedAirports = [
    getAirportBySlug('mumbai-airport'),
    getAirportBySlug('pune-airport')
  ].filter((a): a is Airport => a !== undefined);

  return {
    routes: relatedRoutes,
    localities: nearbyLocalities,
    airports: relatedAirports
  };
}

/**
 * Get related content for a route page
 */
function getRelatedContentForRoute(routeSlug: string, limit: number): RelatedContent {
  const route = getRouteBySlug(routeSlug);
  if (!route) {
    return { routes: [], localities: [] };
  }

  // Get related routes (similar destinations or popular routes)
  const similarRoutes = routes
    .filter(r => r.id !== route.id) // Exclude current route
    .filter(r => {
      // Same destination or same origin
      return r.to === route.to || r.from === route.from;
    })
    .slice(0, limit);

  // If not enough similar routes, add popular routes
  if (similarRoutes.length < limit) {
    const popularRoutes = routes
      .filter(r => r.popular && r.id !== route.id)
      .filter(r => !similarRoutes.includes(r))
      .slice(0, limit - similarRoutes.length);
    similarRoutes.push(...popularRoutes);
  }

  // Get localities related to this route
  const relatedLocalities = getLocalitiesForRoute(routeSlug).slice(0, limit);

  return {
    routes: similarRoutes,
    localities: relatedLocalities
  };
}

/**
 * Get related content for a blog page
 * This will be enhanced once blog-posts.ts is created
 */
function getRelatedContentForBlog(blogSlug: string, limit: number): RelatedContent {
  // TODO: Enhance with blog-posts.ts data when available
  // For now, return popular routes and localities

  return {
    routes: routes.filter(r => r.popular).slice(0, limit),
    localities: localities.filter(l => l.popular).slice(0, limit)
  };
}

/**
 * Generate dynamic FAQs for a locality page
 */
export function generateLocalityFAQs(locality: Locality): FAQ[] {
  const faqs: FAQ[] = [];

  // Price FAQ
  faqs.push({
    question: `How much does electric cab from ${locality.name} to Mumbai Airport cost?`,
    answer: `Shree Morya Cabs charges ₹${locality.pricing.mumbaiAirport.toLocaleString('en-IN')} all-inclusive for electric cab from ${locality.name} to Mumbai Airport. This includes pickup from any ${locality.name} location, all tolls, driver allowance, and parking. No hidden charges, no surge pricing - same rate 24/7.`
  });

  // Coverage FAQ (if has coverage areas)
  if (locality.coverageAreas && locality.coverageAreas.length > 0) {
    faqs.push({
      question: `Do you cover all ${locality.name} areas?`,
      answer: `Yes, we provide complete coverage across ${locality.name} including ${locality.coverageAreas.slice(0, 3).join(', ')}, and all other ${locality.name} locations. Same rate for all pickups.`
    });
  }

  // Distance/timing FAQ
  faqs.push({
    question: `What is the distance from ${locality.name} to Mumbai Airport?`,
    answer: `${locality.name} to Mumbai Airport is approximately ${locality.popularDestinations.airportDistance} via Mumbai-Pune Expressway. Our electric cabs have 400+ km range, making this trip easy without any charging stops.`
  });

  // Corporate FAQ (if IT hub or has IT companies)
  if (locality.localityType === 'it-hub' || (locality.itCompanies && locality.itCompanies.length > 0)) {
    const companies = locality.itCompanies?.slice(0, 3).join(', ') || 'local companies';
    faqs.push({
      question: `Do you offer corporate packages for ${locality.name} companies?`,
      answer: `Yes, we offer dedicated corporate electric cab packages for ${locality.name} companies including ${companies}. Packages include monthly billing, GST invoices, priority booking, dedicated account manager, and special rates for regular airport transfers.`
    });
  }

  // Early morning FAQ
  faqs.push({
    question: `Can I book electric cab from ${locality.name} for early morning flights?`,
    answer: `Absolutely! We specialize in early morning pickups from ${locality.name} (3-4 AM) for 6-8 AM Mumbai flights. Our drivers are punctual, professional, and our silent electric vehicles won't disturb neighbors during pickup. 99.8% on-time record.`
  });

  // Reliability FAQ
  faqs.push({
    question: `Are electric cabs reliable for ${locality.name} to Mumbai Airport distance?`,
    answer: `Absolutely! Our Kia Carens EV has 400+ km range and BYD eMax 7 has 530+ km range - more than sufficient for the journey with plenty of buffer. We maintain 99.8% on-time completion rate with professional, experienced drivers.`
  });

  return faqs;
}

/**
 * Generate dynamic FAQs for a route page
 */
export function generateRouteFAQs(route: Route): FAQ[] {
  const faqs: FAQ[] = [];

  // Price FAQ
  faqs.push({
    question: `How much does electric cab from ${route.from} to ${route.to} cost?`,
    answer: `Premium electric cab from ${route.from} to ${route.to} costs ₹${route.pricing.kiaCarens.toLocaleString('en-IN')} for Kia Carens EV (7-seater) and ₹${route.pricing.bydEmax7.toLocaleString('en-IN')} for BYD eMax 7 (luxury). All-inclusive pricing with no hidden charges.`
  });

  // Distance/duration FAQ
  faqs.push({
    question: `What is the distance and travel time from ${route.from} to ${route.to}?`,
    answer: `${route.from} to ${route.to} is ${route.distance} with journey time of ${route.duration}. We take the fastest route via Mumbai-Pune Expressway for airport transfers.`
  });

  // Booking FAQ
  faqs.push({
    question: `How do I book electric cab from ${route.from} to ${route.to}?`,
    answer: `Book via WhatsApp at +91 74982 64215 or call the same number. Provide pickup location, destination, date, and time. Get instant confirmation with driver details 30 minutes before pickup.`
  });

  // Inclusions FAQ
  faqs.push({
    question: `What is included in the ${route.from} to ${route.to} cab price?`,
    answer: `Everything! Our all-inclusive price covers: premium electric vehicle, professional driver, all tolls, parking charges, driver allowance, and GST. No hidden fees, no surge pricing - same transparent rate 24/7.`
  });

  return faqs;
}

/**
 * Get optimal pickup time for a flight
 * Returns recommended departure time from locality for given flight time
 */
export function getRecommendedPickupTime(params: {
  flightTime: string; // e.g., "06:00"
  locality: string; // locality slug
  airport: string; // airport slug
}): string {
  const { flightTime, locality: localitySlug } = params;

  const locality = getLocalityBySlug(localitySlug);
  if (!locality) return 'Consult for timing';

  // Parse flight time (assuming format like "06:00")
  const [hours] = flightTime.split(':').map(Number);

  // Early morning flights (5-8 AM) need 3-3.5 hours before
  if (hours >= 5 && hours <= 8) {
    const recommendedHour = hours - 3;
    return `${recommendedHour.toString().padStart(2, '0')}:00 - ${(recommendedHour).toString().padStart(2, '0')}:30`;
  }

  // Regular flights: 2.5-3 hours before
  const recommendedHour = hours - 3;
  return `${Math.max(0, recommendedHour).toString().padStart(2, '0')}:00`;
}

/**
 * Calculate approximate fare between two localities
 * This is a simple estimation based on distance and base rate
 */
export function estimateFare(fromLocalitySlug: string, toLocalitySlug: string): number {
  const fromLocality = getLocalityBySlug(fromLocalitySlug);
  const toLocality = getLocalityBySlug(toLocalitySlug);

  if (!fromLocality || !toLocality) return 3700; // Default airport rate

  const distance = calculateDistance(
    fromLocality.coordinates.lat,
    fromLocality.coordinates.lng,
    toLocality.coordinates.lat,
    toLocality.coordinates.lng
  );

  // Simple pricing formula: base + per km rate
  const baseRate = 500;
  const perKmRate = 20;
  const estimatedFare = baseRate + (distance * perKmRate);

  // Round to nearest 100
  return Math.round(estimatedFare / 100) * 100;
}

/**
 * Get popular routes from a locality
 */
export function getPopularRoutesFromLocality(localitySlug: string, limit: number = 4): Route[] {
  const relatedRoutes = getRoutesForLocality(localitySlug);

  // Prioritize popular routes
  const popular = relatedRoutes.filter(r => r.popular);
  const others = relatedRoutes.filter(r => !r.popular);

  return [...popular, ...others].slice(0, limit);
}

/**
 * Get service highlights for a locality-to-airport route
 */
export function getServiceHighlights(localitySlug: string, airportSlug: string): string[] {
  const locality = getLocalityBySlug(localitySlug);
  const airport = getAirportBySlug(airportSlug);

  if (!locality || !airport) {
    return [
      'Professional drivers',
      'Luxury 7-seater EVs',
      'Zero surge pricing',
      'All tolls included'
    ];
  }

  const highlights: string[] = [];

  // Distance-based highlight
  highlights.push(`${locality.popularDestinations.airportDistance} via expressway`);

  // Terminal info for Mumbai Airport
  if (airport.iataCode === 'BOM') {
    highlights.push('Terminal 1 & Terminal 2 drop service');
  }

  // Locality-specific features
  if (locality.specialFeatures && locality.specialFeatures.length > 0) {
    highlights.push(locality.specialFeatures[0]);
  }

  // Standard features
  highlights.push('Flight tracking included');
  highlights.push('Early morning pickups available');
  highlights.push('Zero surge pricing - fixed rate 24/7');

  return highlights.slice(0, 6);
}
