"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import * as React from "react";

interface CaseStudy {
    id: number;
    title: string;
    description: string;
    image: string;
    buttonText?: string;
    link?: string;
}

interface CaseStudySliderProps {
    studies: CaseStudy[];
    className?: string;
}

export function CaseStudySlider({ studies, className }: CaseStudySliderProps) {
    const [currentSlide, setCurrentSlide] = React.useState(0);
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        loop: true,
        mode: "snap",
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        slides: { perView: 1, spacing: 20 },
    });

    // Autoplay loop: advance slide every X ms, pause on hover
    const timerRef = React.useRef<number | null>(null);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        // clear any existing timer
        if (timerRef.current) {
            clearInterval(timerRef.current);
            timerRef.current = null;
        }

        if (!instanceRef.current) return;

        // start autoplay
        timerRef.current = window.setInterval(() => {
            if (!isPaused) {
                instanceRef.current?.next();
            }
        }, 4000); // change interval as needed

        return () => {
            if (timerRef.current) {
                clearInterval(timerRef.current);
                timerRef.current = null;
            }
        };
    }, [instanceRef, isPaused]);

    return (
        <div
            className={cn("relative ", className)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <div ref={sliderRef} className="keen-slider">
                {studies.map((item) => (
                    <div
                        key={item.id}
                        className="keen-slider__slide flex flex-col md:flex-row items-center justify-between gap-8 bg-blue/10 border border-blue/40  p-6 md:p-10 rounded-2xl"
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2 flex justify-center">
                            <div className="relative w-full h-64 md:h-80 rounded-xl overflow-hidden">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full md:w-1/2 space-y-5">
                            <h2 className="text-2xl font-semibold text-white">
                                {item.title}
                            </h2>
                            <p className="text-gray-400 leading-relaxed">
                                {item.description}
                            </p>
                            {item.link && (
                                <Button
                                    asChild
                                    className="rounded-3xl px-8 py-5 bg-blue border border-transparent mt-8 text-white font-semibold transition-all duration-300 ease-out hover:border-blue hover:bg-transparent hover:shadow-[0_0_25px_rgba(59,130,246,0.5)] focus:ring-2 focus:ring-blue focus:ring-offset-2"
                                >
                                    <a href={item.link}>
                                        {item.buttonText || "View Details"}
                                    </a>
                                </Button>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {/* Dots */}
            <div className="flex justify-center mt-6 gap-2">
                {studies.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => instanceRef.current?.moveToIdx(idx)}
                        className={cn(
                            currentSlide === idx
                                ? "bg-blue w-8 h-3 rounded-full transition-all"
                                : "border-blue border rounded-full w-3 h-3"
                        )}
                    />
                ))}
            </div>
        </div>
    );
}
