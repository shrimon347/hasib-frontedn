"use client";

import { API_BASE_URL } from "@/utils/api";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

interface AboutData {
    id: number;
    name: string;
    description: string;
}

const AboutSection = () => {
    const [data, setData] = useState<AboutData | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const currentYear = useMemo(() => new Date().getFullYear(), []);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`${API_BASE_URL}/who-am-i/`);
                if (!response.ok) throw new Error("Failed to fetch data");

                const json: AboutData[] = await response.json();
                setData(json[0]); // Assuming API returns an array with a single object
            } catch (err) {
                console.error("Error fetching About data:", err);
                setError("Failed to load data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <section id="about" className="py-20 text-white text-center">
                <p>Loading...</p>
            </section>
        );
    }

    if (!data) {
        return (
            <section id="about" className="py-20 text-white text-center">
                <p>Failed to load data.</p>
            </section>
        );
    }
    console.log(data);

    return (
        <section id="about" className="pb-15 text-white">
            <div className="flex md:flex-row flex-col justify-between items-center gap-10">
                {/* Left Side */}
                <div className="max-w-5xl">
                    <div className="flex">
                        <p className="text-2xl sm:text-3xl text-white md:text-5xl font-bold">
                            Who am I,
                        </p>
                        <Image
                            src="/images/gen.png"
                            alt="Logo"
                            width={40}
                            height={30}
                            className="text-blue"
                        />
                    </div>

                    {/* Name from API */}
                    <p className=" md:ml-52 mt-4 text-2xl sm:text-3xl text-white md:text-5xl font-bold">
                        {data.name}
                    </p>

                    {/* Description from API */}
                    <p className="text-gray-400 mt-10 text-lg whitespace-pre-line">
                        {data.description}
                    </p>
                </div>

                {/* Right Side */}
                <div>
                    <div className="flex flex-col items-center justify-center">
                        <Image
                            src="/images/gen.png"
                            alt="Logo"
                            width={100}
                            height={40}
                            className="text-blue"
                        />
                        <h1 className="text-[9rem] md:text-[10rem] font-extrabold text-transparent font-sans stroke-blue-500">
                            {currentYear}
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
