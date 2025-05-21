export default function ContactForm() {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <form className="space-y-6">
                <InputField id="name" label="Ismingiz" type="text" />
                <InputField id="email" label="Email manzilingiz" type="email" />
                <InputField id="phone" label="Telefon raqamingiz" type="tel" />
                <InputField id="subject" label="Mavzu" type="text" />
                <div>
                    <label htmlFor="message" className="block text-gray-700 mb-2">
                        Xabaringiz
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows="4"
                        className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-800"
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-opacity-90 transition duration-300"
                >
                    Yuborish
                </button>
            </form>
        </div>
    );
}

function InputField({ id, label, type }) {
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
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-gray-800"
            />
        </div>
    );
}
