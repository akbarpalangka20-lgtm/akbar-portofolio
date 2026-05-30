import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Timeline from "../components/Timeline";
import Gallery from "../components/Gallery";
import Contact from "../components/Contact";

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollTo) {
      const id = location.state.scrollTo;
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 50);
    }
  }, [location.state]);

  return (
    <main data-testid="home-page">
      <Hero />
      <About />
      <TechStack />
      <Timeline />
      <Gallery />
      <Contact />
    </main>
  );
}
