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
          {exp.companyName} |<span className="light">{exp.designation}</span>
          <span className="right">{exp.period}</span>
        </div>
        {/* <span className="location">{exp.location}</span> */}
        <List data={exp.contributions} listClass="list" />
      </div>
    );
  });
};

// const RenderWorks = ({ works = [] }) => {
//   return works.map((work) => {
//     return (
//       <div className="work-list" key={work.type}>
//         <div className="sub-heading">
//           {work.projectName} |<span className="light">{work.type}</span>
//         </div>
//         <div className="pro-desc">
//           <span>Description: </span>
//           {work.desc}
//         </div>
//         <List data={work.detailLists} listClass="list" />
//       </div>
//     );
//   });
// };

export function Experience({data}) {
  return (
    <Section>
      <SectionHeading title={HEADINGS.EXPERIENCE} />
      <RenderExperience companyDetails={data}/>
    </Section>
  );
}
