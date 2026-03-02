import type { Meta, StoryObj } from "@storybook/react";
import { PageTitle, PageTitleContent } from "./page-title";

const meta: Meta<typeof PageTitle> = {
  title: "Components/PageTitle",
  component: PageTitle,
  tags: ["autodocs"],
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof PageTitle>;

export const Default: Story = {
  render: () => (
    <PageTitle>
      <PageTitleContent>
        <h1>Blog</h1>
        <p className="text-lead">
          Welcome to our blog, where we share insights, stories, and updates on
        </p>
      </PageTitleContent>
    </PageTitle>
  ),
};

export const Dark: Story = {
  args: { variant: "dark" },
  render: () => (
    <PageTitle variant="dark">
      <PageTitleContent>
        <h1>Blog</h1>
      </PageTitleContent>
    </PageTitle>
  ),
};
