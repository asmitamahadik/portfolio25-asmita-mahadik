import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["Python", "Java", "JavaScript", "TypeScript", "C++", "SQL", "HTML", "CSS"],
      color: "from-cyan-400 to-cyan-600"
    },
    {
      title: "Frameworks",
      skills: ["ReactJS", "Redux", "NodeJS", "ExpressJS", "Spring Boot", "Django"],
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Automation & AI",
      skills: ["API Integration", "Generative AI (GPT)", "Automation Practices"],
      color: "from-purple-400 to-purple-600"
    },
    {
      title: "Cloud & Tools",
      skills: ["GCP", "Git", "Jira", "Postman", "WordPress", "CI/CD Principles"],
      color: "from-green-400 to-green-600"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks that power my development journey
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-accent/20">
              <CardHeader className="pb-4">
                <CardTitle className="text-xl flex items-center">
                  <div className={`w-4 h-4 bg-gradient-to-r ${category.color} rounded-full mr-3`}></div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge 
                      key={skillIndex} 
                      variant="secondary" 
                      className="bg-accent/40 hover:bg-accent/60 transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="bg-gradient-card p-8 rounded-2xl shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6 gradient-text">Core Competencies</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold mb-3 text-cyan-400">Frontend Excellence</h4>
                <p className="text-muted-foreground text-sm">
                  Creating responsive, interactive user interfaces with modern frameworks and best practices
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-blue-400">Backend Proficiency</h4>
                <p className="text-muted-foreground text-sm">
                  Building robust server-side applications with efficient database management and API design
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-purple-400">Automation & AI</h4>
                <p className="text-muted-foreground text-sm">
                  Implementing intelligent automation solutions and integrating AI capabilities for enhanced functionality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;