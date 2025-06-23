import {Briefcase, CodeXml, Handshake, User} from "lucide-react";

export const AboutMeSection = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web & Desktop Developer</h3>

                        <p className="text-muted-foreground">
                            I'm a software developer with over five years of experience, spanning personal projects and
                            production-ready applications built within collaborative development teams. Throughout my
                            journey, I've worked across various tech stacks, honing my skills in writing clean,
                            efficient, and maintainable code while delivering real-world solutions that users rely on.
                        </p>

                        <p className="text-muted-foreground">
                            Currently, I specialize in back-end development as part of a full-stack team. I focus on
                            building scalable, secure, and high-performance server-side systems — from APIs to database
                            architecture — while also contributing to front-end features when needed. <strong>This full-stack
                            flexibility allows me to support smooth, end-to-end product development.</strong>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                            <a href="#contact" className="cosmic-button">
                                Get In Touch
                            </a>

                            <a className="cosmic-button-outline">
                                Open CV
                            </a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <CodeXml className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">IT journey</h4>

                                    <p className="text-muted-foreground">
                                        My journey began at a local IT school and grew
                                        through university projects, competitive programming, and hands-on development.
                                        Today, I focus on creating <strong>practical, long-lasting
                                        solutions</strong> that help real
                                        products run smoothly and reliably.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Handshake className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Team Collaboration & Clients</h4>

                                    <p className="text-muted-foreground">
                                        Throughout my career, I’ve worked closely with different teams to bring projects
                                        from idea to deployment. I value clear
                                        communication, agile collaboration, technical goals with real user
                                        needs. <strong>I believe teamwork is key to delivering great results.</strong>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="gradient-border p-6 card-hover">
                            <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-start gap-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Briefcase className="h-6 w-6"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Real-World Experience</h4>

                                    <p className="text-muted-foreground">
                                        Over the years, I’ve worked on real-world applications ranging from internal
                                        enterprise tools to customer-facing platforms
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};