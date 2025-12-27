# Google Maps Integration Setup Guide

## Overview

Shree Morya Cabs website now includes interactive Google Maps showing:
- **Service Area Map**: All Pune localities served with interactive markers
- **Route Maps**: Turn-by-turn directions from pickup to NMIA
- **Embedded Maps**: Simple route visualization without API complexity

---

## Quick Start (3 Options)

### Option 1: Full Interactive Maps (Recommended)
**Best for:** Maximum features, interactive markers, real-time directions
**Requires:** Google Maps API Key
**Cost:** Free up to 28,000 map loads/month

### Option 2: Static Map Images
**Best for:** No API key needed, fast loading
**Limitation:** Not interactive, clicking opens Google Maps in new tab
**Cost:** Free (already implemented as fallback)

### Option 3: Embed iframes
**Best for:** Quick implementation
**Limitation:** Limited customization
**Cost:** Free with restrictions

---

## Setting Up Google Maps API Key (Option 1 - Recommended)

### Step 1: Create Google Cloud Project

1. Go to **Google Cloud Console**: https://console.cloud.google.com
2. Click "Select a Project" → "New Project"
3. Project name: `shreemoryacabs-maps`
4. Click "Create"

### Step 2: Enable Required APIs

1. Go to **APIs & Services** → **Library**
2. Enable these APIs:
   - ✅ **Maps JavaScript API** (for interactive maps)
   - ✅ **Maps Embed API** (for iframe embeds)
   - ✅ **Directions API** (for route calculations)
   - ✅ **Places API** (optional: for location autocomplete)
   - ✅ **Maps Static API** (optional: for fallback images)

### Step 3: Create API Key

1. Go to **APIs & Services** → **Credentials**
2. Click **+ Create Credentials** → **API Key**
3. Copy the API key (looks like: `AIzaSyB...xyz123`)
4. Click **Edit API key** to restrict it

### Step 4: Restrict API Key (IMPORTANT - Security)

**Application Restrictions:**
1. Select "HTTP referrers (websites)"
2. Add website referrers:
   ```
   https://shreemoryacabs.hello-22d.workers.dev/*
   http://localhost:4321/*  (for local development)
   ```

**API Restrictions:**
1. Select "Restrict key"
2. Check only the APIs you enabled:
   - Maps JavaScript API
   - Maps Embed API
   - Directions API
   - Maps Static API

3. Click **Save**

### Step 5: Enable Billing (Required but FREE)

1. Go to **Billing** → **Link a billing account**
2. Add credit card (for verification only)
3. **You won't be charged** until you exceed:
   - 28,000 map loads/month (free tier)
   - 40,000 Directions API calls/month (free tier)

**Cost estimate for Shree Morya Cabs:**
- Expected traffic: 5,000-10,000 map loads/month
- **Monthly cost: ₹0** (well within free tier)

### Step 6: Add API Key to Project

#### Method A: Environment Variables (Recommended)

1. Create `.env` file in project root:
```bash
PUBLIC_GOOGLE_MAPS_API_KEY=AIzaSyB...your-actual-key...xyz123
```

2. Add to `.gitignore`:
```
.env
.env.local
```

3. Update map components:
Replace `YOUR_API_KEY` with `import.meta.env.PUBLIC_GOOGLE_MAPS_API_KEY`

#### Method B: Direct Replacement (Quick but less secure)

Find and replace in these files:
- `src/components/maps/ServiceAreaMap.astro`
- `src/components/maps/RouteMap.astro`
- `src/components/maps/EmbeddedRouteMap.astro`

Replace:
```javascript
script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initServiceMap';
```

With:
```javascript
script.src = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyB...your-key...xyz123&callback=initServiceMap';
```

---

## Testing the Integration

### 1. Test Local Development

```bash
npm run dev
```

Visit:
- http://localhost:4321/service-areas-map (full service area map)
- http://localhost:4321/routes/pune-to-navi-mumbai-airport (route map)
- http://localhost:4321/ (homepage with embedded map)

**Expected result:**
- ✅ Interactive map loads with green/blue markers
- ✅ Clicking markers shows info windows with "Book Now" button
- ✅ Route displays as green line from Pune to NMIA

**Common Issues:**
- ❌ "Google is not defined" → API key not loaded, check console
- ❌ "RefererNotAllowedMapError" → Add localhost to API key restrictions
- ❌ Blank map → Wrong API key or billing not enabled

### 2. Test Production Deployment

```bash
npm run build
npx wrangler deploy
```

Visit: https://shreemoryacabs.hello-22d.workers.dev/service-areas-map

**Expected result:**
- Same as local, but faster (cached)

---

## Map Components Usage

### Component 1: ServiceAreaMap

**Use on:** `/service-areas-map` page, homepage
**Features:** Shows all Pune service localities with markers

```astro
---
import ServiceAreaMap from "@/components/maps/ServiceAreaMap.astro";
---

<ServiceAreaMap height="600px" showRoute={true} />
```

**Props:**
- `height`: Map container height (default: "500px")
- `showRoute`: Show sample route line (default: false)

### Component 2: RouteMap

**Use on:** Route detail pages (`/routes/pune-to-navi-mumbai-airport`)
**Features:** Interactive directions with distance/duration

```astro
---
import RouteMap from "@/components/maps/RouteMap.astro";
---

<RouteMap
  origin="Hinjewadi, Pune"
  destination="Navi Mumbai International Airport"
  originCoords={{ lat: 18.5913, lng: 73.7389 }}
  destinationCoords={{ lat: 19.0896, lng: 73.0291 }}
  height="450px"
  showDirections={true}
/>
```

**Props:**
- `origin`: Origin address (string)
- `destination`: Destination address (string)
- `originCoords`: { lat, lng } object
- `destinationCoords`: { lat, lng } object
- `height`: Map height
- `showDirections`: Show distance/duration panel (default: true)

### Component 3: EmbeddedRouteMap

**Use on:** Blog posts, simple route displays
**Features:** Static map with link to Google Maps (no API key)

```astro
---
import EmbeddedRouteMap from "@/components/maps/EmbeddedRouteMap.astro";
---

<EmbeddedRouteMap
  origin="Wakad, Pune"
  destination="Navi Mumbai International Airport"
  height="400px"
  mode="directions"
/>
```

**Props:**
- `origin`: Origin address
- `destination`: Destination address
- `height`: Map height
- `mode`: "directions" | "place" | "view"

---

## Coordinates Reference

Common Pune pickup locations:

```javascript
const locations = {
  hinjewadi: { lat: 18.5913, lng: 73.7389 },
  wakad: { lat: 18.5974, lng: 73.7679 },
  baner: { lat: 18.5590, lng: 73.7864 },
  aundh: { lat: 18.5590, lng: 73.8073 },
  kharadi: { lat: 18.5515, lng: 73.9475 },
  vimanNagar: { lat: 18.5679, lng: 73.9143 },
  magarpatta: { lat: 18.5157, lng: 73.9304 },
  hadapsar: { lat: 18.5089, lng: 73.9260 },
  kothrud: { lat: 18.5074, lng: 73.8077 },
  pimpriChinchwad: { lat: 18.6298, lng: 73.7997 },
  nmia: { lat: 19.0896, lng: 73.0291 },
  mumbaiAirport: { lat: 19.0896, lng: 72.8656 }
};
```

---

## Customization Options

### 1. Change Map Style (Brand Colors)

In `ServiceAreaMap.astro`, modify the `styles` array:

```javascript
styles: [
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#E0F2F1" }] // Light green water
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#10B981 }] // Green roads
  }
]
```

### 2. Custom Marker Icons

Replace default circle markers with custom images:

```javascript
const serviceIcon = {
  url: "/images/map-marker-green.png", // 32x32px PNG
  scaledSize: new google.maps.Size(32, 32),
  origin: new google.maps.Point(0, 0),
  anchor: new google.maps.Point(16, 32)
};
```

### 3. Add Clustering (for many markers)

Install MarkerClusterer:
```bash
npm install @googlemaps/markerclusterer
```

```javascript
import { MarkerClusterer } from "@googlemaps/markerclusterer";

const markers = [/* array of markers */];
new MarkerClusterer({ markers, map });
```

---

## Performance Optimization

### 1. Lazy Load Maps (Below Fold)

```astro
<div id="map-container" data-lazy-map>
  <!-- Map loads when scrolled into view -->
</div>

<script>
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Load map script here
        observer.unobserve(entry.target);
      }
    });
  });

  observer.observe(document.querySelector('[data-lazy-map]'));
</script>
```

### 2. Preconnect to Maps API

In `<head>`:
```html
<link rel="preconnect" href="https://maps.googleapis.com">
<link rel="dns-prefetch" href="https://maps.googleapis.com">
```

### 3. Cache API Response

Maps JavaScript API is automatically cached by browser. No action needed.

---

## Monitoring & Limits

### Track API Usage

1. Go to **Google Cloud Console** → **APIs & Services** → **Dashboard**
2. View metrics for:
   - Maps JavaScript API (map loads)
   - Directions API (route calculations)

**Expected usage (Month 1):**
- Map loads: 5,000-10,000/month (FREE)
- Directions API: 2,000-5,000/month (FREE)

### Set Budget Alerts

1. Go to **Billing** → **Budgets & alerts**
2. Create budget: ₹500/month
3. Set alert at 50%, 90%, 100%
4. You'll get email if usage spikes

**Realistic cost:** ₹0-100/month (well within free tier)

---

## Fallback Strategy (No API Key)

If you don't want to set up API key immediately, the site works without it:

1. **EmbeddedRouteMap component** uses static images
2. Clicking map opens Google Maps in new tab
3. All functionality preserved, just less interactive

**To use fallback mode:**
- Don't replace `YOUR_API_KEY` in components
- Maps will show static images with click-through to Google Maps

---

## SEO Benefits

Maps integration improves SEO by:

1. **Local Schema**: Maps show physical service area
2. **User Engagement**: Interactive maps increase time-on-site
3. **Rich Snippets**: Google may show map in search results
4. **Mobile UX**: Maps help users visualize routes (lower bounce rate)

**Expected impact:**
- +15-20% longer session duration
- +10% reduction in bounce rate
- Better local search rankings for "cab Pune to NMIA"

---

## Troubleshooting

### Issue 1: "Google is not defined"

**Cause:** Maps API script not loaded
**Fix:**
```javascript
// Ensure script loads before initialization
window.initServiceMap = initServiceMap;
```

### Issue 2: "RefererNotAllowedMapError"

**Cause:** API key restrictions don't include your domain
**Fix:** Add domain to API key restrictions in Cloud Console

### Issue 3: Blank map with no errors

**Cause:** Billing not enabled on Google Cloud
**Fix:** Enable billing (you won't be charged within free tier)

### Issue 4: Map loads slowly

**Cause:** Loading on page load
**Fix:** Implement lazy loading (see Performance section)

---

## Next Steps

1. **This Week:**
   - [ ] Create Google Cloud project
   - [ ] Enable Maps APIs
   - [ ] Get API key
   - [ ] Add to `.env` file
   - [ ] Test locally

2. **Next Week:**
   - [ ] Deploy to production
   - [ ] Test on live site
   - [ ] Monitor usage in Cloud Console
   - [ ] Set up budget alerts

3. **Month 1:**
   - [ ] Track user engagement (Google Analytics)
   - [ ] Optimize map loading performance
   - [ ] Add more pickup locations if needed

---

## Cost Breakdown

### Free Tier (Monthly):
- **Maps JavaScript API:** 28,000 loads
- **Directions API:** 40,000 requests
- **Maps Static API:** 28,000 images

### Expected Usage (Shree Morya Cabs):
- **Maps JavaScript API:** 8,000 loads
- **Directions API:** 3,000 requests
- **Maps Static API:** 1,000 images

### Estimated Cost: **₹0/month** ✅

### If You Exceed Free Tier:
- Maps loads: ₹4/1,000 loads
- Worst case (50,000 loads): ₹88/month

---

## Resources

- **Google Maps Platform Docs**: https://developers.google.com/maps/documentation
- **API Key Best Practices**: https://developers.google.com/maps/api-security-best-practices
- **Pricing Calculator**: https://mapsplatform.google.com/pricing/
- **Code Samples**: https://developers.google.com/maps/documentation/javascript/examples

---

**Questions?**
- Email: support@shreemoryacabs.com
- WhatsApp: +91 91454 99009

**Document Version:** 1.0
**Last Updated:** December 26, 2025
