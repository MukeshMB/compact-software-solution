"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
    "/images/cloud3.jpg",
];

export default function AutoCarousel() {
    const [index, setIndex] = useState(0);

    // Auto scroll logic
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000); // 3s delay
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="w-full flex justify-center px-4">
            <div className="relative w-full max-w-2xl aspect-[3/2] overflow-hidden  p-4 sm:p-6">
                <motion.div
                    key={index}
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: -100, opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="w-full h-full flex items-center justify-center"
                >
                    <Image
                        src={images[index]}
                        alt="Carousel Image"
                        fill
                        className="object-contain rounded-xl"
                        sizes="(max-width: 768px) 100vw, 600px"
                    />
                </motion.div>
            </div>
        </div>
    );
}
