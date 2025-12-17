import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaMapMarkerAlt, FaBed, FaBath, FaRulerCombined } from 'react-icons/fa';
import { BiHomeAlt, BiKey } from "react-icons/bi";
import { BsHouses } from "react-icons/bs";

export default function ServicesPage() {
    return (
        <main className="min-h-screen bg-white pb-20" dir="rtl">
            <div className="container mx-auto px-4 md:px-6 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
                    <Link href="/" className="hover:text-[#3E5879] transition-colors">الرئيسية</Link>
                    <FaChevronLeft className="text-xs" />
                    <span className="text-[#3E5879] font-medium">خدماتنا</span>
                </div>

                {/* Intro Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">

                    {/* Right Side: Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 text-right">
                        <span className="text-[#3E5879] font-medium mb-2 block">لماذا تختارنا؟</span>
                        <h1 className="text-3xl md:text-4xl font-bold text-[#1a1a1a] mb-6 leading-tight">
                            اكتشف ما يميز خبرتنا في مجال العقارات
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify">
                            "هذا النص هو مثال نصي نستخدم في تصميم المواقع والتطبيقات كحشو مؤقت. الهدف منه هو ملء المساحات وعرض التنسيق بصرياً دون الاعتماد على محتوى نهائي. يظهر شكل النص كيف تبدو فقرات الصفحة ويوفر رؤية واضحة لتنسيق التصميم"
                        </p>
                    </div>

                    {/* Left Side: Image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative h-[300px] md:h-[350px] rounded-3xl overflow-hidden shadow-lg">
                            <Image
                                src="/lifestyle-2.png"
                                alt="Services Intro"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Services List Section */}
                <div className="w-full mx-auto mb-24">
                    <h2 className="text-3xl font-bold text-[#3E5879] mb-12 text-right">خدماتنا</h2>

                    <div className="space-y-6">

                        {/* Service Card 1 */}
                        <div className="bg-[#ECEFF3] rounded-3xl p-8 md:p-10 flex items-center justify-between shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                            <div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#3E5879] transition-colors">بيع عقارات</h3>
                                <p className="text-gray-500 max-w-lg">نقدم خدمة احترافية لبيع عقارك بسرعة وأفضل سعر عبر تقييم دقيق وتسويق متطور.</p>
                            </div>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center text-[#3E5879] text-3xl md:text-4xl shadow-sm group-hover:bg-[#3E5879] group-hover:text-white transition-colors duration-300">
                                <BsHouses />
                            </div>
                        </div>

                        {/* Service Card 2 */}
                        <div className="bg-[#ECEFF3] rounded-3xl p-8 md:p-10 flex items-center justify-between shadow-[0_12px_24px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300 group cursor-pointer">
                            <div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#3E5879] transition-colors">تأجر عقارات</h3>
                                <p className="text-gray-500 max-w-lg">نوفر حلولاً متكاملة لتأجير عقارك مع استهداف المستأجرين المناسبين وضمان أفضل عائد.</p>
                            </div>
                            <div className="w-16 h-16 md:w-20 md:h-20 bg-white rounded-2xl flex items-center justify-center text-[#3E5879] text-3xl md:text-4xl shadow-sm group-hover:bg-[#3E5879] group-hover:text-white transition-colors duration-300">
                                <BiKey />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Recommended Section (New) */}
                <div className="w-full mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-[#3E5879] mb-12 text-right">نرشح لك</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[1, 2, 3].map((item, index) => (
                            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer border border-gray-100">
                                {/* Image */}
                                <div className="relative h-64 w-full overflow-hidden">
                                    <Image
                                        src={`/selected-${item}.png`}
                                        alt="Property"
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-[#3E5879]">
                                        للبيع
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                                        <FaMapMarkerAlt className="text-[#3E5879]" />
                                        <span>القاهرة الجديدة - التجمع الخامس</span>
                                    </div>

                                    <h3 className="text-xl font-bold text-[#1a1a1a] mb-4 group-hover:text-[#3E5879] transition-colors">
                                        فيلا فاخرة بحديقة خاصة
                                    </h3>

                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-2xl font-bold text-[#3E5879]">5,800,000 ج.م</span>
                                    </div>

                                    {/* Specs */}
                                    <div className="flex items-center justify-between border-t border-gray-100 pt-4 text-gray-500 text-sm">
                                        <div className="flex items-center gap-2">
                                            <FaBed />
                                            <span>5 غرف</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaBath />
                                            <span>4 حمام</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <FaRulerCombined />
                                            <span>520 م²</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </main>
    );
}
