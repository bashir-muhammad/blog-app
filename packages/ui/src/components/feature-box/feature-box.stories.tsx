import type { Meta, StoryObj } from "@storybook/react";
import {
  FeatureBox,
  FeatureBoxTitle,
  FeatureBoxDescription,
  FeatureBoxIcon,
  FeatureBoxHorizontal,
} from "./feature-box";

const meta: Meta<typeof FeatureBox> = {
  title: "Components/FeatureBox",
  component: FeatureBox,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof FeatureBox>;

export const Default: Story = {
  args: {
    children: (
      <>
        <FeatureBoxIcon>
          {/* Example icon: replace with your own SVG/icon */}
          <svg
            role="img"
            aria-label="Star icon"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </FeatureBoxIcon>
        <FeatureBoxTitle>Feature Title</FeatureBoxTitle>
        <FeatureBoxDescription>
          This is a description for the feature box. It explains the feature in
          a concise way.
        </FeatureBoxDescription>
      </>
    ),
  },
};

export const CustomContent: Story = {
  args: {
    children: (
      <>
        <FeatureBoxIcon>
          <span role="img" aria-label="Rocket" style={{ fontSize: 32 }}>
            🚀
          </span>
        </FeatureBoxIcon>
        <FeatureBoxTitle>Rocket Feature</FeatureBoxTitle>
        <FeatureBoxDescription>
          Launch your ideas with speed and reliability.
        </FeatureBoxDescription>
      </>
    ),
  },
};
export const Horizontal: StoryObj<typeof FeatureBoxHorizontal> = {
  render: (args) => (
    <FeatureBoxHorizontal {...args}>
      <FeatureBoxIcon>
        <svg
          role="img"
          aria-label="Star icon"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      </FeatureBoxIcon>
      <div className="flex flex-col gap-2.5">
        <FeatureBoxTitle>Horizontal Feature</FeatureBoxTitle>
        <FeatureBoxDescription>
          This variant places the icon on the left and the text on the right for
          better visual hierarchy.
        </FeatureBoxDescription>
      </div>
    </FeatureBoxHorizontal>
  ),
  args: {},
  parameters: {
    docs: {
      description: {
        story:
          "FeatureBoxHorizontal arranges the icon on the left and the header/description on the right.",
      },
    },
  },
};
