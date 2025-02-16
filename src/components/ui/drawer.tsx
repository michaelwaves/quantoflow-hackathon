"use client";

import * as React from "react";
import { Drawer as DrawerPrimitive } from "vaul";

import { cn } from "@/lib/utils";

/**
 * Instead of an interface, use a type alias for the Root props
 * to avoid TS(2312) "An interface can only extend an object type..."
 */
type DrawerRootBaseProps = React.ComponentProps<typeof DrawerPrimitive.Root>;

type DrawerRootProps = DrawerRootBaseProps & {
  shouldScaleBackground?: boolean;
};

/**
 * The root <Drawer> component from vaul,
 * with an optional shouldScaleBackground prop
 */
const Drawer = ({
  shouldScaleBackground = true,
  ...props
}: DrawerRootProps) => (
  <DrawerPrimitive.Root shouldScaleBackground={shouldScaleBackground} {...props} />
);
Drawer.displayName = "Drawer";

// The rest from vaul’s primitive
const DrawerTrigger = DrawerPrimitive.Trigger;
const DrawerPortal = DrawerPrimitive.Portal;
const DrawerClose = DrawerPrimitive.Close;

const DrawerOverlay = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Overlay
    ref={ref}
    className={cn("fixed inset-0 z-50 bg-black/80", className)}
    {...props}
  />
));
DrawerOverlay.displayName = DrawerPrimitive.Overlay.displayName;

/**
 * The biggest change here is the addition of a `side` prop.
 * Default to "bottom" for the classic vaul style,
 * but also support "right", "left", or "top."
 */
interface DrawerContentProps
  extends React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Content> {
  side?: "bottom" | "top" | "right" | "left";
}

const DrawerContent = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Content>,
  DrawerContentProps
>(({ className, children, side = "bottom", ...props }, ref) => {
  // Generate side-based classes. The default vaul style is bottom,
  // but we can override for "right", "left", "top."
  let sideClasses = "";
  if (side === "bottom") {
    sideClasses =
      "inset-x-0 bottom-0 mt-24 h-auto rounded-t-[10px] border bg-background";
  } else if (side === "top") {
    sideClasses =
      "inset-x-0 top-0 h-auto rounded-b-[10px] border bg-background";
  } else if (side === "right") {
    sideClasses =
      "right-0 top-0 h-full w-[300px] rounded-l-[10px] border bg-background";
  } else if (side === "left") {
    sideClasses =
      "left-0 top-0 h-full w-[300px] rounded-r-[10px] border bg-background";
  }

  return (
    <DrawerPortal>
      <DrawerOverlay />
      <DrawerPrimitive.Content
        ref={ref}
        className={cn("fixed z-50 flex flex-col", sideClasses, className)}
        {...props}
      >
        {/* 
          If side === "bottom", we keep the little drag handle 
          at the top (like the original vaul style). 
          If you only want that for bottom, conditionally render:
        */}
        {side === "bottom" ? (
          <div className="mx-auto mt-4 h-2 w-[100px] rounded-full bg-muted" />
        ) : null}

        {children}
      </DrawerPrimitive.Content>
    </DrawerPortal>
  );
});
DrawerContent.displayName = "DrawerContent";

const DrawerHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("grid gap-1.5 p-4 text-center sm:text-left", className)} {...props} />
);
DrawerHeader.displayName = "DrawerHeader";

const DrawerFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={cn("mt-auto flex flex-col gap-2 p-4", className)} {...props} />
);
DrawerFooter.displayName = "DrawerFooter";

const DrawerTitle = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Title
    ref={ref}
    className={cn("text-lg font-semibold leading-none tracking-tight", className)}
    {...props}
  />
));
DrawerTitle.displayName = DrawerPrimitive.Title.displayName;

const DrawerDescription = React.forwardRef<
  React.ElementRef<typeof DrawerPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DrawerPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DrawerPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
DrawerDescription.displayName = DrawerPrimitive.Description.displayName;

export {
  Drawer,
  DrawerPortal,
  DrawerOverlay,
  DrawerTrigger,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerFooter,
  DrawerTitle,
  DrawerDescription,
};
