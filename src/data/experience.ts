export interface ExperienceEntry {
  date: string;
  role: string;
  company: string;
  location: string;
  bullets: string[];
  technologies: string[];
}

export const experience: ExperienceEntry[] = [
  {
    date: "Mar 2026 to Sep 2026",
    role: "Software Developer - Full Stack",
    company: "Litmus IT Services Pvt Ltd",
    location: "Andheri East, Mumbai",
    bullets: [
      "Built full-stack features for Project Vigil, a drift monitoring platform (React 19, Node.js, Express 5, MySQL, Prometheus).",
      "Built the Admin Console and Management Dashboard with role-based access control across a six-role permission system.",
      "Built real-time dashboards using React Context API and memoization for optimized state management.",
      "Implemented dependency-injected controller factories for isolated backend unit testing.",
      "Designed the Express middleware chain: JWT authentication with session revocation, CORS, rate limiting and RBAC enforcement.",
      "Implemented TOTP-based two-factor authentication (RFC 6238) for secure login.",
      "Integrated Prometheus (PromQL) for real-time metrics and built a Server-Sent Events (SSE) module for real-time alerts.",
    ],
    technologies: ["React 19", "Node.js", "Express 5", "MySQL", "Prometheus", "JWT", "RBAC", "TOTP/2FA", "SSE"],
  },
  {
    date: "Jun 2025 to Nov 2025",
    role: "Web Developer and Tutor",
    company: "Freelance",
    location: "Remote",
    bullets: [
      "Built small e-commerce websites for clients using React, Node.js and MySQL, across 2 to 3 projects.",
      "Taught web development to learners.",
    ],
    technologies: ["React", "Node.js", "MySQL"],
  },
  {
    date: "Apr 2024 to Dec 2024",
    role: "Software Engineer",
    company: "Bitsmith Technologies Pvt Ltd",
    location: "Pune",
    bullets: [
      "Built and improved client-facing ReactJS modules, speeding up page loads with code splitting and lazy loading.",
      "Integrated third-party APIs for payments, notifications and analytics, and automated internal workflows.",
      "Managed sprint deliverables in Jira and wrote technical handoff documentation for new team members.",
    ],
    technologies: ["React.js", "JavaScript", "REST APIs", "Jira"],
  },
];
