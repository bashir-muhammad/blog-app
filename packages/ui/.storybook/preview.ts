import type { Preview } from "@storybook/react";
import { createElement } from "react";
import "@repo/ui/styles.css";

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    (Story) =>
      createElement(
        "div",
        { style: { fontFamily: "var(--font-family-sans)" } },
        createElement(Story),
      ),
  ],
};

export default preview;
