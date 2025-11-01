"use client";

import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    const navLinks = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#service", label: "Service" },
        { href: "#skills", label: "Skills" },
        { href: "#portfolio", label: "Portfolio" },
        { href: "#case-studies", label: "Case Studies" },
        { href: "#contact", label: "Contact" },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);

            const scrollPosition = window.scrollY + window.innerHeight / 3;
            let current = "home";

            navLinks.forEach((link) => {
                const section = document.querySelector(link.href);
                if (section) {
                    const top =
                        section.getBoundingClientRect().top + window.scrollY;
                    const height = section.clientHeight;

                    if (
                        scrollPosition >= top &&
                        scrollPosition < top + height
                    ) {
                        current = link.href.substring(1);
                    }
                }
            });

            setActiveSection(current);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-black/30 shadow-md backdrop-blur-sm"
                    : "bg-black/30 backdrop-blur-sm shadow-md"
            }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-26">
                    {/* Logo */}
                    <div className="shrink-0">
                        <Link href="/" className="text-xl font-bold">
                            <Image
                                src="/Logo.png"
                                alt="Logo"
                                width={68}
                                height={70}
                                className="rounded"
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-center space-x-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                        activeSection === link.href.substring(1)
                                            ? "text-blue font-semibold"
                                            : "text-white hover:text-blue"
                                    }`}
                                >
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Hire Me Button */}
                    <div className="px-3 py-2 hidden md:block">
                        <Button
                            onClick={() => {
                                const contactSection =
                                    document.getElementById("contact");
                                contactSection?.scrollIntoView({
                                    behavior: "smooth",
                                });
                            }}
                            className="w-full rounded-3xl px-8 py-5 bg-blue border border-transparent text-white font-semibold transition-all duration-300 ease-out hover:border-blue hover:bg-transparent hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] focus:ring-2 focus:ring-blue"
                        >
                            Hire Me
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <div className="md:hidden">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            aria-label="Toggle menu"
                            className="bg-blue text-white"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-5 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                className={`block text-center px-3 py-2 rounded-md text-base font-medium ${
                                    activeSection === link.href.substring(1)
                                        ? "text-blue font-semibold"
                                        : "text-white hover:text-blue"
                                }`}
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    <div className="px-3 py-2">
                        <Button className="w-full rounded-3xl px-8 py-5 bg-blue border border-transparent text-white font-semibold transition-all duration-300 ease-out hover:border-blue focus:ring-2 focus:ring-blue focus:ring-offset-2">
                            Hire Me
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
