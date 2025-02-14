import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import projectDetailsData from "../../constants/data/projects.json";
import { List } from "../../util-components/List/List";
import "./Projects.scss";

const RenderProjects = ({ companyDetails = projectDetailsData }) => {
  return companyDetails.map((pro, index) => {
    return (
      <div className="project-wrapper" key={index}>
        <div className="main-heading">
          <span>{pro.title}</span>
        </div>
        <List data={pro.detailLists} listClass="list" />
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
