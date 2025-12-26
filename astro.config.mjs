import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://greenevcabs.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static',
  redirects: {
    // Locality URL structure optimization (old flat URLs → new hierarchical URLs)
    '/electric-cab-service-hinjewadi': '/electric-cab-service/hinjewadi',
    '/electric-cab-service-wakad': '/electric-cab-service/wakad',
    '/electric-cab-service-baner': '/electric-cab-service/baner',
    '/electric-cab-service-ravet': '/electric-cab-service/ravet',
    '/electric-cab-service-pcmc': '/electric-cab-service/pcmc',
    '/electric-cab-service-nigdi': '/electric-cab-service/nigdi',
    '/electric-cab-service-kothrud': '/electric-cab-service/kothrud',
    '/electric-cab-service-pimple-saudagar': '/electric-cab-service/pimple-saudagar',
    '/electric-cab-service-hadapsar': '/electric-cab-service/hadapsar',
    '/electric-cab-service-pimple-nilakh': '/electric-cab-service/pimple-nilakh',
    '/electric-cab-service-viman-nagar': '/electric-cab-service/viman-nagar',
    '/electric-cab-service-aundh': '/electric-cab-service/aundh',
    '/electric-cab-service-balewadi': '/electric-cab-service/balewadi',

    // FAQ URL standardization
    '/mumbai-airport-pune-faq': '/mumbai-airport-to-pune-cab-faq',
  },
});
