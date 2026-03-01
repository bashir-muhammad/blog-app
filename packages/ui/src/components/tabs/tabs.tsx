import { HTMLAttributes, forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Tabs = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      className={twMerge(
        "relative flex w-full border-b-2 border-stone-200",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Tabs.displayName = "Tabs";

// ─── Tab (<details>) ──────────────────────────────────────────────────────────
//
// display: inline — multiple <details> sit side-by-side in one line,
// forming the trigger strip naturally without flex or grid.

const Tab = forwardRef<HTMLDetailsElement, ComponentPropsWithoutRef<"details">>(
  ({ className, ...props }, ref) => (
    <details ref={ref} className={twMerge("inline", className)} {...props} />
  ),
);
Tab.displayName = "Tab";

// ─── TabTrigger (<summary>) ───────────────────────────────────────────────────
//
// display: inline-block — sits in the inline flow of its parent <details>.
// -mb-0.5 overlaps the parent <Tabs> border-b-2 so the active border hides it.

const TabTrigger = forwardRef<HTMLElement, ComponentPropsWithoutRef<"summary">>(
  ({ className, children, ...props }, ref) => (
    <summary
      ref={ref}
      data-tab-trigger
      className={twMerge(
        // Flow
        "relative -mb-0.5 inline-block",

        // Reset
        "cursor-pointer select-none list-none outline-none",
        "transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-1",

        // Shape
        "font-body text-sm tracking-wide",
        "px-6 py-3",
        "rounded-t border border-b-0",

        // Inactive
        "border-transparent bg-transparent text-stone-400 hover:text-stone-700",

        // Active — CSS ancestor selector, zero JS
        "[details[open]>&]:border-stone-200 [details[open]>&]:bg-white [details[open]>&]:text-stone-800",

        className,
      )}
      {...props}
    >
      {children}
    </summary>
  ),
);
TabTrigger.displayName = "TabTrigger";

// ─── TabContent ───────────────────────────────────────────────────────────────
//
// position: absolute — breaks out of inline flow, anchors to <Tabs> (relative).
// left-0 right-0 — full width of <Tabs>.
// top-full — sits just below the trigger strip (below the border-b-2 line).
// Only visible when its parent <details> is open (browser default).

const TabContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-tab-content
      className={twMerge(
        // Position — below trigger row, full width
        "absolute left-0 right-0 top-full",

        // Style
        "border border-t-0 border-stone-200 bg-white px-8 py-7",
        "font-body text-base font-light leading-relaxed text-stone-500",

        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
TabContent.displayName = "TabContent";

export { Tabs, Tab, TabTrigger, TabContent };
