'use client';
import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: 'سارة محمد',
        role: 'تجربة راقية في كل التفاصيل، تعامل احترافي وسرعة في الإنجاز تفوق التوقعات.',
        image: 'https://i.pravatar.cc/150?u=sara', // Placeholder
    },
    {
        id: 2,
        name: 'كريم حسن',
        role: 'تجربة راقية في كل التفاصيل، تعامل احترافي وسرعة في الإنجاز تفوق التوقعات.',
        image: 'https://i.pravatar.cc/150?u=karim',
    },
    {
        id: 3,
        name: 'أحمد خالد',
        role: 'تجربة راقية في كل التفاصيل، تعامل احترافي وسرعة في الإنجاز تفوق التوقعات.',
        image: 'https://i.pravatar.cc/150?u=ahmed',
    },
];

const TestimonialsSection = () => {
    const [activeIndex, setActiveIndex] = useState(1); // Default middle one

    return (
        <section className="py-20 bg-white" dir="rtl">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-12">

                    {/* Right Side: Text Content */}
                    <div className="w-full md:w-5/12 text-right">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#2C3E50] mb-6">
                            ماذا يقول عملاؤنا
                        </h2>
                        <p className="text-gray-500 text-lg leading-relaxed mb-8">
                            نفخر بعملائنا الذين اختارونا بثقتهم، وشاركوا تجاربهم المميزة معنا.
                            نضع رضا العميل في صدارة أولوياتنا، ونسعى دائماً لتجاوز توقعاته.
                            كلماتهم هي شهادة نعتز بها ودافع لنواصل تقديم الأفضل.
                        </p>
                        <button className="bg-[#2C3E50] text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-[#1a252f] transition-colors">
                            عرض المزيد
                        </button>
                    </div>

                    {/* Left Side: Testimonials Cards */}
                    <div
                        className="w-full md:w-6/12 flex flex-col gap-6"
                        onMouseLeave={() => setActiveIndex(1)}
                    >
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={testimonial.id}
                                onMouseEnter={() => setActiveIndex(index)}
                                className={`relative flex items-center p-6 rounded-lg transition-all duration-1000 ease-in-out cursor-pointer text-right bg-white overflow-hidden
                  ${index === activeIndex
                                        ? 'scale-110 shadow-xl border-l-8 border-[#2C3E50] z-10'
                                        : 'scale-90 shadow-sm border border-gray-100 hover:shadow-md z-0'
                                    }
                `}
                            >
                                {/* Dark Overlay for inactive state */}
                                <div className={`absolute inset-0 bg-[#2C3E50]/20 transition-opacity duration-1000 ease-in-out z-20 ${index === activeIndex ? 'opacity-0 pointer-events-none' : 'opacity-100'}`} />

                                {/* Avatar */}
                                <div className="ml-6 shrink-0 relative z-10">
                                    <img
                                        src={testimonial.image}
                                        alt={testimonial.name}
                                        className={`rounded-full object-cover transition-all duration-1000 ease-in-out ${index === activeIndex ? 'w-20 h-20' : 'w-16 h-16'}`}
                                    />
                                </div>

                                {/* Content */}
                                <div className="flex-1 relative z-10">
                                    <div className="flex justify-between items-start mb-2">
                                        <h3 className={`font-bold transition-all duration-1000 ease-in-out ${index === activeIndex ? 'text-xl text-[#2C3E50]' : 'text-lg text-gray-800'}`}>
                                            {testimonial.name}
                                        </h3>
                                    </div>
                                    <p className="text-gray-500 text-sm mb-3">
                                        {testimonial.role}
                                    </p>
                                    <div className="flex text-[#2C3E50]">
                                        {[...Array(5)].map((_, i) => (
                                            <FaStar key={i} className="text-sm" />
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TestimonialsSection;
