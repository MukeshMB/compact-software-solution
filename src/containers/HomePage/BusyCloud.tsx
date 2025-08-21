'use client';

import { CloudUpload } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import ImageCarousel from "./CarouselCloud";

interface BusyCloudProps {
    imageUrl?: string;
}

export default function BusyCloud({ imageUrl }: BusyCloudProps) {
    return (
        <section className="relative w-full py-14 md:py-20 bg-[#09356C] text-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-8">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="md:w-2/3 space-y-6 text-center md:text-left"
                    >
                        <span className="text-[#00FF9F] text-xs sm:text-sm font-semibold uppercase tracking-wider">
                            Cloud Accounting
                        </span>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                            Switch to the Cloud <br />
                            <span className="text-[#38bdf8]">with Confidence</span>
                        </h2>

                        <p className="text-base text-gray-200 italic">
                            Anytime. Anywhere. Any Device.
                        </p>

                        <p className="text-sm sm:text-base text-gray-300 leading-relaxed max-w-xl mx-auto md:mx-0">
                            Access <strong>BUSY</strong> or <strong>Tally</strong> accounting software from anywhere,
                            on any device. Enjoy real-time sync, military-grade security, and full functionality — without compromise.
                        </p>
                    </motion.div>

                    <ImageCarousel />

                    {/* Image or Icon */}
                    {/* <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true }}
                        className="md:w-1/2 w-full flex justify-center"
                    >
                        <div className="relative group bg-gradient-to-br from-[#0ea5e9]/10 via-[#1e3a8a]/10 to-[#0ea5e9]/5 p-6 rounded-2xl shadow-xl backdrop-blur-md hover:scale-105 transition-transform duration-300">
                            <Image
                                src={imageUrl || "/images/cloud.png"}
                                alt="Cloud Illustration"
                                width={500}
                                height={500}
                                className="rounded-xl object-contain"
                            />

                            <CloudUpload className="w-10 h-10 text-blue-300 group-hover:text-white transition-colors duration-300 mt-5" />

                            <div className="absolute -inset-px rounded-xl group-hover:shadow-[0_0_25px_2px_#38bdf8] transition-all duration-300" />
                        </div>
                    </motion.div> */}
                </div>
            </div>
        </section>
    );
}
