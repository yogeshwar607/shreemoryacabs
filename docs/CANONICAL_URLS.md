# Canonical URLs Guide

## What are Canonical URLs?

Canonical URLs tell search engines which version of a page is the "official" one when you have duplicate or similar content. This prevents SEO issues like duplicate content penalties.

## Current Implementation

Canonical URLs are automatically generated for all pages based on the page's URL path and the site domain configured in `astro.config.mjs`.

**Site URL:** `https://shreemoryacabs.com`

## How to Use Custom Canonical URLs

You can now override the automatic canonical URL by passing a `canonicalURL` prop to any page using `MainLayout`:

### Example 1: Specify a Different Canonical URL

```astro
---
import MainLayout from "@/layouts/MainLayout.astro";
---

<MainLayout
  title="Your Page Title"
  description="Your page description"
  canonicalURL="/original-page"
>
  <!-- Your content -->
</MainLayout>
```

### Example 2: Use Full URL

```astro
<MainLayout
  title="Your Page Title"
  description="Your page description"
  canonicalURL="https://shreemoryacabs.com/the-canonical-page"
>
  <!-- Your content -->
</MainLayout>
```

## Common Use Cases

### 1. Paginated Content

For blog pages with pagination, point to the first page:

```astro
<!-- /blog/page/2 -->
<MainLayout
  canonicalURL="/blog"
>
```

### 2. URL Parameters

For filtered/sorted pages, point to the base page:

```astro
<!-- /routes?sort=price -->
<MainLayout
  canonicalURL="/routes"
>
```

### 3. Alternate Versions

If you have multiple URLs for the same content:

```astro
<!-- /electric-cab-service-hinjewadi (old URL) -->
<MainLayout
  canonicalURL="/electric-cab-service/hinjewadi"
>
```

### 4. Landing Pages

For campaign-specific landing pages with tracking parameters:

```astro
<!-- /special-offer?utm_source=email -->
<MainLayout
  canonicalURL="/special-offer"
>
```

## Current Redirects

The following redirects are already configured in `astro.config.mjs`:

- `/electric-cab-service-hinjewadi` → `/electric-cab-service/hinjewadi`
- `/electric-cab-service-wakad` → `/electric-cab-service/wakad`
- `/electric-cab-service-baner` → `/electric-cab-service/baner`
- (and more...)

These redirects ensure old URLs point to the new hierarchical structure.

## Verifying Canonical URLs

### In Browser

1. Visit any page on your site
2. View page source (Ctrl+U or Cmd+U)
3. Search for `<link rel="canonical"`
4. Verify the URL is correct

### With curl

```bash
curl -s https://shreemoryacabs.com/routes | grep canonical
```

### In Google Search Console

1. Go to URL Inspection tool
2. Enter the URL
3. Check "User-declared canonical" vs "Google-selected canonical"

## Best Practices

1. **Use relative paths** when possible: `/page` instead of full URLs
2. **Always use HTTPS** in canonical URLs
3. **Include trailing slash** if your URLs use them consistently
4. **Self-referencing canonicals** are fine (page points to itself)
5. **Don't use parameters** in canonical URLs unless necessary

## Troubleshooting

### Issue: "Alternate page with proper canonical tag"

This means Google found multiple versions of your page. Solutions:

1. **Add custom canonical URL** to specify the primary version
2. **Use 301 redirects** for old URLs (already configured)
3. **Add `noindex`** to pages you don't want indexed

Example:
```astro
<MainLayout
  canonicalURL="/primary-version"
  noindex={true}  <!-- For alternate version -->
>
```

### Issue: Canonical points to wrong domain

Check `astro.config.mjs` - the `site` property should be:

```js
export default defineConfig({
  site: 'https://shreemoryacabs.com',
  // ...
});
```

### Issue: Canonical URL missing

Ensure you're using `MainLayout` and `SEOHead` components on all pages.

## Testing Checklist

- [ ] Canonical URL is present on every page
- [ ] Canonical URL uses HTTPS
- [ ] Canonical URL points to the correct version
- [ ] Redirected pages have canonical to new URL
- [ ] No canonical chains (A→B→C, should be A→C, B→C)
- [ ] Paginated pages point to first page
- [ ] Parameter variations point to base page
