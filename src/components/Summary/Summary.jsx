import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import { Text } from "../../util-components/Text/Text";
import "./Summary.scss";
import summaryData from "../../constants/data/summary.json";

export function Summary() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.SUMMARY} />
      <Text classes="desc">{summaryData.summary}</Text>
    </Section>
  );
}
