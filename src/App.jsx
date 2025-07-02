import "./App.scss";
import { Awards } from "./components/Awards/Awards";
// import { Certification } from "./components/Certification/Certification";
import { Education } from "./components/Educations/Educations";
import { Experience } from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Summary } from "./components/Summary/Summary";
import useResumeData from "./hooks/useResumeData";
import { Loader } from "./util-components/Loader/Loader";

function App() {
  const {resumeData, loading} = useResumeData();
  if(loading) {
    return <Loader/>
  }
  const {awards, educations, exp, profile, project, skills, summary} = resumeData;

  return (
    <main className="parent-container">
      <Header key="header" data={profile}/>
      <Summary key="summary" data={summary}/>
      <Skills key="skills" data={skills}/>
      <Experience key="experience" data={exp}/>
      <Projects key="projects" data={project}/>
      <Education key="education" data={educations}/>
      <Awards key="awards" data={awards}/>
      {/* <Certification key="certification" /> */}
    </main>
  );
}

export default App;
