import Image from 'next/image';
import { BsGeoAlt, BsLayoutSidebar, BsDroplet, BsArrowsMove } from "react-icons/bs";

interface PropertyCardProps {
    image: string;
    location: string;
    title: string;
    price: string;
    amenities: {
        area: string;
        beds: number;
        baths: number;
    };
}

export default function PropertyCard({ image, location, title, price, amenities }: PropertyCardProps) {
    return (
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
                        <BsLayoutSidebar />
                        <span>{amenities.beds} غرف</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <BsDroplet />
                        <span>{amenities.baths} حمامات</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
