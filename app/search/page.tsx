'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { FaChevronLeft, FaSearch, FaFilter, FaSyncAlt, FaChevronDown } from 'react-icons/fa';
import { HiOutlineLocationMarker } from "react-icons/hi";
import PropertyCard from '@/components/PropertyCard';

// Helper Components for Filters
const FilterSection = ({ title, children, onClear }: { title: string, children: React.ReactNode, onClear?: () => void }) => (
    <div className="py-6 border-b border-gray-100 last:border-0">
        <div className="flex items-center justify-between mb-4 flex-row-reverse">
            <h3 className="font-bold text-gray-800 text-right">{title}</h3>
            {onClear && <button onClick={onClear} className="text-[#3E5879] text-xs font-medium hover:underline">إلغاء</button>}
        </div>
        {children}
    </div>
);

const CheckboxFilter = ({ label, count }: { label: string, count?: number }) => (
    <label className="flex items-center justify-start gap-3 mb-3 cursor-pointer group flex-row">
        <input type="checkbox" className="w-5 h-5 rounded border-gray-300 text-[#3E5879] focus:ring-[#3E5879]" />
        <span className="text-gray-600 group-hover:text-[#3E5879] transition-colors text-sm flex-1 text-right font-medium">{label}</span>
        {count !== undefined && <span className="text-gray-400 text-xs font-medium">({count})</span>}
    </label>
);

const CircleSelector = ({ values, label }: { values: string[], label: string }) => (
    <div className="space-y-3">
        <p className="text-sm font-bold text-gray-700 text-right">{label}</p>
        <div className="flex flex-row justify-end gap-2 flex-wrap">
            {values.map(val => (
                <button key={val} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold text-gray-600 hover:border-[#3E5879] hover:bg-[#3E5879] hover:text-white transition-all">
                    {val}
                </button>
            ))}
        </div>
    </div>
);

export default function SearchPage() {
    const [viewMode, setViewMode] = useState<"units" | "compounds">("units");

    const allProperties = [
        {
            id: "1",
            image: "/selected-1.png",
            location: "القاهرة الجديدة - التجمع الخامس",
            title: "فيلا فاخرة بحديقة خاصة",
            price: "25,800,000",
            amenities: { area: "520م²", beds: 5, baths: 4 }
        },
        {
            id: "2",
            image: "/selected-2.png",
            location: "العاصمة الإدارية - حي المال والأعمال",
            title: "شقة فندقية مودرن",
            price: "12,500,000",
            amenities: { area: "180م²", beds: 3, baths: 2 }
        },
        {
            id: "3",
            image: "/selected-3.png",
            location: "المهندسين - جامعة الدول",
            title: "شقة بموقع متميز",
            price: "2,800,000",
            amenities: { area: "220م²", beds: 3, baths: 2 }
        },
        {
            id: "4",
            image: "/selected-1.png",
            location: "القاهرة الجديدة - التجمع الخامس",
            title: "فيلا فاخرة بحديقة خاصة",
            price: "25,800,000",
            amenities: { area: "520م²", beds: 5, baths: 4 }
        },
        {
            id: "5",
            image: "/selected-2.png",
            location: "العاصمة الإدارية - حي المال والأعمال",
            title: "شقة فندقية مودرن",
            price: "12,500,000",
            amenities: { area: "180م²", beds: 3, baths: 2 }
        },
        {
            id: "6",
            image: "/selected-3.png",
            location: "المهندسين - جامعة الدول",
            title: "شقة بموقع متميز",
            price: "2,800,000",
            amenities: { area: "220م²", beds: 3, baths: 2 }
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20" dir="rtl">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">

                {/* Header Section */}
                <div className="flex flex-col gap-4 lg:gap-6 mb-8">
                    {/* Breadcrumbs */}
                    <div className="flex items-center gap-2 text-sm text-[#3E5879]">
                        <Link href="/" className="hover:underline">الرئيسية</Link>
                        <FaChevronLeft className="text-[10px] text-gray-300" />
                        <span className="text-gray-400 font-medium whitespace-nowrap overflow-hidden text-ellipsis">وحدات في مصر</span>
                    </div>

                    {/* Search & Actions Bar */}
                    <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4">
                        {/* Search Input */}
                        <div className="relative flex-1 w-full">
                            <input
                                type="text"
                                placeholder="البحث بالكمبوند، الموقع، المطور العقاري"
                                className="w-full pl-4 pr-12 py-3.5 lg:py-4 rounded-xl border border-gray-100 bg-gray-50/30 focus:outline-none focus:ring-2 focus:ring-[#3E5879]/5 focus:border-[#3E5879] transition-all text-right font-medium text-sm lg:text-base"
                            />
                            <FaSearch className="absolute right-4 lg:right-5 top-1/2 -translate-y-1/2 text-gray-400" />
                        </div>

                        {/* Sorting */}
                        <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                            <div className="relative w-full lg:w-48">
                                <select className="w-full px-6 py-3.5 lg:py-4 rounded-xl border border-gray-100 bg-white focus:outline-none text-right appearance-none cursor-pointer text-[#3E5879] font-bold shadow-sm pr-6 pl-12 text-sm lg:text-base">
                                    <option>الترتيب</option>
                                    <option>الأحدث</option>
                                    <option>السعر: الأقل للاعلى</option>
                                </select>
                                <FaChevronDown className="absolute left-5 top-1/2 -translate-y-1/2 text-[#3E5879] text-xs pointer-events-none" />
                            </div>

                            <button className="w-full lg:w-auto flex items-center justify-center gap-3 px-6 py-3.5 lg:py-4 rounded-xl border border-gray-100 bg-white text-[#3E5879] font-bold hover:bg-gray-50 transition-all shadow-sm text-sm lg:text-base">
                                <FaSyncAlt className="text-xs" />
                                <span>تغيير إلى كمبوندات</span>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    {/* Main Content (Units) */}
                    <div className="w-full lg:w-3/4 order-2">
                        <div className="flex items-center justify-between mb-6 lg:mb-8">
                            <h1 className="text-2xl lg:text-3xl font-black text-gray-800">كمبوندات في مصر</h1>
                        </div>

                        <div className="flex flex-col gap-6">
                            {allProperties.map((prop, index) => (
                                <PropertyCard key={index} {...prop} variant="horizontal" />
                            ))}
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-center items-center mt-12 gap-1.5 lg:gap-2 flex-row-reverse overflow-x-auto py-2">
                            <button className="min-w-[40px] h-10 rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:border-[#3E5879] hover:text-[#3E5879]"><FaChevronLeft className="rotate-180" /></button>
                            <button className="min-w-[40px] h-10 rounded-full flex items-center justify-center font-bold text-sm bg-gray-100 text-gray-400">10</button>
                            <span className="text-gray-300">...</span>
                            <button className="min-w-[40px] h-10 rounded-full flex items-center justify-center font-bold text-sm border border-gray-100 text-gray-400">4</button>
                            <button className="min-w-[40px] h-10 rounded-full flex items-center justify-center font-bold text-sm border border-gray-100 text-gray-400">3</button>
                            <button className="min-w-[40px] h-10 rounded-full flex items-center justify-center font-bold text-sm border border-gray-100 text-gray-400">2</button>
                            <button className="min-w-[40px] h-10 rounded-full flex items-center justify-center font-bold text-sm bg-[#3E5879] text-white shadow-lg shadow-[#3E5879]/20">1</button>
                            <button className="min-w-[40px] h-10 rounded-full flex items-center justify-center border border-gray-100 text-gray-400 hover:border-[#3E5879] hover:text-[#3E5879]"><FaChevronLeft /></button>
                        </div>
                    </div>

                    {/* Sidebar Filters */}
                    <aside className="w-full lg:w-1/4 order-1">
                        <div className="bg-white rounded-2xl border border-gray-50 p-6 sticky top-24">
                            <h2 className="text-xl font-bold text-gray-800 mb-2 text-right">فلاتر</h2>

                            <FilterSection title="مناطق" onClear={() => { }}>
                                <div className="pr-2">
                                    <CheckboxFilter label="القاهرة الجديدة" count={25} />
                                    <CheckboxFilter label="القاهرة الجديدة" count={12} />
                                    <CheckboxFilter label="القاهرة الجديدة" count={8} />
                                    <CheckboxFilter label="القاهرة الجديدة" count={30} />
                                    <button className="text-[#3E5879] text-xs font-bold mt-2 hover:underline block w-full text-right">عرض المزيد</button>
                                </div>
                            </FilterSection>

                            <FilterSection title="مطورين" onClear={() => { }}>
                                <div className="pr-2">
                                    <CheckboxFilter label="إيكان بالم للتطوير العقاري" />
                                    <CheckboxFilter label="إيكان بالم للتطوير العقاري" />
                                    <CheckboxFilter label="إيكان بالم للتطوير العقاري" />
                                    <CheckboxFilter label="إيكان بالم للتطوير العقاري" />
                                    <button className="text-[#3E5879] text-xs font-bold mt-2 hover:underline block w-full text-right">عرض المزيد</button>
                                </div>
                            </FilterSection>

                            <FilterSection title="غرف">
                                <div className="flex flex-row-reverse gap-2">
                                    {['+5', '4', '3', '2', '1'].map(n => (
                                        <button key={n} className="flex-1 h-10 rounded-lg border border-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 hover:border-[#3E5879] hover:text-[#3E5879] hover:bg-gray-50 transition-all">
                                            {n}
                                        </button>
                                    ))}
                                </div>
                            </FilterSection>

                            <FilterSection title="حمامات">
                                <div className="flex flex-row-reverse gap-2">
                                    {['+5', '4', '3', '2', '1'].map(n => (
                                        <button key={n} className="flex-1 h-10 rounded-lg border border-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 hover:border-[#3E5879] hover:text-[#3E5879] hover:bg-gray-50 transition-all">
                                            {n}
                                        </button>
                                    ))}
                                </div>
                            </FilterSection>

                            <FilterSection title="نوع الوحدة">
                                <CheckboxFilter label="شقة" />
                                <CheckboxFilter label="فيلا" />
                                <CheckboxFilter label="دوبلكس" />
                                <CheckboxFilter label="بنتهاوس" />
                                <button className="text-[#3E5879] text-xs font-bold mt-2 hover:underline block w-full text-right">عرض المزيد</button>
                            </FilterSection>

                            <FilterSection title="السعر" onClear={() => { }}>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <div className="flex-1">
                                            <label className="text-[10px] text-gray-400 block text-right mb-1">الحد الأعلى</label>
                                            <input type="number" placeholder="200,000" className="w-full px-3 py-2 rounded-lg border border-gray-100 text-sm text-right focus:border-[#3E5879] outline-none" />
                                        </div>
                                        <div className="flex-1">
                                            <label className="text-[10px] text-gray-400 block text-right mb-1">الحد الأدنى</label>
                                            <input type="number" placeholder="25,000,000" className="w-full px-3 py-2 rounded-lg border border-gray-100 text-sm text-right focus:border-[#3E5879] outline-none" />
                                        </div>
                                    </div>
                                    {/* Slider Placeholder */}
                                    <div className="relative h-1 bg-gray-100 rounded-full mt-6">
                                        <div className="absolute left-[20%] right-[30%] h-full bg-[#3E5879] rounded-full"></div>
                                        <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#3E5879] rounded-full cursor-pointer shadow-sm"></div>
                                        <div className="absolute right-[30%] top-1/2 -translate-y-1/2 w-4 h-4 bg-white border-2 border-[#3E5879] rounded-full cursor-pointer shadow-sm"></div>
                                    </div>
                                </div>
                            </FilterSection>

                            <FilterSection title="مساحة الوحدة">
                                <div className="flex items-center gap-3">
                                    <div className="flex-1">
                                        <label className="text-[10px] text-gray-400 block text-right mb-1">الحد الأقصى (م²)</label>
                                        <input type="number" placeholder="400" className="w-full px-3 py-2 rounded-lg border border-gray-100 text-sm text-right focus:border-[#3E5879] outline-none" />
                                    </div>
                                    <div className="flex-1">
                                        <label className="text-[10px] text-gray-400 block text-right mb-1">الحد الأدنى (م²)</label>
                                        <input type="number" placeholder="50" className="w-full px-3 py-2 rounded-lg border border-gray-100 text-sm text-right focus:border-[#3E5879] outline-none" />
                                    </div>
                                </div>
                            </FilterSection>

                            <FilterSection title="نوع العرض">
                                <CheckboxFilter label="بيع" />
                                <CheckboxFilter label="إيجار" />
                                <CheckboxFilter label="الكل" />
                            </FilterSection>
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
}
