import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "@/lib/scroll";

const sentence =
  "Full-stack developer with 1+ year of commercial experience building production web applications in agile teams. Built a distributed configuration drift monitoring system with real-time alerting, two-factor authentication, and multi-role access control.";

const stats = [
  { value: "1+", label: "Years" },
  { value: "3", label: "Projects Delivered" },
  { value: "7.67", label: "CGPA" },
  { value: "B.E.", label: "Computer Engineering" },
];

const Statement = () => {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced || !textRef.current) return;

    const words = textRef.current.querySelectorAll<HTMLElement>(".cd-statement-word");

    const tween = gsap.to(words, {
      color: "#f5f3ef",
      stagger: 0.04,
      ease: "none",
      scrollTrigger: {
        trigger: textRef.current,
        start: "top 75%",
        end: "bottom 55%",
        scrub: true,
      },
    });

    return () => {
      tween.scrollTrigger?.kill();
      tween.kill();
    };
  }, []);

  return (
    <section className="cd-statement cd-shell">
      <p ref={textRef} className="cd-statement-text">
        {sentence.split(" ").map((word, i) => (
          <span key={i} className="cd-statement-word">
            {word}{" "}
          </span>
        ))}
      </p>

      <div className="cd-stats">
        {stats.map((s) => (
          <div key={s.label} className="cd-stat-card">
            <div className="cd-stat-value">{s.value}</div>
            <div className="cd-stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statement;
