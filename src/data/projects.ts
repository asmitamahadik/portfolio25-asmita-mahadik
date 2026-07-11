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
    moreInfoUrl: "https://mern-ecom-frontend-ruddy.vercel.app",
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
  },
];
