import React from 'react';
import { FaRegLightbulb, FaRegHandshake } from 'react-icons/fa';
import { PiMedal } from "react-icons/pi";

const AboutSection = () => {
    return (
        <section className="py-20 bg-white" dir="rtl">
            <div className="container mx-auto px-4">
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-12">
                    {/* Badge */}
                    <div className="bg-primary text-white px-[41px] py-[7px] rounded-[16px] text-lg font-medium mb-8">
                        من نحن
                    </div>

                    {/* Title */}
                    <h2 className="text-3xl md:text-[40px] font-bold text-[#1a1a1a] mb-8 leading-tight">
                        علامة بارزة في عالم العقارات الفاخرة
                    </h2>

                    {/* Description */}
                    <div className="max-w-[1107px] mx-auto border border-[#3E8DFF] rounded-lg p-4 md:p-8 bg-[#F8F9FA]/30 mb-16 hidden">
                        {/* The image 0 highlights this text block with dimensions 1107x180. 
                 The border in the image (blue line) might be the selection in Figma, not design.
                 I will assume no border effectively, just text. */}
                    </div>
                    <p className="max-w-[1107px] text-gray-600 text-lg md:text-[24px] leading-relaxed text-center font-medium">
                        نحن شركة تطوير عقاري رائدة نضع بصمتنا في عالم الفخامة والتميز.
                        نسعى لتقديم مجتمعات سكنية متكاملة تجمع بين التصميم العصري، والمواقع الاستراتيجية، وأعلى معايير الجودة.
                        في كل مشروع نقدمه، نحرص على أن يعيش عملاؤنا تجربة راقية تعبّر عن أسلوب حياة متفرد،
                        حيث تتحول التفاصيل إلى رفاهية، والمنازل إلى ملاذ حقيقي للراحة والخصوصية.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="flex flex-wrap justify-center gap-6">
                    {/* Card 1: Innovation */}
                    <div className="w-full md:w-[397px] h-auto md:h-[320px] bg-[#F8F9FA] rounded-[8px] p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 text-white text-3xl">
                            <FaRegLightbulb />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">الابتكار</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            نبتكر مفاهيم سكنية عصرية تجمع بين الفخامة والوظيفية لتلائم أسلوب حياتك الحديث.
                        </p>
                    </div>

                    {/* Card 2: Quality */}
                    <div className="w-full md:w-[397px] h-auto md:h-[320px] bg-[#F8F9FA] rounded-[8px] p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 text-white text-3xl">
                            <PiMedal />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">الجودة</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            نهتم بكل تفصيلة لنقدم مشاريع بمعايير تفوق التوقعات وتدوم لسنوات.
                        </p>
                    </div>

                    {/* Card 3: Trust */}
                    <div className="w-full md:w-[397px] h-auto md:h-[320px] bg-[#F8F9FA] rounded-[8px] p-8 flex flex-col items-center justify-center text-center hover:shadow-lg transition-shadow duration-300">
                        <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 text-white text-3xl">
                            <FaRegHandshake />
                        </div>
                        <h3 className="text-2xl font-bold text-[#1a1a1a] mb-4">الثقة</h3>
                        <p className="text-gray-600 text-base leading-relaxed">
                            نؤمن أن الثقة هي أساس كل نجاح، لذلك نلتزم بالوضوح والمصداقية في كل تعامل.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;
