// Project files
import "./styles/style.css";
import Header from "./sections/Header";
import Intro from "./sections/Intro";
import CardSection from "./sections/CardSection";
import ProjectSection from "./sections/ProjectSection";
import Contact from "./sections/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <CardSection sectionHeading="Skills" />
      <ProjectSection />
      <CardSection sectionHeading="Work and education" />
      <Contact />
    </div>
  );
}

export default App;
