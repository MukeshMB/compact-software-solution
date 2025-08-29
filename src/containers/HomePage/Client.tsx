'use client';

import { useState, useRef, useEffect } from "react";
import Image from "next/image";

const clientLogos = Array.from({ length: 37 }, (_, i) => `/clients/${i + 1}.jpg`);
const COLLAPSE_SCROLL_DELAY_MS = 100; // adjust if needed

export default function Clients() {
    const [showAll, setShowAll] = useState(false);
    const buttonRef = useRef<HTMLDivElement>(null);
    const scrollTimeoutRef = useRef<number | null>(null);

    useEffect(() => {
        return () => {
            if (scrollTimeoutRef.current) {
                clearTimeout(scrollTimeoutRef.current);
            }
        };
    }, []);

    const handleToggle = () => {
        if (showAll) {
            // Collapsing: first hide, then scroll after a delay
            setShowAll(false);
            if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
            scrollTimeoutRef.current = window.setTimeout(() => {
                buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
            }, COLLAPSE_SCROLL_DELAY_MS);
        } else {
            // Expanding: just show all
            setShowAll(true);
        }
    };

    const visibleLogos = showAll ? clientLogos : clientLogos.slice(0, 4);

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 tracking-tight">
                    Our Clients
                </h2>

                {/* Clients Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 place-items-center">
                    {visibleLogos.map((logo, idx) => (
                        <div
                            key={idx}
                            className="relative h-20 w-32 flex items-center justify-center bg-white shadow-md rounded-lg p-2 hover:scale-105 transition-transform"
                        >
                            <Image
                                src={logo}
                                alt={`Client ${idx + 1}`}
                                fill
                                className="object-contain p-2"
                            />
                        </div>
                    ))}
                </div>

                {/* Show More / Less Button */}
                <div className="mt-10" ref={buttonRef}>
                    <button
                        onClick={handleToggle}
                        className="px-6 py-3 text-white bg-green-500 rounded-full font-semibold shadow-lg hover:bg-green-600 focus:outline-none animate-bounce"
                    >
                        {showAll ? "View Less" : "View More"}
                    </button>
                </div>
            </div>
        </section>
    );
}
