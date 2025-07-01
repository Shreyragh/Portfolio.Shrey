import React from "react";
import {
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiMysql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiGit,
  SiGithub,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiSupabase,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiPrisma,
} from "react-icons/si";
import { Code } from "lucide-react";

const techIcons: Record<string, React.ReactNode> = {
  // Languages
  "TypeScript": <SiTypescript className="h-5 w-5" style={{ color: '#3178C6' }} />,
  "JavaScript": <SiJavascript className="h-5 w-5" style={{ color: '#F7DF1E' }} />,
  "HTML": <SiHtml5 className="h-5 w-5" style={{ color: '#E34F26' }} />,
  "CSS": <SiCss3 className="h-5 w-5" style={{ color: '#1572B6' }} />,
  "SQL": <SiMysql className="h-5 w-5" style={{ color: '#4479A1' }} />,
  
  // Frameworks & Libraries
  "React": <SiReact className="h-5 w-5" style={{ color: '#61DAFB' }} />,
  "Next.js": <SiNextdotjs className="h-5 w-5" style={{ color: '#000000' }} />,
  "React Native": <SiReact className="h-5 w-5" style={{ color: '#61DAFB' }} />,
  "Tailwind CSS": <SiTailwindcss className="h-5 w-5" style={{ color: '#06B6D4' }} />,
  "Shadcn UI": <Code className="h-5 w-5" />,
  "Redux": <SiRedux className="h-5 w-5" style={{ color: '#764ABC' }} />,
  "React Query": <SiReactquery className="h-5 w-5" style={{ color: '#FF4154' }} />,
  
  // Tools & Platforms
  "Git": <SiGit className="h-5 w-5" style={{ color: '#F05032' }} />,
  "GitHub": <SiGithub className="h-5 w-5" style={{ color: '#181717' }} />,
  "Docker": <SiDocker className="h-5 w-5" style={{ color: '#2496ED' }} />,
  "Vercel": <SiVercel className="h-5 w-5" style={{ color: '#000000' }} />,
  "Netlify": <SiNetlify className="h-5 w-5" style={{ color: '#00C7B7' }} />,
  "Supabase": <SiSupabase className="h-5 w-5" style={{ color: '#3ECF8E' }} />,
  "Firebase": <SiFirebase className="h-5 w-5" style={{ color: '#FFCA28' }} />,
  
  // CMS & Databases
  "Payload CMS": <Code className="h-5 w-5" />,
  "PostgreSQL": <SiPostgresql className="h-5 w-5" style={{ color: '#4169E1' }} />,
  "MongoDB": <SiMongodb className="h-5 w-5" style={{ color: '#47A248' }} />,
  "Prisma": <SiPrisma className="h-5 w-5" style={{ color: '#2D3748' }} />,
};

interface ToolCategoryProps {
  title: string;
  tools: string[];
}

function ToolCategory({ title, tools }: ToolCategoryProps) {
  return (
    <div className="mb-8">
      <h3 className="text-lg font-medium mb-4">{title}</h3>
      <div className="flex flex-wrap gap-6">
        {tools.map((tool) => (
          <div
            key={tool}
            className="flex flex-col items-center gap-2 min-w-[60px]"
          >
            {techIcons[tool] ? (
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                {techIcons[tool]}
              </div>
            ) : (
              <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-muted/50 text-foreground">
                <Code className="h-5 w-5" />
              </div>
            )}
            <span className="text-xs text-muted-foreground text-center leading-tight">
              {tool}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ToolsSection() {
  return (
    <div className="space-y-8">
      <ToolCategory
        title="Languages"
        tools={[
          "TypeScript",
          "JavaScript",
          "HTML",
          "CSS",
          "SQL",
        ]}
      />
      
      <ToolCategory
        title="Frameworks & Libraries"
        tools={[
          "React",
          "Next.js",
          "React Native",
          "Tailwind CSS",
          "Shadcn UI",
          "Redux",
          "React Query",
        ]}
      />
      
      <ToolCategory
        title="Tools & Platforms"
        tools={[
          "Git",
          "GitHub",
          "Docker",
          "Vercel",
          "Netlify",
          "Supabase",
          "Firebase",
        ]}
      />
      
      <ToolCategory
        title="CMS & Databases"
        tools={[
          "Payload CMS",
          "Prisma",
        ]}
      />
    </div>
  );
}