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

const normalizeVariant = (
  variant: "default" | "narrow" | "fullWidth" | null | undefined,
) => variant ?? undefined;

export const Default: Story = {
  args: {
    background: "none",
    variant: "default",
  },
  render: (args) => (
    <Section {...args}>
      <SectionContent variant={normalizeVariant(args.variant)}>
        <SectionTitle>Default Section</SectionTitle>
        <p>This is the default section variant.</p>
      </SectionContent>
    </Section>
  ),
};

export const GrayBackground: Story = {
  args: {
    background: "gray",
    variant: "default",
  },
  render: (args) => (
    <Section {...args}>
      <SectionContent variant={normalizeVariant(args.variant)}>
        <SectionTitle>Gray Background</SectionTitle>
        <p>This section uses the gray background variant.</p>
      </SectionContent>
    </Section>
  ),
};

export const Narrow: Story = {
  args: {
    background: "none",
    variant: "narrow",
  },
  render: (args) => (
    <Section {...args}>
      <SectionContent variant={normalizeVariant(args.variant)}>
        <SectionTitle>Narrow Section</SectionTitle>
        <p>This section uses the narrow content variant.</p>
      </SectionContent>
    </Section>
  ),
};

export const FullWidth: Story = {
  args: {
    background: "none",
    variant: "fullWidth",
  },
  render: (args) => (
    <Section {...args}>
      <SectionContent variant={normalizeVariant(args.variant)}>
        <SectionTitle>Full Width Section</SectionTitle>
        <p>This section uses the fullWidth content variant.</p>
      </SectionContent>
    </Section>
  ),
};
