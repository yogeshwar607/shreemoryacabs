import type { APIRoute } from 'astro';
import { vehicles } from '@/data/vehicles';
import { routes } from '@/data/routes';

const BASE_URL = 'https://greenevcabs.com';

export const GET: APIRoute = async () => {
  const staticPages = [
    '',
    '/fleet',
    '/routes',
  ];

  const vehiclePages = vehicles.map((vehicle) => `/fleet/${vehicle.slug}`);
  const routePages = routes.map((route) => `/routes/${route.slug}`);

  const allPages = [...staticPages, ...vehiclePages, ...routePages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map(
    (page) => `  <url>
    <loc>${BASE_URL}${page}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>${page === '' ? 'daily' : 'weekly'}</changefreq>
    <priority>${page === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
    },
  });
};
