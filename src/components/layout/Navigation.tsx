import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";

const navItems = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Education" },
  { href: "#career", label: "Career" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

const Navigation = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isLight, setIsLight] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observers = navItems.map(({ href }) => {
      const id = href.slice(1);
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  const toggleTheme = () => {
    const next = !isLight;
    setIsLight(next);
    document.documentElement.classList.toggle("light", next);
  };

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        background: "rgba(0,0,0,0.9)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid #222",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div
            className="w-8 h-8 flex items-center justify-center font-bold text-sm text-white select-none"
            style={{ border: "1.5px solid #FF2D78", borderRadius: "6px" }}
          >
            ✓
          </div>

          {/* Center nav — desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map(({ href, label }) => {
              const id = href.slice(1);
              const isActive = activeSection === id;
              return (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="relative text-sm font-medium transition-colors duration-200 pb-1"
                  style={{ color: isActive ? "#fff" : "#A0A0A0" }}
                >
                  {label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ background: "#FF2D78" }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Right: theme toggle + mobile hamburger */}
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg transition-colors duration-200 hover:bg-white/10"
              style={{ color: "#A0A0A0" }}
              aria-label="Toggle theme"
            >
              {isLight ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
              style={{ color: "#A0A0A0" }}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div
            className="md:hidden py-4 space-y-1 border-t"
            style={{ borderColor: "#222" }}
          >
            {navItems.map(({ href, label }) => {
              const id = href.slice(1);
              return (
                <button
                  key={href}
                  onClick={() => scrollToSection(href)}
                  className="block w-full text-left px-2 py-2.5 text-sm font-medium rounded-lg transition-colors"
                  style={{
                    color: activeSection === id ? "#FF2D78" : "#A0A0A0",
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
