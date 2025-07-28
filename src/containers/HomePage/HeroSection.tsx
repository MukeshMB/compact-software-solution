import Image from "next/image";

// Define outer edge-only positions (keep away from center)
const logoPositions = [
    { top: "15%", left: "5%" },
    { top: "15%", left: "95%" },

    { top: "20%", left: "15%" },
    { top: "20%", left: "85%" },

    { top: "30%", left: "10%" },
    { top: "30%", left: "90%" },

    { top: "35%", left: "20%" },
    { top: "35%", left: "80%" },

    { top: "45%", left: "5%" },
    { top: "45%", left: "95%" },

    { top: "50%", left: "15%" },
    { top: "50%", left: "85%" },

    { top: "60%", left: "5%" },
    { top: "60%", left: "95%" },

    { top: "70%", left: "10%" },
    { top: "70%", left: "90%" },

    { top: "80%", left: "15%" },
    { top: "80%", left: "85%" },

    { top: "85%", left: "25%" },
    { top: "85%", left: "75%" },

    { top: "95%", left: "30%" },
    { top: "95%", left: "70%" },

    { top: "100%", left: "5%" },
    { top: "100%", left: "95%" },
];

const logos = Array.from({ length: 18 }, (_, i) => ({
    src: `/icons/${i + 1}.png`,
    ...logoPositions[i],
}));

export default function HeroSection() {
    return (
        <section id="home" className="relative bg-[#05092D] min-h-screen px-4 sm:px-8 py-15 overflow-hidden">
            {/* Main Grid Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center gap-10">
                {/* Hero Heading Section */}
                <div className="space-y-4">
                    {/* Tagline */}
                    <span className="text-green-600 px-4 py-1.5 rounded text-xs sm:text-sm font-semibold tracking-wider">
                        SOFTWARE DEVELOPMENT
                    </span>

                    <div className="h-1 w-20 bg-blue-500 mx-auto rounded-full"></div>

                    {/* Hero Headings */}
                    <div className="space-y-1">
                        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                            Your Technology Partner
                        </h1>
                        <h1 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                            <span className="text-blue-500">Together We Succeed </span>
                        </h1>
                    </div>

                    {/* Subtext */}
                    <p className="text-sm sm:text-base md:text-lg text-white/80 font-light hover:scale-105 transition duration-300">
                        <span className="relative inline-block shimmer-text-hero">
                            Serving You Since{" "}
                            <span className="text-yellow-400 font-medium">29+ Years</span>
                        </span>
                    </p>
                </div>


                {/* Hero Image with Positioned Button */}
                <div className="relative w-full max-w-3xl">
                    <Image
                        src="/images/hero.png"
                        alt="Compact Software Image 1"
                        width={400}
                        height={400}
                        className="object-contain rounded-2xl w-full"
                    />

                    <button className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white font-semibold text-sm sm:text-base px-6 py-3 rounded-lg shadow-xl hover:shadow-orange-500/25 transition-all duration-300">
                        Read More
                    </button>
                </div>

            </div>


            {/* Scattered Logos in background away from center */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {logos.map((logo, idx) => (
                    <Image
                        key={idx}
                        src={logo.src}
                        alt={`tech-logo-${idx + 1}`}
                        width={50}
                        height={50}
                        className="absolute opacity-20 lg:opacity-50"
                        style={{
                            top: logo.top,
                            left: logo.left,
                        }}
                    />
                ))}
            </div>
        </section>
    );
}
