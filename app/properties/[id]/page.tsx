'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
    FaChevronLeft, FaStar, FaPhone, FaEnvelope,
    FaCalendarAlt, FaParking, FaRulerCombined, FaRegHeart, FaShareAlt,
    FaSyncAlt
} from 'react-icons/fa';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";
import { BsDroplet, BsArrowsMove, BsBuilding } from "react-icons/bs";
import PropertyCard from '@/components/PropertyCard';

export default function PropertyDetailsPage() {
    const [mainImage, setMainImage] = useState("/selected-1.png");

    const propertyData = {
        title: "فيلا فاخرة في القاهرة الجديدة",
        location: "القاهرة الجديدة - التجمع الخامس",
        price: "6,800,000",
        pricePerMeter: "1,200",
        rating: 5,
        reviews: 5,
        status: "للبيع",
        description: `يضم هذا الطابق توزيعاً عملياً يجمع بين الراحة والخصوصية، حيث تتوزع الغرف بطريقة ذكية تسهل الحركة داخل المنزل.
        يحتوي المخطط على غرفة معيشة فسيحة تطل على الحديقة، ومطبخ حديث مفتوح بالإضافة إلى غرفة نوم رئيسية مع حمام خاص ومساحات تخزين متعددة.`,
        details: [
            { label: "السعر", value: "6,800,000 ج.م" },
            { label: "رقم التعريف العقار", value: "HZ24" },
            { label: "مساحة العقار", value: "2,400 م²" },
            { label: "سنة البناء", value: "2023" },
            { label: "الغرف", value: "5" },
            { label: "مساحة العقار الداخلية", value: "150 م²" },
            { label: "عدد غرف النوم", value: "6" },
        ],
        amenities: [
            { icon: <IoBedOutline />, label: "غرف", value: "4" },
            { icon: <BsDroplet />, label: "حمامات", value: "2" },
            { icon: <FaParking />, label: "جراح", value: "2" },
            { icon: <FaCalendarAlt />, label: "سنة البناء", value: "2023" },
            { icon: <FaRulerCombined />, label: "مساحة العقار", value: "1,354" },
        ],
        images: [
            "/selected-1.png",
            "/selected-2.png",
            "/selected-3.png",
            "/selected-2.png",
        ],
        agent: {
            name: "في خالد",
            phone: "010000000",
            image: "/selected-1.png"
        }
    };

    const similarProperties = [
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
        }
    ];

    return (
        <main className="min-h-screen bg-white pb-20 mt-20" dir="rtl">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 py-6">

                {/* Breadcrumbs */}
                <div className="flex items-center gap-2 text-sm text-primary mb-8">
                    <Link href="/" className="hover:underline font-bold">الرئيسية</Link>
                    <FaChevronLeft className="text-[10px] text-gray-300" />
                    <span className="text-gray-400 font-bold whitespace-nowrap overflow-hidden text-ellipsis">وحدات في مصر</span>
                </div>

                {/* Property Header */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-6 mb-10">
                    <div className="flex-1">
                        <h1 className="text-3xl lg:text-[40px] font-black text-gray-800 mb-5 leading-tight">{propertyData.title}</h1>

                        <div className="flex flex-wrap items-center gap-6 lg:gap-10">
                            <span className="bg-primary text-white px-4 py-2 rounded-xl text-xs font-black uppercase tracking-wider">{propertyData.status}</span>

                            <div className="flex items-center gap-2">
                                <div className="flex text-yellow-400 gap-0.5">
                                    {[...Array(5)].map((_, i) => <FaStar key={i} className="text-[10px]" />)}
                                </div>
                                <span className="text-xs text-gray-400 font-black tracking-tight">( {propertyData.reviews} تقييمات )</span>
                            </div>

                            <div className="flex items-center gap-2 text-gray-400 font-bold text-sm">
                                <HiOutlineLocationMarker className="text-xl text-gray-300" />
                                <span>{propertyData.location}</span>
                            </div>
                        </div>
                    </div>

                    <div className="text-right lg:text-left w-full lg:w-auto shrink-0 self-end lg:self-start bg-gray-50/50 p-4 rounded-2xl border border-gray-100/50">
                        <div className="flex items-baseline justify-end lg:justify-start gap-2 text-primary mb-1">
                            <span className="text-2xl font-black">ج.م</span>
                            <span className="text-[44px] font-black tracking-tighter leading-none">{propertyData.price}</span>
                        </div>
                        <div className="text-gray-400 text-sm font-black text-right lg:text-left tracking-wider">
                            / {propertyData.pricePerMeter} م²
                        </div>
                    </div>
                </div>

                {/* Gallery Section */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 mb-16">
                    <div className="lg:col-span-8 relative h-[550px] rounded-[2.5rem] overflow-hidden group shadow-2xl shadow-gray-200">
                        <Image src={mainImage} alt="Main Property" fill className="object-cover transition-transform duration-1000 group-hover:scale-105" />
                        <div className="absolute top-6 right-6 flex gap-3">
                            <button className="bg-white/90 backdrop-blur-md p-4 rounded-2xl text-primary hover:bg-primary hover:text-white transition-all shadow-xl active:scale-90">
                                <FaRegHeart className="text-lg" />
                            </button>
                            <button className="bg-white/90 backdrop-blur-md p-4 rounded-2xl text-primary hover:bg-primary hover:text-white transition-all shadow-xl active:scale-90">
                                <FaShareAlt className="text-lg" />
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-4 grid grid-cols-2 gap-5">
                        {propertyData.images.map((img, idx) => (
                            <div key={idx}
                                className={`relative h-full min-h-[160px] rounded-[2rem] overflow-hidden cursor-pointer group border-4 transition-all duration-500 shadow-lg ${mainImage === img ? 'border-primary' : 'border-transparent opacity-80 hover:opacity-100'}`}
                                onClick={() => setMainImage(img)}>
                                <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
                    {/* Main Content */}
                    <div className="lg:col-span-8">
                        {/* Quick Info Boxes (Moved here to be next to sidebar) */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-2 h-10 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                                <h2 className="text-3xl font-black text-gray-800 tracking-tight">نظرة عامة</h2>
                            </div>
                            <div className="grid grid-cols-2 lg:grid-cols-5 gap-3">
                                {propertyData.amenities.map((item, idx) => (
                                    <div key={idx} className="bg-white border border-gray-100 p-3.5 rounded-[1.5rem] flex items-center justify-between group hover:border-primary/30 transition-all duration-500 shadow-sm hover:shadow-xl hover:-translate-y-1">
                                        <div className="flex flex-col items-start order-2 min-w-0">
                                            <span className="text-gray-400 text-[9px] font-black uppercase tracking-tight mb-0.5 truncate w-full">{item.label}</span>
                                            <span className="text-gray-800 font-black text-base leading-none truncate w-full">{item.value}</span>
                                        </div>
                                        <div className="text-xl text-primary bg-gray-50 p-2.5 rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 order-1 shadow-inner shrink-0">
                                            {item.icon}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Details Table */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-2 h-10 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                                <h2 className="text-3xl font-black text-gray-800 tracking-tight">معلومات</h2>
                            </div>
                            <div className="bg-white border border-gray-100 rounded-[2.5rem] overflow-hidden shadow-sm p-10">
                                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8">
                                    {propertyData.details.map((item, idx) => (
                                        <div key={idx} className="flex flex-col gap-2 group">
                                            <span className="text-gray-400 text-[11px] font-black uppercase tracking-[0.15em] transition-colors group-hover:text-primary">{item.label}</span>
                                            <span className="text-gray-800 font-black text-[15px] leading-tight">{item.value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <div className="w-2 h-10 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                                <h2 className="text-3xl font-black text-gray-800 tracking-tight">وصف</h2>
                            </div>
                            <p className="text-gray-500 leading-[2.2] font-bold text-[17px] text-justify">
                                {propertyData.description}
                            </p>
                        </div>

                        {/* Virtual Tour */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-2 h-10 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                                <h2 className="text-3xl font-black text-gray-800 tracking-tight">جولة داخل العقار</h2>
                            </div>
                            <div className="relative h-[500px] rounded-[3rem] overflow-hidden group cursor-pointer shadow-2xl border-8 border-gray-50/50">
                                <Image src="/virtual_tour.png" alt="Virtual Tour" fill className="object-cover transition-transform duration-[2s] group-hover:scale-110" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-700 flex items-center justify-center">
                                    <div className="w-28 h-28 bg-white/20 backdrop-blur-xl rounded-full flex items-center justify-center text-white border-2 border-white/40 shadow-[0_0_50px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform duration-500">
                                        <div className="w-0 h-0 border-t-[14px] border-t-transparent border-r-[26px] border-r-white border-b-[14px] border-b-transparent mr-2"></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floor Plan */}
                        <div className="mb-16">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-2 h-10 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                                <h2 className="text-3xl font-black text-gray-800 tracking-tight">تصميم المساحة الداخلية</h2>
                            </div>
                            <div className="relative h-[550px] w-full rounded-[3rem] overflow-hidden border border-gray-100 bg-white p-12 shadow-sm flex items-center justify-center group">
                                <Image src="/apartment_floor_plan.png" alt="Floor Plan" fill className="object-contain p-12 transition-transform duration-1000 group-hover:scale-105" />
                            </div>
                        </div>

                        {/* Location / Map */}
                        <div className="mb-16">
                            <div className="flex items-center justify-between mb-10">
                                <div className="flex items-center gap-4">
                                    <div className="w-2 h-10 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                                    <h2 className="text-3xl font-black text-gray-800 tracking-tight">موقع الخريطة</h2>
                                </div>
                                <button className="text-primary font-black text-sm hover:scale-105 active:scale-95 bg-primary/5 px-6 py-3 rounded-2xl border border-primary/10 transition-all shadow-sm">افتح الخريطة كاملة</button>
                            </div>
                            <div className="relative h-[450px] rounded-[3rem] overflow-hidden border-8 border-gray-50/50 shadow-2xl">
                                <Image src="/property_location_map.png" alt="Map View" fill className="object-cover" />
                                <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
                                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white shadow-2xl shadow-primary/50 animate-bounce">
                                        <HiOutlineLocationMarker className="text-2xl" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="lg:col-span-4 sticky top-28">
                        <div className="bg-white border border-gray-100 rounded-[3rem] p-10 shadow-2xl shadow-gray-200/60 border-t-8 border-t-primary/10">
                            <h3 className="text-2xl font-black text-gray-800 mb-10 tracking-tight">تواصل معنا الآن</h3>

                            <div className="flex items-center gap-5 mb-12">
                                <div className="relative w-24 h-24 rounded-[2rem] overflow-hidden border-4 border-gray-50 shadow-xl group">
                                    <Image src={propertyData.agent.image} alt="Agent" fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>
                                <div className="flex-1">
                                    <div className="text-gray-400 text-[10px] font-black uppercase tracking-[0.25em] mb-2 font-black">المطور العقاري</div>
                                    <div className="text-gray-800 font-black text-2xl mb-3 tracking-tighter">مي خالد</div>
                                    <div className="text-primary font-black text-base flex items-center gap-3 group cursor-pointer transition-all hover:translate-x-1" dir="ltr">
                                        <div className="bg-primary/10 p-2.5 rounded-2xl group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                                            <FaPhone className="text-[12px] rotate-[270deg]" />
                                        </div>
                                        <span className="tracking-widest">010000000</span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-5">
                                <button className="w-full bg-primary text-white py-6 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-4 hover:bg-[#2D425C] transition-all shadow-2xl shadow-primary/30 active:scale-[0.97] hover:-translate-y-1">
                                    <FaPhone className="text-base rotate-[270deg]" />
                                    اتصل بنا الآن
                                </button>
                                <button className="w-full border-2 border-gray-100 text-gray-500 py-6 rounded-[1.5rem] font-black text-lg flex items-center justify-center gap-4 hover:border-primary hover:text-primary hover:bg-gray-50/50 transition-all active:scale-[0.97] hover:-translate-y-1">
                                    <FaEnvelope className="text-base" />
                                    إرسال رسالة بريدية
                                </button>
                            </div>

                            <div className="mt-10 pt-10 border-t-2 border-gray-50 flex flex-col items-center gap-4">
                                <button className="text-gray-400 text-sm font-black flex items-center gap-3 hover:text-primary transition-all group">
                                    <div className="bg-gray-50 p-2.5 rounded-xl group-hover:bg-primary/10 transition-all">
                                        <FaShareAlt className="text-xs" />
                                    </div>
                                    مشاركة هدا العقار مع الأصدقاء
                                </button>
                                <p className="text-[10px] text-gray-300 font-bold uppercase tracking-widest mt-2">جميع الحقوق محفوظة © {new Date().getFullYear()}</p>
                            </div>
                        </div>
                    </aside>
                </div>

                {/* Similar Properties */}
                <div className="mt-32">
                    <div className="flex items-center gap-4 mb-14">
                        <div className="w-2 h-10 bg-primary rounded-full shadow-lg shadow-primary/20"></div>
                        <h2 className="text-[34px] font-black text-gray-800 tracking-tight">عقارات مشابهة قد تعجبك</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-20">
                        {similarProperties.map((prop, index) => (
                            <PropertyCard key={index} {...prop} />
                        ))}
                    </div>
                    <div className="flex justify-center">
                        <button className="bg-white border-2 border-gray-100 text-gray-800 px-16 py-6 rounded-[2rem] font-black text-lg hover:border-primary hover:text-primary hover:bg-gray-50/50 transition-all shadow-xl shadow-gray-100/50 active:scale-[0.97] hover:-translate-y-1">
                            شاهد المزيد من العقارات المميزة
                        </button>
                    </div>
                </div>
            </div>
        </main>
    );
}
