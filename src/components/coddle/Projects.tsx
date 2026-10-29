import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "@/lib/scroll";
import { projects } from "@/data/projects";

const palette = [
  "var(--cd-yellow)",
  "var(--cd-coral)",
  "var(--cd-periwinkle)",
  "var(--cd-green)",
  "var(--cd-lilac)",
];

const Projects = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const hintRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const countRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const mm = gsap.matchMedia();

    mm.add("(min-width: 900px)", () => {
      if (reduced || !pinRef.current || !trackRef.current) return;

      const track = trackRef.current;

      const distance = () => {
        const paddingRight = parseFloat(getComputedStyle(track).paddingRight) || 0;
        return track.scrollWidth - window.innerWidth + paddingRight;
      };

      const tween = gsap.to(track, {
        x: () => -distance(),
        ease: "none",
        scrollTrigger: {
          trigger: pinRef.current,
          start: "top top",
          end: () => "+=" + (distance() + window.innerHeight * 0.25),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (fillRef.current) fillRef.current.style.transform = `scaleX(${self.progress})`;
            if (countRef.current) {
              const n = Math.round(self.progress * (projects.length - 1)) + 1;
              countRef.current.textContent = `${String(n).padStart(2, "0")} / ${String(projects.length).padStart(2, "0")}`;
            }
            if (hintRef.current) hintRef.current.style.opacity = self.progress > 0.02 ? "0" : "1";
          },
        },
      });

      return () => tween.scrollTrigger?.kill();
    });

    const refresh = () => ScrollTrigger.refresh();
    document.fonts?.ready?.then(refresh);

    const images = Array.from(trackRef.current?.querySelectorAll("img") ?? []);
    const pending = images.filter((img) => !img.complete);
    pending.forEach((img) => img.addEventListener("load", refresh));

    return () => {
      mm.revert();
      pending.forEach((img) => img.removeEventListener("load", refresh));
    };
  }, []);

  return (
    <section id="cd-work" className="cd-shell" style={{ paddingTop: 100 }}>
      <div className="cd-work-head">
        <h2 className="cd-statement-text">Work I&apos;ve shipped.</h2>
        <div className="cd-work-hint" ref={hintRef} aria-hidden>
          <span>Keep scrolling to explore</span>
          <span className="cd-work-hint-icon">&rarr;</span>
        </div>
      </div>

      <div ref={pinRef} className="cd-projects-pin">
        <div ref={trackRef} className="cd-projects-track">
          {projects.map((project, i) => (
            <article
              key={project.title}
              className="cd-project-card"
              style={{ background: palette[i % palette.length] }}
            >
              <div className="cd-project-meta">
                <span className="cd-project-year">{project.year}</span>
                {project.company && <span className="cd-project-year">{project.company}</span>}
              </div>

              <h3 className="cd-project-title">{project.title}</h3>
              <p className="cd-project-subtitle">{project.subtitle}</p>

              <ul className="cd-project-desc">
                {project.bullets.slice(0, 3).map((bullet) => (
                  <li key={bullet} className="cd-project-desc-item">
                    {bullet}
                  </li>
                ))}
              </ul>

              <div className="cd-project-tags">
                {project.technologies.map((tech) => (
                  <span key={tech} className="cd-project-tag">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="cd-project-links">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cd-project-link"
                  >
                    Live demo &rarr;
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cd-project-link"
                  >
                    Code &rarr;
                  </a>
                )}
                {project.productUrl && (
                  <a
                    href={project.productUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cd-project-link"
                  >
                    Product page &rarr;
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>

        <div className="cd-work-progress" aria-hidden>
          <div className="cd-work-progress-bar">
            <div className="cd-work-progress-fill" ref={fillRef} />
          </div>
          <span ref={countRef}>{`01 / ${String(projects.length).padStart(2, "0")}`}</span>
        </div>
      </div>
    </section>
  );
};

export default Projects;
