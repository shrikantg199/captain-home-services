import * as React from "react";
import { cn } from "@/lib/utils";

function Card({
  className,
  size = "default",
  ...props
}: React.ComponentProps<"div"> & { size?: "default" | "sm" }) {
  return (
    <div
      data-slot="card"
      data-size={size}
      className={cn(
        // Base
        "group/card relative flex flex-col overflow-hidden cursor-pointer",
        // Spacing via CSS var
        "gap-(--card-spacing) py-(--card-spacing)",
        "[--card-spacing:--spacing(4)] data-[size=sm]:[--card-spacing:--spacing(3)]",
        // Shape
        "rounded-[28px]",
        // Colors
        "bg-white text-sm text-gray-800",
        // Border
        "border border-gray-200/80",
        // Shadow
        "shadow-sm",
        // Hover
        "md:hover:-translate-y-2 md:transition-transform md:duration-200",
        "hover:border-orange-300 hover:shadow-[0_20px_50px_rgba(255,122,26,0.12)]",
        // Focus
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/50",
        // Active (mobile tap)
        "active:scale-95",
        // Image rounding
        "has-[>img:first-child]:pt-0 *:[img:first-child]:rounded-t-[28px] *:[img:last-child]:rounded-b-[28px]",
        // Footer flush
        "has-data-[slot=card-footer]:pb-0 data-[size=sm]:has-data-[slot=card-footer]:pb-0",
        className,
      )}
      {...props}
    >
      {/* Hover glow overlay */}
      <div className="absolute inset-0 rounded-[28px] opacity-0 group-hover/card:opacity-10 bg-gradient-to-br from-orange-500 via-orange-400 to-orange-300 transition-opacity duration-500 pointer-events-none" />
      {props.children}
    </div>
  );
}

function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1",
        "rounded-t-[28px] px-(--card-spacing)",
        "has-data-[slot=card-action]:grid-cols-[1fr_auto]",
        "has-data-[slot=card-description]:grid-rows-[auto_auto]",
        "[.border-b]:pb-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn(
        "text-sm md:text-base font-bold uppercase tracking-tight leading-tight",
        "text-gray-800 group-hover/card:text-orange-600 transition-colors duration-300",
        "group-data-[size=sm]/card:text-xs",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn(
        "text-xs font-bold text-orange-500 font-mono mt-1.5",
        className,
      )}
      {...props}
    />
  );
}

function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end",
        className,
      )}
      {...props}
    />
  );
}

function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn(
        "flex flex-col items-center justify-center text-center px-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn(
        "flex items-center justify-center rounded-b-[28px] border-t border-orange-100 bg-orange-50/50 p-(--card-spacing)",
        className,
      )}
      {...props}
    />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
};
