import { Button } from "@repo/ui/button";
import { ArrowRight } from "lucide-react";

export interface HeroTeaserProps {
  title: string;
  description?: string;
  images?: string[];
  link: {
    href: string;
    label: string;
    openInNewTab: boolean;
    ariaLabel: string;
  };
}
const HeroTeaser = ({ data }: { data?: HeroTeaserProps }) => {
  return (
    <div className="flex flex-col-reverse gap-8 md:flex-row-reverse lg:gap-12 ">
      <div className="md:flex-1 md:py-12 ">
        <h2 className="h3">{data?.title}</h2>
        {data?.description && <p>{data.description}</p>}
        {data?.link && (
          <Button size="lg" className="mt-6 md:mt-8">
            {data.link.label}
            <ArrowRight />
          </Button>
        )}
      </div>
      {data?.images && data.images.length > 1 ? (
        <div className="relative h-full w-full md:flex-1">
          <div className="rounded-xs -top-8 bottom-0 left-0 aspect-[4/5] w-[56%] ">
            <img
              src={data.images[0]}
              alt={data?.title ?? "Hero Image"}
              className="rounded-xs h-full w-full object-cover object-center"
            />
          </div>
          <div className="absolute bottom-8 right-8 ml-auto aspect-[4/5] w-[40%] ">
            <img
              src={data.images[1]}
              alt={data?.title ?? "Hero Image"}
              className="rounded-xs h-full w-full object-cover object-center"
            />
          </div>
        </div>
      ) : (
        <div className="md:flex-1">
          <div className="relative aspect-video md:aspect-[4/5] md:w-[80%] ">
            <img
              src={data?.images?.[0] ?? "/placeholder.png"}
              alt={data?.title ?? "Hero Image"}
              className="rounded-xs h-full w-full object-cover object-center"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export { HeroTeaser };
