import Image from 'next/image';
import { BsBuildings, BsHouseCheck, BsEmojiSmile, BsMap } from "react-icons/bs";

export default function LifestyleSection() {
    const stats = [
        {
            number: "260+", label: "مشروعات تم تنفيذها", icon: (
                <BsBuildings className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
            )
        },
        {
            number: "190+", label: "عقارات تم بيعها", icon: (
                <BsHouseCheck className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
            )
        },
        {
            number: "500+", label: "عملاء سعداء", icon: (
                <BsEmojiSmile className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
            )
        },
        {
            number: "20+", label: "مدن نغطيها", icon: (
                <BsMap className="w-8 h-8 md:w-10 md:h-10 text-primary mb-2" />
            )
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                        احصل علي أسلوب حياة راق يليق بك
                    </h2>
                    <p className="text-gray-500 text-lg">
                        استثمار آمن وخطط سداد مرنة تناسب احتياجاتك
                    </p>
                </div>

                {/* Feature Images */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 max-w-6xl mx-auto">
                    <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg group">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 z-10" />
                        <Image
                            src="/lifestyle-1.png"
                            alt="Modern Villa"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                    <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg group mt-8 md:mt-16">
                        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-all duration-500 z-10" />
                        <Image
                            src="/lifestyle-2.png"
                            alt="Luxury Apartment"
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>
                </div>

            </div>
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full mx-auto bg-[#ECEFF3] py-10 px-10">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="flex flex-col items-center text-center  rounded-2xl transition-all duration-300 ease-in-out hover:scale-120 "
                    >
                        <div className="mb-4 transition-transform duration-300">
                            {stat.icon}
                        </div>
                        <span className="text-3xl font-bold text-gray-800 mb-2  duration-300 ">
                            {stat.number}
                        </span>
                        <span className="text-gray-500 transition-all duration-300 ">
                            {stat.label}
                        </span>
                    </div>
                ))}
            </div>
        </section>
    );
}
