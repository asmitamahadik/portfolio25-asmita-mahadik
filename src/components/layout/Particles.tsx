// Static dot positions — deterministic so React never re-calculates
const DOTS = [
  { left: "4%",  top: "8%"  },
  { left: "18%", top: "22%" },
  { left: "7%",  top: "48%" },
  { left: "24%", top: "65%" },
  { left: "11%", top: "83%" },
  { left: "38%", top: "5%"  },
  { left: "52%", top: "18%" },
  { left: "43%", top: "55%" },
  { left: "61%", top: "72%" },
  { left: "73%", top: "10%" },
  { left: "78%", top: "38%" },
  { left: "85%", top: "25%" },
  { left: "91%", top: "52%" },
  { left: "94%", top: "75%" },
  { left: "33%", top: "88%" },
  { left: "67%", top: "91%" },
  { left: "56%", top: "42%" },
  { left: "82%", top: "66%" },
  { left: "29%", top: "33%" },
  { left: "48%", top: "78%" },
];

const Particles = () => (
  <div
    aria-hidden
    className="fixed inset-0 pointer-events-none"
    style={{ zIndex: 0 }}
  >
    {DOTS.map((d, i) => (
      <div
        key={i}
        className="absolute rounded-full"
        style={{
          left: d.left,
          top: d.top,
          width: "3px",
          height: "3px",
          background: "var(--color-particle)",
        }}
      />
    ))}

    {/* Pink glow orb — fixed on the right, always visible */}
    <div
      className="absolute"
      style={{
        right: "-60px",
        top: "28%",
        width: "520px",
        height: "520px",
        borderRadius: "50%",
        background:
          "radial-gradient(circle, var(--color-glow) 0%, transparent 70%)",
      }}
    />
  </div>
);

export default Particles;
