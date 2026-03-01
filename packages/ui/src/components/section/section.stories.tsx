import type { Meta, StoryObj } from "@storybook/react";
import { Section, SectionTitle, SectionContent } from "./section";

const meta: Meta<typeof Section> = {
  title: "Components/Section",
  component: Section,
  tags: ["autodocs"],
  argTypes: {
    background: {
      control: "radio",
      options: ["none", "gray"],
      description: "Background color variant",
    },
    variant: {
      control: "radio",
      options: ["default", "narrow", "fullWidth"],
      description: "Content width variant",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Section>;

export const Default: Story = {
  args: {
    background: "none",
    variant: "default",
    children: (
      <>
        <SectionTitle>Default Section</SectionTitle>
        <SectionContent>
          <p>This is the default section variant.</p>
        </SectionContent>
      </>
    ),
  },
};

export const GrayBackground: Story = {
  args: {
    background: "gray",
    variant: "default",
    children: (
      <>
        <SectionTitle>Gray Background</SectionTitle>
        <SectionContent>
          <p>This section uses the gray background variant.</p>
        </SectionContent>
      </>
    ),
  },
};

export const Narrow: Story = {
  args: {
    background: "none",
    variant: "narrow",
    children: (
      <>
        <SectionTitle>Narrow Section</SectionTitle>
        <SectionContent variant="narrow">
          <p>This section uses the narrow content variant.</p>
        </SectionContent>
      </>
    ),
  },
};

export const FullWidth: Story = {
  args: {
    background: "none",
    variant: "fullWidth",
    children: (
      <>
        <SectionTitle>Full Width Section</SectionTitle>
        <SectionContent variant="fullWidth">
          <p>This section uses the fullWidth content variant.</p>
        </SectionContent>
      </>
    ),
  },
};
