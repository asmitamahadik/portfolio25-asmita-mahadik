import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Calendar, Award } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Card className="card-hover bg-gradient-card border-accent/20">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
                    <GraduationCap className="h-6 w-6 text-background" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">Bachelor of Engineering - Computer Engineering</CardTitle>
                    <p className="text-lg font-semibold text-cyan-400">Sinhgad College of Engineering, Pune</p>
                    <p className="text-sm text-muted-foreground">Affiliated to SPPU (Savitribai Phule Pune University)</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">2019 - 2023</span>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-400 flex items-center">
                    <Award className="h-4 w-4 mr-2" />
                    Academic Performance
                  </h4>
                  <div className="bg-background/50 p-4 rounded-lg">
                    <div className="text-center">
                      <div className="text-3xl font-bold gradient-text">7.67</div>
                      <div className="text-sm text-muted-foreground">CGPA</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-3 text-purple-400">Core Subjects</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="text-muted-foreground text-sm">Data Structures & Algorithms</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-muted-foreground text-sm">Software Engineering</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="text-muted-foreground text-sm">Database Management Systems</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3"></div>
                      <span className="text-muted-foreground text-sm">Web Technologies</span>
                    </li>
                    <li className="flex items-center">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-3"></div>
                      <span className="text-muted-foreground text-sm">Object-Oriented Programming</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-background/50 p-6 rounded-lg">
                <h4 className="font-semibold mb-3 text-green-400">Academic Highlights</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Completed a comprehensive Computer Engineering program with a strong focus on software development, 
                  data structures, and modern web technologies. The curriculum provided a solid foundation in both 
                  theoretical concepts and practical applications, preparing me for the evolving landscape of 
                  technology and software engineering. Developed strong analytical and problem-solving skills 
                  through various projects and assignments.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;