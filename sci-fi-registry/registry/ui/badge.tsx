import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex w-fit shrink-0 items-center justify-center gap-1.5 rounded-none border px-2.5 py-1 text-[11px] leading-none font-semibold uppercase whitespace-nowrap [font-family:var(--font-display,inherit)] [letter-spacing:var(--track-label,0.08em)] [&>svg]:pointer-events-none [&>svg]:size-3",
  {
    variants: {
      variant: {
        default:
          "border-primary bg-primary/15 text-[var(--accent-text,var(--primary))]",
        secondary:
          "bg-secondary/60 text-foreground [border-color:var(--border-strong,var(--border))]",
        destructive:
          "border-destructive bg-destructive/15 text-[var(--crimson-bright,var(--destructive))]",
        outline: "border-border bg-transparent text-muted-foreground",
        cyan: "border-[var(--cyan)] bg-[var(--cyan)]/15 text-[var(--ring)]",
        arc: "border-[var(--arc)] bg-[var(--arc)]/15 text-[var(--arc)]",
        solar:
          "border-[var(--solar)] bg-[var(--solar)]/15 text-[var(--solar)]",
        void: "border-[var(--void)] bg-[var(--void)]/18 text-[var(--void)]",
        stasis:
          "border-[var(--stasis)] bg-[var(--stasis)]/18 text-[var(--stasis)]",
        strand:
          "border-[var(--strand)] bg-[var(--strand)]/15 text-[var(--strand)]",
        common:
          "border-[var(--rarity-common)] bg-[var(--rarity-common)]/12 text-[var(--rarity-common)]",
        uncommon:
          "border-[var(--rarity-uncommon)] bg-[var(--rarity-uncommon)]/18 text-[var(--rarity-uncommon)]",
        rare: "border-[var(--rarity-rare)] bg-[var(--rarity-rare)]/20 text-[var(--rarity-rare)]",
        legendary:
          "border-[var(--rarity-legendary)] bg-[var(--rarity-legendary)]/28 text-[color-mix(in_srgb,var(--rarity-legendary)_60%,white)]",
        exotic:
          "border-[var(--rarity-exotic)] bg-[var(--rarity-exotic)]/16 text-[var(--rarity-exotic)]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}: React.ComponentProps<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "span"

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  )
}

export { Badge, badgeVariants }
