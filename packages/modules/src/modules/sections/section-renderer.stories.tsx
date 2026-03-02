import type { Meta, StoryObj } from "@storybook/react";
import { SectionRenderer, type GenericSection } from "./section-renderer";

const teaserListSection: GenericSection = {
  _type: "accordion",
  sectionTitle: "Frequently asked questions",
  sectionVariant: "default",
  sectionBackground: "none",
  items: [
    {
      title: "What is included?",
      content: [
        {
          _key: "block-1",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "span-1",
              _type: "span",
              marks: [],
              text: "This section uses the package default component mapping.",
            },
          ],
        },
      ],
    },
    {
      title: "Can I pass custom components?",
      content: [
        {
          _key: "block-2",
          _type: "block",
          style: "normal",
          markDefs: [],
          children: [
            {
              _key: "span-2",
              _type: "span",
              marks: [],
              text: "Yes. Use the components prop to override or extend mappings.",
            },
          ],
        },
      ],
    },
  ],
};

const promoSection: GenericSection = {
  _type: "promoBanner",
  sectionTitle: "Custom section mapping",
  sectionVariant: "narrow",
  sectionBackground: "gray",
  message: "This section is rendered with a custom component passed via props.",
};

const meta = {
  title: "Modules/Sections/SectionRenderer",
  component: SectionRenderer,
  args: {
    section: teaserListSection,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof SectionRenderer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const DefaultMapping: Story = {};

export const CustomMapping: Story = {
  render: (args) => (
    <SectionRenderer
      {...args}
      components={{
        promoBanner: ({ data }: { data: GenericSection }) => (
          <p className="text-lead">{String(data.message ?? "")}</p>
        ),
      }}
    />
  ),
  args: {
    section: promoSection,
  },
};
