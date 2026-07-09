# Sci-Fi UI Registry

A dark, angular, sci-fi design system and shadcn/ui registry for personal projects. Install into any shadcn + Tailwind v4 project with `npx shadcn add`.

## Structure

```
├── sci-fi-ui-system/        Design reference & component source
│   ├── components/          React JSX components
│   ├── tokens/              CSS token files (colors, typography, spacing, motion)
│   └── readme.md            Design language guide
└── sci-fi-registry/         Production-ready shadcn registry
    ├── registry.json        Registry manifest
    ├── registry/ui/         Component source files
    ├── r/                   Pre-built JSON for consumption
    ├── package.json
    └── README.md            Install instructions
```

## Quick Start

### Install into a project

```sh
R=https://raw.githubusercontent.com/MitchellSam/sci-fi-component-registry/main/sci-fi-registry/r

npx shadcn@latest add "$R/theme.json"
npx shadcn@latest add "$R/button.json" "$R/input.json" "$R/dialog.json" "$R/badge.json"
npx shadcn@latest add "$R/corner-frame.json" "$R/plate.json" "$R/diamond.json" \
  "$R/rank-chevron.json" "$R/stat-bar.json" "$R/progress-capsule.json"
```

Then add fonts to your HTML:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&family=Hanken+Grotesk:ital,wght@0,300..800;1,300..800&display=swap" rel="stylesheet" />
```

Add `class="dark"` to `<html>` for the canonical dark theme, or omit for light.

### Working locally

```sh
cd sci-fi-registry
npm install
npx serve -l 9911 r     # terminal 1
npx shadcn add http://localhost:9911/theme.json   # terminal 2, etc.
```

## Design Language

**Palette**: Near-black slate substrate (`#0a0e15`), Tower gold (`#c9a23a`), engram cyan (`#38a9c4`), crimson (`#c1352b`).

**Components**: Button, Input, Dialog, Badge (with categorical + rarity variants), plus CornerFrame (density control), Plate, Diamond, RankChevron, StatBar, ProgressCapsule.

**Themes**: Dark (default, full intensity) and light ("wash" variant, pale substrate). Set via `.dark` class.

**Shape language**: Hard 0px corners, hairline 1px borders, L-shaped brackets, clip-path shapes (diamonds, chevrons), cyan focus glow.

See `sci-fi-ui-system/readme.md` for full design documentation.

## Rebuilding the Registry

After editing components in `sci-fi-registry/registry/ui/`:

```sh
cd sci-fi-registry
npm run registry:build   # runs `shadcn build --output ./r`
```

Commit the rebuilt `r/` files to GitHub.

## License

Personal design system. Use freely in your own projects.
