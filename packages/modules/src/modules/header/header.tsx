import Image from "next/image";
import Link from "next/link";
import { HeaderModule } from "../../types";

const Header = ({ data }: { data: HeaderModule }) => {
  return (
    <header className="container mx-auto">
      <div className="mx-auto flex items-center p-6">
        <div className="flex items-center gap-3">
          {data?.logo && (
            <Link href="/">
              <div className="relative min-w-24">
                <Image
                  src={data.logo}
                  alt="Site logo"
                  width={96}
                  height={64}
                  className="h-auto max-h-16 w-auto object-contain"
                />
              </div>
            </Link>
          )}

          <strong className="sr-only">{data?.siteTitle ?? "Site"}</strong>
        </div>
        <nav className="ml-8 flex gap-6">
          {data?.headerMenu?.map((menu) => (
            <Link key={menu?.href} href={`/${menu?.href}`}>
              {menu?.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export { Header };
