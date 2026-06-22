import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HazardDivider from "./components/layout/HazardDivider";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Stack from "./components/Stack";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <HazardDivider />
        <Manifesto />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
