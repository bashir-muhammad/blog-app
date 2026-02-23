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
import { Button } from "./button";

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
        <CardDescription>Click the action button in the top right</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">
            ⋯
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
      <CardFooter className="flex gap-2">
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
