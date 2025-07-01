import { useState } from 'react';
import { ThemeProvider } from './components/theme-provider';
import { ModeToggle } from './components/mode-toggle';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs';
import { ProjectCard } from './components/project-card';
import { SocialLinks } from './components/social-links';
import { Footer } from './components/footer';
import { ExperienceSection } from './components/experience-section';
import { ToolsSection } from './components/tools-section';

function App() {
  const [activeTab, setActiveTab] = useState('projects');

  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen bg-background text-foreground font-sans antialiased">
        <div className="max-w-3xl mx-auto px-4 py-12">
          <header className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Hey, I'm Shrey Raghuvanshi</h1>
            <ModeToggle />
          </header>
          
          <section className="mb-8">
            <p className="text-muted-foreground mb-4">
              Full Stack Dev. Open to work. Contact me below. Currently building 
              TatkalCare.
            </p>
            <SocialLinks />
          </section>
          
          <Tabs defaultValue="projects" value={activeTab} onValueChange={setActiveTab} className="mb-12">
            <TabsList className="mb-8">
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="tools">Tools</TabsTrigger>
            </TabsList>
            
            <TabsContent value="projects" className="space-y-8">

              <ProjectCard 
                title="Fake News Detector"
                description="An NLP-powered tool to identify and classify misleading news using machine learning algorithms. Designed to promote media literacy and fight misinformation."
                techStack={["Python", "Scikit-learn", "NLTK", "HTML", "CSS", "JavaScript", "Flask"]}
                githubUrl="https://github.com/Shreyragh/Fake-news-detector"
                viewUrl="https://fake_news.example"
              />
              
              <ProjectCard 
                title="E-commerce Platform"
                description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
                techStack={["React.js", "Next.js", "TypeScript", "Tailwind CSS", "MySql", "REST APIs"]}
                githubUrl="https://github.com/Shreyragh/ez-store"
                viewUrl="https://ecommerce.example"
              />
              
              <ProjectCard 
                title="Portfolio Website"
                description="A minimalist portfolio website showcasing projects and skills with a clean, responsive design."
                techStack={["Next.js", "TypeScript", "Tailwind CSS"]}
                viewUrl="https://portfolio-shrey.vercel.app";

import { Box, Code, Database, Globe, Monitor, Smartphone, Puzzle, Grid3X3 } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4 xl:max-h-[50rem] xl:grid-rows-3">
      <ProjectGridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Fake News Detector"
        description="An NLP-powered tool to identify and classify misleading news using machine learning algorithms."
        techStack={["Python", "Scikit-learn", "NLTK", "Flask"]}
        githubUrl="https://github.com/Shreyragh/Fake-news-detector"
        viewUrl="https://fake_news.example"
      />

      <ProjectGridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]"
        icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="E-commerce Platform"
        description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
        techStack={["React.js", "Next.js", "TypeScript", "MySql"]}
        githubUrl="https://github.com/Shreyragh/ez-store"
        viewUrl="https://ecommerce.example"
      />

      <ProjectGridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]"
        icon={<Monitor className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Portfolio Website"
        description="A minimalist portfolio website showcasing projects and skills with a clean, responsive design."
        techStack={["Next.js", "TypeScript", "Tailwind CSS"]}
        viewUrl="https://portfolio-shrey.vercel.app"
      />

      <ProjectGridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]"
        icon={<Database className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Work Hours Tracker - Web"
        description="A collaborative task management web application with real-time updates and team functionality."
        techStack={["Next.js", "TypeScript", "Supabase"]}
        githubUrl="https://github.com/Shreyragh"
        viewUrl="https://tracker-web.example"
      />

      <ProjectGridItem
        area="md:[grid-area:3/1/3/7] xl:[grid-area:2/5/3/9]"
        icon={<Smartphone className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Work Hours Tracker - Mobile"
        description="A collaborative task management mobile application with real-time updates and team functionality."
        techStack={["Expo", "React Native", "TypeScript"]}
        githubUrl="https://github.com/Shreyragh"
      />
    </ul>
  );
}

interface ProjectGridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  viewUrl?: string;
}

const ProjectGridItem = ({ 
  area, 
  icon, 
  title, 
  description, 
  techStack,
  githubUrl,
  viewUrl 
}: ProjectGridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              <div className="flex gap-2">
                {githubUrl && (
                  <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-3 w-3" />
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
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="-tracking-4 pt-0.5 font-sans text-lg/[1.375rem] font-semibold text-balance text-black md:text-xl/[1.5rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-sm/[1.375rem] dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
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
    </li>
  );
};";

import { Box, Code, Database, Globe, Monitor, Smartphone, Puzzle, Grid3X3 } from "lucide-react";
import { GlowingEffect } from "./ui/glowing-effect";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";

export function ProjectsGrid() {
  return (
    <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-4 lg:gap-4 xl:max-h-[50rem] xl:grid-rows-3">
      <ProjectGridItem
        area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
        icon={<Code className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Fake News Detector"
        description="An NLP-powered tool to identify and classify misleading news using machine learning algorithms."
        techStack={["Python", "Scikit-learn", "NLTK", "Flask"]}
        githubUrl="https://github.com/Shreyragh/Fake-news-detector"
        viewUrl="https://fake_news.example"
      />

      <ProjectGridItem
        area="md:[grid-area:1/7/2/13] xl:[grid-area:1/5/2/9]"
        icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="E-commerce Platform"
        description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
        techStack={["React.js", "Next.js", "TypeScript", "MySql"]}
        githubUrl="https://github.com/Shreyragh/ez-store"
        viewUrl="https://ecommerce.example"
      />

      <ProjectGridItem
        area="md:[grid-area:2/1/3/7] xl:[grid-area:1/9/2/13]"
        icon={<Monitor className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Portfolio Website"
        description="A minimalist portfolio website showcasing projects and skills with a clean, responsive design."
        techStack={["Next.js", "TypeScript", "Tailwind CSS"]}
        viewUrl="https://portfolio-shrey.vercel.app"
      />

      <ProjectGridItem
        area="md:[grid-area:2/7/3/13] xl:[grid-area:2/1/3/5]"
        icon={<Database className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Work Hours Tracker - Web"
        description="A collaborative task management web application with real-time updates and team functionality."
        techStack={["Next.js", "TypeScript", "Supabase"]}
        githubUrl="https://github.com/Shreyragh"
        viewUrl="https://tracker-web.example"
      />

      <ProjectGridItem
        area="md:[grid-area:3/1/3/7] xl:[grid-area:2/5/3/9]"
        icon={<Smartphone className="h-4 w-4 text-black dark:text-neutral-400" />}
        title="Work Hours Tracker - Mobile"
        description="A collaborative task management mobile application with real-time updates and team functionality."
        techStack={["Expo", "React Native", "TypeScript"]}
        githubUrl="https://github.com/Shreyragh"
      />
    </ul>
  );
}

interface ProjectGridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  viewUrl?: string;
}

const ProjectGridItem = ({ 
  area, 
  icon, 
  title, 
  description, 
  techStack,
  githubUrl,
  viewUrl 
}: ProjectGridItemProps) => {
  return (
    <li className={`min-h-[14rem] list-none ${area}`}>
      <div className="relative h-full rounded-2xl border p-2 md:rounded-3xl md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="border-0.75 relative flex h-full flex-col justify-between gap-4 overflow-hidden rounded-xl p-4 md:p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D]">
          <div className="relative flex flex-1 flex-col gap-3">
            <div className="flex items-start justify-between">
              <div className="w-fit rounded-lg border border-gray-600 p-2">
                {icon}
              </div>
              <div className="flex gap-2">
                {githubUrl && (
                  <Button variant="ghost" size="sm" asChild className="h-8 px-2">
                    <a
                      href={githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1"
                    >
                      <Github className="h-3 w-3" />
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
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  </Button>
                )}
              </div>
            </div>
            <div className="space-y-3 flex-1">
              <h3 className="-tracking-4 pt-0.5 font-sans text-lg/[1.375rem] font-semibold text-balance text-black md:text-xl/[1.5rem] dark:text-white">
                {title}
              </h3>
              <p className="font-sans text-sm/[1.125rem] text-black md:text-sm/[1.375rem] dark:text-neutral-400">
                {description}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 mt-auto">
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
    </li>
  );
};"
              />
              
              <ProjectCard 
                title="Work Hours Tracker - web"
                description="A collaborative task management web application with real-time updates and team functionality."
                techStack={["Next.js", "TypeScript", "Tailwind CSS", "Web Sockets", "Supabase"]}
                githubUrl="https://github.com/Shreyragh"
                viewUrl="https://tracker-web.example"
              />
              
              <ProjectCard 
                title="Work Hours Tracker - mobile"
                description="A collaborative task management mobile application with real-time updates and team functionality."
                techStack={["React", "React Native", "TypeScript", "Web Sockets", "Supabase"]}
                githubUrl="https://github.com/Shreyragh"
              />
        
            </TabsContent>
            
            <TabsContent value="experience">
              <ExperienceSection />
            </TabsContent>
            
            <TabsContent value="tools">
              <ToolsSection />
            </TabsContent>
          </Tabs>
        </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
