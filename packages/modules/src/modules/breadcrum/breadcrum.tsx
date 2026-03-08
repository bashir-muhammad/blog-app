import Link from "next/link";

export interface BreadcrumItem {
  label: string;
  href?: string;
}

export interface BreadcrumProps {
  items: BreadcrumItem[];
  className?: string;
  separator?: string;
  ariaLabel?: string;
}

const Breadcrum = ({
  items,
  className,
  separator = "•",
  ariaLabel = "Breadcrumb",
}: BreadcrumProps) => {
  if (!items?.length) {
    return null;
  }

  return (
    <nav aria-label={ariaLabel} className={className}>
      <ol className="flex items-center justify-end gap-2 text-sm">
        {items.map((item, index) => {
          const isLastItem = index === items.length - 1;

          return (
            <li
              key={`${item.label}-${index}`}
              className="inline-flex items-center gap-2"
            >
              <Link
                href={item.href}
                className="underline-offset-4 hover:underline"
              >
                {item.label}
              </Link>

              {!isLastItem && (
                <span aria-hidden="true" className="text-muted-foreground">
                  {separator}
                </span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export { Breadcrum };
