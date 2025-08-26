import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Buyosphere - E-Commerce Platform",
      description: "A robust, API-driven e-commerce platform that embraces digital transformation by automating secure user authentication and payment processing. Features intelligent process automation to enhance performance and deliver a seamless customer experience.",
      technologies: ["TypeScript", "MongoDB", "ExpressJS", "ReactJS", "NodeJS", "Redux Toolkit", "Firebase", "Stripe"],
      highlights: [
        "Secure authentication & payment processing",
        "Intelligent process automation",
        "Seamless customer experience",
        "Digital transformation integration"
      ],
      gradient: "from-cyan-400 to-blue-500"
    },
    {
      title: "Plethora - Training Management System",
      description: "A comprehensive system that streamlined training and placement processes by automating workflows and reducing manual intervention. Reflects commitment to agile development and digital transformation.",
      technologies: ["ReactJS", "Ant Design", "Java", "Spring Boot", "MySQL", "Spring Security", "JWT Authentication"],
      highlights: [
        "Automated workflow management",
        "Reduced manual intervention",
        "Secure communication protocols",
        "Agile development approach"
      ],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Portfolio Website",
      description: "A dynamic portfolio website that showcases technical skills while employing automated inquiry routing to improve user engagement. Highlights passion for continuous process improvement and customer-centric digital experiences.",
      technologies: ["HTML", "CSS", "ReactJS"],
      highlights: [
        "Automated inquiry routing",
        "Enhanced user engagement",
        "Continuous process improvement",
        "Customer-centric design"
      ],
      gradient: "from-green-400 to-teal-500"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that demonstrate my expertise in full-stack development and automation
          </p>
        </div>
        
        <div className="grid lg:grid-cols-1 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-accent/20 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                <CardHeader className="p-8">
                  <div className={`w-full h-2 bg-gradient-to-r ${project.gradient} rounded-full mb-6`}></div>
                  <CardTitle className="text-2xl mb-4">{project.title}</CardTitle>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2 text-cyan-400">Key Highlights</h4>
                      <ul className="space-y-2">
                        {project.highlights.map((highlight, idx) => (
                          <li key={idx} className="flex items-center text-sm text-muted-foreground">
                            <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mr-3"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3 pt-4">
                      <Button size="sm" className="glow-effect">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </Button>
                      <Button variant="outline" size="sm" className="border-accent/50">
                        <Github className="mr-2 h-4 w-4" />
                        Source Code
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="p-8 bg-accent/10">
                  <h4 className="font-semibold mb-4 text-blue-400">Technology Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge 
                        key={techIndex} 
                        variant="secondary"
                        className="bg-accent/40 hover:bg-accent/60 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="mt-8 p-4 bg-background/50 rounded-lg">
                    <h5 className="font-medium mb-2 text-sm">Project Impact</h5>
                    <p className="text-xs text-muted-foreground">
                      This project demonstrates my ability to create scalable solutions that integrate 
                      modern technologies with business automation needs, resulting in enhanced user 
                      experiences and operational efficiency.
                    </p>
                  </div>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;