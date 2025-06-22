import {Linkedin, Instagram, Send, Mail, MapPin, PhoneCall, SendHorizonal} from "lucide-react";
import {cn} from "../lib/utils.js";
import {useToast} from "@/hooks/use-toast.js";
import {useState} from "react";

export const ContactSection = () => {
    const {toast} = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setIsSubmitting(true);

        setTimeout(() => {
            toast({
                title: "Message sent!",
                description: "Thank you for the message. I'm get back to you soon!",
            });
            setIsSubmitting(false);
        }, 800);
    };

    return (
        <section id="contact" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-7xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary">Touch</span>
                </h2>

                <p className="text-center text-foreground mb-12 max-w-2xl mx-auto">
                    <strong>Got a project in mind or an idea you'd like to explore?</strong>
                    Feel free to reach out — I’m always open to new opportunities and great conversations.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="flex flex-col gap-12">
                        <h3 className="text-2xl font-semibold">Contact Information</h3>

                        <div className="space-y-6 justify-center">
                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Email</h4>
                                    <a href="mailto:kravchenko.maksym1607@gmail.com"
                                       className="text-foreground hover:text-primary transition-colors duration-300">
                                        kravchenko.maksym1607@gmail.com
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <PhoneCall className="h-6 w-6"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Phone</h4>
                                    <a href="tel:+41765293875"
                                       className="text-foreground hover:text-primary transition-colors duration-300">
                                        +41 (76) 529 38 75
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <MapPin className="h-6 w-6"/>
                                </div>
                                <div>
                                    <h4 className="font-medium text-left">Location</h4>
                                    <span className="text-foreground">
                                        TG, Switzerland
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="flex flex-col gap-4">
                            <h4 className="font-medium">Connect With Me</h4>
                            <div className="flex space-x-4 justify-center">
                                <a href="https://www.linkedin.com/in/maksym-kravchenko-16j07/"
                                   className="text-foreground hover:text-primary transition-colors duration-300"
                                   target="_blank">
                                    <Linkedin/>
                                </a>
                                <a href="https://www.instagram.com/maksyym.k/"
                                   className="text-foreground hover:text-primary transition-colors duration-300"
                                   target="_blank">
                                    <Instagram/>
                                </a>
                                <a href="https://t.me/vizzy1234"
                                   className="text-foreground hover:text-primary transition-colors duration-300"
                                   target="_blank">
                                    <Send/>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="bg-card p-8 rounded-lg shadow-xs" onSubmit={handleSubmit}>
                        <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>

                        <form className="space-y-6">
                            <div className="flex flex-col gap-1 items-start">
                                <label htmlFor="name" className="block text-sm font-medium ms-2">Your Name</label>
                                <input type="text"
                                       id="name"
                                       name="name"
                                       className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-2 focus:ring-primary"
                                       placeholder="Maksym Kravchenko"
                                       required={true}/>
                            </div>

                            <div className="flex flex-col gap-1 items-start">
                                <label htmlFor="email" className="block text-sm font-medium ms-2">Your Email</label>
                                <input type="email"
                                       id="email"
                                       name="email"
                                       className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-2 focus:ring-primary"
                                       placeholder="somefunnyemail@gmail.com"
                                       required={true}/>
                            </div>

                            <div className="flex flex-col gap-1 items-start">
                                <label htmlFor="message" className="block text-sm font-medium ms-2">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="w-full px-4 py-3 rounded-md border border-input focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Some funny message..."
                                    required={true}/>
                            </div>

                            <button type="submit" disabled={isSubmitting} className={cn(
                                "cosmic-button w-full flex items-center justify-center gap-2",
                            )}>
                                {isSubmitting ? "Sending.." : "Send Message"} <SendHorizonal size={16}/>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}