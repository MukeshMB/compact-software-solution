import {
  Hourglass,
  Hammer,
  UsersRound,
  ThumbsUp
} from "lucide-react";

const stats = [
  {
    icon: <Hourglass className="text-blue-400 w-6 h-6" />,
    label: "Years Completed",
    value: "30+",
  },
  {
    icon: <Hammer className="text-blue-400 w-6 h-6" />,
    label: "Projects Completed",
    value: "250+",
  },
  {
    icon: <UsersRound className="text-blue-400 w-6 h-6" />,
    label: "Happy Clients",
    value: "7,500+",
  },
  {
    icon: <ThumbsUp className="text-blue-400 w-6 h-6" />,
    label: "Satisfaction Ratio",
    value: "96%",
  },
];

export default function StatsBanner() {
  return (
    <section className="relative py-16 px-4 bg-[#05092D] overflow-hidden">
      {/* Background Grid Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 pointer-events-none" />

      {/* Scrollable Row - Centered */}
      <div className="relative z-10 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex justify-center space-x-6 min-w-max px-2">
          {stats.map((stat, idx) => (
            <div
              key={idx}
              className="min-w-[200px] bg-gradient-to-br from-slate-900 via-gray-800 to-slate-900 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 flex-shrink-0 flex flex-col items-center text-center"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-100 shadow-sm mb-4">
                {stat.icon}
              </div>
              <h3 className="text-2xl font-bold text-white">{stat.value}</h3>
              <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
