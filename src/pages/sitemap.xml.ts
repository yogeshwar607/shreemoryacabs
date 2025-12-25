import type { APIRoute } from 'astro';
import { vehicles } from '@/data/vehicles';
import { routes } from '@/data/routes';
import { localities } from '@/data/localities';
import { blogPosts } from '@/data/blog-posts';

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
    '/cab-fare-calculator',
    '/electric-vs-diesel-cabs-pune',
    '/greenevcabs-vs-ola-uber',
    '/greenevcabs-vs-competitors',
    '/greenevcabs-vs-grel-cabs',
    '/corporate-electric-cab-pune',
    '/ev-cabs-pune',
    '/ev-taxi-pune',
    '/electric-cab-pune',
    '/pune-mumbai-electric-taxi',
    '/mumbai-pune-electric-cab',
    '/electric-cab-booking-pune',
    '/kia-carens-ev-cab-pune',
    '/byd-emax-7-cab-pune',
    '/mumbai-airport-to-pune-electric-cab',
    '/pune-airport-cab-service',
    '/navi-mumbai-airport-to-pune-cab',
    '/pune-to-shirdi-electric-cab',
    '/electric-cab-hinjewadi-mumbai-airport',
    '/electric-cab-wakad-mumbai-airport',
    '/electric-cab-baner-mumbai-airport',
    '/electric-cab-kothrud-mumbai-airport',
    '/electric-cab-viman-nagar-mumbai-airport',
    '/electric-cab-hadapsar-mumbai-airport',
  ];

  const vehiclePages = vehicles.map((vehicle) => `/fleet/${vehicle.slug}`);
  const routePages = routes.map((route) => `/routes/${route.slug}`);
  const localityPages = localities.map((locality) => `/electric-cab-service/${locality.slug}`);
  const blogPages = blogPosts.map((post) => `/blog/${post.slug}`);

  const allPages = [...staticPages, ...vehiclePages, ...routePages, ...localityPages, ...blogPages];

  // Helper function to determine priority and change frequency
  const getPageMetadata = (page: string) => {
    if (page === '') return { priority: '1.0', changefreq: 'daily' };
    if (page === '/fleet' || page === '/routes') return { priority: '0.9', changefreq: 'daily' };
    if (page === '/blog') return { priority: '0.9', changefreq: 'weekly' };
    if (page === '/about' || page === '/faq') return { priority: '0.7', changefreq: 'monthly' };
    if (page.startsWith('/airport')) return { priority: '0.9', changefreq: 'weekly' };
    if (page.startsWith('/fleet/') || page.startsWith('/routes/')) return { priority: '0.8', changefreq: 'weekly' };
    if (page.startsWith('/electric-cab-service/')) return { priority: '0.9', changefreq: 'weekly' }; // High priority locality pages
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
