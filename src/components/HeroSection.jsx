import {ArrowDown} from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero"
                 className="relative min-h-screen flex flex-col items-center justify-center px-4">
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight flex flex-col md:flex-row items-center justify-center">
                        <span className="opacity-0 animate-fade-in">Hi, I'm</span>
                        <span className="text-primary ml-2 opacity-0 animate-fade-in-delay-1">Maksym</span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Kravchenko</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3 flex flex-col">
                        <span>I build slick, scalable web & desktop experiences that just work</span>
                        <span>I’m back-end first and full-stack when needed developer</span>
                        <strong>Fast, clean, no fluff!</strong>
                    </p>

                    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
                        <a href="#projects" className="cosmic-button">
                            View My Work
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col space-y-3 items-center animate-bounce">
                <span> Scroll </span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
}