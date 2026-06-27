import { useEffect, useState } from "react";
import { useInView } from "@/hooks/use-in-view";

const skillBars = [
  { name: "React.js / Next.js", percent: 88 },
  { name: "TypeScript & JavaScript", percent: 85 },
  { name: "Node.js / Express", percent: 82 },
  { name: "SQL / MongoDB", percent: 78 },
  { name: "Python", percent: 75 },
  { name: "Java / Spring Boot", percent: 72 },
];

const softSkills = [
  "Agile Development",
  "Problem Solving",
  "Digital Transformation",
  "Process Automation",
  "Team Collaboration",
];

const additionalTech = [
  "C++", "GCP", "Git", "Jira", "Postman", "Django",
  "Redux", "Zustand", "Jest", "CI/CD", "Firebase", "JWT",
];

const coursework = [
  "Data Structures & Algorithms",
  "Software Engineering",
  "DBMS",
  "Web Technologies",
  "OOP",
];

function SkillBar({
  name,
  percent,
  delay,
  trigger,
}: {
  name: string;
  percent: number;
  delay: number;
  trigger: boolean;
}) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const timer = setTimeout(() => setWidth(percent), delay);
    return () => clearTimeout(timer);
  }, [trigger, percent, delay]);

  return (
    <div className="mb-5">
      <div className="flex justify-between mb-2">
        <span className="text-sm text-white font-medium">{name}</span>
        <span className="text-sm text-white font-medium">{percent}%</span>
      </div>
      <div
        className="h-1.5 rounded-full relative overflow-visible"
        style={{ background: "#222" }}
      >
        <div
          className="h-full rounded-full relative"
          style={{
            width: `${width}%`,
            background: "#fff",
            transition: "width 1000ms ease-out",
          }}
        >
          {width > 0 && (
            <div
              className="absolute top-1/2 w-3 h-3 rounded-full"
              style={{
                right: "-6px",
                transform: "translateY(-50%)",
                background: "#FF2D78",
                boxShadow: "0 0 8px #FF2D78",
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}

const Skills = () => {
  const [techRef, techInView] = useInView<HTMLDivElement>();
  const [softRef, softInView] = useInView<HTMLDivElement>();
  const [eduRef, eduInView] = useInView<HTMLDivElement>();

  return (
    <section id="skills" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Skills &amp; <span className="gradient-text">Education</span>
          </h2>
          <div
            className="w-12 h-1 rounded-full mx-auto"
            style={{ background: "#FF2D78" }}
          />
        </div>

        {/* Two cards side by side */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Technical Skills */}
          <div
            ref={techRef}
            className={`rounded-xl p-6 section-fade-up ${techInView ? "in-view" : ""}`}
            style={{ background: "#111", border: "1px solid #222" }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Technical Skills</h3>
            {skillBars.map((skill, i) => (
              <SkillBar
                key={skill.name}
                name={skill.name}
                percent={skill.percent}
                delay={i * 120}
                trigger={techInView}
              />
            ))}
          </div>

          {/* Soft Skills */}
          <div
            ref={softRef}
            className={`rounded-xl p-6 section-fade-up ${softInView ? "in-view" : ""}`}
            style={{
              background: "#111",
              border: "1px solid #222",
              transitionDelay: "0.15s",
            }}
          >
            <h3 className="text-xl font-bold text-white mb-6">Soft Skills</h3>
            <div className="flex flex-wrap gap-3 mb-8">
              {softSkills.map((skill) => (
                <span
                  key={skill}
                  className="text-white rounded-full text-sm font-medium"
                  style={{ background: "#FF2D78", padding: "8px 18px" }}
                >
                  {skill}
                </span>
              ))}
            </div>

            <div>
              <p
                className="text-xs font-semibold mb-3"
                style={{
                  color: "#A0A0A0",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                }}
              >
                Also proficient in
              </p>
              <div className="flex flex-wrap gap-2">
                {additionalTech.map((t) => (
                  <span
                    key={t}
                    className="text-xs rounded-full"
                    style={{
                      border: "1px solid #333",
                      color: "#A0A0A0",
                      padding: "4px 12px",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Education card */}
        <div
          ref={eduRef}
          className={`rounded-xl p-8 section-fade-up ${eduInView ? "in-view" : ""}`}
          style={{
            background: "#111",
            border: "1px solid #222",
            transitionDelay: "0.1s",
          }}
        >
          <div className="grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-2">
              <p
                className="text-xs font-semibold mb-3"
                style={{
                  color: "#FF2D78",
                  letterSpacing: "2px",
                  textTransform: "uppercase",
                }}
              >
                Education
              </p>
              <h3 className="text-xl font-bold text-white mb-1">
                Bachelor of Engineering — Computer Engineering
              </h3>
              <p className="text-sm mb-5" style={{ color: "#A0A0A0" }}>
                Sinhgad College of Engineering, Pune — SPPU | 2019 – 2023
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs rounded-full"
                    style={{
                      border: "1px solid #333",
                      color: "#A0A0A0",
                      padding: "4px 12px",
                    }}
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex md:justify-end">
              <div
                className="rounded-xl p-6 text-center"
                style={{ background: "#0a0a0a", border: "1px solid #222" }}
              >
                <div className="text-4xl font-bold text-white mb-1">7.67</div>
                <div className="text-sm" style={{ color: "#A0A0A0" }}>
                  CGPA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
