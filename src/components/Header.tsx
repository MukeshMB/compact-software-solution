"use client";

import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const primaryServices = [
    {
        title: "BUSY Sales & Customization",
        desc: "From sales to setup, we provide full implementation, training, and custom module development for BUSY.",
        icon: "📊",
        href: "/busy-sales"
    },
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
        title: "POS & Barcode Billing",
        desc: "Speed up sales with barcode-enabled billing systems, ideal for retail & warehouses.",
        icon: "🧾",
        href: "/pos"
    },
    {
        title: "Mobile Applications",
        desc: "Stay connected on-the-go with mobile solutions for reporting, sales, and approvals.",
        icon: "📱",
        href: "/mobile-apps"
    },
    {
        title: "E-Commerce Software",
        desc: "Run and manage your online store with integrated inventory, billing & dispatch modules.",
        icon: "🛒",
        href: "/ecommerce"
    },
    {
        title: "BUSY Add-ons & Automation",
        desc: "Enhance BUSY with smart modules like Payment Reminders, WhatsApp Integration, Kart Manager, and more.",
        icon: "⚙️",
        href: "/busy-addons"
    }
];

const secondaryServices = [
    {
        title: "Database Hosting",
        icon: "🗄️",
        desc: "Secure and scalable database hosting tailored to BUSY and ERP applications.",
        href: "/database-hosting"
    },
    {
        title: "Data Recovery",
        icon: "💾",
        desc: "Recover critical business data with our expert-level data recovery services.",
        href: "/data-recovery"
    },
    {
        title: "Remote Desktop Services",
        icon: "🖥️",
        desc: "Access your business applications and data remotely with secure RDP setup.",
        href: "/rdp"
    },
    {
        title: "Antivirus Solutions",
        icon: "🛡️",
        desc: "Protect your systems with enterprise-grade antivirus and endpoint protection.",
        href: "/antivirus"
    },
    {
        title: "Busy Academy – Training Center",
        icon: "🎓",
        desc: "Certified training programs on BUSY Accounting Software for professionals & staff.",
        href: "/busy-academy"
    }
];

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Contacts', href: '/contacts' },
]

export default function FuturisticHeader({ activePage }: { activePage: string }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(activePage);
    const [showMobileServices, setShowMobileServices] = useState(false);


    return (
        <nav className="bg-white/95 backdrop-blur-xl shadow-md sticky top-0 z-50 border-b border-gray-200 h-[70px]">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-blue-50/50 animate-pulse -z-10"></div>
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
                                className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:text-blue-500 ${activeSection === item.name.toLowerCase() ? 'text-blue-600 bg-blue-50 shadow-sm' : 'text-gray-700 hover:bg-gray-100'}`}
                            >
                                {item.name}
                            </Link>
                        ))}

                        {/* Services Dropdown */}
                        <div className="relative group">
                            <div className="flex items-center">
                                <button
                                    className="px-4 py-2 rounded-md text-sm font-medium flex items-center gap-1 text-black hover:bg-gray-100 transition"
                                >
                                    Services <ChevronDown size={16} />
                                </button>
                            </div>

                            {/* Dropdown stays open on hover */}
                            <div
                                className="invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 absolute left-0 top-full mt-2 w-[600px] bg-white rounded-xl shadow-xl border border-gray-200 z-50"
                                onMouseEnter={(e) => e.currentTarget.classList.add("visible", "opacity-100", "scale-100")}
                                onMouseLeave={(e) => e.currentTarget.classList.remove("visible", "opacity-100", "scale-100")}
                            >
                                <div className="grid grid-cols-2 gap-4 p-4">
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
                        <div className="hidden sm:block">
                            <Image src="/icons/brand.jpg" alt="Brand Logo" width={120} height={70} className="object-contain" />
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
    );
}
