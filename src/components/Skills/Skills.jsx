import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import "./Skills.scss";

export function Skills() {
  return (
    <Section>
      <SectionHeading title={HEADINGS.SKILLS} />
      <div className="sub-heading">Proficient</div>
      <div className="skill-list">
        <span>React</span>
        <span>Angular</span>
        <span>NodeJs</span>
        <span>Javascript</span>
        <span>Typescript</span>
        <span>RxJs</span>
        <span>Redux</span>
        <span>HTML</span>
        <span>CSS</span>
        <span>Git</span>
        <span>Bitbucket</span>
        <span>REST API</span>
        <span>Agile development</span>
        <span>Adobe creative cloud</span>
      </div>
      <div className="sub-heading">Familiar</div>
      <div className="skill-list">
        <span>AWS Services</span>
        <span>SQL</span>
        <span>MongoDB</span>
        <span>Java</span>
        <span>Flutter</span>
        <span>Firebase console</span>
        <span>Google console</span>
      </div>
    </Section>
  );
}
