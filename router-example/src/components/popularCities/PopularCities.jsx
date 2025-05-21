import React from "react";

export default function PopularCitie({ cities }) {
  return (
    <div className="py-8">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">
        Mashhur shaharlar
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cities.map((city, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 overflow-hidden">
              <img
                src={city.image}
                alt={city.name}
                className="w-full h-full object-cover transition duration-300 hover:scale-110"
              />
              <div className="absolute inset-0  bg-opacity-20 transition duration-300 hover:bg-opacity-10" />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {city.name}
              </h3>
              <p className="text-gray-600">{city.description}</p>
              <button className="mt-4 w-full bg-[#F26522] text-white px-4 py-2 rounded-full hover:bg-[#E85A1F] transition-colors">
                Batafsil ma'lumot
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
