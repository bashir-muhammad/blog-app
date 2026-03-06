import type { Meta, StoryObj } from "@storybook/react";
import { TeaserList } from "./teaser-list";
import type { TeaserListModule } from "../../types";

const sampleItems: TeaserListModule["items"] = [
  {
    title: "Getting started with Next.js",
    summary:
      "Learn the fundamentals of Next.js App Router and build your first server-rendered application.",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop",
    link: { label: "Read more", href: "/posts/getting-started-nextjs" },
  },
  {
    title: "Composable content architecture",
    summary:
      "Explore how structured content and modular schemas unlock flexible page building at scale.",
    image:
      "https://images.unsplash.com/photo-1522542550221-31fd19575a2d?w=800&auto=format&fit=crop",
    link: { label: "Read more", href: "/posts/composable-architecture" },
  },
  {
    title: "Accessible design systems",
    summary:
      "Build inclusive component libraries that work for everyone, including people using assistive technologies.",
    image:
      "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop",
    link: { label: "Read more", href: "/posts/accessible-design-systems" },
  },
  {
    title: "Tailwind CSS performance tips",
    summary:
      "Keep your stylesheets lean with purging, design tokens, and utility-first best practices.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop",
    link: { label: "Read more", href: "/posts/tailwind-performance" },
  },
];

const sampleData: TeaserListModule = {
  _type: "teaserList",
  items: sampleItems,
};

const meta = {
  title: "Modules/TeaserList",
  component: TeaserList,
  args: {
    data: sampleData,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof TeaserList>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutImages: Story = {
  args: {
    data: {
      ...sampleData,
      items: sampleItems.map(({ image: _, ...item }) => item),
    },
  },
};

export const WithoutLinks: Story = {
  args: {
    data: {
      ...sampleData,
      items: sampleItems.map(({ link: _, ...item }) => item),
    },
  },
};

export const WithoutSummaries: Story = {
  args: {
    data: {
      ...sampleData,
      items: sampleItems.map(({ summary: _, ...item }) => item),
    },
  },
};
