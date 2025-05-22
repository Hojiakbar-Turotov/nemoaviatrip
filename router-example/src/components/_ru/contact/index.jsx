import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import MapEmbed from './MapEmbed';

export default function ContactSection() {
    return (
        <div className="pt-8" id="contact">
            <div className="bg-gray-100 min-h-screen py-12">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4 text-gray-800">
                            Связаться с нами
                        </h2>
                        <p className="text-xl text-gray-600">
                            Есть вопросы? Мы рады помочь вам
                        </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <ContactForm />
                        <div className="space-y-6">
                            <ContactInfo
                                address="Адрес: г. Ташкент, ул. Мукими, 44-А уй"
                                phone="+998 95 150 00 00"
                                email="info@nemoavia.uz"
                                hours="Пн-Сб 24 часа"
                            />
                            <MapEmbed />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
