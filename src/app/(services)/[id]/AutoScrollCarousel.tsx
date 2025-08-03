"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

const AutoSlideCarousel = ({ pageData }: { pageData: any }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const currentIndex = useRef(0);

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        const slideInterval = setInterval(() => {
            const children = container.children;
            const child = children[currentIndex.current] as HTMLElement;

            if (child) {
                child.scrollIntoView({ behavior: "smooth", inline: "start", block: "nearest" });
            }

            currentIndex.current = (currentIndex.current + 1) % children.length;
        }, 3000); // Every 3 seconds

        return () => clearInterval(slideInterval);
    }, []);

    return (
        <div className="w-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div
                ref={scrollRef}
                className="flex w-full overflow-x-auto scroll-smooth scrollbar-hide gap-4 snap-x snap-mandatory"
            >
                {pageData.images.map((src: string, idx: number) => (
                    <div
                        key={idx}
                        className="flex-shrink-0 w-full max-w-[700px] max-h-[500px] relative overflow-hidden snap-start"
                    >
                        <Image
                            src={src}
                            alt={`${pageData.heading} image ${idx + 1}`}
                            width={800}
                            height={500}
                            className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoSlideCarousel;
