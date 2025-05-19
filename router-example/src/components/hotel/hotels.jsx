export default function Hotels({ hotels }) {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-nemo-dark">
        Mehmonxonalar
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {hotels.map(({ imgSrc, alt, name, address, description }, idx) => (
          <div key={idx} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="relative h-48">
              <img
                src={imgSrc}
                alt={alt}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">{name}</h3>
              <p className="text-gray-600 mb-2">{address}</p>
              <p className="text-gray-700">{description}</p>
              <button className="mt-4 bg-[#F26522] text-white px-6 py-2 rounded-full hover:bg-[#E85A1F] transition-colors cursor-pointer">
                Batafsil ma'lumot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
