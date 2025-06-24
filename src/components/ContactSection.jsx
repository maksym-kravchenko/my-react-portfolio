import { Linkedin, Instagram, Send, Mail, MapPin, PhoneCall, Github } from "lucide-react";

export const ContactSection = () => {
    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="max-md:container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                    <strong>Got a project in mind or an idea you'd like to explore?</strong>
                    Feel free to reach out — I’m always open to new opportunities and great conversations.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-12 justify-center items-center">
                        <h3 className="text-2xl font-semibold">Contact Information</h3>

                        <div className="space-y-6 flex flex-col justify-center items-center w-max">
                            <div className="flex flex-col items-center max-lg:space-y-4 lg:flex-row lg:items-start lg:space-x-4 bg-card card-hover py-3 px-6 rounded-lg w-full">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium lg:text-left">Email</h4>
                                    <a href="mailto:kravchenko.maksym1607@gmail.com"
                                        className="lg:text-left text-foreground hover:text-primary active:text-primary transition-colors duration-300 break-words">
                                        kravchenko.maksym1607@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center max-lg:space-y-4 lg:flex-row lg:items-start lg:space-x-4 bg-card card-hover py-3 px-6 rounded-lg w-full">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PhoneCall className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium lg:text-left">Phone</h4>
                                    <a href="tel:+41765293875"
                                        className="lg:text-left text-foreground hover:text-primary active:text-primary transition-colors duration-300 break-words">
                                        +41 (76) 529 38 75
                                    </a>
                                </div>
                            </div>

                            <div className="flex flex-col items-center max-lg:space-y-4 lg:flex-row lg:items-start lg:space-x-4 bg-card card-hover py-3 px-6 rounded-lg w-full">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6" />
                                </div>
                                <div>
                                    <h4 className="font-medium lg:text-left">Location</h4>
                                    <span className="text-foreground">
                                        TG, Switzerland
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-12 items-center">
                        <h3 className="text-2xl font-semibold">Connect With Me</h3>
                        <div className="grid grid-cols-2 gap-6 w-max">
                            <a href="https://www.linkedin.com/in/maksym-kravchenko-16j07/"
                                className="text-foreground hover:text-primary active:text-primary transition-colors duration-300 w-max bg-card p-3 rounded-lg card-hover"
                                target="_blank">
                                <Linkedin />
                            </a>
                            <a href="https://www.instagram.com/maksyym.k/"
                                className="text-foreground hover:text-primary active:text-primary transition-colors duration-300 w-max bg-card p-3 rounded-lg card-hover"
                                target="_blank">
                                <Instagram />
                            </a>
                            <a href="https://t.me/vizzy1234"
                                className="text-foreground hover:text-primary active:text-primary transition-colors duration-300 w-max bg-card p-3 rounded-lg card-hover"
                                target="_blank">
                                <Send />
                            </a>
                            <a href="https://github.com/maksym-kravchenko"
                                className="text-foreground hover:text-primary active:text-primary transition-colors duration-300 w-max bg-card p-3 rounded-lg card-hover"
                                target="_blank">
                                <Github />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}