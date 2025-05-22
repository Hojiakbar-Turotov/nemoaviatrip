import React from "react";
import PartnersMarquee from "./PartnersMarquee";

const partnerList = [
    { name: "Uzairways", img: "https://www.nemoaviatrip.uz/assets/uzairways-CikMttcO.jfif" },
    { name: "Centrum Air", img: "https://www.nemoaviatrip.uz/assets/centrumair-Cqx3MyJr.jfif" },
    { name: "Turkish Airlines", img: "https://www.nemoaviatrip.uz/assets/turkish-C845EpGu.jpg" },
    { name: "Emirates", img: "https://www.nemoaviatrip.uz/assets/emirates-CzxVNIkZ.jpg" },
    { name: "Qatar Airways", img: "https://www.nemoaviatrip.uz/assets/qatar-CJ_bclRA.jpg" },
];

function Partners() {
    return (
        <div className="py-8">
            <PartnersMarquee title="Наши партнёры" partners={partnerList} />
        </div>
    );
}

export default Partners;
