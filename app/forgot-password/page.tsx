'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaEnvelope, FaChevronRight } from 'react-icons/fa';

export default function ForgotPasswordPage() {
    return (
        <main className="min-h-screen bg-[#F5F7FA] flex items-center justify-center p-4 md:p-8" dir="rtl">
            <div className="max-w-[1200px] w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row shadow-primary/10 border border-gray-100">

                {/* Right Side: Image and Logo (Desktop) - Consistent with Auth Pages */}
                <div className="w-full md:w-1/2 relative min-h-[400px] md:min-h-[700px] bg-primary flex flex-col items-center justify-center p-12 text-white overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                    <div className="relative z-10 mb-8">
                        <h1 className="text-5xl font-black tracking-tighter">propix 8</h1>
                    </div>

                    <div className="relative z-10 w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20">
                        <Image
                            src="/Rectangle 4441.svg"
                            alt="Building Design"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Left Side: Forgot Password Form */}
                <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center bg-white">
                    <div className="text-center mb-10">
                        <div className="flex flex-col items-center gap-2 mb-4">
                            <h2 className="text-3xl md:text-[40px] font-black text-primary mb-2">نسيت كلمة المرور؟</h2>
                            <p className="text-gray-400 font-bold text-lg">أدخل بريدك الإلكتروني لاسترجاع كلمة المرور</p>
                        </div>
                    </div>

                    <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                        {/* Email Input */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="بريدك الإلكتروني"
                                className="w-full bg-gray-50 border-0 rounded-2xl p-5 pr-12 focus:ring-2 focus:ring-primary/20 transition-all outline-none font-medium placeholder:text-gray-400"
                            />
                            <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-300" />
                        </div>

                        {/* Submit Button */}
                        <button className="w-full bg-primary text-white py-5 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all shadow-xl shadow-primary/20 active:scale-[0.98]">
                            استعادة كلمة المرور
                        </button>

                        {/* Back to Login */}
                        <div className="text-center mt-8">
                            <Link href="/login" className="text-primary font-black flex items-center justify-center gap-2 hover:underline underline-offset-4">
                                <FaChevronRight className="text-xs" />
                                العودة لتسجيل الدخول
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
