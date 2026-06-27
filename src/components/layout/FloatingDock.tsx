import { useState, useEffect } from "react";
import { Home, User, GraduationCap, Briefcase, LayoutGrid, Phone } from "lucide-react";

const dockItems = [
  { id: "home", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "skills", icon: GraduationCap, label: "Education" },
  { id: "career", icon: Briefcase, label: "Career" },
  { id: "projects", icon: LayoutGrid, label: "Projects" },
  { id: "contact", icon: Phone, label: "Contact" },
];

const FloatingDock = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observers = dockItems.map(({ id }) => {
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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-1 px-5 py-3"
      style={{
        background: "rgba(15,15,15,0.92)",
        border: "1px solid #333",
        borderRadius: "40px",
        backdropFilter: "blur(12px)",
      }}
    >
      {dockItems.map(({ id, icon: Icon, label }) => {
        const isActive = activeSection === id;
        return (
          <button
            key={id}
            onClick={() => scrollTo(id)}
            title={label}
            className="relative flex flex-col items-center p-2.5 rounded-xl transition-all duration-200"
            style={{
              opacity: isActive ? 1 : 0.5,
              transform: isActive ? "scale(1.1)" : "scale(1)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "1")}
            onMouseLeave={(e) =>
              (e.currentTarget.style.opacity = isActive ? "1" : "0.5")
            }
          >
            <Icon
              style={{
                width: 20,
                height: 20,
                color: isActive ? "#FF2D78" : "#fff",
              }}
            />
            {isActive && (
              <span
                className="absolute -bottom-0.5 w-1 h-1 rounded-full"
                style={{ background: "#FF2D78" }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default FloatingDock;
