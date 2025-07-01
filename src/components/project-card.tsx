import { ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  viewUrl?: string;
}

export function ProjectCard({
  title,
  description,
  techStack,
  githubUrl,
  viewUrl,
}: ProjectCardProps) {
  return (
    <div className="relative rounded-lg border border-border p-2 transition-transform duration-300 ease-in-out hover:translate-x-1">
      <GlowingEffect />
      <div className="relative space-y-4 rounded-md border border-transparent bg-background p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium">{title}</h3>
        <div className="flex gap-2">
          {githubUrl && (
            <Button variant="ghost" size="sm" asChild className="h-8 px-2">
              <a
                href={githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
          )}
          {viewUrl && (
            <Button variant="ghost" size="sm" asChild className="h-8 px-2">
              <a
                href={viewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1"
              >
                <ExternalLink className="h-4 w-4" />
                <span>View</span>
              </a>
            </Button>
          )}
        </div>
        </div>
        <p className="text-muted-foreground text-sm">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
