import { FaTelegram, FaInstagram, FaEnvelope } from "react-icons/fa";

const FooterSocial = ({ telegram, instagram, email }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold">Социальные сети
</h3>
      <div className="flex space-x-4 text-gray-400">
        <a href={telegram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <FaTelegram className="w-6 h-6" />
        </a>
        <a href={instagram} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
          <FaInstagram className="w-6 h-6" />
        </a>
        <a href={`mailto:${email}`} className="hover:text-white transition-colors">
          <FaEnvelope className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
};

export default FooterSocial;
