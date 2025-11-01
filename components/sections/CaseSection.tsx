"use client";

import { useEffect, useState } from "react";
import { CaseStudySlider } from "../shared/CaseStudySlider";
import { API_BASE_URL } from "@/utils/api";

type CaseStudy = {
    id: number;
    title: string;
    short_description: string;
    image: string;
    image_url: string;
};

export const CaseSection = () => {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/case-study/`);
                const data: CaseStudy[] = await res.json();
                setCaseStudies(data);
            } catch (error) {
                console.error("Failed to fetch case studies:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCaseStudies();
    }, []);

    if (loading)
        return (
            <p className="text-white text-center py-10">
                Loading case studies...
            </p>
        );

    if (!caseStudies.length)
        return (
            <p className="text-white text-center py-10">
                No case studies found.
            </p>
        );

    // Transform API data to match slider prop structure
    const studiesForSlider = caseStudies.map((study) => ({
        id: study.id,
        title: study.title,
        description: study.short_description,
        image: study.image_url, // use full URL
        buttonText: "View Details",
        link: "#", // If you have a details page, you can replace this
    }));

    return (
        <section id="case-studies" className="pb-15 text-white">
            <div className="text-center">
                <p className="text-2xl sm:text-3xl text-white md:text-5xl font-bold pb-8">
                    UX Case Studies That Drive Results
                </p>
                <p className="md:text-lg">
                    Explore real-world design challenges I&apos;ve solved — from user
                    research to final UI. Each case study reflects my process of
                    identifying <br /> problems, empathizing with users, and
                    crafting thoughtful, usable, and scalable solutions.
                </p>
            </div>

            <CaseStudySlider className="mt-15" studies={studiesForSlider} />
        </section>
    );
};

export default CaseSection;
