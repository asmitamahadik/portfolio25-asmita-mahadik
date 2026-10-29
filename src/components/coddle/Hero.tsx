import { useEffect, useRef } from "react";
import gsap from "gsap";
import "@/lib/scroll";

const blocks = [
  { color: "var(--cd-yellow)" },
  { color: "var(--cd-coral)" },
  { color: "var(--cd-periwinkle)" },
  { color: "var(--cd-green)" },
  { color: "var(--cd-lilac)" },
];

const Hero = () => {
  const rootRef = useRef<HTMLDivElement>(null);
  const mosaicRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const ctx = gsap.context(() => {
      if (reduced) return;

      gsap.fromTo(
        ".cd-hero-line > span",
        { yPercent: 110 },
        { yPercent: 0, duration: 0.9, ease: "power3.out", stagger: 0.08, delay: 0.15 }
      );

      gsap.fromTo(
        ".cd-hero-pill, .cd-hero-sub",
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power2.out", delay: 0.5 }
      );

      const tiles = mosaicRef.current?.querySelectorAll<HTMLElement>(".cd-mosaic-tile");
      tiles?.forEach((tile, i) => {
        gsap.to(tile, {
          yPercent: i % 2 === 0 ? 10 : -10,
          ease: "none",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="cd-hero" ref={rootRef} className="cd-hero cd-shell">
      <span className="cd-hero-pill">
        <span className="cd-hero-dot" />
        Full-Stack Developer
      </span>

      <h1 className="cd-hero-headline mt-6">
        <span className="cd-hero-line">
          <span>Hi, I&apos;m Asmita.</span>
        </span>
        <span className="cd-hero-line">
          <span>I build for the web.</span>
        </span>
      </h1>

      <p className="cd-hero-sub mt-6 max-w-lg" style={{ color: "rgba(245,243,239,0.7)", fontSize: "1.05rem" }}>
        Full-stack developer with 1+ year of commercial experience building
        production web applications in agile teams.
      </p>

      <div ref={mosaicRef} className="cd-mosaic">
        <div className="cd-mosaic-tile cd-mosaic-photo">
          <img src="/photo.jpeg" alt="Asmita Mahadik" />
        </div>
        {blocks.map((b, i) => (
          <div key={i} className="cd-mosaic-tile" style={{ background: b.color }} />
        ))}
      </div>
    </section>
  );
};

export default Hero;
