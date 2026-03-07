import type { Meta, StoryObj } from "@storybook/react";
import HeroTeaser from "./hero-teaser";

const sampleData = {
  title: "Ship faster with a composable blog platform",
  description:
    "Combine powerful content modules, structured schemas, and a flexible design system to build blog experiences that scale — without the boilerplate.",
  images: [
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1200&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop",
  ],
  link: {
    href: "/get-started",
    label: "Get started",
    openInNewTab: false,
    ariaLabel: "Get started with composable blog platform",
  },
};

const meta = {
  title: "Modules/HeroTeaser",
  component: HeroTeaser,
  args: {
    data: sampleData,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof HeroTeaser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SingleImage: Story = {
  args: {
    data: {
      ...sampleData,
      images: [sampleData.images[0]!],
    },
  },
};

export const WithoutDescription: Story = {
  args: {
    data: {
      ...sampleData,
      description: undefined,
    },
  },
};
