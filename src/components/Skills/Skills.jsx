import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import "./Skills.scss";
import skillsData from "../../constants/data/skills.json";

const RenderSkills = ({ skillList = [] }) => {
  return (
    <div className="skill-list">
      {skillList.map((skill) => {
        return <span key={skill}>{skill}</span>;
      })}
    </div>
  );
};

export function Skills() {
  return (
    <Section keyValue="skills">
      <SectionHeading title={HEADINGS.SKILLS} />
      <div className="sub-heading">Proficient</div>
      <RenderSkills skillList={skillsData.pro} />
      <div className="sub-heading">Familiar</div>
      <RenderSkills skillList={skillsData.familiar} />
    </Section>
  );
}
