import Link from 'next/link';
import Image from 'next/image';
import { FaChevronLeft, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaGooglePlay, FaApple } from 'react-icons/fa';

export default function ContactUsPage() {
    return (
        <main className="min-h-screen bg-white pb-20" dir="rtl">
            <div className="container mx-auto px-4 md:px-6 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
                    <Link href="/" className="hover:text-primary transition-colors">الرئيسية</Link>
                    <FaChevronLeft className="text-xs" />
                    <span className="text-primary font-medium">تواصل معنا</span>
                </div>

                {/* Top Banner Image */}
                <div className="relative w-full h-[300px] md:h-[400px] rounded-3xl overflow-hidden mb-16 shadow-sm">
                    <Image
                        src="/selected-3.png"
                        alt="Contact Us Banner"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20"></div>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-center gap-12 relative">

                    {/* Right Side: Contact Info */}
                    <div className="w-full lg:w-5/12 pt-8">
                        <h1 className="text-3xl font-bold text-primary mb-8 relative inline-block">
                            اتصل بنا
                            <span className="absolute -bottom-2 right-0 w-12 h-1 bg-primary rounded-full"></span>
                        </h1>

                        <div className="space-y-8 mt-8">
                            {/* Address */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <FaMapMarkerAlt />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">عنوان</h3>
                                    <p className="text-gray-500">اسم الشارع، الحي، المدينة، المحافظة</p>
                                </div>
                            </div>

                            {/* Phone */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <FaPhoneAlt />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">جهات الاتصال</h3>
                                    <p className="text-gray-500" dir="ltr">0100000000</p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-start gap-4 group">
                                <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center text-primary text-xl group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                                    <FaEnvelope />
                                </div>
                                <div>
                                    <h3 className="text-lg font-bold text-[#1a1a1a] mb-1">البريد الإلكتروني</h3>
                                    <p className="text-gray-500 font-sans">info@company.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Left Side: Form Card */}
                    <div className="w-full lg:w-5/12 -mt-24 lg:-mt-48 relative z-10">
                        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-100">
                            <div className="text-center mb-8">
                                <h2 className="text-2xl font-bold text-primary mb-2">نحن هنا لخدمتك</h2>
                                <p className="text-gray-500 text-sm">يسعدنا تواصلك معنا والإجابة عن جميع استفساراتك</p>
                            </div>

                            <form className="space-y-4">
                                <input
                                    type="text"
                                    placeholder="أدخل اسمك هنا"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                                />
                                <select className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 outline-none transition-all text-gray-500 appearance-none cursor-pointer">
                                    <option value="">الموقع</option>
                                    <option value="cairo">القاهرة</option>
                                    <option value="giza">الجيزة</option>
                                </select>

                                <div className="relative">
                                    <input
                                        type="tel"
                                        placeholder="رقم التليفون"
                                        className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400"
                                    />
                                    <div className="absolute left-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
                                        <span className="text-xs font-bold text-gray-500">EG</span>
                                        {/* Small flag placeholder or icon could go here if needed */}
                                    </div>
                                </div>

                                <textarea
                                    rows={4}
                                    placeholder="رسالتك"
                                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border-0 focus:ring-2 focus:ring-primary/20 outline-none transition-all placeholder:text-gray-400 resize-none"
                                ></textarea>

                                <button className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary-dark transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                                    أرسل رسالة
                                </button>
                            </form>

                            {/* App Download */}
                            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
                                <h3 className="text-gray-400 font-bold mb-4 text-sm">تنزيل التطبيق</h3>
                                <div className="flex items-center justify-center gap-4">
                                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                        <FaGooglePlay className="text-xl" />
                                        <div className="text-left flex flex-col items-start leading-none">
                                            <span className="text-[10px] uppercase">Get it on</span>
                                            <span className="text-sm font-bold">Google Play</span>
                                        </div>
                                    </button>
                                    <button className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors">
                                        <FaApple className="text-2xl" />
                                        <div className="text-left flex flex-col items-start leading-none">
                                            <span className="text-[10px] uppercase">Download on the</span>
                                            <span className="text-sm font-bold">App Store</span>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </main>
    );
}
