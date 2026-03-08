import { Section, SectionContent } from "@repo/ui/section";
import { Breadcrum } from "../breadcrum/breadcrum";
const PageTitle = ({
  title,
  lead,
  breadcrumItems,
  className,
}: {
  title: string;
  lead?: string;
  breadcrumItems?: { label: string; href?: string }[];
  className?: string;
}) => {
  return (
    <Section background="gray" className={className}>
      <SectionContent className="flex flex-col gap-8 md:flex-row">
        <div className="md:flex-7">
          <h1 className="last:mb-0">{title}</h1>
          {lead && <p className="text-lead">{lead}</p>}
        </div>
        {breadcrumItems && (
          <Breadcrum
            items={breadcrumItems}
            className="md:flex-3 flex-shrink-0 justify-end md:mt-3"
          />
        )}
      </SectionContent>
    </Section>
  );
};

export default PageTitle;
