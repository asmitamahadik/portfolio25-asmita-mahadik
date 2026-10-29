import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "@/lib/scroll";
import { experience } from "@/data/experience";

const palette = ["var(--cd-periwinkle)", "var(--cd-coral)", "var(--cd-green)"];

const Career = () => {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !stackRef.current) return;

    const cards = stackRef.current.querySelectorAll<HTMLElement>(".cd-career-card");
    const triggers: ScrollTrigger[] = [];

    cards.forEach((card, i) => {
      if (i === cards.length - 1) return;
      const tween = gsap.to(card, {
        scale: 0.94,
        opacity: 0.6,
        ease: "none",
        scrollTrigger: {
          trigger: cards[i + 1],
          start: "top bottom",
          end: "top top",
          scrub: true,
        },
      });
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    return () => triggers.forEach((t) => t.kill());
  }, []);

  return (
    <section id="cd-career" className="cd-shell" style={{ paddingTop: 140, paddingBottom: 60 }}>
      <h2 className="cd-statement-text mb-16">Career so far.</h2>

      <div ref={stackRef} className="cd-career-stack">
        {experience.map((entry, i) => (
          <div key={entry.company} className="cd-career-card" style={{ zIndex: i + 1 }}>
            <div className="flex flex-wrap items-start justify-between gap-3 mb-2">
              <div>
                <h3 style={{ fontSize: "1.5rem", fontWeight: 700, letterSpacing: "-0.02em" }}>
                  {entry.role}
                </h3>
                <p style={{ color: palette[i % palette.length], fontWeight: 600, marginTop: 4 }}>
                  {entry.company} &middot; {entry.location}
                </p>
              </div>
              <span style={{ color: "rgba(245,243,239,0.55)", fontSize: "0.9rem" }}>{entry.date}</span>
            </div>

            <ul className="mt-6 space-y-3">
              {entry.bullets.map((b) => (
                <li
                  key={b}
                  style={{ color: "rgba(245,243,239,0.8)", fontSize: "0.95rem", lineHeight: 1.6 }}
                  className="flex items-start gap-3"
                >
                  <span style={{ color: palette[i % palette.length], flexShrink: 0 }}>&bull;</span>
                  {b}
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-2 mt-6">
              {entry.technologies.map((t) => (
                <span
                  key={t}
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 600,
                    padding: "5px 12px",
                    borderRadius: 999,
                    border: "1px solid rgba(255,255,255,0.15)",
                    color: "rgba(245,243,239,0.75)",
                  }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
