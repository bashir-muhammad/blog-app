import type { Meta, StoryObj } from "@storybook/react";
import { Breadcrum } from "./breadcrum";

const sampleItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/post" },
  {
    label: "How to build accessible UI",
    href: "/post/how-to-build-accessible-ui",
  },
  { label: "Comments" },
];

const meta = {
  title: "Modules/Breadcrum",
  component: Breadcrum,
  args: {
    items: sampleItems,
    ariaLabel: "Breadcrumb",
    separator: "/",
  },
  argTypes: {
    separator: {
      control: "text",
    },
    ariaLabel: {
      control: "text",
    },
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Breadcrum>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const ChevronSeparator: Story = {
  args: {
    separator: ">",
  },
};

export const DotSeparator: Story = {
  args: {
    separator: "•",
  },
};

export const SingleItem: Story = {
  args: {
    items: [{ label: "Blog" }],
  },
};

export const WithoutIntermediateLinks: Story = {
  args: {
    items: [
      { label: "Home", href: "/" },
      { label: "Blog" },
      { label: "Comments" },
    ],
  },
};

export const WithCustomAriaLabel: Story = {
  args: {
    ariaLabel: "Page breadcrumb",
  },
};
