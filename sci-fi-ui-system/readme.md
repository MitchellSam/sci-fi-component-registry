# Sci-Fi UI Design System

A dark, angular, sci-fi design system for dashboards, apps, personal sites, and interfaces with a sleek, minimal aesthetic. The language is inspired by sci-fi HUDs: dark slate substrate, gold primary accent, cyan focus states, zero-radius corners, thin geometric line-work.

## Architecture

The system is organized as **token layer + components**:
- **Tokens** — colors (slate substrate, gold, cyan, status semantics), typography (Archivo display, Hanken Grotesk body), spacing, motion, borders, shadows, scrims
- **Components** — Button, Input, Dialog, Badge, Card, CornerFrame, Plate, Diamond, RankChevron, StatBar, ProgressCapsule, plus navigation/content/data primitives
- **Themes** — dark (default) and light ("wash" variant with pale substrate)

## Core Design Language

**Palette**: Near-black cool slate (`#0a0e15`), Tower gold (`#c9a23a`), engram cyan (`#38a9c4`), crimson (`#c1352b`), plus categorical colors (arc, solar, void, stasis, strand) and rarity tiers (common → exotic).

**Shape**: Hard 0px corners on plates and cards; L-shaped corner brackets optional; hairline 1px borders; clip-path shapes (diamonds, chevrons, hexagons).

**Typography**: Uppercase tracked labels (letter-spacing: 0.08em), thin numerals (200–300 weight), body copy in sentence case.

**Surfaces**: Semi-transparent fills over blurred backgrounds; elevation via darkening + scrims, not shadows; glows for focus/selection.

**Density control**: `CornerFrame density="full"` (brackets, tick, glow, max intensity) or `density="minimal"` (hairline frame, calm). Same palette and type either way.

**Interaction**: Cyan focus glow, 120ms transitions with sharp easing, mechanical press (scale 0.98).

## Token Files

- `tokens/colors.css` — slate scale, primary/secondary accents, status colors, semantic aliases
- `tokens/themes.css` — light theme overrides (`[data-theme="light"]`)
- `tokens/typography.css` — type scale, weights, tracking, line-heights
- `tokens/spacing.css` — spacing scale, radii, borders, shadows, scrims, motion
- `tokens/fonts.css` — Google Fonts imports (Archivo, Hanken Grotesk)

## Components

Located in `components/` organized by category:

**Core**: Button, IconButton, Badge, Diamond, RankChevron, ProgressCapsule, StatBar
**Forms**: Input, Textarea, Select, Checkbox, Radio, Switch
**Feedback**: Modal, Toast, Tooltip, Progress, Spinner
**Navigation**: Navbar, Sidebar, Breadcrumb, Link, Footer
**Surfaces**: Card, CornerFrame, Plate
**Content**: Prose (long-form typography)
**Data**: Table, TabNav, Avatar

## For Consuming Projects

This folder is a **design reference and component source**. The production artifact is the [sci-fi-registry](../sci-fi-registry/) — a shadcn/ui registry you install via `npx shadcn add https://raw.githubusercontent.com/USER/REPO/main/r/theme.json`.

The components here are JSX prototypes showing the design in React. For production use, pull from the registry's built JSON files (`r/*.json`) which are optimized for the shadcn install flow.

## Notes

- Semantic token names (arc, solar, void, stasis, strand, rarity-common through rarity-exotic) are category/tier labels, not game-specific branding
- No emoji used; meaning carries via geometric iconography and color
- The design is general-purpose: works for dashboards, portfolios, marketing sites, or any interface wanting this aesthetic
