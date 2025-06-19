import Hero from "../components/Hero";
import About from "../components/about_models/About_v2";
import Services from "../components/serviceModels/Services";
import Projects from "../components/projects_models/Projects2";
import Contact from "../components/Contact";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
    </>
  );
}

export default Home;
