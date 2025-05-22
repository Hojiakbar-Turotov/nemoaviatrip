import ScrollAnimated from "../../ScrollAnimated";

export default function Team({ members }) {
    return (
        <div className="mb-16 mt-10 pt-8">
            <h2 className="text-3xl font-bold text-center mb-12">Наша команда
</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {members.map((member, index) => (
                    <>
                        <ScrollAnimated animation="animate__shakeY">
                            <div key={index} className="relative group">
                                <div className="absolute inset-0.5 bg-gradient-to-r from-[#F26522] to-[#E85A1F] rounded-lg blur opacity-40 group-hover:opacity-60 transition duration-300"></div>
                                <div className="relative bg-white rounded-lg shadow-lg p-8 flex items-center justify-center min-h-[120px] cursor-pointer">
                                    <p className="text-xl font-medium text-gray-800">{member}</p>
                                </div>
                            </div>
                        </ScrollAnimated>
                    </>
                ))}
            </div>
        </div>
    );
}
