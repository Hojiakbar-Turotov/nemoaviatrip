import React from "react";
import PopularCitie from "./PopularCities";
const cityList = [
    {
        name: "Dubai",
        description: "Zamonaviy arxitektura va hashamatli savdo markazlari",
        image: "https://www.nemoaviatrip.uz/assets/tourdubai-TKQe6-nU.jfif",
    },
    {
        name: "Saudiya Arabistoni",
        description: "Umra ziyorati uchun maxsus paketlar",
        image: "https://www.nemoaviatrip.uz/assets/saudi-8KHwzW8O.avif",
    },
    {
        name: "Istanbul",
        description: "Tarixiy obidalar va zamonaviy madaniyat",
        image: "https://www.nemoaviatrip.uz/assets/istanbul-DLpjv57y.avif",
    },
    {
        name: "Antalya",
        description: "Dam olish va sohil bo'yi kurortlari",
        image: "https://www.nemoaviatrip.uz/assets/antaliya-q-8wNECN.avif",
    },
];
export default function PopularCities() {
    return (
        <>
            <div className="min-h-[100vh] pb-14 pt-10 md:pb-24 " id="hotels">
                <div className="container mx-auto pt-4">
                    <PopularCitie cities={cityList} />
                </div>
            </div>

        </>
    );
}
