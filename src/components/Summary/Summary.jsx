import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import { Text } from "../../util-components/Text/Text";
import "./Summary.scss";
import summaryData from "../../constants/data/summary.json";
import HighlightText from "../../utils/HighlightText";

export function Summary() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.SUMMARY} />
      <Text classes="desc">
        <HighlightText text={summaryData.summary} />
      </Text>
    </Section>
  );
}
