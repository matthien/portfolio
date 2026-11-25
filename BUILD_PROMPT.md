# Build my portfolio site (Astro)

Build my personal portfolio, matthewthien.com, with **Astro** and **plain CSS** (no Tailwind, no UI library). Everything you need is in this file; treat it as the source of truth. Where something is not specified, pick the simplest option and list your assumptions at the end.

## Goals

- A static, fast site: zero JavaScript except the small script for the mobile menu.
- One responsive layout: **desktop at 900px and up**, **mobile below 900px**.
- Case studies are **markdown files in an Astro content collection**, so I can add a project by adding a file, not by editing layout code.
- Accessible: semantic HTML, real links and buttons, visible focus rings, reduced-motion support.

## Pages and routes

| Route | What |
| --- | --- |
| `/` | Work: the grid of case studies (nav item "Work") |
| `/work/[slug]` | One case study page, generated from each markdown file |
| `/about` | About page (placeholder copy) |
| `/contact` | Contact page (placeholder rows) |
| `/thoughtscape` | Placeholder page for now; I will build Thoughtscape (an interactive canvas) in a later step |

Use one shared layout component for the sidebar/menu so every page gets it. The nav highlights the current route. On a case study page, "Work" stays active.

## Design tokens

Put these in `src/styles/tokens.css` as CSS custom properties and use them everywhere. Do not hard-code values in components.

**Colors**

| Token | Value | Use |
| --- | --- | --- |
| `--bg` | `#ffffff` | Page background |
| `--ink` | `#000000` | Primary text, active nav, titles, focus rings |
| `--muted` | `#737373` | Inactive nav, footer, meta labels |
| `--media-placeholder` | `#888888` | Fill for images not in yet |
| `--tag-ink` | `#666666` | Pill text |
| `--line` | `#e5e5e5` | Hairline dividers on case study and contact pages |

**Fonts:** Geist (sans) and Geist Mono, loaded from Google Fonts (weights 400 and 500). Stacks: `Geist, "Helvetica Neue", Arial, sans-serif` and `"Geist Mono", ui-monospace, Menlo, monospace`. **Every text style uses line-height 1.5.**

**Type, desktop (900px and up)**

| Style | Spec | Use |
| --- | --- | --- |
| name | Geist 1.25rem (20px), weight 500 | My name in the sidebar; case study page title |
| case-study-title | Geist 1rem (16px), 400 | Titles under grid images; section headings; About/Contact headings |
| body | Geist 0.9rem (14.4px), 400 | Bio and running text |
| link | Geist 0.9rem (14.4px), 400 | Nav links, "All work" back link |
| pill | Geist Mono 0.8rem (12.8px), 400, uppercase | Category pill, footer, meta labels |

**Type, mobile (below 900px)**

| Style | Spec | Use |
| --- | --- | --- |
| mobile-header | Geist 1.25rem (20px), 500 | My name; the menu title |
| mobile-body | Geist 0.9rem (14.4px), 400 | Bio and running text |
| mobile-case-study-title | Geist 1rem (16px), 400 | Titles under images; all headings on mobile |
| mobile-link | Geist 0.9rem (14.4px), 400 | Menu links, "All work" |
| mobile-pill | Geist Mono 0.8rem (12.8px), 400, uppercase | Category pill |

The footer line uses the pill size (Geist Mono 0.8rem) on mobile too.

**Spacing:** 4, 8, 16, 24, 32, 40, 48px. **Radius:** 0 everywhere (images are always square-cornered).

## Desktop layout (900px and up)

Two columns, side by side.

**Left column (sidebar)**
- Fixed width **300px**, including its padding. **`position: sticky; top: 0; height: 100vh`** so it stays put while the right side scrolls.
- Padding: **40px top and bottom, 24px left and right.**
- Contents, top to bottom:
  1. "Matt Thien" (name style)
  2. Bio, **8px** below the name, max width about 230px, two paragraphs with one blank line of body text (body size x 1.5, about 21.6px) between:
     - "is a product designer who designs and builds products that make complicated things easier to understand."
     - "Currently, working on Thoughtscape and solving problems at GMC Technologies. Previously, worked on products across Rocket Mortgage, Rocket Pro, and Hooked on Phonics."
  3. Nav, **32px** below the bio: Work, About, Contact, Thoughtscape. Link style, each row one line tall (link size x 1.5, about 21.6px), **4px apart**. Inactive = `--muted`, hover = `--ink`. Active = `--ink` with a dash "–" before it, 8px gap, so the active label shifts right. Set `aria-current="page"` on the active link.
  4. Footer "MATTHEW THIEN © 2026" (pill style, `--muted`), pinned to the bottom of the sidebar (`margin-top: auto`).

**Right column (main)**
- Takes the remaining width and scrolls with the page.
- Padding: **40px top and bottom, 24px left and right.** (So the sidebar text and the grid sit 48px apart.)
- Work grid: **2 columns, 48px gap** in both directions.
- Project card (the whole card is one `<a>` to `/work/[slug]`):
  - Image filling the column, **aspect-ratio 1.41**, square corners, no border. Use `--media-placeholder` when there is no image.
  - Caption row **8px** below the image: title (case-study-title, `--ink`) on the left, pill on the right, vertically centered, at least 16px between them.
  - Pill: no fill, no padding; `--tag-ink` text, pill style, uppercase.
  - **Hover:** the image dims to `filter: brightness(.8)` and lifts `transform: translateY(-4px)`, both over 200ms ease. The title does not change (no underline). With `prefers-reduced-motion: reduce`, only the dim happens.
  - Focus: 2px `--ink` outline, 4px offset.

## Mobile layout (below 900px)

Designed at 390px wide. One column. The sidebar disappears; nav moves into a full-screen menu.

- Page padding: **24px top and bottom, 16px left and right.**
- "Matt Thien" (mobile-header) at the top left.
- **Hamburger button at the top right**, 44 × 44px tap area, vertically centered on the name line. It is `position: fixed` so it stays in the corner while scrolling, with a white background. The icon is **two bars**, 20px wide, 1.5px thick, 5.5px apart.
- Bio **8px** below the name (same copy, mobile-body).
- Cards start **48px** below the bio, one column, **24px apart**:
  - Image with **aspect-ratio 4 / 3**, square corners.
  - Title **8px** below the image (mobile-case-study-title).
  - Pill **8px** below the title, left-aligned (mobile-pill, no fill or padding).
- **No footer on the mobile page.** It lives in the menu.

**Full-screen menu**
- Tapping the hamburger animates the two bars into an **X** (rotate +45° and −45° toward the center, 250ms ease) and fades in a white overlay that covers the whole screen (`position: fixed; inset: 0`), 200ms fade.
- Menu padding: 24px top and bottom, 16px sides.
- Contents: "Matt Thien" (mobile-header) at the top; links **32px** below it (Work, About, Contact, Thoughtscape) in mobile-link, each row **32px tall** with no extra gap, same active/inactive treatment as desktop (dash, ink vs muted); footer "MATTHEW THIEN © 2026" (Geist Mono 0.8rem, `--muted`) pinned to the bottom.
- The X stays in the same spot as the hamburger and closes the menu. Choosing a link closes the menu and navigates. Escape also closes it.
- Accessibility: `aria-expanded`, `aria-controls`, `aria-label` "Open menu" / "Close menu" on the button. Lock page scroll while the menu is open. Return focus to the button on close.
- Reduced motion: no bar or fade animation.
- Keep this script tiny and vanilla (an inline `<script>` in the layout is fine).

## Case study page (`/work/[slug]`)

- "All work" back link at the top (link style) with a small left arrow drawn as inline SVG (1.5px stroke, `currentColor`, text-sized). Links to `/`.
- Title (desktop: name style, 1.25rem 500; mobile: mobile-case-study-title, 1rem 400) with the pill beside it on desktop, below it on mobile.
- Hero image (aspect 1.41 desktop, 4:3 mobile, placeholder fill if none).
- Meta row with a hairline (`--line`) on top: **Role, Timeline, Team**. Labels in pill style uppercase `--muted`, values in body. Three columns on desktop, stacked rows on mobile.
- Then the markdown body. `##` headings use case-study-title; paragraphs use body; max text width about 480px.
- Max content width about 720px. 24px between blocks.

## Content collection

`src/content/work/*.md` with frontmatter (validate with a zod schema):

```yaml
title: Rocket Mortgage Notification System
tag: Product design
cover: # optional path to an image in src/assets; placeholder if missing
order: 1 # sort order in the grid
role: "[Your role]"
timeline: "[Dates]"
team: "[Team]"
```

Body sections: `## Overview`, `## Problem`, `## Outcome`, with bracketed placeholder text.

Create **six sample entries** (all "Rocket Mortgage Notification System", tag "Product design", orders 1 to 6) so I can see the grid and scrolling. Use Astro's `<Image>` for real cover images when I add them.

## About, Contact, Thoughtscape pages

- **About:** heading "About" (case-study-title) and one paragraph: "[About copy: your background, how you work, what you are looking for next]".
- **Contact:** heading "Contact", then three rows separated by `--line` hairlines: EMAIL, LINKEDIN, RESUME (labels in pill style, `--muted`) with values "[Your email]", "[LinkedIn URL]", "[Resume link]".
- **Thoughtscape:** heading "Thoughtscape" and "[One line on Thoughtscape and a link to it]". Leave a code comment noting this route will become an interactive canvas island later.

## Copy rules

Lowercase "is" opening on the bio. Labels are uppercase mono. **No em dashes anywhere in copy.** Keep all bracketed placeholders exactly as written so I can find and replace them.

## Project setup and checks

1. Scaffold with `npm create astro@latest` (minimal template, TypeScript strict), then init git with a sensible `.gitignore`.
2. Structure: `src/layouts/BaseLayout.astro`, `src/components/` (Sidebar, MobileMenu, ProjectCard, Pill, BackLink), `src/styles/` (tokens.css, global.css), `src/content/work/`, `src/pages/`.
3. Add SEO basics: title and description per page, Open Graph tags, a simple favicon, `lang="en"`.
4. Run `npm run build` and fix every error and warning. Then run `npm run dev` and check, at **1440px** and **390px** widths: the sticky sidebar while scrolling, the hover lift and dim, the hamburger turning into an X, the full-screen menu, and every nav link.
5. Write a short `README.md` covering how to run it, how to add a case study, and how to deploy to Vercel.
6. At the end, tell me what you built, anything you assumed, and what's left (real images, real copy, Thoughtscape).
