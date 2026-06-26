export interface SkillCategory {
  title: string;
  skills: string[];
  color: string;
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL", "HTML", "CSS"],
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Frameworks",
    skills: ["ReactJS", "Redux", "NodeJS", "ExpressJS", "Spring Boot", "Django"],
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "Automation & AI",
    skills: ["API Integration", "Generative AI (GPT)", "Automation Practices"],
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Cloud & Tools",
    skills: ["GCP", "Git", "Jira", "Postman", "WordPress", "CI/CD Principles"],
    color: "from-green-400 to-green-600",
  },
];
