import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./button";

const meta: Meta<typeof Button> = {
  title: "UI/Button",
  component: Button,
  args: {
    children: "Button",
    variant: "primary",
    size: "default",
  },
  argTypes: {
    size: {
      control: "radio",
      options: ["sm", "default", "lg", "xl"],
      description: "Button size",
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline", "ghost", "destructive", "success", "link"],
      description: "Button variant style",
    },
  },
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {};

export const Secondary: Story = {
  args: {
    variant: "secondary",
  },
};

export const Outline: Story = {
  args: {
    variant: "outline",
  },
};

export const Ghost: Story = {
  args: {
    variant: "ghost",
  },
};

export const Destructive: Story = {
  args: {
    variant: "destructive",
  },
};

export const Success: Story = {
  args: {
    variant: "success",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
