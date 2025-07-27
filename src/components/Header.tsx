"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function FuturisticHeader() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("home");

    return (
        <nav className="bg-white/95 backdrop-blur-xl shadow-lg sticky top-0 z-50 border-b border-gray-200">
            {/* Subtle animated background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 via-purple-50/30 to-blue-50/50 animate-pulse"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="flex justify-between items-center h-20">
                    {/* Logo and Brand */}
                    <div className="flex items-center space-x-4 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                        <div className="relative">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                                <img
                                    src="logo.png"
                                    alt="Admission Wallah Logo"
                                    className="w-8 h-8 object-contain"
                                />
                            </div>
                        </div>

                        <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                            CSS
                        </div>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden lg:block">
                        <div className="ml-10 flex items-center space-x-2">
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
                                    onClick={() => {
                                        setActiveSection(item.name.toLowerCase());
                                    }}
                                >
                                    {item.name}
                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300 group-hover:w-full"></div>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CTA Button - Desktop */}
                    <div className="hidden lg:block">
                        <a
                            className="pt-4"
                            href="https://wa.me/918873204593?text=Hi%20Admission%20Wallah,%20I%20need%20guidance%20for%20college%20admission"
                            target="_blank"
                            rel="noopener noreferrer">
                            <button className="relative px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden group">
                                <span className="relative z-10">Get Started</span>
                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </button>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="relative p-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-700 hover:text-gray-900 transition-all duration-300 border border-gray-200"
                        >
                            <div className="w-6 h-6 relative">
                                <Menu className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-90 opacity-0' : 'rotate-0 opacity-100'}`} />
                                <X className={`absolute inset-0 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : 'rotate-90 opacity-0'}`} />
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden transition-all duration-500 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
                <div className="px-4 pt-2 pb-6 space-y-1 bg-white/98 backdrop-blur-xl border-t border-gray-200 shadow-lg">
                    {[
                        { name: 'Home', href: '#home', active: activeSection === 'home' },
                        { name: 'About', href: '#about', active: activeSection === 'about' },
                        { name: 'Services', href: '#services', active: activeSection === 'services' },
                        { name: 'Pricing', href: '#pricing', active: activeSection === 'pricing' },
                        { name: 'Contact', href: '#contact', active: activeSection === 'contact' }
                    ].map((item, index) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className={`block px-4 py-3 rounded-lg text-base font-medium transition-all duration-300 transform hover:translate-x-2 ${item.active
                                ? 'text-blue-600 bg-blue-50 border-l-4 border-blue-500 shadow-sm'
                                : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                                }`}
                            style={{ animationDelay: `${index * 100}ms` }}
                            onClick={() => { setIsMenuOpen(false); setActiveSection(item.name.toLowerCase()); }}
                        >
                            {item.name}
                        </a>
                    ))}

                    {/* Mobile CTA Button */}
                    <a
                        className="pt-4"
                        href="https://wa.me/918873204593?text=Hi%20Admission%20Wallah,%20I%20need%20guidance%20for%20college%20admission"
                        target="_blank"
                        rel="noopener noreferrer">
                        <button className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                            Get Started
                        </button>
                    </a>
                </div>
            </div>
        </nav>
    );
}