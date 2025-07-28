import {
    FileText,
    Barcode,
    Cloud,
    Send,
} from "lucide-react";

export default function BusyMobileAppFeatures() {
    const features = [
        {
            icon: <FileText className="w-6 h-6 text-white" />,
            title: "Invoices, Orders & Quotations",
            description:
                "Easily create and share invoices, orders, and quotations from anywhere.",
            bg: "from-blue-500 via-sky-500 to-cyan-400",
        },
        {
            icon: <Barcode className="w-6 h-6 text-white" />,
            title: "Barcode Scanning & Payments",
            description:
                "Scan barcodes, collect customer payments, and tag salesmen seamlessly.",
            bg: "from-purple-500 via-pink-500 to-red-400",
        },
        {
            icon: <Cloud className="w-6 h-6 text-white" />,
            title: "Auto Sync & WhatsApp",
            description:
                "Stay connected with real-time cloud sync and built-in WhatsApp integration.",
            bg: "from-green-500 via-teal-400 to-emerald-400",
        },
    ];

    return (
        <section className="relative w-full py-16 bg-[#005ea4] text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl sm:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
                        BUSY Mobile App
                    </h2>
                    <p className="text-lg sm:text-xl text-white/80 font-medium">
                        Run Your Business On the Go 🚀
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className={`feature-card group relative bg-gradient-to-br ${feature.bg} p-[2px] rounded-3xl transition-transform duration-300 transform hover:scale-105 hover:shadow-xl`}
                        >
                            <div className="bg-white/10 backdrop-blur-xl rounded-[22px] p-6 h-full flex flex-col justify-between border border-white/20 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                <div className="flex items-center gap-3 mb-4">
                                    {feature.icon}
                                    <h4 className="text-lg font-semibold">{feature.title}</h4>
                                </div>
                                <p className="text-white/90 text-sm">{feature.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="text-center mt-16">
                    <button className="group px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold rounded-xl shadow-lg transform transition-all duration-300 hover:scale-105">
                        <span className="flex items-center gap-2">
                            Try the Mobile App
                            <Send className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                        </span>
                    </button>

                    <p className="mt-4 text-blue-200 text-xs">
                        Available on iOS and Android • Free Download
                    </p>
                </div>
            </div>
        </section>
    );
}
