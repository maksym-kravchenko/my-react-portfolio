import {StarBackground} from "../components/StarBackground.jsx";
import {NavBar} from "../components/NavBar.jsx";
import {HeroSection} from "../components/HeroSection.jsx";
import {AboutMeSection} from "../components/AboutMeSection.jsx";
import {SkillsSection} from "../components/SkillsSection.jsx";
import {ProjectsSection} from "../components/ProjectsSection.jsx";
import {ContactSection} from "../components/ContactSection.jsx";
import {Footer} from "@/components/Footer.jsx";

export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Background Effects */}
            <StarBackground />

            {/* NavBar */}
            <NavBar />

            {/* Main Content */}
            <main>
                <HeroSection />
                <AboutMeSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};