import { Moon, Sun } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { cn } from "@/lib/utils";

export const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <div> 
      <button 
        onClick={toggleTheme} 
        className={cn(
          "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
          "focus:outline-hidden"
        )}
        aria-label="Toggle theme"
      >
        {isDarkMode ? (
          <Sun className="h-6 w-6 text-yellow-300"/>
        ) : (
          <Moon className="h-6 w-6 text-blue-900"/>
        )}
      </button>
    </div>
  );
};