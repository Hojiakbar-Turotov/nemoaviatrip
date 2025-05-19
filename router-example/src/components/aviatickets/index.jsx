import React, { useState } from "react";
import Aviatickets from "./aviaticket";

export default function AviaChiptalar() {

    const [tripType, setTripType] = useState("oneway");
    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [departureDate, setDepartureDate] = useState("");
    const [returnDate, setReturnDate] = useState("");
    const [passengers, setPassengers] = useState(1);

    function handleSearch() {
        alert(`Qidirilmoqda: ${from} -> ${to}, ${departureDate} ${tripType === "roundtrip" ? `| ${returnDate}` : ""}, Yo'lovchilar: ${passengers}`);
    }

    return (
        <>
            <div className=" pb-14 pt-10 md:pb-24 bg-gray-100" id="hotels">
                <div className="container mx-auto pt-4">
                    <Aviatickets
                        tripType={tripType}
                        setTripType={setTripType}
                        from={from}
                        setFrom={setFrom}
                        to={to}
                        setTo={setTo}
                        departureDate={departureDate}
                        setDepartureDate={setDepartureDate}
                        returnDate={returnDate}
                        setReturnDate={setReturnDate}
                        passengers={passengers}
                        setPassengers={setPassengers}
                        onSearch={handleSearch}
                    />
                </div>
            </div>
        </>
    )
}
