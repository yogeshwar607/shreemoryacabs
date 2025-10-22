# GreenEVCabs

A modern, eco-friendly electric cab booking website built with Astro, React, and Tailwind CSS.

## Features

- 🌿 100% Electric vehicle fleet
- ⚡ Fast, static-first website with Astro
- 🎨 Beautiful UI with Tailwind CSS and shadcn/ui components
- 🌙 Dark mode support
- 📱 Fully responsive design
- 🔍 SEO optimized with sitemap generation
- 💬 WhatsApp integration for easy booking
- 🚗 Dynamic vehicle and route pages

## Tech Stack

- **Framework**: Astro 4.2
- **UI Library**: React 18
- **Styling**: Tailwind CSS 3.4
- **Components**: shadcn/ui (Radix UI + CVA)
- **Icons**: Lucide React
- **TypeScript**: Full type safety

## Project Structure

```
greenevcabs/
├── src/
│   ├── components/
│   │   ├── ui/          # shadcn/ui components
│   │   ├── react/       # React components
│   │   └── layout/      # Layout components
│   ├── data/            # Vehicle and route data
│   ├── layouts/         # Page layouts
│   ├── lib/             # Utility functions
│   ├── pages/           # Page routes
│   └── styles/          # Global styles
├── public/              # Static assets
└── package.json
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm or pnpm

### Installation

1. Install dependencies:
```bash
npm install
```

2. Create environment file:
```bash
cp .env.example .env
```

3. Update `.env` with your details:
```env
PUBLIC_SITE_URL=https://greenevcabs.com
PUBLIC_WHATSAPP_NUMBER=919876543210
PUBLIC_GA_ID=G-XXXXXXXXXX
```

### Development

Start the development server:

```bash
npm run dev
```

Visit `http://localhost:4321` to view the site.

### Build

Build for production:

```bash
npm run build
```

Preview production build:

```bash
npm run preview
```

## Features in Detail

### Fleet Management

The fleet is managed through `src/data/vehicles.ts`. Each vehicle includes:
- Specifications (battery, range, charging)
- Pricing (per km, minimum km, full day)
- Features and amenities
- Dynamic page generation

### Route Management

Routes are defined in `src/data/routes.ts`. Each route includes:
- Distance and duration
- Pricing for different vehicles
- Highlights and descriptions
- Popular route flagging

### WhatsApp Integration

Easy booking through WhatsApp with pre-filled messages:
- Vehicle-specific booking messages
- Route-specific inquiries
- Custom quote requests

### Dark Mode

Automatic dark mode support with:
- System preference detection
- Manual toggle
- Persistent user preference

## Customization

### Adding a New Vehicle

Edit `src/data/vehicles.ts`:

```typescript
{
  id: '3',
  slug: 'new-vehicle',
  name: 'New EV Model',
  // ... other properties
}
```

### Adding a New Route

Edit `src/data/routes.ts`:

```typescript
{
  id: '7',
  slug: 'new-route',
  name: 'City A to City B',
  // ... other properties
}
```

### Updating Colors

Edit `src/styles/globals.css` to customize the color scheme.

## Deployment

This is a static site that can be deployed to:
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages
- Any static hosting service

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

## SEO

The site includes:
- Automatic sitemap generation at `/sitemap.xml`
- Open Graph meta tags
- Twitter Card meta tags
- Semantic HTML structure
- robots.txt

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to use this project for your own purposes.

## Support

For issues or questions, please create an issue on the GitHub repository.

---

Built with ❤️ and powered by clean energy ⚡
