import {useState} from "react";
import {cn} from "../lib/utils.js";

const skills = [
    {name: "Java", level: 90, category: "backend"},
    {name: "Kotlin", level: 80, category: "backend"},
    {name: "C#", level: 70, category: "backend"},
    {name: "C++", level: 60, category: "backend"},
    {name: "Python", level: 50, category: "backend"},

    {name: "MySQL", level: 85, category: "databases"},
    {name: "SSMS", level: 80, category: "databases"},

    {name: "HTML/CSS", level: 90, category: "frontend"},
    {name: "JavaScript (JS)", level: 75, category: "frontend"},
    {name: "React", level: 50, category: "frontend"},
    {name: "Tailwind CSS", level: 40, category: "frontend"},

    {name: ".NET", level: 60, category: "frameworks"},
    {name: "Entity Framework", level: 65, category: "frameworks"},
    {name: "Jetpack Compose", level: 50, category: "frameworks"},

    {name: "REST APIs", level: 70, category: "api"},
    {name: "HttpClient", level: 70, category: "api"},

    {name: "Git / GitHub / GitKraken", level: 80, category: "tools"},
    {name: "Visual Studio", level: 80, category: "tools"},
    {name: "JetBrains IDEs", level: 90, category: "tools"},
]

const categories = [
    "all",
    "backend",
    "databases",
    "frontend",
    "frameworks",
    "api",
    "tools",
]

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button key={key}
                                className={cn("cursor-pointer px-5 py-2 rounded-full"
                                    ,"border border-foreground text-foreground/80"
                                    ,"hover:bg-primary/10 hover:text-primary hover:border-primary"
                                    ,"transition-colors duration-200 uppercase"
                                    , activeCategory === category ? "bg-primary/30" : ""
                                )}
                                onClick={() => setActiveCategory(category)}>
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skills
                        .filter((skill) => skill.category === activeCategory || activeCategory === "all")
                        .map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg"> {skill.name} </h3>
                            </div>
                            <div className="w-full bg-foreground/70 rounded-full overflow-hidden">
                                <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                     style={{width: skill.level + "%"}}/>
                            </div>
                            <div className="flex justify-between mt-1">
                                <span className="text-sm text-muted-foreground capitalize">{skill.category}</span>
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}