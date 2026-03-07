import { ComponentType } from "react";
import { HeroModule } from "../../types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { Button } from "@repo/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export interface HeroProps {
  data: HeroModule;
}

const Hero: ComponentType<HeroProps> = ({ data }) => (
  <section
    className="grid grid-cols-12 overflow-hidden"
    aria-label={data.title || "Hero section"}
  >
    <div className="backdrop-blur-xs text-forground bg-background relative z-10 col-start-1 col-end-13 row-start-2 row-end-3 mt-auto w-full p-4 md:col-end-10 md:rounded-tr-xl lg:col-start-1 lg:col-end-7 lg:row-start-1 lg:mb-14 lg:p-0">
      {data.title && <h1 className="text-astral-50">{data.title}</h1>}
      {data.text && (
        <div className="">
          <PortableText value={data.text} />
        </div>
      )}
      {data.link && (
        <Button variant="primary" size="xl" className="mt-6" asChild>
          <Link
            href={data.link.href}
            {...(data.link.openInNewTab
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
            aria-label={data.link.ariaLabel || data.link.label}
          >
            {data.link.label}
            <ArrowRight />
          </Link>
        </Button>
      )}
    </div>
    {data.image && (
      <div className="bg-border-light relative col-start-1 col-end-13 row-start-1 row-end-2 flex items-end lg:col-start-9 lg:col-end-13 lg:row-start-1 lg:row-end-3 lg:aspect-[4/5]">
        <div className="relative aspect-video md:aspect-[21/9] lg:row-start-2 lg:row-end-3 lg:-ml-14 lg:mb-14 lg:aspect-[4/5] lg:h-auto lg:w-[60%]">
          <Image
            className="rounded-xs h-full w-full select-none object-cover object-center"
            src={data.image}
            alt={data.title || "Hero image"}
            fill
            priority
            sizes="100vw"
          />
        </div>
      </div>
    )}
  </section>
);

Hero.displayName = "HeroModule";

export { Hero };
