import { HTMLAttributes, forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Tabs = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      role="tablist"
      aria-orientation="horizontal"
      className={twMerge(
        "border-border relative flex w-full border-b-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  ),
);
Tabs.displayName = "Tabs";

const Tab = forwardRef<HTMLDetailsElement, ComponentPropsWithoutRef<"details">>(
  ({ className, children, ...props }, ref) => (
    <details
      ref={ref}
      className={twMerge("inline", className)}
      role="presentation"
      {...props}
    >
      {children}
    </details>
  ),
);
Tab.displayName = "Tab";

interface TabTriggerProps extends ComponentPropsWithoutRef<"summary"> {
  open?: boolean;
}

const TabTrigger = forwardRef<HTMLElement, TabTriggerProps>(
  ({ className, children, open, ...props }, ref) => (
    <summary
      ref={ref}
      data-tab-trigger
      role="tab"
      tabIndex={open ? 0 : -1}
      className={twMerge(
        "relative -mb-0.5 inline-block",
        "cursor-pointer outline-none",
        "transition-colors duration-200",
        "focus-visible:ring-2 focus-visible:ring-amber-600 focus-visible:ring-offset-1",
        "px-4 pb-2.5 pt-2",
        "rounded-t border border-b-0",
        "text-h6 hover:text-dark text-muted-foreground border-transparent bg-transparent",
        "[details[open]>&]:border-border-dark [details[open]>&]:text-dark [details[open]>&]:bg-white",
        className,
      )}
      {...props}
    >
      {children}
    </summary>
  ),
);
TabTrigger.displayName = "TabTrigger";

const TabContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => (
    <div
      ref={ref}
      data-tab-content
      role="tabpanel"
      tabIndex={0}
      className={twMerge(
        "absolute left-0 right-0 top-[102%] bg-white pt-8 md:pt-10",
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
