import About from "./components/About";
import { FloatingIcons } from "./components/FloatingIcons";
import { Projects } from "./components/Projects";
import { SiteNavbar } from "./components/SiteNavbar";

export function App() {
  return (
    <>
      <SiteNavbar />
      <About />
      <FloatingIcons />
      <Projects />
    </>
  );
}

export default App;
