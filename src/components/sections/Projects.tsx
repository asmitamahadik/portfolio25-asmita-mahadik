import { ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import { projects } from "@/data/projects";

const CARD = {
  background: "var(--color-surface)",
  border: "1px solid var(--color-border)",
  borderRadius: "16px",
  padding: "28px",
} as const;

function ProjectCard({
  project,
  index,
  className = "",
}: {
  project: (typeof projects)[0];
  index: number;
  className?: string;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.08 });

  return (
    <div
      ref={ref}
      className={`flex flex-col section-fade-up ${inView ? "in-view" : ""} ${className}`}
      style={{ ...CARD, transitionDelay: `${index * 0.1}s` }}
    >
      {/* Title row */}
      <div className="flex items-start justify-between gap-4 mb-2">
        <h3 className="text-xl font-bold text-foreground leading-tight">
          {project.title}
        </h3>
        <span
          className="text-xs flex-shrink-0 mt-1"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {project.year}
        </span>
      </div>

      <p
        className="text-sm font-medium mb-3"
        style={{ color: "#FF2D78" }}
      >
        {project.subtitle}
      </p>

      {project.company ? (
        <p
          className="text-xs mb-3"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {project.role} — {project.company}
          {project.teamSize ? ` · Team of ${project.teamSize}` : ""}
        </p>
      ) : null}

      <p
        className="text-sm leading-relaxed mb-5 flex-1"
        style={{ color: "hsl(var(--muted-foreground))" }}
      >
        {project.description}
      </p>

      {project.highlights ? (
        <ul className="space-y-2 mb-5">
          {project.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2 text-sm leading-relaxed"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <span style={{ color: "#FF2D78", flexShrink: 0, marginTop: "2px" }}>•</span>
              {h}
            </li>
          ))}
        </ul>
      ) : null}

      {/* Tech tags */}
      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs rounded-full"
            style={{
              border: "1px solid var(--color-border-soft)",
              color: "hsl(var(--muted-foreground))",
              padding: "4px 12px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      {project.moreInfoUrl || project.repoUrl ? (
        <div className="flex flex-wrap items-center gap-4">
          {project.moreInfoUrl ? (
            <a
              href={project.moreInfoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              {project.moreInfoUrl.includes("github.com") ? "View Repository" : "Live Demo"}
            </a>
          ) : null}
          {project.repoUrl ? (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium transition-opacity hover:opacity-70"
              style={{ color: "hsl(var(--muted-foreground))" }}
            >
              <ExternalLink className="h-3.5 w-3.5" />
              View Repository
            </a>
          ) : null}
        </div>
      ) : project.company ? (
        <span
          className="text-xs"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          Confidential client project — details shared under NDA
        </span>
      ) : null}
    </div>
  );
}

const Projects = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div
          ref={ref}
          className={`text-center mb-16 section-fade-up ${inView ? "in-view" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Projects<span style={{ color: "#FF2D78" }}>.</span>
          </h2>
          <p className="text-muted-foreground">A selection of my recent work</p>
        </div>

        {/* Asymmetric grid — wide/narrow alternates per row, a trailing odd card spans full width */}
        <div className="grid grid-cols-12 gap-5">
          {projects.map((project, index) => {
            const isLastOdd = projects.length % 2 === 1 && index === projects.length - 1;
            const isWide = index % 2 === 0;
            const span = isLastOdd ? "col-span-12" : isWide ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5";

            return (
              <div key={project.title} className={`${span} flex`}>
                <ProjectCard project={project} index={index} className="w-full" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
