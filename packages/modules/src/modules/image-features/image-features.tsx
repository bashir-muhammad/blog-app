import {
  FeatureBox,
  FeatureBoxTitle,
  FeatureBoxDescription,
  FeatureBoxIcon,
} from "@repo/ui/components/feature-box/feature-box";
import Image from "next/image";
import { Rocket } from "lucide-react";

import type { ImageFeaturesModule } from "../..";
import { iconMap } from "../../utils/icon-map";

/**
 * Resolves a Lucide icon by its PascalCase name string (e.g. "Zap", "ShieldCheck").
 * The name comes from the CMS editor. Falls back to `Rocket` for unknown names.
 */
function DynamicIcon({ name, size = 32 }: { name?: string; size?: number }) {
  const Icon = (name && iconMap[name]) || Rocket;
  return <Icon size={size} aria-hidden="true" />;
}

const ImageFeatures = ({ data }: { data: ImageFeaturesModule }) => {
  const features = data?.features || [];
  const title = data?.title || "Image Features";
  const images = data?.images || [];

  return (
    <div className="lg:flex-col-2 flex flex-row gap-8 lg:gap-10">
      <div className="flex-[50%] flex-shrink-0">
        <h2 className="mb-8 md:mb-11">{title}</h2>
        <div className="grid gap-6 gap-y-8 md:grid-cols-2">
          {features.map((feature, index) => {
            return (
              <FeatureBox key={index} className="items-start">
                <FeatureBoxIcon>
                  <DynamicIcon name={feature.icon} size={32} />
                </FeatureBoxIcon>
                <FeatureBoxTitle>{feature.title}</FeatureBoxTitle>
                <FeatureBoxDescription>
                  {feature.description}
                </FeatureBoxDescription>
              </FeatureBox>
            );
          })}
        </div>
      </div>
      <div className="flex-[50%] lg:mt-4">
        {images.length > 1 ? (
          <div className="relative flex w-full">
            <div className="ml-auto aspect-[4/5] w-[70%] ">
              <Image
                src={images[0]?.toString() || ""}
                alt="Feature Image 1"
                fill
                className="rounded-xs h-full w-full object-cover"
              />
            </div>

            <div className="absolute ml-5 aspect-[4/5] w-[40%] self-center">
              <Image
                src={images[1]?.toString() || ""}
                alt="Feature Image 2"
                fill
                className="rounded-xs h-full w-full object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="ml-auto lg:w-[80%]">
            <Image
              src={images[0]?.toString() || "/placeholder.png"}
              alt="Placeholder"
              className="rounded-xs aspect-video w-full object-cover md:aspect-square"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageFeatures;
