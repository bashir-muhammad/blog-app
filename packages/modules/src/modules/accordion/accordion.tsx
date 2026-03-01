import { ComponentType } from "react";
import { AccordionModule } from "../../types";
import { PortableText } from "@portabletext/react";
import {
  Accordion as AccordionUI,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@repo/ui/accordion";

interface AccordionProps {
  data: AccordionModule;
}

const Accordion: ComponentType<AccordionProps> = ({ data }) => {
  return (
    <AccordionUI className="">
      {data.items?.map((it: any, i: number) => (
        <Item key={i} item={it} />
      ))}
    </AccordionUI>
  );
};
function Item({ item }: { item: any }) {
  return (
    <AccordionItem>
      <AccordionTrigger>{item.title}</AccordionTrigger>
      <AccordionContent>
        {item.content && <PortableText value={item.content} />}
      </AccordionContent>
    </AccordionItem>
  );
}

export { Accordion };
