export interface Project {
  title: string;
  subtitle: string;
  year: string;
  description: string;
  technologies: string[];
  moreInfoUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Buyosphere",
    subtitle: "E-Commerce Web Application",
    year: "2024",
    description:
      "Full-featured secure e-commerce platform with seamless authentication, real-time cart management, and integrated payment processing. API-driven architecture embracing digital transformation through intelligent process automation.",
    technologies: [
      "TypeScript",
      "MongoDB",
      "ExpressJS",
      "ReactJS",
      "NodeJS",
      "Redux Toolkit",
      "Firebase",
      "Stripe",
    ],
  },
  {
    title: "Plethora",
    subtitle: "Training & Placement Management System",
    year: "2023",
    description:
      "Centralized system automating student-company interactions with role-based access for students, faculty, and recruiters. Streamlined placement workflows reducing administrative overhead.",
    technologies: [
      "ReactJS",
      "Ant Design",
      "Java",
      "Spring Boot",
      "MySQL",
      "Spring Security",
      "JWT Authentication",
    ],
  },
  {
    title: "Sorting Visualiser",
    subtitle: "Algorithm Visualization Tool",
    year: "2024",
    description:
      "An interactive web application that visually demonstrates how classic sorting algorithms work in real time. Users can watch Bubble Sort, Selection Sort, Insertion Sort, and Merge Sort animate step-by-step on randomized data sets, with controls for speed and array size.",
    technologies: ["JavaScript", "React", "HTML", "CSS"],
    moreInfoUrl: "https://github.com/asmitamahadik/sorting-visualiser",
  },
];
