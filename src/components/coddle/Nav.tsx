import { scrollToTarget } from "@/lib/scroll";

const links = [
  { label: "Work", target: "#cd-work" },
  { label: "Career", target: "#cd-career" },
  { label: "Skills", target: "#cd-toolbox" },
];

const Nav = () => {
  const go = (e: React.MouseEvent, target: string) => {
    e.preventDefault();
    scrollToTarget(target, 0);
  };

  return (
    <nav className="cd-nav">
      <div className="cd-shell flex items-center justify-between" style={{ height: 76 }}>
        <a href="#cd-hero" className="cd-nav-wordmark" onClick={(e) => go(e, "#cd-hero")}>
          asmita.
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.target}
              className="cd-nav-link"
              onClick={(e) => go(e, link.target)}
            >
              {link.label}
            </a>
          ))}
        </div>

        <a href="#cd-contact" className="cd-btn-cta" onClick={(e) => go(e, "#cd-contact")}>
          Contact me <span>&rarr;</span>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
