"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";
import SplashButton from "./SplashButton";

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
                            About Compact Softwares & Services (CSS)
                        </span>
                        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-wide">
                            Welcome to Compact Softwares & Services
                        </h2>
                    </div>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                        Compact Softwares & Services (CSS) has been providing IT solutions for over <strong>29+ years</strong>, serving more than <strong>25,000+ customers</strong> across various industries.
                        With a strong network of <strong>50+ IT Channel Associates</strong> and <strong>100+ accounting professionals</strong>, we deliver quality solutions for businesses of every size.
                    </p>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                        We are an <strong>Authorized Channel Partner of BUSY Infotech Pvt. Ltd.</strong> since <strong>1996</strong> and have consistently ranked <strong>No.1 in sales performance</strong>.
                        Our clients range from local shopkeepers to large enterprises, and <strong>65% of our new leads</strong> come through referrals, reflecting our strong after-sales service.
                    </p>

                    <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-800">
                        {[
                            "29+ Years of Providing IT Solutions",
                            "25,000+ Customers Across Industries",
                            "100+ Certified Accounting Professionals",
                            "50+ IT Channel Associates",
                            "65% New Clients via Referrals"
                        ].map((point, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    <SplashButton name="Learn More About Us" href="#contacts" />
                </div>
            </div>
        </section>
    );
}
