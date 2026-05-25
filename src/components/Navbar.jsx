import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { useTheme } from "../context/ThemeContext";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Determine active section based on scroll position
      const sectionIds = ["home", "about", "skills", "projects", "contact"];
      const scrollPos = window.scrollY + 120;

      for (const id of [...sectionIds].reverse()) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm"
          : "bg-transparent"
      )}
    >
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          className="text-xl font-extrabold tracking-tight text-primary text-glow transition-opacity hover:opacity-80"
        >
          Hanzala<span className="text-foreground">.</span>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={cn(
                "relative text-sm font-medium transition-colors duration-200 hover:text-primary py-1",
                "after:absolute after:bottom-0 after:left-0 after:h-px after:bg-primary after:transition-all after:duration-300",
                activeSection === item.href.slice(1)
                  ? "text-primary after:w-full"
                  : "text-foreground/60 after:w-0 hover:after:w-full"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Right side: Theme toggle and hire-me button */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-200 focus:outline-none cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-900" />
            )}
          </button>
          <a href="#contact" className="cosmic-button text-sm px-5 py-2">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu & Theme Toggle */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-200 focus:outline-none cursor-pointer"
            aria-label="Toggle theme"
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-blue-900" />
            )}
          </button>
          <button
            id="mobile-menu-toggle"
            className="p-2 rounded-lg text-foreground/60 hover:text-primary hover:bg-primary/10 transition-all duration-200"
            onClick={() => setIsMobileMenuOpen((o) => !o)}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isMobileMenuOpen
            ? "max-h-80 border-b border-border"
            : "max-h-0"
        )}
      >
        <div className="bg-background/95 backdrop-blur-md px-4 pt-2 pb-5 flex flex-col gap-1">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={cn(
                "px-3 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                activeSection === item.href.slice(1)
                  ? "text-primary bg-primary/10"
                  : "text-foreground/60 hover:text-primary hover:bg-primary/5"
              )}
            >
              {item.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="cosmic-button mt-2 text-center text-sm"
          >
            Hire Me
          </a>
        </div>
      </div>
    </nav>
  );
};