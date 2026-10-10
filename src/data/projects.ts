export interface Project {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  technologies: string[];
  moreInfoUrl?: string;
  /** Repository link shown alongside a live demo, when both exist */
  repoUrl?: string;
  /** Case-study context for client/employer work that can't link to source or screenshots */
  company?: string;
  role?: string;
  teamSize?: number;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    title: "Project Vigil",
    subtitle: "DC/DR Configuration Drift Monitoring Platform — Case Study",
    year: "2026",
    company: "Litmus IT Services Pvt Ltd",
    role: "Software Developer - Full Stack",
    teamSize: 7,
    description:
      "A configuration drift monitoring platform for disaster-recovery environments, engineered within a cross-functional team of 7, with a six-role permission system and real-time alerting.",
    highlights: [
      "Built modular Admin Console and Management Dashboard modules with RBAC across a six-role permission system",
      "Implemented TOTP-based two-factor authentication (RFC 6238) and a JWT middleware chain with session revocation, CORS, and rate limiting",
      "Integrated Prometheus (PromQL) for real-time metrics aggregation and a Server-Sent Events (SSE) module for real-time alerts",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Prometheus", "TOTP/2FA", "RBAC"],
  },
  {
    title: "Buyosphere",
    subtitle: "E-Commerce Web Application",
    year: "2024",
    description:
      "Full-featured secure e-commerce platform with seamless authentication, real-time cart management, and integrated payment processing. API-driven architecture embracing digital transformation through intelligent process automation.",
    technologies: [
      "TypeScript",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "Firebase",
      "Stripe",
    ],
    moreInfoUrl: "https://github.com/asmitamahadik/buyosphere",
  },
  {
    title: "Plethora",
    subtitle: "Training & Placement Management System",
    year: "2023",
    description:
      "Centralized system automating student-company interactions with role-based access for students, faculty, and recruiters. Streamlined placement workflows reducing administrative overhead.",
    technologies: [
      "React.js",
      "Ant Design",
      "Java",
      "Spring Boot",
      "Spring Security",
      "MySQL",
      "JWT",
    ],
    moreInfoUrl: "https://github.com/asmitamahadik/plethora-tpo",
  },
  {
    title: "Sorting Visualiser",
    subtitle: "Algorithm Visualization Tool",
    year: "2024",
    description:
      "An interactive web application that visually demonstrates how classic sorting algorithms work in real time. Users can watch Bubble Sort, Selection Sort, Insertion Sort, and Merge Sort animate step-by-step on randomized data sets, with controls for speed and array size.",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    moreInfoUrl: "https://asmitamahadik.github.io/sorting-visualiser/",
  },
  {
    title: "Café Noir",
    subtitle: "Interactive Restaurant Menu & Ordering Experience",
    year: "2025",
    description:
      "A fully responsive digital menu app for a fictional café with a time-of-day adaptive theme that shifts the visual mood across breakfast, lunch, and dinner. Features a \"Surprise Me\" chef's special reveal, a tray/cart system for building orders, and a multi-step checkout flow with confetti celebration on completion.",
    technologies: ["React", "TypeScript", "Vite", "Tailwind CSS", "shadcn/ui", "Framer Motion"],
    moreInfoUrl: "https://cafe-noir-delta.vercel.app",
    repoUrl: "https://github.com/asmitamahadik/cafe-noir",
  },
];
