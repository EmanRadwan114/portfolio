import About from "./components/About";
import Contacts from "./components/Contacts";
import { FloatingIcons } from "./components/FloatingIcons";
import WhatsappIcon from "./components/icons/WhatsappIcon";
import { Projects } from "./components/Projects";
import { SiteNavbar } from "./components/SiteNavbar";
import Skills from "./components/Skills";

export function App() {
  return (
    <>
      <SiteNavbar />
      <About />
      <Projects />
      <Skills />
      <Contacts />
      {/* fixed icons */}
      <FloatingIcons />
      <WhatsappIcon />
    </>
  );
}

export default App;
