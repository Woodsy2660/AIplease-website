<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

## UI tooling — routing rules

Two UI helpers are installed and do different jobs. For ANY UI / frontend / design
task, follow this order.

### Roles
- UI UX Pro Max — the DECISION + GUARDRAIL brain. A design-intelligence engine at
  `.claude/skills/ui-ux-pro-max/scripts/search.py`. Picks layout patterns, UX rules,
  and anti-patterns; runs the pre-delivery checklist. It does NOT set our colours or
  fonts — the brand is already locked.
- Magic UI MCP (`magicuidesign-mcp`) — the ACCENT COMPONENT hands. Animated React
  components. Used sparingly, only for specific brand-safe motion. NEVER the default.

### Order of operations
1. PLAN with UI UX Pro Max first. Before writing a component, query it for the page
   type to get the recommended pattern + UX guidelines + anti-patterns. For this
   site, bias to the "Trust & Authority" and "Social Proof" landing patterns.
   Example: `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "<page type> consulting" --design-system`
2. BRAND OVERRIDES ITS SUGGESTIONS. `design-system/MASTER.md` is the source of truth
   (chocolate #291F16 / stone #E5E2DD / rock #BEB8AA / vermilion #FE4939 / sky
   #C7E3EE; SFT Schrifted Sans + serif). Ignore any palette/font it proposes.
3. BUILD with the base stack — shadcn + Shadcnblocks, styled with our tokens. This
   covers ~95% of UI. Do not reach for Magic UI just because it exists.
4. Use Magic UI MCP ONLY for a specific accent from the ALLOWED list, and only when
   it earns its place. Fetch via the MCP, then RE-SKIN to our tokens and TONE DOWN
   the motion.
5. VALIDATE with UI UX Pro Max's pre-delivery checklist before calling it done
   (contrast ≥4.5:1, visible focus states, prefers-reduced-motion respected,
   responsive at 375/768/1024/1440, no emoji-as-icons, cursor-pointer on clickables).

### Magic UI — allowed vs banned (anti-theatre brand)
ALLOWED (subtle, purposeful only): blur-fade / fade-in text reveals, number-ticker
for stats, ONE slow marquee of client logos, a very low-opacity animated-grid-pattern
in a hero. Border-beam only if near-invisible.
BANNED (breaks the brand — never use): neon-gradient-card, meteors, particles,
confetti, retro-grid, warp-background, shine-border, cool-mode, sparkles, ripple,
and any glow / aurora / gradient-mesh effect. If a task seems to want these, use a
static equivalent.
Every animation respects `prefers-reduced-motion` and uses calm durations
(150–300ms, no bounce, no spring).

### When to use NEITHER
Copy, content, config, backend, routing, or anything a plain shadcn component already
handles → don't invoke either tool.
