# matthewthien.com

Personal portfolio. Astro, plain CSS, static output. The only JavaScript is the small mobile menu script.

## Run it

Requires a recent Node (see `engines` in package.json; this was built on Node 24).

```sh
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve dist/ locally
npm run check    # type check .astro and .ts files
```

## Project layout

```
src/
  content.config.ts      # "work" collection + zod schema
  content/work/*.md      # one file per case study
  assets/                # case study cover images
  layouts/BaseLayout.astro
  components/            # Sidebar, MobileMenu, NavLinks, Bio, ProjectCard, Pill, BackLink
  lib/site.ts            # name, bio, footer, nav items
  styles/tokens.css      # colors, type, spacing, motion tokens
  styles/global.css      # reset, text styles (.t-*), .media, .prose, .page
  pages/                 # /, /work/[slug], /about, /contact, /thoughtscape
```

Desktop is 900px and up; mobile is below 900px.

## Add a case study

1. Create `src/content/work/my-project.md`. The file name becomes the URL: `/work/my-project`.
2. Add frontmatter:

   ```yaml
   ---
   title: Project title
   tag: Product design
   cover: ../../assets/my-project.png   # optional; grey placeholder if left out
   coverAlt: What the image shows       # optional; alt text for the hero image
   order: 7                             # lower numbers show first in the grid
   role: "Lead designer"
   timeline: "2024 to 2025"
   team: "2 designers, 4 engineers"
   ---
   ```

3. Write the body in markdown (`## Overview`, `## Problem`, `## Outcome`, and so on).
4. Put the cover image in `src/assets/`. Astro's `<Image>` resizes it and serves WebP with a `srcset`.

The build fails with a clear message if a required field is missing or a cover path is wrong.

The six `sample-project-*.md` files are placeholders; delete them once real case studies are in.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel, **Add New Project** and import the repo. Vercel detects Astro: build command `npm run build`, output `dist`. No adapter is needed for a static site.
3. Under **Settings > Domains**, add `matthewthien.com` and follow the DNS instructions.

Or from the terminal: `npx vercel` for a preview, `npx vercel --prod` for production.

## Find and replace

Placeholder copy is in square brackets, for example `[Your email]`. Search the project for `[` to find all of it.
