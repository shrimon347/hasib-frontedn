"use client";

import AboutSection from "@/components/sections/AboutSection";
import CaseSection from "@/components/sections/CaseSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import HeroSection from "@/components/sections/HeroSection";
import { Portfolio } from "@/components/sections/Portfolio";
import ProcessSection from "@/components/sections/ProcessSection";
import ServicesSection from "@/components/sections/ServicesSection";
import SkillsTabs from "@/components/sections/SkillsTabs";
import Testimonials from "@/components/sections/Testimonials";

import { ReactLenis } from "lenis/react";

export default function Home() {
    return (
        <ReactLenis
            root
            options={{
                duration: 1.5,
                easing: (t) => t,
                orientation: "vertical",
                gestureOrientation: "vertical",
            }}
        >
            <div className="space-y-20 md:space-y-32">
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ServicesSection />
                <ProcessSection />
                <SkillsTabs />
                <Portfolio />
                <CaseSection />
                <ContactSection />
                <Testimonials />
            </div>
        </ReactLenis>
    );
}
