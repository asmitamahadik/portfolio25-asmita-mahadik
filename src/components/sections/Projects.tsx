import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { projects } from "@/data/projects";

const Projects = () => {
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
                      {project.liveUrl ? (
                        <Button size="sm" className="glow-effect" asChild>
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Live Demo
                          </a>
                        </Button>
                      ) : null}
                      {project.sourceUrl ? (
                        <Button variant="outline" size="sm" className="border-accent/50" asChild>
                          <a href={project.sourceUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="mr-2 h-4 w-4" />
                            Source Code
                          </a>
                        </Button>
                      ) : null}
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
