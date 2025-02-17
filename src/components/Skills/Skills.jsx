import { HEADINGS, TECHNICAL_SKILLS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import "./Skills.scss";
import skillsData from "../../constants/data/skills.json";

const RenderSkills = ({ skillList = [] }) => {
  return (
    <div className="skill-list">
      {skillList.map((skill, index) => {
        return (
          <div className="list" key={index}>
            {skill.title && (
              <span className="skill-title" key={index}>
                {skill.title} :
              </span>
            )}
            <span key={skill.content}>{skill.content}</span>
          </div>
        );
      })}
    </div>
  );
};

export function Skills() {
  return (
    <Section keyValue="skills">
      <SectionHeading title={HEADINGS.SKILLS} />
      <div className="sub-heading">{TECHNICAL_SKILLS.FRONTEND}</div>
      <RenderSkills skillList={skillsData.frontend} />
      <div className="sub-heading">{TECHNICAL_SKILLS.BACKEND}</div>
      <RenderSkills skillList={skillsData.backend} />
      <div className="sub-heading">{TECHNICAL_SKILLS.TESTING}</div>
      <RenderSkills skillList={skillsData.testing} />
      <div className="sub-heading">{TECHNICAL_SKILLS.CLOUD}</div>
      <RenderSkills skillList={skillsData.cloud} />
      <div className="sub-heading">{TECHNICAL_SKILLS.VERSION_CONTROL}</div>
      <RenderSkills skillList={skillsData.versionControl} />
    </Section>
  );
}
