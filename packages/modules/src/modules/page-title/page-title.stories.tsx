import type { Meta, StoryObj } from "@storybook/react";
import PageTitle from "./page-title";

const meta = {
  title: "Modules/PageTitle",
  component: PageTitle,
  args: {
    title: "Build better content pages",
    lead: "Create consistent and readable page headers with reusable modules.",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof PageTitle>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithoutLead: Story = {
  args: {
    lead: "",
  },
};

export const LongTitle: Story = {
  args: {
    title:
      "Build better content pages with reusable modules that keep headings clear and consistent across your website",
  },
};
