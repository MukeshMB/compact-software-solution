
import Image from "next/image";
import Client from "./Client";

const clientLogos = Array.from({ length: 9 }, (_, i) => `/partners/${i + 1}.jpg`);

export default function Partner() {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Our Partners
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
                    {clientLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative h-16 w-full transition duration-300 ease-in-out"
                        >
                            <Image
                                src={`${logo}`}
                                alt={logo.split(".")[0]}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>

            <Client />
        </section>
    )
}