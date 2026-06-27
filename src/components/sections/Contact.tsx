import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

// Sign up at https://formspree.io and replace YOUR_FORM_ID with your form ID
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(2, "Subject must be at least 2 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "asmitamahadik24@gmail.com",
    href: "mailto:asmitamahadik24@gmail.com",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/asmitamahadik",
    href: "https://github.com/asmitamahadik",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/asmita-mahadik-08abb6179",
    href: "https://linkedin.com/in/asmita-mahadik-08abb6179",
  },
];

const availability = [
  { color: "bg-green-400", label: "Full-time opportunities" },
  { color: "bg-blue-400", label: "Freelance projects" },
  { color: "bg-cyan-400", label: "Technical consultations" },
  { color: "bg-purple-400", label: "Open source collaborations" },
];

const Contact = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(formSchema) });

  const onSubmit = async (data: FormValues) => {
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        toast.success("Message sent! I'll get back to you soon.");
        reset();
      } else {
        toast.error("Something went wrong. Please try emailing me directly.");
      }
    } catch {
      toast.error("Network error. Please try emailing me directly.");
    }
  };

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
                          target={item.href.startsWith("http") ? "_blank" : undefined}
                          rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
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
                {availability.map((item) => (
                  <li key={item.label} className="flex items-center">
                    <div className={`w-2 h-2 ${item.color} rounded-full mr-3`}></div>
                    <span className="text-muted-foreground text-sm">{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <Card className="bg-gradient-card border-accent/20">
            <CardHeader>
              <CardTitle className="text-xl">Send a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="text-sm font-medium mb-2 block">Name</label>
                    <Input
                      id="name"
                      placeholder="Your name"
                      className="bg-background/50 border-accent/50 focus:border-cyan-400"
                      {...register("name")}
                    />
                    {errors.name && (
                      <p className="text-destructive text-xs mt-1">{errors.name.message}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-accent/50 focus:border-cyan-400"
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className="text-destructive text-xs mt-1">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="text-sm font-medium mb-2 block">Subject</label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="bg-background/50 border-accent/50 focus:border-cyan-400"
                    {...register("subject")}
                  />
                  {errors.subject && (
                    <p className="text-destructive text-xs mt-1">{errors.subject.message}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="text-sm font-medium mb-2 block">Message</label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={5}
                    className="bg-background/50 border-accent/50 focus:border-cyan-400 resize-none"
                    {...register("message")}
                  />
                  {errors.message && (
                    <p className="text-destructive text-xs mt-1">{errors.message.message}</p>
                  )}
                </div>

                <Button type="submit" className="w-full glow-effect" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    <Send className="mr-2 h-4 w-4" />
                  )}
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
