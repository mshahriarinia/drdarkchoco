# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

Website for **DrDarkChoco**, a handmade Belgian chocolate brand.

- Instagram: https://www.instagram.com/dr.darkchoco/
- Bio: "Handmade Belgian Chocolates 🍫 — A postdoctoral researcher at Harvard Medical School who loves dark chocolate and art (🎨)."
- Location: Boston, MA, USA

The brand blends science and art: a researcher's precision with a love for dark chocolate and creative, hand-finished designs. The site should showcase the products, tell the founder's story, and link to Instagram.

## Status

Live at https://drdarkchoco.com (GitHub Pages, repo `mshahriarinia/drdarkchoco`, public). Static site, no framework and no dependencies beyond Python 3's standard library.

## Stack & Structure

- `content.json`: all product, market and Instagram content. Edit this for copy changes.
- `build.py`: generates every HTML page into `dist/` from `content.json`. Page templates, header and footer live here.
- `dist/`: the published site. HTML is generated; `style.css`, `app.js` and `assets/` (640/1440 px JPEGs) are hand-maintained here. `dist/` is committed because the deploy publishes it as-is.
- `dist/CNAME` is written by `build.py` (`drdarkchoco.com`). Do not delete it.
- `.github/workflows/pages.yml`: on push to `main`, runs `python3 build.py` and deploys `dist/` to GitHub Pages.
- Links are root-absolute (`/collection/`). `BASE=/subpath python3 build.py` rewrites them for sub-path hosting, but the custom domain does not need it.

If online ordering or payments are added, use a real provisioned integration rather than hand-rolled payment code. Today the contact form only drafts a message to copy into Instagram; nothing is sent or stored.

## Commands

- Build: `python3 build.py`
- Preview: `python3 -m http.server -d dist`
- Deploy: run the build, commit `dist/` together with the source change, push to `main`.

## Brand & Design Guidelines

- Tone: warm, artisanal, slightly nerdy/scientific; premium but approachable.
- Palette: deep cocoa browns, near-black, cream/ivory, with an accent color drawn from product photography (e.g. gold or berry).
- Imagery is central: product photos should be large, high quality, and optimized (responsive `srcset`/`sizes`, explicit width and height, alt text).
- Mobile-first: most traffic will come from Instagram on phones.
- Accessibility: sufficient contrast on dark backgrounds, semantic HTML, keyboard navigable.

## Content Notes

- Always say "Handmade Belgian Chocolates" consistently; the brand name is written **DrDarkChoco** (Instagram handle: `dr.darkchoco`).
- Do not invent product names, prices, certifications, health claims, or medical claims. The founder's Harvard Medical School affiliation is part of the story, but the site must not imply Harvard endorses the brand or make health claims about chocolate. Ask the user for real copy and details.
- Food business compliance (allergen info, cottage-food/licensing rules for MA) should be confirmed with the owner before enabling sales.

## Conventions

- Keep the build dependency-free (Python standard library only); pages are plain server-rendered HTML with minimal JS.
- Keep assets in `dist/assets/` (optimized images); no secrets in the repo.
