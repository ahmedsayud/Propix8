import Image from 'next/image';

export default function SelectedUnitsSection() {
    const units = [
        {
            image: "/selected-1.png",
            alt: "Modern Exterior"
        },
        {
            image: "/selected-2.png",
            alt: "Luxury Interior"
        },
        {
            image: "/selected-3.png",
            alt: "Villa Facade"
        }
    ];

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#3E5879] mb-4">
                        وحدات مختارة حسب احتياجاتك
                    </h2>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
                    {units.map((unit, index) => (
                        <div key={index} className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer">
                            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/0 transition-all duration-500 z-10 " />
                            <Image
                                src={unit.image}
                                alt={unit.alt}
                                fill
                                className="object-cover transition-transform duration-700  "
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
