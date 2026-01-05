'use client';
import React, { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const faqs = [
    {
        id: 1,
        question: 'ما هي طرق الدفع المتاحة؟',
        answer: 'يمكن التقسيط على فترات مختلفة حسب نوع الوحدة والمشروع.',
    },
    {
        id: 2,
        question: 'هل الأسعار تشمل التشطيب؟',
        answer: 'نعم، جميع الوحدات تسلم بتشطيب كامل الترا سوبر لوكس بأعلى المعايير.',
    },
    {
        id: 3,
        question: 'كيف أزور المشروع على أرض الواقع؟',
        answer: 'يمكنك حجز موعد زيارة عن طريق الاتصال بنا أو ملء نموذج التواصل في الموقع.',
    },
];

const FAQSection = () => {
    const [activeId, setActiveId] = useState<number | null>(1);

    const toggleFAQ = (id: number) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section className="py-20 bg-[#F8F9FA]" dir="rtl">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-12">
                    الأسئلة الشائعة
                </h2>

                <div className="flex flex-col gap-4">
                    {faqs.map((faq) => (
                        <div key={faq.id} className="transition-all duration-300">
                            {/* Question */}
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className={`w-full flex items-center justify-between p-6 bg-white shadow-sm hover:shadow-md transition-all duration-300
                  ${activeId === faq.id ? 'rounded-t-2xl' : 'rounded-2xl'}
                `}
                            >
                                <span className="text-xl font-bold text-primary">
                                    {faq.question}
                                </span>
                                <span className="text-primary">
                                    {activeId === faq.id ? <FaChevronUp /> : <FaChevronDown />}
                                </span>
                            </button>

                            {/* Answer */}
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out
                  ${activeId === faq.id ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}
                `}
                            >
                                <div className="bg-primary text-white p-8 rounded-b-2xl text-lg leading-relaxed text-center">
                                    {faq.answer}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSection;
