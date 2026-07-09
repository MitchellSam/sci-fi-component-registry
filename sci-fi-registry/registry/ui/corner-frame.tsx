import * as React from "react"

import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  cyan: "var(--ring)",
  gold: "var(--primary)",
  crimson: "var(--destructive)",
}

const BRACKETS = [
  "-top-px -left-px border-t-2 border-l-2",
  "-top-px -right-px border-t-2 border-r-2",
  "-bottom-px -left-px border-b-2 border-l-2",
  "-bottom-px -right-px border-b-2 border-r-2",
]

/**
 * Decorative HUD frame — the knob that controls visual density.
 * Wraps any content and draws angular chrome around it:
 * L-shaped corner brackets, an optional scan-line top tick, and an
 * optional ambient glow.
 *
 *   density="full"    → brackets + tick + glow (the dense HUD look)
 *   density="minimal" → just a hairline frame (calm, for sites/apps)
 *
 * Individual flags (brackets / glow / tick) override the density preset.
 * `tone` is "cyan" | "gold" | "crimson" or any CSS color.
 */
function CornerFrame({
  density = "minimal",
  tone = "cyan",
  brackets,
  glow,
  tick,
  className,
  style,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  density?: "full" | "minimal"
  tone?: "cyan" | "gold" | "crimson" | (string & {})
  brackets?: boolean
  glow?: boolean
  tick?: boolean
}) {
  const full = density === "full"
  const showBrackets = brackets ?? full
  const showGlow = glow ?? full
  const showTick = tick ?? full
  const toneColor = TONES[tone] ?? tone

  return (
    <div
      data-slot="corner-frame"
      className={cn(
        "relative border p-5 [background-image:var(--wash-panel)] [background:color-mix(in_srgb,var(--card)_88%,transparent)] [border-color:var(--border-hairline,var(--border))] transition-shadow [transition-duration:var(--dur-base,200ms)]",
        className
      )}
      style={{
        boxShadow: showGlow
          ? `0 0 24px -10px ${toneColor}, var(--shadow-plate, 0 2px 18px -6px rgb(0 0 0 / 0.7))`
          : undefined,
        ...style,
      }}
      {...props}
    >
      {showBrackets &&
        BRACKETS.map((pos) => (
          <span
            key={pos}
            aria-hidden
            className={cn("pointer-events-none absolute size-4", pos)}
            style={{ borderColor: toneColor }}
          />
        ))}
      {showTick && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-px left-1/2 h-0.5 w-11 -translate-x-1/2 opacity-80"
          style={{ background: toneColor }}
        />
      )}
      {children}
    </div>
  )
}

export { CornerFrame }
