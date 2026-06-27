import { useInView } from "@/hooks/use-in-view";
import { projects } from "@/data/projects";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className={`rounded-xl p-7 section-fade-up ${inView ? "in-view" : ""}`}
      style={{
        background: "#111",
        border: "1px solid #222",
        maxWidth: 800,
        margin: "0 auto 20px",
        transitionDelay: `${index * 0.1}s`,
      }}
    >
      <div className="flex items-start justify-between mb-3">
        <div>
          <h3 className="text-xl font-bold text-white mb-0.5">
            {project.title}
          </h3>
          <p className="text-sm font-medium" style={{ color: "#A0A0A0" }}>
            {project.subtitle}
          </p>
        </div>
        <div className="flex items-center gap-3 flex-shrink-0 ml-4">
          <span className="text-xs" style={{ color: "#A0A0A0" }}>
            {project.year}
          </span>
          <span style={{ color: "#444", fontSize: 22, lineHeight: 1 }}>⠿</span>
        </div>
      </div>

      <p
        className="text-sm leading-relaxed mb-5"
        style={{ color: "#A0A0A0" }}
      >
        {project.description}
      </p>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="text-xs rounded-full"
            style={{
              border: "1px solid #333",
              color: "#A0A0A0",
              padding: "4px 12px",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {project.moreInfoUrl ? (
        <a
          href={project.moreInfoUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium transition-opacity hover:opacity-70"
          style={{ color: "#FF2D78" }}
        >
          More Info →
        </a>
      ) : (
        <span
          className="text-sm font-medium opacity-40 cursor-default"
          style={{ color: "#FF2D78" }}
        >
          More Info →
        </span>
      )}
    </div>
  );
}

const Projects = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="projects" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`text-center mb-16 section-fade-up ${inView ? "in-view" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Projects
          </h2>
          <div
            className="w-12 h-1 rounded-full mx-auto"
            style={{ background: "#FF2D78" }}
          />
        </div>

        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
