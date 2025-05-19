import CardHeader from "./CardHeader"

const statsData = [
    {
        id: 1,
        title: "Mamnun mijozlar",
        value: "45000+",
        iconBgColor: "#F26522",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
            </svg>
        ),
    },
    {
        id: 2,
        title: "Mamlakatlar",
        value: "30+",
        iconBgColor: "#F26522",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064"
                />
            </svg>
        ),
    },
    {
        id: 3,
        title: "Tajriba",
        value: "5+ yil",
        iconBgColor: "#F26522",
        icon: (
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
        ),
    },
];

export default function Header() {

    function handleButtonClick() {
        alert("Batafsil ma'lumot tugmasi bosildi!");
    }
    return (
        <div className="min-h-[100vh] pt-44 bg-[rgb(242,101,34)]" id="header">
            <div className="container mx-auto">
                <div className="text-center max-w-4xl mx-auto px-4 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6 animate_animated animate_fadeInUp">
                        Sayohatingizni biz bilan boshlang
                    </h1>
                    <p className="text-xl md:text-2xl mb-12 animate_animated animate_fadeInUp animate_delay-1s">
                        Nemo Travel - huzur uchun yo'l
                    </p>
                </div>
                <div className="p-6">
                    <CardHeader
                        stats={statsData}
                        buttonText="Batafsil ma'lumot"
                        buttonOnClick={handleButtonClick}
                    />
                </div>
            </div>
        </div>
    )
}
