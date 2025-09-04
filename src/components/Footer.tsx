import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="relative">
            {/* Main footer container with blue background */}
            <div className="bg-[#1e40af] text-white relative overflow-hidden">

                {/* 1. Call to Action Section - Angled white container */}
                <div className="relative pb-20">
                    {/* Angled white background shape */}
                    <div
                        className="bg-gradient-to-bl from-slate-100 via-blue-50 to-indigo-50 relative px-6 py-12"
                        style={{
                            clipPath: 'polygon(0 0, 100% 0, 95% 85%, 5% 100%)'
                        }}
                    >
                        <div className="max-w-6xl mx-auto">
                            <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-8">
                                <div className="flex-1">
                                    <h2 className="text-4xl lg:text-5xl font-bold text-[#1e40af] mb-4">
                                        Get Started Today!
                                    </h2>
                                    <p className="text-gray-600 text-lg leading-relaxed max-w-2xl">
                                        Empower your business with intelligent accounting, GST training, and enterprise automation solutions.
                                        Transform your operations across Delhi NCR with our expert guidance.
                                    </p>
                                </div>
                                <div className="lg:ml-8">
                                    <Link href="/contacts" className="animate-bounce inline-block bg-[#10b981] hover:bg-[#059669] text-white px-12 py-4 rounded-lg font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                                        Contact Us
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 2. Information Section - Glassmorphic Cards */}
                <div className="relative -mt-16 px-6">
                    <div className="max-w-8xl mx-10">

                        {/* Company Info and Contact Cards */}
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-5">

                            {/* Company Info Card */}
                            <div className="lg:col-span-1 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-105">
                                <h3 className="text-2xl font-bold text-white mb-4">
                                    Compact Software & Services
                                </h3>
                                <p className="text-white/90 text-base leading-relaxed">
                                    Empowering businesses with intelligent accounting, GST training, and enterprise automation solutions across Delhi NCR.
                                </p>
                            </div>

                            {/* Contact Info Card */}
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-105">
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    Contact Us
                                </h4>
                                <div className="space-y-4">
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                        <div className="text-white/90">
                                            <a href="tel:+917872727171" className="font-medium hover:text-[#10b981] transition-colors duration-300 block">+91-7872727171</a>
                                            <a href="tel:+919810214216" className="font-medium hover:text-[#10b981] transition-colors duration-300 block">+91-9810214216</a>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <svg className="w-5 h-5 text-[#10b981] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <a href="mailto:sales@cssbusy.com" className="text-white/90 font-medium hover:text-[#10b981] transition-colors duration-300">sales@cssbusy.com</a>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <svg className="w-5 h-5 text-[#10b981] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                        <a
                                            href="https://maps.google.com/?q=258,%20Pocket-5,%20Sector-2,%20Rohini,%20Delhi-110088"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-white/90 font-medium hover:text-[#10b981] transition-colors duration-300"
                                        >
                                            258, Pocket-5, Sector-2, Rohini, Delhi-1100085
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Branches Card */}
                            <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 shadow-xl hover:scale-105">
                                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                                    <div className="w-8 h-8 bg-[#10b981] rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                        </svg>
                                    </div>
                                    Our Branches
                                </h4>
                                <div className="grid grid-cols-2 gap-3">
                                    {[
                                        { name: "Kundli", url: "https://www.google.com/maps/place/Kundli,+Haryana" },
                                        { name: "Jhajjar", url: "https://www.google.com/maps/place/Jhajjar,+Haryana" },
                                        { name: "Bahadurgarh", url: "https://www.google.com/maps/place/Bahadurgarh,+Haryana" },
                                        { name: "Jind", url: "https://www.google.com/maps/place/Jind,+Haryana" },
                                        { name: "Sonipat", url: "https://www.google.com/maps/place/Sonipat,+Haryana" },
                                        { name: "Rohtak", url: "https://www.google.com/maps/place/Rohtak,+Haryana" },
                                    ].map((location) => (
                                        <a
                                            key={location.name}
                                            href={location.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 hover:underline"
                                        >
                                            <div className="w-2 h-2 bg-[#10b981] rounded-full"></div>
                                            <span className="text-white/90 font-medium">{location.name}</span>
                                        </a>
                                    ))}
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* 3. Bottom Navigation & Branding */}
                <div className="border-t border-white/20 px-6 py-1">
                    <div className="max-w-6xl mx-auto">

                        {/* Horizontal Navigation Links */}
                        {/* <div className="flex flex-wrap justify-center gap-8 lg:gap-12 mb-12">
                            <Link href="/" className="text-white font-medium text-lg hover:text-[#10b981] transition-colors duration-300">
                                Home
                            </Link>
                            <Link href="/#services" className="text-white font-medium text-lg hover:text-[#10b981] transition-colors duration-300">
                                Services
                            </Link>
                            <Link href="/accounting" className="text-white font-medium text-lg hover:text-[#10b981] transition-colors duration-300">
                                Accounting
                            </Link>
                            <Link href="/#training" className="text-white font-medium text-lg hover:text-[#10b981] transition-colors duration-300">
                                GST Training
                            </Link>
                            <Link href="/automation" className="text-white font-medium text-lg hover:text-[#10b981] transition-colors duration-300">
                                Automation
                            </Link>
                            <Link href="/contacts" className="text-white font-medium text-lg hover:text-[#10b981] transition-colors duration-300">
                                Contact
                            </Link>
                        </div> */}

                        {/* Copyright - Center aligned */}
                        <div className="text-center mb-8">
                            <p className="text-gray-300 text-base">
                                © 2025 Compact Software & Services. All rights reserved.
                            </p>
                        </div>

                        {/* Social Media Icons - Right aligned */}
                        <div className="flex justify-center lg:justify-end">
                            <div className="flex items-center gap-4">
                                {/* Instagram */}
                                <Link
                                    href="https://www.instagram.com/softwarescompact/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 transition-all duration-300 group border border-white/20"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.35 3.608 1.325.975.975 1.263 2.242 1.325 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.35 2.633-1.325 3.608-.975.975-2.242 1.263-3.608 1.325-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.35-3.608-1.325-.975-.975-1.263-2.242-1.325-3.608C2.175 15.647 2.163 15.267 2.163 12s.012-3.584.07-4.85c.062-1.366.35-2.633 1.325-3.608.975-.975 2.242-1.263 3.608-1.325C8.416 2.175 8.796 2.163 12 2.163m0-2.163C8.741 0 8.332.012 7.052.07 5.775.127 4.635.443 3.678 1.4 2.72 2.357 2.404 3.497 2.347 4.774.289 7.052.277 7.462.277 12c0 4.538.012 4.948.07 6.228.057 1.277.373 2.417 1.33 3.374.957.957 2.097 1.273 3.374 1.33 1.28.058 1.689.07 6.229.07s4.949-.012 6.229-.07c1.277-.057 2.417-.373 3.374-1.33.957-.957 1.273-2.097 1.33-3.374.058-1.28.07-1.689.07-6.229s-.012-4.949-.07-6.229c-.057-1.277-.373-2.417-1.33-3.374-.957-.957-2.097-1.273-3.374-1.33C15.949.012 15.538 0 12 0z" />
                                        <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324m0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zM18.406 4.594a1.44 1.44 0 11-2.881 0 1.44 1.44 0 012.881 0z" />
                                    </svg>
                                </Link>

                                {/* Facebook */}
                                <Link
                                    href="https://www.facebook.com/profile.php?id=61554145097950"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-600 transition-all duration-300 group border border-white/20"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                    </svg>
                                </Link>

                                {/* YouTube */}
                                <Link
                                    href="https://youtube.com/@compactsoftwaresservices2001?si=xl6Qe4DrVDYKMFKG"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-red-600 transition-all duration-300 group border border-white/20"
                                >
                                    <svg
                                        className="w-7 h-7 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M23.498 6.186a2.974 2.974 0 00-2.092-2.103C19.414 3.5 12 3.5 12 3.5s-7.414 0-9.406.583A2.974 2.974 0 00.502 6.186C0 8.178 0 12 0 12s0 3.822.502 5.814a2.974 2.974 0 002.092 2.103C4.586 20.5 12 20.5 12 20.5s7.414 0 9.406-.583a2.974 2.974 0 002.092-2.103C24 15.822 24 12 24 12s0-3.822-.502-5.814zM9.75 15.5v-7l6 3.5-6 3.5z" />
                                    </svg>
                                </Link>

                                {/* WhatsApp */}
                                <Link
                                    href="https://wa.me/917872727171?text=Hello Compact Softwares & Services Team, I visited your website and would like to request a demo of your products."
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-[#25D366] transition-all duration-300 group border border-white/20"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
                                    </svg>
                                </Link>

                                {/* LinkedIn */}
                                <Link
                                    href="https://www.linkedin.com/company/compact-software-and-services/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center hover:bg-blue-800 transition-all duration-300 group border border-white/20"
                                >
                                    <svg
                                        className="w-6 h-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </Link>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;