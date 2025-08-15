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
              Full Stack Dev. Open to work. Contact me below.
              
              Currently building PrevyaCare
              (Which is basically an initiative for Cancer Patients).
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
              />
              
              <ProjectCard 
                title="E-commerce Platform"
                description="A full-featured e-commerce platform with product management, cart functionality, and payment processing."
                techStack={["React.js", "Next.js", "TypeScript", "Tailwind CSS", "MySql", "REST APIs"]}
                githubUrl="https://github.com/Shreyragh/ez-store"
              />
              
              <ProjectCard 
                title="Portfolio Website"
                description="A minimalist portfolio website showcasing projects and skills with a clean, responsive design."
                techStack={["Next.js", "TypeScript", "Tailwind CSS"]}
                viewUrl="https://portfolio-shrey.vercel.app/"
              />
              
              <ProjectCard 
                title="Work Hours Tracker - web"
                description="A collaborative task management web application with real-time updates and team functionality."
                techStack={["Next.js", "TypeScript", "Tailwind CSS", "Web Sockets", "Supabase"]}
                githubUrl="https://github.com/Shreyragh/Work_Hours-Tracker"
              />
              
              <ProjectCard 
                title="Work Hours Tracker - mobile"
                description="A collaborative task management mobile application with real-time updates and team functionality."
                techStack={["React", "React Native", "TypeScript", "Web Sockets", "Supabase"]}
                githubUrl="https://github.com/Shreyragh/Work_Hours-Tracker"
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