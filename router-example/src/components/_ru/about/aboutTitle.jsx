export default function AboutTitle({ title, subtitle }) {
    return (
        <div className="text-center mb-16">
            <h1 className="text-4xl font-bold mb-6">{title}</h1>
            <p className="text-xl text-gray-600">{subtitle}</p>
        </div>
    );
}
