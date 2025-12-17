import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft } from 'react-icons/fa';
import FAQSection from '@/components/FAQSection';

export default function AboutUsPage() {
    return (
        <main className="min-h-screen bg-white pb-20" dir="rtl">
            <div className="container mx-auto px-4 md:px-6 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-[#3E5879] transition-colors">الرئيسية</Link>
                    <FaChevronLeft className="text-xs" />
                    <span className="text-[#3E5879] font-medium">عن الشركة</span>
                </div>

                {/* Top Banner Image */}
                <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 shadow-sm">
                    <Image
                        src="/hero-bg.png"
                        alt="About Us Banner"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Info Section */}
                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-24 mb-24">

                    {/* Right Side: Text Content */}
                    <div className="w-full lg:w-1/2 order-2 lg:order-1 flex flex-col items-end text-right">
                        <div className="max-w-[713px] p-8 rounded-3xl transition-all duration-500 hover:shadow-xl hover:bg-gray-50 hover:-translate-y-2 cursor-default group">
                            <h2 className="text-[32px] font-bold text-[#3E5879] mb-4 relative inline-block group-hover:text-[#2C3E50] transition-colors">
                                معلومات عنا
                                <span className="absolute -bottom-2 right-0 w-16 h-1 bg-[#3E5879] rounded-full group-hover:w-full transition-all duration-700"></span>
                            </h2>
                            <p className="text-[#1a1a1a] text-[24px] font-normal leading-[1.6] text-justify mt-4">
                                "هذا النص هو مثال نصي نستخدم في تصميم المواقع والتطبيقات كحشو مؤقت. الهدف منه هو ملء المساحات وعرض التنسيق بصرياً دون الاعتماد على محتوى نهائي. يظهر شكل النص كيف تبدو فقرات الصفحة ويوفر رؤية واضحة لتنسيق التصميم"
                            </p>
                        </div>
                    </div>

                    {/* Left Side: Detail Image */}
                    <div className="w-full lg:w-1/2 order-1 lg:order-2">
                        <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-lg group cursor-pointer">
                            {/* Dark Overlay */}
                            <div className="absolute inset-0 bg-black/40 z-10 transition-opacity duration-1000 ease-in-out group-hover:opacity-0" />

                            <Image
                                src="/selected-2.png"
                                alt="About Company"
                                fill
                                className="object-cover transition-transform duration-1000 ease-in-out"
                            />
                        </div>
                    </div>

                </div>

                {/* Team Section */}
                <div className="bg-[#F5F7FA] rounded-[40px] p-8 md:p-16 pb-0 md:pb-0 mb-48 text-center relative">
                    <div className="inline-block bg-[#3E5879] text-white px-8 py-2 rounded-full text-lg font-bold mb-6">
                        من نحن
                    </div>
                    <h3 className="text-xl md:text-3xl font-bold text-[#1a1a1a] max-w-4xl mx-auto mb-12 leading-relaxed">
                        تعرف على فريق القيادة الذي يعمل على تحويل النظام البيئي العقاري من خلال الابتكار والاستراتيجية والخبرة
                    </h3>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center translate-y-1/2">
                        {[
                            "https://i.pravatar.cc/300?img=60",
                            "https://i.pravatar.cc/300?img=47",
                            "https://i.pravatar.cc/300?img=33",
                            "https://i.pravatar.cc/300?img=12"
                        ].map((imgUrl, index) => (
                            <div key={index} className="flex flex-col items-center group cursor-pointer">
                                <div className="relative w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 border-4 border-white">
                                    <Image
                                        src={imgUrl}
                                        alt="Team Member"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* FAQ Section */}
                <div>
                    <FAQSection />
                </div>

            </div>
        </main>
    );
}
