# Technical Context: Fluidity AI Website

## Technologies Used
- **Astro.js**: Modern static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework for interactivity
- **Formspree**: Third-party service for handling contact form submissions
- **Node.js**: JavaScript runtime environment

## Development Setup
- **Package Manager**: npm
- **Build Tool**: Astro's built-in build system
- **CSS Processing**: Tailwind CSS with PostCSS
- **JavaScript**: ES modules
- **Version Control**: Git

## Technical Constraints
- **Performance**: The site should load quickly and have good performance metrics
- **Accessibility**: The site should be accessible to all users
- **SEO**: The site should be optimized for search engines
- **Browser Support**: The site should work well in all modern browsers

## Dependencies
- **@astrojs/mdx**: For Markdown content
- **@astrojs/preact**: For interactive components
- **@astrojs/rss**: For RSS feed
- **@astrojs/sitemap**: For sitemap generation
- **@astrojs/tailwind**: For Tailwind CSS integration
- **astro-robots**: For robots.txt generation
- **lodash-es**: Utility library
- **preact**: Lightweight React alternative

## Environment Variables
- No environment variables needed for Formspree integration

## Build and Deployment
- The site is built using `npm run build`
- The build output is in the `dist` directory
- The site can be previewed locally using `npm run preview`
