import { useState, useEffect } from "react";
import { Github, Linkedin, Mail } from "lucide-react";

const roles = [
  "MERN Stack Developer",
  "Full Stack Developer",
  "React Enthusiast",
  "Problem Solver",
  "UI/UX Craftsman",
];

export const HeroSection = () => {
  const [charIndex, setCharIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const role = roles[roleIndex];
    const speed = isDeleting ? 55 : 110;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < role.length) {
        setDisplayText(role.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === role.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && charIndex > 0) {
        setDisplayText(role.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % roles.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-56 h-56 md:w-80 md:h-80 rounded-full bg-primary/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 md:w-96 md:h-96 rounded-full bg-primary/5 blur-[120px] pointer-events-none" />

      <div className="container relative z-10 flex flex-col items-center text-center gap-8 pt-24 pb-16">
        {/* Availability badge */}
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
          Available for new opportunities
        </div>

        {/* Name */}
        <h1 className="animate-fade-in-delay-1 text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">
          Hi, I&apos;m{" "}
          <span className="text-primary text-glow">Hanzala Usman</span>
        </h1>

        {/* Typewriter role */}
        <p className="animate-fade-in-delay-2 text-xl md:text-2xl text-foreground/70 font-medium flex items-center justify-center gap-1 h-9">
          <span>{displayText}</span>
          <span className="typewriter-cursor" />
        </p>

        {/* Tagline */}
        <p className="animate-fade-in-delay-3 max-w-2xl text-foreground/55 text-base md:text-lg leading-relaxed">
          I craft elegant, performant web experiences that delight users and
          solve real-world problems. Let&apos;s build something amazing together.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-delay-4 flex flex-wrap items-center justify-center gap-4">
          <a href="#projects" className="cosmic-button text-base px-8 py-3">
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 rounded-full border border-primary/40 text-primary font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:scale-105 active:scale-95"
          >
            Contact Me
          </a>
        </div>

        {/* Social Links */}
        <div className="animate-fade-in-delay-4 flex items-center gap-4 mt-2">
          {[
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
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-border text-foreground/50 hover:text-primary hover:border-primary/50 hover:bg-primary/10 hover:-translate-y-1 transition-all duration-200"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
