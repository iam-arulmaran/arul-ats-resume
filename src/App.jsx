import "./App.scss";
import { Certification } from "./components/Certification/Certification";
import { Education } from "./components/Educations/Educations";
import { Experience } from "./components/Experience/Experience";
import { Header } from "./components/Header/Header";
import { Projects } from "./components/Projects/Projects";
import { Skills } from "./components/Skills/Skills";
import { Summary } from "./components/Summary/Summary";

function App() {
  return (
    <main className="parent-container">
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <Projects />
      <Education />
      <Certification />
    </main>
  );
}

export default App;
