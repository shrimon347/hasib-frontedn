"use client";

import { Card, CardContent } from "@/components/ui/card";
import { API_BASE_URL } from "@/utils/api";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { Quote, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Testimonial {
    id: number;
    client_name: string;
    client_designation: string;
    client_image: string;
    client_quote: string;
    number_of_star: number;
    image_url: string;
}

export default function Testimonials() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [testimonials, setTestimonials] = useState<Testimonial[] | null>(
        null
    );

    // Initialize slider
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        breakpoints: {
            "(min-width: 768px)": {
                slides: { perView: 2, spacing: 10 },
            },
        },
        slides: { perView: 1, spacing: 10 },
    });

    // Fetch testimonials
    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const res = await fetch(`${API_BASE_URL}/client-review/`);
                const data: Testimonial[] = await res.json();
                setTestimonials(data);
            } catch (error) {
                console.error("Failed to fetch testimonials:", error);
            }
        };
        fetchTestimonials();
    }, []);

    // Autoplay
    useEffect(() => {
        if (!testimonials || testimonials.length === 0) return; // only start autoplay if data exists
        const interval = setInterval(() => {
            instanceRef.current?.next();
        }, 4000);
        return () => clearInterval(interval);
    }, [instanceRef, testimonials]);

    if (!testimonials || testimonials.length === 0) {
        return (
            <section className="pb-15 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-12">
                    See What People Are Saying About Me
                </h2>
                <p className="text-gray-300">Loading testimonials...</p>
            </section>
        );
    }

    return (
        <section className="pb-15 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-12">
                See What People Are Saying About Me
            </h2>

            <div ref={sliderRef} className="keen-slider">
                {testimonials.map((t) => (
                    <div key={t.id} className="keen-slider__slide px-3">
                        <Card className="bg-blue/20 border-blue/40 text-left rounded-xl p-6 w-full">
                            <CardContent className="p-0 space-y-6">
                                <div className="flex gap-1 text-blue-500">
                                    {Array.from({
                                        length: t.number_of_star,
                                    }).map((_, i) => (
                                        <span key={i}>
                                            <Star />
                                        </span>
                                    ))}
                                </div>

                                <p className="text-gray-300">
                                    {t.client_quote}
                                </p>

                                <div className="flex items-center gap-4">
                                    <Image
                                        src={t.image_url || t.client_image}
                                        alt={t.client_name}
                                        width={50}
                                        height={50}
                                        className="rounded-full w-10 h-10"
                                    />
                                    <div>
                                        <div className="flex items-center gap-3">
                                            <div className="h-[0.8px] w-4 bg-white"></div>
                                            <p className="font-semibold text-white text-lg">
                                                {t.client_name}
                                            </p>
                                        </div>
                                        <p className="text-sm text-white">
                                            {t.client_designation}
                                        </p>
                                    </div>
                                    <Quote className="text-blue w-6 h-6 ml-auto" />
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>

            {/* Slider Dots */}
            <div className="mt-6 flex justify-center gap-3">
                {testimonials.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={`h-3 w-3 rounded-full transition-all ${
                            currentSlide === idx
                                ? "bg-blue-500 w-8"
                                : "border border-blue"
                        }`}
                    />
                ))}
            </div>
        </section>
    );
}
