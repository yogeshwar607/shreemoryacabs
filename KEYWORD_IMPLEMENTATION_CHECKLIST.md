# Shree Morya Cabs Keyword Strategy - Implementation Checklist

## Quick Reference: Top 25 Keywords to Target

### Tier 1: Critical (Highest ROI)
- [ ] ev cabs pune - Homepage, landing pages
- [ ] electric cab pune - /electric-cab-pune, homepage
- [ ] cheapest ev cab pune - Homepage hero, /ev-cabs-pune
- [ ] pune to mumbai cab - Route pages
- [ ] airport transfer pune - Airport pages
- [ ] 7 seater cab pune - Vehicle pages
- [ ] electric taxi pune - /ev-taxi-pune, homepage
- [ ] pune airport cab - /pune-airport-cab-service
- [ ] hinjewadi cab - (NEW LOCATION PAGE)
- [ ] wakad electric taxi - (NEW LOCATION PAGE)

### Tier 2: High Value (Good Volume + Intent)
- [ ] book electric cab pune - CTA pages, blog
- [ ] electric cab cost pune - Blog/pricing pages
- [ ] ev cab booking pune - Homepage, CTAs
- [ ] 24/7 electric cab service - Homepage
- [ ] green cab pune - Body content
- [ ] zero emission taxi pune - Body content
- [ ] luxury electric cab - Vehicle pages
- [ ] kia carens ev pune - Vehicle pages
- [ ] byd emax 7 cab - Vehicle pages
- [ ] electric cab airport transfer - Airport pages
- [ ] hinjewadi to mumbai airport - Route pages
- [ ] wakad to mumbai airport - Route pages
- [ ] best electric cab service - Blog/comparison
- [ ] reliable ev taxi pune - Body content
- [ ] professional electric cab - Body content

---

## Phase 1: HOMEPAGE OPTIMIZATION (2-3 hours)

### Current Homepage Strengths
- Meta title is keyword-rich
- Good keyword distribution
- Proper use of H1/H2 structure
- 67 mentions of "Pune" (excellent)
- 24 mentions of "electric cab" (good)

### Action Items

#### 1. Homepage H2 Tag Optimization
**Location:** `/src/pages/index.astro`

**Current H2s to Enhance:**
```
CURRENT: "Why Choose Electric Cabs in Pune"
ACTION: Add LSI - "Why Choose Shree Morya Cabs: Premium 7-Seater Electric Taxi Service"
KEYWORDS ADDED: 7-seater, electric taxi, service

CURRENT: "Our Fleet of Premium Electric Vehicles"
ACTION: Enhance - "Our Fleet: Cheap 7-Seater Electric Cabs & Eco-Friendly Taxis"
KEYWORDS ADDED: cheap, 7-seater, eco-friendly

CURRENT: "Book Now"
ACTION: Enhance - "Book Cheapest EV Cab in Pune - 24/7 Electric Taxi Service"
KEYWORDS ADDED: cheapest, EV cab, 24/7

CURRENT: "Frequently Asked Questions"
ACTION: Expand - "FAQs About EV Cabs Pune: Pricing, Booking, Fleet Details"
KEYWORDS ADDED: pricing, booking, fleet
```

#### 2. Homepage Opening Paragraph
**Current:** (Verify and enhance)
**Target:** Natural inclusion of "cheapest", "7-seater", "24/7"

**Recommendation:**
```
Old: "Book premium electric cabs in Pune with Shree Morya Cabs..."
New: "Book the cheapest premium electric cabs in Pune with Shree Morya Cabs.
Our fleet of 7-seater electric vehicles (Kia Carens EV & BYD E-MAX 7)
provides eco-friendly, reliable taxi service 24/7 across Pune, Mumbai,
and all three airports. Available for airport transfers, corporate travel,
and long-distance routes starting at ₹2,999."
```

**Keywords added:**
- cheapest (cost angle)
- 7-seater (vehicle detail)
- 24/7 (availability)
- electric vehicles (variant)
- eco-friendly (LSI)
- airports (location variation)

#### 3. CTA Button Text Updates
**Location:** All CTA buttons across page

**Current → Recommended:**
```
"Book EV Cab" → "Book Cheapest EV Cab Now"
"Get Quote" → "Get EV Taxi Quote (Free)"
"Call Us" → "Call 24/7 Electric Cab Service"
"WhatsApp" → "Book via WhatsApp - Fast EV Taxi Booking"
```

#### 4. Image Alt Tags Enhancement
**Location:** All vehicle/service images

**Current:** `kia-carens-ev.jpg`
**Recommended Alt:**
```
"Kia Carens EV - 7-seater electric cab Pune - cheapest rates ₹18/km"
```

**Implementation for 5-10 images:**
- Kia image: "7-seater electric cab Pune - Kia Carens EV with premium features"
- BYD image: "Luxury electric taxi Pune - BYD E-MAX 7 with extended range"
- Fleet image: "Shree Morya Cabs electric vehicle fleet - eco-friendly cabs"
- Service image: "24/7 electric cab service Pune - professional drivers"
- Airport transfer: "Airport transfer electric cab Pune - reliable EV taxi"

#### 5. Homepage Meta Description Update
**Current:** (Verify)
**Recommended:**
```
"Book cheapest EV cabs in Pune from ₹2,999. 7-seater electric taxis
with 24/7 service. Pune to Mumbai, airport transfers, no surge pricing.
Professional drivers, eco-friendly. WhatsApp or call now!"
```

**Keywords:** cheapest, EV cabs, 7-seater, electric taxis, 24/7, Pune to Mumbai, airport transfers

---

## Phase 2: FAQ EXPANSION (30-45 minutes)

### Expand from Current 10 Questions to 25-30

**Location:** `/src/pages/index.astro` - FAQ section

**New Questions to Add (Group by category):**

#### Category A: Pricing & Cost (Add 5)
1. "What's the cheapest electric cab rate in Pune?"
2. "How much does an electric taxi cost from Pune to Mumbai?"
3. "Are there any hidden charges in your electric cab pricing?"
4. "Does Shree Morya Cabs offer discount for advance bookings?"
5. "Is your pricing cheaper than GrEL and other EV services?"

#### Category B: Booking & Availability (Add 5)
6. "How do I book an electric cab online in Pune?"
7. "Can I book a 7-seater electric taxi for a group?"
8. "Do you provide 24/7 electric cab service?"
9. "How far in advance should I book?"
10. "Can I cancel my electric cab booking for free?"

#### Category C: Service Features (Add 5)
11. "What features do your electric cabs have?"
12. "Are your electric taxis comfortable for long drives?"
13. "Do you provide meet and greet service at airports?"
14. "Can I make multiple stops during my journey?"
15. "Is there WiFi or charging ports in the electric cab?"

#### Category D: Reliability & Safety (Add 4)
16. "Are electric cabs reliable for Pune-Mumbai trips?"
17. "What's the safety rating of your electric vehicles?"
18. "How experienced are your drivers?"
19. "Do you track flights for airport pickups?"

#### Category E: Vehicle Types (Add 3)
20. "What's the difference between Kia Carens EV and BYD E-MAX 7?"
21. "How many people can fit in your electric cabs?"
22. "What's the luggage space in your vehicles?"

#### Category F: Special Services (Add 3)
23. "Do you provide corporate invoicing for business travel?"
24. "Can I book an electric cab for a special event?"
25. "Do you offer monthly plans for frequent travelers?"

**Implementation Format:**
```
Add to FAQ schema:
{
  "question": "What's the cheapest electric cab rate in Pune?",
  "answer": "Shree Morya Cabs offers the cheapest EV cab rates in Pune starting at ₹2,999 for local trips and ₹3,700 for Pune-Mumbai journeys. Our 7-seater electric taxis (Kia Carens EV & BYD E-MAX 7) provide transparent pricing with no surge charges, hidden fees, or commissions—far cheaper than app-based alternatives."
}
```

---

## Phase 3: LOCATION PAGES CREATION (HIGH PRIORITY)

### Create 3 New Location Pages

#### Page 1: Hinjewadi EV Cab Service
**File:** `/src/pages/hinjewadi-ev-cab-service.astro`
**URL:** `/hinjewadi-ev-cab-service`
**Status:** PRIORITY 1

**SEO Elements:**
```
Title: "Hinjewadi EV Cab Service | Cheapest Electric Taxi to Airport ₹800"
Meta: "Book electric cab in Hinjewadi for Mumbai/Pune airports.
7-seater EV taxis for IT professionals, families. Cheapest rates, 24/7 service.
WhatsApp booking available."
H1: "Electric Cab in Hinjewadi | Best EV Taxi Service for Airport Transfers"
```

**Sections to Include:**
1. Quick intro + pricing banner
2. Why Hinjewadi residents choose Shree Morya Cabs
3. Popular routes from Hinjewadi:
   - Hinjewadi → Mumbai Airport (30km, ₹800-900)
   - Hinjewadi → Navi Mumbai Airport (25km, ₹700-800)
   - Hinjewadi → Pune Airport (45km, ₹800-900)
   - Hinjewadi → Pune city (various rates)
4. IT Park pickup points
5. Fleet features for Hinjewadi travelers
6. Testimonials from Hinjewadi professionals
7. Booking process (WhatsApp, phone)
8. FAQ specific to Hinjewadi
9. Local landmarks (TCS, Infosys, Cognizant, etc.)

**Keywords to Target:**
- hinjewadi ev cab, hinjewadi electric taxi
- hinjewadi to mumbai airport cab, hinjewadi airport transfer
- hinjewadi it park transport, hinjewadi professional cab
- cheapest hinjewadi airport taxi
- hinjewadi 24/7 cab service

**Word Count Target:** 2,500-3,000 words

---

#### Page 2: Wakad Electric Taxi Service
**File:** `/src/pages/wakad-electric-cab-service.astro`
**URL:** `/wakad-electric-cab-service`
**Status:** PRIORITY 1

**SEO Elements:**
```
Title: "Wakad Electric Taxi | Cheapest EV Cab to Airport ₹700 | 24/7"
Meta: "Book electric cab in Wakad for airport transfers & outstation trips.
Cheapest EV taxi rates, 7-seater vehicles, professional service.
Available 24/7 for Wakad residents."
H1: "Electric Taxi in Wakad | Affordable EV Cab Service 24/7"
```

**Popular Routes:**
- Wakad → Mumbai Airport (35km, ₹700-800)
- Wakad → Pune Airport (30km, ₹700-800)
- Wakad → Mumbai city

**Keywords:** wakad electric cab, wakad ev taxi, wakad airport transfer, wakad to mumbai

**Word Count Target:** 2,500 words

---

#### Page 3: Baner Cab Service
**File:** `/src/pages/baner-electric-cab-service.astro`
**URL:** `/baner-electric-cab-service`
**Status:** PRIORITY 2

**Similar structure to Hinjewadi and Wakad pages**

**Keywords:** baner cab, baner electric taxi, baner airport transfer

**Word Count Target:** 2,000-2,500 words

---

## Phase 4: EXISTING PAGE ENHANCEMENTS (4-6 hours)

### Update Key Existing Pages

#### Page: `/ev-cabs-pune` (2-seater vehicle page)
**Current Status:** 8/10
**Target Status:** 9.5/10

**Actions:**
```
1. Enhance opening with "cheapest" keyword
   Add: "Book the cheapest 7-seater electric cabs in Pune..."

2. Add H2: "Cheapest EV Cab Rates in Pune - Transparent Pricing"
   Include pricing table vs competitors

3. Expand FAQ from 5 to 15 questions
   Add voice search variations

4. Add section: "Why Shree Morya Cabs is Cheaper Than Alternatives"
   Include cost comparison data

5. Update internal links to new location pages
   Link to: hinjewadi, wakad, baner pages

6. Add schema: PriceSpecification markup
   Show current rates clearly

7. Expand from 2,500 to 3,000+ words
   Add: fleet details, testimonials, booking steps
```

**Time Estimate:** 2 hours

---

#### Page: `/ev-taxi-pune` (Alternative phrasing page)
**Current Status:** 7/10
**Target Status:** 9/10

**Actions:**
```
1. Add location variations to H2s
   Update: "Best EV Taxi Service in Hinjewadi & Wakad, Pune"

2. Expand service descriptions
   Add: "7-seater electric taxi", "luxury eco-friendly taxi"

3. Add location-specific sections
   Include: Hinjewadi, Wakad, Baner service details

4. Enhance FAQ
   Target: "What's the best electric taxi in Pune?"
   Include voice search questions

5. Add comparison section
   "EV Taxi vs Other Transportation Methods"

6. Add internal links to location pages

7. Expand from 2,000 to 2,500+ words
   Add: feature details, booking guide, safety info
```

**Time Estimate:** 1.5 hours

---

#### Pages: `/airport/mumbai-airport`, `/airport/pune-airport`, `/airport/navi-mumbai-airport`
**Current Status:** 7-8/10
**Target Status:** 9/10

**Actions per Airport Page:**
```
1. Expand opening with multiple keywords
   Add: "24/7 electric cab", "reliable airport transfer", "fixed rates"

2. Add location-based route sections
   Expand with: Hinjewadi, Wakad, Baner pickup details

3. Enhance FAQ
   Add: "How do I identify my electric cab at airport?"
   Add: "What if my flight is delayed?"
   Add voice search questions

4. Add special features section
   Highlight: Flight tracking, meet & greet, luggage assistance

5. Add pricing tables
   Show: rates from all major locations

6. Update internal links
   Link to: location pages, vehicle pages, routes

7. Expand from 2,500 to 3,000+ words
   Add: terminal-specific info, parking details, timing tips
```

**Time Estimate:** 2 hours for all 3 pages

---

#### Page: `/routes/pune-mumbai` (Most Popular Route)
**Current Status:** 8/10
**Target Status:** 9.5/10

**Actions:**
```
1. Add "cheapest" to opening
   Update: "Book the cheapest electric cab from Pune to Mumbai"

2. Create pricing comparison section
   Show: Shree Morya Cabs vs competitors vs diesel cabs

3. Add voice search FAQ
   "How much does EV cab from Pune to Mumbai cost?"
   "How long is the drive?"
   "Are electric cabs reliable?"

4. Expand "why electric" section
   Add: comfort comparison, eco-impact data

5. Add location-based variations
   "Booking from Hinjewadi/Wakad/Baner to Mumbai"

6. Add testimonials from this route

7. Expand from 2,000 to 2,500+ words
```

**Time Estimate:** 1 hour

---

## Phase 5: BLOG CONTENT ROADMAP (HIGH PRIORITY)

### New Blog Posts to Publish (8-12 posts over 2-3 months)

#### High Priority (Publish First 3)

##### Blog 1: "Cheapest Electric Cab Pune: Complete Price Comparison 2025"
**Keywords:** cheapest electric cab, ev cab cost, affordable, price comparison
**LSI:** price comparison, budget cabs, cost analysis, rates
**Word Count:** 2,500-3,000
**Sections:**
- Opening: Shree Morya Cabs rates vs competitors
- Pricing comparison table
- Hidden costs other services charge
- Why Shree Morya Cabs is cheaper
- Booking tips to save money
- FAQ

**Time to Write:** 3-4 hours
**Publish:** Week 1

---

##### Blog 2: "How to Book Electric Cab in Pune: Complete Guide (Voice Search Optimized)"
**Keywords:** how to book, booking guide, step-by-step, voice search
**LSI:** book online, instant booking, advance reservation, 24/7 booking
**Word Count:** 2,000-2,500
**Sections:**
- Traditional booking (WhatsApp, phone)
- Online booking step-by-step
- Advance vs instant booking
- Payment options
- Cancellation policy
- FAQ answered in Q&A format

**Time to Write:** 3 hours
**Publish:** Week 1-2

---

##### Blog 3: "Hinjewadi to Mumbai Airport: Electric Cab Guide for IT Professionals"
**Keywords:** hinjewadi to mumbai airport, it professionals, transport, cab guide
**LSI:** airport transfer, professional transport, reliable service, cheapest fares
**Word Count:** 2,500
**Sections:**
- Route overview (distance, time, cost)
- Best times to travel
- Pickup points in Hinjewadi
- Tips for business travelers
- Comparison with other transport
- Testimonials from Hinjewadi professionals

**Time to Write:** 3-4 hours
**Publish:** Week 2-3

---

#### Medium Priority (Next 3)

##### Blog 4: "Is Electric Cab Reliable for Pune-Mumbai? Real Data from 50,000+ Trips"
**Keywords:** reliable, electric cab, long distance, safety, data
**Focus:** Addressing skepticism about EV reliability

**Blog 5: "7-Seater vs 5-Seater Electric Cab: Which Should You Choose?"
**Keywords:** 7-seater, 5-seater, vehicle comparison, family travel
**Focus:** Vehicle choice guide with comparisons

**Blog 6: "Monsoon Travel: Why Electric Cabs Are Better Than Diesel Taxis"
**Keywords:** monsoon, safety, electric cabs, seasonal
**Focus:** Seasonal content (publish in May-June)

---

#### Lower Priority (Remaining)

- "Zero Emission Commitment: Carbon Saved by Shree Morya Cabs"
- "Kia Carens EV vs BYD E-MAX 7: Detailed Comparison"
- "24/7 Electric Cab Service: Why Availability Matters"
- "Corporate Travel: Why Companies Choose Shree Morya Cabs"
- "Multi-Stop Journeys: Book Electric Cab with Multiple Destinations"
- "Annual Rental Plans: Save 20% on EV Cabs"
- "Wakad to Mumbai Airport: Electric Cab Guide"
- "Best Time to Book Electric Cab: Peak Hours & Traffic Analysis"

---

## Phase 6: INTERNAL LINKING STRATEGY

### Create Keyword-Rich Internal Links

**From Homepage to:**
- `/ev-cabs-pune` - Anchor: "Cheapest EV Cabs in Pune"
- `/ev-taxi-pune` - Anchor: "Electric Taxi Service"
- `/hinjewadi-ev-cab-service` - Anchor: "EV Cab in Hinjewadi"
- `/wakad-electric-cab-service` - Anchor: "Wakad Electric Taxi"
- `/airport/pune-airport` - Anchor: "Pune Airport Electric Cab"
- `/routes/pune-mumbai` - Anchor: "Pune to Mumbai EV Cab"

**From Route Pages to:**
- Location pages (Hinjewadi, Wakad, etc.)
- Vehicle pages (Kia, BYD)
- Airport pages

**From Blog Posts to:**
- Main service pages
- Vehicle pages
- Location pages
- Other blog posts (topical clusters)

**Link Density:** 5-7 internal links per page maximum

---

## Phase 7: SCHEMA MARKUP IMPLEMENTATION

### Add Structured Data (Mandatory)

#### 1. Update FAQ Schema
**File:** `/src/pages/index.astro`
**Add:** All 25-30 new FAQ questions to schema markup
**Format:** Use existing `generateFAQSchema()` function
**Time:** 30 minutes

---

#### 2. Add Price Schema
**Location:** Price sections on all pages
**Example:**
```json
{
  "@context": "https://schema.org",
  "@type": "PriceSpecification",
  "priceCurrency": "INR",
  "price": "3700",
  "description": "Pune to Mumbai electric cab - all-inclusive pricing"
}
```

**Apply to:**
- Homepage pricing section
- Route pages
- Location pages

**Time:** 1 hour for all pages

---

#### 3. Location Schema for Location Pages
**Add to:** Each location page (Hinjewadi, Wakad, Baner, etc.)
**Include:**
- Service area coordinates
- Local landmarks
- Nearby pickup points
- Service hours (24/7)

**Time:** 30 minutes per page

---

## Phase 8: IMAGE OPTIMIZATION

### Update Alt Tags on 10-15 Images

**Current vs Recommended:**

| Image | Current Alt | Recommended Alt | Keywords Added |
|-------|------------|-----------------|---|
| kia-carens.jpg | "Kia Carens EV" | "Kia Carens EV - 7-seater electric cab Pune with ₹3,700 fixed rates" | 7-seater, electric cab, fixed rates |
| byd-emax.jpg | "BYD E-MAX 7" | "BYD E-MAX 7 - Luxury electric taxi Pune with 530+ km range" | luxury, electric taxi, range |
| homepage-hero.jpg | "Shree Morya Cabs" | "Shree Morya Cabs - Book cheapest electric cab in Pune, 24/7 service" | cheapest, 24/7 |
| airport-transfer.jpg | "Airport" | "Airport transfer electric cab Pune - reliable EV taxi to Mumbai Airport" | airport transfer, reliable, Mumbai Airport |
| hinjewadi.jpg | "Hinjewadi" | "Hinjewadi EV cab service - electric taxi for IT professionals" | hinjewadi, IT professionals |

**Time:** 1-2 hours for all images
**Impact:** Better image SEO + accessibility

---

## Phase 9: TITLE & META DESCRIPTION AUDIT

### Update Meta Elements (Critical for CTR)

#### Homepage
**Current:** (Verify)
**Recommended:** "EV Cabs Pune | Cheapest Electric Taxi ₹2,999 | Book 24/7 | ₹500 Cheaper than Competitors"
**Length:** 110 characters (optimal)
**Keywords:** EV cabs, cheapest, electric taxi, 24/7, cheaper

#### `/ev-cabs-pune`
**Current:** "Electric SUV Cab Pune | 7 Seater EV Cabs | Cheapest Rates ₹2,999 | 24/7"
**Status:** ✓ GOOD (Keep as-is)

#### `/ev-taxi-pune`
**Current:** (Verify)
**Recommended:** "Best EV Taxi Service Pune | 7-Seater Electric Cabs | Airport Transfers | Book Now"

#### `/hinjewadi-ev-cab-service`
**Recommended:** "Hinjewadi EV Cab Service | Electric Taxi to Airport ₹800 | IT Park Transport"

#### `/wakad-electric-cab-service`
**Recommended:** "Wakad Electric Taxi | Cheapest EV Cab to Airport ₹700 | 24/7 Booking"

#### `/airport/pune-airport`
**Current:** (Verify)
**Recommended:** "Pune Airport Electric Cab | EV Taxi Transfer | Book 24/7 | Fixed Rates"

#### `/airport/mumbai-airport`
**Current:** (Verify)
**Recommended:** "Mumbai Airport Electric Cab | Pune-Mumbai Transfers | Reliable 24/7 EV Taxi"

**Time:** 2 hours for all pages
**Impact:** 10-20% improvement in CTR from search results

---

## Phase 10: KEYWORD TRACKING SETUP

### Set Up Monthly Monitoring

#### Google Search Console Tracking
**Monitor these keyword groups:**
1. "ev cab" family (5 keywords)
2. "electric cab" family (5 keywords)
3. "airport transfer" family (5 keywords)
4. "location" keywords (Hinjewadi, Wakad, etc. - 10 keywords)
5. "cheapest" family (3 keywords)

**Track metrics:**
- Impressions (monthly)
- Clicks (monthly)
- Average position (monthly)
- Click-through rate (monthly)
- New keywords appearing

**Reporting:** Monthly dashboard

---

#### Ahrefs Rank Tracker (Recommended)
**30-50 keywords to track:**
- 10 Tier 1 keywords (high priority)
- 15 Tier 2 keywords (medium priority)
- 25 Tier 3 keywords (long-tail)

**Report frequency:** Weekly rankings, monthly analysis
**Time:** 15 minutes/week to review

---

## Implementation Timeline

### Week 1: Quick Wins (10-12 hours)
- [ ] Optimize homepage H2 tags (1 hour)
- [ ] Enhance image alt tags (1.5 hours)
- [ ] Update CTA button text (30 minutes)
- [ ] Expand FAQ to 25 questions (1 hour)
- [ ] Update meta descriptions (2 hours)
- [ ] Setup rank tracking (1 hour)
- [ ] Update internal links (2 hours)
- [ ] Publish blog post #1 (2-3 hours)

**Expected Impact:** +2-3% organic traffic, +5 positions average

---

### Week 2-3: Content Creation (15-20 hours)
- [ ] Create Hinjewadi location page (4 hours)
- [ ] Create Wakad location page (3.5 hours)
- [ ] Create Baner location page (3 hours)
- [ ] Publish blog post #2 (3 hours)
- [ ] Publish blog post #3 (3 hours)
- [ ] Update 3 existing pages (/ev-cabs-pune, /ev-taxi-pune, route pages) (4 hours)

**Expected Impact:** +5-8% organic traffic, rank for 10-15 new keywords

---

### Month 2: Expansion (20-25 hours)
- [ ] Publish 3-4 more blog posts (9-12 hours)
- [ ] Enhance airport pages (4-5 hours)
- [ ] Add schema markup (3-4 hours)
- [ ] Update route pages (4-5 hours)
- [ ] Keyword optimization audit (2-3 hours)

**Expected Impact:** +10-15% organic traffic, rank improvements across board

---

### Month 3: Authority & Polish (15-20 hours)
- [ ] Publish remaining blog posts (6-8 hours)
- [ ] Guest post outreach (4-5 hours)
- [ ] Update thin/underperforming pages (3-4 hours)
- [ ] Video content creation (2-3 hours)

**Expected Impact:** +15-20% organic traffic, top 10-15 positions for primary keywords

---

## Success Metrics

### Month 1 Goals
- [ ] No over-optimization detected
- [ ] Keyword density optimal (0.5-1.5% for primary)
- [ ] 10 new internal links created
- [ ] FAQ expanded to 25 questions
- [ ] 3 blog posts published
- [ ] 2-3% organic traffic increase

### Month 3 Goals
- [ ] 3 new location pages live
- [ ] 10 blog posts published
- [ ] Rankings improved for 15-20 keywords
- [ ] 10-15% organic traffic increase
- [ ] 30-40 new keywords ranking

### Month 6 Goals
- [ ] Top 10 positions for all Tier 1 keywords
- [ ] Top 3-5 positions for primary keywords
- [ ] 30-50% total organic traffic increase
- [ ] 100+ keywords ranking (various positions)
- [ ] 3-5x increase in organic conversions

---

## Quality Assurance Checklist

Before publishing any page:

- [ ] No keyword stuffing (read naturally)
- [ ] Primary keyword in title
- [ ] Primary keyword in first 100 words
- [ ] H1, H2, H3 hierarchy correct
- [ ] 2,000+ words (landing pages)
- [ ] 3-5 internal links added
- [ ] Images have keyword alt tags
- [ ] Meta description written (155-160 chars)
- [ ] Mobile responsive tested
- [ ] Page speed tested (>90 score)
- [ ] Schema markup present
- [ ] No broken links
- [ ] Conversion elements visible (CTA, phone, WhatsApp)

---

## Tools Needed

**Free/Included:**
- Google Search Console (rank tracking)
- Google Analytics 4 (traffic analysis)
- Google Trends (seasonal keywords)

**Paid (Optional but Recommended):**
- Ahrefs Rank Tracker (₹5,000-10,000/month) - Best ROI
- SEMrush (₹10,000-15,000/month) - Content optimization
- Surfer SEO (₹5,000-8,000/month) - AI content analysis

**No Cost Required:** All content can be created using Astro framework + ChatGPT for blog research

---

**Document Version:** 1.0
**Created:** December 6, 2025
**Next Review:** January 6, 2026
**Owner:** Shree Morya Cabs Marketing Team
