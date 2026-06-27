const pills = [
  "React.js",
  "Node.js",
  "TypeScript",
  "Python",
  "Gen AI",
  "Spring Boot",
];

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-20 px-6"
    >
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Left 60% */}
          <div className="lg:col-span-3 space-y-6">
            <h1
              className="font-bold text-white leading-[1.05]"
              style={{ fontSize: "clamp(3.5rem, 8vw, 5.5rem)" }}
            >
              Asmita
              <br />
              Mahadik
            </h1>
            <p
              className="text-xl md:text-2xl font-medium"
              style={{ color: "#A0A0A0" }}
            >
              Front-end &amp; Full-Stack Developer
            </p>
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "#A0A0A0" }}
            >
              Front-end and full-stack developer with experience building scalable
              web applications in agile environments, integrating APIs, and
              automating workflows. Passionate about applying skills in generative
              AI and automation to build innovative, impactful products.
            </p>
            <div className="flex flex-wrap gap-2 pt-2">
              {pills.map((tag) => (
                <span
                  key={tag}
                  className="text-white rounded-full text-sm font-medium"
                  style={{ background: "#FF2D78", padding: "6px 16px" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Right 40% */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div
              className="rounded-full flex items-center justify-center select-none"
              style={{
                width: "clamp(200px, 28vw, 320px)",
                height: "clamp(200px, 28vw, 320px)",
                background: "#111",
                boxShadow:
                  "0 0 60px rgba(255,45,120,0.2), 0 0 120px rgba(255,45,120,0.06)",
              }}
            >
              <span
                className="font-bold text-white"
                style={{ fontSize: "clamp(2.5rem, 6vw, 4rem)" }}
              >
                AM
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
