import { useEffect, useRef, useState } from "react";

const skillCategories = [
  {
    title: "Frontend & Styling",
    emoji: "🎨",
    skills: [
      { name: "React.js", level: 90 },
      { name: "JavaScript", level: 88 },
      { name: "TypeScript", level: 75 },
      { name: "Tailwind CSS", level: 92 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 85 },
    ],
  },
  {
    title: "Backend & Database",
    emoji: "⚙️",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 82 },
      { name: "MongoDB", level: 78 },
      { name: "RESTful APIs", level: 88 },
    ],
  },
  {
    title: "Programming",
    emoji: "💻",
    skills: [
      { name: "JavaScript", level: 88 },
      { name: "C++", level: 80 },
      { name: "Java", level: 75 },
      { name: "C", level: 85 },
    ],
  },
  {
    title: "Tools & Design",
    emoji: "🛠️",
    skills: [
      { name: "Git", level: 90 },
      { name: "Figma", level: 75 },
      { name: "UI/UX Design", level: 80 },
    ],
  },
];

export const SkillsSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-28 px-4 relative bg-card/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.04)_0%,transparent_70%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-semibold tracking-[0.2em] text-sm uppercase">
            What I Know
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            My <span className="text-primary text-glow">Skills</span>
          </h2>
          <p className="mt-4 text-foreground/50 max-w-md mx-auto text-sm">
            A snapshot of the technologies I work with daily and love to explore.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, ci) => (
            <div
              key={category.title}
              className={`rounded-2xl border border-border bg-card overflow-hidden transition-all duration-700 hover:border-primary/30 hover:shadow-[0_0_30px_rgba(139,92,246,0.1)] hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${ci * 150}ms` }}
            >
              {/* Card header gradient bar */}
              <div
                className="h-1.5 w-full"
                style={{
                  background:
                    ci === 0
                      ? "linear-gradient(to right, #7c3aed, #9333ea)"
                      : ci === 1
                      ? "linear-gradient(to right, #2563eb, #06b6d4)"
                      : ci === 2
                      ? "linear-gradient(to right, #f97316, #ef4444)"
                      : "linear-gradient(to right, #059669, #0d9488)",
                }}
              />

              <div className="p-6">
                <div className="flex items-center gap-3 mb-7">
                  <span className="text-3xl">{category.emoji}</span>
                  <h3 className="text-base font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-col gap-5">
                  {category.skills.map((skill, si) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-foreground/75">
                          {skill.name}
                        </span>
                        <span className="text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded-full">
                          {skill.level}%
                        </span>
                      </div>
                      {/* Progress bar */}
                      <div className="h-1.5 w-full rounded-full bg-primary/10 overflow-hidden">
                        <div
                          className="h-full rounded-full transition-all duration-1000 ease-out"
                          style={{
                            width: isVisible ? `${skill.level}%` : "0%",
                            transitionDelay: `${ci * 150 + si * 100 + 300}ms`,
                            background:
                              ci === 0
                                ? "linear-gradient(to right, #7c3aed, #9333ea)"
                                : ci === 1
                                ? "linear-gradient(to right, #2563eb, #06b6d4)"
                                : ci === 2
                                ? "linear-gradient(to right, #f97316, #ef4444)"
                                : "linear-gradient(to right, #059669, #0d9488)",
                            boxShadow:
                              ci === 0
                                ? "0 0 8px rgba(124,58,237,0.5)"
                                : ci === 1
                                ? "0 0 8px rgba(37,99,235,0.5)"
                                : ci === 2
                                ? "0 0 8px rgba(249,115,22,0.5)"
                                : "0 0 8px rgba(5,150,105,0.5)",
                          }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
