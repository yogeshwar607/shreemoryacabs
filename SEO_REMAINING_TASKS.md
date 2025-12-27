# 📋 Remaining SEO Tasks - Priority Order

## Date: October 30, 2025

---

## 🔴 CRITICAL (Do This Week)

### 1. Update Business Address in Schema
**Time:** 5 minutes
**Impact:** HIGH - Required for Google Business Profile

**File:** `src/lib/seo.ts`

Replace placeholder with your actual address:

```typescript
// Line 21 & 175
streetAddress: 'YOUR ACTUAL STREET ADDRESS HERE',

// Line 24 & 178
postalCode: 'YOUR ACTUAL PIN CODE',
```

**Example:**
```typescript
streetAddress: 'Shop No 12, Hinjewadi IT Park Phase 1',
postalCode: '411057',
```

---

### 2. Create Google Business Profile
**Time:** 30 minutes
**Impact:** HIGH - Essential for local SEO

**Steps:**
1. Go to google.com/business
2. Click "Manage Now"
3. Enter business name: "Shree Morya Cabs"
4. Select category: "Taxi Service" or "Transportation Service"
5. Add location: Use same address from schema
6. Add phone: +91 74982 64215
7. Add website: https://shreemoryacabs.com
8. Add business hours: 24/7
9. Add service areas:
   - Pune
   - Mumbai
   - Hinjewadi
   - Wakad
   - Baner
   - (Add 10-15 more areas)
10. Upload photos:
    - Logo
    - Both vehicle photos
    - Team photo
    - Office photo (if any)

---

### 3. Create Missing Pages
**Time:** 2-3 hours
**Impact:** MEDIUM - Fixes broken internal links

#### `/src/pages/corporate.astro`
**Content to include:**
- Corporate EV cab packages
- Monthly billing options
- GST invoice details
- Volume discount tiers
- Priority booking benefits
- Dedicated account manager
- Sample pricing table
- Client testimonials
- Contact form

#### `/src/pages/events.astro`
**Content to include:**
- Event transportation services
- Wedding transportation
- Corporate event shuttles
- Conference transport
- Group travel packages
- Custom itineraries
- Sample routes
- Booking process

**Template:** Use existing pages as reference (copy from about.astro or routes/index.astro)

---

### 4. Add Real Vehicle Images
**Time:** 1 hour
**Impact:** HIGH - Visual appeal & SEO

**Steps:**
1. Create directory: `mkdir -p public/images/vehicles`
2. Take professional photos of your vehicles:
   - Kia Carens EV: Exterior 3/4 view, clean background
   - BYD E-MAX 7: Same angle, consistent lighting
3. Optimize images:
   - Size: 1200x675px (16:9 aspect ratio)
   - Format: JPG (better for photos)
   - Quality: 85%
   - File size: <200KB each
4. Name files exactly:
   - `kia-carens-ev.jpg`
   - `byd-emax-7.jpg`
5. Upload to `/public/images/vehicles/`

**If you don't have photos yet:**
- Use stock photos from Kia/BYD official sites
- Add watermark "Representative image"
- Replace with real photos ASAP

---

### 5. Start Review Collection
**Time:** Ongoing
**Impact:** HIGH - Trust signals & local SEO

**Action Plan:**
1. Email last 10-20 customers asking for Google reviews
2. Create Google Review link shortener:
   - Get your Google Maps listing URL
   - Add `?review=1` at the end
   - Use bitly or similar to create: shreemoryacabs.com/review
3. Add review request to post-trip WhatsApp message:
   ```
   Thanks for traveling with Shree Morya Cabs!
   Enjoyed your trip? Leave us a review: [link]
   ```
4. Target: 25 reviews in Month 1, 100 reviews in 6 months

---

## 🟠 HIGH PRIORITY (This Month)

### 6. Create Location-Specific Pages
**Time:** 4-6 hours
**Impact:** MEDIUM-HIGH - Local SEO rankings

Create these pages:
- `/src/pages/locations/hinjewadi-ev-cabs.astro`
- `/src/pages/locations/wakad-electric-taxi.astro`
- `/src/pages/locations/baner-ev-cab-service.astro`
- `/src/pages/locations/hadapsar-airport-transfer.astro`
- `/src/pages/locations/viman-nagar-electric-cab.astro`

**Template structure:**
```astro
---
// Each page should have:
- Local keywords in title/meta
- Map showing pickup area
- List of nearby IT parks/landmarks
- Popular routes from this area
- Local pricing
- Area-specific FAQs
- Photos of area (optional)
---
```

---

### 7. Optimize Images Site-Wide
**Time:** 30 minutes
**Impact:** MEDIUM - Page speed & SEO

**Current issues:**
- `og-image.png`: 99KB (reduce to <50KB)
- No WebP format support
- No lazy loading

**Actions:**
1. Optimize og-image:
   ```bash
   # Using TinyPNG (tinypng.com)
   # Or ImageOptim (Mac)
   # Or Squoosh (squoosh.app)
   ```

2. Add WebP versions:
   ```bash
   # Convert all PNG to WebP
   cwebp og-image.png -q 85 -o og-image.webp
   ```

3. Add lazy loading (future enhancement)

---

### 8. Create Content Blog
**Time:** 8-10 hours
**Impact:** MEDIUM-HIGH - Long-tail keywords

Create `/src/pages/blog/` with these articles:

1. **"Pune to Mumbai Airport: Complete Travel Guide 2025"**
   - Best routes
   - Timing recommendations
   - Cost comparison (EV vs regular cabs)
   - FAQs

2. **"10 Benefits of Choosing Electric Cabs Over Regular Taxis"**
   - Environmental impact
   - Cost savings
   - Comfort advantages
   - Future-proofing

3. **"Hinjewadi to Mumbai Airport: IT Professionals' Guide"**
   - Early morning pickups
   - Traffic patterns
   - Work-friendly features
   - Corporate packages

4. **"Mumbai Airport Terminal 1 vs Terminal 2: What You Need to Know"**
   - Airlines at each terminal
   - Pickup points
   - Drop-off locations
   - Travel time differences

5. **"Electric Vehicles for Corporate Travel: Complete Guide"**
   - Cost analysis
   - Environmental benefits
   - Corporate packages
   - GST billing

**SEO optimization:**
- Target long-tail keywords
- 1,500-2,500 words each
- Include FAQ schema
- Add internal links
- Use related keywords naturally

---

### 9. Build Local Citations
**Time:** 3-4 hours
**Impact:** MEDIUM - Local SEO authority

Submit business to these directories:

**India-specific:**
- [ ] JustDial
- [ ] Sulekha
- [ ] IndiaMART
- [ ] TradeIndia
- [ ] IndiaBizList

**General:**
- [ ] Bing Places
- [ ] Apple Maps
- [ ] Facebook Business
- [ ] Yelp
- [ ] Foursquare

**Ensure NAP consistency:**
- Name: Shree Morya Cabs
- Address: [Your address from schema]
- Phone: +91 74982 64215
- Website: https://shreemoryacabs.com

---

### 10. Create Comparison Pages
**Time:** 3-4 hours
**Impact:** MEDIUM - Competitive keywords

Create these pages:

1. **`/compare/electric-vs-regular-cabs`**
   - Cost comparison table
   - Environmental impact
   - Comfort comparison
   - Feature comparison
   - Real customer scenarios

2. **`/compare/shreemoryacabs-vs-ola-outstation`**
   - Pricing comparison
   - Zero surge benefit
   - Service quality
   - EV advantages
   - When to choose each

3. **`/compare/pune-mumbai-airport-transport-options`**
   - EV cab
   - Regular cab
   - Bus
   - Train
   - Private car
   - Pros/cons table

---

## 🟡 MEDIUM PRIORITY (Month 2-3)

### 11. Add Booking System
**Time:** 16-20 hours (or use third-party)
**Impact:** HIGH - User experience & conversions

**Options:**
1. **Simple form + email** (Quick - 2 hours)
2. **WhatsApp Business API** (Medium - 8 hours)
3. **Full booking system** (Complex - 20+ hours)

**Recommended:** Start with improved WhatsApp flow + booking form

---

### 12. Create Pricing Calculator
**Time:** 4-6 hours
**Impact:** MEDIUM - User engagement

**Features:**
- Select from/to locations
- Calculate distance
- Show pricing for both vehicles
- Include toll estimates
- Add special offers
- Generate quote PDF
- Easy share/save functionality

---

### 13. Add Live Chat
**Time:** 2 hours (setup third-party)
**Impact:** MEDIUM - Conversions

**Options:**
- Tawk.to (Free)
- Tidio (Free tier)
- Intercom (Paid)
- Custom WhatsApp widget

**Recommended:** Start with tawk.to (free, easy setup)

---

### 14. Implement FAQ Schema on All Service Pages
**Time:** 2-3 hours
**Impact:** MEDIUM - Rich snippets

**Currently have FAQ schema on:**
- Homepage ✅
- Main route pages ✅

**Need to add to:**
- All airport pages
- Fleet pages
- Service pages
- About page

---

### 15. Create Corporate Case Studies
**Time:** 4-6 hours
**Impact:** MEDIUM - B2B trust

**Content:**
- 3-5 corporate client success stories
- Cost savings achieved
- Environmental impact
- Employee satisfaction
- Before/after comparison

---

## 🟢 LOW PRIORITY (Quarter 2)

### 16. Video Content
- Vehicle walkthroughs
- Route guides
- Customer testimonials
- Behind-the-scenes

### 17. Advanced Features
- Real-time vehicle tracking
- In-app messaging
- Payment gateway
- Loyalty program
- Referral system

### 18. Multilingual Support
- Hindi translations
- Marathi translations
- URL structure: /hi/, /mr/

### 19. Progressive Web App
- Offline functionality
- Install prompt
- Push notifications

### 20. Advanced Analytics
- Heatmaps
- Session recordings
- A/B testing
- Conversion funnels

---

## 📊 Priority Matrix

| Task | Impact | Effort | Priority | Deadline |
|------|--------|--------|----------|----------|
| Update Address | HIGH | LOW | 🔴 CRITICAL | Today |
| Google Business | HIGH | MEDIUM | 🔴 CRITICAL | This Week |
| Missing Pages | MEDIUM | MEDIUM | 🔴 CRITICAL | This Week |
| Real Images | HIGH | LOW | 🔴 CRITICAL | This Week |
| Reviews | HIGH | LOW | 🔴 CRITICAL | Ongoing |
| Location Pages | HIGH | HIGH | 🟠 HIGH | Month 1 |
| Image Optimization | MEDIUM | LOW | 🟠 HIGH | Month 1 |
| Content Blog | HIGH | HIGH | 🟠 HIGH | Month 1 |
| Citations | MEDIUM | MEDIUM | 🟠 HIGH | Month 1 |
| Comparison Pages | MEDIUM | MEDIUM | 🟠 HIGH | Month 1 |

---

## ✅ WEEKLY CHECKLIST

### Week 1 (This Week):
- [ ] Update business address in schema
- [ ] Create Google Business Profile
- [ ] Upload 10 photos to GBP
- [ ] Create corporate.astro page
- [ ] Create events.astro page
- [ ] Add real vehicle photos OR use placeholder
- [ ] Start review collection (email 10 customers)

### Week 2-4 (Month 1):
- [ ] Create 5 location pages
- [ ] Write 2 blog posts
- [ ] Submit to 10 directories
- [ ] Collect 25 Google reviews
- [ ] Optimize all images
- [ ] Create comparison pages

### Month 2:
- [ ] Write 3 more blog posts
- [ ] Create pricing calculator
- [ ] Add live chat
- [ ] Corporate case studies
- [ ] 50 total Google reviews

### Month 3:
- [ ] Complete blog to 10 posts
- [ ] Advanced features planning
- [ ] 100 total Google reviews
- [ ] Rank #1-3 for target keywords

---

## 🎯 SUCCESS METRICS

Track these weekly:

1. **Google Search Console:**
   - Total impressions (target: +50% monthly)
   - Average position (target: <5 for main keywords)
   - CTR (target: >3%)

2. **Google Business Profile:**
   - Views per week (target: 1,000+)
   - Actions (calls, bookings, direction requests)
   - Review rating (maintain 4.8+)

3. **Website:**
   - Organic traffic (target: 1,000+/month by Month 3)
   - Bounce rate (target: <60%)
   - Avg. session duration (target: >3 min)

4. **Conversions:**
   - WhatsApp clicks (target: 5% of visitors)
   - Phone calls from site (target: 2% of visitors)
   - Booking form submissions (target: 3% of visitors)

---

**Remember:** SEO is a marathon, not a sprint. Focus on quality over quantity. One great page beats ten mediocre ones.

**Questions?** Review SEO_FIXES_COMPLETED.md for what's already done.
