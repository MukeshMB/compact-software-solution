import Link from "next/link";

export default function Course() {
    return (
        <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-8xl mx-auto px-6 flex flex-col lg:flex-row items-top justify-between gap-10">

                {/* Left Image */}
                <div className="w-full lg:w-1/2 lg:h-1/5 flex justify-center">
                    <img
                        src="/images/course.jpg"
                        alt="Professional Training"
                        className="rounded-2xl shadow-xl w-full max-w-xs lg:max-w-sm"
                    />
                </div>

                {/* Content */}
                <div className="w-full lg:w-2/4 text-center lg:text-left">
                    <h2 className="text-4xl font-bold text-blue-900 mb-3">
                        Professional Training & Courses
                    </h2>
                    <p className="text-lg font-medium text-gray-600 italic mb-6">
                        "Make Yourself Instantly Employable"
                    </p>

                    <ul className="space-y-2 text-gray-800 text-base font-medium mb-6">
                        <li>✅ 100% Professional Training</li>
                        <li>✅ 100% Job Placement Assistance</li>
                    </ul>

                    <div className="mb-4">
                        <h3 className="text-xl font-semibold text-blue-800 mb-2">Courses Offered:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 list-disc list-outside">
                            <li>Basics of Computers</li>
                            <li>Computerized Accounting</li>
                            <li>Sales & Marketing Training</li>
                            <li>Taxation (GST, TDS, TCS, Income Tax)</li>
                        </ul>
                    </div>

                    <p className="text-sm font-semibold text-blue-700 mt-6">
                        Mode: <span className="font-bold">Online & Offline Available</span>
                    </p>

                    <div className="mt-8">
                        <Link
                            href="https://wa.me/919667337837?text=Hi%20Compact%20Softwares,%20I%20need%20more%20info%20about%20the%20courses"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block bg-[#00AA3E] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#009237] transition-all duration-300"
                        >
                            Enquiry
                        </Link>
                    </div>
                </div>

                {/* Right Image */}
                <div className="flex flex-col items-center gap-6 lg:w-1/2">
                    <div className="w-full flex justify-center">
                        <img
                            src="/images/student.jpg"
                            alt="Job Placement Assistance"
                            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm"
                        />
                    </div>
                    <div className="w-full flex justify-center">
                        <img
                            src="/images/class.jpg"
                            alt="Job Placement Assistance"
                            className="rounded-2xl shadow-xl w-full max-w-xs sm:max-w-sm"
                        />
                    </div>
                </div>
            </div>
        </section>

    )
}