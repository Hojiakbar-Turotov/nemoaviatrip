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
                    <AboutTitle title="О нас" subtitle="Ваш надежный партнер в путешествиях" />
                    <MaqsadVaVazifalar
                        maqsad={{
                            title: "Наша миссия",
                            description:
                                "Предоставление высококачественных и удобных туристических услуг с индивидуальным подходом к каждому клиенту.",
                        }}
                        vazifa={{
                            title: "Наше видение",
                            description:
                                "Стать ведущей туристической компанией в Узбекистане и признанным брендом на международном уровне.",
                        }} />
                    <AboutTourism
                        texts={[
                            "Наша туристическая компания предлагает путешествия и удобства по всему миру. Мы доставим вас в вашу мечту и поможем создать незабываемые воспоминания. Наша компания сотрудничает с крупными авиакомпаниями, такими как UzAirways, Centrum Air, Turkish Airlines.",
                            'Наша опытная команда предоставляет тщательно спланированные услуги, учитывая все детали. Путешествуйте с нами в любую точку мира удобно и уверенно! Наши услуги включают: Туры во Францию и отдых во Франции, Добровольное медицинское страхование, Страховые услуги (в Ташкенте и Узбекистане), Туристические агентства и туроператоры в Узбекистане, Страхование туристов, Туризм и туристические услуги в Узбекистане, Туры в Анталию и отдых в Анталии, Туры в ОАЭ и отдых в ОАЭ, Туры на Бали и отдых на Бали, Туры в Германию и отдых в Германии, Туры в Индонезию и отдых в Индонезии. ',
                        ]}
                        images={[
                            "https://www.nemoaviatrip.uz/assets/tour1-CzT4uSuF.jpg",
                            "https://www.nemoaviatrip.uz/assets/tour2-C-pCsb7w.jpg",
                            "https://www.nemoaviatrip.uz/assets/tour3-Dfr3e2oJ.jpg",
                        ]}
                    />
                    <Team members={['Директор', 'Юрист', 'Оператор', 'Администратор']}  />
                </div>
            </div>
        </>
    )
}
