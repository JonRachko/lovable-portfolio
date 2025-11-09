import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Linkedin, Mail, ExternalLink } from "lucide-react";
import { ItchIcon } from "@/components/icons/ItchIcon";

const Contact = () => {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4">Get In Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interested in working together, have a question, or just want to complement my headshot? Feel free to reach
            out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="mailto:Jonrachko@gmail.com"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Mail className="text-primary" size={20} />
                  </div>
                  <span>Jonrachko@gmail.com</span>
                </a>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">I'm also over here</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <a
                  href="https://www.linkedin.com/in/jonathan-ratzkovsky-1502771aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <Linkedin className="text-primary" size={20} />
                  </div>
                  <span>LinkedIn</span>
                  <ExternalLink className="ml-auto" size={16} />
                </a>
                <a
                  href="https://jonshmon.itch.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors group"
                >
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <ItchIcon className="text-primary" size={20} />
                  </div>
                  <span>Itch.io</span>
                  <ExternalLink className="ml-auto" size={16} />
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <p className="text-muted-foreground text-center leading-relaxed">
                  I'm always interested in hearing about new projects and opportunities! Send a message and I'll get
                  back to you as soon as I can!
                </p>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
