import * as React from "react"

import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  crimson: "var(--destructive)",
  cyan: "var(--cyan, var(--ring))",
  gold: "var(--primary)",
  void: "var(--void, #8b5ba6)",
  solar: "var(--solar, #e8743b)",
  arc: "var(--arc, #4fb6d8)",
  neutral: "var(--border-strong, var(--border))",
}

const DIAMOND_CLIP = "polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"

/**
 * Diamond / rhombus emblem container — the emblem &
 * faction marker. Renders children (an icon, number, or glyph) centered.
 * `framed` adds the thin outer bracket frame seen behind HUD markers.
 * `tone` is a named tone or any CSS color.
 */
function Diamond({
  size = 72,
  tone = "crimson",
  filled = true,
  framed = false,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  size?: number
  tone?: string
  filled?: boolean
  framed?: boolean
}) {
  const color = TONES[tone] ?? tone

  const inner = (
    <div
      data-slot="diamond"
      className={cn(
        "flex items-center justify-center font-light [font-family:var(--font-display,inherit)]",
        !framed && className
      )}
      style={{
        width: size,
        height: size,
        clipPath: DIAMOND_CLIP,
        background: filled ? color : "transparent",
        border: filled ? "none" : `2px solid ${color}`,
        color: filled ? "var(--slate-100, #e8ecf1)" : color,
        fontSize: size * 0.3,
        ...(!framed && style),
      }}
      {...(!framed && props)}
    >
      {children}
    </div>
  )

  if (!framed) return inner

  return (
    <div
      data-slot="diamond-frame"
      className={cn("relative flex items-center justify-center", className)}
      style={{ width: size * 1.5, height: size * 1.5, ...style }}
      {...props}
    >
      <div
        aria-hidden
        className="absolute"
        style={{
          width: size * 1.25,
          height: size * 1.25,
          clipPath: DIAMOND_CLIP,
          border: `1px solid color-mix(in srgb, ${color} 55%, transparent)`,
        }}
      />
      {inner}
    </div>
  )
}

export { Diamond }
