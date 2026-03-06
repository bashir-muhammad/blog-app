import type { Meta, StoryObj } from "@storybook/react";
import Features from "./features";

type Feature = {
  title: string;
  icon: string;
  description: string;
};

const sampleFeatures: Feature[] = [
  {
    icon: "Zap",
    title: "Fast setup",
    description:
      "Launch quickly with composable modules and clear content structures.",
  },
  {
    icon: "ShieldCheck",
    title: "Secure by default",
    description:
      "Apply sane defaults and validation patterns to reduce common risks.",
  },
  {
    icon: "Accessibility",
    title: "Accessible",
    description:
      "Build inclusive experiences with semantic structure and keyboard support.",
  },
  {
    icon: "Layers",
    title: "Composable",
    description:
      "Mix and match modules to build any page layout without writing custom code.",
  },
];

const meta = {
  title: "Modules/Features",
  component: Features,
  args: {
    data: { features: sampleFeatures },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Features>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const TwoFeatures: Story = {
  args: {
    data: { features: sampleFeatures.slice(0, 2) },
  },
};

export const LongDescriptions: Story = {
  args: {
    data: {
      features: sampleFeatures.map((f) => ({
        ...f,
        description:
          f.description +
          " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec vel sapien eget nunc gravida sodales. Pellentesque habitant morbi tristique senectus et netus.",
      })),
    },
  },
};
