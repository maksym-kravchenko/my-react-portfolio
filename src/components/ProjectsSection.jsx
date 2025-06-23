import {ArrowRight, ExternalLink} from "lucide-react";

const projects = [
    {
        id: 1,
        title: 'Bucher Shop',
        description: "B2B e-commerce platform built for kitchen builders and manufacturers. Users can browse and order lighting, fittings, and components essential for kitchen construction",
        image: "/projects-imgs/Cover.png",
        tags: ["C#", ".Net", "Blazor", "MySql", "Entity Framework", "JS", "HttpClient"],
        demoUrl: "https://www.bbag.ch",
    },
    {
        id: 2,
        title: 'Furnipart CH',
        description: "A product-focused online shop for design handles and knobs. Built to reflect the brand’s clean aesthetic and wide selection, this platform allows customers to explore, filter, and purchase premium furniture accessories with ease",
        image: "/projects-imgs/Cover_2.png",
        tags: ["C#", "Blazor", "MySql", "Entity Framework", "JS", "HttpClient"],
        demoUrl: "https://furnipart.ch/",
    },
    {
        id: 3,
        title: 'Supplier Relationship Manager',
        description: "A robust internal tool designed to streamline supplier communication and data management. Built with efficiency in mind, it helps teams track supplier info, manage pricing, and maintain smooth procurement workflows",
        image: "/projects-imgs/Cover_3.png",
        tags: ["C#", ".Net", "Blazor", "MySql", "Entity Framework", "OpaccApi"],
        demoUrl: "https://srm.dvlp.bbag.ch",
    }
]

export const ProjectsSection = () => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary">Projects</span>
                </h2>

                <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with attention to detail,
                    performance, and user experience.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span
                                            className="px-2 py-1 text-xs font-medium border border-foreground rounded-full bg-primary/20 text-secondary-foreground">{tag}</span>
                                    ))}
                                </div>

                                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                                <p className="text-foreground text-sm mb-4">{project.description}</p>

                                <div className="flex justify-center items-center">
                                    <a href={project.demoUrl}
                                       target="_blank"
                                       className="cosmic-button-outline flex gap-2">
                                        <ExternalLink size={20}/> Open
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a href="https://github.com/maksym-kravchenko"
                       target="_blank"
                       className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check out my GitHub <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
};