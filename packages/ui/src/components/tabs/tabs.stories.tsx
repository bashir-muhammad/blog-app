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
        <TabContent>
          Overview content. Lorem ipsum dolor sit amet consectetur, adipisicing
          elit. Quibusdam esse architecto accusantium eaque iste adipisci quod
          dicta odit nulla minima atque, corrupti labore doloremque, recusandae,
          magnam nemo veniam expedita aliquam.
        </TabContent>
      </Tab>

      <Tab name="overview">
        <TabTrigger>Details</TabTrigger>
        <TabContent>Details content…</TabContent>
      </Tab>

      <Tab name="overview">
        <TabTrigger>Reviews</TabTrigger>
        <TabContent>
          Reviews content: Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Laborum quasi libero, ullam omnis esse dolorem quaerat
          laudantium nostrum facilis ex natus sequi quidem rerum nemo, dolores
          debitis recusandae tenetur consequuntur!
        </TabContent>
      </Tab>
    </Tabs>
  ),
};
