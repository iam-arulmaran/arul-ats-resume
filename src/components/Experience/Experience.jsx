import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import experienceDetails from "../../constants/data/experiences.json";
import "./Experience.scss";
import { List } from "../../util-components/List/List";

const RenderExperience = ({ companyDetails = experienceDetails }) => {
  return companyDetails.map((exp, index) => {
    return (
      <>
        <div className="sub-heading" key={`${exp.companyName}-${index}`}>
          {exp.companyName} |<span className="light">{exp.desigination}</span>
          <span className="right">{exp.period}</span>
        </div>
        <span className="location">{exp.location}</span>
        <RenderWorks works={exp.works} />
      </>
    );
  });
};

const RenderWorks = ({ works = [] }) => {
  return works.map((work) => {
    return (
      <>
        <span>{work.type}</span>
        <List data={work.detailLists} />
      </>
    );
  });
};

export function Experience() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.EXPERIENCE} />
      <RenderExperience />
    </Section>
  );
}
