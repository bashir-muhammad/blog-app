import type { Meta, StoryObj } from "@storybook/react";
import { Hero } from "./hero";

const sampleData = {
  _type: "hero" as const,
  title: "Build beautiful blogs, faster",
  text: [
    {
      _type: "block" as const,
      _key: "block1",
      style: "normal",
      markDefs: [],
      children: [
        {
          _type: "span" as const,
          _key: "span1",
          marks: [],
          text: "A composable blog platform built for developers and content teams. Ship rich, structured content with a flexible design system that scales effortlessly.",
        },
      ],
    },
  ],
  image:
    "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&auto=format&fit=crop",
  link: {
    href: "/get-started",
    label: "Get started",
    openInNewTab: false,
    ariaLabel: "Get started with the blog platform",
  },
};

const meta = {
  title: "Modules/Hero",
  component: Hero,
  args: {
    data: sampleData,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Hero>;

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

export const WithoutImage: Story = {
  args: {
    data: {
      ...sampleData,
      image: undefined,
    },
  },
};

export const WithoutText: Story = {
  args: {
    data: {
      ...sampleData,
      text: undefined,
    },
  },
};

export const TitleOnly: Story = {
  args: {
    data: {
      ...sampleData,
      text: undefined,
      link: undefined,
    },
  },
};

export const LinkOpenInNewTab: Story = {
  args: {
    data: {
      ...sampleData,
      link: {
        href: "https://example.com",
        label: "Learn more",
        openInNewTab: true,
        ariaLabel: "Learn more about the blog platform (opens in new tab)",
      },
    },
  },
};
