import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projectsData } from "@/data/projectsData";

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projectsData.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen py-20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <Button asChild>
            <Link to="/projects">Back to Projects</Link>
          </Button>
        </div>
      </div>
    );
  }

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
              {project.title}
            </h1>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Awards */}
            {project.awards && project.awards.length > 0 && (
              <div className="flex flex-wrap gap-4 mb-6">
                {project.awards.map((award, index) => (
                  award.link ? (
                    <a 
                      key={index}
                      href={award.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="transition-transform hover:scale-105"
                    >
                      {award.badge ? (
                        <img 
                          src={award.badge} 
                          alt={award.name}
                          className="h-16 md:h-20"
                        />
                      ) : (
                        <span className="text-sm font-semibold text-primary">{award.name}</span>
                      )}
                    </a>
                  ) : (
                    award.badge ? (
                      <img 
                        key={index}
                        src={award.badge} 
                        alt={award.name}
                        className="h-16 md:h-20"
                      />
                    ) : (
                      <span key={index} className="text-sm font-semibold text-primary">{award.name}</span>
                    )
                  )
                ))}
              </div>
            )}

            <div className="flex flex-wrap gap-4">
              {project.links.playStore && (
                <Button asChild>
                  <a href={project.links.playStore} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    View on Play Store
                  </a>
                </Button>
              )}
              {project.links.appStore && (
                <Button asChild>
                  <a href={project.links.appStore} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    View on App Store
                  </a>
                </Button>
              )}
              {project.links.live && (
                <Button asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    View Live
                  </a>
                </Button>
              )}
              {project.links.youtube && (
                <Button asChild variant="outline">
                  <a href={project.links.youtube} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2" size={16} />
                    Watch Demo
                  </a>
                </Button>
              )}
              {project.links.github && (
                <Button asChild variant="outline">
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2" size={16} />
                    Source Code
                  </a>
                </Button>
              )}
            </div>
          </div>

          {/* Featured Video */}
          {project.media.mainVideo && (
            <Card>
              <CardContent className="p-0">
                <video 
                  className="w-full aspect-video rounded-lg" 
                  controls 
                  preload="metadata"
                >
                  <source src={project.media.mainVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </CardContent>
            </Card>
          )}

          {/* Project Description */}
          <Card>
            <CardContent className="p-8 space-y-6">
              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Overview</h2>
                <div className="space-y-4">
                  {project.content.overview.map((paragraph, index) => (
                    <p key={index} className="text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Key Features</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.content.keyFeatures.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">Technical Highlights</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.content.technicalHighlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold mb-4">My Role</h2>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  {project.content.myRole.map((role, index) => (
                    <li key={index}>{role}</li>
                  ))}
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Showcase Videos */}
          {project.media.showcaseVideos && project.media.showcaseVideos.length > 0 && (
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Feature Showcase</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.media.showcaseVideos.map((video, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      {video.mask ? (
                        <div className="relative w-full aspect-square">
                          <video 
                            className="absolute inset-0 w-full h-full object-cover" 
                            controls 
                            preload="metadata"
                            loop
                            muted
                            playsInline
                          >
                            <source src={video.src} type="video/mp4" />
                            Your browser does not support the video tag.
                          </video>
                          <img 
                            src={video.mask} 
                            alt="" 
                            className="absolute inset-0 w-full h-full pointer-events-none"
                          />
                        </div>
                      ) : (
                        <video 
                          className="w-full aspect-video" 
                          controls 
                          preload="metadata"
                        >
                          <source src={video.src} type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      )}
                      <div className="p-4">
                        <p className="text-sm text-muted-foreground">{video.caption}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Showcase Images */}
          {project.media.showcaseImages && project.media.showcaseImages.length > 0 && (
            <div>
              <h2 className="text-2xl font-heading font-bold mb-6">Gallery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {project.media.showcaseImages.map((image, index) => (
                  <Card key={index} className="overflow-hidden">
                    <CardContent className="p-0">
                      {image.link ? (
                        <a href={image.link} target="_blank" rel="noopener noreferrer" className="block group">
                          <img 
                            src={image.src} 
                            alt={image.caption}
                            className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                          />
                          <div className="p-4 flex items-center justify-between">
                            <p className="text-sm text-muted-foreground">{image.caption}</p>
                            <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                          </div>
                        </a>
                      ) : (
                        <>
                          <img 
                            src={image.src} 
                            alt={image.caption}
                            className="w-full aspect-video object-cover"
                          />
                          <div className="p-4">
                            <p className="text-sm text-muted-foreground">{image.caption}</p>
                          </div>
                        </>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* Showcase Image Groups (for projects with multiple sections) */}
          {project.media.showcaseImageGroups && project.media.showcaseImageGroups.length > 0 && (
            <div className="space-y-12">
              {project.media.showcaseImageGroups.map((group, groupIndex) => (
                <div key={groupIndex}>
                  <h2 className="text-2xl font-heading font-bold mb-6">{group.title}</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {group.images.map((image, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardContent className="p-0">
                          {image.link ? (
                            <a href={image.link} target="_blank" rel="noopener noreferrer" className="block group">
                              <img 
                                src={image.src} 
                                alt={image.caption}
                                className="w-full aspect-video object-cover transition-transform group-hover:scale-105"
                              />
                              <div className="p-4 flex items-center justify-between">
                                <p className="text-sm text-muted-foreground">{image.caption}</p>
                                <ExternalLink className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" size={16} />
                              </div>
                            </a>
                          ) : (
                            <>
                              <img 
                                src={image.src} 
                                alt={image.caption}
                                className="w-full aspect-video object-cover"
                              />
                              <div className="p-4">
                                <p className="text-sm text-muted-foreground">{image.caption}</p>
                              </div>
                            </>
                          )}
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
