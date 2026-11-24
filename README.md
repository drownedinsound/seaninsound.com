# seaninsound.com

Personal website for Sean Adams — founder of Drowned in Sound, podcast host, journalist, and artist manager.

## Stack

- Static HTML/CSS/JS — no frameworks
- Google Fonts: Francois One (headings) + Cardo (body/italic)
- Deployed via Netlify (auto-deploys from `main` branch)
- Repo: github.com/drownedinsound/seaninsound.com

## Design system

- Background: `#0A0A0A` / `#000000` alternating sections
- Accent: `#FF1493` hot pink
- Body text: `#CCCCCC`
- Headings: Francois One, uppercase
- Base font-size: 18px desktop, 16px mobile

## Backups

- `index-old.html` — version before major redesign
- `index2.html` — backup as of March 2026 (before current edits)

## Assets

All images and data files live in `/assets/`:
- `sean-headshot.jpg` — hero photo (compressed, 600px)
- `anchoress-photo.jpg` — featured client photo (compressed, 600px)
- `dis-newsletter-screenshot.jpg` — DiS newsletter homepage
- `dis-community-screenshot.jpg` — DiS community forums
- `thesounding-screenshot.jpg` — The Sounding homepage
- `huck-article-screenshot.jpg` — Huck Magazine Issue 82
- `LABEL_DISCOGRAPHY.md` — source data for Releases section
- `TIMELINE_DATA.md` — source data for timeline
- `LINKS_REFERENCE.md` — all URLs referenced on the site
- `CLAUDE_CODE_BRIEF_seaninsound.md` — original build brief

## Key sections (in order)

1. Hero — name, links, social icons
2. Bio — with "Music is upstream from politics" statement
3. Stats — 4 numbers (25 years, 300K, 2-3M, 200K)
4. The Anchoress — featured client (currently managing)
5. As Seen In — logo strip
6. Press Quotes — Observer + Times
7. Ticker — artist name marquee
8. Why Music Matters — political argument
9. Watch — 4 YouTube embeds
10. Now — current projects (with Apple Podcasts embed)
11. A Quarter Century — collapsible era timeline
12. Beyond Music — 8 cards
13. Recognition — collapsible (awards/judging/speaking/press)
14. DiS Is... — closing manifesto
15. Releases — collapsible full discography
16. Footer

## Notes

- The Anchoress new album date is **embargoed** — do not add release date to the site
- Alternating section backgrounds replace section dividers (`.section-rule` is `display:none`)
- Scroll animations via IntersectionObserver (respects `prefers-reduced-motion`)
- Timeline is horizontally scrollable on desktop, collapsible eras on all breakpoints
