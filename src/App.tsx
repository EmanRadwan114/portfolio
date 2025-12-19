import About from "./components/About";
import Contacts from "./components/Contacts";
import { FloatingIcons } from "./components/FloatingIcons";
import { Projects } from "./components/Projects";
import { SiteNavbar } from "./components/SiteNavbar";
import Skills from "./components/Skills";

export function App() {
  return (
    <>
      <SiteNavbar />
      <About />
      <FloatingIcons />
      <Projects />
      <Skills />
      <Contacts />
    </>
  );
}

export default App;
