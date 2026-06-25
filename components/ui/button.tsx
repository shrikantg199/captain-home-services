import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // Base
  "group/button inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl border border-transparent bg-clip-padding font-bold whitespace-nowrap uppercase tracking-wide transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        // ── Brand ──────────────────────────────────────────────────
        /** Primary CTA — orange solid */
        primary:
          "bg-orange-500 text-white hover:bg-orange-600 active:bg-orange-700 shadow-lg shadow-orange-500/20 hover:shadow-orange-500/30",

        /** WhatsApp booking CTA */
        whatsapp:
          "bg-[#25D366] text-white hover:bg-[#1ebe5d] active:bg-[#18a852] shadow-lg shadow-[#25D366]/20",

        /** Outline orange — secondary CTA */
        "outline-orange":
          "border-orange-300 bg-transparent text-orange-500 hover:bg-orange-50 hover:border-orange-400 active:bg-orange-100",

        /** Ghost on dark background (navy hero) */
        "ghost-light":
          "bg-white/10 text-white border border-white/20 hover:bg-white/20 active:bg-white/30 backdrop-blur-sm",

        /** Teal — verified / trust actions */
        teal: "bg-[#5FA897] text-white hover:bg-[#4d9282] active:bg-[#3d7d6e] shadow-lg shadow-[#5FA897]/20",

        // ── Semantic ───────────────────────────────────────────────
        default: "bg-primary text-primary-foreground hover:bg-primary/80",
        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",
        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:ring-destructive/20",
        link: "text-primary underline-offset-4 hover:underline tracking-normal uppercase-none font-medium",
      },

      size: {
        xs: "h-7  px-3   text-[10px] rounded-xl gap-1   [&_svg:not([class*='size-'])]:size-3",
        sm: "h-9  px-4   text-xs     rounded-xl gap-1.5 [&_svg:not([class*='size-'])]:size-3.5",
        md: "h-11 px-5   text-sm     rounded-2xl gap-2",
        lg: "h-12 px-8   text-sm     rounded-2xl gap-2",
        xl: "h-14 px-10  text-base   rounded-2xl gap-2.5",
        // Icon-only
        "icon-xs": "size-7  rounded-xl  [&_svg:not([class*='size-'])]:size-3",
        "icon-sm": "size-9  rounded-xl  [&_svg:not([class*='size-'])]:size-3.5",
        "icon-md": "size-11 rounded-2xl",
        "icon-lg": "size-12 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

function Button({
  className,
  variant = "primary",
  size = "md",
  asChild = false,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  }) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
