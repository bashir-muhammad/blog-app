import { SectionContent } from "@repo/ui/section";
const Footer = () => {
  return (
    <footer className="text-dark-alt mx-auto mt-[var(--spacing-section-md)] border-t bg-white py-4 text-center text-sm">
      <SectionContent>
        <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
      </SectionContent>
    </footer>
  );
};

export { Footer };
