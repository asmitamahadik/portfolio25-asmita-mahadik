import { useInView } from "@/hooks/use-in-view";

const stats = [
  { value: "1+",   label: "Years Experience" },
  { value: "3",    label: "Projects Delivered" },
  { value: "7.67", label: "CGPA" },
  { value: "B.E.", label: "Computer Engineering" },
];

const About = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            About Me<span style={{ color: "#FF2D78" }}>.</span>
          </h2>
          <p className="text-muted-foreground">Get to know me better</p>
        </div>

        {/* Two-column */}
        <div
          ref={ref}
          className={`grid md:grid-cols-2 gap-12 items-start section-fade-up ${inView ? "in-view" : ""}`}
        >
          {/* Left — photo */}
          <div className="w-full overflow-hidden rounded-2xl">
            <img
              src="/photo.jpeg"
              alt="Asmita Mahadik"
              className="w-full object-cover"
              style={{
                maxHeight: "420px",
                objectPosition: "center 18%",
              }}
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).style.display = "none";
              }}
            />
          </div>

          {/* Right — bio + stats */}
          <div>
            <p className="text-base leading-relaxed text-muted-foreground mb-8">
              Front-end and full-stack developer with experience building scalable
              web applications in agile environments, integrating APIs, and
              automating workflows. Passionate about applying skills in generative
              AI and automation to build innovative, impactful products. With a
              strong foundation in modern web technologies, I thrive on turning
              complex problems into elegant, performant solutions.
            </p>

            <div className="grid grid-cols-2 gap-3">
              {stats.map(({ value, label }) => (
                <div
                  key={label}
                  className="rounded-xl p-5"
                  style={{
                    background: "var(--color-stat-card)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <div
                    className="text-2xl font-bold text-foreground mb-1"
                  >
                    {value}
                  </div>
                  <div
                    className="text-xs text-muted-foreground"
                  >
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
