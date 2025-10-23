# SEO Implementation Guide - GreenEVCabs

This document outlines all SEO optimizations implemented in the GreenEVCabs project.

## Table of Contents
1. [Meta Tags](#meta-tags)
2. [Structured Data (Schema.org)](#structured-data)
3. [Technical SEO](#technical-seo)
4. [Content SEO](#content-seo)
5. [Performance Optimizations](#performance-optimizations)
6. [Testing & Validation](#testing--validation)

---

## Meta Tags

### Implemented Meta Tags

#### Primary SEO Tags
- **Title Tags**: Unique, descriptive titles for all pages (50-60 characters)
- **Meta Descriptions**: Compelling descriptions (150-160 characters)
- **Keywords**: Targeted keywords for each page
- **Canonical URLs**: Prevent duplicate content issues
- **Language Tags**: Specify content language (en)

#### Open Graph Tags (Facebook)
- og:type (website/product)
- og:title
- og:description
- og:image (1200x630px recommended)
- og:url
- og:site_name
- og:locale

#### Twitter Card Tags
- twitter:card (summary_large_image)
- twitter:title
- twitter:description
- twitter:image
- twitter:creator

#### Technical Meta Tags
- Viewport (mobile-responsive)
- Charset (UTF-8)
- Format detection (telephone recognition)
- Robots directives (index, follow)
- Googlebot directives

#### Geographic Tags
- geo.region (IN-MH)
- geo.placename (Pune, Maharashtra)
- geo.position (latitude, longitude)
- ICBM coordinates

---

## Structured Data (Schema.org)

All structured data is implemented using JSON-LD format in `<script type="application/ld+json">` tags.

### Homepage Schemas

#### 1. LocalBusiness Schema
```json
{
  "@type": "LocalBusiness",
  "name": "GreenEVCabs",
  "address": { "addressLocality": "Pune", "addressRegion": "Maharashtra" },
  "telephone": "+917498264215",
  "openingHours": "24/7",
  "aggregateRating": { "ratingValue": "4.8", "reviewCount": "156" }
}
```

#### 2. Organization Schema
```json
{
  "@type": "Organization",
  "name": "GreenEVCabs",
  "url": "https://greenevcabs.com",
  "logo": "https://greenevcabs.com/logo.png",
  "contactPoint": { "contactType": "Customer Service" }
}
```

#### 3. WebSite Schema
```json
{
  "@type": "WebSite",
  "url": "https://greenevcabs.com",
  "name": "GreenEVCabs",
  "potentialAction": { "@type": "SearchAction" }
}
```

#### 4. Service Schema
```json
{
  "@type": "Service",
  "serviceType": "Electric Cab Service",
  "areaServed": { "name": "Maharashtra" }
}
```

#### 5. FAQPage Schema
Includes 5 common questions and answers for rich snippets.

### Fleet Page Schemas

#### Vehicle/Product Schema
Each vehicle has:
- Product information (name, description, image)
- Vehicle specifications (seating, fuelType: Electric)
- Pricing (Offer with UnitPriceSpecification)
- Aggregate ratings
- Brand information

**Location**: `/fleet`, `/fleet/[slug]`

### Route Page Schemas

#### TouristTrip Schema
Each route includes:
- Trip details (name, description)
- Itinerary (from/to cities)
- Offers (pricing)
- Provider information

**Location**: `/routes`, `/routes/[slug]`

### Breadcrumb Schema

All pages include BreadcrumbList schema for navigation hierarchy:
```json
{
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "/" },
    { "@type": "ListItem", "position": 2, "name": "Fleet", "item": "/fleet" }
  ]
}
```

---

## Technical SEO

### 1. Sitemap (sitemap.xml)
**Location**: `/sitemap.xml`

Automatically generated sitemap includes:
- Static pages (Home, Fleet, Routes)
- Dynamic vehicle pages (2 vehicles)
- Dynamic route pages (6 routes)
- Last modification dates
- Change frequency
- Priority values

### 2. Robots.txt
**Location**: `/public/robots.txt`

```
User-agent: *
Allow: /
Sitemap: https://greenevcabs.com/sitemap.xml
Crawl-delay: 1
```

### 3. Semantic HTML
- Proper heading hierarchy (h1 → h2 → h3)
- Semantic tags (header, nav, main, section, article, footer)
- ARIA labels for accessibility
- Alt text for images (to be added when images are available)

### 4. URL Structure
Clean, descriptive URLs:
- `/fleet/kia-carens-ev`
- `/routes/pune-mumbai`
- No query parameters
- Lowercase with hyphens

### 5. Mobile Optimization
- Responsive design (Tailwind CSS)
- Viewport meta tag
- Mobile-friendly navigation
- Touch-friendly buttons

### 6. Performance
- Static site generation (Astro)
- Preconnect to external domains
- DNS prefetch for WhatsApp
- Minimal JavaScript (React islands)

---

## Content SEO

### Keyword Strategy

#### Primary Keywords
- Electric cab
- EV cab
- Electric taxi
- Eco-friendly cab service
- Green transportation

#### Location-Based Keywords
- Electric cab Pune
- EV cab Mumbai
- Pune Mumbai cab
- Airport transfer Pune
- Maharashtra cab service

#### Long-Tail Keywords
- Book electric cab online
- 7 seater electric cab
- Zero emission taxi service
- Outstation electric cab booking

### Content Best Practices

1. **Unique Titles**: Every page has unique, descriptive title
2. **Compelling Descriptions**: Action-oriented meta descriptions
3. **Header Tags**: Proper h1, h2, h3 hierarchy
4. **Internal Linking**: Related pages linked (Fleet ↔ Routes)
5. **Content Length**: Adequate content on each page
6. **Keywords**: Natural keyword placement

### Page-Specific SEO

#### Homepage (`/`)
- Focus: Brand awareness, services overview
- Keywords: Electric cab, EV service, Maharashtra
- Structured data: 5 schemas (LocalBusiness, Organization, Website, Service, FAQ)

#### Fleet Pages (`/fleet/*`)
- Focus: Vehicle features, specifications, booking
- Keywords: Vehicle names, seating capacity, electric features
- Structured data: Vehicle/Product schema

#### Route Pages (`/routes/*`)
- Focus: Route details, pricing, booking
- Keywords: City pairs, route names
- Structured data: TouristTrip schema

---

## Performance Optimizations

### Image Optimization
**To be implemented when images are added:**
- WebP format with fallbacks
- Lazy loading
- Responsive images (srcset)
- Optimized dimensions
- Alt text for all images

### Code Optimization
- ✅ Static site generation
- ✅ Component-based architecture
- ✅ Minimal client-side JS
- ✅ CSS optimization (Tailwind)
- ✅ Tree-shaking

### Loading Speed
- ✅ No external fonts (using system fonts)
- ✅ Preconnect to external domains
- ✅ Inline critical CSS
- ✅ Defer non-critical JavaScript

---

## Testing & Validation

### Tools to Use

1. **Google Search Console**
   - Submit sitemap
   - Monitor indexing status
   - Check for crawl errors
   - View search performance

2. **Google Rich Results Test**
   ```
   https://search.google.com/test/rich-results
   ```
   Test structured data for:
   - LocalBusiness
   - Product (Vehicles)
   - FAQPage
   - Breadcrumbs

3. **Schema Markup Validator**
   ```
   https://validator.schema.org/
   ```
   Validate all JSON-LD structured data

4. **PageSpeed Insights**
   ```
   https://pagespeed.web.dev/
   ```
   Test performance and Core Web Vitals

5. **Mobile-Friendly Test**
   ```
   https://search.google.com/test/mobile-friendly
   ```

6. **Lighthouse (Chrome DevTools)**
   Run audits for:
   - Performance
   - Accessibility
   - Best Practices
   - SEO

### Validation Checklist

- [ ] All pages have unique titles and descriptions
- [ ] Sitemap.xml accessible and valid
- [ ] Robots.txt accessible
- [ ] All structured data validates
- [ ] No broken links
- [ ] All images have alt text
- [ ] Mobile responsive on all devices
- [ ] Page load time < 3 seconds
- [ ] Core Web Vitals pass
- [ ] HTTPS enabled (production)
- [ ] Canonical URLs correct
- [ ] No duplicate content

---

## SEO Maintenance

### Regular Tasks

#### Weekly
- Monitor Google Search Console for errors
- Check for broken links
- Review search query performance

#### Monthly
- Update content for freshness
- Add new routes/vehicles
- Review and update meta descriptions
- Check competitor rankings

#### Quarterly
- Comprehensive SEO audit
- Update structured data if schema changes
- Review and optimize keywords
- Analyze traffic and conversion rates

---

## File Structure

```
src/
├── lib/
│   └── seo.ts                  # SEO utility functions
├── components/
│   └── seo/
│       ├── StructuredData.astro  # JSON-LD component
│       ├── Breadcrumbs.astro     # Breadcrumb navigation
│       └── SEOHead.astro         # Meta tags component
├── layouts/
│   └── MainLayout.astro        # Main layout with SEO
└── pages/
    ├── index.astro             # Homepage with all schemas
    ├── sitemap.xml.ts          # Dynamic sitemap
    ├── fleet/
    │   ├── index.astro         # Fleet listing
    │   └── [slug].astro        # Vehicle details
    └── routes/
        ├── index.astro         # Routes listing
        └── [slug].astro        # Route details
```

---

## Key SEO Features Summary

✅ **Meta Tags**: Complete set including OG, Twitter, Geographic
✅ **Structured Data**: 9 different schema types implemented
✅ **Sitemap**: Automatically generated XML sitemap
✅ **Robots.txt**: Properly configured
✅ **Breadcrumbs**: Navigation with structured data
✅ **Mobile-Friendly**: Fully responsive design
✅ **Fast Loading**: Static site with optimized assets
✅ **Semantic HTML**: Proper tag hierarchy
✅ **Internal Linking**: Well-connected page structure
✅ **Unique Content**: Every page has unique, valuable content
✅ **Keywords**: Strategic keyword placement
✅ **URLs**: Clean, descriptive URL structure

---

## Next Steps for Production

1. **Set up Google Search Console**
   - Verify domain ownership
   - Submit sitemap
   - Monitor indexing

2. **Set up Google Analytics**
   - Add tracking code
   - Set up goals
   - Monitor traffic

3. **Add Real Images**
   - Optimize all images
   - Add descriptive alt text
   - Use WebP format

4. **Enable HTTPS**
   - Install SSL certificate
   - Redirect HTTP to HTTPS

5. **Set up Google My Business**
   - Create business listing
   - Add location and hours
   - Collect reviews

6. **Build Backlinks**
   - Submit to directories
   - Create quality content
   - Partner with local businesses

---

## Support

For SEO questions or improvements, refer to:
- Google Search Central: https://developers.google.com/search
- Schema.org: https://schema.org/
- Moz SEO Guide: https://moz.com/beginners-guide-to-seo

---

**Last Updated**: 2025-10-17
**Version**: 1.0
