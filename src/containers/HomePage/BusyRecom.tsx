import React from 'react';
import {
    FileText,
    DollarSign,
    RefreshCw,
    Clock,
    Calculator,
    Users,
    Package,
    BarChart3,
    ShoppingCart
} from 'lucide-react';
import Image from "next/image";

const BusyRecomFeatures = () => {
    const features = [
        {
            id: 1,
            icon: <RefreshCw size={24} />,
            title: "Easily Reconcile & Track",
            subtitle: "settlements/Partial/Pending settlements for Amazon/Flipkart"
        },
        {
            id: 2,
            icon: <DollarSign size={24} />,
            title: "Reconcile Marketplace",
            subtitle: "Expenses"
        },
        {
            id: 3,
            icon: <FileText size={24} />,
            title: "Track Return Invoices",
            subtitle: ""
        },
        {
            id: 4,
            icon: <Clock size={24} />,
            title: "Track Payments on Hold",
            subtitle: ""
        },
        {
            id: 5,
            icon: <Calculator size={24} />,
            title: "Complete GST Management &",
            subtitle: "Returns Filing"
        },
        {
            id: 6,
            icon: <Users size={24} />,
            title: "Integrated Accounting",
            subtitle: "Management"
        },
        {
            id: 7,
            icon: <Package size={24} />,
            title: "Easily Track and Manage",
            subtitle: "Inventory"
        },
        {
            id: 8,
            icon: <BarChart3 size={24} />,
            title: "Insightful Business Reports",
            subtitle: ""
        },
        {
            id: 9,
            icon: <ShoppingCart size={24} />,
            title: "Settlement-wise Order",
            subtitle: "Summaries"
        }
    ];

    return (
        <div className="min-h-screen py-10 px-4" style={{ background: 'linear-gradient(180deg, #fef7f7 0%, #fdf2f8 40%, #e0f2fe 100%)' }}>
            <div className="max-w-6xl mx-auto">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-blue-900 mb-4 tracking-tight">
                        BUSY Recom
                    </h1>
                    <p className="text-lg text-gray-600 mb-6">
                        (E-Commerce Reconciliation Plugin)
                    </p>
                    <h2 className="text-3xl font-semibold text-blue-900 mb-10 tracking-tight">
                        Simplify Marketplace Reconciliation
                    </h2>

                    {/* Key Highlights */}
                    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-10 gap-6 text-left max-w-4xl mx-auto px-4">
                        <div className="flex items-start space-x-3">
                            <span className="mt-1 w-3 h-3 bg-blue-500 rounded-full"></span>
                            <p className="text-gray-800 font-medium">No third-party plugin required</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="mt-1 w-3 h-3 bg-blue-500 rounded-full"></span>
                            <p className="text-gray-800 font-medium">Manage multiple marketplace accounts</p>
                        </div>
                        <div className="flex items-start space-x-3">
                            <span className="mt-1 w-3 h-3 bg-blue-500 rounded-full"></span>
                            <p className="text-gray-800 font-medium">Fast, easy-to-use system with dedicated support</p>
                        </div>
                    </div>
                </div>

                {/* Core Features Title */}
                <h3 className="text-2xl font-semibold text-center text-blue-900 mb-12 tracking-tight">
                    Core Features of BUSY Recom
                </h3>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 px-4">
                    {features.map((feature) => (
                        <div key={feature.id} className="recom-feature-card flex flex-col items-center text-center">
                            {/* Icon with concentric circles */}
                            <div className="relative mb-6 animate-pulse">
                                {/* Outer faded circle */}
                                <div className="absolute w-20 h-20 bg-blue-300 rounded-full opacity-30 -translate-x-2 -translate-y-2"></div>
                                {/* Middle faded circle */}
                                <div className="absolute w-18 h-18 bg-blue-400 rounded-full opacity-40 -translate-x-1 -translate-y-1"></div>
                                {/* Main icon circle */}
                                <div className="icon-circle w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-lg relative z-10 transition-transform duration-300">
                                    <div className="text-white">
                                        {feature.icon}
                                    </div>
                                </div>
                            </div>

                            {/* Feature Text */}
                            <div className="space-y-1">
                                <h3 className="text-gray-800 font-medium leading-tight text-base">
                                    {feature.title}
                                </h3>
                                {feature.subtitle && (
                                    <p className="text-gray-800 font-medium leading-tight text-base">
                                        {feature.subtitle}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default BusyRecomFeatures;