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
              Hi, I'm <span className="text-primary">Jon Rachko</span>
            </h1>
            <h2 className="text-2xl md:text-3xl font-heading text-muted-foreground">
              Game Developer & Technical Artist
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl">
              Specializing in Unity programming, technical art, and cross-team coordination. I turn visions into
              experiences.
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
              <a
                href="https://github.com/JonRachko"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/jonathan-ratzkovsky-1502771aa/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://jonshmon.itch.io/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <ExternalLink size={24} />
              </a>
              <a
                href="mailto:jonrachko@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
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
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12">About Me</h2>
          <Card className="max-w-4xl mx-auto p-8 shadow-lg">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              I've loved games of all kinds my entire life, and the moment I learned to program I knew that’s where I'm
              headed. My very first project was a text-based RPG — simple, messy, and absolutely magical. Since then,
              I’ve been chasing that same spark: creating fun.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I see programming as a puzzle and an art form. Finding elegant solutions, building smart, modular systems,
              or hiding clever loading tricks behind smooth animations — those are the details I get genuinely excited
              about. But what truly drives me is turning code into emotion: a mesmerizing shader, a procedural world
              that's different every time you start a new save, or a gradually speeding obstacle course that pumps your
              heart rate into the thousands. I’m a passionate problem-solver, a communicator, and a bridge between
              creative and technical worlds. Whether I’m writing code or leading a discussion between artists and
              programmers, I love finding the language that connects everyone — and turns visions into experiences.
            </p>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Home;
