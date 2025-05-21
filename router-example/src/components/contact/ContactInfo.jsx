export default function ContactInfo({ address, phone, email, hours }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Aloqa ma'lumotlari
            </h3>
            <div className="space-y-4 text-gray-600">
                <p><strong>Manzil:</strong> {address}</p>
                <p><strong>Tel:</strong> {phone}</p>
                <p><strong>Email:</strong> {email}</p>
                <p><strong>Ish vaqti:</strong> {hours}</p>
            </div>
        </div>
    );
}
