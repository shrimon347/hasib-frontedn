"use client";

import { useLenis } from "lenis/react";

export const useSmoothScroll = () => {
    const lenis = useLenis((lenis) => {});

    return lenis;
};
