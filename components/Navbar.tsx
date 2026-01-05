'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HiMenu, HiX } from 'react-icons/hi';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { label: "الرئيسية", href: "/" },
        { label: "بحث", href: "/search", isSearch: true },
        { label: "أضف عقارك", href: "/add-property" },
        { label: "عن الشركة", href: "/about-us" },
        { label: "خدماتنا", href: "/services" },
        { label: "تواصل معنا", href: "/contact-us" },
    ];

    return (
        <nav className="sticky top-0 z-50 flex items-center justify-between px-6 md:px-12 py-4 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm" dir="rtl">
            {/* Company Name (Right side in RTL) */}
            <div className="text-2xl font-bold text-gray-800">
                Propix 8
            </div>

            {/* Navigation Links (Desktop) */}
            <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
                {navLinks.map((item, index) => (
                    <li key={index}>
                        <Link
                            href={item.href || "#"}
                            className="hover:text-primary transition-all duration-300 relative group"
                        >
                            {item.label}
                            {!item.isSearch && (
                                <span className="absolute bottom-[-4px] right-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                            )}
                        </Link>
                    </li>
                ))}
            </ul>

            {/* Actions (Desktop) */}
            <div className="hidden md:flex items-center gap-4">
                <Link href="/login">
                    <button className="bg-primary text-white px-7 py-2.5 rounded-xl hover:bg-primary-dark transition-all duration-300 shadow-lg shadow-primary/20 font-medium">
                        تسجيل الدخول
                    </button>
                </Link>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden flex items-center">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="text-gray-700 p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                    {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
                </button>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="absolute top-full right-0 w-full bg-white border-b border-gray-100 shadow-xl md:hidden overflow-hidden transition-all duration-300 animate-in slide-in-from-top-2">
                    <ul className="flex flex-col p-6 gap-4 text-gray-700 font-medium">
                        {navLinks.map((item, index) => (
                            <li key={index}>
                                <Link
                                    href={item.href || "#"}
                                    className="block py-2 border-b border-gray-50 text-lg hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                        <li className="pt-4">
                            <Link href="/login" onClick={() => setIsOpen(false)}>
                                <button className="w-full bg-primary text-white px-6 py-3 rounded-xl hover:bg-primary-dark transition-all duration-300 font-medium text-lg">
                                    تسجيل الدخول
                                </button>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
