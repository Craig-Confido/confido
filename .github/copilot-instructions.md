# Copilot Instructions for Confido

## Project Overview

Confido is a **static Nuxt 2 website** for a Tech for Good talent recruitment agency, deployed on Vercel. Content is managed via **Cosmic CMS** (headless CMS).

## Architecture

### Stack
- **Framework**: Nuxt 2 (static site generation with `target: 'static'`)
- **UI Framework**: Vuetify 1.x with custom SCSS theming
- **CMS**: Cosmic JS SDK (`@cosmicjs/sdk`) - bucket slug: `confido`
- **Deployment**: Vercel (static files)
- **Analytics**: Google Tag Manager, Google Analytics (vue-gtag), Hotjar

### Key Directories
- `pages/` - Route-based pages (Nuxt file-based routing)
- `components/` - Reusable Vue components (auto-imported via `components: true`)
- `layouts/` - Page layouts (`default.vue` contains nav/footer)
- `common/request.js` - Cosmic CMS data fetching helpers
- `store/index.js` - Vuex store for blog data
- `queries/` - Legacy GraphQL queries (not actively used; SDK replaced them)

## Data Fetching Pattern

Use the Cosmic SDK directly in pages/components via `asyncData` or `created`:

```javascript
import { createBucketClient } from "@cosmicjs/sdk"
const bucket = createBucketClient({
  bucketSlug: "confido",
  readKey: "OrYlRGLrDpOrxqbRXMMw7gd7OzEL6jZCqHvfwJrhUbB0Q1Khcj",
})

// In asyncData (for SSG):
const data = await bucket.objects.findOne({
  type: "posts",
  slug: route.params.id,
}).props("slug,title,content,metadata")
```

Content types in Cosmic: `home`, `posts`, `startups`, `careers`.

## Styling Conventions

### Vuetify Theme Colors (use these semantic names)
- `primary`: #000151 (dark blue)
- `secondary`: #FF65BD (pink)
- `accent`: #7B7DF6 (purple)
- `success`: #3EC1B9 (teal)

### Custom CSS Classes ([variables.scss](assets/variables.scss))
- `.full-width-green`, `.full-width-pink` - gradient backgrounds
- `.btn--outlined` - 3px border buttons
- `.card-shadow` - elevated cards
- `.blog-900` - max-width content container

### Spacing Pattern
Use Vuetify responsive classes: `mx-0 mx-md-6 mx-lg-16` for consistent page margins.

## Development Commands

```bash
yarn dev          # Dev server at localhost:3001
yarn build        # Static generation (nuxt generate --quiet)
yarn lint         # ESLint for .js and .vue files
```

## SEO & Redirects

- **Per-page SEO**: Override in page `head()` function with `hid` keys
- **Redirects**: Managed in [vercel.json](vercel.json) (production) and [servermiddleware/301.json](servermiddleware/301.json) (dev)
- **Sitemap**: Auto-generated via `@nuxtjs/sitemap` module

## Component Patterns

### Page Structure
Pages typically include:
1. Hero/header section
2. Content sections with Vuetify grid (`v-row`/`v-col`)
3. `<GetInTouch />` component at bottom with `id="getInTouch"` anchor

### Blog/Hub System
- `pages/hub/index.vue` - Blog listing with filter chips (case_study, articles)
- `pages/hub/_id.vue` - Dynamic blog post page using slug param
- Posts fetched from Cosmic CMS `posts` type

## Analytics Integration

Client-side only plugins (in [nuxt.config.js](nuxt.config.js)):
```javascript
plugins: [
  { src: '~/plugins/hotjar.js', mode: 'client' },
  { src: '~/plugins/gtag.js', mode: 'client' },
]
```

## Important Notes

- `treeShake: true` in Vuetify config slows dev but is required for custom styling
- Images are in `static/images/` - reference with `require('../static/images/...')`
- The server runs on port **3001** (not default 3000)
