import { HTMLAttributes, forwardRef } from "react";
import type { ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Tabs = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          "grid-rows-auto grid w-fit auto-cols-auto grid-flow-col gap-4",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);
Tabs.displayName = "Tabs";

const Tab = forwardRef<HTMLDetailsElement, ComponentPropsWithoutRef<"details">>(
  ({ className, ...props }, ref) => (
    <details
      ref={ref}
      className={twMerge(
        "grid w-fit grid-cols-subgrid grid-rows-subgrid",
        className,
      )}
      {...props}
    />
  ),
);
Tab.displayName = "Tab";

const TabTrigger = forwardRef<HTMLElement, ComponentPropsWithoutRef<"summary">>(
  ({ className, children, ...props }, ref) => (
    <summary
      ref={ref}
      className={twMerge(
        "font-h5 text-h5 border-dark data-[open]:border-primary group relative w-full list-none border-b py-5 pr-8 hover:cursor-pointer",
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
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={twMerge("p-4", className)} {...props}>
        {children}
      </div>
    );
  },
);
TabContent.displayName = "TabContent";

export { Tabs, TabTrigger, Tab, TabContent };
