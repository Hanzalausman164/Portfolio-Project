import { Github, Linkedin, Mail, Heart } from "lucide-react";

const socialLinks = [
  {
    icon: Github,
    href: "https://github.com/Hanzalausman164",
    label: "GitHub",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/muhammad-hanzala-usman",
    label: "LinkedIn",
  },
  {
    icon: Mail,
    href: "mailto:muhammadhanzala164@gmail.com",
    label: "Email",
  },
];

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border py-8 px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Branding */}
        <p className="text-sm text-foreground/40 flex items-center gap-1.5 flex-wrap justify-center">
          Designed &amp; Built with{" "}
          <Heart className="h-3.5 w-3.5 text-primary fill-primary inline" /> by{" "}
          <span className="text-primary font-semibold">Hanzala Usman</span>
          <span className="text-foreground/25">·</span>
          <span>{year}</span>
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socialLinks.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-foreground/35 hover:text-primary hover:-translate-y-0.5 transition-all duration-200"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
