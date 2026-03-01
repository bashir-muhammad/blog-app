import { Tabs, Tab, TabTrigger, TabContent } from "./tabs";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Default: Story = {
  render: () => (
    <Tabs>
      <Tab name="overview" open>
        <TabTrigger>Overview</TabTrigger>
        <TabContent>Overview content…</TabContent>
      </Tab>

      <Tab name="details">
        <TabTrigger>Details</TabTrigger>
        <TabContent>Details content…</TabContent>
      </Tab>

      <Tab name="reviews">
        <TabTrigger>Reviews</TabTrigger>
        <TabContent>Reviews content…</TabContent>
      </Tab>
    </Tabs>
  ),
};
