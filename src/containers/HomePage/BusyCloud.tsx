'use client';

import { motion } from "framer-motion";
import ImageCarousel from "./CarouselCloud";

interface BusyCloudProps {
    imageUrl?: string;
}

export default function BusyCloud({ imageUrl }: BusyCloudProps) {
    return (
        <section className="relative w-full py-16 md:py-24 bg-gradient-to-br from-[#0a2a52] via-[#09356C] to-[#0a2a52] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-14">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="md:w-1/2 space-y-7 text-center md:text-left"
                    >
                        {/* Headline */}
                        <h2 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-tight">
                            India&apos;s Most Trusted <br />
                            <span className="bg-gradient-to-r from-[#38bdf8] to-[#00FF9F] bg-clip-text text-transparent">
                                Cloud Accounting Software
                            </span>
                        </h2>

                        {/* Sub-heading */}
                        <p className="text-lg sm:text-xl text-gray-300 font-medium italic">
                            Access | Manage | Grow – Anytime, Anywhere
                        </p>

                        {/* Bullet Points */}
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-200 text-base mt-6">
                            <li className="flex items-start gap-2">
                                <span className="text-[#00FF9F] text-lg">✔</span>
                                Robust security & data control
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00FF9F] text-lg">✔</span>
                                Seamless business management from anywhere
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00FF9F] text-lg">✔</span>
                                99% uptime with Azure powered infrastructure
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00FF9F] text-lg">✔</span>
                                Work from Home, Office, or On-the-Go
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00FF9F] text-lg">✔</span>
                                1-Click GST Filing & E-Way Bills
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00FF9F] text-lg">✔</span>
                                Multi-User Access with Custom Roles
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#00FF9F] text-lg">✔</span>
                                Auto Backup & Secured Data
                            </li>
                        </ul>

                        {/* Highlighted Line */}
                        <p className="mt-8 text-xl font-semibold text-[#00FF9F] tracking-wide">
                            🔒 100% Data Security
                        </p>
                    </motion.div>

                    {/* Image Carousel */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 w-full"
                    >
                        <ImageCarousel />
                    </motion.div>
                </div>
            </div>
        </section>

    );
}
