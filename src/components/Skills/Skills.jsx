import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";

export function Skills() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.SKILLS} />
    </Section>
  );
}
