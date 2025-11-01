"use client";
import type { ReactNode } from "react";

type ProcessStepProps = {
    step: number | string;
    title: ReactNode;
    subtitle?: ReactNode;
    description?: ReactNode;
    icon?: ReactNode;
    isLast: boolean;
};

export default function ProcessStep({
    step,
    title,
    subtitle,
    description,
    icon,
    isLast,
}: ProcessStepProps) {
    return (
        <div className="relative flex items-center gap-6">
            {/* Left step number */}
            <div className="md:flex md:flex-col md:items-center sm:hidden hidden ">
                <div className="relative z-10 flex items-center justify-center w-10 h-10 text-white font-semibold bg-linear-to-b rounded-full bg-blue shadow-lg">
                    {step}
                </div>
                {!isLast && (
                    <div className="absolute left-5 top-[156px] w-px h-full bg-blue" />
                )}
            </div>

            {/* Right card */}
            <div className="flex md:flex-row flex-col items-center justify-center border-blue/40 border p-10 rounded-2xl gap-10">
                <div className="flex items-center bg-linear-to-t from-blue/40 rounded-2xl p-12 gap-4 mb-3">
                    <div className="text-blue">{icon}</div>
                </div>
                <div>
                    <h3 className="text-2xl font-semibold text-white">
                        {title}
                    </h3>
                    <h4 className="text-white font-medium mb-2 mt-5">
                        {subtitle}
                    </h4>
                    <p className="text-gray-400 leading-relaxed">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
}
