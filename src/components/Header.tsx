"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const primaryServices = [
    {
        title: "Production ERP Solutions",
        desc: "Optimize manufacturing & inventory with our tailor-made Production ERP systems.",
        icon: "🏭",
        href: "/production-erp"
    },
    {
        title: "BUSY on Cloud",
        desc: "Access your BUSY data securely from anywhere with our cloud-hosted platform.",
        icon: "☁️",
        href: "/busy-cloud"
    },
    {
        title: "Payroll Management",
        desc: "Automate salaries, taxes, and compliance using our intuitive payroll software.",
        icon: "💼",
        href: "/payroll"
    },
    {
        title: "Mobile Applications",
        desc: "Stay connected on-the-go with mobile solutions for reporting, sales, and approvals.",
        icon: "📱",
        href: "/mobile-apps"
    },
    {
        title: "BUSY Add-ons & Automation",
        desc: "Enhance BUSY with smart modules like Payment Reminders, WhatsApp Integration, Kart Manager, and more.",
        icon: "⚙️",
        href: "/busy-addons"
    },
    {
        title: "Kart Manager – E-Commerce Integration",
        desc: "Sync your online store with BUSY for seamless order, inventory, and return management.",
        icon: "📦",
        href: "/kart-manager"
    },
    {
        title: "BowBi – Business Intelligence",
        desc: "Generate AI-powered reports 10X faster with smart dashboards and real-time insights.",
        icon: "📈",
        href: "/bowbi"
    },
    {
        title: "Busy to Google",
        desc: "Export 50+ BUSY reports to Google Sheets automatically with filter-based syncing.",
        icon: "📝",
        href: "/busy-to-google"
    },
    {
        title: "Sales Force Automation",
        desc: "Empower your field sales team with order apps, route planning, and sales tracking integrated with BUSY.",
        icon: "🚶‍♂️",
        href: "/sales-force"
    }
];

const secondaryServices = [
    {
        title: "Excellent DMS",
        desc: "Manage distributors, retailers, sales teams, and secondary sales with GPS tracking and mobile order booking.",
        icon: "📦",
        href: "/excellent-dms"
    },
    {
        title: "Excellent KYC",
        desc: "Complete multi-entity KYC with document uploads, admin verification, and compliance-ready processes.",
        icon: "🪪",
        href: "/excellent-kyc"
    },
    {
        title: "JobsBA",
        desc: "Job portal tailored for accounting professionals, employers, and freelancers with dedicated dashboards.",
        icon: "💼",
        href: "/jobs-ba"
    },
    {
        title: "Excellent Commerce",
        desc: "All-in-one digital storefront with product, order, and customer management plus BUSY integration.",
        icon: "🛒",
        href: "/excellent-commerce"
    },
    {
        title: "Atithi Catering Software",
        desc: "Catering and event management platform for service providers and multi-location operations.",
        icon: "🍽️",
        href: "/atithi"
    },
    {
        title: "Attacho",
        desc: "Attach images and PDFs to BUSY transactions via mobile with seamless integration.",
        icon: "📎",
        href: "/attacho"
    },
    {
        title: "Ordering Automation",
        desc: "Live stock blocking and order management for garment wholesalers and multi-channel retailers.",
        icon: "👕",
        href: "/ordering-automation"
    },
    {
        title: "Vendor Portal",
        desc: "Vendor login system with stock status, outstanding payments, and barcode generation.",
        icon: "🏷️",
        href: "/vendor-portal"
    },
    {
        title: "Invoice Generation Tool",
        desc: "Automated invoicing for attendance, meter reading, contracts, and recurring rentals.",
        icon: "🧾",
        href: "/invoice-generation-tool"
    },
    {
        title: "Optical Add-on",
        desc: "Specialized lens-wise order and inventory management for optical retailers and suppliers.",
        icon: "👓",
        href: "/optical-addon"
    },
    {
        title: "Audit Trail Scrub",
        desc: "Secure, traceable BUSY logs with compliance-friendly audit trail maintenance.",
        icon: "🔍",
        href: "/audit-trail-scrub"
    },
    {
        title: "Mini Aadhat",
        desc: "BUSY add-on with order booking, tracking, interest calculation, and mobile app features.",
        icon: "📱",
        href: "/mini-aadhat"
    },
    {
        title: "Excellent Feedback",
        desc: "Collect and analyze customer, guest, and event feedback with location-wise reporting.",
        icon: "🗣️",
        href: "/excellent-feedback"
    },
    {
        title: "Excellent PMS",
        desc: "Manage tasks, performance, and maintenance for SMEs, HR teams, and project managers.",
        icon: "🛠️",
        href: "/excellent-pms"
    },
];


const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Job Portal', href: 'https://busy.in' },
    { name: 'Contacts', href: '/contacts' },
]

export default function FuturisticHeader({ activePage }: { activePage: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(activePage);
    const [showMobileServices, setShowMobileServices] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    useEffect(() => {
        setScrolled(window.scrollY > 20);
    }, []);


    return (
        <header className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-xl shadow-md border-gray-200 text-black' : 'bg-transparent text-white'}`}>
            <nav>
                <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="flex justify-between items-center h-[72px]">
                        {/* Logo */}
                        <Link href={"/"} className="flex items-center cursor-pointer" onClick={() => setActiveSection("home")} >
                            <Image src="/icons/logo.png" alt="Main Logo" width={120} height={70} className="object-contain" />
                        </Link>

                        {/* Center Nav */}
                        <div className="hidden lg:flex flex-1 justify-center items-center space-x-3">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setActiveSection(item.name.toLowerCase())}
                                    target={item.name === "Job Portal" ? "_blank" : undefined}
                                    rel={item.name === "Job Portal" ? "noopener noreferrer" : undefined}
                                    className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-blue-500 ${activeSection === item.name.toLowerCase()
                                        ? "text-blue-600 bg-blue-50 shadow-sm"
                                        : `${scrolled ? "text-gray-700" : "text-white"} hover:bg-gray-100`
                                        }`}
                                >
                                    {item.name}
                                </Link>

                            ))}

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <div className="flex items-center">
                                    <button
                                        className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 hover:bg-gray-100 transition`}
                                    >
                                        Services <ChevronDown size={16} />
                                    </button>
                                </div>

                                {/* Dropdown stays open on hover */}
                                <div
                                    className="invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[95vw] max-w-[1000px] bg-white rounded-xl shadow-xl border border-gray-200 z-50"
                                    onMouseEnter={(e) => e.currentTarget.classList.add("visible", "opacity-100", "scale-100")}
                                    onMouseLeave={(e) => e.currentTarget.classList.remove("visible", "opacity-100", "scale-100")}
                                >
                                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                                        {[...primaryServices, ...secondaryServices].map((s) => (
                                            <Link
                                                key={s.title}
                                                href={s.href}
                                                className="flex items-start gap-3 text-black hover:text-blue-400 hover:bg-gray-100 p-2 rounded-lg transition"
                                            >
                                                <span className="text-xl">{s.icon}</span>
                                                <div>
                                                    <h4 className="text-sm font-semibold">{s.title}</h4>
                                                    <p className="text-xs text-neutral-700">{s.desc}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>


                        </div>

                        {/* Right */}
                        <div className="flex items-center space-x-4">
                            <Link
                                href="https://busy.in/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hidden sm:block"
                            >
                                <Image
                                    src="/icons/brand.jpg"
                                    alt="Brand Logo"
                                    width={120}
                                    height={70}
                                    className="object-contain"
                                />
                            </Link>

                            {/* Mobile Toggle */}
                            <div className="lg:hidden">
                                <button
                                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                                    className="p-2 rounded-xl bg-gradient-to-tr from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 active:scale-95 text-white shadow-lg transition-all duration-300"
                                >
                                    <div className="w-6 h-6 relative">
                                        <Menu
                                            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'
                                                }`}
                                        />
                                        <X
                                            className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'
                                                }`}
                                        />
                                    </div>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-[90vh] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                    <div className="px-4 pt-2 pb-6 space-y-1 bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-lg">

                        {/* Static Links */}
                        {navLinks.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => {
                                    setIsMenuOpen(false);
                                    setActiveSection(item.name.toLowerCase());
                                    setShowMobileServices(false);
                                }}
                                className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 text-black ${activeSection === item.name.toLowerCase()
                                    ? 'bg-blue-50 border-l-4 border-blue-500 shadow-sm'
                                    : 'hover:bg-gray-50'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Services Toggle */}
                        <button
                            onClick={() => setShowMobileServices(!showMobileServices)}
                            className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 text-black shadow-sm`}
                        >
                            Services {showMobileServices ? '▲' : '▼'}
                        </button>

                        {/* Mobile Services Dropdown */}
                        {showMobileServices && (
                            <div className="pl-2 pt-2 space-y-3 max-h-[50vh] overflow-y-auto pr-2 pb-5">
                                {[...primaryServices, ...secondaryServices].map((s) => (
                                    <Link
                                        key={s.title}
                                        href={s.href}
                                        onClick={() => {
                                            setIsMenuOpen(false);
                                            setShowMobileServices(false);
                                            setActiveSection("services");
                                        }}
                                        className="block bg-white rounded-md px-3 py-2 border border-gray-200 hover:bg-gray-50 transition"
                                    >
                                        <div className="flex gap-2 items-start">
                                            <span className="text-xl">{s.icon}</span>
                                            <div>
                                                <h4 className="text-sm font-semibold text-black">{s.title}</h4>
                                                <p className="text-xs text-neutral-700">{s.desc}</p>
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}
