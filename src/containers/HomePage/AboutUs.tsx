import { CheckCircle } from "lucide-react";

export default function AboutUs() {
    return (
        <section id="about" className="bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-10 px-4 sm:px-8 lg:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-15 items-top">
                {/* Image section */}
                <div className="w-full h-72 sm:h-96 md:h-[28rem] lg:h-[32rem] xl:h-[36rem]">
                    <img
                        src="/images/team.jpg"
                        alt="Compact Softwares Logo Wall"
                        className="w-full h-full object-cover rounded-xl shadow-lg"
                    />
                </div>

                {/* Text content */}
                <div>
                    {/* Subtitle */}
                    <div className="text-center md:text-left">
                        <span className="text-[#00AA3E] text-sm font-bold uppercase tracking-wide block">
                            About Us
                        </span>

                        {/* Title */}
                        <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-wide">
                            Welcome to Compact Softwares & services
                        </h2>
                    </div>


                    {/* Description */}
                    <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                        Compact Softwares & Services (CSS) has been a trusted name in IT solutions for over <strong>29+ years</strong>, proudly serving <strong>25,000+ clients</strong> across industries. Our strong backbone includes a network of <strong>50+ IT Channel Associates</strong> and <strong>100+ accounting professionals</strong>.
                    </p>

                    <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                        Since <strong>1996</strong>, we have been an <strong>Authorized Channel Partner of BUSY Infotech Pvt. Ltd.</strong>, consistently ranked as the <strong>No.1 performer</strong> in national sales. From local entrepreneurs to large enterprises, our clients trust us for our unparalleled after-sales service—reflected in the fact that <strong>65% of our new business comes from referrals.</strong>
                    </p>

                    {/* Highlights */}
                    <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-800">
                        {[
                            "29+ Years of Expertise in Business Software",
                            "25,000+ Clients Served",
                            "100+ Certified Accounting Professionals",
                            "65% Client Referrals Rate"
                        ].map((point, index) => (
                            <li key={index} className="flex items-start gap-3">
                                <svg
                                    className="w-4 h-4 mr-2 text-blue-500"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M16.707 5.293a1 1 0 010 1.414L8.414 
              15 5 11.586a1 1 0 011.414-1.414l1.999 1.999 
              7.293-7.292a1 1 0 011.414 0z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                <span>{point}</span>
                            </li>
                        ))}
                    </ul>

                    {/* CTA Button */}
                    <div className="mt-8">
                        <a
                            href="#contact"
                            className="inline-block bg-[#00AA3E] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#009237] transition-all duration-300"
                        >
                            Learn More About Us
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
