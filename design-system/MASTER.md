# Design System Master File

> **Canonical source of truth for aiplease.au.** Project-specific copy also lives at
> `design-system/ai-please/MASTER.md` — keep both in sync.
>
> **LOGIC:** When building a specific page, first check `design-system/pages/[page-name].md`.
> If that file exists, its rules **override** this Master file.
> If not, strictly follow the rules below.

---

**Project:** AI Please
**Category:** B2B AI Consultancy

---

## Global Rules

### Color Palette

> **LOCKED BRAND — source of truth.** Ignore any palette the UI UX Pro Max engine proposes.

| Role | Hex | CSS Variable | Usage |
|------|-----|--------------|-------|
| Chocolate (dark bg) | `#291F16` | `--color-chocolate` | Dark backgrounds, headers, hero blocks, ink sections |
| Stone (light surface) | `#E5E2DD` | `--color-stone` | Page background, light panels, primary text on dark |
| Rock (muted) | `#BEB8AA` | `--color-rock` | Muted text, descriptors, secondary surfaces |
| Vermilion (accent) | `#FE4939` | `--color-vermilion` | Single accent — CTAs, hover, active states only |
| Sky (tint) | `#C7E3EE` | `--color-sky` | Secondary tint — use sparingly |

**Color Notes:** Anti-theatre brand. One accent only (vermilion). No gradients, glow, or AI purple/pink.

### Typography

> **LOCKED BRAND — source of truth.** Ignore any fonts the UI UX Pro Max engine proposes.

- **UI Font:** SFT Schrifted Sans
- **Wordmark Font:** Serif wordmark
- **Current fallbacks (until SFT Schrifted Sans files ship):** Hanken Grotesk (UI), Bricolage Grotesque (display/wordmark)
- **Mood:** Professional, restrained, editorial, trustworthy — minimal and anti-theatre
- **Monospace (code/labels):** IBM Plex Mono

**Do not substitute Google Fonts or engine-proposed pairings (e.g. Lexend, Source Sans 3).**

---

_For pattern, UX rules, effects guidance, component specs, anti-patterns, and the pre-delivery checklist, see `design-system/ai-please/MASTER.md`._