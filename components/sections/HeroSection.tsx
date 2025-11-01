"use client";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";
import { API_BASE_URL } from "@/utils/api";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import TypingText from "../shared/TypingText";
import { Button } from "../ui/button";

interface HeroData {
    id: number;
    name: string;
    description: string;
    image_url: string;
    resume_url: string;
}

export default function HeroSection() {
    const [hero, setHero] = useState<HeroData | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchHeroData = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/hero-section/`);
                if (!res.ok)
                    throw new Error("Failed to fetch hero section data");
                const data = await res.json();
                setHero(data[0]);
            } catch (err) {
                console.error("Error fetching hero data:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchHeroData();
    }, []);
    if (loading) {
        return (
            <section className="pt-20 text-center text-gray-400">
                Loading hero section...
            </section>
        );
    }

    if (!hero) {
        return (
            <section className="pt-20 text-center text-red-500">
                Failed to load hero section.
            </section>
        );
    }
    return (
        <section id="home" className="pt-15 ">
            <div className="flex flex-col md:flex-row items-center justify-between">
                {/* Left text */}
                <div className="text-center md:text-left mb-10 md:mb-0">
                    <div className=" text-sm font-medium text-white">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue/20 bg-content px-4 py-2">
                            <Image
                                src="/images/gen.png"
                                alt="Logo"
                                width={30}
                                height={30}
                                className="text-blue"
                            />
                            <p className="text-xl">
                                Welcome to My Sanctuary of Ideas
                            </p>
                        </div>
                    </div>

                    {/* Heading */}
                    <h1 className="text-2xl sm:text-3xl text-white md:text-5xl font-bold leading-tight mb-3">
                        Hi, I’m {hero.name}
                    </h1>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6">
                        Enthusiastic{" "}
                        <TypingText
                            words={[
                                "Product Designer",
                                "UI/UX Designer",
                                "UX Consultant",
                            ]}
                            color="text-blue"
                        />
                    </h2>

                    {/* Description */}
                    <p className="max-w-2xl text-gray-300 mb-10 text-base sm:text-lg">
                        {hero.description}
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row items-center gap-4">
                        <Button className="rounded-full bg-blue px-6 py-3 text-white hover:bg-blue-700 transition">
                            Hire Me as UI/UX Designer
                        </Button>
                        <Link
                            href={hero.resume_url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <Button
                                variant="outline"
                                className="rounded-full border border-blue-500 bg-blue/20 text-blue-400 px-6 py-3 hover:bg-blue-500 hover:text-white transition"
                            >
                                Download Resume
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Right orbiting icons */}
                <div className="relative h-[320px] w-[320px] md:h-[500px] md:w-[500px] flex items-center justify-center ">
                    <OrbitingCircles pathColorClass="stroke-blue" iconSize={60}>
                        <Image src="/images/ai.png" alt="Logo" fill />
                        <Image
                            src="/images/ps.png"
                            alt="Logo"
                            width={68}
                            height={70}
                            className="rounded"
                        />
                        <Image
                            src="/images/framer.png"
                            alt="Logo"
                            width={68}
                            height={70}
                            className="rounded"
                        />
                    </OrbitingCircles>
                    <OrbitingCircles
                        pathColorClass="stroke-blue"
                        radius={100}
                        reverse
                        iconSize={60}
                    >
                        <Image
                            src="/images/figma.png"
                            alt="Logo"
                            width={68}
                            height={70}
                            className="rounded"
                        />
                        <Image
                            src="/images/xd.png"
                            alt="Logo"
                            width={68}
                            height={70}
                            className="rounded"
                        />
                    </OrbitingCircles>
                </div>
            </div>
        </section>
    );
}
