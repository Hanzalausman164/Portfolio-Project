import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import {cn} from "@/lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);
    useEffect(() => {
        // Check for saved user preference, if any, on component mount
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark'); //for dark background
        }
        else {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');  //for light background
        }
    }, []);
    const toggleTheme = () => {
        if (isDarkMode) {
            setIsDarkMode(false);
            document.documentElement.classList.remove('dark');  //for light background
            localStorage.setItem('theme', 'light'); // to remember user preference after refresh
        }
        else {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark'); //for dark background
            localStorage.setItem('theme', 'dark');  // to remember user preference after refresh
        }
    }
  return (
    <div> 
        <button onClick={toggleTheme} className={cn("fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
            "focus:outline-hidden"
        )}>
            {isDarkMode ? <Sun className="h-6 w-6 text-yellow-300"/> : 
            <Moon className="h-6 w-6 text-blue-900"/>}
        </button>
    </div>
  )
}