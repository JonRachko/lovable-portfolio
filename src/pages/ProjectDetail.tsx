import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const ProjectDetail = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-5xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link to="/projects">
            <ArrowLeft className="mr-2" size={16} />
            Back to Projects
          </Link>
        </Button>

        <div className="space-y-8">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">
              Project Title {id}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                Unity
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                C#
              </span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                Technical Art
              </span>
            </div>
            <div className="flex gap-4">
              <Button asChild>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="mr-2" size={16} />
                  View Live
                </a>
              </Button>
              <Button asChild variant="outline">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={16} />
                  Source Code
                </a>
              </Button>
            </div>
          </div>

          {/* Featured Image/Video Placeholder */}
          <Card>
            <CardContent className="p-0">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center rounded-t-lg">
                <span className="text-8xl">🎮</span>
              </div>
            </CardContent>
          </Card>

          {/* Project Description */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Detailed project description goes here. Explain what the project is about, 
                  your role in it, and what problems you solved.]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li>Feature or achievement 1</li>
                  <li>Feature or achievement 2</li>
                  <li>Feature or achievement 3</li>
                  <li>Feature or achievement 4</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Technical Highlights</h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Describe the technical aspects, tools used, challenges faced, and how you overcame them. 
                  This is where you can showcase your technical expertise.]
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">My Role</h2>
                <p className="text-muted-foreground leading-relaxed">
                  [Explain your specific contributions to this project. What did you program? 
                  What systems did you design? How did you work with the team?]
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Additional Media Placeholders */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📸</span>
            </div>
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center">
              <span className="text-4xl">📸</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
