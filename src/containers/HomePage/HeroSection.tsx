"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import SplashButton from "./SplashButton";
import Link from "next/link";
import BouncingSplashButton from "./BouncingSplashButton";

const slides = [
    {
        title: "29th Anniversary",
        description: "Delivering trusted IT services with innovation and excellence for over 29 years",
        image: "/images/anniversary.png"
    },
    {
        title: "Business Accounting Software",
        description: "Accounting Made Easy, Business Made Successful, Your Numbers, Your Success, Our Priority,Simplify Finances, Maximize Profits, and Accurate Accounting, Confident Decisions",
        image: "/images/accounting.png"
    },
    {
        title: "ERP",
        description: "Production Erp solutions Smart ERP for Smart Production. Plan, Track, and Optimize. All in One Integrated System.",
        image: "/images/erp.png"
    },
    {
        title: "Invoices",
        description: "Simplify Your Checkout Process. Barcode Billing Made Easy. Reliable POS for Every Business.",
        image: "/images/invoice.png"
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

    // style={{ backgroundImage: 'url("/images/bg.png")' }}

    return (
        <section id='home' className="w-full pt-20 relative min-h-[80vh] flex flex-col items-center justify-center overflow-hidden bg-cover bg-center bg-[#09356C]" style={{ backgroundImage: 'url("/images/banner3.jpg")' }}>
            <div className="absolute inset-0 bg-black/30 z-0" />

            <div className="relative z-10 container mx-auto px-4 py-12 flex flex-col lg:flex-row items-center justify-between gap-8">
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
                <div className="w-full lg:w-1/2 relative overflow-hidden h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute top-0 left-0 w-full h-full transition-all duration-700 ease-in-out
        ${index === current
                                    ? 'translate-x-0 opacity-100 z-20'
                                    : 'opacity-0 z-10 ' +
                                    (index < current
                                        ? 'translate-x-[-100%]'
                                        : 'translate-x-full')}
      `}
                        >
                            <Image
                                src={slide.image}
                                alt="Slide Image"
                                fill
                                style={{ objectFit: 'contain' }}
                                className="w-full h-full transition-transform duration-700 ease-in-out"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <BouncingSplashButton />
        </section>
    );
}
