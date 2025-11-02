import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project Title 1",
    description: "Brief description of the project. What makes it special and what technologies were used.",
    tags: ["Unity", "C#", "Shaders"],
    image: "placeholder",
  },
  {
    id: 2,
    title: "Project Title 2",
    description: "Brief description of the project. What makes it special and what technologies were used.",
    tags: ["Unity", "Technical Art", "VFX"],
    image: "placeholder",
  },
  {
    id: 3,
    title: "Project Title 3",
    description: "Brief description of the project. What makes it special and what technologies were used.",
    tags: ["Unity", "Gameplay", "AI"],
    image: "placeholder",
  },
  {
    id: 4,
    title: "Project Title 4",
    description: "Brief description of the project. What makes it special and what technologies were used.",
    tags: ["Unity", "Mobile", "Optimization"],
    image: "placeholder",
  },
  {
    id: 5,
    title: "Project Title 5",
    description: "Brief description of the project. What makes it special and what technologies were used.",
    tags: ["Unity", "Multiplayer", "Networking"],
    image: "placeholder",
  },
  {
    id: 6,
    title: "Project Title 6",
    description: "Brief description of the project. What makes it special and what technologies were used.",
    tags: ["Unity", "Tools", "Pipeline"],
    image: "placeholder",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            My Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my game development work, from gameplay systems to technical art solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <span className="text-6xl">🎮</span>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Button asChild className="w-full">
                  <Link to={`/projects/${project.id}`}>
                    View Details <ExternalLink className="ml-2" size={16} />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
