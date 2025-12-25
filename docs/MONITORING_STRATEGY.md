# Post-Deployment Monitoring Strategy
**Project:** GreenEVCabs Programmatic SEO Refactoring
**Date:** December 26, 2025
**Phases Completed:** 1-4 (Data Layer, Template Consolidation, Internal Linking, URL Optimization)

---

## Executive Summary

This document outlines the monitoring strategy for the first 2 weeks after deploying the programmatic SEO refactoring. The refactoring reduced code from ~44,965 lines to ~3,343 lines (92% reduction) while maintaining all 107 pages.

**Key Changes to Monitor:**
- 13 locality pages migrated from flat URLs to hierarchical structure
- 13 new redirects from `/electric-cab-service-{locality}` to `/electric-cab-service/{locality}`
- 11 route pages using dynamic template
- Smart internal linking via RelatedLinks component
- Data-driven sitemap (auto-updating)

---

## Week 1: Critical Monitoring (Days 1-7)

### Daily Checks

#### 1. **404 Errors** (Critical - Check Daily)
**What to Monitor:**
- Google Search Console → Coverage → Errors
- Server access logs for 404 responses

**Success Criteria:**
- No increase in 404 errors compared to baseline
- All old locality URLs redirect correctly (13 redirects)

**Action if Issues:**
- If 404s spike > 5%, investigate immediately
- Check if redirects are working: `curl -I https://greenevcabs.com/electric-cab-service-hinjewadi`
- Verify sitemap.xml includes all pages

**Tools:**
- Google Search Console
- Cloudflare Analytics (if deployed on Cloudflare)
- Server logs

---

#### 2. **Redirect Success Rate** (Critical - Check Daily)
**What to Monitor:**
- HTTP status codes for old locality URLs
- Should all return 200 (via HTML meta refresh)

**Test Commands:**
```bash
# Test each redirect
curl -I https://greenevcabs.com/electric-cab-service-hinjewadi
curl -I https://greenevcabs.com/electric-cab-service-wakad
curl -I https://greenevcabs.com/electric-cab-service-baner
# ... (all 13 localities)
```

**Success Criteria:**
- All old URLs load correctly
- Users see instant redirect to new URL
- No redirect chains (single hop only)

**Action if Issues:**
- Check astro.config.mjs redirects configuration
- Verify build process created redirect HTML files
- Check dist/electric-cab-service-{locality}/index.html exists

---

#### 3. **Google Search Console - Coverage** (High Priority - Check Daily)
**What to Monitor:**
- Indexed pages count (should remain ~107)
- Valid pages (should remain stable)
- Excluded pages (shouldn't increase significantly)

**Success Criteria:**
- Indexed pages: 95-107 pages
- No sudden drops in valid pages
- New locality URLs get indexed within 7 days

**Action if Issues:**
- If indexed pages drop > 10%, submit sitemap manually
- Check for crawl errors in GSC
- Verify robots.txt isn't blocking new URLs

**Screenshot Before Deployment:**
- Take screenshot of GSC coverage before deploying

---

#### 4. **Page Load Times** (Medium Priority - Check 2x/week)
**What to Monitor:**
- Core Web Vitals in Google Search Console
- Cloudflare Analytics response times
- Manual Lighthouse audits on key pages

**Success Criteria:**
- LCP (Largest Contentful Paint) < 2.5s
- FID (First Input Delay) < 100ms
- CLS (Cumulative Layout Shift) < 0.1
- No regression from baseline

**Action if Issues:**
- If LCP increases > 20%, check for:
  - Unoptimized images
  - Slow server response
  - Render-blocking resources
- Run Lighthouse audit to identify bottlenecks

---

### Every 2-3 Days

#### 5. **Organic Search Traffic** (High Priority)
**What to Monitor:**
- Google Analytics → Acquisition → Organic Search
- Compare Week 1 vs. previous week
- Traffic to locality pages specifically

**Success Criteria:**
- Organic traffic stable or increasing
- No sudden drops > 15%
- Locality pages maintain/improve traffic

**Segments to Monitor:**
```
/electric-cab-service/* (all locality pages)
/routes/* (all route pages)
/blog/* (blog posts)
```

**Action if Issues:**
- If traffic drops > 15%, check:
  - Are pages still indexed? (GSC Coverage)
  - Are redirects working? (404 errors)
  - Did rankings drop? (GSC Performance)

---

#### 6. **Schema Validation** (Medium Priority - Check Once Week 1)
**What to Monitor:**
- Google Rich Results Test
- Schema.org Validator
- Google Search Console → Enhancements

**Pages to Test:**
- 2-3 locality pages: `/electric-cab-service/hinjewadi`, `/electric-cab-service/wakad`
- 2 route pages: `/routes/pune-to-mumbai-airport`, `/routes/hinjewadi-to-mumbai-airport`

**Success Criteria:**
- All tested pages pass schema validation
- No errors in structured data
- FAQPage schema valid on locality pages
- TouristTrip schema valid on route pages

**Tools:**
- https://validator.schema.org/
- https://search.google.com/test/rich-results

**Action if Issues:**
- Check src/lib/seo.ts schema generation functions
- Verify JSON-LD is properly formatted
- Test locally before deploying fix

---

## Week 2: Stabilization Monitoring (Days 8-14)

### Every 2-3 Days

#### 7. **Search Rankings** (High Priority)
**What to Monitor:**
- Google Search Console → Performance → Queries
- Top queries and their positions
- Impressions and CTR trends

**Key Queries to Track:**
```
"electric cab hinjewadi to mumbai airport"
"electric cab service pune"
"pune mumbai airport cab"
"greenevcabs"
... (top 10-20 queries)
```

**Success Criteria:**
- Rankings stable or improving
- No queries drop > 5 positions
- Impressions maintain or increase

**Action if Issues:**
- If rankings drop > 5 positions for key queries:
  - Check if content changed inadvertently
  - Verify meta titles/descriptions unchanged
  - Check if page is still indexed

---

#### 8. **Internal Links** (Medium Priority - Check Once Week 2)
**What to Monitor:**
- RelatedLinks component displaying correctly
- Links to related routes, localities, blog posts
- No broken internal links

**Pages to Test:**
- 3-4 locality pages
- 3-4 route pages
- Check RelatedLinks section appears

**Success Criteria:**
- RelatedLinks section visible on all pages
- Links work correctly (no 404s)
- Shows 3 items per column (routes, localities, blog posts)

**Manual Test:**
```
Visit: /electric-cab-service/hinjewadi
Scroll to "Explore More from Hinjewadi" section
Click 2-3 links → should work
```

**Action if Issues:**
- Check src/lib/content-helpers.ts getRelatedContent()
- Verify data files have correct relatedRoutes/relatedLocalities
- Test locally to reproduce issue

---

#### 9. **Sitemap Health** (Low Priority - Check Once Week 2)
**What to Monitor:**
- sitemap.xml includes all pages
- Sitemap submitted to Google Search Console
- No sitemap errors in GSC

**Success Criteria:**
- Sitemap contains ~107 URLs
- All 13 locality pages in sitemap
- GSC shows "Success" for sitemap

**Manual Check:**
```bash
curl https://greenevcabs.com/sitemap.xml | grep -c "<loc>"
# Should return ~107
```

**Action if Issues:**
- Re-submit sitemap in Google Search Console
- Check src/pages/sitemap.xml.ts uses data sources
- Verify build process generates sitemap correctly

---

## Metrics Baseline (Before Deployment)

### Record These Metrics Before Deploying

```
Date: _____________

Total Pages: 107
Total Lines of Code: 3,343

Google Search Console:
- Indexed Pages: _____________
- Valid Pages: _____________
- Errors: _____________
- Excluded: _____________

Google Analytics (Last 7 Days):
- Organic Sessions: _____________
- Pageviews: _____________
- Bounce Rate: _____________

Core Web Vitals:
- LCP (avg): _____________
- FID (avg): _____________
- CLS (avg): _____________

Top 5 Keywords Rankings:
1. _______________: Position _____
2. _______________: Position _____
3. _______________: Position _____
4. _______________: Position _____
5. _______________: Position _____
```

---

## Emergency Rollback Procedure

### If Critical Issues Occur

**Triggers for Rollback:**
- Organic traffic drops > 30% in 24 hours
- 404 errors spike > 50
- Indexed pages drop > 20%
- Site completely broken

**Rollback Steps:**

```bash
# 1. Checkout previous tag
git checkout phase-1-4-complete~1

# 2. Rebuild site
npm run build

# 3. Deploy to production
# (depends on your deployment process)

# 4. Verify in browser
curl -I https://greenevcabs.com/

# 5. Monitor for 1 hour
# Check 404s, traffic, errors
```

**After Rollback:**
- Notify team immediately
- Investigate root cause
- Fix issues in development
- Test thoroughly before re-deploying

---

## Alerts to Set Up

### Google Search Console Alerts
1. Coverage errors increase > 10
2. Mobile usability errors
3. Security issues

### Google Analytics Alerts
1. Organic traffic drops > 20% day-over-day
2. Bounce rate increases > 30%
3. Conversion rate drops > 25%

### Cloudflare/Server Alerts
1. 404 error rate > 5%
2. Response time > 3 seconds
3. Server errors (5xx) > 1%

---

## Success Criteria Summary

### Week 1 (Days 1-7)
- ✓ Zero 404 error increase
- ✓ All 13 redirects working
- ✓ Indexed pages stable (95-107)
- ✓ Page load times < baseline
- ✓ No organic traffic drop > 10%

### Week 2 (Days 8-14)
- ✓ Rankings stable (±2 positions)
- ✓ Internal links working correctly
- ✓ Schema validation passing
- ✓ Sitemap submitted and indexed
- ✓ Core Web Vitals maintained

### End of Week 2
- ✓ All metrics at baseline or better
- ✓ No unresolved errors
- ✓ New locality URLs indexed by Google
- ✓ Monitoring can be reduced to weekly checks

---

## Monthly Monitoring (After Week 2)

Once stabilized, reduce monitoring to:

**Monthly Checks:**
- Google Search Console coverage
- Organic traffic trends
- Core Web Vitals
- Top 20 keyword rankings

**Quarterly Checks:**
- Full site crawl (Screaming Frog)
- Schema validation audit
- Internal link structure review
- Sitemap health check

---

## Contact Information

**If Issues Occur:**
1. Check this document for action steps
2. Review git history: `git log --oneline`
3. Rollback if critical: `git checkout phase-1-4-complete~1`
4. Document issue in GitHub Issues

**Git Tags:**
- `phase-1-4-complete` - Last stable version (Phases 1-4)
- Previous versions: `git tag -l`

---

## Notes

**Key Files to Monitor:**
- `/src/pages/electric-cab-service/[locality].astro` - Locality template
- `/src/pages/routes/[slug].astro` - Route template
- `/src/data/localities.ts` - Locality data
- `/src/lib/content-helpers.ts` - Internal linking logic
- `/astro.config.mjs` - Redirects configuration

**Deployment Checklist:**
- [ ] Record baseline metrics above
- [ ] Take screenshot of GSC coverage
- [ ] Deploy to production
- [ ] Test 3-5 locality redirects manually
- [ ] Test 2-3 route pages load correctly
- [ ] Submit sitemap to GSC
- [ ] Set up alerts (GSC, GA, Cloudflare)
- [ ] Schedule daily checks for Week 1

---

**Last Updated:** December 26, 2025
**Next Review:** After Week 2 (January 9, 2026)
