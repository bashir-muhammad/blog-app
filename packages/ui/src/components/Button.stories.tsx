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

export const Accent: Story = {
  args: {
    variant: "accent",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
  },
};

// export const Sizes: Story = {
//   render: () => (
//     <div className="flex flex-wrap items-center gap-3" role="list">
//       <div role="listitem">
//         <Button size="sm">Small</Button>
//       </div>
//       <div role="listitem">
//         <Button size="default">Default</Button>
//       </div>
//       <div role="listitem">
//         <Button size="lg">Large</Button>
//       </div>
//       <div role="listitem">
//         <Button size="xl">Extra large</Button>
//       </div>
//     </div>
//   ),
// };

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
