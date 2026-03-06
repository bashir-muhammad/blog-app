import type { Meta, StoryObj } from "@storybook/react";
import ImageFeatures from "./image-features";
import type { ImageFeaturesModule } from "../../types";

const sampleData: ImageFeaturesModule = {
  _type: "imageFeatures",
  title: "Visual features",
  images: [
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=1200&auto=format&fit=crop",
  ],
  features: [
    {
      icon: "⚡",
      title: "Fast setup",
      description:
        "Launch quickly with composable modules and clear content structures.",
    },
    {
      icon: "🔒",
      title: "Secure by default",
      description:
        "Apply sane defaults and validation patterns to reduce common risks.",
    },
    {
      icon: "♿",
      title: "Accessible",
      description:
        "Build inclusive experiences with semantic structure and keyboard support. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc gravida sodales.",
    },
    {
      icon: "🔒",
      title: "Secure by default",
      description:
        "Apply sane defaults and validation patterns to reduce common risks. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc gravida sodales. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc gravida sodales.",
    },
  ],
};

const meta = {
  title: "Modules/ImageFeatures",
  component: ImageFeatures,
  args: {
    data: sampleData,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageFeatures>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithOneImages: Story = {
  args: {
    data: {
      ...sampleData,
      images: [
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop",
      ],
    },
  },
};
