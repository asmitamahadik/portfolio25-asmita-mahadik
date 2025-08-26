import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code, Database, Globe, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Expertise in modern web technologies and frameworks"
    },
    {
      icon: Database,
      title: "API Integration",
      description: "Streamlining workflows with intelligent automation"
    },
    {
      icon: Globe,
      title: "Digital Transformation",
      description: "Driving innovation in financial and enterprise products"
    },
    {
      icon: Zap,
      title: "Process Automation",
      description: "Optimizing performance through automation solutions"
    }
  ];

  return (
    <section id="about" className="py-20 bg-background relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              As a passionate Front-end and Full-stack Developer, I thrive in agile environments 
              where digital transformation meets innovation. My expertise lies in creating scalable 
              web applications that not only deliver exceptional user experiences but also 
              streamline complex workflows through intelligent automation.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With a strong foundation in modern web technologies and a keen interest in 
              emerging fields like generative AI and RPA, I'm constantly pushing the boundaries 
              of what's possible in web development. My goal is to support innovative financial 
              products and end-to-end automation solutions that make a real impact.
            </p>
          </div>
          
          <div className="relative">
            <div className="bg-gradient-card p-8 rounded-2xl shadow-card">
              <h3 className="text-2xl font-bold mb-4 gradient-text">Professional Focus</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Scalable Web Applications
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  API Integration & Automation
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  Generative AI Solutions
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  Digital Transformation
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => (
            <Card key={index} className="card-hover bg-gradient-card border-accent/20">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="h-6 w-6 text-background" />
                </div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;