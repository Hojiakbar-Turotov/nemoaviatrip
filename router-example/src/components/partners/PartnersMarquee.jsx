import React from "react";

const PartnersMarquee = ({ title = "Hamkorlarimiz", partners = [] }) => {
  const scrollingPartners = [...partners, ...partners];

  return (
    <section className="py-8 bg-gray-50 overflow-hidden">
      <h2 className="text-center text-2xl font-bold mb-6 text-gray-800">
        {title}
      </h2>
      <div className="relative w-full">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {scrollingPartners.map((partner, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[150px]"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="h-24 w-auto rounded-md shadow-lg"
              />
              <p className="mt-2 text-sm text-gray-700 font-medium">
                {partner.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersMarquee;
