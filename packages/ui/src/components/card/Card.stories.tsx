import type { Meta, StoryObj } from "@storybook/react";
import {
  Card,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  CardAction,
  CardHeader,
} from "./card";
import { Button } from "../button/button";

const meta: Meta<typeof Card> = {
  title: "UI/Card",
  component: Card,
  parameters: {
    layout: "centered",
  },
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card Description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>This is the main content area of the card.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Action</Button>
      </CardFooter>
    </Card>
  ),
};

export const WithAction: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Card with Action</CardTitle>
        <CardDescription>
          Click the action button in the top right
        </CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            X
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>This card includes an action button in the header.</p>
      </CardContent>
    </Card>
  ),
};

export const SimpleCard: Story = {
  render: () => (
    <Card className="w-96">
      <CardContent>
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
};

export const MultipleActions: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Multiple Actions</CardTitle>
      </CardHeader>
      <CardContent>
        <p>This card can have multiple action buttons in the footer.</p>
      </CardContent>
      <CardFooter>
        <Button variant="primary">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </CardFooter>
    </Card>
  ),
};

export const FullExample: Story = {
  render: () => (
    <Card className="w-96">
      <CardHeader>
        <CardTitle>Complete Card</CardTitle>
        <CardDescription>A fully featured card example</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            ×
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>
          This is a complete example showing all card components together with
          header, content, and footer.
        </p>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Button variant="primary" size="sm">
          Confirm
        </Button>
        <Button variant="secondary" size="sm">
          Dismiss
        </Button>
      </CardFooter>
    </Card>
  ),
};

export const WithFullBleedImage: Story = {
  render: () => (
    <Card className="w-96 overflow-hidden">
      <img
        src="https://avatar.vercel.sh/shadcn1"
        alt="Event cover"
        className="brightness-60 dark:brightness-40 relative z-20 aspect-video w-full object-cover grayscale"
      />
      {/* <div className="bg-gradient-to-r from-blue-400 to-purple-500 aspect-video w-full" /> */}
      <CardHeader>
        <CardTitle>Card with Image</CardTitle>
        <CardDescription>Full-bleed image touching all edges</CardDescription>
      </CardHeader>
      <CardContent>
        <p>
          This card demonstrates proper spacing with a full-bleed image at the
          top.
        </p>
      </CardContent>
      <CardFooter>
        <Button variant="primary" size="sm">
          Learn more
        </Button>
      </CardFooter>
    </Card>
  ),
};
