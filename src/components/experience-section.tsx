import { ExternalLink } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";

interface ExperienceItemProps {
  title: string;
  company?: string;
  period: string;
  description: string;
  stack?: string;
  link?: string;
}

function ExperienceItem({
  title,
  company,
  period,
  description,
  stack,
  link,
}: ExperienceItemProps) {
  return (
    <div className="relative rounded-lg border border-border p-2 transition-transform duration-300 ease-in-out hover:translate-x-1 mb-6">
      <GlowingEffect />
      <div className="relative space-y-3 rounded-md border border-transparent bg-background p-4">
        <div className="flex justify-between items-start">
          <h3 className="text-lg font-medium text-foreground">{title}</h3>
          <span className="text-sm text-muted-foreground bg-muted px-2 py-1 rounded-md">{period}</span>
        </div>

        {company && (
          <p className="text-sm text-muted-foreground font-medium">{company}</p>
        )}

        <p className="text-sm text-muted-foreground">{description}</p>

        {stack && (
          <div className="flex flex-wrap gap-2">
            {stack.split(' / ').map((tech, index) => (
              <span
                key={index}
                className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {link && (
          <div className="pt-2">
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground gap-1 transition-colors"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Visit Project</span>
            </a>
          </div>
        )}
      </div>
    </div>
  );
}

export function ExperienceSection() {
  return (
    <div className="space-y-8">
      <ExperienceItem
        title="Freelance Developer"
        period="2024 – Present"
        description="Led the development of multiple web applications for clients."
        stack="Next.js / TypeScript / Tailwind CSS / Postgres / Google APIs"
        link="https://example.com"
      />

      <ExperienceItem
        title="Solo Projects"
        company="Ez Store"
        period="Mar 2025 – Apr 2025"
        description="Developed responsive web applications for ecommerce store. Worked with React, Express.js, and Node.js MySQL."
        stack="React / Express.js / Node.js / MySQL"
        link="https://example.com"
      />
    </div>
  );
}
