import "./Awards.scss";
import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import awardsDetails from "../../constants/data/awards.json";

export function Awards() {
  return (
    <Section extraClasses="awards-main">
      <SectionHeading title={HEADINGS.AWARDS} />
      <RenderAwards />
    </Section>
  );
}

const RenderAwards = ({ awards = awardsDetails }) => {
  return awards.map((award, index) => {
    return (
      <div className="awards-wrapper" key={index}>
        <div className="sub-heading">
          <span>{award.title}</span> ({award.year}) - {award.desc}
        </div>
      </div>
    );
  });
};
