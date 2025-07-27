"use client";
import { useEffect, useRef, useState } from "react";
import {
  Hourglass,
  Hammer,
  UsersRound,
  ThumbsUp,
} from "lucide-react";

const stats = [
  {
    icon: <Hourglass className="text-blue-400 w-6 h-6" />,
    label: "Years Completed",
    value: 30,
    suffix: "+",
  },
  {
    icon: <Hammer className="text-blue-400 w-6 h-6" />,
    label: "Projects Completed",
    value: 250,
    suffix: "+",
  },
  {
    icon: <UsersRound className="text-blue-400 w-6 h-6" />,
    label: "Happy Clients",
    value: 7500,
    suffix: "+",
  },
  {
    icon: <ThumbsUp className="text-blue-400 w-6 h-6" />,
    label: "Satisfaction Ratio",
    value: 96,
    suffix: "%",
  },
];

function useCountUpOnView(target: number, duration = 1200) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const increment = target / (duration / 16);
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        start = target;
        clearInterval(interval);
      }
      setCount(Math.round(start));
    }, 16);
    return () => clearInterval(interval);
  }, [hasStarted, target, duration]);

  return { count, ref };
}

export default function StatsBanner() {
  return (
    <section className="relative py-16 px-4 bg-[#05092D] overflow-hidden">
      {/* Background Grid Dots */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e40af_1px,transparent_1px)] bg-[length:20px_20px] opacity-20 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto overflow-x-auto scrollbar-hide">
        <div className="flex justify-center space-x-6 min-w-max px-2 py-5">
          {stats.map((stat, idx) => {
            const { count, ref } = useCountUpOnView(stat.value);

            return (
              <div
                key={idx}
                ref={ref}
                className={`
                  shimmer-text fade-in-up min-w-[200px]
                  bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900
                  backdrop-blur-lg border border-white/10 rounded-2xl shadow-md p-6 flex-shrink-0
                  flex flex-col items-center text-center transform transition duration-500
                  hover:scale-105 border-glow
                `}
                style={{ animationDelay: `${idx * 200}ms` }}
              >
                <div className="w-12 h-12 flex items-center justify-center rounded-full border border-blue-100 shadow-sm mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-extrabold text-white tracking-wide">
                  {count}
                  <span className="text-blue-400 font-bold">{stat.suffix}</span>
                </h3>
                <p className="text-sm text-gray-300 mt-1">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
