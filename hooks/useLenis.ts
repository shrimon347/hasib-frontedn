"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // smoothness
            easing: (t: number) => t, // linear easing, you can customize
            smooth: true,
            direction: "vertical",
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // clean up
        };
    }, []);
};
