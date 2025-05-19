import React from 'react'
import Hotels from './hotels';

const hotelsData = [
    {
        imgSrc: "https://www.nemoaviatrip.uz/assets/hayat-CA2EFkgE.jpg",
        alt: "Hyatt Regency Tashkent",
        name: "Hyatt Regency Tashkent",
        address: "Navoi ko'chasi 1-uy, Toshkent",
        description: "Zamonaviy mehmonxona markaz markazida",
    },
    {
        imgSrc: "https://www.nemoaviatrip.uz/assets/hilton-DXtMsMxq.jpg",
        alt: "Hilton Tashkent City",
        name: "Hilton Tashkent City",
        address: "Islom Karimov ko'chasi 2-uy, Toshkent",
        description: "Biznes mehmonxona shahar markazida",
    },
    {
        imgSrc: "https://www.nemoaviatrip.uz/assets/cityplace-CQIF01DD.jpg",
        alt: "City Palace Hotel",
        name: "City Palace Hotel",
        address: "Amir Temur ko'chasi 15-uy, Toshkent",
        description: "Qulay mehmonxona diqqatga sazovor joylar yaqinida",
    },
];
export default function Hotel() {
    return (
        <>
            <div className="min-h-[100vh] pb-14 pt-10 md:pb-24 " id="hotels">
                <div className="container mx-auto pt-4">
                    <Hotels hotels={hotelsData} />
                </div>
            </div>
        </>
    )
}
