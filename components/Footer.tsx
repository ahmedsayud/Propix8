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
        <footer dir="rtl" className="bg-primary text-white">
            {/* Main Footer Content */}
            <div className="pt-16 pb-10 md:pt-20 md:pb-12">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 text-center md:text-right">

                        {/* Company Info */}
                        <div className="flex flex-col items-center md:items-start text-center md:text-right">
                            <h3 className="text-2xl font-bold mb-5">Propix 8</h3>
                            <p className="text-gray-200 leading-relaxed mb-8 text-sm opacity-90 max-w-sm">
                                نسعى لتقديم تجربة عقارية مميزة تجمع بين الثقة،
                                الجودة والابتكار في كل مشروع نقدمه.
                            </p>
                            <button className="w-full sm:w-auto bg-white text-primary px-8 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300 shadow-lg shadow-black/10">
                                <span>اكتشف وحدتك الآن</span>
                                <FaArrowLeft className="text-sm" />
                            </button>
                        </div>

                        {/* Quick Links */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-xl font-bold mb-6 relative inline-block">
                                روابط سريعة
                                <span className="absolute bottom-[-10px] right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 w-12 h-1 bg-white/20 rounded-full"></span>
                            </h3>
                            <ul className="space-y-4 pt-2">
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm py-1 block">عقارات للبيع</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm py-1 block">المشاريع الجديدة</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm py-1 block">الوحدات المميزة</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm py-1 block">احجز معاينة</a></li>
                                <li><a href="#" className="text-gray-200 hover:text-white transition-colors text-sm py-1 block">خدماتنا</a></li>
                            </ul>
                        </div>

                        {/* Contact Us */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-xl font-bold mb-6 relative inline-block">
                                تواصل معنا
                                <span className="absolute bottom-[-10px] right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 w-12 h-1 bg-white/20 rounded-full"></span>
                            </h3>
                            <ul className="space-y-6 pt-2">
                                <li className="flex flex-col items-center md:flex-row gap-3">
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                                        <FaPhoneAlt className="text-gray-300" />
                                    </div>
                                    <span className="text-gray-200 text-sm ltr font-sans" dir="ltr">01000000000</span>
                                </li>
                                <li className="flex flex-col items-center md:flex-row gap-3">
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                                        <FaEnvelope className="text-gray-300" />
                                    </div>
                                    <span className="text-gray-200 text-sm font-sans">info@company.com</span>
                                </li>
                                <li className="flex flex-col items-center md:flex-row gap-3">
                                    <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center">
                                        <FaMapMarkerAlt className="text-gray-300" />
                                    </div>
                                    <span className="text-gray-200 text-sm">القاهرة، مصر</span>
                                </li>
                            </ul>
                        </div>

                        {/* Follow Us */}
                        <div className="flex flex-col items-center md:items-start">
                            <h3 className="text-xl font-bold mb-6 relative inline-block">
                                تابعنا
                                <span className="absolute bottom-[-10px] right-1/2 translate-x-1/2 md:right-0 md:translate-x-0 w-12 h-1 bg-white/20 rounded-full"></span>
                            </h3>
                            <div className="flex gap-4 pt-2">
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group">
                                    <FaFacebookF className="text-lg group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group">
                                    <FaInstagram className="text-lg group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group">
                                    <FaTwitter className="text-lg group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="#" className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300 group">
                                    <FaYoutube className="text-lg group-hover:scale-110 transition-transform" />
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="bg-primary-dark py-8">
                <div className="container mx-auto px-6 text-center">
                    <p className="text-gray-300 text-sm font-medium">
                        © 2025 جميع الحقوق محفوظة | Propix 8
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
