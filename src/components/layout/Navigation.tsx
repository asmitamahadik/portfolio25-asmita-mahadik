import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { href: "#home",     label: "Home"     },
  { href: "#about",    label: "About"    },
  { href: "#projects", label: "Projects" },
  { href: "#skills",   label: "Skills"   },
  { href: "#career",   label: "Career"   },
  { href: "#contact",  label: "Contact"  },
];

const Navigation = () => {
  // Start with all sections as "not visible" except home (set by default)
  const [visible, setVisible] = useState<Set<string>>(() => new Set(["home"]));
  const [isLight, setIsLight] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Derive active section: the FIRST (highest on page) section that is currently visible.
  // This ensures "home" wins over "about" on initial load even if both are intersecting.
  const activeSection =
    navItems.find(({ href }) => visible.has(href.slice(1)))?.href.slice(1) ?? "home";

  // Restore saved theme on mount
  useEffect(() => {
    const saved = localStorage.getItem("theme");
    const osLight = window.matchMedia("(prefers-color-scheme: light)").matches;
    if (saved === "light" || (!saved && osLight)) {
      setIsLight(true);
      document.documentElement.classList.add("light");
    }
  }, []);

  // Scrollspy — tracks which sections are currently visible, picks the highest
  useEffect(() => {
    const observers = navItems.map(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          setVisible((prev) => {
            const next = new Set(prev);
            entry.isIntersecting ? next.add(id) : next.delete(id);
            return next;
          });
        },
        { threshold: 0.15 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    setIsLight(next);
    root.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
    setTimeout(() => root.classList.remove("theme-transitioning"), 400);
  };

  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      {/* ── Pill nav ─────────────────────────────────────────── */}
      <nav
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
        style={{ width: "max-content", maxWidth: "calc(100vw - 32px)" }}
      >
        <div
          className="flex items-center gap-1 px-3 py-2"
          style={{
            background: "var(--color-nav-bg)",
            border: "1px solid var(--color-nav-border)",
            borderRadius: "50px",
            backdropFilter: "blur(14px)",
          }}
        >
          {/* Logo */}
          <button
            onClick={() => scrollTo("#home")}
            className="font-bold text-sm mr-2 flex-shrink-0 text-foreground px-2"
          >
            Asmita<span style={{ color: "#FF2D78" }}>.</span>
          </button>

          {/* Desktop nav links */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-sm font-medium transition-all duration-200"
                  style={{
                    padding: "6px 14px",
                    borderRadius: "30px",
                    background: isActive ? "#FF2D78" : "transparent",
                    color: isActive ? "#fff" : "hsl(var(--muted-foreground))",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>

          {/* Right controls */}
          <div className="flex items-center gap-1 ml-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-colors hover:bg-foreground/10"
              style={{ color: "hsl(var(--muted-foreground))" }}
              aria-label="Toggle theme"
            >
              {isLight ? (
                <Sun key="sun" className="h-4 w-4" style={{ animation: "iconAppear 0.25s ease-out" }} />
              ) : (
                <Moon key="moon" className="h-4 w-4" style={{ animation: "iconAppear 0.25s ease-out" }} />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-full hover:bg-foreground/10 transition-colors"
              style={{ color: "hsl(var(--muted-foreground))" }}
              aria-label="Menu"
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>

        {/* Mobile dropdown */}
        {isOpen && (
          <div
            className="md:hidden mt-2 py-2 px-3 flex flex-col gap-1"
            style={{
              background: "var(--color-nav-bg)",
              border: "1px solid var(--color-nav-border)",
              borderRadius: "20px",
              backdropFilter: "blur(14px)",
            }}
          >
            {navItems.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => scrollTo(href)}
                  className="text-sm font-medium text-left transition-all"
                  style={{
                    padding: "8px 14px",
                    borderRadius: "12px",
                    background: isActive ? "#FF2D78" : "transparent",
                    color: isActive ? "#fff" : "hsl(var(--muted-foreground))",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </nav>
    </>
  );
};

export default Navigation;
