import { useEffect } from "react";
import "@/styles/coddle.css";
import { initScroll, destroyScroll, ScrollTrigger } from "@/lib/scroll";
import Nav from "@/components/coddle/Nav";
import Hero from "@/components/coddle/Hero";
import Marquee from "@/components/coddle/Marquee";
import Statement from "@/components/coddle/Statement";
import Projects from "@/components/coddle/Projects";
import Career from "@/components/coddle/Career";
import Toolbox from "@/components/coddle/Toolbox";
import Contact from "@/components/coddle/Contact";

const Index = () => {
  useEffect(() => {
    initScroll();
    const onLoad = () => ScrollTrigger.refresh();
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);
      destroyScroll();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="cd">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Statement />
        <Projects />
        <Career />
        <Toolbox />
        <Contact />
      </main>
    </div>
  );
};

export default Index;
