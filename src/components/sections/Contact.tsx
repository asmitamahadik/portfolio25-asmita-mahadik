import { useState } from "react";
import { Mail, Linkedin, Github, Copy, Check } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";

const contactItems = [
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "asmitamahadik24@gmail.com",
    href: "mailto:asmitamahadik24@gmail.com",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/asmita-mahadik-08abb6179",
    href: "https://linkedin.com/in/asmita-mahadik-08abb6179",
  },
  {
    id: "github",
    icon: Github,
    label: "GitHub",
    value: "github.com/asmitamahadik",
    href: "https://github.com/asmitamahadik",
  },
];

const Contact = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [ref, inView] = useInView<HTMLDivElement>();

  const handleCopy = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(id);
      setTimeout(() => setCopied(null), 2000);
    } catch {
      // clipboard not available
    }
  };

  return (
    <section id="contact" className="py-24 px-6 pb-32">
      <div className="container mx-auto max-w-5xl">
        <div
          ref={ref}
          className={`rounded-3xl p-10 md:p-14 section-fade-up ${inView ? "in-view" : ""}`}
          style={{ border: "1px solid #333" }}
        >
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
            {/* Left */}
            <div>
              <p className="text-sm mb-6" style={{ color: "#A0A0A0" }}>
                <span style={{ color: "#22c55e" }}>●</span>{" "}
                Accepting new opportunities
              </p>
              <div
                className="font-bold leading-tight mb-6"
                style={{ fontSize: "clamp(2.2rem, 5vw, 3.25rem)" }}
              >
                <span className="block text-white">Let's start</span>
                <span className="block" style={{ color: "#FF2D78" }}>
                  something
                </span>
                <span className="block" style={{ color: "#7C3AED" }}>
                  new.
                </span>
              </div>
              <p className="text-sm leading-relaxed" style={{ color: "#A0A0A0" }}>
                Have an opportunity or project in mind? I'd love to connect and
                build something great together.
              </p>
            </div>

            {/* Right */}
            <div>
              <p
                className="text-xs font-semibold mb-5 tracking-widest"
                style={{ color: "#A0A0A0" }}
              >
                CONTACT DETAILS
              </p>
              <div className="space-y-3">
                {contactItems.map(({ id, icon: Icon, label, value, href }) => (
                  <div
                    key={id}
                    className="flex items-center gap-4 rounded-xl p-4"
                    style={{ border: "1px solid #222" }}
                  >
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: "#1a1a1a" }}
                    >
                      <Icon className="h-5 w-5" style={{ color: "#FF2D78" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-xs mb-0.5"
                        style={{ color: "#A0A0A0" }}
                      >
                        {label}
                      </p>
                      <a
                        href={href}
                        target={href.startsWith("http") ? "_blank" : undefined}
                        rel={
                          href.startsWith("http")
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-white hover:opacity-70 transition-opacity truncate block"
                      >
                        {value}
                      </a>
                    </div>
                    <button
                      onClick={() => handleCopy(value, id)}
                      className="p-1.5 rounded-lg hover:bg-white/10 transition-colors flex-shrink-0"
                      title="Copy to clipboard"
                      aria-label={`Copy ${label}`}
                    >
                      {copied === id ? (
                        <Check className="h-4 w-4" style={{ color: "#22c55e" }} />
                      ) : (
                        <Copy className="h-4 w-4" style={{ color: "#A0A0A0" }} />
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <p
          className="text-center text-sm mt-10"
          style={{ color: "#A0A0A0" }}
        >
          Based in Banglore • Available for Remote Opportunities
        </p>
      </div>
    </section>
  );
};

export default Contact;
