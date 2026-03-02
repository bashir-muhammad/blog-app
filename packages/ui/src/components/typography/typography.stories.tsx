import type { Meta, StoryObj } from "@storybook/react";
import { Typography } from "./typography";

const meta: Meta<typeof Typography.H1> = {
  title: "Design/Typography",
  component: Typography.H1,
  parameters: {
    layout: "padded",
  },
};

export default meta;

type Story = StoryObj<typeof Typography.H1>;

export const Scale: Story = {
  render: () => (
    <section className="space-y-6 p-6">
      <Typography.H1>Heading 1</Typography.H1>
      <Typography.H2>Heading 2</Typography.H2>
      <Typography.H3>Heading 3</Typography.H3>
      <Typography.H4>Heading 4</Typography.H4>
      <Typography.H5>Heading 5</Typography.H5>
      <Typography.H6>Heading 6</Typography.H6>
      <p className="lead text-foreground max-w-[65ch]">
        Lead paragraph example using the global typography token scale for
        readability.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
        veritatis? Distinctio hic in voluptas odit fuga tempore natus,
        recusandae laudantium deserunt, quasi amet officiis sapiente veritatis
        dolores, quod illum architecto.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
        tempore, doloremque suscipit sapiente accusamus quis corporis, aperiam
        consectetur neque accusantium odit. Obcaecati perspiciatis eaque odit
        quas! Provident placeat repellendus laudantium.
      </p>
      <p className="text-muted-foreground text-sm">
        Caption text example using the global typography token scale for
        readability.
      </p>
    </section>
  ),
};
