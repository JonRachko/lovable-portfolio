import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Users, Wrench } from "lucide-react";

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: ["C# / Unity", "Gameplay Systems", "Tools Development", "Performance Optimization"],
  },
  {
    icon: Palette,
    title: "Technical Art",
    skills: [
      "Animation Systems",
      "Particle Systems",
      "Material Creation",
      "Procedural Generation",
      "Shader Development",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Software",
    skills: ["Unity Engine", "Git / Version Control", "Visual Studio / Rider", "Jira / Project Management"],
  },
  {
    icon: Users,
    title: "Collaboration",
    skills: [
      "Cross-Team Coordination",
      "Technical Documentation",
      "Code Review",
      "Agile Methodologies",
      "Communication",
    ],
  },
];

const Skills = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Skills & Tools</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and the tools I use to make stuff
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, index) => (
            <Card key={index} className="hover:shadow-xl transition-shadow">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <category.icon className="text-primary" size={24} />
                  </div>
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Section */}
        <Card className="max-w-4xl mx-auto mt-12 p-8">
          <h2 className="text-2xl font-heading font-bold mb-4 text-center">Always Learning</h2>
          <p className="text-muted-foreground text-center leading-relaxed">
            There's an infinite amount of things to learn, whether it's programming patterns, new tools and libraries,
            or new game mechanics and even genres to explore. Currently I'm working on improving my modular
            architecture, new methods for dependency injection, and on how to improve my unit testing game (and, as
            always, I'm diligently using my down-time to research both new and existing video games, for my professional
            improvement of course).
          </p>
        </Card>
      </div>
    </div>
  );
};

export default Skills;
