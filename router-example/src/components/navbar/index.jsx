import { useState } from "react";
import { Menu, X } from "lucide-react"; // Iconlar uchun

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
            <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                <div className="text-2xl font-bold"><img src="https://www.nemoaviatrip.uz/assets/logo_orange-BGoDxPvq.png" alt="Nemo" className="w-[60px]"/></div>

                <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
                    <li><a href="#header" className="hover:text-[rgb(242,101,34)]">Asosiy</a></li>
                    <li><a href="#aboutUs" className="hover:text-[rgb(242,101,34)]">Biz haqimizda</a></li>
                    <li><a href="#tours" className="hover:text-[rgb(242,101,34)]">Turlar</a></li>
                    <li><a href="#hotels" className="hover:text-[rgb(242,101,34)]">Mehmonxonalar</a></li>
                    <li><a href="#" className="hover:text-[rgb(242,101,34)]">Aviachiptalar</a></li>
                    <li><a href="#" className="hover:text-[rgb(242,101,34)]">Aloqa</a></li>
                </ul>

                <button >UZ</button>

                <button className="md:hidden" onClick={toggleMenu}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4">
                    <ul className="flex flex-col space-y-2 text-gray-700 font-medium">
                        <li><a href="#header" className="hover:text-[rgb(242,101,34)]">Asosiy</a></li>
                        <li><a href="#aboutUs" className="hover:text-[rgb(242,101,34)]">Biz haqimizda</a></li>
                        <li><a href="#tours" className="hover:text-[rgb(242,101,34)]">Turlar</a></li>
                        <li><a href="#hotels" className="hover:text-[rgb(242,101,34)]">Mehmonxonalar</a></li>
                        <li><a href="#" className="hover:text-[rgb(242,101,34)]">Aviachiptalar</a></li>
                        <li><a href="#" className="hover:text-[rgb(242,101,34)]">Aloqa</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
