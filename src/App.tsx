// Project files
import "./styles/style.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import CardSection from "./components/CardSection";
import ProjectSection from "./components/ProjectSection";

function App() {
  return (
    <div className="App">
      <Header />
      <Intro />
      <CardSection sectionHeading="Skills" />
      <CardSection sectionHeading="Work and education" />
      <ProjectSection />
    </div>
  );
}

export default App;
