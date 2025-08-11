"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function PageHeading({ pageData }: { pageData: any }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!pageData.subheading || pageData.subheading.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % pageData.subheading.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [pageData.subheading]);

    return (
        <div className="h-full overflow-hidden flex items-center">
            <AnimatePresence mode="wait">
                <motion.h1
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="mt-2 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-wide"
                >
                    {pageData.subheading[currentIndex % pageData.subheading.length]}
                </motion.h1>
            </AnimatePresence>
        </div>
    );
}
