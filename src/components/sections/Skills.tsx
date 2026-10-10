import { useInView } from "@/hooks/use-in-view";

// Devicon class names — "colored" uses the brand's official palette
const DEVICONS: Record<string, string> = {
  "TypeScript":    "devicon-typescript-plain colored",
  "JavaScript":    "devicon-javascript-plain colored",
  "Python":        "devicon-python-plain colored",
  "Java":          "devicon-java-plain colored",
  "C++":           "devicon-cplusplus-plain colored",
  "React.js":      "devicon-react-plain colored",
  "Next.js":       "devicon-nextjs-plain",
  "Node.js":       "devicon-nodejs-plain colored",
  "Express.js":    "devicon-express-original colored",
  "Spring Boot":   "devicon-spring-plain colored",
  "Redux":         "devicon-redux-original colored",
  "Tailwind CSS":  "devicon-tailwindcss-plain colored",
  "MongoDB":       "devicon-mongodb-plain colored",
  "MySQL":         "devicon-mysql-plain colored",
  "PostgreSQL":    "devicon-postgresql-plain colored",
  "Git":           "devicon-git-plain colored",
  "GCP":           "devicon-googlecloud-plain colored",
  "Firebase":      "devicon-firebase-plain colored",
  "Postman":       "devicon-postman-plain colored",
  "Jira":          "devicon-jira-plain colored",
};

// Fallback brand colors for skills without a devicon
const FALLBACK_COLORS: Record<string, string> = {
  "CI/CD":      "#6B7280",
  "JWT":        "#8B5CF6",
  "Zustand":    "#433D77",
  "REST APIs":  "#FF2D78",
};

const skillCategories = [
  {
    category: "Primary / Core Stack",
    skills: ["React.js", "JavaScript", "TypeScript", "Node.js", "Express.js", "Java", "Spring Boot", "MySQL", "REST APIs"],
  },
  {
    category: "Currently Learning / Exploring",
    skills: ["Next.js", "GCP"],
  },
  {
    category: "Languages",
    skills: ["Python", "C++"],
  },
  {
    category: "Databases",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "Firebase", "Postman", "Jira", "CI/CD", "JWT", "Zustand", "Redux", "Tailwind CSS"],
  },
];

const coursework = [
  "Data Structures & Algorithms",
  "Software Engineering",
  "DBMS",
  "Web Technologies",
  "OOP",
];

function SkillIcon({ name }: { name: string }) {
  const iconClass = DEVICONS[name];
  if (iconClass) {
    return (
      <i
        className={iconClass}
        style={{ fontSize: "16px", lineHeight: 1, flexShrink: 0 }}
      />
    );
  }
  // Colored dot fallback for skills without a devicon
  const color = FALLBACK_COLORS[name] ?? "#6B7280";
  return (
    <span
      style={{
        width: "8px",
        height: "8px",
        borderRadius: "50%",
        background: color,
        flexShrink: 0,
        display: "inline-block",
      }}
    />
  );
}

const Skills = () => {
  const [ref, inView] = useInView<HTMLDivElement>();
  const [eduRef, eduInView] = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Skills &amp; Expertise<span style={{ color: "#FF2D78" }}>.</span>
          </h2>
          <p className="text-muted-foreground">
            A collection of technologies I'm proficient with
          </p>
        </div>

        {/* Category groups */}
        <div
          ref={ref}
          className={`space-y-10 mb-10 section-fade-up ${inView ? "in-view" : ""}`}
        >
          {skillCategories.map(({ category, skills }) => (
            <div key={category}>
              <h3
                className="text-sm font-semibold text-foreground mb-4"
                style={{ letterSpacing: "0.04em" }}
              >
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center gap-2 text-sm rounded-lg"
                    style={{
                      background: "var(--color-surface)",
                      border: "1px solid var(--color-border)",
                      color: "hsl(var(--muted-foreground))",
                      padding: "7px 14px",
                    }}
                  >
                    <SkillIcon name={skill} />
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Education card */}
        <div
          ref={eduRef}
          className={`rounded-2xl p-8 section-fade-up ${eduInView ? "in-view" : ""}`}
          style={{
            background: "var(--color-surface)",
            border: "1px solid var(--color-border)",
          }}
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex-1">
              <p
                className="text-xs font-semibold mb-2"
                style={{ color: "#FF2D78", letterSpacing: "2px", textTransform: "uppercase" }}
              >
                Education
              </p>
              <h3 className="text-lg font-bold text-foreground mb-1">
                Bachelor of Engineering — Computer Engineering
              </h3>
              <p className="text-sm text-muted-foreground mb-4">
                Sinhgad College of Engineering, Pune — SPPU | 2019 – 2023
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs rounded-full"
                    style={{
                      border: "1px solid var(--color-border-soft)",
                      color: "hsl(var(--muted-foreground))",
                      padding: "4px 12px",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>

            <div
              className="flex-shrink-0 rounded-xl p-6 text-center"
              style={{
                background: "var(--color-surface-sunken)",
                border: "1px solid var(--color-border)",
                minWidth: "100px",
              }}
            >
              <div className="text-3xl font-bold text-foreground mb-1">7.67</div>
              <div className="text-xs text-muted-foreground">CGPA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
