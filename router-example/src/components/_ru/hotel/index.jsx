import Hotels from './hotels';

const hotelsData = [
    {
        imgSrc: "https://www.nemoaviatrip.uz/assets/hayat-CA2EFkgE.jpg",
        alt: "Hyatt Regency Tashkent",
        name: "Hyatt Regency Tashkent",
        address: "ул. Навои 1, Ташкент",
        description: "Современный отель в центре города",
    },
    {
        imgSrc: "https://www.nemoaviatrip.uz/assets/hilton-DXtMsMxq.jpg",
        alt: "Hilton Tashkent City",
        name: "Hilton Tashkent City",
        address: "ул. Ислама Каримова 2, Ташкент",
        description: "Бизнес-отель в центре города",
    },
    {
        imgSrc: "https://www.nemoaviatrip.uz/assets/cityplace-CQIF01DD.jpg",
        alt: "City Palace Hotel",
        name: "City Palace Hotel",
        address: "ул. Амира Темура 15, Ташкент",
        description: "Уютный отель рядом с достопримечательностями",
    },
];
export default function Hotel() {
    return (
        <>
            <div className="min-h-[100vh] pb-14 pt-10 md:pb-24" id='hotels'>
                <div className="container mx-auto pt-4">
                        <Hotels hotels={hotelsData} />
                </div>
            </div>
        </>
    )
}
