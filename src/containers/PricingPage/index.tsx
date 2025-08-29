"use client";

import {
    FileText,
    Factory,
    Users,
    ShieldCheck,
    Smartphone,
    Layers3,
    Star,
} from "lucide-react";

import { useState } from "react";

// ✅ Data
const plansData: any = {
    subscription: {
        single: [
            {
                name: "BLUE",
                price: "₹4,999 /yr",
                features: [
                    "Billing Accounting (Non-GST)",
                    "Accounting Vouchers",
                    "Billing / Invoicing",
                    "Inventory, Receivables & Payables",
                    "Data Security & User-wise",
                    "Banking Capabilities",
                    "MIS / Reports",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
            },
            {
                name: "SAFFRON",
                price: "₹6,999 /yr",
                popular: true,
                features: [
                    "All BLUE Features +",
                    "Complete GST & GST Filing",
                    "Production & Job Work",
                    "User-wise Controls",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <Layers3 className="w-6 h-6 text-orange-500" />,
            },
            {
                name: "EMERALD",
                price: "₹9,999 /yr",
                features: [
                    "All SAFFRON Features +",
                    "Multi Branch Operations",
                    "GST Segment",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
            },
        ],
        multi: [
            {
                name: "BLUE",
                price: "₹12,499 /yr",
                features: [
                    "Billing Accounting (Non-GST)",
                    "Accounting Vouchers",
                    "Billing / Invoicing",
                    "Inventory, Receivables & Payables",
                    "Data Security & User-wise",
                    "Banking Capabilities",
                    "MIS / Reports",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
            },
            {
                name: "SAFFRON",
                price: "₹17,999 /yr",
                popular: true,
                features: [
                    "All BLUE Features +",
                    "Complete GST & GST Filing",
                    "Production & Job Work",
                    "User-wise Controls",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <Layers3 className="w-6 h-6 text-orange-500" />,
            },
            {
                name: "EMERALD",
                price: "₹24,999 /yr",
                features: [
                    "All SAFFRON Features +",
                    "Multi Branch Operations",
                    "GST Segment",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
            },
        ],
    },

    perpetual: {
        single: [
            {
                name: "BASIC",
                price: "₹9,999 (One-time)",
                features: [
                    "Billing Accounting (Non-GST)",
                    "Accounting Vouchers",
                    "Billing / Invoicing",
                    "Inventory, Receivables & Payables",
                    "Data Security & User-wise",
                    "Banking Capabilities",
                    "MIS / Reports",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <FileText className="w-6 h-6 text-blue-500" />,
            },
            {
                name: "STANDARD",
                price: "₹14,999 (One-time)",
                popular: true,
                features: [
                    "All BASIC Features +",
                    "Complete GST & GST Filing",
                    "Production & Job Work",
                    "User-wise Controls",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <Factory className="w-6 h-6 text-purple-500" />,
            },
            {
                name: "ENTERPRISE",
                price: "₹19,999 (One-time)",
                features: [
                    "All STANDARD Features +",
                    "Multi Branch Operations",
                    "GST Segment",
                    "1 Mobile App Free (1 Year)",
                ],
                icon: <Users className="w-6 h-6 text-pink-500" />,
            },
        ],
        multi: [
            {
                name: "BASIC",
                price: "₹24,999 (One-time)",
                features: [
                    "Billing Accounting (Non-GST)",
                    "Accounting Vouchers",
                    "Billing / Invoicing",
                    "Inventory, Receivables & Payables",
                    "Data Security & User-wise",
                    "Banking Capabilities",
                    "MIS / Reports",
                    "3 Mobile Apps Free (1 Year)",
                ],
                icon: <FileText className="w-6 h-6 text-blue-500" />,
            },
            {
                name: "STANDARD",
                price: "₹39,999 (One-time)",
                popular: true,
                features: [
                    "All BASIC Features +",
                    "Complete GST & GST Filing",
                    "Production & Job Work",
                    "User-wise Controls",
                    "3 Mobile Apps Free (1 Year)",
                ],
                icon: <Factory className="w-6 h-6 text-purple-500" />,
            },
            {
                name: "ENTERPRISE",
                price: "₹57,999 (One-time)",
                features: [
                    "All STANDARD Features +",
                    "Multi Branch Operations",
                    "GST Segment",
                    "3 Mobile Apps Free (1 Year)",
                ],
                icon: <Users className="w-6 h-6 text-pink-500" />,
            },
        ],
    },
};

// ✅ Plan Card Flip (front = single, back = multi)
const PlanCard = ({ singlePlan, multiPlan, index, userType }: any) => (
    <div className={`perspective w-full sm:w-[300px] ${multiPlan.popular ? "scale-105" : "scale-100"} hover:scale-105 transition-transform duration-300`}>
        <div
            className={`relative w-full h-[460px] transition-transform duration-700 transform-style-preserve-3d
        ${userType === "multi" ? "rotate-y-180" : ""}`}
            style={{ animationDelay: `${index * 150}ms` }}
        >
            {/* Front Side (Single) */}
            <div
                className={`absolute inset-0 backface-hidden rounded-2xl p-6 flex flex-col justify-between border shadow-md backdrop-blur-lg overflow-hidden
        ${singlePlan.popular
                        ? "bg-gradient-to-br from-white to-purple-50 border-purple-300 ring-2 ring-purple-400"
                        : "bg-white/80 border-gray-200"
                    }`}
            >
                <div className="space-y-4 overflow-y-auto">
                    <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
                        {singlePlan.icon}
                        {singlePlan.name}
                        {singlePlan.popular && (
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-2 font-semibold">
                                Most Popular
                            </span>
                        )}
                    </div>
                    <div className="text-xl font-bold text-[#05092D]">{singlePlan.price}</div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {singlePlan.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-green-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
                    Get Started
                </button>
            </div>

            {/* Back Side (Multi) */}
            <div
                className={`absolute inset-0 rounded-2xl p-6 flex flex-col justify-between border shadow-md backdrop-blur-lg overflow-hidden backface-hidden rotate-y-180
        ${multiPlan.popular
                        ? "bg-gradient-to-br from-white to-purple-50 border-purple-300 ring-2 ring-purple-400"
                        : "bg-white/80 border-gray-200"
                    }`}
            >
                <div className="space-y-4 overflow-y-auto">
                    <div className="flex items-center gap-2 text-lg font-bold text-gray-800">
                        {multiPlan.icon}
                        {multiPlan.name}
                        {multiPlan.popular && (
                            <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full ml-2 font-semibold">
                                Most Popular
                            </span>
                        )}
                    </div>
                    <div className="text-xl font-bold text-[#05092D]">{multiPlan.price}</div>
                    <ul className="space-y-2 text-sm text-gray-600">
                        {multiPlan.features.map((feature: string, i: number) => (
                            <li key={i} className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-green-500" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
                <button className="mt-6 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg shadow hover:scale-105 transition">
                    Get Started
                </button>
            </div>
        </div>
    </div>
);

// ✅ Section Component with flip trigger
function PlansRow({
    title,
    plans,
}: {
    title: string;
    plans: { single: any[]; multi: any[] };
}) {
    const [userType, setUserType] = useState<"single" | "multi">("single");

    return (
        <div className="text-center space-y-10">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#05092D]">
                {title}
            </h2>

            {/* Toggle */}
            <div className="flex justify-center items-center gap-4 mb-15">
                <span className="text-gray-700 text-xl font-bold">Single User</span>

                <div className="relative">
                    <div
                        className={`w-12 h-6 rounded-full p-1 cursor-pointer transition-colors duration-300 
              ${userType === "multi" ? "bg-green-500" : "bg-gray-400"}`}
                    >
                        <div
                            className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-300 
              ${userType === "multi" ? "translate-x-6" : "translate-x-0"}`}
                        />
                    </div>
                    <input
                        type="checkbox"
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        checked={userType === "multi"}
                        onChange={() =>
                            setUserType(userType === "single" ? "multi" : "single")
                        }
                    />
                </div>

                <span className="text-gray-700 text-xl font-bold">Multi User</span>
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center gap-8">
                {plans.single.map((singlePlan: any, idx: number) => (
                    <PlanCard
                        key={idx}
                        singlePlan={singlePlan}
                        multiPlan={plans.multi[idx]} // match index for flip
                        index={idx}
                        userType={userType}
                    />
                ))}
            </div>
        </div>
    );
}

export default function PricingPage() {
    return (
        <main
            id="pricing"
            className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-50"
        >
            {/* Hero Section */}
            <div className="relative pt-20 px-4 text-center bg-[#09356C] text-white overflow-hidden">
                <div className="absolute inset-0 bg-black/20"></div>

                {/* Main Content */}
                <div className="relative z-10 max-w-3xl mx-auto">
                    <h1 className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                        Pricing
                    </h1>

                    <p className="text-base text-blue-100 max-w-xl mx-auto leading-relaxed">
                        We offers best pricing for you
                    </p>
                </div>
            </div>

            <div className="max-w-6xl mx-auto space-y-25 mt-5">
                <PlansRow title="Busy Software – Subscription Plans" plans={plansData.subscription} />
                <PlansRow title="Busy Software – Perpetual Plans" plans={plansData.perpetual} />
            </div>
        </main>
    );
}
