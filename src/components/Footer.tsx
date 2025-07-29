// components/Footer.tsx

"use client";

import { Mail, Phone, MapPin, LocateIcon } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-12 pb-6 px-6 md:px-20 shadow-[0_-2px_12px_rgba(255,255,255,0.05)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {/* Logo or About */}
                <div>
                    <h2 className="text-2xl font-bold mb-4">Compact Software {"&"} Solution</h2>
                    <p className="text-gray-400 text-sm leading-6">
                        Empowering businesses with intelligent accounting, GST training, and enterprise automation solutions across Delhi NCR.
                    </p>
                </div>

                {/* Contact Information */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-start gap-3">
                            <Phone className="w-4 h-4 mt-1 text-red-500" />
                            <span>
                                <a href="tel:+917872727171" className="hover:underline">+91-7872727171</a>,{" "}
                                <a href="tel:+919810214216" className="hover:underline">9810214216</a>
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <Mail className="w-4 h-4 mt-1 text-red-500" />
                            <a href="mailto:sales@cssbusy.com" className="hover:underline">
                                sales@cssbusy.com
                            </a>
                        </li>
                        <li className="flex items-start gap-3">
                            <MapPin className="w-4 h-4 mt-1 text-red-500" />
                            <a
                                href="https://www.google.com/maps/place/258,+Pocket+5,+Sector+2,+Rohini,+Delhi+110088"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline"
                            >
                                258, Pocket-5, Sector-2, Rohini, Delhi-110088
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Branches */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Our Branches</h3>
                    <ul className="grid grid-cols-1 grid-rows-6 gap-x-6 gap-y-3 text-sm text-gray-300">
                        {[
                            { name: "Kundli", url: "https://maps.app.goo.gl/NoGL2qRGPMKJ1MRT6" },
                            { name: "Jhajjar", url: "https://maps.app.goo.gl/VQWKe1aGq7kHUszE6" },
                            { name: "Bahadurgarh", url: "https://maps.app.goo.gl/CPjqa9QuEkGbJ89YA" },
                            { name: "Jind", url: "https://maps.app.goo.gl/UwvE63CVzpNM9B7h9" },
                            { name: "Sonipat", url: "https://maps.app.goo.gl/s3Jpb55cd2zsfMx17" },
                            { name: "Rohtak", url: "https://maps.app.goo.gl/nbg7cRRUpvqgS5ep6" },
                        ].map((branch) => (
                            <li key={branch.name} className="flex items-start gap-2">
                                <LocateIcon className="w-4 h-4 mt-0.5 text-red-500" />
                                <a
                                    href={branch.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    {branch.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Footer Bottom */}
            <div className="border-t border-gray-800 mt-10 pt-4 text-sm text-gray-500 flex justify-center text-center">
                <p>© {new Date().getFullYear()} Compact Software {"&"} Solution. All rights reserved.</p>
            </div>
        </footer>
    );
}
