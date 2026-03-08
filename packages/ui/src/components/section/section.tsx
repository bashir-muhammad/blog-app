import { cva, VariantProps } from "class-variance-authority";
import { ComponentPropsWithoutRef, forwardRef } from "react";
import { twMerge } from "tailwind-merge";

// Content variants affect inner content width only (padding applied by Section wrapper).
const SectionContentVariant = cva("mx-auto w-full", {
  variants: {
    variant: {
      default: "max-w-[var(--layout-max-content)]",
      narrow: "max-w-[var(--layout-max-panel)]",
      fullWidth: "w-full", // still constrained by page wrapper (max page variable)
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

type SectionVariant = VariantProps<typeof SectionContentVariant>["variant"];

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  background?: "none" | "gray";
  variant?: SectionVariant;
}
interface SectionContentProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof SectionContentVariant> {}

const Section = forwardRef<HTMLElement, SectionProps>(
  ({ className, background = "none", children, ...props }, ref) => {
    const hasBg = background === "gray";

    return (
      <section
        ref={ref}
        className={twMerge(
          "py-[var(--spacing-section-lg)]",
          hasBg && "bg-surface-alt",
          className,
        )}
        {...props}
      >
        {children}
      </section>
    );
  },
);
Section.displayName = "Section";

const SectionTitle = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h2">
>(({ className, ...props }, ref) => {
  return (
    <h2 ref={ref} className={twMerge("mb-4 md:mb-10", className)} {...props} />
  );
});
SectionTitle.displayName = "SectionTitle";

const SectionContent = forwardRef<HTMLDivElement, SectionContentProps>(
  ({ className, variant = "default", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge(
          SectionContentVariant({ variant }),
          "px-[var(--spacing-container)]",
          className,
        )}
        {...props}
      />
    );
  },
);
SectionContent.displayName = "SectionContent";

export { Section, SectionTitle, SectionContent };
