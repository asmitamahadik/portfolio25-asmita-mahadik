import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const entries = [
  {
    date: "March 2026 – Present",
    role: "Fullstack Engineer Intern",
    company: "Litmus IT Systems Pvt Ltd",
    emoji: "🌐",
    description:
      "Contributed to full-stack development of Project Vigil. Worked in agile environment delivering scalable features, streamlining API integrations, and performing UAT for quality releases.",
    side: "left" as const,
    isCurrent: true,
  },
  {
    date: "April 2024 – December 2024",
    role: "Software Engineering Intern",
    company: "Bitsmith Technologies Pvt Ltd",
    emoji: "💼",
    description:
      "Collaborated in agile teams to enhance ReactJS applications. Automated workflows via API integrations and maintained thorough documentation.",
    side: "right" as const,
    isCurrent: false,
  },
];

interface EntryType {
  date: string;
  role: string;
  company: string;
  emoji: string;
  description: string;
  side: "left" | "right";
  isCurrent: boolean;
}

const CARD_STYLE = {
  background: "#111111",
  border: "1px solid #222222",
  borderRadius: "12px",
  padding: "24px",
} as const;

function CardInner({ entry }: { entry: EntryType }) {
  return (
    <>
      <p className="text-xs font-medium mb-2" style={{ color: "#A0A0A0" }}>
        {entry.emoji} {entry.date}
      </p>
      <h3 className="text-lg font-bold mb-1" style={{ color: "#FFFFFF" }}>
        {entry.role}
      </h3>
      <p className="text-sm font-semibold mb-3" style={{ color: "#FF2D78" }}>
        {entry.company}
      </p>
      <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
        {entry.description}
      </p>
    </>
  );
}

function NodeDot({ isCurrent }: { isCurrent: boolean }) {
  return (
    <div
      className="w-4 h-4 rounded-full border-2 border-white flex-shrink-0"
      style={{
        background: isCurrent ? "#fff" : "transparent",
        boxShadow: isCurrent ? "0 0 20px #7C3AED, 0 0 40px rgba(124,58,237,0.4)" : "none",
      }}
    />
  );
}

function TimelineCard({ entry, index }: { entry: EntryType; index: number }) {
  // threshold: 0.05 + rootMargin to trigger generously before fully in view
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold: 0.05,
    rootMargin: "0px 0px -80px 0px",
  });
  const isLeft = entry.side === "left";

  return (
    <>
      {/*
        Desktop layout — ref lives ONLY here, on the visible desktop card.
        Cards alternate left/right around the centre node.
      */}
      <div className="hidden md:flex items-center gap-8 mb-12">
        {/* Left slot */}
        <div className="flex-1 flex justify-end pr-4">
          {isLeft ? (
            <div
              ref={ref}
              className={`w-full max-w-sm slide-left${inView ? " in-view" : ""}`}
              style={{ ...CARD_STYLE, transitionDelay: `${index * 0.1}s` }}
            >
              <CardInner entry={entry} />
            </div>
          ) : null}
        </div>

        {/* Centre node */}
        <div className="flex-shrink-0 flex items-center justify-center w-4">
          <NodeDot isCurrent={entry.isCurrent} />
        </div>

        {/* Right slot */}
        <div className="flex-1 flex justify-start pl-4">
          {!isLeft ? (
            <div
              ref={ref}
              className={`w-full max-w-sm slide-right${inView ? " in-view" : ""}`}
              style={{ ...CARD_STYLE, transitionDelay: `${index * 0.1}s` }}
            >
              <CardInner entry={entry} />
            </div>
          ) : null}
        </div>
      </div>

      {/*
        Mobile layout — NO ref, NO animation class → always visible.
        Node on left, card spanning the remaining width.
      */}
      <div className="flex md:hidden items-start gap-4 mb-8">
        <div className="flex-shrink-0 mt-1">
          <NodeDot isCurrent={entry.isCurrent} />
        </div>
        <div className="flex-1" style={CARD_STYLE}>
          <CardInner entry={entry} />
        </div>
      </div>
    </>
  );
}

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [lineProgress, setLineProgress] = useState(0);
  const [headerRef, headerInView] = useInView<HTMLDivElement>();

  useEffect(() => {
    const onScroll = () => {
      const section = sectionRef.current;
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const progress = Math.max(
        0,
        Math.min(1, (window.innerHeight - rect.top) / section.offsetHeight)
      );
      setLineProgress(progress);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="career" ref={sectionRef} className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 section-fade-up${headerInView ? " in-view" : ""}`}
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Career Journey
          </h2>
          <p style={{ color: "#A0A0A0" }}>
            An evolving path of growth, innovation, and impact
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Centre line — desktop only */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px hidden md:block"
            style={{ background: "#222" }}
          >
            <div
              className="w-full rounded-full"
              style={{
                height: `${lineProgress * 100}%`,
                background: "#7C3AED",
                boxShadow: "0 0 8px #7C3AED",
                transition: "height 0.1s linear",
              }}
            />
          </div>

          {/* Mobile vertical line */}
          <div
            className="absolute left-2 top-0 bottom-0 w-px md:hidden"
            style={{ background: "#333" }}
          />

          {entries.map((entry, i) => (
            <TimelineCard key={i} entry={entry} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
