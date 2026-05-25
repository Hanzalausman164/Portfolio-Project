import { useEffect, useRef, useState } from "react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "A stunning personal portfolio built with React.js and Tailwind CSS v4. Features dark/light mode, animated star background, typewriter effects, and smooth scroll navigation.",
    tags: ["React.js", "Tailwind CSS", "JavaScript", "HTML/CSS"],
    github: "https://github.com/Hanzalausman164/Portfolio-Project",
    live: "#",
    emoji: "🌟",
    featured: true,
  },
  {
    title: "Home Tuition Services Website",
    description:
      "A modern, responsive platform connecting students with qualified home tutors. Includes tutor profiles, subject filters, and an interactive inquiry system.",
    tags: ["React.js", "Bootstrap", "JavaScript", "HTML/CSS"],
    github: "#",
    live: "#",
    emoji: "🎓",
    featured: false,
  },
  {
    title: "Car Rental Mobile App",
    description:
      "A sleek, user-centric mobile application design for seamless car rentals, featuring filters, date-booking calendar, digital check-ins, and a custom map overview.",
    tags: ["Figma", "UI/UX Design", "Mobile App"],
    github: "#",
    live: "#",
    emoji: "🚗",
    featured: false,
  },
  {
    title: "LiveStock Hub Mobile App",
    description:
      "A comprehensive digital marketplace and management application design for livestock trading, veterinary consultation booking, and herd health tracking.",
    tags: ["Figma", "UI/UX Design", "Mobile App"],
    github: "#",
    live: "#",
    emoji: "🐑",
    featured: false,
  },
];

export const ProjectsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-28 px-4 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(139,92,246,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-semibold tracking-[0.2em] text-sm uppercase">
            What I&apos;ve Built
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Featured <span className="text-primary text-glow">Projects</span>
          </h2>
          <p className="mt-4 text-foreground/50 max-w-md mx-auto text-sm">
            A selection of projects I&apos;ve built — from web platforms to polished mobile designs.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 max-w-4xl mx-auto gap-6">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative rounded-2xl border border-border bg-card flex flex-col overflow-hidden transition-all duration-700
                hover:border-primary/40 hover:shadow-[0_0_35px_rgba(139,92,246,0.15)] hover:-translate-y-1.5
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                ${project.featured ? "ring-1 ring-primary/25" : ""}
              `}
              style={{ transitionDelay: `${i * 90}ms` }}
            >
              {/* Top accent bar */}
              {project.featured && (
                <div className="h-0.5 w-full bg-gradient-to-r from-primary via-purple-400 to-primary" />
              )}

              <div className="p-6 flex flex-col flex-1">
                {/* Featured badge */}
                {project.featured && (
                  <span className="self-start mb-4 inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full bg-primary/15 text-primary border border-primary/25">
                    ⭐ Featured
                  </span>
                )}

                {/* Emoji icon */}
                <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">
                  {project.emoji}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-foreground/55 leading-relaxed flex-1 mb-5">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4 border-t border-border/60">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-foreground/50 hover:text-primary transition-colors duration-200 font-medium"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All CTA */}
        <div
          className={`text-center mt-14 transition-all duration-700 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <a
            href="https://github.com/Hanzalausman164"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-primary/40 text-primary font-medium transition-all duration-300 hover:bg-primary/10 hover:border-primary hover:scale-105 active:scale-95"
          >
            <Github className="h-4 w-4" />
            View All on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
