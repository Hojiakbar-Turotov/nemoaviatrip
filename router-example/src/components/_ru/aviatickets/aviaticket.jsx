import React from "react";

export default function Aviatickets({
    tripType,
    setTripType,
    from,
    setFrom,
    to,
    setTo,
    departureDate,
    setDepartureDate,
    returnDate,
    setReturnDate,
    passengers,
    setPassengers,
    onSearch,
}) {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-0">
            <h1 className="text-3xl font-bold text-nemo-dark mb-8">Авиабилеты</h1>

            {/* Trip Type Buttons */}
            <div className="bg-white rounded-lg shadow-lg p-6 mb-12">
                <div className="flex space-x-4 mb-6">
                    <button
                        className={`px-4 py-2 rounded-md text-white ${tripType === "oneway"
                                ? "bg-[#F26522]"
                                : "bg-gray-100 text-gray-600"
                            }`}
                        onClick={() => setTripType("oneway")}
                    >
                        Отправить
                    </button>
                    <button
                        className={`px-4 py-2 rounded-md text-white ${tripType === "roundtrip"
                                ? "bg-[#F26522]"
                                : "bg-gray-100 text-gray-600"
                            }`}
                        onClick={() => setTripType("roundtrip")}
                    >
                        Возвращение
                    </button>
                </div>

                {/* Inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Откуда
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"
                            value={from}
                            onChange={(e) => setFrom(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Куда
                        </label>
                        <input
                            type="text"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"
                            value={to}
                            onChange={(e) => setTo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                           Дата вылета

                        </label>
                        <input
                            type="date"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"
                            value={departureDate}
                            onChange={(e) => setDepartureDate(e.target.value)}
                        />
                    </div>

                    {/* Return date only shows if roundtrip */}
                    {tripType === "roundtrip" && (
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">
                                Дата возврата

                            </label>
                            <input
                                type="date"
                                className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"
                                value={returnDate}
                                onChange={(e) => setReturnDate(e.target.value)}
                            />
                        </div>
                    )}

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                            Пассажиры
                        </label>
                        <input
                            type="number"
                            min="1"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-nemo-orange focus:border-nemo-orange"
                            value={passengers}
                            onChange={(e) => setPassengers(Number(e.target.value))}
                        />
                    </div>
                </div>

                <button
                    className="w-full mt-6 bg-[#F26522] text-white py-3 rounded-md hover:bg-[#F26522]/90 transition duration-300 cursor-pointer"
                    onClick={onSearch}
                    disabled={!from || !to || !departureDate || (tripType === "roundtrip" && !returnDate)}
                >
                    Поиск
                </button>
            </div>
        </div>
    );
}
