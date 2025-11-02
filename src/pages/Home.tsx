import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground">
              Hi, I'm <span className="text-primary">Your Name</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-muted-foreground">
              Game Developer & Technical Artist
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Specializing in Unity programming, technical art, and cross-team coordination. 
              I bring ideas to life through code and creative problem-solving.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg">
                <Link to="/projects">View Projects</Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/contact">Get in Touch</Link>
              </Button>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://yourusername.itch.io" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <ExternalLink size={24} />
              </a>
              <a href="mailto:your.email@example.com" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center shadow-xl">
              <div className="w-60 h-60 md:w-72 md:h-72 rounded-full bg-muted flex items-center justify-center text-muted-foreground">
                <span className="text-6xl">👤</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">
            About Me
          </h2>
          <Card className="max-w-4xl mx-auto p-8 shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              [Your bio goes here - talk about your background, passion for game development, 
              and what drives you in your work. Mention your experience with Unity, technical art, 
              and how you collaborate with teams.]
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              [Add more details about your approach to game development, notable achievements, 
              or what makes your work unique. This is where you can showcase your personality 
              and professional philosophy.]
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
