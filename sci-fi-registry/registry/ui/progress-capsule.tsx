import * as React from "react"

import { cn } from "@/lib/utils"

const TONES: Record<string, string> = {
  cyan: "var(--cyan, var(--ring))",
  gold: "var(--primary)",
  crimson: "var(--destructive)",
  arc: "var(--arc, #4fb6d8)",
  solar: "var(--solar, #e8743b)",
  void: "var(--void, #8b5ba6)",
  strand: "var(--strand, #4fa86b)",
}

/**
 * Segmented progress capsule — pill-shaped progress /
 * objective bar split into discrete segments. If `segments` is 0 it
 * renders a continuous fill at `value`%. `tone` is a named tone or
 * any CSS color.
 */
function ProgressCapsule({
  value = 50,
  segments = 0,
  filledSegments = 0,
  tone = "cyan",
  height = 12,
  className,
  style,
  ...props
}: React.ComponentProps<"div"> & {
  value?: number
  segments?: number
  filledSegments?: number
  tone?: string
  height?: number
}) {
  const color = TONES[tone] ?? tone

  return (
    <div
      data-slot="progress-capsule"
      role="progressbar"
      aria-valuemin={0}
      aria-valuemax={segments > 0 ? segments : 100}
      aria-valuenow={segments > 0 ? filledSegments : value}
      className={cn(
        "box-border flex w-full overflow-hidden rounded-full border [background:color-mix(in_srgb,var(--background)_70%,transparent)] [border-color:var(--border-hairline,var(--border))]",
        segments > 0 && "gap-[3px] p-[2px]",
        className
      )}
      style={{ height, ...style }}
      {...props}
    >
      {segments > 0 ? (
        Array.from({ length: segments }).map((_, i) => (
          <div
            key={i}
            className="flex-1 rounded-[1px]"
            style={{
              background: i < filledSegments ? color : "transparent",
              boxShadow:
                i < filledSegments ? `0 0 8px -2px ${color}` : undefined,
            }}
          />
        ))
      ) : (
        <div
          className="rounded-full transition-[width] [transition-duration:var(--dur-base,200ms)] [transition-timing-function:var(--ease-out-d2,ease-out)]"
          style={{
            width: `${Math.max(0, Math.min(100, value))}%`,
            background: color,
            boxShadow: `0 0 10px -2px ${color}`,
          }}
        />
      )}
    </div>
  )
}

export { ProgressCapsule }
