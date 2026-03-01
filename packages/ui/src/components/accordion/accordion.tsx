import { forwardRef, type ComponentPropsWithoutRef } from "react";
import { twMerge } from "tailwind-merge";

const Accordion = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={twMerge("", className)} {...props} />
  ),
);
Accordion.displayName = "Accordion";

const AccordionItem = forwardRef<
  HTMLDetailsElement,
  ComponentPropsWithoutRef<"details">
>(({ className, ...props }, ref) => (
  <details
    ref={ref}
    className={twMerge("group border-b last:border-0", className)}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = forwardRef<
  HTMLElement,
  ComponentPropsWithoutRef<"summary">
>(({ className, children, ...props }, ref) => (
  <summary
    ref={ref}
    className={twMerge(
      "font-h5 text-h5 relative w-full list-none py-5 pr-4 hover:cursor-pointer",
      className,
    )}
    {...props}
  >
    {children}
    <svg
      className="absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 transition-transform duration-300 group-open:rotate-180"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
  </summary>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={twMerge("text-charcoal mb-6", className)}
    {...props}
  >
    {children}
  </div>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
