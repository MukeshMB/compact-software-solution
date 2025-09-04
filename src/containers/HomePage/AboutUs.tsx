"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SplashButton from "./SplashButton";

const images = [
  "/images/begin.jpg",
  "/images/team2.jpg",
  "/images/congrats.jpg",
];

// Replace these with your uploaded icons (use actual paths)
const highlightPoints = [
  { icon: "/icons/experience.png", text: "Experience" },
  { icon: "/icons/innovation.png", text: "Innovation" },
  { icon: "/icons/hand.png", text: "Strong Support" },
  { icon: "/icons/star.png", text: "Customer Trust" },
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
        behavior: "smooth",
      });
    }
  }, [index]);

  return (
    <section
      id="about"
      className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4 sm:px-8 lg:px-20"
    >
      <div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

        {/* Left Side - Carousel */}
        <div className="w-full h-72 sm:h-96 md:h-[30rem] lg:h-[34rem] overflow-hidden">
          <div
            ref={carouselRef}
            className="flex w-full h-full transition-all duration-700 ease-in-out overflow-x-scroll scroll-smooth scrollbar-hide"
          >
            {images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`About us ${i}`}
                className="w-full flex-shrink-0 object-contain object-center h-full rounded-xl"
                style={{ minWidth: "100%", backgroundColor: "transparent" }}
              />
            ))}
          </div>
        </div>


        {/* Right Side - Content */}
        <div>
          <div className="text-center md:text-left">
            <span className="text-[#00AA3E] text-sm font-bold uppercase tracking-wide block">
              About Compact Softwares & Services (CSS)
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-wide">
              Welcome to Compact Softwares & Services
            </h2>
          </div>

          {/* Intro Paragraph */}
          <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
            It is our privilege to introduce <strong>Compact Softwares & Services (CSS)</strong>,
            a company engaged in providing IT sales and services for over <strong>29+ years</strong>.
            Today we stand with more than <strong>25,000+ satisfied customers</strong> across all industry verticals.
            A network of <strong>50+ dedicated IT Channel Associates</strong> and <strong>100+ accounting professionals</strong>
            help us deliver diverse business solutions. We are an <strong>Authorized Channel Partner of BUSY Infotech Pvt. Ltd.</strong>
            (BUSY – The Complete Business Accounting Software) since <strong>1996</strong>.
            We have consistently ranked <strong>No. 1 in sales performance</strong> right from the beginning.
            Team CSS is known among its customers for providing the latest technological solutions at affordable prices.
            Our customers range from small shopkeepers to large industries. We are proud that <strong>65% of our enquiries</strong>
            come from existing users – a true reflection of our strong after-sales service.
            We believe in building long-term relationships and becoming your trusted business growth partner.
          </p>

          {/* Keep your existing bullet list */}
          <h3 className="mt-8 text-xl sm:text-2xl text-blue-700">
            Why Choose Compact Software & Services?
          </h3>
          <ul className="mt-4 space-y-3 text-gray-800 text-sm sm:text-base">
            {[
              "29+ Years of Experience – We bring decades of expertise in IT and software solutions, ensuring trust, stability, and consistent service delivery.",
              "Authorized & Trusted Partner – Recognized as one of the most reliable and longstanding channel partners for BUSY Accounting Software and other IT solutions.",
              "Proven Track Record – Trusted by small retailers to large industries.",
              "End-to-End Business Solutions – From accounting, GST, and e-way bill to mobile apps, ERP, CRM, BI tools, and custom add-ons – we provide complete solutions under one roof.",
              "Customer-Centric Approach – Unlike many partners, we don’t just sell software. We provide consultation, training, and after-sales support so your team gets maximum value.",
              "Proven Support System – Dedicated support team with quick turnaround time, ensuring your business never faces downtime.",
              "Innovative Add-Ons & Integrations – We have developed exclusive add-ons like Collection Engine, KYC, DMS, Ordering App, Bow BI, etc., that help businesses grow faster and smarter.",
              "Strong Client Base & Trust – Serving 1,000+ happy customers across industries who rely on us for smooth and efficient operations.",
              "One-Stop Technology Partner – Beyond software, we provide customized IT services, automation, cloud hosting, and integration with third-party apps to ensure your business runs seamlessly.",
              "Affordable & Scalable Solutions – Offering the latest technological advancements at competitive pricing.",
            ].map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-5 h-5 mt-1 text-blue-600">✔</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>

          {/* Highlighted Motion Points (Icons + Motion + Highlight) */}
          <div className="mt-6 flex flex-col md:flex-row md:flex-wrap gap-6">
            {highlightPoints.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-center gap-3"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.3 }}
                whileHover={{
                  scale: 1.2, // Increase the hover scale
                  color: "#b91c1c",
                  transition: { duration: 0.2, ease: "easeOut" } // Faster transition
                }}
              >
                <img src={item.icon} alt={item.text} className="w-6 h-6" />
                <span className="font-semibold text-[#b91c1c]">{item.text}</span>
              </motion.div>
            ))}
          </div>



          <SplashButton name="Learn More About Us" href="#contacts" />

        </div>
      </div>
    </section>
  );
}
