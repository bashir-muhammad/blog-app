import {
  SectionRenderer as BaseSectionRenderer,
  defaultSectionComponents,
} from "@repo/modules/section-renderer";
import { RichText } from "@repo/modules/rich-text";
import { Sections } from "@/sanity/types";
import { urlFor } from "@/sanity/image";

// Extend default module mapping with app-specific RichText component.
const components = {
  ...defaultSectionComponents,
  richText: ({ data }: { data: Sections[number] }) => (
    <RichText
      data={data}
      resolveImageUrl={(image) => urlFor(image as any).url()}
    />
  ),
};

const SectionRenderer = ({ section }: { section: Sections[number] }) => (
  <BaseSectionRenderer section={section as any} components={components} />
);

export { SectionRenderer };
