/**
 * Curated icon map for the ImageFeatures module.
 *
 * - Only these icons are bundled (tree-shakeable).
 * - The Sanity schema imports `iconNames` to populate the editor dropdown,
 *   so editors can only pick values that exist here.
 * - To add a new icon: import it from lucide-react and add an entry below.
 */
import {
  Accessibility,
  BarChart,
  Globe,
  Layers,
  Lock,
  Rocket,
  ShieldCheck,
  Star,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Accessibility,
  BarChart,
  Globe,
  Layers,
  Lock,
  Rocket,
  ShieldCheck,
  Star,
  Zap,
};

/** Union type of valid icon names, derived from the map keys. */
export type IconName = keyof typeof iconMap;

/**
 * Sorted list of valid icon names for use in the Sanity schema dropdown:
 *
 * @example
 * // studio/schemaTypes/objects/feature.ts
 * import { iconNames } from "@repo/modules/utils/icon-map";
 *
 * defineField({
 *   name: "icon",
 *   type: "string",
 *   options: { list: iconNames.map((name) => ({ title: name, value: name })) },
 * })
 */
export const iconNames: IconName[] = Object.keys(iconMap).sort() as IconName[];

function DynamicIcon({ name, size = 32 }: { name?: string; size?: number }) {
  const Icon: LucideIcon =
    (name ? iconMap[name] : undefined) ?? iconMap["Rocket"]!;
  return <Icon size={size} aria-hidden="true" />;
}

export default DynamicIcon;
