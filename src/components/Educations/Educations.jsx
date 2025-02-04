import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";

export function Education() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.EDUCATION} />
    </Section>
  );
}
