import React from 'react'
import AboutTitle from './aboutTitle'
import MaqsadVaVazifalar from './maqsadVazifa'
import AboutTourism from './aboutTourizm'
import Team from './team'

export default function About() {
    return (
        <>
            <div className="min-h-[100vh] pt-14 md:pt-24" id='aboutUs'>
                <div className="container mx-auto">
                    <AboutTitle title="Biz haqimizda" subtitle="Sizning ishonchli sayohat hamkoringiz" />
                    <MaqsadVaVazifalar
                        maqsad={{
                            title: "Bizning vazifamiz",
                            description:
                                "Har bir mijozga individual yondashuv orqali yuqori sifatli va qulay sayohat xizmatlarini taqdim etish.",
                        }}
                        vazifa={{
                            title: "Bizning maqsadimiz",
                            description:
                                "O'zbekistonda yetakchi sayohat kompaniyasiga aylanish va xalqaro miqyosida tan olingan brend bo'lish.",
                        }} />
                    <AboutTourism
                        texts={[
                            "Bizning turizm kompaniyamiz dunyo bo‘ylab sayohatlar va qulayliklar taklif etadi. Biz sizni orzudagi manzilingizga yetkazib, unutilmas xotiralar yaratishga yordam beramiz. Kompaniyamiz UzAirways, Centrum Air, Turkish Airlines kabi yirik aviakompaniyalar bilan hamkorlik qiladi.",
                            'Bizning tajribali jamoamiz har bir detallni hisobga olib, rejalashtirilgan mukammal xizmatni taqdim etadi. Biz bilan dunyoning istalgan joyiga qulay va ishonchli sayohat qiling! Xizmatlarimiz: Fransiyaga turlar va dam olish, Ko‘ngilli tibbiy sug‘urtalash, Sug‘urta xizmatlari (Toshkentda va O‘zbekistonda), Turfirmalari va turagentliklari O‘zbekistonda, Turistlarni sug‘urtalash, Turizm va sayyohlik xizmatlari O‘zbekistonda, Turlar Antaliyaga va dam olish Antaliyada, Turlar BAAga va dam olish BAAda, Turlar Bali oroliga va dam olish Bali orolida, Turlar Germaniyaga va dam olish Germaniyada, Turlar Indoneziyaga va dam olish Indoneziyada. Tour Experience Beautiful DestinationsComfortable Travels. ',
                        ]}
                        images={[
                            "https://www.nemoaviatrip.uz/assets/tour1-CzT4uSuF.jpg",
                            "https://www.nemoaviatrip.uz/assets/tour2-C-pCsb7w.jpg",
                            "https://www.nemoaviatrip.uz/assets/tour3-Dfr3e2oJ.jpg",
                        ]}
                    />
                    <Team members={['Direktor', 'Yurist', 'Operator', 'Administrator']}  />
                </div>
            </div>
        </>
    )
}
