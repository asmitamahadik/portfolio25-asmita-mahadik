export interface SkillCategory {
  title: string;
  skills: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["JavaScript (ES6+)", "TypeScript", "Java", "Python", "SQL", "HTML", "CSS"],
  },
  {
    title: "Frontend",
    skills: ["React 19", "Redux Toolkit", "Zustand", "Context API", "Tailwind CSS", "Vite"],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express 5",
      "Spring Boot",
      "REST APIs",
      "JWT Authentication",
      "TOTP/2FA",
      "Server-Sent Events",
    ],
  },
  {
    title: "Databases",
    skills: ["MySQL", "MongoDB", "Firebase", "Prometheus/PromQL"],
  },
  {
    title: "Tools",
    skills: ["Git", "Jira", "Postman", "Jest", "Docker (basic)", "Claude Code"],
  },
];
