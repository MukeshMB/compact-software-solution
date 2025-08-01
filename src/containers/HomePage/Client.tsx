'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const clientLogos = Array.from({ length: 37 }, (_, i) => `/clients/${i + 1}.jpg`);

export default function Clients() {
    const [cardWidth, setCardWidth] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4); // default
    const [index, setIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);

    // Set visible cards based on screen size
    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setVisibleCount(2);
            } else if (width < 1024) {
                setVisibleCount(3);
            } else {
                setVisibleCount(4);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Set card width after layout
    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            setCardWidth(containerWidth / visibleCount);
        }
    }, [visibleCount]);

    // Infinite scrolling
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => prev + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const allLogos = [...clientLogos, ...clientLogos]; // duplicated for loop illusion
    const totalWidth = allLogos.length * cardWidth;
    const translateX = -(index * cardWidth) % totalWidth;

    return (
        <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-bold text-gray-800 mb-12 tracking-tight">
                    Our Clients
                </h2>

                <div
                    ref={containerRef}
                    className="relative overflow-hidden w-full"
                >
                    <div
                        className="flex transition-transform duration-700 ease-in-out"
                        style={{
                            transform: `translateX(${translateX}px)`,
                            width: `${totalWidth}px`,
                        }}
                    >
                        {allLogos.map((logo, idx) => (
                            <div
                                key={idx}
                                className="relative h-16 flex-shrink-0"
                                style={{ width: `${cardWidth}px` }}
                            >
                                <Image
                                    src={logo}
                                    alt={`Client ${idx + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
