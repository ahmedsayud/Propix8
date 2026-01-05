import Image from 'next/image';
import PropertyCard from './PropertyCard';

export default function DiscoverSection() {
    const tabs = ["جميع الأنواع", "فلل فاخرة", "واجهات بحرية", "شقق سكنية", "وحدات تجارية", "مشروعات جديدة"];

    const properties = [
        {
            id: "1",
            image: "/selected-1.png",
            location: "القاهرة الجديدة - التجمع الخامس",
            title: "فيلا فاخرة بحديقة خاصة",
            price: "26,000,000 ج.م",
            amenities: { area: "520م²", beds: 5, baths: 4 }
        },
        {
            id: "2",
            image: "/selected-2.png",
            location: "العاصمة الإدارية - حي المال والأعمال",
            title: "شقة فندقية فاخرة",
            price: "15,500,000 ج.م",
            amenities: { area: "220م²", beds: 3, baths: 2 }
        },
        {
            id: "3",
            image: "/selected-3.png",
            location: "الساحل الشمالي - رأس الحكمة",
            title: "شاليه بحديقة خاصة",
            price: "8,200,000 ج.م",
            amenities: { area: "145م²", beds: 3, baths: 2 }
        },
        {
            id: "4",
            image: "/selected-2.png",
            location: "المهندسين - جامعة الدول",
            title: "شقة وتجديد تشطيب فاخر",
            price: "12,800,000 ج.م",
            amenities: { area: "250م²", beds: 3, baths: 3 }
        },
        {
            id: "5",
            image: "/selected-3.png",
            location: "القاهرة الجديدة - التجمع الخامس",
            title: "فيلا مستقلة Standalone",
            price: "35,000,000 ج.م",
            amenities: { area: "600م²", beds: 6, baths: 5 }
        },
        {
            id: "6",
            image: "/selected-1.png",
            location: "الشيخ زايد - بيفرلي هيلز",
            title: "تاون هاوس كورنر",
            price: "18,000,000 ج.م",
            amenities: { area: "320م²", beds: 4, baths: 3 }
        },
    ];

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                        "استكشف ما نقدمه"
                    </h2>
                    <p className="text-gray-500 text-lg">
                        نقدم حلولاً عقارية متكاملة تناسب جميع احتياجاتك من السكني إلى التجاري والاستثماري
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {tabs.map((tab, index) => (
                        <button
                            key={index}
                            className={`px-6 py-2 rounded-full border transition-all duration-300 ${index === 0
                                ? "bg-primary text-white border-primary"
                                : "bg-white text-gray-600 border-gray-200 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* Property Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {properties.map((prop, index) => (
                        <PropertyCard key={index} {...prop} />
                    ))}
                </div>
            </div>
        </section>
    );
}
