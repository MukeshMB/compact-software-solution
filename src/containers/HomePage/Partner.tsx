'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Client from "./Client";

const logos = Array.from({ length: 6 }, (_, i) => `/partners/${i + 1}.${i <= 3 ? 'jpg' : 'png'}`);

export default function Partner() {
    const [cardWidth, setCardWidth] = useState(0);
    const [visibleCount, setVisibleCount] = useState(4); // default for large screens
    const [index, setIndex] = useState(0);
    const containerRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

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

    useEffect(() => {
        if (containerRef.current) {
            const containerWidth = containerRef.current.offsetWidth;
            setCardWidth(containerWidth / visibleCount);
        }
    }, [visibleCount]);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => prevIndex + 1);
        }, 2500);
        return () => clearInterval(interval);
    }, []);

    const allLogos = [...logos]; // duplicate for infinite scroll illusion
    const totalWidth = allLogos.length * cardWidth;
    const translateX = -(index * cardWidth) % totalWidth;

    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Our Partners
                </h2>

                <div
                    ref={containerRef}
                    className="relative overflow-hidden w-full"
                >
                    <div
                        ref={trackRef}
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
                                    alt={`Partner ${idx + 1}`}
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Client />
        </section>
    );
}
