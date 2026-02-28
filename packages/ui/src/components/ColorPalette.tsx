import React from "react";

const DESIGN_TOKEN_GROUPS = [
  {
    label: "Teal Scale",
    colors: [
      { name: "Teal 50", var: "--color-teal-50" },
      { name: "Teal 100", var: "--color-teal-100" },
      { name: "Teal 200", var: "--color-teal-200" },
      { name: "Teal 300", var: "--color-teal-300" },
      { name: "Teal 400", var: "--color-teal-400" },
      { name: "Teal 500", var: "--color-teal-500" },
      { name: "Teal 600", var: "--color-teal-600" },
      { name: "Teal 700", var: "--color-teal-700" },
      { name: "Teal 800", var: "--color-teal-800" },
      { name: "Teal 900", var: "--color-teal-900" },
    ],
  },
  {
    label: "Brand",
    colors: [
      { name: "Brand", var: "--color-brand" },
      { name: "Brand Hover", var: "--color-brand-hover" },
      { name: "Primary", var: "--color-primary" },
      { name: "Gray", var: "--color-gray" },
    ],
  },
  {
    label: "Neutrals",
    colors: [
      { name: "Dark", var: "--color-dark" },
      { name: "Dark Alt", var: "--color-dark-alt" },
      { name: "Charcoal", var: "--color-charcoal" },
      { name: "Mid", var: "--color-mid" },
      { name: "Muted", var: "--color-muted" },
      { name: "Border", var: "--color-border" },
      { name: "Border Dark", var: "--color-border-dark" },
      { name: "Border Light", var: "--color-border-light" },
      { name: "Surface", var: "--color-surface" },
      { name: "Surface Alt", var: "--color-surface-alt" },
      { name: "White", var: "--color-white" },
    ],
  },
  {
    label: "Semantic",
    colors: [
      { name: "Success", var: "--color-success" },
      { name: "Warning", var: "--color-warning" },
      { name: "Error", var: "--color-error" },
      { name: "Info", var: "--color-info" },
    ],
  },
];

export function ColorPalette() {
  return (
    <section aria-labelledby="color-palette-heading" className="p-6">
      <h2 id="color-palette-heading" className="mb-4 text-xl font-bold">
        Color Palette
      </h2>
      {DESIGN_TOKEN_GROUPS.map((group) => (
        <div key={group.label} className="mb-8">
          <h3
            className="mb-2 text-lg font-semibold"
            id={`palette-group-${group.label}`}
          >
            {group.label}
          </h3>
          <ul
            className="grid grid-cols-2 gap-4 md:grid-cols-4"
            role="list"
            aria-labelledby={`palette-group-${group.label}`}
          >
            {group.colors.map((color) => (
              <li
                key={color.var}
                className="flex flex-col items-center"
                role="listitem"
              >
                <span
                  aria-label={color.name}
                  className="mb-2 h-16 w-16 rounded border shadow"
                  style={{ background: `var(${color.var})` }}
                />
                <span className="text-sm text-gray-700" aria-hidden="true">
                  {color.name}
                </span>
                <span className="text-xs text-gray-500" aria-hidden="true">
                  {color.var}
                </span>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}
export default ColorPalette;
