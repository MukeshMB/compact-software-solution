"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

const slides = [
    {
        title: "29th Anniversary",
        description: "Celebrating 29 years of trust, innovation, and excellence! We thank our clients, partners, and team members who made this journey possible. Here's to many more years of growth together.",
        image: "/images/anniversary.jpg"
    },
    {
        title: "Business Accounting Software",
        description: "Accounting Made Easy, Business Made Successful, Your Numbers, Your Success, Our Priority,Simplify Finances, Maximize Profits, and Accurate Accounting, Confident Decisions",
        image: "/images/accounting.jpg"
    },
    {
        title: "ERP",
        description: "Production Erp solutions Smart ERP for Smart Production. Plan, Track, and Optimize. All in One Integrated System.",
        image: "/images/erp.jpg"
    },
    {
        title: "Invoices",
        description: "Simplify Your Checkout Process. Barcode Billing Made Easy. Reliable POS for Every Business.",
        image: "/images/invoice.jpg"
    }
];

export default function Hero() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % slides.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id='home' className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-cover bg-center" style={{ backgroundImage: 'url("/images/banner.jpg")' }}>
            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
                {/* Text */}
                {/* Text */}
                <div className="w-full lg:w-1/2 relative h-[220px] md:h-[260px] lg:h-[280px] overflow-hidden">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={current}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.8, ease: "easeInOut" }}
                            className="absolute inset-0"
                        >
                            <motion.h1
                                initial={{ x: -30, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.1, duration: 0.6 }}
                                className="text-4xl md:text-6xl font-baloo font-bold text-white tracking-wide drop-shadow-[2px_2px_3px_rgba(0,0,0,0.3)] mb-4"
                            >
                                {slides[current].title}
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.3, duration: 0.6 }}
                                className="text-xl sm:text-2xl text-white/90"
                            >
                                {slides[current].description}
                            </motion.p>
                        </motion.div>
                    </AnimatePresence>
                </div>


                {/* Image */}
                <div className="w-full lg:w-1/2 relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-all duration-700 ease-in-out 
                                ${index === current ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}
                            `}
                        >
                            <Image
                                src={slide.image}
                                alt="Slide Image"
                                layout="fill"
                                objectFit="contain"
                                className="transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
