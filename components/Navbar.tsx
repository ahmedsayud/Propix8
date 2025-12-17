import Link from 'next/link';

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 shadow-sm" dir="rtl">
            {/* Company Name (Right side in RTL) */}
            <div className="text-2xl font-bold text-gray-800">
                Propix 8
            </div>

            {/* Navigation Links */}
            <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
                {[
                    { label: "الرئيسية", href: "/" },
                    { label: "بحث", isSearch: true },
                    { label: "أضف عقارك", href: "/add-property" },
                    { label: "عن الشركة", href: "/about-us" },
                    { label: "خدماتنا", href: "/services" },
                    { label: "تواصل معنا", href: "/contact-us" },
                ].map((item, index) => (
                    <li key={index}>
                        {item.isSearch ? (
                            <div className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition-colors">

                                <span>{item.label}</span>
                            </div>
                        ) : (
                            <Link
                                href={item.href || "#"}
                                className="hover:text-blue-600 transition-colors"
                            >
                                {item.label}
                            </Link>
                        )}
                    </li>
                ))}
            </ul>

            {/* Login Button (Left side in RTL) */}
            <button className="bg-[#596593] text-white px-6 py-2.5 rounded-lg hover:bg-[#46517a] transition-all duration-300 shadow-md">
                تسجيل الدخول
            </button>
        </nav>
    );
}
