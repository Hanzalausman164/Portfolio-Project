import { useState, useRef, useEffect } from "react";
import { Send, Github, Linkedin, Mail, Twitter } from "lucide-react";
import emailjs from "@emailjs/browser";
import { cn } from "@/lib/utils";

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Hanzalausman164",
    hoverClass: "hover:text-foreground hover:border-foreground/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/muhammad-hanzala-usman",
    hoverClass: "hover:text-blue-500 hover:border-blue-500/40",
  },
  {
    icon: Twitter,
    label: "Twitter / X",
    href: "https://twitter.com",
    hoverClass: "hover:text-sky-400 hover:border-sky-400/40",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:muhammadhanzala164@gmail.com",
    hoverClass: "hover:text-primary hover:border-primary/40",
  },
];

export const ContactSection = () => {
  const sectionRef = useRef(null);
  const formRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); 

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey || serviceId === "your_service_id") {
      console.warn("EmailJS credentials not set/default. Simulating form submission.");
      setTimeout(() => {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      }, 1500);
      return;
    }

    try {
      const formElement = formRef.current;
      if (formElement) {
        await emailjs.sendForm(serviceId, templateId, formElement, publicKey);
      } else {
        await emailjs.send(serviceId, templateId, {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        }, publicKey);
      }

      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const inputClass =
    "w-full px-3 md:px-4 py-2 md:py-3 rounded-xl bg-background border border-border text-foreground placeholder:text-foreground/30 text-xs md:text-sm focus:outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/15 transition-all duration-200";

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 px-4 relative bg-card/20"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(139,92,246,0.05)_0%,transparent_65%)] pointer-events-none" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-12 md:mb-20 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-semibold tracking-[0.2em] text-xs md:text-sm uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3">
            Contact <span className="text-primary text-glow">Me</span>
          </h2>
          <p className="mt-4 text-foreground/50 max-w-md mx-auto text-xs sm:text-sm">
            Have a project in mind or just want to say hello? My inbox is always
            open.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 max-w-4xl mx-auto items-start">
          {/* Left – Info Card */}
          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 h-full flex flex-col gap-4 md:gap-8">
              <div>
                <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3">
                  Let&apos;s work together
                </h3>
                <p className="text-foreground/60 text-xs md:text-sm leading-relaxed">
                  I&apos;m currently open to freelance opportunities and
                  full-time roles. Whether you have a question or just want to
                  say hi — I&apos;ll try my best to get back to you!
                </p>
              </div>

              {/* Email */}
              <a
                href="mailto:muhammadhanzala164@gmail.com"
                className="flex items-center gap-2 md:gap-3 group"
              >
                <div className="p-2 md:p-3 rounded-xl border border-border bg-background text-primary group-hover:bg-primary/10 group-hover:border-primary/40 transition-all duration-200 flex-shrink-0">
                  <Mail className="h-4 md:h-5 w-4 md:w-5" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-foreground/40 font-medium uppercase tracking-wider">
                    Email
                  </p>
                  <p className="text-xs md:text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    muhammadhanzala164@gmail.com
                  </p>
                </div>
              </a>

              {/* Social Links */}
              <div>
                <p className="text-xs text-foreground/40 font-semibold uppercase tracking-[0.15em] mb-3 md:mb-4">
                  Find me on
                </p>
                <div className="flex gap-2 md:gap-3">
                  {socialLinks.map(({ icon: Icon, label, href, hoverClass }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className={cn(
                        "p-2 md:p-3 rounded-xl border border-border text-foreground/40 bg-background transition-all duration-200 hover:-translate-y-1",
                        hoverClass
                      )}
                    >
                      <Icon className="h-4 md:h-5 w-4 md:w-5" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right – Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-5"
            >
              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-name"
                  className="text-xs md:text-sm font-medium text-foreground/70"
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-email"
                  className="text-xs md:text-sm font-medium text-foreground/70"
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={inputClass}
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label
                  htmlFor="contact-message"
                  className="text-xs md:text-sm font-medium text-foreground/70"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  required
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project or just say hello..."
                  className={cn(inputClass, "resize-none")}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending" || status === "sent"}
                className={cn(
                  "flex items-center justify-center gap-2 w-full py-2 md:py-3 rounded-full font-semibold text-xs md:text-sm transition-all duration-300",
                  status === "sent"
                    ? "bg-green-500/20 text-green-400 border border-green-500/40 cursor-default"
                    : status === "error"
                    ? "bg-red-500/20 text-red-400 border border-red-500/40 cursor-default"
                    : status === "sending"
                    ? "bg-primary/20 text-primary border border-primary/30 cursor-wait"
                    : "cosmic-button hover:scale-[1.02] active:scale-95"
                )}
              >
                {status === "idle" && (
                  <>
                    <Send className="h-3 md:h-4 w-3 md:w-4" />
                    Send Message
                  </>
                )}
                {status === "sending" && (
                  <span className="animate-pulse">Sending...</span>
                )}
                {status === "sent" && "✓ Message Sent — Thank you!"}
                {status === "error" && "✕ Failed to Send — Try again"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
