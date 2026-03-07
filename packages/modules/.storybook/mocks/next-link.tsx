import type { AnchorHTMLAttributes, ReactNode } from "react";

type Href = string | { pathname?: string };

interface NextLinkMockProps
  extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "href" | "children"> {
  href: Href;
  children: ReactNode;
}

const NextLinkMock = ({ href, children, ...rest }: NextLinkMockProps) => {
  const normalizedHref =
    typeof href === "string" ? href : (href.pathname ?? "#");
  return (
    <a href={normalizedHref} {...rest}>
      {children}
    </a>
  );
};

export default NextLinkMock;
