# Sci-Fi Registry

A personal [shadcn/ui registry](https://ui.shadcn.com/docs/registry) that re-skins any
shadcn + Tailwind v4 project with a dark, angular sci-fi aesthetic. The components here
are built from the design system in [`../sci-fi-ui-system/`](../sci-fi-ui-system/). Drop into a project with `npx shadcn add` — no npm package, no build step in the consuming app.

It has two layers:

1. **`theme`** — merges the sci-fi palette into your project's CSS variables.
   Every *stock* shadcn component immediately picks it up: near-black slate substrate,
   gold primary, cyan focus ring, crimson destructive, `--radius: 0` (hard corners),
   categorical hues as the chart palette. Dark (`.dark`) is the default; light is a pale wash.
2. **Components** — drop-in *replacements* for `button`, `input`, `dialog`, `badge`
   (same APIs as stock shadcn, restyled: uppercase tracked labels, hairlines, corner
   brackets, glows) plus specialized components with no stock equivalent:
   `corner-frame`, `plate`, `diamond`, `rank-chevron`, `stat-bar`, `progress-capsule`.

Requirements in the consuming project: **Tailwind v4** + **shadcn CLI v3+** (the
components use v4 syntax like `bg-[var(--x)]/15`; the theme merge relies on the CLI's
`cssVars` support).

---

## Installing into a personal project

### 1. Push the repo to GitHub

Push the entire repo (which contains both `sci-fi-ui-system/` and `sci-fi-registry/`) as a **public** repo on GitHub. The pre-built JSON in [`r/`](./r/) is what gets consumed, straight off `raw.githubusercontent.com` — commit it.
(Private repo? The CLI can't send auth to raw URLs — use the [local option](#option-b--install-from-local-disk) instead.)

### 2. Set up shadcn as usual

```sh
npm create vite@latest my-app -- --template react-ts   # or Next.js, etc.
# … add Tailwind v4 per the shadcn docs for your framework …
npx shadcn@latest init
```

### 3. Add the theme, then whatever components you want

Replace `USER/REPO` with your GitHub repo (and `main` if your branch differs):

```sh
R=https://raw.githubusercontent.com/USER/REPO/main/sci-fi-registry/r

npx shadcn@latest add "$R/theme.json"

# drop-in replacements for stock shadcn parts (use --overwrite if stock versions exist)
npx shadcn@latest add --overwrite "$R/button.json" "$R/input.json" "$R/dialog.json" "$R/badge.json"

# the game-flavor components
npx shadcn@latest add "$R/corner-frame.json" "$R/plate.json" "$R/diamond.json" \
  "$R/rank-chevron.json" "$R/stat-bar.json" "$R/progress-capsule.json"
```

`theme` rewrites the `:root` / `.dark` variables in your global CSS in place and appends
the `.scifi-*` helper classes. Components land in `components/ui/` like any shadcn
component — they're yours to edit per project.

### 4. Load the fonts

The theme's font stacks (`--font-display` = Archivo, `--font-text` = Hanken Grotesk) gracefully fall back to `system-ui`
until you load them. Add to your `index.html` / root layout:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Hanken+Grotesk:ital,wght@0,300..800;1,300..800&display=swap"
  rel="stylesheet"
/>
```

### 5. Go dark

The default look is the dark theme — add `class="dark"` to `<html>` (or wire
up `next-themes` / your usual toggle; the theme uses shadcn's standard `.dark`
convention). Without it you get the light wash.

### Option B — install from local disk

No GitHub needed; serve the registry folder and point the CLI at localhost:

```sh
npx serve -l 9911 sci-fi-registry/r     # terminal 1 (run from repo root)
npx shadcn@latest add http://localhost:9911/theme.json   # terminal 2, etc.
```

(Heads-up: passing a Windows path like `C:\…\r\theme.json` directly to `shadcn add`
fails — the drive letter parses as a URL scheme. Serving over localhost avoids it.)

---

## What's inside

| Item | Type | Notes |
| --- | --- | --- |
| `theme` | theme | Palette (dark + light), `--radius: 0`, categorical chart colors, all theme tokens (below), `.scifi-*` helpers |
| `button` | replaces stock | `variant`: default (gold) / outline / secondary / ghost / destructive / link; `size`: sm / default / lg / icon; supports `asChild` |
| `input` | replaces stock | Hairline over translucent well, cyan focus rim + glow |
| `dialog` | replaces stock | Blurred scrim, gold top edge, cyan corner brackets (`brackets={false}` to disable), uppercase title |
| `badge` | replaces stock | Extra variants: `cyan`, `arc`, `solar`, `void`, `stasis`, `strand`, `common` … `exotic` |
| `corner-frame` | new | The density knob: `density="full"` (brackets + tick + glow) or `"minimal"`; `tone` cyan/gold/crimson or any CSS color |
| `plate` | new | Category-colored tooltip plate: `category` story/npc/competitive/investment/neutral/gold; `eyebrow`, `title`, `emblem`, `headerRight` |
| `diamond` | new | Rhombus emblem (clip-path); `size`, `tone`, `filled`, `framed` |
| `rank-chevron` | new | Chevron stack; `count`, `filled`, `tone`, `size` |
| `stat-bar` | new | Labeled thin stat readout; `label`, `value`, `max`, `tone`, `showValue` |
| `progress-capsule` | new | Pill progress; continuous (`value`) or segmented (`segments`, `filledSegments`) |

### Tokens the theme adds

Beyond the standard shadcn variables, everything is available as raw CSS vars and (for
colors) Tailwind utilities:

- **Accents**: `--gold`, `--gold-bright`, `--gold-deep`, `--cyan(-bright/-deep)`,
  `--crimson(-bright/-deep)` → `bg-gold`, `text-gold-bright`, …
- **Elemental**: `--arc`, `--solar`, `--void`, `--stasis`, `--strand` (also
  `--chart-1…5`) → `text-arc`, `bg-solar/20`, …
- **Rarity ladder**: `--rarity-common` → `--rarity-exotic`
- **Raw slate scale**: `--slate-1000` … `--slate-100` (theme-invariant)
- **Type**: `--font-display`, `--font-text`, tracking (`--track-mega/wide/label/tight`)
- **Chrome**: `--glow-focus`, `--glow-gold`, `--shadow-plate`, `--shadow-pop`,
  `--overlay-scrim`, `--scrim-bottom`, `--scrim-full`, `--wash-panel`,
  `--border-hairline`, `--border-strong`, `--accent-text`
- **Motion**: `--dur-fast/base/slow`, `--ease-sharp`, `--ease-out-accent`

### Helper classes

`.scifi-label` (uppercase tracked micro-label) · `.scifi-eyebrow` (accent micro-eyebrow) ·
`.scifi-title` (uppercase tracked heading) · `.scifi-numeral` (thin tabular stat numerals) ·
`.scifi-flavor` (italic copy)

---

## Editing / rebuilding

Component sources live in [`registry/ui/`](./registry/ui/); the theme's
variables live in [`registry.json`](./registry.json) under the `theme` item. After any
change, rebuild the consumable JSON and commit both:

```sh
npm run registry:build   # runs `shadcn build --output ./r`
```

Projects that already installed a component keep their copy — rerun
`npx shadcn add --overwrite …` there to pull the update.
