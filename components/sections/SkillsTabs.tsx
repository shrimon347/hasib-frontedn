"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { API_BASE_URL } from "@/utils/api";
import { useEffect, useState } from "react";

interface SkillsTabsProps {
    className?: string;
}

type SkillsData = Record<string, string[]>;

export default function SkillsTabs({ className }: SkillsTabsProps) {
    const [skillsData, setSkillsData] = useState<SkillsData>({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/skills/`);
                const data: SkillsData = await res.json();
                setSkillsData(data);
            } catch (error) {
                console.error("Failed to fetch skills:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    if (loading)
        return <p className="text-white text-center py-10">Loading...</p>;
    if (!Object.keys(skillsData).length)
        return <p className="text-white text-center py-10">No skills found.</p>;

    const defaultTab = Object.keys(skillsData)[0];

    return (
        <section id="skills" className="text-white pb-15">
            <div className="text-center">
                <p className="text-2xl sm:text-3xl md:text-5xl font-bold pb-8">
                    Skills That Shape My Work
                </p>
                <p className="md:text-lg">
                    A blend of design tools, UX methods, and creative thinking
                    that help me craft <br /> seamless and impactful digital
                    experiences.
                </p>
            </div>
            <Tabs defaultValue={defaultTab} className="w-full mt-15">
                {/* Tabs Header */}
                <div className="flex items-center justify-center">
                    <TabsList className="bg-transparent border border-blue/40 rounded-full py-6 px-3 md:py-8 md:px-6 flex items-center md:gap-10 gap-4 justify-center">
                        {Object.keys(skillsData).map((tab) => (
                            <TabsTrigger
                                key={tab}
                                value={tab}
                                className={cn(
                                    "md:px-6 md:py-4 px-2 py-2 rounded-full text-[10px] md:text-sm font-medium transition-all",
                                    "data-[state=active]:bg-blue data-[state=active]:text-white",
                                    "hover:bg-transparent bg-blue/30 text-white border border-blue transition-all"
                                )}
                            >
                                {tab}
                            </TabsTrigger>
                        ))}
                    </TabsList>
                </div>

                {/* Tabs Content */}
                {Object.entries(skillsData).map(([category, skills]) => (
                    <TabsContent
                        key={category}
                        value={category}
                        className="mt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4 content-center"
                    >
                        {skills.map((skill) => (
                            <div
                                key={skill}
                                className="relative p-px rounded-2xl bg-linear-to-tr from-blue-500 via-[#0B121C] to-blue-900
                                transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
                            >
                                <div className="rounded-2xl bg-[#0B121C] p-4 md:p-6 text-center flex flex-col items-center justify-center gap-5 text-gray-300">
                                    {skill}
                                </div>
                            </div>
                        ))}
                    </TabsContent>
                ))}
            </Tabs>
        </section>
    );
}
