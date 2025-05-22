import React from "react";
import PopularCitie from "./PopularCities";
const cityList = [
    {
        name: "Дубай",
        description: "Современная архитектура и роскошные торговые центры",
        image: "https://www.nemoaviatrip.uz/assets/tourdubai-TKQe6-nU.jfif",
    },
    {
        name: "Саудовская Аравия",
        description: "Специальные пакеты для паломничества Умра",
        image: "https://www.nemoaviatrip.uz/assets/saudi-8KHwzW8O.avif",
    },
    {
        name: "Стамбул",
        description: "Исторические памятники и современная культура",
        image: "https://www.nemoaviatrip.uz/assets/istanbul-DLpjv57y.avif",
    },
    {
        name: "Анталия",
        description: "Курорты для отдыха на побережье",
        image: "https://www.nemoaviatrip.uz/assets/antaliya-q-8wNECN.avif",
    },
];
export default function PopularCities() {
    return (
        <>
            <div className="min-h-[100vh] pb-14 pt-10 md:pb-24">
                <div className="container mx-auto pt-4">
                    <PopularCitie cities={cityList} />
                </div>
            </div>

        </>
    );
}
