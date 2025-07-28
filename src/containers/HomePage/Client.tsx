import Image from "next/image";

const clientLogos = [
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
   "2.png",
];

export default function Clients() {
    return (
        <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-center text-3xl font-bold text-blue-900 mb-12 tracking-tight">
                    Our Clients
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
                    {clientLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative h-16 w-full transition duration-300 ease-in-out"
                        >
                            <Image
                                src={`/icons/${logo}`}
                                alt={logo.split(".")[0]}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
