"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export const useLenis = () => {
    useEffect(() => {
        const lenis = new Lenis({
            duration: 1.2, // smoothness
            easing: (t: number) => t, // linear easing
            orientation: "vertical", // scroll direction
            gestureOrientation: "vertical",
            smooth: true, // use `smooth` instead of smoothWheel/smoothTouch
        });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy(); // cleanup
        };
    }, []);
};
