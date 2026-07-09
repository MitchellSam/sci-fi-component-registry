import * as React from "react"

import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  gold: "var(--primary)",
  cyan: "var(--cyan, var(--ring))",
  crimson: "var(--destructive)",
  arc: "var(--arc, #4fb6d8)",
  solar: "var(--solar, #e8743b)",
  void: "var(--void, #8b5ba6)",
}

const CHEVRON_CLIP =
  "polygon(0 0, 50% 60%, 100% 0, 100% 38%, 50% 100%, 0 38%)"

/**
 * Rank chevron stack — progression insignia.
 * Renders `count` nested chevrons; `filled` of them are colored,
 * the rest are dim outlines. `tone` is a named tone or any CSS color.
 */
function RankChevron({
  count = 3,
  filled = 3,
  tone = "gold",
  size = 40,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  count?: number
  filled?: number
  tone?: string
  size?: number
}) {
  const color = TONES[tone] ?? tone

  return (
    <div
      data-slot="rank-chevron"
      className={cn("inline-flex flex-col items-center", className)}
      {...props}
    >
      {Array.from({ length: count }).map((_, i) => (
        <div
          key={i}
          style={{
            width: size,
            height: size * 0.34,
            clipPath: CHEVRON_CLIP,
            background:
              i < filled
                ? color
                : "color-mix(in srgb, var(--muted-foreground) 40%, transparent)",
            marginTop: i === 0 ? 0 : -size * 0.12,
          }}
        />
      ))}
    </div>
  )
}

export { RankChevron }
