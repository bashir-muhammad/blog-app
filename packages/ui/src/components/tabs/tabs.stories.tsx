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
      <Tab open name="alpha">
        <TabTrigger>Tab 1</TabTrigger>
        <TabContent>Content for Tab 1</TabContent>
      </Tab>
      <Tab name="alpha">
        <TabTrigger>Tab 2</TabTrigger>
        <TabContent>Content for Tab 2</TabContent>
      </Tab>
      <Tab name="alpha">
        <TabTrigger>Tab 3</TabTrigger>
        <TabContent>Content for Tab 3</TabContent>
      </Tab>
      <Tab name="alpha">
        <TabTrigger>Tab 4</TabTrigger>
        <TabContent>
          Content for Tab 4. Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Consequatur nesciunt quam tempore quidem assumenda iure, dolores
          animi suscipit, magni molestias quo iusto reiciendis eligendi
          quibusdam omnis, quaerat laboriosam libero! Eveniet!
        </TabContent>
      </Tab>
    </Tabs>
  ),
};
