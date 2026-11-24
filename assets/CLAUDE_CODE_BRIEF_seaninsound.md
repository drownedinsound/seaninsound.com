# Claude Code Brief: seaninsound.com

## What this is

A single-page personal website for Sean Adams — founder of Drowned in Sound, podcast host, journalist, artist manager, and consultant. The site serves two audiences: **interviewers** who want to book him as a guest, and **investors/partners** who want to understand the scale of what he's building.

The top of the page functions as a **Linktree** — compact, fast, what people see from an Instagram bio click. Below the fold, the full biography scrolls out for people who want depth.

## Technical spec

- **Static site** — plain HTML, CSS, and minimal JS. No framework needed.
- **Fonts** — Google Fonts: `Francois One` for headings (all caps), `Cardo` for body text
- **Hosting** — will deploy to Netlify (or similar) and point seaninsound.com at it
- **Structure** — single `index.html`, one `style.css`, one `assets/` folder for the headshot image
- **Responsive** — must work on mobile (Linktree section especially, as most traffic will be from social bio links)
- **No JavaScript frameworks** — vanilla JS only, and only if needed (e.g., smooth scroll, maybe a simple timeline expand/collapse)
- **Photo credit** — "Photo: Jen McCord / SheSaidSo" in small text near the image

## Design direction

**Match the Drowned in Sound brand from drownedinsound.org:**

- **Background:** Black (`#000000` or very near-black `#0A0A0A`)
- **Primary text:** White (`#FFFFFF`)
- **Accent colour:** DiS pink (`#FF1493` or match the exact pink from drownedinsound.org — it's a hot magenta pink)
- **Secondary text:** A warm light grey (`#CCCCCC` or similar)
- **Links:** Pink on hover, white default
- **Headings:** `Francois One`, all uppercase, white or pink
- **Body text:** `Cardo`, regular weight, white on black, comfortable line-height (1.6–1.7)
- **Overall feel:** Dark, bold, confident but not corporate. Music venue poster energy, not tech startup landing page.

**Layout principles:**
- Generous whitespace between sections
- No cards or boxes with borders — let content breathe on the black background
- Horizontal pink rules to divide sections (thin, 1px)
- No gradients, no shadows, no rounded corners on containers
- Links are underlined or pink, not buttons (except the Linktree section which uses pill-shaped link buttons)

## Site structure (single scrolling page)

### Section 1: HERO + LINKTREE (above the fold)

This is the Linktree. It should work as a standalone experience for people who don't scroll.

**Layout:** Centred, stacked vertically. Photo (circular crop, ~150px), name, one-line title, then link buttons.

**Content:**

- **Photo:** `sean-headshot.jpg` (included in assets folder), circular crop
- **Name:** SEAN ADAMS (Francois One, large, white)
- **Title line:** Founder, Drowned in Sound · Podcast Host · Journalist · Artist Manager (Cardo, smaller, grey)
- **Quote:** *"Music is upstream from politics."* (Cardo italic, pink)

**Link buttons** (pill-shaped, pink outline on black, white text, pink fill on hover):

1. Subscribe to DiS Newsletter → https://drownedinsound.org
2. Listen to the DiS Podcast → https://drownedinsound.org/podcasts/
3. Read my Huck essay → https://www.huckmag.com/article/music-journalism-crisis-oblivion-salvation-save-association-editors-sean-adams-drowned-in-sound
4. The Sounding → https://thesounding.org
5. Association of Music Editors → https://music-editors.com
6. Contact me → mailto:sean@drownedinsound.org

**Social icons row** (small, below the links):
- LinkedIn: https://linkedin.com/in/seaninsound
- Bluesky: https://bsky.app/profile/drownedinsound.bsky.social
- Instagram: https://instagram.com/seaninsound

**Scroll indicator:** A subtle downward chevron or "More below" hint at the bottom of this section.

---

### Section 2: THE ARGUMENT

**Section heading:** WHY MUSIC MATTERS (Francois One, pink, all caps)

**Pull quote (large, Cardo italic, white):**
> "If you're reading this, congratulations. Choosing to focus your pupils on this is bad for the business interests of the attention economy. Right now, you could be watching four videos and two adverts, so in a few ways, reading this is an act of resistance."

**Body text (Cardo, white):**

For years, the Breitbart doctrine — "politics is downstream from culture" — was weaponised by the far right to pummel the inclusive world of music with smears and abuse. I believe it's time to flip that around: culture and working people are upstream of these billionaires and their angry army of riled-up trolls.

Corporate power has consolidated across the music industry in ways most fans don't see. The same private equity buying up festivals is investing in fossil fuel. Spotify CEO Daniel Ek has invested heavily in military AI company Helsing. Deezer's Len Blavatnik — who also owns a large stake in Warner Music — has been sanctioned by Ukraine whilst supporting Netanyahu.

Music fans have far more collective power than they realise. Everything I've built — from releasing records and promoting grassroots shows to running tactical voting campaigns — has been about building the infrastructure for that power to be discovered and used.

---

### Section 3: WHAT I'M BUILDING NOW

**Section heading:** NOW (Francois One, pink, all caps)

Each item as a compact block — bold title in pink, description in white Cardo:

**Drowned in Sound Podcast Network** (launching April 2026)
The DiS Podcast — hopeful, future-facing conversations with extraordinary artists and cultural leaders reshaping the music ecosystem. Recent guests include Enter Shikari, Faithless, Kelly Lee Owens, Sofia Isella, Tori Tsui, Lord Kevin Brennan (Culture Media and Sport Committee), and Gazelle Twin. 300,000 impressions/month. 50,000 downloads/year. +100% growth in the last 6 months. Sponsored by Qobuz.

**The DiS Newsletter**
A weekly publication about the future of music to 10,000+ subscribers (46% open rate). Solutions-focused journalism investigating streaming economics, venue closures, gender equity, AI, and climate — alongside the music recommendations DiS was built on.

**The DiS Community**
The forums launched alongside the website in 2000, survived the hiatus, and still rack up 2–3 million pageviews a month. A quarter of a century old and still going.

**The Sounding** (co-founded with Tom Venvell, 2025)
A transmedia production house and growth consultancy for purpose-driven brands across music, wellness, and social sectors.

**Association of Music Editors** (founded 2025)
A collective voice for editors of music publications, podcasts and zines. Because music journalism has been fracked by an attention economy that prioritises volume and rage-bait over quality and insight.

**Spotify Exodus series** (2025)
DiS's investigative coverage of the #DisarmSpotify movement catalysed an artist and fan movement, generating 10 million+ campaign impressions.

**Music Fans Voice**
A survey engaging 8,000 participants that helped drive the UK government to launch a fan-led review of live music.

---

### Section 4: THE WORLD I BUILT

**Section heading:** TRACK RECORD (Francois One, pink, all caps)

**Intro quote (Cardo italic, grey):**
> "I have a habit of finding something special. I then get truly obsessed."

**Body text:**

I started reviewing demos by Muse, Coldplay, and Cooper Temple Clause as a teenager in Dorset, publishing an email fanzine called The Last Resort from 1998 — some of those were the artists' very first interviews. I simultaneously worked in a record shop ("more like Empire Records than High Fidelity") and promoted a weekly live music club night — booking acts including Ash and jj72, and building the venue's website — all before turning 20.

> "Hearing Muse's first demo and seeing their rise and rise and rise — despite the music press being dismissive and a bit snobby about them — was definitely a big catalyst."

**Subsections** (each with a bold pink label and white text):

**Publication:** Drowned in Sound (2000–present), reaching 3 million music fans annually at its peak. Also spawned The Quietus in 2008.

**Record label:** DiS Recordings (from 2003), releasing debuts by Kaiser Chiefs, Bat for Lashes, Emmy the Great, The Stills, Brett Anderson, Martha Wainwright (80,000 CDs sold), and Metric.

**Live promotion & festival curation:** 16 years (2000–2017) of club nights and festival stages — from the Barfly and Dublin Castle to SXSW, Iceland Airwaves, and The Great Escape (launch curator), the relaunched Camden Crawl, and Summer Sundae. Programmed stages at Iceland Airwaves and SXSW. Artists platformed include Laura Marling, Biffy Clyro, Jamie T, M83, Foals, Santigold, Frightened Rabbit, and many more.

**Curation:** One of the UK's first music podcasts (2005), curated playlists for Spotify's official blog (2010–2011), and ran Independent Music Monday (2015–2017, supported by [PIAS]). From early Spotify curation to recent investigative coverage of the #DisarmSpotify movement — tracking the platform's journey from cultural promise to ethical flashpoint.

**Interviews:** Over 25 years of conversations with artists from Paramore and Nine Inch Nails to St. Vincent, Bon Iver, and hundreds more — driven by curiosity about where a guest's excitement lives.

**Artist championing:** 68% hit rate for early championing across 25 years of Album of the Year lists. Among the first UK journalists to back Muse (from their earliest demos), Lizzo, Bon Iver (saw him the day he signed to 4AD at SXSW), and St. Vincent (covered first album, made the second Album of the Year). Gender representation in DiS's annual picks has risen from ~12% to ~45%.

---

### Section 5: BEYOND MUSIC

**Section heading:** BEYOND MUSIC (Francois One, pink, all caps)

Compact list, each item with bold pink label:

- **Tactical voting:** Oversaw strategic comms for StopTheTories.vote alongside Carol Vorderman, reaching 1.75 million people during the 2024 UK general election.
- **BBC Radio 6 Music:** Social Media Producer for 4+ years (2016–2021), managing the station's social strategy and creating viral content.
- **Max Richter / UN Human Rights:** Head of Digital at Studio Richter Mahr (2021–2022), working on three album campaigns alongside Richter's work with UN Human Rights.
- **The Trawl:** Produced the political podcast hosted by Marina Purkiss and Jemma Forte. It subsequently joined Gary Lineker's Goalhanger family of podcasts.
- **The Sunday Times:** "My Generation" columnist in the Culture section (2009–2012).
- **Soho Radio:** Host for nearly six years (2015–2021).
- **Love Music Hate Racism:** Partnered on tours and the 2008 LMHR Carnival in Victoria Park.
- **Artist management:** Charlotte Church, The Anchoress (ongoing), Ed Harcourt, Juanita Stein (Howling Bells), Max Richter.

---

### Section 6: RECOGNITION

**Section heading:** RECOGNITION (Francois One, pink, all caps)

**Awards:**
- The Times: Top 30 Power Players Under 30
- Record of the Day: Best Podcast (2006), Best Online Music Publication (2007), Best Publication (2010)
- The Observer: DiS ranked 9th in Top 25 Websites (2006)
- Nominated: NME Best Website, BT Digital Music Awards, PLUG Awards (2007)

**Judging:**
Judge for BRITs Critics' Choice, AIM Awards, BBC Sound of…, BT Music Awards, Music Producers Guild Awards, and Scottish Album of the Year (SAY Award).

**Speaking:**
SXSW, Iceland Airwaves, Tallinn Music Week, Tony Wilson's In The City, Primavera Pro, SoAlive (Sofia), Live At Leeds, and New Zealand touring conference. Masterclasses at EEMA, BIMM, and ICMP.

**Press quotes (large Cardo italic):**
> "The discerning indie fan's first point of reference." — The Observer
> "For any rock misfit searching for an alternative to the mainstream music press, immersion in Drowned in Sound is a must." — The Times

---

### Section 7: DIS IS…

**No heading** — just the quote block, centred, Cardo italic, slightly larger than body text:

> DiS is that hopeful vision in your mind's eye the Monday morning after Glastonbury.
>
> It's the goosebumps you got when you first heard Björk, Billie Eilish, Aurora, ANOHNI or Brian Eno speak about the environment in ways that felt far too close to home and made global change feel urgent.
>
> It's that realisation that your speakers were distorting when you turned Rage Against The Machine beyond eleven.
>
> It's that moment you truly understood what Dead Prez, Kathleen Hanna or Kendrick Lamar meant about injustice.
>
> It's not just believing that a new world is possible, it's working together to make it real.

---

### Section 8: FOOTER

- **Contact:** sean@drownedinsound.org
- **Social links:** LinkedIn, Bluesky, Instagram (repeat from hero)
- **Small text:** Photo by Jen McCord / SheSaidSo · Site content © Sean Adams 2026
- **Quote in small pink italic:** *"It is better to be a flamboyant failure than any kind of benign success." — Malcolm McLaren*

---

## Files to create

```
seaninsound.com/
├── index.html
├── style.css
├── assets/
│   └── sean-headshot.jpg
└── README.md
```

## Key links reference

| Link | URL |
|------|-----|
| DiS Newsletter | https://drownedinsound.org |
| DiS Podcast | https://drownedinsound.org/podcasts/ |
| Huck essay | https://www.huckmag.com/article/music-journalism-crisis-oblivion-salvation-save-association-editors-sean-adams-drowned-in-sound |
| The Sounding | https://thesounding.org |
| Association of Music Editors | https://music-editors.com |
| LinkedIn | https://linkedin.com/in/seaninsound |
| Bluesky | https://bsky.app/profile/drownedinsound.bsky.social |
| Instagram | https://instagram.com/seaninsound |
| Times 30 Under 30 | https://archive.is/2021.10.02-052723/https://www.thetimes.co.uk/article/the-top-30-power-players-under-30-79hnqksf6gw |
| Music Is The Answer Q&A | https://musicistheanswer.substack.com/p/sean-adams |
| DiS Bandcamp (label catalogue) | https://drownedinsound.bandcamp.com |
| Email | sean@drownedinsound.org |

## Important design notes

- The site should feel like a music venue at night — dark, confident, a bit punk — not a corporate landing page
- Francois One ALL CAPS for every heading. Cardo for everything else.
- The pink should pop against the black. Use it sparingly — headings, hover states, accent lines — not as background fill
- Mobile first. The Linktree section is where most visitors will land from phone
- No animations except subtle hover states on links/buttons
- No hamburger menu — it's a single page, use anchor scroll if needed
- The photo should be high quality but not enormous file size — compress to ~200KB
