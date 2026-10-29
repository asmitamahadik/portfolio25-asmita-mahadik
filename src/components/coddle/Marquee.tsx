import { skillCategories } from "@/data/skills";

const names = skillCategories.flatMap((c) => c.skills);

const Marquee = () => {
  const loop = [...names, ...names];

  return (
    <div className="cd-marquee">
      <div className="cd-marquee-track">
        {loop.map((name, i) => (
          <span key={`${name}-${i}`} className="cd-marquee-item">
            {name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
