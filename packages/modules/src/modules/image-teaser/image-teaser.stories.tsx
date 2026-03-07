import type { Meta, StoryObj } from "@storybook/react";
import { ImageTeaser } from "./image-teaser";
import type { ImageTeaserModule } from "../../types";

const sampleData: ImageTeaserModule = {
  _type: "imageTeaser",
  title: "Build faster with composable modules",
  description:
    "Design flexible page layouts using a library of structured, reusable content modules. Mix and match to create rich experiences without writing custom code.",
  image:
    "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=1200&auto=format&fit=crop",
  link: {
    label: "Get started",
    href: "/get-started",
    ariaLabel: "Get started with composable modules",
    openInNewTab: false,
  },
};

const meta = {
  title: "Modules/ImageTeaser",
  component: ImageTeaser,
  args: {
    data: sampleData,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ImageTeaser>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLink: Story = {
  args: {
    data: {
      ...sampleData,
      link: undefined,
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

export const WithoutImage: Story = {
  args: {
    data: {
      ...sampleData,
      image: undefined,
    },
  },
};

export const LinkOpensInNewTab: Story = {
  args: {
    data: {
      ...sampleData,
      link: {
        label: "Learn more",
        href: "https://example.com",
        ariaLabel: "Learn more about composable modules (opens in a new tab)",
        openInNewTab: true,
      },
    },
  },
};

export const TextOnly: Story = {
  args: {
    data: {
      ...sampleData,
      image: undefined,
      link: undefined,
    },
  },
};
