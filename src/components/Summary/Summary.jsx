import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import { Text } from "../../util-components/Text/Text";
import "./Summary.scss";

export function Summary() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.SUMMARY} />
      <Text classes="desc">
        Passionate Software Developer with 10 years of expertise in creating
        innovative web solutions across diverse sectors, including media,
        banking, medical, education, energy, and job portals. Committed to
        driving company success, I am proficient in integrating the latest
        industry trends and technologies to deliver exceptional user
        experiences.
      </Text>
    </Section>
  );
}
