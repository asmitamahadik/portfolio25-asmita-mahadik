import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="floating">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Asmita</span>
            <br />
            <span className="text-primary">Mahadik</span>
          </h1>
        </div>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          Front-end & Full-stack Developer
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Experienced in agile environments, digital transformation, and process automation. 
          Passionate about creating scalable web applications and intelligent automation solutions.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <Button variant="default" size="lg" className="glow-effect">
            <Mail className="mr-2 h-5 w-5" />
            Contact Me
          </Button>
          <Button variant="outline" size="lg" className="border-primary/50 hover:border-primary">
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center space-x-6">
          <a 
            href="https://github.com/asmitamahadik" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent/20 hover:bg-accent/40 transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Github className="h-6 w-6" />
          </a>
          <a 
            href="https://linkedin.com/in/asmita-mahadik-08abb6179" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-3 rounded-full bg-accent/20 hover:bg-accent/40 transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a 
            href="tel:+919307406877"
            className="p-3 rounded-full bg-accent/20 hover:bg-accent/40 transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Phone className="h-6 w-6" />
          </a>
          <a 
            href="mailto:asmitamahadik24@gmail.com"
            className="p-3 rounded-full bg-accent/20 hover:bg-accent/40 transition-all duration-300 hover:scale-110 glow-effect"
          >
            <Mail className="h-6 w-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;