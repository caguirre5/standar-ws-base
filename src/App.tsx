import About from "./components/about_models/About_v2";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/projects_models/Projects2";
import Services from "./components/serviceModels/Services";

function App() {
  return (
    <>
      <Hero/>
      <About/>
      <Services/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default App;
