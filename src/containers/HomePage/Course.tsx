import Link from "next/link";

export default function Course() {
    return (
        <section
            id="training"
            className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50 justify-center overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: 'url("/images/course-banner.png")' }}
        >
            {/* Blur Overlay */}
            <div className="absolute inset-0 bg-black/40 backdrop-blur-md z-0" />

            <div className="max-w-8xl mx-auto px-6 flex flex-col lg:flex-row items-top justify-between gap-10 relative z-10">
                {/* Left Image */}
                <div className="w-full lg:w-1/2 lg:h-1/5 flex justify-center">
                    <img
                        src="/images/admission.jpg"
                        alt="Professional Training"
                        className="rounded-2xl shadow-xl w-full max-w-xs lg:max-w-sm"
                    />
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/4 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-white mb-3">
                        Authorised Busy Academy
                    </h2>
                    <p className="text-lg font-medium text-white italic mb-6">
                        Become A true Accounting Professional
                    </p>

                    <ul className="space-y-2 text-white text-base font-medium mb-6">
                        <li>✅ 100% Professional Training</li>
                        <li>✅ 100% Job Placement Assistance</li>
                    </ul>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Courses Offered:
                        </h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-white list-disc list-outside">
                            <li>Basics of Computers</li>
                            <li>Computerized Accounting</li>
                            <li>Sales & Marketing Training</li>
                            <li>Taxation (GST, TDS, TCS, Income Tax)</li>
                        </ul>
                    </div>

                    <p className="text-sm font-semibold text-white mt-6">
                        Mode: <span className="font-bold">Online & Offline Available</span>
                    </p>

                    <div className="mt-8">
                        <Link
                            href="https://wa.me/917872727171?text=I am interested in your Authorized Busy Academy and would like to request detailed information regarding the available courses, training schedules, and pricing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bouncing-button inline-block bg-[#00AA3E] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#009237] transition-all duration-300"
                        >
                            Enquiry
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 lg:h-1/5 flex justify-center">
                    <img
                        src="/images/girl.png"
                        alt="Professional Training"
                        className="w-full max-w-xs lg:max-w-sm brightness-80"
                    />
                </div>

            </div>
        </section>

    )
}