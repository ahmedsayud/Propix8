import React from 'react';
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaYoutube,
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
    FaArrowLeft
} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer dir="rtl">
            {/* Main Footer Content */}
            <div className="bg-[#3E5879] text-white pt-20 pb-10">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

                        {/* Company Info */}
                        <div className="lg:col-span-1">
                            <h3 className="text-2xl font-bold mb-6">اسم الشركة هنا</h3>
                            <p className="text-gray-200 leading-relaxed mb-8 text-sm opacity-90">
                                نسعى لتقديم تجربة عقارية مميزة تجمع بين الثقة،
                                الجودة والابتكار في كل مشروع نقدمه.
                            </p>
                            <button className="bg-white text-[#3E5879] px-6 py-3 rounded-xl font-bold flex items-center gap-2 hover:bg-gray-100 transition-colors">
                                <span>اكتشف وحدتك الآن</span>
                                <FaArrowLeft className="text-sm" />
                            </button>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">روابط سريعة</h3>
                            <ul className="space-y-4">
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">عقارات للبيع</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">المشاريع الجديدة</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">الوحدات المميزة</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">احجز معاينة</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm">خدماتنا</a></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
                            <ul className="space-y-6">
                                <li className="flex items-center gap-3">
                                    <FaPhoneAlt className="text-gray-300" />
                                    <span className="text-gray-200 text-sm ltr" dir="ltr">01000000000</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaEnvelope className="text-gray-300" />
                                    <span className="text-gray-200 text-sm font-sans">info@company.com</span>
                                </li>
                                <li className="flex items-center gap-3">
                                    <FaMapMarkerAlt className="text-gray-300" />
                                    <span className="text-gray-200 text-sm">القاهرة، مصر</span>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div>
                            <h3 className="text-xl font-bold mb-6">تابعنا</h3>
                            <div className="flex gap-4">
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#3E5879] transition-all duration-300">
                                    <FaFacebookF />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#3E5879] transition-all duration-300">
                                    <FaInstagram />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#3E5879] transition-all duration-300">
                                    <FaTwitter />
                                </a>
                                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-[#3E5879] transition-all duration-300">
                                    <FaYoutube />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-white py-12 border-t border-gray-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-[#3E5879] text-sm font-medium">
                        © 2025 جميع الحقوق محفوظة | جميع الحقوق محفوظة لموقعنا
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
