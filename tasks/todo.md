# seaninsound.com improvement pass (branch claude/inspiring-turing-j4yukz)

- [ ] 1. Brand-rule sweep: grey text -> white, type min 14px, em-dashes removed
- [ ] 2. Housekeeping: archive index-old.html, real README, tasks/lessons.md
- [ ] 3. Performance: compress big images, lazy-load, explicit dimensions
- [ ] 4. Sharing/discovery: robots.txt, sitemap.xml, JSON-LD (share cards need Sean's call on design)
- [ ] 5. Accessibility: focus states, keyboard on expandables, heading order
- [ ] 6. Flag only: 88% episodes vs 63.4% guests stat on index.html

## Review (done this pass)
- [x] 1 Sweep: grey text to white (style.css, index.html, spotify-royalty, dis-podcast-stats); 14px floor in style.css, index.html, impact.html; em-dashes removed everywhere
- [x] 2 Housekeeping: index-old.html to archive/, README, lessons.md
- [x] 3 Images 12.3MB to 5.4MB, lazy-load, width/height (no distortion at 1280 or 390)
- [x] 4 canonical, favicon, theme-color, twitter meta, robots.txt, sitemap.xml (Person JSON-LD already existed)
- [x] 5 skip link, main landmark, focus-visible, aria-controls on timeline eras
- [ ] 6 Stat flags for Sean (see below)

## Open for Sean
- dis-podcast-stats.html still has ~400 text sizes under 14px (dense dashboard, needs a design call)
- spotify-royalty.html slides use #bbb/#ccc at 26px+ (passes AA, left alone)
- tori-*.html still in root (shared URLs?)
- Per-page share card image (1200x630) needs a design decision
- Stats: 88% of episodes vs 63% of guests; "industry average 37.4%" (index.html ~line 267) vs 27.2% in CLAUDE.md key numbers
