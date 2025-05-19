import React from 'react'
import SectionHeader from './sectionHeader'
import Tours from './tours';

const toursData = [
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/uzbtravel-Dxm7Hxle.jpg",
    alt: "O'zbekiston bo'ylab sayohat",
    title: "O'zbekiston bo'ylab sayohat",
    description: "O'zbekistonning tarixiy va madaniy shaharlari bo'ylab safar",
  },
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/tourturkey-Bv44cyAd.jfif",
    alt: "Turkiya bo'ylab sayohat",
    title: "Turkiya bo'ylab sayohat",
    description: "Istanbul, Antalya, Kappadokiya - eng mashhur joylar",
  },
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/tourdubai-TKQe6-nU.jfif",
    alt: "Dubai",
    title: "Dubai",
    description: "Zamonaviy arxitektura va hashamatli savdo markazlari",
  },
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/yevropa-CLxfDw61.jfif",
    alt: "Yevropa bo'ylab sayohat",
    title: "Yevropa bo'ylab sayohat",
    description:
      "Fransiya, Italiya, Germaniya, Ispaniya - eng go'zal shaharlar",
  },
];

export default function Tour() {
  return (
    <>
      <div className="min-h-[100vh] pb-14 pt-16 md:pb-24 "  id="tours">
        <div className="container mx-auto pt-4">
          <SectionHeader title="Turlar" subtitle="Eng yaxshi sayohat turlari" />
          <Tours tours={toursData} />
        </div>
      </div>
    </>
  )
}
