import "./App.scss";
import { Awards } from "./components/Awards/Awards";
// import { Certification } from "./components/Certification/Certification";
import { Education } from "./components/Educations/Educations";
import { Experience } from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
// import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Summary } from "./components/Summary/Summary";

function App() {
  return (
    <main className="parent-container">
      <Header key="header" />
      <Summary key="summary" />
      <Skills key="skills" />
      <Experience key="experience" />
      {/* <Projects key="projects" /> */}
      <Education key="education" />
      <Awards key="awards" />
      {/* <Certification key="certification" /> */}
    </main>
  );
}

export default App;
