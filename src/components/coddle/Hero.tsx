import { useEffect, useRef } from "react";
import type React from "react";
import gsap from "gsap";
import { scrollToTarget } from "@/lib/scroll";

const prefersReducedMotion = () =>
  typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const Hero = () => {
  const root = useRef<HTMLElement>(null);

  useEffect(() => {
    if (prefersReducedMotion() || !root.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });
      tl.from(".cd-hero-line > span", { yPercent: 115, duration: 1.1, stagger: 0.12 })
        .from(".cd-hero-sub, .cd-hero-cta", { y: 24, opacity: 0, duration: 0.8, stagger: 0.1 }, "-=0.6")
        .from(".cd-mosaic > div", { scale: 0.6, opacity: 0, duration: 0.8, stagger: 0.08, ease: "back.out(1.5)" }, 0.2)
        .from(".cd-hero-pill-dot", { x: 0, duration: 0 }, 0);

      // pill dot travels along the pill, like a loading bar
      gsap.to(".cd-hero-pill-dot", { x: "1.05em", duration: 1.4, repeat: -1, yoyo: true, ease: "power2.inOut" });

      // gentle parallax on scroll
      gsap.to(".cd-mosaic", {
        yPercent: -8,
        ease: "none",
        scrollTrigger: { trigger: root.current, start: "top top", end: "bottom top", scrub: true },
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const tilt = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion()) return;
    const r = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    gsap.to(".cd-mosaic > div", {
      x: (i) => x * (i % 2 ? 14 : -14),
      y: (i) => y * (i % 2 ? 14 : -14),
      duration: 0.6,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const untilt = () => gsap.to(".cd-mosaic > div", { x: 0, y: 0, duration: 0.8, ease: "power3.out" });

  const goToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    scrollToTarget("#cd-work");
  };

  return (
    <section id="cd-hero" ref={root} className="cd-hero cd-shell">
      <div>
        <div className="cd-hero-chips">
          <span className="cd-hero-chip">Full-Stack Developer</span>
          <span className="cd-hero-chip">
            <span className="cd-hero-chip-dot" />
            Immediate joiner
          </span>
        </div>

        <h1 className="cd-hero-headline">
          <span className="cd-hero-line">
            <span>Hi, I&apos;m Asmita.</span>
          </span>
          <span className="cd-hero-line">
            <span>
              I build for
              <span className="cd-hero-pill" aria-hidden>
                <span className="cd-hero-pill-dot" />
                <svg viewBox="0 0 24 12" fill="none" stroke="#fff" strokeWidth="1.6">
                  <path d="M1 6h20M16 1l5 5-5 5" />
                </svg>
              </span>
            </span>
          </span>
          <span className="cd-hero-line">
            <span>the web.</span>
          </span>
        </h1>

        <p className="cd-hero-sub">
          Full-stack developer with 1+ year of commercial experience building production web applications in agile
          teams.
        </p>

        <div className="cd-hero-cta">
          <a href="#cd-work" className="cd-btn-light" onClick={goToWork}>
            See my work <span aria-hidden>&darr;</span>
          </a>
          <a href="/resume.pdf" download="Asmita-Mahadik-Resume.pdf" className="cd-btn-cta">
            Resume
          </a>
        </div>
      </div>

      <div className="cd-mosaic" aria-hidden onMouseMove={tilt} onMouseLeave={untilt}>
        <div className="cd-mosaic-a">
          <span className="cd-mosaic-glyph">&lt;/&gt;</span>
        </div>
        <div className="cd-mosaic-b">
          <svg className="cd-mosaic-spin" viewBox="0 0 100 100">
            <g stroke="var(--cd-coral)" strokeWidth="6" strokeLinecap="round">
              {Array.from({ length: 16 }).map((_, i) => (
                <line key={i} x1="50" y1="8" x2="50" y2="30" transform={`rotate(${i * 22.5} 50 50)`} />
              ))}
            </g>
          </svg>
        </div>
        <div className="cd-mosaic-c">
          <img src="/photo.jpeg" alt="" />
        </div>
        <div className="cd-mosaic-d">
          <span className="cd-mosaic-glyph">{"{ }"}</span>
        </div>
        <div className="cd-mosaic-e">
          <svg viewBox="0 0 100 100">
            <path fill="var(--cd-periwinkle)" d="M10 90V60a40 40 0 0 1 80 0v30z" />
          </svg>
        </div>
        <div className="cd-mosaic-f">
          <span className="cd-mosaic-glyph cd-mosaic-glyph-small">TS</span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
