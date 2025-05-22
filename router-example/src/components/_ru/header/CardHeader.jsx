import StatCard from "./StatCard";

export default function CardHeader({ stats, buttonText }) {
  return (
    <div className="hero-stats bg-white text-gray-800 backdrop-blur-sm rounded-3xl py-8 px-8 flex flex-col md:flex-row md:flex-wrap justify-center items-center gap-8 md:gap-16 shadow-lg max-w-xs md:max-w-4xl mx-auto">
      {stats.map(({ id, icon, title, value, iconBgColor }) => (
        <StatCard
          key={id}
          icon={icon}
          title={title}
          value={value}
          iconBgColor={iconBgColor}
        />
      ))}

      <button

        className="bg-[#F26522] text-white px-6 py-2 rounded-full hover:bg-[#E85A1F] transition-colors cursor-pointer"
      >
        <a href="#contact">{buttonText}</a>

      </button>
    </div>
  );
}
