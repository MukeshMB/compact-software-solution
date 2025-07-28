export default function Partner() {
    return (
        <section className="bg-white py-16">
            <div className="max-w-7xl mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-10">
                    Our Partners
                </h2>

                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
                    {/* Replace src with actual logo URLs or use placeholders */}

                    <img src="/icons/1.png" alt="EY" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="Deloitte" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="Fluor" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="Modicare" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="Acuity" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="Public Health Dept" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="Brillio" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="SoftwareONE" className="h-12 mx-auto   transition duration-300" />
                    <img src="/icons/1.png" alt="Wipro" className="h-12 mx-auto   transition duration-300" />

                    {/* Add more logos here as needed */}
                </div>
            </div>
        </section>

    )
}