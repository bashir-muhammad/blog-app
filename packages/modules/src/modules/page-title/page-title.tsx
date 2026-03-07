import { SectionContent } from "@repo/ui/section";
const PageTitle = ({ title, lead }: { title: string; lead: string }) => {
  return (
    <div className="bg-border-light py-[var(--spacing-section-sm)]">
      <SectionContent>
        <h1 className="">{title}</h1>
        {lead && <p className="text-lead">{lead}</p>}
      </SectionContent>
    </div>
  );
};

export default PageTitle;
