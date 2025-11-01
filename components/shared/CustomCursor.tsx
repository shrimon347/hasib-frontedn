"use client";
import { useEffect, useRef } from "react";

const CustomCursor = () => {
    const cursorRef = useRef<HTMLDivElement>(null);
    const pos = useRef({ x: 0, y: 0 });
    const trailing = useRef({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            pos.current.x = e.clientX;
            pos.current.y = e.clientY;
        };

        const follow = () => {
            trailing.current.x += (pos.current.x - trailing.current.x) * 0.15;
            trailing.current.y += (pos.current.y - trailing.current.y) * 0.15;

            if (cursorRef.current) {
                cursorRef.current.style.transform = `translate3d(${
                    trailing.current.x - 20
                }px, ${trailing.current.y - 20}px, 0)`;
            }

            requestAnimationFrame(follow);
        };

        window.addEventListener("mousemove", handleMouseMove);
        requestAnimationFrame(follow);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-10 h-10 border-2 border-blue rounded-full pointer-events-none z-50 flex items-center justify-center"
        >
            {/* Dot in the center */}
            <div className="w-2 h-2 bg-blue rounded-full" />
        </div>
    );
};

export default CustomCursor;
