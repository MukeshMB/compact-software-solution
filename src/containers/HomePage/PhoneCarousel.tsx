"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
    "/images/phone.png",
    "/images/phone1.png",
];

export default function PhoneCarousel() {
    const [index, setIndex] = useState(0);

    // Auto slide every 4s
    useEffect(() => {
        const timer = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => setIndex((prev) => (prev + 1) % images.length);
    const prevSlide = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

    return (
        <div className="w-full flex justify-center lg:justify-end">
            <div className="relative group w-[300px] h-[440px] sm:w-[350px] sm:h-[520px] overflow-hidden rounded-xl">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0"
                    >
                        <Image
                            src={images[index]}
                            alt="BUSY App Mobile UI"
                            fill
                            className="object-contain rounded-xl"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
