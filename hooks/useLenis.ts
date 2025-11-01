"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export const useLenis = () => {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,            // smoothness
      easing: (t: number) => t,  // linear easing
      orientation: "vertical",   // scroll direction
      gestureOrientation: "vertical",
      smoothWheel: true,         // enable smooth wheel
      smoothTouch: true,         // enable smooth touch
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
