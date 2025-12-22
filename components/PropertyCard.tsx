import Image from 'next/image';
import Link from 'next/link';
import { BsGeoAlt, BsDoorOpen, BsDroplet, BsArrowsMove } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { IoBedOutline } from "react-icons/io5";

interface PropertyCardProps {
    id: string;
    image: string;
    location: string;
    title: string;
    price: string;
    variant?: 'grid' | 'horizontal';
    amenities: {
        area: string;
        beds: number;
        baths: number;
    };
}

export default function PropertyCard({ id, image, location, title, price, amenities, variant = 'grid' }: PropertyCardProps) {
    const cardContent = (
        <>
            {variant === 'horizontal' ? (
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row hover:shadow-lg transition-all duration-500 group h-auto lg:h-[240px]">
                    {/* Image */}
                    <div className="relative w-full lg:w-[340px] lg:group-hover:w-[380px] h-64 lg:h-full shrink-0 overflow-hidden transition-all duration-500 ease-in-out">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 text-right transition-all duration-500 ease-in-out">
                        <div className="flex items-center justify-start gap-1 text-[#3E5879] text-sm mb-2 font-medium">
                            <HiOutlineLocationMarker className="text-lg" />
                            <span>{location}</span>
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#3E5879] transition-colors duration-300">{title}</h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 lg:line-clamp-1">فيلا فاخرة بحديقة خاصة بمساحة واسعة وتصميم حديث تلبي كافة تطلعاتكم لرفاهية السكن</p>

                        {/* Amenities */}
                        <div className="flex flex-wrap items-center gap-4 lg:gap-6 text-gray-600 text-sm mb-4 lg:mb-auto">
                            <div className="flex items-center gap-1.5 leading-none">
                                <BsArrowsMove className="text-lg text-[#3E5879]" />
                                <span>{amenities.area}</span>
                            </div>
                            <div className="flex items-center gap-2 border-r border-[#E2E8F0] pr-4 lg:pr-6 leading-none">
                                <IoBedOutline className="text-lg text-[#3E5879]" />
                                <span>{amenities.beds} غرف</span>
                            </div>
                            <div className="flex items-center gap-2 border-r border-[#E2E8F0] pr-4 lg:pr-6 leading-none">
                                <BsDroplet className="text-lg text-[#3E5879]" />
                                <span>{amenities.baths} حمامات</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-end mt-auto lg:mt-2">
                            <div className="flex flex-col items-end w-full lg:w-auto">
                                <span className="text-gray-400 text-xs line-through mb-1">ج.م 26,800,000</span>
                                <div className="flex items-baseline gap-1 text-[#3E5879]">
                                    <span className="text-sm font-bold">ج.م</span>
                                    <span className="text-2xl font-black">{price}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group">
                    {/* Image */}
                    <div className="relative h-64 overflow-hidden">
                        <Image
                            src={image}
                            alt={title}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-sm font-bold text-[#3E5879]">
                            للبيع
                        </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                        <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                            <BsGeoAlt />
                            <span>{location}</span>
                        </div>
                        <h3 className="text-xl font-bold text-gray-800 mb-4">{title}</h3>
                        <div className="flex justify-between items-center mb-6">
                            <span className="text-[#3E5879] font-bold text-lg">{price}</span>
                        </div>

                        {/* Amenities */}
                        <div className="flex justify-between border-t pt-4 text-gray-500 text-sm">
                            <div className="flex items-center gap-1">
                                <BsArrowsMove />
                                <span>{amenities.area}</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <IoBedOutline />
                                <span>{amenities.beds} غرف</span>
                            </div>
                            <div className="flex items-center gap-1">
                                <BsDroplet />
                                <span>{amenities.baths} حمامات</span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );

    return (
        <Link href={`/properties/${id}`} className="block">
            {cardContent}
        </Link>
    );
}
