import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";

export function Summary() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.SUMMARY} />
    </Section>
  );
}
