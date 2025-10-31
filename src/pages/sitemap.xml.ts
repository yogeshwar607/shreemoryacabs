import type { APIRoute } from 'astro';
import { vehicles } from '@/data/vehicles';
import { routes } from '@/data/routes';

const BASE_URL = 'https://greenevcabs.com';

export const GET: APIRoute = async () => {
  const staticPages = [
    '',
    '/fleet',
    '/routes',
    '/about',
    '/faq',
    '/airport',
    '/airport/mumbai-airport',
    '/airport/navi-mumbai-airport',
    '/airport/pune-airport',
    '/blog',
  ];

  const vehiclePages = vehicles.map((vehicle) => `/fleet/${vehicle.slug}`);
  const routePages = routes.map((route) => `/routes/${route.slug}`);

  // Blog posts
  const blogPosts = [
    'how-to-book-electric-cab-pune-mumbai-airport',
    'electric-vs-diesel-cab-cost-comparison-2025',
    'pune-mumbai-cab-cost-real-prices',
    'best-time-travel-pune-mumbai-airport-traffic',
    'ev-range-explained-will-cab-make-it',
    'kia-carens-ev-vs-byd-emax-7-comparison',
    '5-seater-vs-7-seater-electric-cab-guide',
    'pune-mumbai-train-vs-bus-vs-cab-comparison',
    'navi-mumbai-airport-pune-complete-guide',
    'mumbai-airport-terminal-guide-pune-travelers',
    'best-rest-stops-pune-mumbai-expressway',
    'ev-charging-pune-mumbai-corridor-2025',
    'carbon-footprint-cab-travel-pune-mumbai',
    'maharashtra-ev-regulations-cab-guide-2025',
    'weekend-getaways-pune-ev-cab-2025',
    'safety-guide-electric-cab-pune-mumbai-airport'
  ];
  const blogPages = blogPosts.map((slug) => `/blog/${slug}`);

  const allPages = [...staticPages, ...vehiclePages, ...routePages, ...blogPages];

  // Helper function to determine priority and change frequency
  const getPageMetadata = (page: string) => {
    if (page === '') return { priority: '1.0', changefreq: 'daily' };
    if (page === '/fleet' || page === '/routes') return { priority: '0.9', changefreq: 'daily' };
    if (page === '/blog') return { priority: '0.9', changefreq: 'weekly' };
    if (page === '/about' || page === '/faq') return { priority: '0.7', changefreq: 'monthly' };
    if (page.startsWith('/airport')) return { priority: '0.9', changefreq: 'weekly' };
    if (page.startsWith('/fleet/') || page.startsWith('/routes/')) return { priority: '0.8', changefreq: 'weekly' };
    if (page.startsWith('/blog/')) return { priority: '0.8', changefreq: 'monthly' };
    return { priority: '0.8', changefreq: 'weekly' };
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((page) => {
    const { priority, changefreq } = getPageMetadata(page);
    return `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
  })
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
