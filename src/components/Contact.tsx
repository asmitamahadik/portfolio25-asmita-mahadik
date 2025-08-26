import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "asmitamahadik24@gmail.com",
      href: "mailto:asmitamahadik24@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 9307406877",
      href: "tel:+919307406877"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/asmitamahadik",
      href: "https://github.com/asmitamahadik"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/in/asmita-mahadik",
      href: "https://linkedin.com/in/asmita-mahadik-08abb6179"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-muted/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-blue-400 mx-auto rounded-full"></div>
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Ready to collaborate on your next project? Let's discuss how we can create something amazing together.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-muted-foreground leading-relaxed">
                I'm always excited to discuss new opportunities, innovative projects, and potential collaborations. 
                Whether you're looking for a developer to join your team or need help with a specific project, 
                I'd love to hear from you.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((item, index) => (
                <Card key={index} className="card-hover bg-gradient-card border-accent/20">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-background" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h4 className="font-semibold text-sm">{item.title}</h4>
                        <a 
                          href={item.href}
                          target={item.href.startsWith('http') ? '_blank' : undefined}
                          rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-muted-foreground text-sm hover:text-cyan-400 transition-colors duration-200 break-all"
                        >
                          {item.value}
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="bg-gradient-card p-6 rounded-2xl shadow-card">
              <h4 className="font-semibold mb-3 text-cyan-400">Currently Available For</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-sm">Full-time opportunities</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-sm">Freelance projects</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-sm">Technical consultations</span>
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-3"></div>
                  <span className="text-muted-foreground text-sm">Open source collaborations</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-gradient-card border-accent/20">
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Name</label>
                  <Input 
                    placeholder="Your name" 
                    className="bg-background/50 border-accent/50 focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Email</label>
                  <Input 
                    type="email" 
                    placeholder="your.email@example.com" 
                    className="bg-background/50 border-accent/50 focus:border-cyan-400"
                  />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input 
                  placeholder="What's this about?" 
                  className="bg-background/50 border-accent/50 focus:border-cyan-400"
                />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  rows={5}
                  className="bg-background/50 border-accent/50 focus:border-cyan-400 resize-none"
                />
              </div>
              
              <Button className="w-full glow-effect">
                <Send className="mr-2 h-4 w-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;