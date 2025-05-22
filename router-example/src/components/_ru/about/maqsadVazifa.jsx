export default function MaqsadVaVazifalar({ maqsad, vazifa }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{maqsad.title}</h2>
        <p className="text-gray-600">{maqsad.description}</p>
      </div>
      <div className="bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">{vazifa.title}</h2>
        <p className="text-gray-600">{vazifa.description}</p>
      </div>
    </div>
  );
}
