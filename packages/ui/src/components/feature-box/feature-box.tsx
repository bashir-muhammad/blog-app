import { twMerge } from "tailwind-merge";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

const FeatureBox = forwardRef<HTMLDivElement, ComponentPropsWithoutRef<"div">>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={twMerge("flex flex-col items-center gap-4", className)}
        {...props}
      >
        {children}
      </div>
    );
  },
);
FeatureBox.displayName = "FeatureBox";

const FeatureBoxTitle = forwardRef<
  HTMLHeadingElement,
  ComponentPropsWithoutRef<"h3">
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={twMerge("font-h5 text-h5 mb-0!", className)}
    {...props}
  />
));
FeatureBoxTitle.displayName = "FeatureBoxTitle";

const FeatureBoxDescription = forwardRef<
  HTMLParagraphElement,
  ComponentPropsWithoutRef<"p">
>(({ className, ...props }, ref) => (
  <p ref={ref} className={twMerge("text-charcoal", className)} {...props} />
));
FeatureBoxDescription.displayName = "FeatureBoxDescription";

const FeatureBoxIcon = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => (
  <div ref={ref} className={twMerge("text-dark", className)} {...props} />
));
FeatureBoxIcon.displayName = "FeatureBoxIcon";

const FeatureBoxHorizontal = forwardRef<
  HTMLDivElement,
  ComponentPropsWithoutRef<"div">
>(({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={twMerge("flex flex-row gap-2.5", className)}
      {...props}
    >
      {children}
    </div>
  );
});
FeatureBoxHorizontal.displayName = "FeatureBoxHorizontal";

export {
  FeatureBox,
  FeatureBoxTitle,
  FeatureBoxDescription,
  FeatureBoxIcon,
  FeatureBoxHorizontal,
};
