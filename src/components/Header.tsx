"use client";

import { useEffect, useState } from "react";
import { Menu, X, ChevronDown, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const busyServices = [
    {
        title: "BUSY on Cloud",
        desc: "Access your BUSY data securely from anywhere with our cloud-hosted platform.",
        icon: "☁️",
        href: "/busy-cloud"
    },
    {
        title: "Mobile Applications",
        desc: "Stay connected on-the-go with mobile solutions for reporting, sales, and approvals.",
        icon: "📱",
        href: "/mobile-apps"
    },
    {
        title: "Busy Online",
        desc: "Run your business anytime, anywhere with secure cloud-based accounting for SMBs.",
        icon: "🌐",
        href: "/busy-online"
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
        href: "/busy-mandi"
    }
];

const busyAddOns = [
    {
        title: "Production ERP Solutions",
        desc: "Optimize manufacturing & inventory with our tailor-made Production ERP systems.",
        icon: "🏭",
        href: "/production-erp"
    },
    {
        title: "Payroll Management",
        desc: "Automate salaries, taxes, and compliance using our intuitive payroll software.",
        icon: "💼",
        href: "/payroll"
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
    },
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
    }
];

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Job Portal', href: 'https://jobsba.com/REMP?PID=JBS20' },
    { name: 'Contacts', href: '/contacts' },
]

export default function FuturisticHeader({ activePage }: { activePage: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(activePage);
    const [showMobileServices, setShowMobileServices] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

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

    const handleDropdownMouseEnter = () => {
        if (dropdownTimeout) {
            clearTimeout(dropdownTimeout);
            setDropdownTimeout(null);
        }
        setIsDropdownOpen(true);
    };

    const handleDropdownMouseLeave = () => {
        const timeout = setTimeout(() => {
            setIsDropdownOpen(false);
        }, 200);
        setDropdownTimeout(timeout);
    };

    const handleDropdownClick = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdown = document.getElementById('services-dropdown');
            const button = document.getElementById('services-button');
            if (dropdown && button && !dropdown.contains(event.target as Node) && !button.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isDropdownOpen]);

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
                            <div className="relative">
                                <div className="flex items-center">
                                    <button
                                        id="services-button"
                                        onClick={handleDropdownClick}
                                        onMouseEnter={handleDropdownMouseEnter}
                                        className={`px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${scrolled ? 'text-gray-700' : 'text-white'} hover:text-blue-600 hover:bg-gray-100 transition-all duration-300 ${isDropdownOpen ? 'text-blue-600 bg-blue-50' : ''}`}
                                    >
                                        Services
                                        <ChevronDown
                                            size={16}
                                            className={`transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}
                                        />
                                    </button>
                                </div>

                                {/* Enhanced Dropdown with Categories */}
                                <div
                                    id="services-dropdown"
                                    onMouseEnter={handleDropdownMouseEnter}
                                    onMouseLeave={handleDropdownMouseLeave}
                                    className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[95vw] max-w-[1200px] bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-2xl border border-gray-200 z-50 overflow-hidden transition-all duration-300 ${isDropdownOpen
                                            ? 'visible opacity-100 scale-100 translate-y-0'
                                            : 'invisible opacity-0 scale-95 -translate-y-2'
                                        }`}
                                >
                                    {/* Gradient Header */}
                                    <div className="bg-[#09356C] px-6 py-4">
                                        <h3 className="text-white text-lg font-bold text-center">Our Services</h3>
                                    </div>

                                    <div className="flex flex-col lg:flex-row">
                                        {/* BUSY Services Section */}
                                        <div className="flex-1 p-6 border-r border-gray-200">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                                                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                                    <span className="text-2xl">🎯</span>
                                                    BUSY Services
                                                </h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                                {busyServices.map((service, index) => (
                                                    <Link
                                                        key={service.title}
                                                        href={service.href}
                                                        onClick={() => setIsDropdownOpen(false)}
                                                        className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-blue-50 hover:to-cyan-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-blue-200"
                                                        style={{ animationDelay: `${index * 50}ms` }}
                                                    >
                                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                            <span className="text-lg">{service.icon}</span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h5 className="text-sm font-semibold text-gray-800 group-hover/item:text-blue-600 transition-colors duration-300 flex items-center gap-1">
                                                                {service.title}
                                                                <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                                            </h5>
                                                            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{service.desc}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>

                                        {/* BUSY Add-ons Section */}
                                        <div className="flex-1 p-6">
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                                                <h4 className="text-lg font-bold text-gray-800 flex items-center gap-2">
                                                    <span className="text-2xl">🚀</span>
                                                    BUSY Add-ons
                                                </h4>
                                            </div>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
                                                {busyAddOns.map((addon, index) => (
                                                    <Link
                                                        key={addon.title}
                                                        href={addon.href}
                                                        onClick={() => setIsDropdownOpen(false)}
                                                        className="group/item flex items-start gap-3 p-3 rounded-xl hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:shadow-md transition-all duration-300 border border-transparent hover:border-purple-200"
                                                        style={{ animationDelay: `${index * 30}ms` }}
                                                    >
                                                        <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center group-hover/item:scale-110 transition-transform duration-300">
                                                            <span className="text-lg">{addon.icon}</span>
                                                        </div>
                                                        <div className="flex-1 min-w-0">
                                                            <h5 className="text-sm font-semibold text-gray-800 group-hover/item:text-purple-600 transition-colors duration-300 flex items-center gap-1">
                                                                {addon.title}
                                                                <ChevronRight size={14} className="opacity-0 group-hover/item:opacity-100 transition-opacity duration-300" />
                                                            </h5>
                                                            <p className="text-xs text-gray-600 mt-1 line-clamp-2">{addon.desc}</p>
                                                        </div>
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Footer Call-to-Action */}
                                    <div className="bg-gradient-to-r from-gray-50 to-blue-50 px-6 py-4 text-center border-t border-gray-200">
                                        <p className="text-sm text-gray-600 mb-2">Need help choosing the right service?</p>
                                        <Link
                                            href="/contacts"
                                            onClick={() => setIsDropdownOpen(false)}
                                            className="inline-flex items-center gap-2 px-4 py-2 bg-[#09356C] text-white text-sm font-medium rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                                        >
                                            Contact Us
                                            <ChevronRight size={16} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right */}
                        <div className="flex items-center space-x-4">
                            <div className="flex flex-col items-center">
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
                                <p className={`text-sm font-semibold ${scrolled ? 'text-gray-700' : 'text-white'} mt-1 text-center hidden sm:block`}>
                                    Authorized Channel Partner
                                </p>
                            </div>

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

                {/* Enhanced Mobile Menu */}
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
                            className={`w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 text-black shadow-sm bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200`}
                        >
                            Services {showMobileServices ? '▲' : '▼'}
                        </button>

                        {/* Mobile Services Dropdown */}
                        {showMobileServices && (
                            <div className="pl-2 pt-2 space-y-4 max-h-[50vh] overflow-y-auto pr-2 pb-5">
                                {/* BUSY Services Mobile */}
                                <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-lg p-3 border border-blue-200">
                                    <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                        <span className="text-lg">🎯</span>
                                        BUSY Services
                                    </h4>
                                    <div className="space-y-2">
                                        {busyServices.map((service) => (
                                            <Link
                                                key={service.title}
                                                href={service.href}
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setShowMobileServices(false);
                                                    setActiveSection("services");
                                                }}
                                                className="block bg-white rounded-md px-3 py-2 border border-blue-200 hover:bg-blue-50 transition"
                                            >
                                                <div className="flex gap-2 items-start">
                                                    <span className="text-lg">{service.icon}</span>
                                                    <div>
                                                        <h5 className="text-sm font-semibold text-black">{service.title}</h5>
                                                        <p className="text-xs text-gray-700">{service.desc}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>

                                {/* BUSY Add-ons Mobile */}
                                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-3 border border-purple-200">
                                    <h4 className="text-sm font-bold text-gray-800 mb-3 flex items-center gap-2">
                                        <span className="text-lg">🚀</span>
                                        BUSY Add-ons
                                    </h4>
                                    <div className="space-y-2 max-h-64 overflow-y-auto">
                                        {busyAddOns.map((addon) => (
                                            <Link
                                                key={addon.title}
                                                href={addon.href}
                                                onClick={() => {
                                                    setIsMenuOpen(false);
                                                    setShowMobileServices(false);
                                                    setActiveSection("services");
                                                }}
                                                className="block bg-white rounded-md px-3 py-2 border border-purple-200 hover:bg-purple-50 transition"
                                            >
                                                <div className="flex gap-2 items-start">
                                                    <span className="text-lg">{addon.icon}</span>
                                                    <div>
                                                        <h5 className="text-sm font-semibold text-black">{addon.title}</h5>
                                                        <p className="text-xs text-gray-700">{addon.desc}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>
        </header>
    );
}