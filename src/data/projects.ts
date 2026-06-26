export interface Project {
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  gradient: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Buyosphere - E-Commerce Platform",
    description:
      "A robust, API-driven e-commerce platform that embraces digital transformation by automating secure user authentication and payment processing. Features intelligent process automation to enhance performance and deliver a seamless customer experience.",
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
    highlights: [
      "Secure authentication & payment processing",
      "Intelligent process automation",
      "Seamless customer experience",
      "Digital transformation integration",
    ],
    gradient: "from-cyan-400 to-blue-500",
  },
  {
    title: "Plethora - Training Management System",
    description:
      "A comprehensive system that streamlined training and placement processes by automating workflows and reducing manual intervention. Reflects commitment to agile development and digital transformation.",
    technologies: [
      "ReactJS",
      "Ant Design",
      "Java",
      "Spring Boot",
      "MySQL",
      "Spring Security",
      "JWT Authentication",
    ],
    highlights: [
      "Automated workflow management",
      "Reduced manual intervention",
      "Secure communication protocols",
      "Agile development approach",
    ],
    gradient: "from-purple-400 to-pink-500",
  },
  {
    title: "Portfolio Website",
    description:
      "A dynamic portfolio website that showcases technical skills while employing automated inquiry routing to improve user engagement. Highlights passion for continuous process improvement and customer-centric digital experiences.",
    technologies: ["HTML", "CSS", "ReactJS"],
    highlights: [
      "Automated inquiry routing",
      "Enhanced user engagement",
      "Continuous process improvement",
      "Customer-centric design",
    ],
    gradient: "from-green-400 to-teal-500",
  },
];
