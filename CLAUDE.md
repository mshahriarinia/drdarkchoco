# CLAUDE.md

This file provides guidance to Claude Code when working in this repository.

## Project

Website for **DrDarkChoco**, a handmade Belgian chocolate brand.

- Instagram: https://www.instagram.com/dr.darkchoco/
- Bio: "Handmade Belgian Chocolates 🍫 — A postdoctoral researcher at Harvard Medical School who loves dark chocolate and art (🎨)."
- Location: Boston, MA, USA

The brand blends science and art: a researcher's precision with a love for dark chocolate and creative, hand-finished designs. The site should showcase the products, tell the founder's story, and link to Instagram.

## Status

Greenfield: no code yet. Update the sections below as the stack and structure are decided.

## Suggested Stack (not yet confirmed)

- Next.js (App Router) + TypeScript + Tailwind CSS
- Deploy on Vercel
- Static-first; add a backend/commerce integration only if online ordering is requested

If online ordering or payments are added, use a real provisioned integration (e.g. via the Vercel Marketplace) rather than hand-rolled payment code.

## Commands

Fill in once the project is scaffolded (dev, build, lint, test).

## Brand & Design Guidelines

- Tone: warm, artisanal, slightly nerdy/scientific; premium but approachable.
- Palette: deep cocoa browns, near-black, cream/ivory, with an accent color drawn from product photography (e.g. gold or berry).
- Imagery is central: product photos should be large, high quality, and optimized (`next/image`, responsive sizes, alt text).
- Mobile-first: most traffic will come from Instagram on phones.
- Accessibility: sufficient contrast on dark backgrounds, semantic HTML, keyboard navigable.

## Content Notes

- Always say "Handmade Belgian Chocolates" consistently; the brand name is written **DrDarkChoco** (Instagram handle: `dr.darkchoco`).
- Do not invent product names, prices, certifications, health claims, or medical claims. The founder's Harvard Medical School affiliation is part of the story, but the site must not imply Harvard endorses the brand or make health claims about chocolate. Ask the user for real copy and details.
- Food business compliance (allergen info, cottage-food/licensing rules for MA) should be confirmed with the owner before enabling sales.

## Conventions

- TypeScript strict mode; keep components small and server-rendered by default.
- Keep assets in `public/` (optimized images); no secrets in the repo, use environment variables.
