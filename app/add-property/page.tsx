import Link from 'next/link';
import { FaHome, FaHeadset, FaUserTie, FaChevronLeft } from 'react-icons/fa';
import { BiHomeAlt } from "react-icons/bi";
import { BsPersonCheck } from "react-icons/bs";
import { RiCustomerService2Line } from "react-icons/ri";

export default function AddPropertyPage() {
    return (
        <main className="min-h-screen bg-gray-50 pb-20" dir="rtl">
            <div className="container mx-auto px-4 md:px-6 py-8">

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-12">
                    <Link href="/" className="hover:text-[#3E5879] transition-colors">الرئيسية</Link>
                    <FaChevronLeft className="text-xs" />
                    <span className="text-[#3E5879] font-medium">أضف عقارك</span>
                </div>

                <div className="flex flex-col lg:flex-row items-start justify-between gap-12 lg:gap-24">
                    {/* Right Side: Text Content */}
                    <div className="w-full lg:w-5/12 pt-8">
                        <h1 className="text-3xl md:text-5xl font-bold text-[#3E5879] mb-8 leading-tight">
                            خلي عقارك يوصل لأكبر عدد من العملاء
                        </h1>
                        <p className="text-gray-600 text-lg leading-relaxed text-justify pl-8">
                            إحنا بنوفرلك تجربة عقارية متكاملة تساعدك تعرض عقارك بالشكل اللي يستحقه، وتوصل لأكبر عدد من العملاء الجادين في أقصر وقت. منصتنا مش بس مكان للإعلان، لكنها منظومة كاملة بتساعدك في كل مرحلة من مراحل البيع، من أول رفع بيانات العقار لحد ما توصل لعميل مناسب ويتم الاتفاق.
                        </p>
                    </div>

                    {/* Left Side: Steps Cards */}
                    <div className="w-full lg:w-6/12 flex flex-col gap-6">

                        {/* Card 1 */}
                        <div className="group bg-white p-10 py-12 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#3E5879] transition-colors">أدرج تفاصيل وحدتك الآن</h3>
                                <p className="text-gray-500 text-lg">أضف جميع المعلومات المتعلقة بوحدتك</p>
                            </div>
                            <div className="w-20 h-20 bg-[#3E5879] rounded-2xl flex items-center justify-center text-white text-4xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#2C3E50]">
                                <BiHomeAlt />
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="group bg-white p-10 py-12 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#3E5879] transition-colors">سيتصل بك أحد وكلائنا المتخصصين</h3>
                                <p className="text-gray-500 text-lg">سنساعدك في العثور على أفضل مشتري</p>
                            </div>
                            <div className="w-20 h-20 bg-[#3E5879] rounded-2xl flex items-center justify-center text-white text-4xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#2C3E50]">
                                <RiCustomerService2Line />
                            </div>
                        </div>

                        {/* Card 3 */}
                        <div className="group bg-white p-10 py-12 rounded-2xl shadow-sm flex items-center justify-between hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                            <div>
                                <h3 className="text-2xl font-bold text-[#1a1a1a] mb-3 group-hover:text-[#3E5879] transition-colors">قابل المشترين من خلالنا</h3>
                                <p className="text-gray-500 text-lg">نحن هنا لمساعدتك في العثور على أفضل المشترين الجادين لإتمام الصفقة بسلاسة</p>
                            </div>
                            <div className="w-20 h-20 bg-[#3E5879] rounded-2xl flex items-center justify-center text-white text-4xl shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 group-hover:bg-[#2C3E50]">
                                <BsPersonCheck />
                            </div>
                        </div>

                    </div>
                </div>

                {/* Form Section */}
                <div className="mt-24 max-w-4xl mx-auto">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold text-[#3E5879] mb-3">أضف عقارك</h2>
                        <p className="text-gray-500">قم بإدراج تفاصيل الوحدات الخاصة بك</p>
                    </div>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {/* Name */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">اسم</label>
                                <input
                                    type="text"
                                    placeholder="أدخل اسمك هنا"
                                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E5879] transition-colors bg-gray-50/50"
                                />
                            </div>

                            {/* Email */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">البريد الإلكتروني</label>
                                <input
                                    type="email"
                                    placeholder="بريدك الإلكتروني"
                                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E5879] transition-colors bg-gray-50/50"
                                />
                            </div>

                            {/* Phone */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">هاتف</label>
                                <input
                                    type="tel"
                                    placeholder="هاتفك"
                                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E5879] transition-colors bg-gray-50/50"
                                />
                            </div>

                            {/* Address */}
                            <div className="flex flex-col gap-2">
                                <label className="text-sm font-bold text-gray-700">عنوان</label>
                                <input
                                    type="text"
                                    placeholder="عنوانك"
                                    className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E5879] transition-colors bg-gray-50/50"
                                />
                            </div>
                        </div>

                        {/* Property Type */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">نوع العقار</label>
                            <select className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E5879] transition-colors bg-gray-50/50 appearance-none cursor-pointer" defaultValue="">
                                <option value="" disabled>حدد نوع العقار</option>
                                <option value="apartment">شقة</option>
                                <option value="villa">فيلا</option>
                                <option value="commercial">تجاري</option>
                                <option value="land">أرض</option>
                            </select>
                        </div>

                        {/* Notes */}
                        <div className="flex flex-col gap-2">
                            <label className="text-sm font-bold text-gray-700">ملاحظة</label>
                            <textarea
                                rows={4}
                                placeholder="اكتب رسالتك هنا"
                                className="px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:border-[#3E5879] transition-colors bg-gray-50/50 resize-none"
                            ></textarea>
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end pt-4">
                            <button className="bg-[#3E5879] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#2C3E50] transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-300">
                                إرسال رسالة
                            </button>
                        </div>
                    </form>
                </div>

            </div>
        </main>
    );
}
