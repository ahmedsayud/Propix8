"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Hero() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState("كمبوندات"); // افتراضي كمبوندات زي الصورة
    const [status, setStatus] = useState("الكل");

    return (
        <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: "url('https://i0.wp.com/picjumbo.com/wp-content/uploads/modern-luxury-villa-with-terrace-over-the-river-amidst-the-forest-free-image.jpeg?w=2210&quality=70')", // غيري الـ URL هنا بالصورة اللي عجبتك
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <div className="absolute inset-0 bg-black/40" /> {/* Overlay أغمق شوية عشان النصوص تبان */}
            </div>

            <div className="relative z-10 container mx-auto px-4">
                <div className="w-1/2 gap-4 mb-8">
                    {/* Title */}
                    <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-6">
                        "امتلك وحدتك السكنية في أرقى المواقع"
                    </h1>

                    {/* Subtitle */}
                    <p className="text-lg md:text-xl text-gray-200 mb-12">
                        استثمار آمن وخطط سداد مرنة تناسب احتياجاتك
                    </p>
                </div>


                {/* Search Box */}
                <div className="w-full max-w-7xl mx-auto bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-2xl  gap-6">

                    {/* Tabs: وحدات / كمبوندات */}
                    <div className="flex justify-center  gap-4 mb-2">
                        <button
                            onClick={() => setActiveTab("وحدات")}
                            className={`px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === "وحدات"
                                ? "bg-primary text-white shadow-md"
                                : "bg-transparent text-primary border border-primary hover:bg-primary/10"
                                }`}
                        >
                            وحدات
                        </button>
                        <button
                            onClick={() => setActiveTab("كمبوندات")}
                            className={`px-10 py-3 rounded-full font-bold text-lg transition-all duration-300 ${activeTab === "كمبوندات"
                                ? "bg-primary text-white shadow-md"
                                : "bg-transparent text-primary border border-primary hover:bg-primary/10"
                                }`}
                        >
                            كمبوندات
                        </button>
                    </div>

                    {/* Status Tabs */}
                    <div className="    space-y-2">
                        <p className="text-gray-600 font-bold text-lg">حالة العقار</p>

                        <div className="bg-gray-100 rounded-full p-1 flex max-w-md mx-auto md:mx-0">
                            {["الكل", "بيع", "إيجار"].map((s) => (
                                <button
                                    key={s}
                                    onClick={() => setStatus(s)}
                                    className={`flex-1 px-8 py-2 rounded-full font-bold text-lg transition-all duration-300 ${status === s
                                        ? "bg-primary text-white shadow-md"
                                        : "text-primary hover:bg-primary/10 hover:shadow-sm"
                                        }`}
                                >
                                    {s}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Inputs & Search Button */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end mt-5">

                        {/* Price Range */}
                        <div className="flex flex-col gap-2 text-center">
                            <label className="text-sm text-gray-500">نطاق السعر</label>
                            <div className="flex gap-3">
                                <input
                                    type="number"
                                    placeholder="الأدنى"
                                    className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-primary w-1/2"
                                />
                                <input
                                    type="number"
                                    placeholder="الأعلى"
                                    className="flex-1 bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-primary w-1/2"
                                />
                            </div>
                        </div>
                        {/* Location */}
                        <div className="flex flex-col gap-2 text-center">
                            <label className="text-sm text-gray-500">الموقع</label>
                            <input
                                type="text"
                                placeholder="المدينة أو المنطقة"
                                className="bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-primary"
                            />
                        </div>

                        {/* Property Type + Area Range */}
                        <div className="flex flex-col gap-2 text-center">
                            <label className="text-sm text-gray-500">المساحة (م²)</label>

                            <div className="flex gap-3">

                                <div className="flex gap-2 flex-1">
                                    <input
                                        type="number"
                                        placeholder="الأدنى"
                                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-primary"
                                    />
                                    <input
                                        type="number"
                                        placeholder="الأعلى"
                                        className="w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-center focus:outline-none focus:border-primary"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 text-center">
                            <label className="text-sm text-gray-500">نوع العقار</label>
                            <div className="flex gap-3 relative">
                                <select className="flex-1 w-full bg-gray-50 border border-gray-300 rounded-lg px-4 py-2 text-right appearance-none focus:outline-none focus:border-primary">
                                    <option>جميع الأنواع</option>
                                </select>
                                <div className="absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                                    </svg>
                                </div>
                            </div>




                        </div>
                        {/*Search Button */}
                        <button
                            onClick={() => router.push('/search')}
                            className=" mt-2 bg-primary text-white py-3 px-6 rounded-lg font-bold hover:bg-primary-dark transition-all flex items-center justify-center gap-2"
                        >

                            البحث عن العقارات
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}