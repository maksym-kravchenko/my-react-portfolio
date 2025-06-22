import {useEffect, useState} from "react";
import {Sun, Moon} from "lucide-react";
import {cn} from "../lib/utils.js";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme === "dark") {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        }
    }, [])

    const toggleTheme = () => {
        localStorage.setItem("theme", isDarkMode ? "light" : "dark");

        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            setIsDarkMode(true);
        }
    }

    return (
        <button onClick={toggleTheme} className={cn("absolute top-1/2 -translate-y-1/2 right-5 z-35 rounded-full",
            "transition-colors duration-300 focus:outline-hidden cursor-pointer"
            )}>
            {isDarkMode
                ? <Sun className="h-6 w-6 text-yellow-300 hover:text-yellow-600" />
                : <Moon className="h-6 w-6 text-blue-900 hover:text-blue-500" />
            }
        </button>
    );
};