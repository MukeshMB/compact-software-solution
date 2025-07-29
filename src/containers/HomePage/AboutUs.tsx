"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

const images = [
    "/images/client.jfif",
    "/images/team1.jpg",
    "/images/certificates.jpg",
];

export default function AboutUs() {
    const carouselRef = useRef<HTMLDivElement>(null);
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % images.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const container = carouselRef.current;
        if (container) {
            const scrollWidth = container.scrollWidth / images.length;
            container.scrollTo({
                left: scrollWidth * index,
                behavior: "smooth"
            });
        }
    }, [index]);

    return (
        <section id="about" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4 sm:px-8 lg:px-20">
            <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                {/* Image Carousel */}
                <div className="w-full h-72 sm:h-96 md:h-[30rem] lg:h-[34rem] overflow-hidden rounded-xl shadow-lg">
                    <div
                        ref={carouselRef}
                        className="flex w-full h-full transition-all duration-700 ease-in-out overflow-x-scroll scroll-smooth scrollbar-hide"
                    >
                        {images.map((src, i) => (
                            <img
                                key={i}
                                src={src}
                                alt={`About us ${i}`}
                                className="w-full flex-shrink-0 object-cover object-center h-full rounded-xl"
                                style={{ minWidth: "100%" }}
                            />
                        ))}
                    </div>
                </div>

                {/* Text content */}
                <div>
                    <div className="text-center md:text-left">
                        <span className="text-[#00AA3E] text-sm font-bold uppercase tracking-wide block">
                            About Us
                        </span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-wide">
                            Welcome to Compact Softwares & Services
                        </h2>
                    </div>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                        Compact Softwares & Services (CSS) has been a trusted name in IT solutions for over <strong>29+ years</strong>, proudly serving <strong>25,000+ clients</strong> across industries...
                    </p>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                        Since <strong>1996</strong>, we have been an <strong>Authorized Channel Partner of BUSY Infotech Pvt. Ltd.</strong>, consistently ranked as the <strong>No.1 performer</strong> in national sales...
                    </p>

                    <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-800">
                        {[
                            "29+ Years of Expertise in Business Software",
                            "25,000+ Clients Served",
                            "100+ Certified Accounting Professionals",
                            "65% Client Referrals Rate"
                        ].map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-8">
                        <Link
                            href="#contacts"
                            className="inline-block bg-[#00AA3E] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#009237] transition-all duration-300"
                        >
                            Learn More About Us
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
