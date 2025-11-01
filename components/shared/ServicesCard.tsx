"use client"
import React from "react";

interface ServicesCardProps {
  logo?: React.ReactNode;
  title?: string;
  desc?: string;
}

const ServicesCard = ({ logo, title, desc }: ServicesCardProps) => {
  return (
    <div
      className="relative p-px rounded-2xl bg-linear-to-tr from-blue-500 via-[#0B121C] to-blue-900
                 transition-all duration-300 hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
    >
      <div className="rounded-2xl bg-[#0B121C] px-6 py-10 text-center flex flex-col items-center justify-center gap-1 text-gray-300">
        {/* Logo */}
        <div className="text-blue-400 text-3xl mb-3 flex justify-center">
          {logo}
        </div>

        {/* Title */}
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed">{desc}</p>
      </div>
    </div>
  );
};

export default ServicesCard;
