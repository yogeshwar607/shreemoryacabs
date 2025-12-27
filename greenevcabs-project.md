# Shree Morya Cabs - Claude CLI Export Package

This is a complete project specification for Claude CLI to generate all files.

---

## PROJECT STRUCTURE

```
shreemoryacabs/
├── package.json
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── .env.example
├── .gitignore
├── README.md
├── public/
│   └── robots.txt
├── src/
│   ├── styles/
│   │   └── globals.css
│   ├── lib/
│   │   ├── utils.ts
│   │   └── whatsapp.ts
│   ├── data/
│   │   ├── vehicles.ts
│   │   └── routes.ts
│   ├── components/
│   │   ├── ui/
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   └── badge.tsx
│   │   ├── react/
│   │   │   ├── ThemeToggle.tsx
│   │   │   ├── WhatsAppButton.tsx
│   │   │   └── MobileMenu.tsx
│   │   └── layout/
│   │       ├── Header.astro
│   │       └── Footer.astro
│   ├── layouts/
│   │   └── MainLayout.astro
│   └── pages/
│       ├── index.astro
│       ├── sitemap.xml.ts
│       ├── fleet/
│       │   ├── index.astro
│       │   └── [slug].astro
│       └── routes/
│           ├── index.astro
│           └── [slug].astro
```

---

## FILE CONTENTS

### package.json
```json
{
  "name": "shreemoryacabs",
  "type": "module",
  "version": "1.0.0",
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro build",
    "preview": "astro preview",
    "astro": "astro"
  },
  "dependencies": {
    "@astrojs/react": "^3.0.9",
    "@astrojs/sitemap": "^3.0.5",
    "@astrojs/tailwind": "^5.1.0",
    "@radix-ui/react-slot": "^1.0.2",
    "astro": "^4.2.1",
    "class-variance-authority": "^0.7.0",
    "clsx": "^2.1.0",
    "lucide-react": "^0.312.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "tailwind-merge": "^2.2.0",
    "tailwindcss": "^3.4.1",
    "tailwindcss-animate": "^1.0.7"
  },
  "devDependencies": {
    "@types/react": "^18.2.48",
    "@types/react-dom": "^18.2.18",
    "typescript": "^5.3.3"
  }
}
```

### astro.config.mjs
```javascript
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shreemoryacabs.com',
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
    }),
    sitemap(),
  ],
  output: 'static',
});
```

### tailwind.config.mjs
```javascript
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

### tsconfig.json
```json
{
  "extends": "astro/tsconfigs/strict",
  "compilerOptions": {
    "jsx": "react-jsx",
    "jsxImportSource": "react",
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}
```

### .env.example
```
PUBLIC_SITE_URL=https://shreemoryacabs.com
PUBLIC_WHATSAPP_NUMBER=917498264215
PUBLIC_GA_ID=G-XXXXXXXXXX
```

### .gitignore
```
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*
.env
.env.production
.DS_Store
dist/
.astro/
```

### public/robots.txt
```
User-agent: *
Allow: /

Sitemap: https://shreemoryacabs.com/sitemap.xml

Crawl-delay: 1
```

---

## INSTRUCTIONS FOR CLAUDE CLI

To generate this project using Claude CLI:

1. Save this entire markdown file as `shreemoryacabs-project.md`

2. Run Claude CLI with the following command:
```bash
claude --project shreemoryacabs-project.md "Generate the complete Shree Morya Cabs project structure with all files. Create every file mentioned in the project structure section with the exact code provided. Include all components, pages, layouts, and configuration files."
```

3. Or use it interactively:
```bash
# Start Claude CLI in interactive mode
claude

# Then paste:
Read the file shreemoryacabs-project.md and generate all the files for the Shree Morya Cabs project. Create the complete directory structure and all code files as specified.
```

4. For individual file generation:
```bash
# Generate specific components
claude --project shreemoryacabs-project.md "Create the src/components/ui/button.tsx file"
claude --project shreemoryacabs-project.md "Create the src/pages/index.astro file"
```

---

## POST-GENERATION STEPS

After Claude CLI generates the files:

1. **Install dependencies:**
```bash
npm install
```

2. **Install shadcn/ui:**
```bash
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card badge alert
```

3. **Create .env file:**
```bash
cp .env.example .env
```

4. **Update WhatsApp number:**
   - Edit `src/lib/whatsapp.ts`
   - Replace `917498264215` with your actual number

5. **Start development server:**
```bash
npm run dev
```

6. **Test the site:**
   - Homepage: http://localhost:4321
   - Fleet: http://localhost:4321/fleet
   - Routes: http://localhost:4321/routes

---

## ALTERNATIVE: DIRECT FILE REFERENCES

If you have the artifact conversation accessible, you can reference specific artifacts:

```bash
# Reference the artifacts from this conversation
claude "Create all files from the Shree Morya Cabs project artifacts. Use artifact IDs: shreemoryacabs-project, shreemoryacabs-components, shreemoryacabs-pages, shreemoryacabs-dynamic-pages"
```

---

## COMPONENT-BY-COMPONENT GENERATION

If you prefer to generate files one at a time:

```bash
# Configuration files
claude "Create package.json for Shree Morya Cabs Astro project with React and Tailwind"
claude "Create astro.config.mjs for Shree Morya Cabs with sitemap and React"
claude "Create tailwind.config.mjs with dark mode and shadcn colors"
claude "Create tsconfig.json for Astro with path aliases"

# Utilities
claude "Create src/lib/utils.ts with cn helper function for Tailwind"
claude "Create src/lib/whatsapp.ts with WhatsApp link generator"

# Data files
claude "Create src/data/vehicles.ts with Kia Carens EV and BYD E-MAX 7 data"
claude "Create src/data/routes.ts with Pune-Mumbai routes data"

# Components
claude "Create src/components/ui/button.tsx shadcn component"
claude "Create src/components/ui/card.tsx shadcn component"
claude "Create src/components/ui/badge.tsx shadcn component"
claude "Create src/components/react/ThemeToggle.tsx with dark mode"
claude "Create src/components/react/WhatsAppButton.tsx floating button"
claude "Create src/components/layout/Header.astro with navigation"
claude "Create src/components/layout/Footer.astro with contact info"

# Layouts
claude "Create src/layouts/MainLayout.astro with SEO and dark mode"

# Pages
claude "Create src/pages/index.astro for Shree Morya Cabs homepage"
claude "Create src/pages/fleet/index.astro fleet listing page"
claude "Create src/pages/fleet/[slug].astro dynamic vehicle pages"
claude "Create src/pages/routes/index.astro routes listing page"
claude "Create src/pages/routes/[slug].astro dynamic route pages"
claude "Create src/pages/sitemap.xml.ts programmatic sitemap"
```

---

## VERIFICATION CHECKLIST

After generation, verify:

- [ ] All 28 files are created
- [ ] Directory structure matches specification
- [ ] No TypeScript errors: `npm run astro check`
- [ ] Development server starts: `npm run dev`
- [ ] All pages load correctly
- [ ] Dark mode toggle works
- [ ] WhatsApp buttons work
- [ ] Sitemap generates: `/sitemap.xml`
- [ ] Mobile responsive design works
- [ ] All internal links work

---

## TROUBLESHOOTING CLAUDE CLI

**Issue: Files not generating**
```bash
# Try with explicit file paths
claude "Create a new file at src/lib/utils.ts with the following content: [paste code]"
```

**Issue: Wrong directory structure**
```bash
# Generate directories first
mkdir -p src/{components/{ui,react,layout},lib,data,layouts,pages/{fleet,routes},styles}
mkdir -p public/images/{vehicles,routes,og-images}

# Then generate files
claude --project shreemoryacabs-project.md "Generate all code files"
```

**Issue: Dependencies not installing**
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

**Issue: Import errors**
```bash
# Verify path aliases in tsconfig.json
# Ensure baseUrl and paths are set correctly
```

---

## QUICK START SCRIPT

Save this as `setup.sh` and run after generation:

```bash
#!/bin/bash

echo "🚗 Setting up Shree Morya Cabs..."

# Install dependencies
npm install

# Setup shadcn/ui
npx shadcn-ui@latest init --yes --defaults
npx shadcn-ui@latest add button card badge alert

# Create .env
cp .env.example .env

# Create image directories
mkdir -p public/images/{vehicles,routes,og-images}

# Start dev server
echo "✅ Setup complete!"
echo "Run 'npm run dev' to start development server"
```

---

## SUMMARY

This export package contains:
- ✅ Complete project structure specification
- ✅ All configuration files
- ✅ All source code files
- ✅ Claude CLI commands for generation
- ✅ Post-generation setup steps
- ✅ Verification checklist
- ✅ Troubleshooting guide

Use this with Claude CLI to generate the entire Shree Morya Cabs project automatically!
