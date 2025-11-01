"use client";

import { API_BASE_URL } from "@/utils/api";
import {
    Dribbble,
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    Phone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { FaBehance } from "react-icons/fa";

type SocialLink = {
    id: number;
    name: string;
    url: string;
    order?: number;
};

const Footer: React.FC = () => {
    const currentYear = useMemo(() => new Date().getFullYear(), []);
    const [socialLinks, setSocialLinks] = useState<SocialLink[]>([]);

    // ✅ Icon map for API `name` field
    const iconMap: Record<string, React.ElementType> = {
        fb: Facebook,
        in: Linkedin,
        insta: Instagram,
        dr: Dribbble,
        be: FaBehance,
    };

    // ✅ Fetch and sort by `order`
    useEffect(() => {
        const fetchSocialLinks = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/social-links/`);
                const data: SocialLink[] = await res.json();

                // sort by order field (ascending)
                const sorted = [...data].sort(
                    (a, b) => (a.order ?? 0) - (b.order ?? 0)
                );
                setSocialLinks(sorted);
            } catch (error) {
                console.error("Failed to fetch social links:", error);
            }
        };
        fetchSocialLinks();
    }, []);

    return (
        <footer className="bg-[#071222] text-white pt-16 pb-6 border-t border-blue/40">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* ===== Top Grid Section ===== */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-10 border-b border-white">
                    {/* ==== Brand Info ==== */}
                    <div>
                        <div className="flex items-center gap-4 mb-4">
                            <Image
                                src="/Logo.png"
                                alt="Md. Hasibul Hasan Logo"
                                width={48}
                                height={48}
                                className="rounded-lg"
                            />
                            <div>
                                <h2 className="font-bold text-lg text-white">
                                    Md. Hasibul Hasan
                                </h2>
                            </div>
                        </div>

                        <p className="text-gray-300 text-sm leading-relaxed mb-6">
                            Business to achieve goals effectively and
                            efficiently
                        </p>

                        <div>
                            <h4 className="text-sm font-semibold mb-2 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-[2px] after:bg-blue-600">
                                Follow Me
                            </h4>

                            <div className="flex items-center gap-3 mt-4 flex-wrap">
                                {socialLinks.length > 0 ? (
                                    socialLinks.map(({ id, name, url }) => {
                                        const Icon = iconMap[name];
                                        if (!Icon) return null;
                                        return (
                                            <Link
                                                key={id}
                                                href={url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-9 h-9 flex items-center justify-center rounded-full border border-blue-700 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors duration-200"
                                            >
                                                <Icon size={18} />
                                            </Link>
                                        );
                                    })
                                ) : (
                                    <p className="text-gray-400 text-sm">
                                        Loading...
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* ==== Quick Links ==== */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-[2px] after:bg-blue-600">
                            Quick Link
                        </h4>
                        <ul className="space-y-2 mt-4 text-gray-300 text-sm">
                            {[
                                "About Me",
                                "My Resume",
                                "Skills",
                                "Portfolio",
                                "Case Studies",
                                "Contact",
                            ].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`#${item
                                            .toLowerCase()
                                            .replace(/\s+/g, "-")}`}
                                        className="hover:text-blue-500 transition-colors duration-200"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ==== My Services ==== */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-[2px] after:bg-blue-600">
                            My Service
                        </h4>
                        <ul className="space-y-2 mt-4 text-gray-300 text-sm">
                            {[
                                "UX/UI Design",
                                "Web Application",
                                "Mobile Application",
                                "SaaS Design",
                                "Interaction Design",
                                "UX Consultation",
                            ].map((service) => (
                                <li
                                    key={service}
                                    className="hover:text-blue-500 transition-colors duration-200"
                                >
                                    {service}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* ==== Contact Info ==== */}
                    <div>
                        <h4 className="text-lg font-semibold mb-3 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-10 after:h-[2px] after:bg-blue-600">
                            Contact Me
                        </h4>
                        <ul className="mt-4 space-y-4 text-sm text-gray-300">
                            <li className="flex items-center gap-3">
                                <Phone
                                    size={18}
                                    className="text-blue-500 shrink-0"
                                />
                                +880 1641 973 817
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail
                                    size={18}
                                    className="text-blue-500 shrink-0"
                                />
                                onlyhasan56@gmail.com
                            </li>
                            <li className="flex items-center gap-3">
                                <MapPin
                                    size={18}
                                    className="text-blue-500 shrink-0"
                                />
                                Manikganj, Dhaka, Bangladesh
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-6 text-center text-white text-sm space-y-1">
                    <p>
                        Copyright © {currentYear}{" "}
                        <Link
                            href="#"
                            className="text-blue-500 font-medium hover:underline transition-colors duration-200"
                        >
                            Md. Hasibul Hasan
                        </Link>
                        . All Rights Reserved.
                    </p>
                    <p className="text-gray-400">
                        Developed by{" "}
                        <Link
                            href="https://rimonmridha.netlify.app" // replace with your actual link
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline transition-colors duration-200"
                        >
                            RIOBOT
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
