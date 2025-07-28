export default function Course() {
    return (
        <section className="relative py-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
            <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* Left Image */}
                <div className="w-full lg:w-1/4 flex justify-center">
                    <img
                        src="/images/hero.png"
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
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 text-gray-700 list-disc list-inside">
                            <li>Basics of Computers</li>
                            <li>Computerized Accounting</li>
                            <li>Sales & Marketing Training</li>
                            <li>Taxation (GST, TDS, TCS, Income Tax)</li>
                        </ul>
                    </div>

                    <p className="text-sm font-semibold text-blue-700 mt-6">
                        Mode: <span className="font-bold">Online & Offline Available</span>
                    </p>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/4 flex justify-center">
                    <img
                        src="/images/invoice.jpg"
                        alt="Job Placement Assistance"
                        className="rounded-2xl shadow-xl w-full max-w-xs lg:max-w-sm"
                    />
                </div>
            </div>
        </section>

    )
}