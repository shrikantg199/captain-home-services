"use client";

import * as React from "react";
import { Dialog as DialogPrimitive } from "radix-ui";
import { XIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

function Dialog({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Root>) {
  return <DialogPrimitive.Root data-slot="dialog" {...props} />;
}

function DialogTrigger({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />;
}

function DialogPortal({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Portal>) {
  return <DialogPrimitive.Portal data-slot="dialog-portal" {...props} />;
}

function DialogClose({
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Close>) {
  return <DialogPrimitive.Close data-slot="dialog-close" {...props} />;
}

function DialogOverlay({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Overlay>) {
  return (
    <DialogPrimitive.Overlay
      data-slot="dialog-overlay"
      className={cn(
        // Backdrop — matches Services.tsx modal backdrop
        "fixed inset-0 isolate z-50 bg-black/60",
        "supports-backdrop-filter:backdrop-blur-md",
        "duration-150",
        "data-open:animate-in data-open:fade-in-0",
        "data-closed:animate-out data-closed:fade-out-0",
        className,
      )}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  showCloseButton = true,
  bottomSheet = false,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Content> & {
  showCloseButton?: boolean;
  /** Renders as bottom sheet on mobile, centered modal on sm+ */
  bottomSheet?: boolean;
}) {
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        data-slot="dialog-content"
        className={cn(
          // Base
          "fixed z-50 w-full bg-white text-sm text-gray-800 outline-none",
          "flex flex-col overflow-hidden",
          "shadow-[0_30px_100px_rgba(0,0,0,0.3)]",
          // Animations
          "duration-150",
          "data-open:animate-in data-open:fade-in-0",
          "data-closed:animate-out data-closed:fade-out-0",

          // Layout — bottom sheet on mobile, centered on sm+
          bottomSheet
            ? [
                // Mobile: slide up from bottom
                "bottom-0 left-0 right-0 rounded-t-[32px] max-h-[92dvh]",
                "data-open:slide-in-from-bottom-4 data-closed:slide-out-to-bottom-4",
                // sm+: centered modal
                "sm:bottom-auto sm:left-1/2 sm:top-1/2",
                "sm:-translate-x-1/2 sm:-translate-y-1/2",
                "sm:max-w-md sm:rounded-[32px] sm:max-h-[90dvh]",
                "data-open:sm:zoom-in-95 data-closed:sm:zoom-out-95",
              ]
            : [
                // Standard centered modal
                "top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
                "max-w-[calc(100%-2rem)] sm:max-w-md rounded-[32px]",
                "data-open:zoom-in-95 data-closed:zoom-out-95",
              ],

          className,
        )}
        {...props}
      >
        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1">{children}</div>

        {/* Close Button */}
        {showCloseButton && (
          <DialogPrimitive.Close data-slot="dialog-close" asChild>
            <Button
              variant="ghost"
              size="icon-sm"
              className="absolute top-4 right-4 z-20 rounded-full bg-white/90 border border-gray-100 text-gray-700 hover:text-black hover:bg-white shadow-md"
            >
              <XIcon className="w-4 h-4" />
              <span className="sr-only">Close</span>
            </Button>
          </DialogPrimitive.Close>
        )}
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-header"
      className={cn("flex flex-col gap-2 px-5 pt-5 md:px-8 md:pt-8", className)}
      {...props}
    />
  );
}

function DialogBody({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="dialog-body"
      className={cn("px-5 py-4 md:px-8 space-y-5", className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  showCloseButton = false,
  children,
  ...props
}: React.ComponentProps<"div"> & {
  showCloseButton?: boolean;
}) {
  return (
    <div
      data-slot="dialog-footer"
      className={cn(
        // Matches Services.tsx modal footer
        "flex flex-col sm:flex-row items-center gap-3 justify-between",
        "shrink-0 border-t border-gray-100 bg-gray-50/75",
        "p-4 md:p-6",
        className,
      )}
      {...props}
    >
      {children}
      {showCloseButton && (
        <DialogPrimitive.Close asChild>
          <Button variant="outline-orange" size="md">
            Close
          </Button>
        </DialogPrimitive.Close>
      )}
    </div>
  );
}

function DialogTitle({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Title>) {
  return (
    <DialogPrimitive.Title
      data-slot="dialog-title"
      className={cn(
        "text-xl sm:text-2xl font-bold uppercase tracking-tight text-gray-900 leading-none",
        className,
      )}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.ComponentProps<typeof DialogPrimitive.Description>) {
  return (
    <DialogPrimitive.Description
      data-slot="dialog-description"
      className={cn(
        "text-sm text-gray-500 leading-relaxed",
        "*:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-orange-500",
        className,
      )}
      {...props}
    />
  );
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogBody,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
