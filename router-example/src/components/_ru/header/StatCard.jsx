export default function StatCard({ icon, title, value, iconBgColor = "#F26522" }) {
  return (
    <div className="flex items-start gap-3">
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0"
        style={{ backgroundColor: iconBgColor }}
      >
        {icon}
      </div>
      <div className="flex flex-col items-start">
        <p className="text-sm text-gray-800">{title}</p>
        <p className="font-bold text-lg text-gray-900">{value}</p>
      </div>
    </div>
  );
}
