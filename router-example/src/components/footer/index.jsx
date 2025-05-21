import FooterColumn from "./FooterColumn";
import FooterSocial from "./FooterSocial";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white" data-aos="fade-up">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          <div className="space-y-4">
            <img className="w-28" src="https://www.nemoaviatrip.uz/assets/logo_white-B6aJPl_J.png" alt="Logo" />
            <p className="text-gray-400">Toshkent shahri, Muqimiy ko'chasi 44-A uy</p>
          </div>

          <FooterColumn
            title="Bog'lanish"
            items={["Tel: +998 95 150 00 00", "info@nemoavia.uz"]}
          />

          <FooterSocial
            telegram="https://t.me/NemoTC"
            instagram="https://instagram.com/nemotravel_uz"
            email="info@nemoaviatrip.uz"
          />

          <FooterColumn
            title="Manzil"
            items={["Toshkent shahri, Muqimiy ko'chasi 44-A uy"]}
          />

        </div>

        <div className="pt-8 mt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            2025 Nemo Avia Trip. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
