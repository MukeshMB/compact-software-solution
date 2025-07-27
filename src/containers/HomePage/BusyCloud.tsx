import { CloudUpload } from "lucide-react";

export default function BusyCloud() {
    return (
        <section className="relative w-full py-7 md:py-10 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 shimmer-wrapper">
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 shimmer-content">

                    {/* Text Content */}
                    <div className="md:w-2/3 space-y-4 text-center md:text-left">
                        <span className="text-[#00AA3E] text-sm font-medium uppercase tracking-widest">
                            Cloud Accounting
                        </span>

                        <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                            Switch to the Cloud <br />
                            <span className="text-blue-500">with Confidence</span>
                        </h2>

                        <p className="text-base text-gray-300 italic">
                            Anytime. Anywhere. Any Device.
                        </p>

                        <p className="text-sm text-gray-400 leading-relaxed max-w-xl mx-auto md:mx-0">
                            Access <strong>BUSY</strong> or <strong>Tally</strong> accounting software from anywhere,
                            on any device. Enjoy real-time sync, security, and full functionality—without compromise.
                        </p>
                    </div>

                    {/* Icon Content */}
                    <div className="md:w-1/3 flex justify-center">
                        <div className="bg-[#1e293b] p-6 rounded-2xl shadow-xl">
                            <CloudUpload className="w-16 h-16 text-blue-400" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
