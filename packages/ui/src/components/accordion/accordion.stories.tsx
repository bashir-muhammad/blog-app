import type { Meta, StoryObj } from "@storybook/react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "./accordion";

const meta: Meta<typeof Accordion> = {
  title: "UI/Accordion",
  component: Accordion,
  tags: ["autodocs"],
};
export default meta;

type Story = StoryObj<typeof Accordion>;

export const Default: Story = {
  render: () => (
    <Accordion className="mx-auto ">
      <AccordionItem>
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Content for section 1. This can be any React node.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Content for section 2. You can add more details here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          Content for section 3. Accessible and keyboard-navigable.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};

export const Open: Story = {
  render: () => (
    <Accordion className="mx-auto ">
      <AccordionItem open>
        <AccordionTrigger>Section 1</AccordionTrigger>
        <AccordionContent>
          Content for section 1. This can be any React node.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Section 2</AccordionTrigger>
        <AccordionContent>
          Content for section 2. You can add more details here.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem>
        <AccordionTrigger>Section 3</AccordionTrigger>
        <AccordionContent>
          Content for section 3. Accessible and keyboard-navigable.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  ),
};
