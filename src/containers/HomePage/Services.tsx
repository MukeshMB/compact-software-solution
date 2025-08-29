'use client';

import { ChevronRight } from "lucide-react";
import Link from "next/link";

type ServiceCategory = {
    title: string;
    icon: string;
    desc: string;
    href: string;
};

export default function Services() {
    // ✅ Core BUSY Services
    const busyServices: ServiceCategory[] = [
        {
            title: "Busy Online",
            desc: "Run your business anytime, anywhere with Busy Online cloud accounting software.",
            icon: "🌐",
            href: "/busy-online",
        },
        {
            title: "BUSY on Cloud",
            desc: "Access, manage, and grow your business from anywhere with BUSY Cloud.",
            icon: "☁️",
            href: "/busy-cloud",
        },
        {
            title: "BUSY Mobile App",
            desc: "Manage your business anytime, anywhere with the faster BUSY Mobile App.",
            icon: "📱",
            href: "/mobile-apps",
        },
        {
            title: "Busy Recomm",
            desc: "Your Complete Business Accounting Partner – BUSY Software",
            icon: "🤝",
            href: "/busy-recomm"
        },
        {
            title: "Busy Mandi",
            desc: "Busy for Mandi- Accounting made easy for mandi.",
            icon: "🌾",
            href: "/busy-mandi",
        },
    ];

    // ✅ BUSY Add-ons & Extensions
    const busyAddons: ServiceCategory[] = [
        {
            title: "Production ERP Solutions",
            desc: "Optimize your production workflow with BUSY’s ERP suite for efficiency and accuracy.",
            icon: "🏭",
            href: "/production-erp",
        },
        {
            title: "Payroll Management",
            desc: "Automate payroll operations, compliance, and employee communication with BUSY’s Payroll solution.",
            icon: "💼",
            href: "/payroll",
        },
        {
            title: "POS & Barcode Billing",
            desc: "Speed up sales with barcode-enabled billing systems for retail & warehouses.",
            icon: "🧾",
            href: "/pos",
        },
        {
            title: "E-Commerce Software",
            desc: "Run and manage your online store with integrated inventory, billing & dispatch.",
            icon: "🛒",
            href: "/ecommerce",
        },
        {
            title: "BUSY Add-ons & Automation",
            desc: "Enhance BUSY with modules like Payment Reminders, Automation & Reporting tools.",
            icon: "⚙️",
            href: "/busy-addons",
        },
        {
            title: "Kart Manager",
            desc: "Integrate e-commerce platforms with BUSY for automated order, returns, and inventory sync.",
            icon: "📦",
            href: "/kart-manager",
        },
        {
            title: "BowBi – Business Intelligence",
            desc: "Generate AI-powered business reports 10x faster with BowBi for BUSY.",
            icon: "📈",
            href: "/bowbi",
        },
        {
            title: "BUSY to Google",
            desc: "Sync BUSY reports to Google Sheets automatically with filters and customization.",
            icon: "🔗",
            href: "/busy-to-google",
        },
        {
            title: "Sales Force Automation (SFA)",
            desc: "Automate and manage your entire field sales operations with BUSY’s SFA Add-on.",
            icon: "🚀",
            href: "/sales-force",
        },
        {
            title: "Excellent DMS",
            desc: "Manage distributors, sales routes, and inventory digitally with Excellent DMS.",
            icon: "🗂️",
            href: "/excellent-dms",
        },
        {
            title: "Excellent KYC",
            desc: "Comprehensive KYC management with digital uploads, verification, and compliance.",
            icon: "🆔",
            href: "/excellent-kyc",
        },
        {
            title: "JobsBA",
            desc: "Specialized job portal for accounting professionals with employer and job seeker tools.",
            icon: "💼",
            href: "/jobs-ba",
        },
        {
            title: "Excellent Commerce",
            desc: "All-in-one platform for digital storefronts and customer experience management.",
            icon: "🏪",
            href: "/excellent-commerce",
        },
        {
            title: "Atithi",
            desc: "Catering software solution for event planners, catering companies, and hospitality.",
            icon: "🍽️",
            href: "/atithi",
        },
        {
            title: "attacho",
            desc: "Attach images and documents to BUSY transactions with this mobile-friendly add-on.",
            icon: "📎",
            href: "/attacho",
        },
        {
            title: "Ordering Automation",
            desc: "Live stock blocking and order automation solution for garment wholesalers.",
            icon: "📋",
            href: "/ordering-automation",
        },
        {
            title: "Vendor Portal",
            desc: "Empower vendors with login access, payments, stock, and sales order management.",
            icon: "🤝",
            href: "/vendor-portal",
        },
        {
            title: "Invoice Generation Tool",
            desc: "Automate attendance, meter, periodic, and rental-based invoicing.",
            icon: "🧾",
            href: "/invoice-generation-tool",
        },
        {
            title: "Optical Add-on",
            desc: "Specialized order and lens management solution for optical retailers and wholesalers.",
            icon: "👓",
            href: "/optical-addon",
        },
        {
            title: "Audit Trail Scrub",
            desc: "Maintain secure, compliant, and traceable logs with Audit Trail Scrub.",
            icon: "📝",
            href: "/audit-trail-scrub",
        },
        {
            title: "Mini Aadhat",
            desc: "BUSY add-on with advanced order booking, tracking, and calculation features.",
            icon: "📦",
            href: "/mini-aadhat",
        },
        {
            title: "Excellent Feedback",
            desc: "Collect and analyze event, customer, and daily task feedback with reports.",
            icon: "💬",
            href: "/excellent-feedback",
        },
        {
            title: "Excellent PMS",
            desc: "Platform for task, performance, and maintenance management.",
            icon: "📊",
            href: "/excellent-pms",
        },
    ];

    const cardBackgrounds = ["bg-white hover:bg-[#09356C]"];

    const renderServices = (services: ServiceCategory[]) => (
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
                <div
                    key={index}
                    className={`rounded-2xl p-6 text-left border transition-all duration-300 shadow-sm hover:scale-105 hover:shadow-xl hover:border-blue-400 border-gray-100 text-black hover:text-white ${cardBackgrounds[index % cardBackgrounds.length]}`}
                >
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-lg font-semibold">{service.title}</h3>
                    <p className="text-gray-400 hover:text-gray-300 text-sm mt-2">{service.desc}</p>
                    <Link
                        href={service.href}
                        className="flex items-center text-blue-600 font-medium transition-colors cursor-pointer mt-3"
                    >
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                </div>
            ))}
        </div>
    );

    return (
        <section id="services" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-6 sm:px-10 lg:px-24">
            <div className="max-w-7xl mx-auto text-center">
                <span className="text-[#00AA3E] font-semibold text-md uppercase tracking-wide">
                    Services
                </span>
                <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-[#00214D]">
                    Deals In
                </h2>
                <p className="mt-4 text-gray-600 text-base sm:text-lg max-w-3xl mx-auto">
                    From ERP solutions to cloud services and software training — CSS delivers modern, scalable business software backed by 29+ years of domain expertise.
                </p>
            </div>

            {/* BUSY Core Services */}
            <div className="mt-14">
                <h3 className="text-2xl font-bold text-[#00214D] mb-6">Busy Services</h3>
                {renderServices(busyServices)}
            </div>

            {/* BUSY Add-ons */}
            <div className="mt-20">
                <h3 className="text-2xl font-bold text-[#00214D] mb-6">Busy Add-ons</h3>
                {renderServices(busyAddons)}
            </div>
        </section>
    );
}
