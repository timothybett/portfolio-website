import { Github, Linkedin, Twitter, Mail } from "lucide-react";

const socialLinks = [
  { icon: Github, href: "https://github.com/timothybett", label: "GitHub" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Mail, href: "mailto:tbett1313@gmail.com", label: "Email" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#1a2d38] py-8 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-gray-400 text-xs">
          &copy; {new Date().getFullYear()} Timothy Kipngeno Bett. All rights reserved.
        </div>

        <div className="flex items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 bg-white/5 rounded-lg flex items-center justify-center text-gray-400 hover:text-[#c9a55c] hover:bg-white/10 transition-all duration-200"
              aria-label={link.label}
            >
              <link.icon className="w-4 h-4" />
            </a>
          ))}
        </div>

        <div className="text-gray-500 text-xs">
          Built with React + Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
