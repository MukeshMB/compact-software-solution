import { Smartphone, FileText, Barcode, Wallet, Cloud, Send } from "lucide-react";

export default function BusyMobileAppFeatures() {
    return (
        <section className="relative w-full py-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white">
            <div className="max-w-6xl mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
                        BUSY Mobile App
                    </h2>
                    <p className="text-lg sm:text-xl text-gray-300 font-medium">
                        Run Your Business On the Go 🚀
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <FileText className="w-6 h-6 text-blue-400" />
                            <h4 className="text-lg font-semibold">Invoices, Orders & Quotations</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Easily create and share invoices, orders, and quotations from anywhere.
                        </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Barcode className="w-6 h-6 text-purple-400" />
                            <h4 className="text-lg font-semibold">Barcode Scanning & Payments</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Scan barcodes, collect customer payments, and tag salesmen seamlessly.
                        </p>
                    </div>

                    <div className="bg-white/5 p-6 rounded-2xl border border-white/10 backdrop-blur-md shadow-lg">
                        <div className="flex items-center gap-3 mb-4">
                            <Cloud className="w-6 h-6 text-green-400" />
                            <h4 className="text-lg font-semibold">Auto Sync & WhatsApp</h4>
                        </div>
                        <p className="text-gray-300 text-sm">
                            Stay connected with real-time cloud sync and built-in WhatsApp integration.
                        </p>
                    </div>
                </div>

                {/* CTA */}
                <div className="text-center mt-16">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold shadow-md transition-all duration-200">
                        Try the Mobile App
                    </button>
                </div>
            </div>
        </section>
    );
}
