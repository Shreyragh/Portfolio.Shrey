import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6"; // FontAwesome 6
import { Button } from "./ui/button";

export function SocialLinks() {
  const links = [
  
    {
      name: "GitHub",
      href: "https://github.com/Shreyragh",
      icon: <Github className="h-5 w-5" />,
    },
    {
      name: "X",
      href: "https://x.com/ShreyRagh",
      icon: <FaXTwitter className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/shrey-ragh",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "Email",
      href: "mailto:shreyraghuvanshi10@gmail.com",
      icon: <Mail className="h-5 w-5" />,
    },
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {links.map((link) => (
        <Button
          key={link.name}
          variant="outline"
          size="sm"
          asChild
          className="h-9"
        >
          <a
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5"
          >
            {typeof link.icon === "string" ? link.icon : link.icon}
          </a>
        </Button>
      ))}
    </div>
  );
}