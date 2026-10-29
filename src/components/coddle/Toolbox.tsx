import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "@/lib/scroll";
import { skillCategories } from "@/data/skills";

const palette = [
  "var(--cd-yellow)",
  "var(--cd-coral)",
  "var(--cd-periwinkle)",
  "var(--cd-green)",
  "var(--cd-lilac)",
];

const Toolbox = () => {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !gridRef.current) return;

    const tween = gsap.from(gridRef.current.querySelectorAll(".cd-toolbox-card"), {
      opacity: 0,
      y: 36,
      duration: 0.7,
      ease: "power2.out",
      stagger: 0.12,
      scrollTrigger: {
        trigger: gridRef.current,
        start: "top 80%",
      },
    });

    return () => tween.scrollTrigger?.kill();
  }, []);

  return (
    <section id="cd-toolbox" className="cd-shell" style={{ paddingTop: 100, paddingBottom: 100 }}>
      <h2 className="cd-statement-text mb-10">The toolbox.</h2>

      <div ref={gridRef} className="cd-toolbox-grid">
        {skillCategories.map((category, i) => (
          <div
            key={category.title}
            className="cd-toolbox-card"
            style={{ background: palette[i % palette.length] }}
          >
            <h3 style={{ fontSize: "1.3rem", fontWeight: 700, letterSpacing: "-0.02em", marginBottom: 16 }}>
              {category.title}
            </h3>
            <div className="cd-toolbox-skills">
              {category.skills.map((skill) => (
                <span key={skill} className="cd-toolbox-skill">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Toolbox;
