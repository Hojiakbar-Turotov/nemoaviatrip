export default function AboutTourism({ texts, images }) {
    return (
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 items-center">
         
                <div className="animate__animated animate__fadeInLeft">
                    {texts.map((text, index) => (
                        <p
                            key={index}
                            className="text-gray-600 leading-relaxed mb-4 text-[17px]"
                        >
                            {text}
                        </p>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4 animate__fadeInRight animate__animated">
                    <div className="relative col-span-2">
                        <img
                            src={images[0]}
                            alt="Tour Experience"
                            className="w-full h-64 object-cover rounded-lg shadow-md"
                        />
                    </div>
                    <img
                        src={images[1]}
                        alt="Beautiful Destinations"
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                    />
                    <img
                        src={images[2]}
                        alt="Comfortable Travels"
                        className="w-full h-40 object-cover rounded-lg shadow-md"
                    />
                </div>
            </div>
        </div>
    );
}
