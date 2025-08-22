"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import BouncingSplashButton from "./BouncingSplashButton";

const slides = [
    {
        title: "Business Accounting Software",
        description: "Accounting Made Easy, Business Made Successful, Your Numbers, Your Success, Our Priority,Simplify Finances, Maximize Profits, and Accurate Accounting, Confident Decisions",
        images: ["/images/accounting.png", "/images/busy-recom.png", "/images/busy-mobile.png", "/images/busy-online.png"]
    },
    {
        title: "Busy",
        description: "Spend Less, Achieve More — The Smart Way to Grow Your Business with Maximum Efficiency and Minimum Costs.",
        images: ["/images/busybacht.png"]
    },
    {
        title: "ERP",
        description: "Excellent ERP system can provide industries with increased operational efficiency, better data management, improved collaboration, enhanced customer satisfaction, compliance adherence, scalability, and informed decision-making.",
        images: ["/images/erp2.png"]
    },
    // {
    //     title: "Invoices",
    //     description: "Simplify Your Checkout Process. Barcode Billing Made Easy. Reliable POS for Every Business.",
    //     images: ["/images/invoice.png"]
    // },
    {
        title: "29+ Years of Trust, Excellence, and Service",
        description: "Committed to excellence in IT services through 29 years of innovation and trust",
        images: ["/images/29year.png"]
    },
];

export default function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const imgCount = slides[currentSlide].images.length;
            if (currentImage < imgCount - 1) {
                setCurrentImage(prev => prev + 1);
            } else {
                setCurrentSlide(prev => (prev + 1) % slides.length);
                setCurrentImage(0);
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [currentSlide, currentImage]);

    return (
        <section
            id="home"
            className="w-full pt-20 relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-[#09356C]"
            style={{ backgroundImage: 'url("/images/banner5.png")' }}
        >
            <div className="absolute inset-0 bg-black/30 z-0" />

            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">

                {/* Text */}
                <div className="w-full lg:w-1/2 relative min-h-[220px] md:min-h-[260px] lg:min-h-[280px] h-auto overflow-visible">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${currentSlide}`}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute md:relative inset-0"
                        >
                            <motion.h1
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                exit={{ x: 30, opacity: 0 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="text-3xl sm:text-4xl md:text-6xl font-baloo font-bold text-white tracking-wide drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] mb-4 text-center md:text-left px-2"
                            >
                                {slides[currentSlide].title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-lg sm:text-xl md:text-2xl text-white/90 text-center md:text-left px-2"
                            >
                                {slides[currentSlide].description}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>


                {/* Images */}
                <div className="w-full lg:w-1/2 relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={`${currentSlide}-${currentImage}`}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute top-0 left-0 w-full h-full"
                        >
                            <Image
                                src={slides[currentSlide].images[currentImage]}
                                alt="Slide Image"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="w-full h-full"
                            />
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>

            <BouncingSplashButton />
        </section>
    );
}
