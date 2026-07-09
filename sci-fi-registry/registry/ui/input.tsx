import * as React from "react"

import { cn } from "@/lib/utils"

function Input({ className, type, ...props }: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        "flex h-10 w-full min-w-0 rounded-none border border-input px-3.5 py-2 text-sm text-foreground [background:var(--surface-input,transparent)] transition-[border-color,box-shadow] [transition-duration:var(--dur-fast,120ms)] [transition-timing-function:var(--ease-sharp,ease-out)] outline-none selection:bg-primary selection:text-primary-foreground placeholder:text-muted-foreground",
        "file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground",
        "focus-visible:border-[var(--ring)] focus-visible:[box-shadow:var(--glow-focus,0_0_0_1px_var(--ring))]",
        "aria-invalid:border-destructive aria-invalid:focus-visible:[box-shadow:0_0_0_1px_var(--destructive)]",
        "disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
}

export { Input }
