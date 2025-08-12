import { notFound } from "next/navigation";
import { dynamicPages } from "@/constants/services";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { CheckCircle } from "lucide-react";
import FloatingActionButtons from "@/containers/HomePage/FloatingActionButtons";
import AutoScrollCarousel from "./AutoScrollCarousel";
import PageHeading from "./AutoScrollHeading";
import PageDescription from "./AutoScrollDescription";


export default async function DynamicPage({ params }: any) {
    const { id } = await params;
    const pageData = dynamicPages.find((page) => page.id === id);
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

                <div className="w-full px-4 mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center pt-10 max-w-7xl">
                    {/* Image Carousel Section */}
                    <AutoScrollCarousel pageData={pageData} />


                    {/* Text Section */}
                    <div>
                        <div className="text-center md:text-left">
                            <span className="text-[#00AA3E] text-sm font-bold uppercase tracking-wide block">
                                {pageData.heading}
                            </span>
                            <PageHeading pageData={pageData} />
                        </div>

                        <PageDescription pageData={pageData} />

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

                        {/* Use Case Section */}
                        {pageData.useCases && (
                            <div className="mt-6">
                                <span className="block text-sm font-bold text-gray-700 uppercase tracking-wide">
                                    Use Case
                                </span>
                                {pageData.useCases?.length ? (
                                    <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-800">
                                        {pageData.useCases.map((point, i) => (
                                            <li key={i} className="flex items-start gap-3">
                                                <CheckCircle className="w-5 h-5 text-blue-500 mt-1" />
                                                <span>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </div>
                        )}
                    </div>
                </div>

            </main>

            <Footer />
            <FloatingActionButtons />
        </>
    );
}
