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
      className="w-4 h-4 rounded-full flex-shrink-0"
      style={
        isCurrent
          ? {
              background: "#fff",
              border: "2px solid #fff",
              animation: "nodePulse 2s ease-in-out infinite",
            }
          : {
              background: "transparent",
              border: "2px solid #555",
            }
      }
    />
  );
}

function TimelineCard({
  entry,
  animDelay,
}: {
  entry: EntryType;
  animDelay: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({
    threshold: 0.15,
    rootMargin: "0px 0px -30px 0px",
  });
  const isLeft = entry.side === "left";
  // career-card-left / career-card-right use @keyframe animations (not transitions)
  // so they always play from their `from` state when `in-view` is added
  const cardClass = isLeft ? "career-card-left" : "career-card-right";

  return (
    <>
      {/* Desktop: alternating layout. ref lives only on the visible desktop card. */}
      <div className="hidden md:flex items-center gap-8 mb-16">
        <div className="flex-1 flex justify-end pr-4">
          {isLeft ? (
            <div
              ref={ref}
              className={`w-full max-w-sm ${cardClass}${inView ? " in-view" : ""}`}
              style={{ ...CARD_STYLE, animationDelay: animDelay }}
            >
              <CardInner entry={entry} />
            </div>
          ) : null}
        </div>

        <div className="flex-shrink-0 flex items-center justify-center w-4">
          <NodeDot isCurrent={entry.isCurrent} />
        </div>

        <div className="flex-1 flex justify-start pl-4">
          {!isLeft ? (
            <div
              ref={ref}
              className={`w-full max-w-sm ${cardClass}${inView ? " in-view" : ""}`}
              style={{ ...CARD_STYLE, animationDelay: animDelay }}
            >
              <CardInner entry={entry} />
            </div>
          ) : null}
        </div>
      </div>

      {/* Mobile: always visible, no animation needed */}
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
  // headerRef drives both the heading fade AND the timeline line draw.
  // When the heading comes into view → heading fades (immediately),
  // line starts drawing (after 0.3 s CSS delay defined in .timeline-line-fill.in-view).
  const [headerRef, headerInView] = useInView<HTMLDivElement>({
    threshold: 0.3,
  });

  return (
    <section id="career" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Heading — fades in via section-fade-up transition */}
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
          {/* Static background track (full height, always visible) */}
          <div
            className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px hidden md:block"
            style={{ background: "#222" }}
          />

          {/* Animated purple fill — grows via @keyframe timelineLineGrow */}
          <div
            className={`absolute left-1/2 top-0 -translate-x-1/2 w-px hidden md:block rounded-full timeline-line-fill${headerInView ? " in-view" : ""}`}
            style={{
              background: "#7C3AED",
              boxShadow: "0 0 8px #7C3AED",
            }}
          />

          {/* Mobile track */}
          <div
            className="absolute left-2 top-0 bottom-0 w-px md:hidden"
            style={{ background: "#333" }}
          />

          {/* Left card: no extra delay. Right card: 0.2 s stagger. */}
          {entries.map((entry) => (
            <TimelineCard
              key={entry.company}
              entry={entry}
              animDelay={entry.side === "left" ? "0s" : "0.2s"}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
