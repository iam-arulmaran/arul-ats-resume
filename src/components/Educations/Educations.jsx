import "./Educations.scss";
import { HEADINGS } from "../../constants/common";
import { Section } from "../../util-components/Section/Section";
import { SectionHeading } from "../../util-components/SectionHeading/SectionHeading";
import eduDetails from "../../constants/data/education.json";

export function Education() {
  return (
    <Section extraClasses="education-main">
      <SectionHeading title={HEADINGS.EDUCATION} />
      <RenderEducations />
    </Section>
  );
}

const RenderEducations = ({ educationDetails = eduDetails }) => {
  return educationDetails.map((edu, index) => {
    return (
      <div className="education-wrapper" key={index}>
        <div className="main-heading">
          <span>{edu.courseName}</span>
        </div>
        <div className="sub-heading">
          {edu.graduatedOn} |<span className="light">{edu.university}</span>
        </div>
      </div>
    );
  });
};
