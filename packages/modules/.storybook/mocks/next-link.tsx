import type { AnchorHTMLAttributes, ReactNode } from "react";

type Href =
  | string
  | URL
  | { pathname?: string; search?: string; hash?: string }
  | null
  | undefined;

interface NextLinkMockProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  href?: Href;
  children: ReactNode;
}

const NextLinkMock = ({ href, children, ...rest }: NextLinkMockProps) => {
  const normalizedHref =
    typeof href === "string"
      ? href
      : href instanceof URL
        ? href.toString()
        : href?.pathname
          ? `${href.pathname}${href.search ?? ""}${href.hash ?? ""}`
          : "#";

  return (
    <a href={normalizedHref} {...rest}>
      {children}
    </a>
  );
};

export default NextLinkMock;
