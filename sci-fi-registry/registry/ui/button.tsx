import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex shrink-0 items-center justify-center gap-2.5 whitespace-nowrap rounded-none uppercase [font-family:var(--font-display,inherit)] [letter-spacing:var(--track-label,0.08em)] transition-[background-color,border-color,box-shadow,transform] [transition-duration:var(--dur-fast,120ms)] [transition-timing-function:var(--ease-sharp,ease-out)] outline-none focus-visible:[box-shadow:var(--glow-focus,0_0_0_2px_var(--ring))] active:scale-[0.98] disabled:pointer-events-none disabled:opacity-40 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border border-primary bg-primary font-semibold text-primary-foreground hover:border-[var(--gold-bright,var(--primary))] hover:bg-[var(--gold-bright,var(--primary))]",
        destructive:
          "border border-destructive bg-destructive font-semibold text-white hover:border-[var(--crimson-bright,var(--destructive))] hover:bg-[var(--crimson-bright,var(--destructive))]",
        outline:
          "border bg-card/70 font-medium text-foreground [border-color:var(--border-strong,var(--border))] hover:bg-accent hover:text-accent-foreground",
        secondary:
          "border border-transparent bg-secondary font-medium text-secondary-foreground hover:bg-accent",
        ghost:
          "border border-transparent font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
        link: "font-medium text-[var(--ring)] underline-offset-4 hover:underline",
      },
      size: {
        default: "px-6 py-[11px] text-[13px]",
        sm: "px-4 py-[7px] text-xs",
        lg: "px-8 py-[15px] text-[15px]",
        icon: "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  )
}

export { Button, buttonVariants }
