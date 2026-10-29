export interface Project {
  title: string;
  subtitle: string;
  year: string;
  company?: string;
  bullets: string[];
  technologies: string[];
  /** Hosted demo or live site */
  liveUrl?: string;
  /** Source repository */
  repoUrl?: string;
  /** Official product page, used for client work with no public repo */
  productUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Project Vigil",
    subtitle: "DC/DR Configuration Drift Monitoring Platform, Case Study",
    year: "2026",
    company: "Litmus IT Services Pvt Ltd",
    bullets: [
      "Built full-stack features for Project Vigil, a drift monitoring platform (React 19, Node.js, Express 5, MySQL, Prometheus).",
      "Built the Admin Console and Management Dashboard with role-based access control across a six-role permission system.",
      "Implemented TOTP-based two-factor authentication (RFC 6238) for secure login.",
    ],
    technologies: ["React 19", "Node.js", "Express 5", "MySQL", "Prometheus"],
    productUrl: "https://www.litmusit.com/litmus-vigil/",
  },
  {
    title: "Buyosphere",
    subtitle: "E-Commerce Web Application",
    year: "2024",
    bullets: [
      "Built a MERN e-commerce platform with Firebase Authentication (Google sign-in), a cart and Stripe checkout with webhooks.",
      "Built the Express API with Zod input validation, Helmet, rate limiting and role-based access to the admin panel.",
      "Built a responsive React storefront with Redux Toolkit, search filters, wishlist, reviews and order tracking.",
    ],
    technologies: [
      "TypeScript",
      "MongoDB",
      "Express.js",
      "React.js",
      "Node.js",
      "Redux Toolkit",
      "Firebase",
      "Stripe",
      "Zod",
    ],
    repoUrl: "https://github.com/asmitamahadik/buyosphere",
  },
  {
    title: "Plethora",
    subtitle: "Training & Placement Management System",
    year: "2023",
    bullets: [
      "Designed role-based access control for students, faculty and recruiters using Spring Security and JWT authentication.",
      "Automated placement drive workflows from registration to shortlisting, replacing manual coordination.",
      "Built a responsive React dashboard with Ant Design to track placement metrics and drive status.",
    ],
    technologies: ["React.js", "Ant Design", "Java", "Spring Boot", "MySQL", "Spring Security", "JWT"],
    repoUrl: "https://github.com/asmitamahadik/plethora-tpo",
  },
  {
    title: "Cafe Noir",
    subtitle: "Interactive Restaurant Menu & Ordering Experience",
    year: "2025",
    bullets: [
      "Built an interactive restaurant menu and ordering app with time-aware theming that switches between morning, afternoon and evening palettes.",
      "Implemented a multi-section menu with item modals, a slide-out cart with live totals and a full checkout flow.",
      "Added scroll-triggered animations with Framer Motion and a Chef's Note sidebar.",
    ],
    technologies: ["Vite", "React", "TypeScript", "shadcn-ui", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://cafe-noir-delta.vercel.app",
    repoUrl: "https://github.com/asmitamahadik/cafe-noir",
  },
  {
    title: "Sorting Visualiser",
    subtitle: "Algorithm Visualization Tool",
    year: "2024",
    bullets: [
      "Built an interactive visualizer for classic sorting algorithms running in real time.",
      "Animated Bubble Sort, Selection Sort, Insertion Sort and Merge Sort step-by-step on randomized data sets.",
      "Added controls for playback speed and array size.",
    ],
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    liveUrl: "https://asmitamahadik.github.io/sorting-visualiser/",
  },
];
