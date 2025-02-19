import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import projectDetailsData from "../../constants/data/projects.json";
import "./Projects.scss";
import HighlightText from "../../utils/HighlightText";

const RenderProjects = ({ companyDetails = projectDetailsData }) => {
  return companyDetails.map((pro, index) => {
    const techStack = pro.techStack.join(", ");
    return (
      <div className="project-wrapper" key={index}>
        <div className="main-heading">
          <span>{pro.title}</span>
        </div>
        <div className="pro-content">
          <span>Description: </span>
          {pro.desc}
        </div>
        <div className="pro-content">
          <span>Tech Stack: </span>
          {techStack}
        </div>
        <div className="pro-content">
          <span>Impact: </span>
          <HighlightText text={pro.impact} />
        </div>
      </div>
    );
  });
};

export function Projects() {
  return (
    <Section extraClasses="project-main">
      <SectionHeading title={HEADINGS.PROJECTS} />
      <RenderProjects />
    </Section>
  );
}
