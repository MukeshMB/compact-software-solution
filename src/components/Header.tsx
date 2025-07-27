"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

export default function FuturisticHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    return (
        <nav className="bg-white/95 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-gray-200">
            {/* Subtle animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-blue-50/50 animate-pulse"></div>

            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between items-center h-20">
                    {/* Left: Main Logo */}
                    <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <Image src="/icons/logo.png" alt="Main Logo" height={150} width={150} className="object-contain" />
                    </div>

                    {/* Center: Navigation Links */}
                    <div className="hidden lg:flex flex-1 justify-center">
                        <div className="flex items-center space-x-2">
                            {[
                                { name: 'Home', href: '#home', active: activeSection === 'home' },
                                { name: 'About', href: '#about', active: activeSection === 'about' },
                                { name: 'Services', href: '#services', active: activeSection === 'services' },
                                { name: 'Pricing', href: '#pricing', active: activeSection === 'pricing' },
                                { name: 'Contact', href: '#contact', active: activeSection === 'contact' }
                            ].map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    className={`relative px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 group ${item.active
                                        ? 'text-blue-600 bg-blue-50 shadow-sm'
                                        : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                        }`}
                                    onClick={() => setActiveSection(item.name.toLowerCase())}
                                >
                                    {item.name}
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right: Brand Image */}
                    <div className="flex items-center space-x-4">

                        {/* Brand Logo at Right */}
                        <Image
                            src="/icons/brand.jpg" // Replace with your actual brand image path
                            alt="Brand Logo"
                            height={100}
                            width={200}
                            className="object-contain"
                        />

                        {/* Mobile menu toggle */}
                        <div className="lg:hidden">
                            <button
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 border border-gray-200"
                            >
                                <div className="w-6 h-6 relative">
                                    <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                                    <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* ...Mobile Menu stays unchanged... */}
        </nav>

    );
}