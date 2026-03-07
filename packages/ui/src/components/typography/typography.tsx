import type { ComponentPropsWithoutRef } from "react";

type H1Props = ComponentPropsWithoutRef<"h1">;
type H2Props = ComponentPropsWithoutRef<"h2">;
type H3Props = ComponentPropsWithoutRef<"h3">;
type H4Props = ComponentPropsWithoutRef<"h4">;
type H5Props = ComponentPropsWithoutRef<"h5">;
type H6Props = ComponentPropsWithoutRef<"h6">;

const H1 = ({ children, ...props }: H1Props) => {
  return <h1 {...props}>{children}</h1>;
};

const H2 = ({ children, ...props }: H2Props) => {
  return <h2 {...props}>{children}</h2>;
};

const H3 = ({ children, ...props }: H3Props) => {
  return <h3 {...props}>{children}</h3>;
};

const H4 = ({ children, ...props }: H4Props) => {
  return <h4 {...props}>{children}</h4>;
};

const H5 = ({ children, ...props }: H5Props) => {
  return <h5 {...props}>{children}</h5>;
};

const H6 = ({ children, ...props }: H6Props) => {
  return <h6 {...props}>{children}</h6>;
};

export const Typography = {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
};
