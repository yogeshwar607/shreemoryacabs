# Week 1 Setup Guide: Technical Foundation

This guide provides step-by-step instructions for completing the external setups required for Week 1.

---

## ✅ Completed (Automated)

These tasks have been completed automatically:

1. **✓ robots.txt Updated** - All 10 new locality pages and 5 route pages added
2. **✓ WhatsApp Button Tracking** - GA4 event tracking added to WhatsAppButton component
3. **✓ .env Template** - Environment variable template created

---

## 🔧 Manual Setup Required

### Task 1: Google Analytics 4 Setup (15 minutes)

#### Step 1: Create GA4 Property

1. Go to [Google Analytics](https://analytics.google.com/)
2. Sign in with your Google account
3. Click **"Admin"** (gear icon in bottom left)
4. Under **"Account"**, select or create an account for Shree Morya Cabs
5. Under **"Property"**, click **"Create Property"**
6. Fill in the details:
   - **Property name:** Shree Morya Cabs
   - **Reporting time zone:** (GMT+05:30) India Time - Kolkata
   - **Currency:** Indian Rupee (₹)
7. Click **"Next"**
8. Select **"Transport and logistics"** as industry category
9. Select **"Medium"** as business size
10. Select **"Get baseline reports"** as objective
11. Click **"Create"**
12. Accept the Terms of Service

#### Step 2: Set Up Web Data Stream

1. After creating property, you'll see "Choose a platform"
2. Select **"Web"**
3. Enter website details:
   - **Website URL:** https://shreemoryacabs.com
   - **Stream name:** Shree Morya Cabs Website
4. Click **"Create stream"**
5. **Copy the Measurement ID** (format: G-XXXXXXXXXX)

#### Step 3: Configure Environment Variable

1. In your project directory, create a `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Open `.env` and replace the placeholder:
   ```
   PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
   (Replace `G-XXXXXXXXXX` with your actual Measurement ID)

3. Save the file

4. **IMPORTANT:** Add `.env` to `.gitignore` (it should already be there)

#### Step 4: Configure Enhanced Measurement (Recommended)

1. In GA4, go to **Admin → Data Streams**
2. Click on your web stream
3. Under **"Enhanced measurement"**, ensure these are enabled:
   - ✓ Page views (automatic)
   - ✓ Scrolls
   - ✓ Outbound clicks
   - ✓ Site search
   - ✓ File downloads
4. Click **"Save"**

#### Step 5: Create Custom Events (Optional but Recommended)

1. Go to **Admin → Events**
2. Click **"Create event"**
3. Create custom events for:
   - **whatsapp_click** (already tracked in code)
   - **phone_click** (for future phone number CTAs)

#### Step 6: Set Up Conversions

1. Go to **Admin → Events**
2. Find **"whatsapp_click"** in the events list
3. Toggle **"Mark as conversion"** to ON
4. This will track WhatsApp clicks as conversions

#### Step 7: Verify Tracking

1. Deploy your changes (see deployment section below)
2. Visit https://shreemoryacabs.com in a new incognito window
3. In GA4, go to **Reports → Realtime**
4. You should see your visit appear within 30 seconds
5. Click the WhatsApp button on the site
6. Check **Realtime → Events** to see "whatsapp_click" event

---

### Task 2: Google Search Console Setup (20 minutes)

#### Step 1: Add Property

1. Go to [Google Search Console](https://search.google.com/search-console)
2. Sign in with your Google account
3. Click **"Add Property"**
4. Choose **"URL prefix"** (recommended for this case)
5. Enter: `https://shreemoryacabs.com`
6. Click **"Continue"**

#### Step 2: Verify Ownership

You have multiple verification options. Choose ONE:

**Option A: HTML File Upload (Easiest)**
1. Download the verification HTML file
2. Upload to `/public/` folder in your project
3. Deploy the site
4. Click "Verify" in Search Console

**Option B: HTML Tag (Recommended)**
1. Copy the meta tag provided
2. Add it to `src/layouts/MainLayout.astro` in the `<head>` section
3. Deploy the site
4. Click "Verify" in Search Console

**Option C: DNS Record (For Domain Owners)**
1. Add the TXT record to your domain's DNS settings
2. Wait for DNS propagation (can take up to 48 hours)
3. Click "Verify" in Search Console

#### Step 3: Submit Sitemap

1. Once verified, in Search Console, go to **Sitemaps** (left sidebar)
2. Enter sitemap URL: `https://shreemoryacabs.com/sitemap-index.xml`
3. Click **"Submit"**
4. Wait 24-48 hours for Google to crawl the sitemap

#### Step 4: Request Indexing for New Pages

After sitemap submission, manually request indexing for priority pages:

1. Go to **URL Inspection** (left sidebar)
2. Enter each URL one by one:

**Locality Pages (10):**
- https://shreemoryacabs.com/electric-cab-service-ravet
- https://shreemoryacabs.com/electric-cab-service-pcmc
- https://shreemoryacabs.com/electric-cab-service-nigdi
- https://shreemoryacabs.com/electric-cab-service-pimple-saudagar
- https://shreemoryacabs.com/electric-cab-service-pimple-nilakh
- https://shreemoryacabs.com/electric-cab-service-aundh
- https://shreemoryacabs.com/electric-cab-service-balewadi
- https://shreemoryacabs.com/electric-cab-service-kothrud
- https://shreemoryacabs.com/electric-cab-service-hadapsar
- https://shreemoryacabs.com/electric-cab-service-viman-nagar

**Route Pages (5):**
- https://shreemoryacabs.com/routes/ravet-to-mumbai-airport
- https://shreemoryacabs.com/routes/pcmc-to-mumbai-airport
- https://shreemoryacabs.com/routes/aundh-to-mumbai-airport
- https://shreemoryacabs.com/routes/pimple-saudagar-to-mumbai-airport
- https://shreemoryacabs.com/routes/nigdi-to-mumbai-airport

**Important Pages (3):**
- https://shreemoryacabs.com/locations
- https://shreemoryacabs.com/routes
- https://shreemoryacabs.com

3. For each URL:
   - Click **"Request Indexing"**
   - Wait for confirmation
   - Move to next URL

**Note:** You can request indexing for ~10-15 URLs per day. If you hit the limit, continue the next day.

#### Step 5: Set Up Email Alerts

1. Go to **Settings** (left sidebar)
2. Click **"Users and permissions"**
3. Ensure your email is added
4. Go to **Settings → Email notifications**
5. Enable:
   - ✓ All critical issues
   - ✓ Manual actions
   - ✓ Core Web Vitals issues
   - ✓ Mobile usability issues

---

### Task 3: Deploy Changes (5 minutes)

#### Step 1: Build the Project

```bash
npm run build
```

Verify build completes successfully with all 91 pages.

#### Step 2: Deploy to Cloudflare Workers

```bash
npx wrangler deploy
```

#### Step 3: Verify Deployment

```bash
# Test robots.txt
curl -s https://shreemoryacabs.hello-22d.workers.dev/robots.txt | grep "electric-cab-service-ravet"

# Test WhatsApp button (should load without errors)
curl -s https://shreemoryacabs.hello-22d.workers.dev/ | grep "WhatsAppButton"
```

#### Step 4: Test in Browser

1. Visit https://shreemoryacabs.hello-22d.workers.dev
2. Open browser DevTools (F12)
3. Go to Network tab
4. Click WhatsApp button
5. Check for GA4 event in Network tab (look for google-analytics.com requests)

---

## 📊 Verification Checklist

Use this checklist to ensure everything is set up correctly:

### Google Analytics 4
- [ ] GA4 property created for Shree Morya Cabs
- [ ] Web data stream created
- [ ] Measurement ID copied
- [ ] .env file created with correct Measurement ID
- [ ] Enhanced measurement enabled
- [ ] whatsapp_click marked as conversion
- [ ] Real-time tracking verified (saw visit in Realtime report)
- [ ] WhatsApp click event tracked (saw event in Realtime → Events)

### Google Search Console
- [ ] Property added for https://shreemoryacabs.com
- [ ] Ownership verified (HTML file, meta tag, or DNS)
- [ ] Sitemap submitted (sitemap-index.xml)
- [ ] Indexing requested for 10 locality pages
- [ ] Indexing requested for 5 route pages
- [ ] Email alerts configured

### Deployment
- [ ] robots.txt updated with new pages
- [ ] WhatsApp button has GA4 tracking
- [ ] Build completed successfully (91 pages)
- [ ] Deployed to Cloudflare Workers
- [ ] robots.txt accessible at live URL
- [ ] GA4 tracking working on live site

---

## 🔍 Troubleshooting

### GA4 Not Tracking

**Problem:** Real-time reports show no data

**Solutions:**
1. Check .env file has correct Measurement ID
2. Verify you restarted dev server after creating .env
3. Check browser console for errors
4. Ensure you're testing in production (GA4 only loads in production by default)
5. Try in incognito window to avoid ad blockers

### Search Console Verification Failed

**Problem:** Ownership verification not working

**Solutions:**
1. **HTML File:** Ensure file is in `/public/` and deployed
2. **Meta Tag:** Ensure tag is in `<head>` before any other tags
3. **DNS:** Wait 24-48 hours for propagation
4. Clear cache and try again

### Indexing Request Failed

**Problem:** "URL is not on Google" error

**Solutions:**
1. Check sitemap was submitted successfully
2. Verify sitemap URL is accessible: https://shreemoryacabs.com/sitemap-index.xml
3. Wait 24-48 hours after sitemap submission
4. Try requesting indexing again

---

## 📈 What's Next: Week 2

Once Week 1 is complete, you'll be ready for:

- **Week 2:** Create first 2 hyperlocal blog posts
  - Blue Ridge Ravet to Mumbai Airport Guide
  - Cerebrum IT Park Aundh to Mumbai Airport Guide

These blog posts will leverage the analytics tracking you've just set up!

---

## 🆘 Need Help?

If you encounter issues:
1. Check the troubleshooting section above
2. Refer to official documentation:
   - [Google Analytics 4 Help](https://support.google.com/analytics/answer/9304153)
   - [Google Search Console Help](https://support.google.com/webmasters/answer/9128668)
3. Test in production environment (not dev) for GA4 tracking

---

**Estimated Total Time:** 40-45 minutes
- GA4 Setup: 15 minutes
- Search Console: 20 minutes
- Deployment: 5 minutes
- Verification: 5 minutes
