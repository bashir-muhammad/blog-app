import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { SectionContent } from "@repo/ui/section";

interface RichTextData {
  body?: unknown[];
}

interface RichTextProps {
  data?: RichTextData | Record<string, unknown> | null;
  resolveImageUrl?: (image: unknown) => string | null | undefined;
}

const getImageDimensionsFromUrl = (url: string) => {
  const match = url.match(/-(\d+)x(\d+)(?=\.)/);
  if (!match) {
    return { width: 600, height: 400 };
  }

  const [, widthMatch = "600", heightMatch = "400"] = match;

  return {
    width: Number.parseInt(widthMatch, 10) || 600,
    height: Number.parseInt(heightMatch, 10) || 400,
  };
};

const isObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" && value !== null;

const isExternalUrl = (href: string) => /^(https?:)?\/\//.test(href);

const RichText = ({ data, resolveImageUrl }: RichTextProps) => {
  const components: PortableTextComponents = {
    types: {
      image: ({ value }) => {
        const imageUrl = resolveImageUrl?.(value);
        if (!imageUrl) {
          return null;
        }

        const { width, height } = getImageDimensionsFromUrl(imageUrl);

        let altText = "Blog post image";
        if (isObject(value)) {
          const candidate = value.altText ?? value.alt;
          if (typeof candidate === "string" && candidate.trim().length > 0) {
            altText = candidate;
          }
        }

        return (
          <Image
            className="rounded-lg"
            alt={altText}
            src={imageUrl}
            width={width}
            height={height}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
        );
      },
    },
    marks: {
      link: ({ children, value }) => {
        const href =
          isObject(value) && typeof value.href === "string" ? value.href : "";
        const external = href ? isExternalUrl(href) : false;

        return (
          <a
            href={href || "#"}
            target={external ? "_blank" : undefined}
            rel={external ? "noreferrer noopener" : undefined}
          >
            {children}
          </a>
        );
      },
      internalLink: ({ children, value }) => {
        const href =
          isObject(value) && typeof value.href === "string" ? value.href : "#";
        return <a href={href}>{children}</a>;
      },
    },
  };

  const body = isObject(data) && Array.isArray(data.body) ? data.body : [];

  return (
    <SectionContent variant={"narrow"}>
      <PortableText value={body} components={components} />
    </SectionContent>
  );
};

export { RichText };
