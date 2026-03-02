import type { Meta, StoryObj } from "@storybook/react";
import { Accordion } from "./accordion";
import type { AccordionModule } from "../../types";

const sampleData: AccordionModule = {
  _type: "accordion",
  sectionTitle: "Frequently asked questions",
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
              text: "This module includes reusable, content-driven accordion items.",
            },
          ],
        },
      ],
    },
    {
      title: "Can I customize the content?",
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
              text: "Yes. Content is passed through Portable Text blocks from CMS data.",
            },
          ],
        },
      ],
    },
  ],
};

const meta = {
  title: "Modules/Accordion",
  component: Accordion,
  args: {
    data: sampleData,
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Accordion>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
