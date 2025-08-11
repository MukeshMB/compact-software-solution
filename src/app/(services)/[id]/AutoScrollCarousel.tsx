"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const AutoSlideCarousel = ({ pageData }: { pageData: any }) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [direction, setDirection] = useState(1); // 1 = forward, -1 = backward

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                let next = (prev + direction) % pageData.images.length;

                if (next >= pageData.images.length - 1) {
                    setDirection(-1);
                } else if (next <= 0) {
                    setDirection(1);
                }

                return next;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, [direction, pageData.images.length]);

    return (
        <div className="w-full overflow-hidden transform hover:scale-105 transition-transform duration-300">
            <div className="relative w-full max-w-[700px] h-[500px] mx-auto">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentImage}
                        initial={{ opacity: 0, x: direction === 1 ? 50 : -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: direction === 1 ? -50 : 50 }}
                        transition={{ duration: 0.6, ease: "easeInOut" }}
                        className="absolute top-0 left-0 w-full h-full"
                    >
                        <Image
                            src={pageData.images[currentImage]}
                            alt={`${pageData.heading} image ${currentImage + 1}`}
                            fill
                            style={{ objectFit: "contain" }}
                            className="rounded-xl"
                        />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
};

export default AutoSlideCarousel;
