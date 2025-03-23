import { Text } from "@/components/elements";

const Section = ({ children, anchor = '' }) => {
  return (
    <div className="section cv gap-6 anchor" id={anchor}>
      {children}
    </div>
  );
}

const Title = ({ children }) => {
  return (
    <Text text="h1" className="section-title">{children}</Text>
  );
}

const Description = ({ children }) => {
  return (
    <Text text="p" className="section-description">{children}</Text>
  );
}

Section.Title = Title;
Section.Description = Description;

export default Section;