"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageDescription({ pageData }: { pageData: any }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!pageData.description || pageData.description.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % pageData.description.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [pageData.description]);

    return (
        <div className="h-full overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed"
                >
                    {pageData.description[currentIndex % pageData.description.length]}
                </motion.h1>
            </AnimatePresence>
        </div>
    );
}
