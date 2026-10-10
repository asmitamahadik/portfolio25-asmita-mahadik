import { useInView } from "@/hooks/use-in-view";

const entries = [
  {
    date: "March 2026 – September 2026",
    role: "Software Developer - Full Stack",
    company: "Litmus IT Services Pvt Ltd",
    location: "Andheri East, Mumbai",
    bullets: [
      "Engineered full-stack features for Project Vigil, a DC/DR configuration drift monitoring platform, within a cross-functional team of 7",
      "Built the Admin Console and Management Dashboard with Role-Based Access Control (RBAC) across a six-role permission system",
      "Implemented TOTP-based two-factor authentication (RFC 6238) and designed the Express middleware chain — JWT auth with session revocation, CORS, and rate limiting",
      "Integrated Prometheus (PromQL) for real-time metrics aggregation and built a Server-Sent Events (SSE) module for real-time alerts",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Prometheus", "TOTP/2FA", "RBAC"],
    isCurrent: false,
  },
  {
    date: "April 2024 – December 2024",
    role: "Software Engineer",
    company: "Bitsmith Technologies Pvt Ltd",
    location: "Pune",
    bullets: [
      "Built and enhanced client-facing ReactJS modules, improving page load performance through code splitting and lazy loading",
      "Integrated third-party APIs for payments, notifications, and analytics, and automated internal workflows to reduce manual processing",
      "Managed sprint deliverables in Jira and authored technical handoff documentation to streamline onboarding for new team members",
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "Jira"],
    isCurrent: false,
  },
];

// ── Timeline geometry ────────────────────────────────────────
// Spine sits at left: 20px (center at 21px) inside the outer relative container.
// Cards have paddingLeft: 68px, so node left = 21 - 6(half) - 68 = -53px from card left.
const SPINE_LEFT = 20;   // px — left edge of the 2px spine
const CARD_PADDING = 68; // px — space given to the spine + gap
const NODE_SIZE = 12;    // px diameter
// node.left from card = SPINE_LEFT + 1(half spine) - NODE_SIZE/2 - CARD_PADDING
const NODE_LEFT = SPINE_LEFT + 1 - NODE_SIZE / 2 - CARD_PADDING; // = -53

function EntryCard({ entry, delay }: { entry: typeof entries[0]; delay: string }) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.12 });

  return (
    <div
      ref={ref}
      className={`section-fade-up ${inView ? "in-view" : ""} rounded-2xl p-6`}
      style={{
        background: "var(--color-surface)",
        border: "1px solid var(--color-border)",
        transitionDelay: delay,
      }}
    >
      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
        <h3 className="text-lg font-bold text-foreground">{entry.role}</h3>
        <span className="text-sm flex-shrink-0" style={{ color: "hsl(var(--muted-foreground))" }}>
          {entry.date}
        </span>
      </div>

      <p className="text-sm mb-4">
        <span style={{ color: "#FF2D78" }} className="font-medium">{entry.company}</span>
        <span style={{ color: "hsl(var(--muted-foreground))" }}> • {entry.location}</span>
      </p>

      <ul className="space-y-2 mb-5">
        {entry.bullets.map((b) => (
          <li
            key={b}
            className="flex items-start gap-2 text-sm leading-relaxed"
            style={{ color: "hsl(var(--muted-foreground))" }}
          >
            <span style={{ color: "#FF2D78", flexShrink: 0, marginTop: "2px" }}>•</span>
            {b}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {entry.technologies.map((t) => (
          <span
            key={t}
            className="text-xs rounded-full"
            style={{
              border: "1px solid var(--color-border-soft)",
              color: "hsl(var(--muted-foreground))",
              padding: "4px 12px",
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

const Experience = () => {
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.3 });

  return (
    <section id="career" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div
          ref={headerRef}
          className={`text-center mb-16 section-fade-up ${headerInView ? "in-view" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Career Journey<span style={{ color: "#FF2D78" }}>.</span>
          </h2>
          <p className="text-muted-foreground">My professional journey</p>
        </div>

        {/* ── Timeline layout ──────────────────────────────────
            The outer div is `relative` and gets its height from
            the padded card column — so the absolute spine lines
            can use top:0 / bottom:0 and actually measure correctly.
        ─────────────────────────────────────────────────────── */}
        <div className="relative">
          {/* Static pink spine line */}
          <div
            className="absolute hidden md:block top-0 bottom-0"
            style={{
              left: `${SPINE_LEFT}px`,
              width: "2px",
              background: "#FF2D78",
              boxShadow: "0 0 8px rgba(255,45,120,0.5)",
            }}
          />

          {/* Cards — left padding gives the spine its space */}
          <div
            className="space-y-6"
            style={{ paddingLeft: `${CARD_PADDING}px` }}
          >
            {entries.map((entry, i) => (
              <div key={entry.company} className="relative">
                {/* Node dot on the spine */}
                <div
                  className="hidden md:block absolute rounded-full"
                  style={{
                    left: `${NODE_LEFT}px`,
                    top: "22px",
                    width: `${NODE_SIZE}px`,
                    height: `${NODE_SIZE}px`,
                    background: entry.isCurrent ? "#FF2D78" : "transparent",
                    border: `2px solid ${entry.isCurrent ? "#FF2D78" : "#555"}`,
                    animation: entry.isCurrent
                      ? "nodePulse 2s ease-in-out infinite"
                      : "none",
                    zIndex: 2,
                    boxSizing: "border-box",
                  }}
                />
                <EntryCard entry={entry} delay={`${i * 0.15}s`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
