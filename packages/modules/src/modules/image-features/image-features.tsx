import {
  FeatureBox,
  FeatureBoxTitle,
  FeatureBoxDescription,
  FeatureBoxIcon,
} from "@repo/ui/components/feature-box/feature-box";
import Image from "next/image";

import type { ImageFeaturesModule } from "../..";

const ImageFeatures = ({ data }: { data: ImageFeaturesModule }) => {
  const features = data?.features || [];
  const title = data?.title || "Image Features";
  const images = data?.images || [];

  return (
    <div className="flex space-y-4">
      <div className="text-2xl font-bold">
        {images.length > 0 ? (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {images.map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Feature Image ${index + 1}`}
                width={600}
                height={400}
                className="mb-4 w-full rounded-lg object-cover"
              />
            ))}
          </div>
        ) : (
          <Image
            src="/placeholder-image.png"
            alt="Placeholder"
            width={600}
            height={400}
            className="mb-4 w-full rounded-lg object-cover"
          />
        )}
      </div>
      <div>
        <h2 className="text-2xl font-bold">{title}</h2>
        {features.map((feature, index) => (
          <FeatureBox key={index}>
            <FeatureBoxIcon>
              <span
                role="img"
                aria-label={feature.title}
                style={{ fontSize: 32 }}
              >
                {feature.icon || "🚀"}
              </span>
            </FeatureBoxIcon>
            <FeatureBoxTitle>{feature.title}</FeatureBoxTitle>
            <FeatureBoxDescription>{feature.description}</FeatureBoxDescription>
          </FeatureBox>
        ))}
      </div>
    </div>
  );
};

export default ImageFeatures;
