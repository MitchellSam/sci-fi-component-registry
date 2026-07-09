import * as React from "react"

import { cn } from "@/lib/utils"

const CATEGORY: Record<string, string> = {
  story: "var(--stasis, #4d77c4)", // blue — story/quest
  npc: "var(--strand, #4fa86b)", // green — character/NPC
  competitive: "var(--destructive)", // red — PvP/competitive
  investment: "var(--rarity-legendary, #61417a)", // purple — item investment
  neutral: "var(--border-strong, var(--border))",
  gold: "var(--primary)",
}

/**
 * Info plate with category-colored header: a category-colored
 * 3px top edge and header band (with optional emblem + eyebrow + title),
 * then a translucent, blurred body.
 *
 * `category` is one of story | npc | competitive | investment | neutral |
 * gold, or any CSS color.
 */
function Plate({
  category = "story",
  eyebrow,
  title,
  emblem,
  headerRight,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  category?:
    | "story"
    | "npc"
    | "competitive"
    | "investment"
    | "neutral"
    | "gold"
    | (string & {})
  eyebrow?: React.ReactNode
  title?: React.ReactNode
  emblem?: React.ReactNode
  headerRight?: React.ReactNode
}) {
  const accent = CATEGORY[category] ?? category

  return (
    <div
      data-slot="plate"
      className={cn(
        "backdrop-blur-[6px] [background:color-mix(in_srgb,var(--popover)_92%,transparent)] [box-shadow:var(--shadow-plate,0_2px_18px_-6px_rgb(0_0_0/0.7))]",
        className
      )}
      style={{ borderTop: `3px solid ${accent}`, ...style }}
      {...props}
    >
      {(title || eyebrow || emblem) && (
        <div
          className="flex items-center gap-3 px-4 py-3"
          style={{
            background: `linear-gradient(90deg, color-mix(in srgb, ${accent} 26%, transparent), color-mix(in srgb, ${accent} 6%, transparent))`,
          }}
        >
          {emblem && <div className="flex flex-none">{emblem}</div>}
          <div className="min-w-0 flex-1">
            {eyebrow && (
              <div
                className="mb-0.5 text-[11px] uppercase [font-family:var(--font-display,inherit)] [letter-spacing:var(--track-label,0.08em)]"
                style={{
                  color: `color-mix(in srgb, var(--foreground) 70%, ${accent})`,
                }}
              >
                {eyebrow}
              </div>
            )}
            {title && (
              <div className="text-lg leading-[1.05] font-semibold text-foreground uppercase [font-family:var(--font-display,inherit)] [letter-spacing:var(--track-label,0.08em)]">
                {title}
              </div>
            )}
          </div>
          {headerRight && <div className="flex-none">{headerRight}</div>}
        </div>
      )}
      {children && (
        <div className="px-4 py-3.5 text-sm text-popover-foreground">
          {children}
        </div>
      )}
    </div>
  )
}

export { Plate }
