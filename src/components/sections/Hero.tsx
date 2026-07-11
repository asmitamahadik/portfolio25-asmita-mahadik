import { useState } from "react";
import { Copy, Check } from "lucide-react";

const EMAIL = "asmitamahadik24@gmail.com";

const Hero = () => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    await navigator.clipboard.writeText(EMAIL).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center text-center pt-24 pb-20 px-6"
    >
      <p
        className="text-sm mb-4 text-muted-foreground"
        style={{ letterSpacing: "0.05em" }}
      >
        Hey, I'm
      </p>

      <h1
        className="font-bold text-foreground leading-none mb-5"
        style={{
          fontSize: "clamp(3rem, 10vw, 6.5rem)",
          letterSpacing: "-0.02em",
          textTransform: "uppercase",
        }}
      >
        Asmita Mahadik
      </h1>

      {/* Role pill */}
      <span
        className="inline-block text-white text-sm font-semibold mb-8"
        style={{
          background: "#FF2D78",
          padding: "6px 20px",
          borderRadius: "30px",
        }}
      >
        Front-end &amp; Full-Stack Developer
      </span>

      <p
        className="text-lg md:text-xl text-muted-foreground max-w-xl mb-10 leading-relaxed"
      >
        I build scalable web applications that deliver{" "}
        <em
          style={{
            fontStyle: "italic",
            background: "linear-gradient(135deg, #FF2D78, #7C3AED)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          real impact
        </em>
        .
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-4">
        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2 text-white font-semibold transition-opacity hover:opacity-80"
          style={{
            background: "#FF2D78",
            padding: "12px 28px",
            borderRadius: "40px",
            fontSize: "0.95rem",
          }}
        >
          Let's Connect <span>→</span>
        </a>

        <button
          onClick={copy}
          className="flex items-center gap-2 text-sm transition-opacity hover:opacity-70"
          style={{ color: "hsl(var(--muted-foreground))" }}
        >
          {EMAIL}
          {copied ? (
            <Check className="h-4 w-4" style={{ color: "#22c55e" }} />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      </div>
    </section>
  );
};

export default Hero;
