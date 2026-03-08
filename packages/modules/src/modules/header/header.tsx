import Image from "next/image";
import Link from "next/link";
import { HeaderModule } from "../../types";
import { SectionContent } from "@repo/ui/section";
import { Button } from "@repo/ui/button";

const Header = ({ data }: { data: HeaderModule }) => {
  return (
    <header className="border-border mx-auto border-b py-1">
      <SectionContent className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {data?.logo && (
            <Link href="/">
              <div className="relative min-w-24">
                <Image
                  src={data.logo}
                  alt={data?.siteTitle ?? "Site Logo"}
                  width={96}
                  height={64}
                  className="h-auto max-h-14 w-auto object-contain"
                />
              </div>
            </Link>
          )}

          <strong className="sr-only">{data?.siteTitle ?? "Site"}</strong>
        </div>
        <nav className="flex gap-2">
          {data?.headerMenu?.map((menu) => (
            <Button key={menu?.href} variant="ghost" asChild>
              <Link key={menu?.href} href={`/${menu?.href}`}>
                {menu?.label}
              </Link>
            </Button>
          ))}
        </nav>
      </SectionContent>
    </header>
  );
};

export { Header };
