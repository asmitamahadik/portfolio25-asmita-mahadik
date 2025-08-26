import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover bg-gradient-card border-accent/20">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <Briefcase className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Software Development Engineer Intern</CardTitle>
                    <p className="text-lg font-semibold text-cyan-400">BITSMITH TECHNOLOGIES PVT LTD</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Oct 2023 - Sep 2024</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-400">Key Responsibilities</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">
                        Collaborated in agile teams to enhance ReactJS applications and drive digital transformation initiatives
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">
                        Organized tasks and automated workflows via API integrations, supporting continuous process improvements
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <span className="text-muted-foreground text-sm">
                        Maintained thorough documentation to ensure knowledge transfer and project continuity
                      </span>
                    </li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-purple-400">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {["ReactJS", "JavaScript", "API Integration", "Agile Methodology", "Documentation", "Process Automation"].map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="bg-accent/40 hover:bg-accent/60 transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-400">Impact & Achievements</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  During my internship, I successfully contributed to enhancing application performance through 
                  strategic API integrations and workflow automation. My focus on agile methodologies and 
                  continuous improvement helped streamline development processes, while comprehensive documentation 
                  ensured sustainable project growth and knowledge preservation for future development cycles.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;