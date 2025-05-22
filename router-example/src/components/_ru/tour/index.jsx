import SectionHeader from './sectionHeader'
import Tours from './tours';

const toursData = [
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/uzbtravel-Dxm7Hxle.jpg",
    alt: "Путешествие по Узбекистану",
    title: "Путешествие по Узбекистану",
    description: "Путешествие по историческим и культурным городам Узбекистана",
  },
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/tourturkey-Bv44cyAd.jfif",
    alt: "Путешествие по Турции",
    title: "Путешествие по Турции",
    description: "Стамбул, Анталья, Каппадокия - самые известные места",
  },
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/tourdubai-TKQe6-nU.jfif",
    alt: "Дубай",
    title: "Дубай",
    description: "Современная архитектура и роскошные торговые центры",
  },
  {
    imgSrc: "https://www.nemoaviatrip.uz/assets/yevropa-CLxfDw61.jfif",
    alt: "Путешествие по Европе",
    title: "Путешествие по Европе",
    description:
      "Франция, Италия, Германия, Испания - самые красивые города",
  },
];

export default function Tour() {
  return (
    <>
      <div className="min-h-[100vh] pb-14 pt-16 md:pb-24 "  id="tours">
        <div className="container mx-auto pt-4">
          <SectionHeader title="Туры" subtitle="Лучшие туристические туры" />
          <Tours tours={toursData} />
        </div>
      </div>
    </>
  )
}
