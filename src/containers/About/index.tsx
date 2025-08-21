'use client';

import Link from "next/link";
import { CheckCircle } from "lucide-react";
import { useRef, useState, useEffect } from "react";

const images = [
  "/images/client.jfif",
  "/images/team1.jpg",
  "/images/certificates.jpg",
];

export default function About() {
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
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <main className="h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-20">
      {/* Hero Section */}
      <div className="relative pt-20 px-4 text-center bg-[#09356C] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>

        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            About Us
          </h1>
          <p className="text-base md:text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Welcome to Compact Softwares & Services (CSS) – your trusted partner in IT sales and services since 1996.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center pt-14 px-6 lg:px-20">
        {/* Image Carousel */}
        <div className="relative w-full h-72 sm:h-96 md:h-[30rem] lg:h-[34rem] overflow-hidden rounded-2xl shadow-2xl">
          <div
            ref={carouselRef}
            className="flex w-full h-full transition-all duration-700 ease-in-out overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`About us ${i}`}
                className="w-full flex-shrink-0 object-cover object-center h-full rounded-2xl"
                style={{ minWidth: "100%" }}
              />
            ))}
          </div>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, i) => (
              <span
                key={i}
                className={`h-2 w-2 rounded-full transition-all ${
                  i === index ? "bg-blue-600 w-4" : "bg-gray-300"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Text Section */}
        <div className="text-center md:text-left">
          <span className="text-[#00AA3E] text-sm font-bold uppercase tracking-wide">
            About Compact Softwares & Services (CSS)
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Welcome to Compact Softwares & Services
          </h2>

          {/* Intro Paragraph */}
          <p className="mt-6 text-gray-700 text-base sm:text-lg leading-relaxed">
            It is our privilege to introduce <strong>Compact Softwares & Services (CSS)</strong>, 
            a company engaged in providing IT sales and services for over <strong>29+ years</strong>. 
            Today we proudly serve more than <strong>25,000+ satisfied customers</strong> across diverse industries.
          </p>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            Backed by a strong network of <strong>50+ dedicated IT Channel Associates</strong> and 
            <strong> 100+ accounting professionals</strong>, CSS has been an <strong>Authorized Channel Partner of BUSY Infotech Pvt. Ltd.</strong> 
            since <strong>1996</strong>. We have consistently ranked <strong>No.1 in sales performance</strong> since our inception.
          </p>
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            With <strong>65% of our enquiries coming from existing customers</strong>, 
            we are proud of our strong after-sales support. From small shopkeepers to large industries, 
            CSS is committed to delivering affordable, innovative, and scalable technology solutions tailored to your business.
          </p>

          {/* Why Choose Us */}
          <h3 className="mt-10 text-xl sm:text-2xl font-bold text-blue-700 relative inline-block">
            Why Choose Compact Software & Services?
            <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-blue-600 to-blue-800 rounded-full"></span>
          </h3>

          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-5 text-gray-800 text-sm sm:text-base">
            {[
              "29+ Years of Experience in IT & Software Solutions",
              "Authorized & Trusted Partner for BUSY Software",
              "25,000+ Clients across industries",
              "Strong Network of 50+ IT Associates",
              "100+ Certified Accounting Professionals",
              "65% Enquiries from Client Referrals",
              "Exclusive Add-ons: Collection Engine, KYC, DMS, Ordering App, Bow BI",
              "Trusted by businesses from small retailers to large industries",
              "One-Stop Partner for ERP, CRM, BI tools, Cloud & Integrations",
              "Affordable & Scalable Solutions with Dedicated Support",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <Link
              href="#contacts"
              className="inline-block bg-[#00AA3E] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#009237] transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
