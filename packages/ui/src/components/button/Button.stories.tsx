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
      options: [
        "primary",
        "secondary",
        "outline",
        "ghost",
        "destructive",
        "success",
        "link",
      ],
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

export const WithIcon: Story = {
  args: {
    children: (
      <>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          focusable="false"
        >
          <path
            d="M5 12H19M12 5L19 12L12 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </>
    ),
  },
};
