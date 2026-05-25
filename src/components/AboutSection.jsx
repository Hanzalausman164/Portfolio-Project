import { useEffect, useRef, useState } from "react";
import { Briefcase, Code2, GraduationCap, Coffee } from "lucide-react";

const stats = [
  { icon: Briefcase, label: "Projects Completed", value: "15+" },
  { icon: Code2, label: "Technologies", value: "10+" },
  { icon: GraduationCap, label: "Years Learning", value: "3+" },
  { icon: Coffee, label: "Coffees Consumed", value: "∞" },
];

export const AboutSection = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-28 px-4 relative">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-semibold tracking-[0.2em] text-sm uppercase">
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            About <span className="text-primary text-glow">Me</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Avatar / Visual Side */}
          <div
            className={`flex justify-center transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Outer spinning ring */}
              <div className="absolute inset-0 rounded-full border border-primary/20 animate-[spin_20s_linear_infinite]">
                <div className="absolute -top-1 left-1/2 w-2 h-2 rounded-full bg-primary shadow-[0_0_8px_rgba(139,92,246,0.8)]" />
              </div>
              {/* Middle ring */}
              <div className="absolute inset-6 rounded-full border border-primary/15 animate-[spin_15s_linear_infinite_reverse]">
                <div className="absolute -top-1 left-1/2 w-1.5 h-1.5 rounded-full bg-primary/60" />
              </div>
              {/* Inner card */}
              <div className="absolute inset-10 rounded-full bg-card border border-border flex items-center justify-center shadow-lg">
                <span className="text-6xl select-none">🧑‍💻</span>
              </div>
              {/* Floating badges */}
              <div className="hidden md:block absolute -top-2 -right-4 bg-card border border-border rounded-xl px-3 py-1.5 text-xs font-semibold text-primary shadow-md animate-float">
                React ⚛️
              </div>
              <div className="hidden md:block absolute -bottom-4 -left-4 bg-card border border-border rounded-xl px-3 py-1.5 text-xs font-semibold text-primary shadow-md animate-float [animation-delay:1.5s]">
                Node.js 🟢
              </div>
              <div className="hidden md:block absolute top-1/2 -right-8 bg-card border border-border rounded-xl px-3 py-1.5 text-xs font-semibold text-primary shadow-md animate-float [animation-delay:3s]">
                Figma 🎨
              </div>

            </div>
          </div>

          {/* Text Side */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">
              A developer who{" "}
              <span className="text-primary">loves clean code</span> and great UX
            </h3>
            <p className="text-foreground/65 leading-relaxed mb-5 text-base">
              I&apos;m a passionate{" "}
              <span className="text-primary font-semibold">
                MERN Stack Developer
              </span>{" "}
              with a love for turning complex problems into simple, beautiful
              solutions. I thrive at the intersection of design and engineering,
              building products that look great and work flawlessly.
            </p>
            <p className="text-foreground/65 leading-relaxed mb-10 text-base">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open-source projects, or brewing the
              perfect cup of coffee to fuel my next build.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map(({ icon: Icon, label, value }, i) => (
                <div
                  key={label}
                  className="rounded-2xl border border-border bg-card p-5 hover:border-primary/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.08)] transition-all duration-300 hover:-translate-y-0.5"
                  style={{ transitionDelay: `${i * 80}ms` }}
                >
                  <Icon className="h-5 w-5 text-primary mb-3" />
                  <div className="text-3xl font-extrabold text-foreground tracking-tight">
                    {value}
                  </div>
                  <div className="text-xs text-foreground/45 mt-1 font-medium">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
