import { HTMLAttributes, forwardRef } from "react";
import { twMerge } from "tailwind-merge";
import { cva, VariantProps } from "class-variance-authority";

const PageTitleVariant = cva("w-full", {
  variants: {
    variant: {
      default: "bg-surface-alt",
      dark: "bg-charcoal text-surface",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const PageTitle = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement> & VariantProps<typeof PageTitleVariant>
>(({ className, children, variant, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        PageTitleVariant({ variant }),
        "mx-auto  py-12 md:py-20",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
PageTitle.displayName = "PageTitle";

const PageTitleContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge(
        "mx-auto w-full max-w-[var(--layout-max-content)]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
});
PageTitleContent.displayName = "PageTitleContent";

export { PageTitle, PageTitleContent };
