import { AccordionModule } from "../../types";
import { PortableText } from "@portabletext/react";
import {
  Accordion as AccordionUI,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@repo/ui/accordion";

export interface AccordionProps {
  data: AccordionModule;
}

type AccordionItemData = AccordionModule["items"][number];

const Accordion = ({ data }: AccordionProps) => {
  return (
    <AccordionUI className="">
      {data.items?.map((item, index) => (
        <Item key={`${item.title}-${index}`} item={item} />
      ))}
    </AccordionUI>
  );
};

function Item({ item }: { item: AccordionItemData }) {
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
