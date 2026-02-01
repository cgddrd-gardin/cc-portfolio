# Personal Portfolio & Blog

A minimal, typography-focused portfolio and blog built with Next.js and TypeScript.

## Features

- **Minimal Design**: Clean, typography-first aesthetic with focus on readability
- **Blog with MDX**: Write posts in MDX with full Markdown support
- **RSS Feed**: Automatically generated RSS feed for blog posts
- **SEO Optimized**: Sitemap, robots.txt, and metadata for all pages
- **Dark Mode**: Automatic dark mode support based on system preferences
- **TypeScript**: Fully typed for better developer experience
- **Fast & Modern**: Built with Next.js 14 and modern web standards

## Getting Started

### Prerequisites

- Node.js 18+ or Bun
- npm, yarn, pnpm, or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/cc-portfolio.git
cd cc-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Customization

### Personal Information

Update the following files with your information:

- `app/layout.tsx` - Site metadata and name
- `app/page.tsx` - Homepage content
- `app/about/page.tsx` - About page content
- `app/components/Footer.tsx` - Social links
- `app/components/Navigation.tsx` - Site name
- `app/rss.xml/route.ts` - RSS feed information
- `app/sitemap.ts` - Site URL

### Styling

The site uses CSS variables for theming. Edit `app/globals.css` to customize:

- Colors
- Typography
- Spacing
- Dark mode styles

### Writing Posts

Create new blog posts in `content/posts/` as `.mdx` files:

```mdx
---
title: "Your Post Title"
date: "2024-02-01"
excerpt: "A brief description of your post"
---

Your post content here...
```

## Deployment

This site can be deployed to:

- **Vercel** (recommended): Push to GitHub and import in Vercel
- **Netlify**: Connect your repository
- **Any static hosting**: Run `npm run build` and deploy the `out` folder

## Tech Stack

- [Next.js 14](https://nextjs.org/) - React framework
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [MDX](https://mdxjs.com/) - Markdown with JSX
- [gray-matter](https://github.com/jonschlinkert/gray-matter) - Front matter parsing

## License

MIT License - feel free to use this template for your own portfolio!

## Acknowledgments

This is an original implementation inspired by common minimal design principles seen across modern portfolio sites.
