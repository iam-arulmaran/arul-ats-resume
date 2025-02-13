import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import experienceDetails from "../../constants/data/experiences.json";
import "./Experience.scss";
import { List } from "../../util-components/List/List";

const RenderExperience = ({ companyDetails = experienceDetails }) => {
  return companyDetails.map((exp, index) => {
    return (
      <div
        className="experience-wrapper"
        key={`${exp.companyName.replace(/\s/g, "")}-${index}`}
      >
        <div className="main-heading">
          {exp.companyName} |<span className="light">{exp.desigination}</span>
          <span className="right">{exp.period}</span>
        </div>
        {/* <span className="location">{exp.location}</span> */}
        <RenderWorks works={exp.works} />
      </div>
    );
  });
};

const RenderWorks = ({ works = [] }) => {
  return works.map((work) => {
    return (
      <div className="work-list" key={work.type}>
        <div className="sub-heading">
          {work.type} |<span className="light">Domain</span>
        </div>
        <List data={work.detailLists} listClass="list" />
      </div>
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
