# seaninsound.com

Sean Adams' personal site. Plain static HTML and CSS, no build step.

## Run it locally

    python3 -m http.server 8765

Then open http://localhost:8765. (`.claude/launch.json` has the same config.)

## What lives where

- `index.html` - the live homepage. Styles are in `style.css`.
- `impact.html`, `spotify-royalty.html`, `dis-podcast-stats.html` - standalone DiS pages and carousel slides.
- `tori-*.html` - timeline pages made for Tori Tsui. Not linked from the homepage. Their URLs may have been shared, so check before moving them.
- `archive/` - retired pages kept for reference.
- `assets/` - images. Run images through compression before adding (see `tasks/lessons.md`).
- `CLAUDE.md` - voice, brand and workflow rules for working on this site.
- `tasks/` - `todo.md` for the current pass, `lessons.md` for mistakes not to repeat.

## Brand checks before shipping

Francois One headlines in ALL CAPS, Cardo body, nothing under 14px, no grey text on dark backgrounds (white or `#FF2E95` only), no em-dashes.
