import {
  FeatureBoxTitle,
  FeatureBoxDescription,
  FeatureBoxHorizontal,
  FeatureBoxIcon,
} from "@repo/ui/components/feature-box/feature-box";
import DynamicIcon from "../../utils/dynamic-icon";

export interface FeaturesProps {
  data: {
    features: {
      title: string;
      icon: string;
      description: string;
    }[];
  };
}

const Features = ({ data }: FeaturesProps) => {
  const features = data?.features || [];
  return (
    <div className="grid gap-8 lg:grid-cols-4 ">
      {features.map((feature, index) => (
        <FeatureBoxHorizontal key={index}>
          <FeatureBoxIcon>
            <DynamicIcon name={feature.icon} size={40} />
          </FeatureBoxIcon>
          <div>
            <FeatureBoxTitle>{feature.title}</FeatureBoxTitle>
            <FeatureBoxDescription>{feature.description}</FeatureBoxDescription>
          </div>
        </FeatureBoxHorizontal>
      ))}
    </div>
  );
};

export default Features;
