import { useInView } from "@/hooks/use-in-view";

const About = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <div
          ref={ref}
          className={`section-fade-up ${inView ? "in-view" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            About Me
          </h2>
          <div
            className="w-12 h-1 rounded-full mb-8"
            style={{ background: "#FF2D78" }}
          />
          <p
            className="text-lg leading-relaxed"
            style={{ color: "#A0A0A0" }}
          >
            Front-end and full-stack developer with experience building scalable
            web applications in agile environments, integrating APIs, and automating
            workflows. Passionate about applying skills in generative AI and
            automation to build innovative, impactful products. With a strong
            foundation in modern web technologies, I thrive on turning complex
            problems into elegant, performant solutions that create real-world impact.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
