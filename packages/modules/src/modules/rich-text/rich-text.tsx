import { PortableText, type PortableTextComponents } from "@portabletext/react";
import Image from "next/image";
import { SectionContent } from "@repo/ui/section";
import { twMerge } from "tailwind-merge";

interface RichTextData {
  body?: unknown[];
}

interface RichTextProps {
  data?: RichTextData | Record<string, unknown> | null;
  resolveImageUrl?: (image: unknown) => string | null | undefined;
  className?: string;
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

const RichText = ({ data, resolveImageUrl, className }: RichTextProps) => {
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
            className="text-primary hover:text-brand-hover underline underline-offset-4"
          >
            {children}
          </a>
        );
      },
      internalLink: ({ children, value }) => {
        const href =
          isObject(value) && typeof value.href === "string" ? value.href : "#";
        return (
          <a
            href={href}
            className="text-primary hover:text-brand-hover underline underline-offset-4"
          >
            {children}
          </a>
        );
      },
    },
  };

  const body = isObject(data) && Array.isArray(data.body) ? data.body : [];

  return (
    <SectionContent variant={"narrow"}>
      <div
        className={twMerge(
          "prose prose-neutral max-w-[var(--layout-max-reading)]",
          "prose-headings:font-heading prose-headings:text-dark",
          "prose-a:text-primary hover:prose-a:text-brand-hover",
          "prose-img:rounded-xs",
          className,
        )}
      >
        <PortableText value={body} components={components} />
      </div>
    </SectionContent>
  );
};

export { RichText };
