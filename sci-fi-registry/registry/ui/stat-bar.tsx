import * as React from "react"

import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  neutral: "var(--foreground)",
  gold: "var(--primary)",
  cyan: "var(--cyan, var(--ring))",
  arc: "var(--arc, #4fb6d8)",
  solar: "var(--solar, #e8743b)",
  void: "var(--void, #8b5ba6)",
}

/**
 * Thin labeled stat bar — the weapon/armor stat readout
 * (Impact, Range, Stability…). Label left, thin track right.
 * `tone` is a named tone or any CSS color.
 */
function StatBar({
  label,
  value = 0,
  max = 100,
  tone = "neutral",
  showValue = false,
  className,
  ...props
}: React.ComponentProps<"div"> & {
  label: React.ReactNode
  value?: number
  max?: number
  tone?: string
  showValue?: boolean
}) {
  const color = TONES[tone] ?? tone
  const pct = Math.max(0, Math.min(100, (value / max) * 100))

  return (
    <div
      data-slot="stat-bar"
      role="meter"
      aria-valuemin={0}
      aria-valuemax={max}
      aria-valuenow={value}
      className={cn(
        "grid grid-cols-[88px_1fr_auto] items-center gap-3",
        className
      )}
      {...props}
    >
      <span className="text-xs text-muted-foreground [letter-spacing:0.02em]">
        {label}
      </span>
      <div className="h-[5px] rounded-[1px] [background:color-mix(in_srgb,var(--foreground)_14%,transparent)]">
        <div
          className="h-full transition-[width] [transition-duration:var(--dur-base,200ms)] [transition-timing-function:var(--ease-out-d2,ease-out)]"
          style={{ width: `${pct}%`, background: color }}
        />
      </div>
      <span
        className={cn(
          "min-w-[22px] text-right text-[13px] font-light text-foreground tabular-nums [font-family:var(--font-display,inherit)]",
          !showValue && "invisible"
        )}
      >
        {value}
      </span>
    </div>
  )
}

export { StatBar }
