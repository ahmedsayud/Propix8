'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaUser, FaEnvelope, FaLock, FaEye, FaEyeSlash, FaChevronDown, FaPhone, FaIdCard, FaMapMarkerAlt } from 'react-icons/fa';
import api from '@/lib/axios';
import { useRouter } from 'next/navigation';

interface City {
    id: number;
    name: string;
}

export default function SignupPage() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [validationErrors, setValidationErrors] = useState<any>({});

    // Cities State
    const [cities, setCities] = useState<City[]>([]);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        phone: '',
        role: 'buyer', // default
        city_id: '',
    });

    const [idPhoto, setIdPhoto] = useState<File | null>(null);

    // Fetch Cities on Mount
    useEffect(() => {
        const fetchCities = async () => {
            try {
                const response = await api.get('cities');
                if (response.data && response.data.status && response.data.data) {
                    setCities(response.data.data);
                }
            } catch (err) {
                console.error('Failed to fetch cities:', err);
            }
        };

        fetchCities();
    }, []);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        // Clear errors when user types
        if (validationErrors[name]) {
            setValidationErrors((prev: any) => ({ ...prev, [name]: null }));
        }
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setIdPhoto(e.target.files[0]);
            // Clear validation error for id_photo
            if (validationErrors.id_photo) {
                setValidationErrors((prev: any) => ({ ...prev, id_photo: null }));
            }
        }
    };

    // Helper to translate validation errors
    const getErrorMessage = (error: string) => {
        const errorMap: { [key: string]: string } = {
            'validation.password.letters': 'يجب أن تحتوي كلمة المرور على أحرف',
            'validation.password.mixed': 'يجب أن تحتوي كلمة المرور على أحرف وأرقام',
            'validation.password.symbols': 'يجب أن تحتوي كلمة المرور على رموز خاصة',
            'validation.password.numbers': 'يجب أن تحتوي كلمة المرور على أرقام',
            'The password field confirmation does not match.': 'كلمة المرور غير متطابقة',
            'The password must be at least 8 characters.': 'كلمة المرور يجب أن تكون 8 أحرف على الأقل',
            // Add more translations as needed
        };
        return errorMap[error] || error;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setValidationErrors({});

        // Basic client-side validation for seller
        if (formData.role === 'seller' && !idPhoto) {
            setValidationErrors({ id_photo: ['يرجى رفع صورة البطاقة للبائع'] });
            setLoading(false);
            return;
        }

        try {
            const data = new FormData();
            data.append('name', formData.name);
            data.append('email', formData.email);
            data.append('password', formData.password);
            data.append('password_confirmation', formData.password_confirmation);
            data.append('phone', formData.phone);
            data.append('role', formData.role);
            data.append('city_id', formData.city_id);

            if (formData.role === 'seller' && idPhoto) {
                data.append('id_photo', idPhoto);
            }

            const response = await api.post('register', data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            if (response.data && response.data.status) {
                // Registration successful
                // Redirect to login or verification page
                router.push('/login');
            } else {
                if (response.data.errors) {
                    setValidationErrors(response.data.errors);
                } else {
                    setError(response.data.message || 'حدث خطأ أثناء التسجيل');
                }
            }

        } catch (err: any) {
            console.error('Registration error:', err);
            if (err.response && err.response.data) {
                const result = err.response.data;
                if (result.errors) {
                    setValidationErrors(result.errors);
                } else {
                    setError(result.message || 'حدث خطأ أثناء التسجيل');
                }
            } else {
                setError('فشل الاتصال بالخادم. يرجى المحاولة لاحقاً.');
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#F5F7FA] flex justify-center p-4 md:p-8" dir="rtl">
            <div className="max-w-[1200px] w-full bg-white rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col md:flex-row shadow-primary/10 border border-gray-100 my-auto">

                {/* Right Side: Image and Logo (Desktop) */}
                <div className="hidden md:flex w-full md:w-1/2 relative min-h-[600px] bg-primary flex-col items-center justify-center p-12 text-white overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none"></div>

                    {/* Logo */}
                    <div className="relative z-10 mb-8">
                        <h1 className="text-5xl font-black tracking-tighter drop-shadow-lg">propix 8</h1>
                    </div>

                    {/* Image Container */}
                    <div className="relative z-10 w-full aspect-[4/5] max-h-[500px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white/20 backdrop-blur-sm">
                        <Image
                            src="/Rectangle 4441.svg"
                            alt="Building Design"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                        />
                    </div>
                </div>

                {/* Left Side: Sign Up Form */}
                <div className="w-full md:w-1/2 p-6 md:p-12 flex flex-col bg-white">
                    <div className="text-center mb-8 mt-4 md:mt-0">
                        {/* Logo for Mobile */}
                        <div className="md:hidden mb-6">
                            <h1 className="text-4xl font-black tracking-tighter text-primary">propix 8</h1>
                        </div>

                        <div className="flex flex-col items-center gap-2 mb-2">
                            <span className="text-gray-400 font-bold text-lg">مرحباً بك</span>
                            <h2 className="text-3xl md:text-4xl font-black text-gray-800">إنشاء حساب جديد</h2>
                        </div>
                        {error && (
                            <div className="mt-4 bg-red-50 text-red-600 p-4 rounded-xl text-sm font-bold border border-red-100 flex items-center justify-center gap-2 animate-in fade-in slide-in-from-top-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                                </svg>
                                {error}
                            </div>
                        )}
                    </div>

                    <form className="space-y-5" onSubmit={handleSubmit}>
                        {/* Name */}
                        <div className="relative group">
                            <input
                                name="name"
                                type="text"
                                placeholder="الاسم بالكامل"
                                value={formData.name}
                                onChange={handleInputChange}
                                className={`w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3 px-4 pr-12 focus:outline-none font-medium placeholder:text-gray-400 transition-all group-hover:bg-gray-100 focus:bg-white ${validationErrors.name ? 'border-red-500/50 bg-red-50' : ''}`}
                            />
                            <FaUser className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            {validationErrors.name && <p className="text-red-500 text-xs mt-1 mr-2 font-bold">{getErrorMessage(validationErrors.name[0])}</p>}
                        </div>

                        {/* Email */}
                        <div className="relative group">
                            <input
                                name="email"
                                type="email"
                                placeholder="البريد الإلكتروني"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={`w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3 px-4 pr-12 focus:outline-none font-medium placeholder:text-gray-400 transition-all group-hover:bg-gray-100 focus:bg-white ${validationErrors.email ? 'border-red-500/50 bg-red-50' : ''}`}
                            />
                            <FaEnvelope className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            {validationErrors.email && <p className="text-red-500 text-xs mt-1 mr-2 font-bold">{getErrorMessage(validationErrors.email[0])}</p>}
                        </div>

                        {/* Phone */}
                        <div className="relative group">
                            <input
                                name="phone"
                                type="tel"
                                placeholder="رقم الهاتف"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className={`w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3 px-4 pr-12 focus:outline-none font-medium placeholder:text-gray-400 transition-all group-hover:bg-gray-100 focus:bg-white ${validationErrors.phone ? 'border-red-500/50 bg-red-50' : ''}`}
                            />
                            <FaPhone className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors transform scale-x-[-1]" />
                            {validationErrors.phone && <p className="text-red-500 text-xs mt-1 mr-2 font-bold">{getErrorMessage(validationErrors.phone[0])}</p>}
                        </div>

                        {/* Password */}
                        <div className="relative group">
                            <input
                                name="password"
                                type={showPassword ? "text" : "password"}
                                placeholder="كلمة المرور"
                                value={formData.password}
                                onChange={handleInputChange}
                                className={`w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3 px-4 pr-12 pl-12 focus:outline-none font-medium placeholder:text-gray-400 transition-all group-hover:bg-gray-100 focus:bg-white ${validationErrors.password ? 'border-red-500/50 bg-red-50' : ''}`}
                            />
                            <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-2"
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                            {validationErrors.password && <p className="text-red-500 text-xs mt-1 mr-2 font-bold">{getErrorMessage(validationErrors.password[0])}</p>}
                        </div>

                        {/* Confirm Password */}
                        <div className="relative group">
                            <input
                                name="password_confirmation"
                                type={showConfirmPassword ? "text" : "password"}
                                placeholder="تأكيد كلمة المرور"
                                value={formData.password_confirmation}
                                onChange={handleInputChange}
                                className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3 px-4 pr-12 pl-12 focus:outline-none font-medium placeholder:text-gray-400 transition-all group-hover:bg-gray-100 focus:bg-white"
                            />
                            <FaLock className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-primary transition-colors" />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-primary transition-colors p-2"
                            >
                                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>

                        {/* User Type & City Row */}
                        <div className="flex flex-col sm:flex-row gap-4">
                            {/* User Type Dropdown */}
                            <div className="relative flex-1 group">
                                <select
                                    name="role"
                                    value={formData.role}
                                    onChange={handleInputChange}
                                    className="w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3 px-4 pr-10 appearance-none focus:outline-none font-medium text-gray-600 cursor-pointer group-hover:bg-gray-100 focus:bg-white"
                                >
                                    <option value="buyer">مشتري</option>
                                    <option value="seller">بائع / مطور</option>
                                </select>
                                <FaChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-primary transition-colors" />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-primary/20 group-focus-within:bg-primary transition-colors"></div>
                            </div>

                            {/* City Select Dropdown */}
                            <div className="relative flex-1 group">
                                <select
                                    name="city_id"
                                    value={formData.city_id}
                                    onChange={handleInputChange}
                                    className={`w-full bg-gray-50 border-2 border-transparent focus:border-primary/20 rounded-2xl py-3 px-4 pr-10 appearance-none focus:outline-none font-medium cursor-pointer group-hover:bg-gray-100 focus:bg-white ${formData.city_id ? 'text-gray-600' : 'text-gray-400'} ${validationErrors.city_id ? 'border-red-500/50 bg-red-50' : ''}`}
                                >
                                    <option value="" disabled>اختر المدينة</option>
                                    {cities.map((city) => (
                                        <option key={city.id} value={city.id} className="text-black">
                                            {city.name}
                                        </option>
                                    ))}
                                </select>
                                <FaChevronDown className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-primary transition-colors" />
                                <FaMapMarkerAlt className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none group-focus-within:text-primary transition-colors" />
                                {validationErrors.city_id && <p className="text-red-500 text-xs mt-1 mr-2 absolute -bottom-6 right-0 font-bold">{getErrorMessage(validationErrors.city_id[0])}</p>}
                            </div>
                        </div>

                        {/* ID Photo Upload (Conditional for Seller) */}
                        {formData.role === 'seller' && (
                            <div className="relative animate-in fade-in slide-in-from-top-4 duration-300">
                                <label className={`w-full bg-gray-50 border-2 border-dashed ${validationErrors.id_photo ? 'border-red-400 bg-red-50/50' : 'border-gray-200 hover:border-primary/50 hover:bg-primary/5'} rounded-2xl p-6 flex flex-col items-center justify-center cursor-pointer transition-all group`}>
                                    <input
                                        type="file"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        className="hidden"
                                    />
                                    <div className={`p-4 rounded-full bg-white shadow-sm mb-3 group-hover:scale-110 transition-transform ${idPhoto ? 'text-primary' : 'text-gray-400'}`}>
                                        <FaIdCard className="text-3xl" />
                                    </div>
                                    <span className={`text-sm font-bold ${idPhoto ? 'text-primary' : 'text-gray-500'}`}>
                                        {idPhoto ? idPhoto.name : 'اضغط لرفع صورة البطاقة (مطلوب)'}
                                    </span>
                                    <span className="text-xs text-gray-400 mt-1">PNG, JPG up to 5MB</span>
                                </label>
                                {validationErrors.id_photo && <p className="text-red-500 text-xs mt-1 mr-2 font-bold">{validationErrors.id_photo[0]}</p>}
                            </div>
                        )}


                        {/* Terms and Conditions */}
                        <div className="flex items-center gap-3 py-2 px-1">
                            <div className="relative flex items-center">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    required
                                    className="peer w-5 h-5 rounded border-2 border-gray-300 text-primary focus:ring-primary/20 cursor-pointer appearance-none checked:bg-primary checked:border-primary transition-all"
                                />
                                <svg className="absolute w-3.5 h-3.5 text-white pointer-events-none opacity-0 peer-checked:opacity-100 left-[3px] top-[3px] transition-opacity" viewBox="0 0 14 10" fill="none">
                                    <path d="M1 5L4.5 8.5L13 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </div>
                            <label htmlFor="terms" className="text-gray-500 text-sm font-bold cursor-pointer hover:text-primary transition-colors select-none">
                                أوافق على <span className="underline underline-offset-2">الشروط والأحكام</span>
                            </label>
                        </div>

                        {/* Submit Button */}
                        <button
                            disabled={loading}
                            className="w-full bg-primary text-white py-4 rounded-2xl font-black text-xl hover:bg-primary-dark hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-[0.98] mt-4 disabled:opacity-70 disabled:grayscale disabled:cursor-not-allowed flex items-center justify-center gap-3"
                        >
                            {loading ? (
                                <>
                                    <div className="w-6 h-6 border-4 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    <span>جاري التسجيل...</span>
                                </>
                            ) : 'سجل الآن'}
                        </button>

                        {/* Login Link */}
                        <div className="text-center mt-6">
                            <span className="text-gray-400 font-bold">لديك حساب بالفعل؟ </span>
                            <Link href="/login" className="text-primary font-black hover:underline underline-offset-4 transition-all">
                                تسجيل الدخول
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
