/**
 * Blog Posts Data - Central source of truth for all blog post metadata
 * Powers the dynamic blog template at /src/pages/blog/[slug].astro
 *
 * This file replaces ~15,000 lines of layout/metadata duplication across 33 blog files
 * The actual blog content remains in separate .astro files and is imported dynamically
 */

export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishDate: string;
  lastModified?: string;
  author: string;

  category: 'travel-guide' | 'cost-analysis' | 'comparison' | 'technology' | 'location-guide';
  tags: string[];
  readTime: string;

  // For smart internal linking
  relatedRoutes?: string[]; // Route slugs
  relatedLocalities?: string[]; // Locality IDs
  relatedPosts?: string[]; // Blog post slugs

  keywords: string[];
  featured: boolean;
  schema?: 'Article' | 'HowTo' | 'FAQPage';

  // Open Graph image (optional)
  ogImage?: string;
}

export const blogPosts: BlogPost[] = [
  // Cost Analysis & Comparisons
  {
    slug: 'electric-vs-diesel-cab-cost-comparison-2025',
    title: 'Electric vs Diesel Cab Cost Comparison 2025 | Pune to Mumbai',
    description: 'Detailed cost comparison between electric and diesel cabs for Pune to Mumbai route in 2025. Real numbers, fuel costs, and total savings.',
    publishDate: '2024-12-01',
    author: 'GreenEVCabs Team',
    category: 'cost-analysis',
    tags: ['cost comparison', 'electric vs diesel', 'savings', '2025'],
    readTime: '8 min read',
    relatedRoutes: ['pune-to-mumbai-airport', 'pune-mumbai'],
    keywords: ['electric cab cost', 'diesel vs electric', 'pune mumbai cost', 'cab comparison 2025'],
    featured: true,
    schema: 'Article'
  },
  {
    slug: 'pune-mumbai-cab-cost-real-prices',
    title: 'Pune to Mumbai Cab Cost: Real Prices Breakdown 2025',
    description: 'Transparent breakdown of Pune to Mumbai cab costs. Real prices, what\'s included, and how to avoid hidden charges.',
    publishDate: '2024-11-15',
    author: 'GreenEVCabs Team',
    category: 'cost-analysis',
    tags: ['pricing', 'transparency', 'real costs'],
    readTime: '6 min read',
    relatedRoutes: ['pune-to-mumbai-airport', 'pune-mumbai'],
    keywords: ['pune mumbai cab price', 'cab cost breakdown', 'real prices'],
    featured: true,
    schema: 'Article'
  },
  {
    slug: 'how-to-save-money-pune-mumbai-cab',
    title: 'How to Save Money on Pune to Mumbai Cab: 7 Proven Tips',
    description: 'Save up to ₹1,500 on your next Pune to Mumbai cab ride. 7 proven tips from frequent travelers and industry experts.',
    publishDate: '2024-11-10',
    author: 'GreenEVCabs Team',
    category: 'cost-analysis',
    tags: ['savings', 'tips', 'money saving'],
    readTime: '7 min read',
    relatedRoutes: ['pune-to-mumbai-airport'],
    keywords: ['save money cab', 'cheap pune mumbai cab', 'cab booking tips'],
    featured: false,
    schema: 'HowTo'
  },
  {
    slug: 'electric-vs-diesel-cab-pune-mumbai-comparison',
    title: 'Electric vs Diesel Cab for Pune-Mumbai: Complete Comparison',
    description: 'Should you choose electric or diesel cab for Pune to Mumbai? Compare comfort, cost, environmental impact, and reliability.',
    publishDate: '2024-11-05',
    author: 'GreenEVCabs Team',
    category: 'comparison',
    tags: ['electric', 'diesel', 'comparison'],
    readTime: '9 min read',
    relatedRoutes: ['pune-to-mumbai-airport'],
    keywords: ['electric vs diesel cab', 'ev cab comparison', 'pune mumbai cab choice'],
    featured: false,
    schema: 'Article'
  },

  // Vehicle Comparisons
  {
    slug: 'kia-carens-ev-vs-byd-emax-7-comparison',
    title: 'Kia Carens EV vs BYD eMax 7: Which Electric Cab is Better?',
    description: 'Detailed comparison between Kia Carens EV and BYD eMax 7 for Pune to Mumbai route. Range, comfort, features, and pricing.',
    publishDate: '2024-12-10',
    author: 'GreenEVCabs Team',
    category: 'comparison',
    tags: ['vehicle comparison', 'Kia Carens', 'BYD eMax 7'],
    readTime: '10 min read',
    keywords: ['kia carens vs byd', 'electric cab comparison', 'best ev cab'],
    featured: true,
    schema: 'Article'
  },
  {
    slug: '5-seater-vs-7-seater-electric-cab-guide',
    title: '5-Seater vs 7-Seater Electric Cab: Complete Guide for Families',
    description: 'Should you book a 5-seater or 7-seater electric cab? Guide for families, luggage, comfort, and pricing considerations.',
    publishDate: '2024-11-20',
    author: 'GreenEVCabs Team',
    category: 'comparison',
    tags: ['seating capacity', 'family travel', 'luggage'],
    readTime: '6 min read',
    keywords: ['5 seater vs 7 seater', 'family cab', 'luggage capacity'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'greenevcabs-vs-grel-detailed-comparison',
    title: 'GreenEVCabs vs Grel Cabs: Honest Detailed Comparison 2025',
    description: 'Unbiased comparison between GreenEVCabs and Grel Cabs. Pricing, fleet, service quality, and customer reviews.',
    publishDate: '2024-12-05',
    author: 'GreenEVCabs Team',
    category: 'comparison',
    tags: ['service comparison', 'grel cabs', 'greenevcabs'],
    readTime: '8 min read',
    keywords: ['greenevcabs vs grel', 'best ev cab service', 'cab service comparison'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'pune-mumbai-train-vs-bus-vs-cab-comparison',
    title: 'Pune to Mumbai: Train vs Bus vs Cab - Complete Comparison 2025',
    description: 'Which is best for Pune to Mumbai travel? Compare train, bus, and cab on cost, time, comfort, and convenience.',
    publishDate: '2024-11-25',
    author: 'GreenEVCabs Team',
    category: 'comparison',
    tags: ['transport comparison', 'train', 'bus', 'cab'],
    readTime: '11 min read',
    relatedRoutes: ['pune-mumbai'],
    keywords: ['train vs cab', 'pune mumbai transport', 'best way pune mumbai'],
    featured: false,
    schema: 'Article'
  },

  // Technology & EV Guides
  {
    slug: 'ev-range-explained-will-cab-make-it',
    title: 'EV Range Explained: Will Your Electric Cab Make It to Mumbai?',
    description: 'Understanding electric vehicle range anxiety. Real-world range data for Pune-Mumbai route in Kia Carens EV and BYD eMax 7.',
    publishDate: '2024-12-15',
    author: 'GreenEVCabs Team',
    category: 'technology',
    tags: ['EV technology', 'range anxiety', 'battery'],
    readTime: '9 min read',
    keywords: ['ev range', 'range anxiety', 'electric cab range', 'pune mumbai range'],
    featured: true,
    schema: 'Article'
  },
  {
    slug: 'ev-charging-pune-mumbai-corridor-2025',
    title: 'EV Charging Infrastructure on Pune-Mumbai Corridor 2025',
    description: 'Complete guide to EV charging stations on Pune-Mumbai route. Locations, speeds, and what it means for electric cab reliability.',
    publishDate: '2024-11-18',
    author: 'GreenEVCabs Team',
    category: 'technology',
    tags: ['charging infrastructure', 'EV charging', 'expressway'],
    readTime: '7 min read',
    keywords: ['ev charging pune mumbai', 'charging stations', 'ev infrastructure'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'carbon-footprint-cab-travel-pune-mumbai',
    title: 'Carbon Footprint of Cab Travel: Pune to Mumbai Environmental Impact',
    description: 'How much CO₂ does your Pune-Mumbai cab trip emit? Compare electric vs diesel environmental impact with real data.',
    publishDate: '2024-11-12',
    author: 'GreenEVCabs Team',
    category: 'technology',
    tags: ['environment', 'carbon footprint', 'sustainability'],
    readTime: '8 min read',
    keywords: ['carbon footprint cab', 'ev environmental impact', 'eco friendly travel'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'maharashtra-ev-regulations-cab-guide-2025',
    title: 'Maharashtra EV Regulations for Cabs 2025: Complete Guide',
    description: 'Latest Maharashtra government policies, subsidies, and regulations for electric cabs. What passengers should know.',
    publishDate: '2024-12-08',
    author: 'GreenEVCabs Team',
    category: 'technology',
    tags: ['regulations', 'government policy', 'Maharashtra'],
    readTime: '6 min read',
    keywords: ['ev regulations maharashtra', 'cab policies', 'ev subsidies'],
    featured: false,
    schema: 'Article'
  },

  // Travel Guides
  {
    slug: 'best-time-travel-pune-mumbai-airport-traffic',
    title: 'Best Time to Travel from Pune to Mumbai Airport: Traffic Guide',
    description: 'Avoid traffic jams! Best and worst times to travel Pune to Mumbai Airport with hour-by-hour traffic analysis.',
    publishDate: '2024-12-12',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['traffic', 'timing', 'airport transfer'],
    readTime: '7 min read',
    relatedRoutes: ['pune-to-mumbai-airport'],
    keywords: ['best time pune mumbai', 'avoid traffic', 'mumbai airport timing'],
    featured: true,
    schema: 'HowTo'
  },
  {
    slug: 'best-rest-stops-pune-mumbai-expressway',
    title: 'Best Rest Stops on Pune-Mumbai Expressway: Complete Guide 2025',
    description: 'Top rest stops, restaurants, and facilities on Mumbai-Pune Expressway. What to expect, prices, and recommendations.',
    publishDate: '2024-11-28',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['expressway', 'rest stops', 'food'],
    readTime: '10 min read',
    keywords: ['expressway rest stops', 'lonavala food', 'highway restaurants'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'weekend-getaways-pune-ev-cab-2025',
    title: 'Weekend Getaways from Pune by Electric Cab: Top 10 Destinations',
    description: 'Best weekend destinations from Pune accessible by electric cab. Lonavala, Mahabaleshwar, Lavasa, and more.',
    publishDate: '2024-11-22',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['weekend getaway', 'destinations', 'tourism'],
    readTime: '12 min read',
    relatedRoutes: ['pune-lonavala', 'pune-mahabaleshwar'],
    keywords: ['weekend getaway pune', 'ev cab tourism', 'hill stations'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'pune-weekend-getaway-lonavala-mahabaleshwar-ev-cab-2025',
    title: 'Pune Weekend Getaway: Lonavala & Mahabaleshwar by EV Cab',
    description: 'Complete guide to visiting Lonavala and Mahabaleshwar from Pune in electric cab. Best routes, timing, costs.',
    publishDate: '2024-10-15',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['lonavala', 'mahabaleshwar', 'weekend trip'],
    readTime: '11 min read',
    relatedRoutes: ['pune-lonavala', 'pune-mahabaleshwar'],
    keywords: ['lonavala weekend trip', 'mahabaleshwar ev cab', 'hill station cab'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'safety-guide-electric-cab-pune-mumbai-airport',
    title: 'Safety Guide: Traveling by Electric Cab to Mumbai Airport',
    description: 'Essential safety tips for electric cab travel from Pune to Mumbai Airport. What to check, driver verification, emergency contacts.',
    publishDate: '2024-11-08',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['safety', 'security', 'travel tips'],
    readTime: '8 min read',
    relatedRoutes: ['pune-to-mumbai-airport'],
    keywords: ['cab safety', 'safe travel', 'security tips'],
    featured: false,
    schema: 'HowTo'
  },
  {
    slug: 'how-to-book-electric-cab-pune-mumbai-airport',
    title: 'How to Book Electric Cab from Pune to Mumbai Airport: Step-by-Step',
    description: 'Complete booking guide for electric cab from Pune to Mumbai Airport. WhatsApp booking, advance booking, payment options.',
    publishDate: '2024-11-02',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['booking guide', 'how to book', 'tutorial'],
    readTime: '6 min read',
    relatedRoutes: ['pune-to-mumbai-airport'],
    keywords: ['book ev cab', 'cab booking guide', 'how to book'],
    featured: false,
    schema: 'HowTo'
  },
  {
    slug: 'best-electric-cab-service-pune-2025',
    title: 'Best Electric Cab Service in Pune 2025: Complete Review & Guide',
    description: 'Comprehensive review of electric cab services in Pune. Features, pricing, coverage, and customer experience.',
    publishDate: '2024-12-18',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['service review', 'pune', 'best service'],
    readTime: '10 min read',
    keywords: ['best ev cab pune', 'electric cab service', 'pune cab review'],
    featured: true,
    schema: 'Article'
  },
  {
    slug: '5-things-check-before-booking-electric-cab-pune-mumbai',
    title: '5 Things to Check Before Booking Electric Cab Pune to Mumbai',
    description: 'Essential checklist before booking electric cab for Pune-Mumbai journey. Avoid common mistakes and ensure smooth trip.',
    publishDate: '2024-10-28',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['checklist', 'booking tips', 'preparation'],
    readTime: '5 min read',
    relatedRoutes: ['pune-to-mumbai-airport'],
    keywords: ['cab booking checklist', 'what to check', 'booking tips'],
    featured: false,
    schema: 'HowTo'
  },

  // Airport Guides
  {
    slug: 'mumbai-airport-complete-travel-guide',
    title: 'Mumbai Airport Complete Travel Guide for Pune Travelers 2025',
    description: 'Everything Pune travelers need to know about Mumbai Airport. Terminals, facilities, cab pickup points, and insider tips.',
    publishDate: '2024-12-20',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['mumbai airport', 'terminal guide', 'airport tips'],
    readTime: '12 min read',
    relatedRoutes: ['pune-to-mumbai-airport', 'mumbai-airport-to-pune'],
    keywords: ['mumbai airport guide', 'terminal guide', 'airport facilities'],
    featured: true,
    schema: 'Article'
  },
  {
    slug: 'mumbai-airport-terminal-guide-pune-travelers',
    title: 'Mumbai Airport Terminal Guide for Pune Travelers',
    description: 'Navigate Mumbai Airport terminals like a pro. Terminal 1 vs Terminal 2, cab pickup points, facilities guide.',
    publishDate: '2024-10-20',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['terminal guide', 'mumbai airport', 'navigation'],
    readTime: '9 min read',
    relatedRoutes: ['pune-to-mumbai-airport'],
    keywords: ['mumbai airport terminals', 'terminal 1 terminal 2', 'airport navigation'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'mumbai-airport-arrivals-cab-pickup-guide',
    title: 'Mumbai Airport Arrivals: Complete Cab Pickup Guide',
    description: 'Step-by-step guide to cab pickup at Mumbai Airport arrivals. Meet & greet, waiting areas, and how to find your cab.',
    publishDate: '2024-10-18',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['arrivals', 'cab pickup', 'meetng point'],
    readTime: '7 min read',
    relatedRoutes: ['mumbai-airport-to-pune'],
    keywords: ['mumbai airport pickup', 'arrivals guide', 'cab meeting point'],
    featured: false,
    schema: 'HowTo'
  },
  {
    slug: 'late-night-arrival-mumbai-airport-pune-cab-guide',
    title: 'Late Night Arrival at Mumbai Airport: Pune Cab Guide',
    description: 'What to do when landing late at Mumbai Airport? Complete guide to safe late-night cab service to Pune.',
    publishDate: '2024-10-16',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['late night', 'safety', 'night travel'],
    readTime: '8 min read',
    relatedRoutes: ['mumbai-airport-to-pune'],
    keywords: ['late night cab', 'midnight arrival', 'night travel pune'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'navi-mumbai-airport-pune-complete-guide',
    title: 'Navi Mumbai Airport to Pune: Complete Travel Guide 2025',
    description: 'Everything about new Navi Mumbai Airport for Pune travelers. Location, facilities, cab service, and travel tips.',
    publishDate: '2024-12-22',
    author: 'GreenEVCabs Team',
    category: 'travel-guide',
    tags: ['navi mumbai airport', 'new airport', 'guide'],
    readTime: '10 min read',
    relatedRoutes: ['pune-to-navi-mumbai-airport', 'navi-mumbai-airport-to-pune'],
    keywords: ['navi mumbai airport', 'new airport pune', 'nmi airport'],
    featured: true,
    schema: 'Article'
  },

  // Location-Specific Guides
  {
    slug: 'blue-ridge-ravet-mumbai-airport-cab-guide',
    title: 'Blue Ridge Ravet to Mumbai Airport: Complete Cab Guide',
    description: 'Detailed guide for Blue Ridge Ravet residents. Pickup points, timings, rates, and booking tips for Mumbai Airport transfer.',
    publishDate: '2024-10-25',
    author: 'GreenEVCabs Team',
    category: 'location-guide',
    tags: ['blue ridge', 'ravet', 'locality guide'],
    readTime: '7 min read',
    relatedLocalities: ['ravet'],
    relatedRoutes: ['hinjewadi-to-mumbai-airport'],
    keywords: ['blue ridge cab', 'ravet airport taxi', 'blue ridge mumbai airport'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'cerebrum-it-park-aundh-mumbai-airport-complete-guide',
    title: 'Cerebrum IT Park Aundh to Mumbai Airport: Complete Guide',
    description: 'IT professionals guide for Cerebrum IT Park to Mumbai Airport cab service. Corporate packages, timings, and routes.',
    publishDate: '2024-10-22',
    author: 'GreenEVCabs Team',
    category: 'location-guide',
    tags: ['cerebrum', 'aundh', 'it park'],
    readTime: '8 min read',
    relatedLocalities: ['aundh'],
    relatedRoutes: ['aundh-to-mumbai-airport'],
    keywords: ['cerebrum it park cab', 'aundh airport taxi', 'it park transfer'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'hinjewadi-phase-1-2-3-mumbai-airport-route-comparison',
    title: 'Hinjewadi Phase 1, 2, 3 to Mumbai Airport: Route Comparison',
    description: 'Which Hinjewadi phase has the best route to Mumbai Airport? Compare Phase 1, 2, 3 routes, timings, and pickup points.',
    publishDate: '2024-10-30',
    author: 'GreenEVCabs Team',
    category: 'location-guide',
    tags: ['hinjewadi', 'phases', 'route comparison'],
    readTime: '9 min read',
    relatedLocalities: ['hinjewadi'],
    relatedRoutes: ['hinjewadi-to-mumbai-airport'],
    keywords: ['hinjewadi phase comparison', 'hinjewadi routes', 'phase 1 2 3'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'pimple-saudagar-chowk-mumbai-airport-timing-guide',
    title: 'Pimple Saudagar Chowk to Mumbai Airport: Timing & Traffic Guide',
    description: 'Best times to travel from Pimple Saudagar Chowk to Mumbai Airport. Avoid traffic, optimal departure times, route tips.',
    publishDate: '2024-10-12',
    author: 'GreenEVCabs Team',
    category: 'location-guide',
    tags: ['pimple saudagar', 'timing', 'traffic'],
    readTime: '7 min read',
    relatedLocalities: ['pimple-saudagar'],
    keywords: ['pimple saudagar cab', 'traffic timing', 'best departure time'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'pcmc-industrial-area-mumbai-airport-cab-guide',
    title: 'PCMC Industrial Area to Mumbai Airport: Corporate Cab Guide',
    description: 'Guide for PCMC industrial belt employees. Corporate packages, early morning pickups, and routes from Pimpri-Chinchwad.',
    publishDate: '2024-10-10',
    author: 'GreenEVCabs Team',
    category: 'location-guide',
    tags: ['pcmc', 'industrial area', 'corporate'],
    readTime: '8 min read',
    relatedLocalities: ['pcmc'],
    keywords: ['pcmc cab', 'pimpri chinchwad airport', 'industrial area transfer'],
    featured: false,
    schema: 'Article'
  },
  {
    slug: 'early-morning-cab-nigdi-mumbai-airport-guide',
    title: 'Early Morning Cab from Nigdi to Mumbai Airport: Complete Guide',
    description: 'Catch that 6 AM flight! Early morning cab guide from Nigdi to Mumbai Airport. Timing, booking, and safety tips.',
    publishDate: '2024-10-08',
    author: 'GreenEVCabs Team',
    category: 'location-guide',
    tags: ['nigdi', 'early morning', 'airport transfer'],
    readTime: '6 min read',
    relatedLocalities: ['nigdi'],
    keywords: ['early morning cab nigdi', 'nigdi airport taxi', '6 am flight'],
    featured: false,
    schema: 'HowTo'
  },
  {
    slug: 'navi-mumbai-airport-hinjewadi-complete-guide',
    title: 'Navi Mumbai Airport to Hinjewadi: Complete Route & Service Guide',
    description: 'New Navi Mumbai Airport to Hinjewadi IT Park complete guide. Routes, timings, cab service, and what IT professionals need to know.',
    publishDate: '2024-10-05',
    author: 'GreenEVCabs Team',
    category: 'location-guide',
    tags: ['navi mumbai airport', 'hinjewadi', 'it professionals'],
    readTime: '10 min read',
    relatedLocalities: ['hinjewadi'],
    relatedRoutes: ['pune-to-navi-mumbai-airport'],
    keywords: ['navi mumbai hinjewadi', 'new airport hinjewadi', 'it park transfer'],
    featured: false,
    schema: 'Article'
  }
];

// Helper Functions

/**
 * Get blog post by slug
 */
export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

/**
 * Get blog posts by category
 */
export function getBlogPostsByCategory(category: BlogPost['category']): BlogPost[] {
  return blogPosts.filter(post => post.category === category);
}

/**
 * Get featured blog posts
 */
export function getFeaturedBlogPosts(): BlogPost[] {
  return blogPosts.filter(post => post.featured);
}

/**
 * Get related blog posts based on tags and category
 */
export function getRelatedBlogPosts(slug: string, limit: number = 3): BlogPost[] {
  const currentPost = getBlogPostBySlug(slug);
  if (!currentPost) return [];

  // Calculate relevance score for each post
  const scoredPosts = blogPosts
    .filter(post => post.slug !== slug) // Exclude current post
    .map(post => {
      let score = 0;

      // Same category = +3 points
      if (post.category === currentPost.category) score += 3;

      // Shared tags = +1 point per tag
      const sharedTags = post.tags.filter(tag =>
        currentPost.tags.includes(tag)
      );
      score += sharedTags.length;

      // Explicitly listed as related = +5 points
      if (currentPost.relatedPosts?.includes(post.slug)) score += 5;

      // Shared route = +2 points
      const sharedRoutes = post.relatedRoutes?.filter(route =>
        currentPost.relatedRoutes?.includes(route)
      ) || [];
      score += sharedRoutes.length * 2;

      // Shared locality = +2 points
      const sharedLocalities = post.relatedLocalities?.filter(locality =>
        currentPost.relatedLocalities?.includes(locality)
      ) || [];
      score += sharedLocalities.length * 2;

      return { post, score };
    })
    .filter(item => item.score > 0) // Only include posts with some relevance
    .sort((a, b) => b.score - a.score) // Sort by score descending
    .slice(0, limit)
    .map(item => item.post);

  return scoredPosts;
}

/**
 * Get all blog post slugs (for static path generation)
 */
export function getAllBlogPostSlugs(): string[] {
  return blogPosts.map(post => post.slug);
}

/**
 * Get blog posts by tag
 */
export function getBlogPostsByTag(tag: string): BlogPost[] {
  return blogPosts.filter(post =>
    post.tags.some(t => t.toLowerCase() === tag.toLowerCase())
  );
}

/**
 * Get latest blog posts
 */
export function getLatestBlogPosts(limit: number = 5): BlogPost[] {
  return [...blogPosts]
    .sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime())
    .slice(0, limit);
}

/**
 * Search blog posts by keyword
 */
export function searchBlogPosts(query: string): BlogPost[] {
  const lowerQuery = query.toLowerCase();
  return blogPosts.filter(post =>
    post.title.toLowerCase().includes(lowerQuery) ||
    post.description.toLowerCase().includes(lowerQuery) ||
    post.tags.some(tag => tag.toLowerCase().includes(lowerQuery)) ||
    post.keywords.some(keyword => keyword.toLowerCase().includes(lowerQuery))
  );
}
