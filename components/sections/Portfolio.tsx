"use client";

import { API_BASE_URL } from "@/utils/api";
import { useEffect, useState } from "react";
import { Marquee } from "../ui/marquee";

type PortfolioItem = {
    id: number;
    image: string;
    image_url: string;
    url: string;
};

export function Portfolio() {
    const [portfolio, setPortfolio] = useState<PortfolioItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPortfolio = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/portfolio/`);
                const data: PortfolioItem[] = await res.json();
                setPortfolio(data);
            } catch (error) {
                console.error("Failed to fetch portfolio:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPortfolio();
    }, []);

    if (loading)
        return (
            <p className="text-white text-center py-10">Loading portfolio...</p>
        );

    if (!portfolio.length)
        return (
            <p className="text-white text-center py-10">No portfolio found.</p>
        );

    const firstRow = portfolio.slice(0, Math.ceil(portfolio.length / 2));
    const secondRow = portfolio.slice(Math.ceil(portfolio.length / 2));

    return (
        <section id="portfolio" className="pb-15">
            <div className="text-center text-white">
                <p className="text-2xl sm:text-3xl text-white md:text-5xl font-bold pb-8">
                    Featured Portfolio
                </p>
                <p className="md:text-lg">
                    A curated collection of projects showcasing my user-centered
                    design process. From research to <br /> polished interfaces,
                    I craft experiences that balance beauty and functionality.
                </p>
            </div>

            <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mt-15">
                {/* First row */}
                <Marquee pauseOnHover className="[--duration:25s]">
                    {firstRow.map((item, i) => (
                        <a
                            key={i}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={item.image_url}
                                alt={`Portfolio image ${i}`}
                                className="md:h-[250px] md:w-[350px] h-[100px] w-[180px] object-cover rounded-xl mx-4"
                            />
                        </a>
                    ))}
                </Marquee>

                {/* Second row (reverse direction) */}
                <Marquee reverse pauseOnHover className="[--duration:25s] mt-3">
                    {secondRow.map((item, i) => (
                        <a
                            key={i}
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={item.image_url}
                                alt={`Portfolio image ${i}`}
                                className="md:h-[250px] md:w-[350px] h-[100px] w-[180px] object-cover rounded-xl mx-4"
                            />
                        </a>
                    ))}
                </Marquee>

                {/* Gradient fade edges */}
                <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r from-black"></div>
                <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l from-black"></div>
            </div>
        </section>
    );
}
