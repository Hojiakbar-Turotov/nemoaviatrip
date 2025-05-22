import { useEffect, useState } from "react";
import Loader from "../Loader";
import Swal from 'sweetalert2';

export default function ContactForm() {

    const [loading, setLoading] = useState(false);

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        setLoading(true);

        e.preventDefault();

        const token = "7755732780:AAHn3j5Xxn7RGc9HzkmV9bjwhDSrmFdJrdE"; // ← Bot token
        const chatId = "-4877658759"; // ← Guruh chat ID

        const text = `
📥 Yangi murojaat:

👤 Имя: ${formData.name}
📧 Email: ${formData.email}
📱 Номер телефона: ${formData.phone}
📝 Тема: ${formData.subject}
💬 Сообщение: ${formData.message}
        `;

        const url = `https://api.telegram.org/bot${token}/sendMessage`;

        try {
            await fetch(url, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    chat_id: chatId,
                    text: text,
                }),
            });

            Swal.fire({
                title: 'Muvaffaqiyatli!',
                text: 'Xabaringiz yuborildi!',
                icon: 'success',
                confirmButtonText: 'OK'
            })
            setLoading(false);


            setFormData({
                name: "",
                email: "",
                phone: "",
                subject: "",
                message: "",
            });
        } catch (error) {
            alert(" ");
            Swal.fire({
                title: 'Xatolik yuz berdi.',
                text: 'Iltimos qayta urinib ko‘ring.',
                icon: 'error',
                confirmButtonText: 'OK'
            })
            setLoading(false);
            console.error(error);
        }
    };

    return (
        <>
            {
                loading ? <Loader /> : <>
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <InputField id="name" label="Ваше имя" type="text" value={formData.name} onChange={handleChange} />
                            <InputField id="email" label="Ваш email" type="email" value={formData.email} onChange={handleChange} />
                            <InputField id="phone" label="Ваш номер телефона" type="tel" value={formData.phone} onChange={handleChange} />
                            <InputField id="subject" label="Тема" type="text" value={formData.subject} onChange={handleChange} />
                            <div>
                                <label htmlFor="message" className="block text-gray-700 mb-2">
                                    Ваше сообщение
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-800"
                                    value={formData.message}
                                    onChange={handleChange}
                                ></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
                            >
                                Отправка
                            </button>
                        </form>
                    </div>
                </>
            }
        </>
    );
}

function InputField({ id, label, type, value, onChange }) {
    return (
        <div>
            <label htmlFor={id} className="block text-gray-700 mb-2">
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={id}
                required
                value={value}
                onChange={onChange}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-800"
            />
        </div>
    );
}
