import { Mail, MapPin } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const socials = [
  { label: "GitHub",   href: "https://github.com/asmitamahadik" },
  { label: "LinkedIn", href: "https://linkedin.com/in/asmita-mahadik-08abb6179" },
];

const Contact = () => {
  const [ref, inView] = useInView<HTMLDivElement>();

  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="container mx-auto max-w-2xl text-center">
        {/* Heading */}
        <div
          ref={ref}
          className={`section-fade-up ${inView ? "in-view" : ""}`}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">
            Get in Touch<span style={{ color: "#FF2D78" }}>.</span>
          </h2>
          <p className="text-muted-foreground mb-10">
            Have a project in mind or just want to say hello?
          </p>

          {/* Contact info */}
          <div className="flex flex-col items-center gap-3 mb-8">
            <a
              href="mailto:asmitamahadik24@gmail.com"
              className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70 text-muted-foreground"
            >
              <Mail className="h-4 w-4" />
              asmitamahadik24@gmail.com
            </a>
            <span className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4" />
              Bangalore, India
            </span>
          </div>

          {/* Social pills */}
          <div className="flex justify-center gap-3 mb-10">
            {socials.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium transition-colors hover:border-foreground/40"
                style={{
                  background: "var(--color-surface)",
                  border: "1px solid var(--color-border)",
                  borderRadius: "30px",
                  padding: "8px 20px",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                {label}
              </a>
            ))}
          </div>

          {/* CTA button */}
          <a
            href="mailto:asmitamahadik24@gmail.com"
            className="inline-flex items-center gap-2 text-white font-semibold transition-opacity hover:opacity-80"
            style={{
              background: "#FF2D78",
              padding: "14px 36px",
              borderRadius: "40px",
              fontSize: "0.95rem",
            }}
          >
            <Mail className="h-4 w-4" />
            Send me an email
          </a>
        </div>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-muted-foreground mt-20">
        © 2026 Asmita Mahadik. All rights reserved.
      </p>
    </section>
  );
};

export default Contact;
