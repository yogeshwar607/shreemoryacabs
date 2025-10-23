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
  ];

  const vehiclePages = vehicles.map((vehicle) => `/fleet/${vehicle.slug}`);
  const routePages = routes.map((route) => `/routes/${route.slug}`);

  const allPages = [...staticPages, ...vehiclePages, ...routePages];

  // Helper function to determine priority and change frequency
  const getPageMetadata = (page: string) => {
    if (page === '') return { priority: '1.0', changefreq: 'daily' };
    if (page === '/fleet' || page === '/routes') return { priority: '0.9', changefreq: 'daily' };
    if (page === '/about' || page === '/faq') return { priority: '0.7', changefreq: 'monthly' };
    if (page.startsWith('/airport')) return { priority: '0.9', changefreq: 'weekly' };
    if (page.startsWith('/fleet/') || page.startsWith('/routes/')) return { priority: '0.8', changefreq: 'weekly' };
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
