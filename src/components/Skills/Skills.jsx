import { HEADINGS, SKILL_TITLES } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import "./Skills.scss";
import skillsData from "../../constants/data/skills.json";

const RenderSkills = ({ skillList = skillsData }) => {
  const skillListKeys = Object.keys(skillList);
  console.log(skillListKeys);
  return (
    <div className="skill-list">
      {skillListKeys.map((key, index) => {
        if(!Array.isArray(skillList[key])) return;
        const skillSeparatedBYComma = skillList[key].join(", ");
        return (
          <div className="list" key={key}>
            <span className="skill-title">{SKILL_TITLES[key]} :</span>
            <span key={index}>{skillSeparatedBYComma}</span>
          </div>
        );
      })}
    </div>
  );
};

export function Skills({data}) {
  const skills = data[0];
  return (
    <Section keyValue="skills">
      <SectionHeading title={HEADINGS.SKILLS} />
      <RenderSkills skillList={skills}/>
      {/* <div className="sub-heading">{TECHNICAL_SKILLS.VERSION_CONTROL}</div>
      <RenderSkills skillList={skillsData.versionControl} /> */}
    </Section>
  );
}
