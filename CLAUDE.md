# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development

- `npm run dev` - Start local development server at `localhost:3000`
- `npm run build` - Build production site to `./dist/`
- `npm run preview` - Preview the built site locally before deploying
- `npm run astro` - Run Astro CLI commands like `astro add`, `astro check`

### Code Quality

- Use Prettier for formatting - `.prettierrc` is configured with Astro and Tailwind plugins
- The project uses TypeScript with path aliasing (`@/*` maps to `src/*`)

## Architecture Overview

This is an Astro-based website for Fluidity AI, a healthcare revenue cycle management automation company. The site uses:

- **Astro 5.12** as the static site generator
- **Tailwind CSS** for styling with custom configuration for forms, typography, and aspect-ratio
- **Preact** for interactive components when needed
- **MDX** support for content pages
- **SendGrid** for email handling in contact forms

### Key Architectural Patterns

1. **Content Collections** - Structured content is managed through Astro Content Collections defined in `src/content/config.ts`:

   - `team` - Team member profiles
   - `services` - Service offerings
   - `work` - Client work/case studies
   - `infopages` - Information pages
   - `posts` - Blog posts

2. **Layout System** - Multiple layout components extend `BaseLayout.astro`:

   - `BaseLayout` - Main layout with navigation, footer, and third-party scripts (AOS, Vanilla Tilt, GTM)
   - `BlogLayout`, `InfoPagesLayout`, `ServicesLayout`, `WorkLayout`, `TeamLayout` - Specific layouts for different content types

3. **Component Organization**:

   - `src/components/global/` - Reusable components (Navigation, Footer, CTA, etc.)
   - `src/components/landing/` - Homepage-specific sections (Hero, Services, Benefits, etc.)
   - `src/components/forms/` - Form components (Contact form with Formspree integration)
   - `src/components/seo/` - SEO-related components (Metas, Favicons)

4. **Routing Structure**:

   - Dynamic routes using `[...slug].astro` pattern for content collections
   - Index pages for listing content (services, team)
   - Static pages (index, contact, privacy, 404)

5. **Form Handling**:

   - Contact forms use Formspree for submission handling
   - Client-side validation implemented in BaseLayout script
   - Server-side processing capability through Astro

6. **Third-Party Integrations**:
   - Google Tag Manager for analytics
   - AOS (Animate On Scroll) for animations
   - Vanilla Tilt for 3D card effects

## Important Notes

- Site URL is configured as `https://fluidityai.github.io` in `astro.config.mjs`
- Environment variables should be accessed using `import.meta.env.VARIABLE_NAME`
- The project follows a mobile-first responsive design approach
- Content is primarily managed through Markdown/MDX files in content collections
