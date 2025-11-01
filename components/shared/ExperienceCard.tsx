"use client";

import React from "react";
import CountUp from "react-countup";

interface ExperienceCardProps {
    title: string;
    text: string | number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ title, text }) => {
    // Extract numeric part for counter animation
    const numericValue = Number(String(text).replace(/[^\d]/g, ""));
    // Extract any suffix like '+' or '%'
    const suffix = String(text).replace(/\d/g, "");

    return (
        <div className="bg-blue/10 px-6 py-10 rounded-2xl shadow">
            <p className="text-xl sm:text-3xl md:text-5xl font-bold pb-2">
                <CountUp end={numericValue} duration={2} />
                {suffix}
            </p>
            <p className="text-sm sm:text-base">{title}</p>
        </div>
    );
};

export default ExperienceCard;
