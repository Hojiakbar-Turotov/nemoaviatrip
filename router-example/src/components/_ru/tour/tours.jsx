import ScrollAnimated from "../ScrollAnimated";
export default function Tours({ tours }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tours.map(({ imgSrc, alt, title, description }, idx) => (
             <ScrollAnimated animation="animate__fadeInDown">
                   <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="h-48">
                        <img
                            src={imgSrc}
                            alt={alt}
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold mb-2">{title}</h3>
                        <p className="text-gray-700 mb-4">{description}</p>
                        <div className="flex justify-between items-center">
                            <button className="bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors cursor-pointer">
                                <a href="#contact">Подробнее</a>
                            </button>
                        </div>
                    </div>
                </div>
             </ScrollAnimated>
            ))}
        </div>
    );
}
