import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { dynamicPages } from "@/constants/services";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle } from "lucide-react";
import FloatingActionButtons from "@/containers/HomePage/FloatingActionButtons";

interface PageProps {
    params: {
        id: string;
    };
}

export default function DynamicPage({ params }: PageProps) {
    const pageData = dynamicPages.find((page) => page.id === params.id);
    if (!pageData) return notFound();

    return (
        <>
            <Header activePage="services" />

            <main className="h-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 pb-20">
                {/* Hero Section */}
                <div className="relative pt-20 px-4 text-center bg-[#09356C] text-white overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>

                    <div className="relative z-10 max-w-5xl mx-auto">
                        <h1 className="text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                            {pageData.heading}
                        </h1>
                        <p className="text-base text-blue-100 max-w-5xl mx-auto leading-relaxed pb-1">
                            {pageData.description}
                        </p>
                    </div>
                </div>

                <div className="w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start pt-10 max-w-7xl">
                    {/* Image Carousel Section */}
                    <div className="w-full overflow-hidden transform hover:scale-105">
                        <div className="flex w-full overflow-x-auto scroll-smooth scrollbar-hide gap-4">
                            {pageData.images.map((src, idx) => (
                                <div
                                    key={idx}
                                    className="flex-shrink-0 max-w-[700px] max-h-[500px] w-full relative overflow-hidden"
                                >
                                    <Image
                                        src={src}
                                        alt={`${pageData.heading} image ${idx + 1}`}
                                        width={800}
                                        height={500}
                                        className="w-full h-auto max-h-[500px] object-contain rounded-xl"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>


                    {/* Text Section */}
                    <div>
                        <div className="text-center md:text-left">
                            <span className="text-[#00AA3E] text-sm font-bold uppercase tracking-wide block">
                                {pageData.heading}
                            </span>
                            <h2 className="mt-2 text-2xl sm:text-3xl font-extrabold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent tracking-wide">
                                {pageData.subheading || "Explore Our Service in Detail"}
                            </h2>
                        </div>

                        <p className="mt-4 text-gray-700 text-base sm:text-lg leading-relaxed">
                            {pageData.description}
                        </p>

                        {pageData.points?.length ? (
                            <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-800">
                                {pageData.points.map((point, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                                        <span>{point}</span>
                                    </li>
                                ))}
                            </ul>
                        ) : null}
                    </div>
                </div>

            </main>

            <Footer />
            <FloatingActionButtons />
        </>
    );
}
