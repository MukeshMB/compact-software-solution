"use client";

import { useEffect, useRef, useState } from "react";
import {
  UsersRound,
  Hourglass,
  Hammer,
  MessageCircle,
  UserCheck,
} from "lucide-react";

const stats = [
  {
    icon: <UsersRound className="text-blue-500 w-6 h-6" />,
    label: "Happy Clients",
    value: 25000,
    suffix: "+",
  },
  {
    icon: <Hourglass className="text-blue-500 w-6 h-6" />,
    label: "Years in Business",
    value: 29,
    suffix: "+",
  },
  {
    icon: <Hammer className="text-blue-500 w-6 h-6" />,
    label: "Project Deliveries",
    value: 1000,
    suffix: "+",
  },
  {
    icon: <MessageCircle className="text-blue-500 w-6 h-6" />,
    label: "Queries Solved",
    value: 3500,
    suffix: "+",
  },
  {
    icon: <UserCheck className="text-blue-500 w-6 h-6" />,
    label: "Registered Users",
    value: 250000,
    suffix: "",
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
    <section className="relative py-15 px-4 bg-[#09356C] overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-6 px-2">
          {stats.map((stat, idx) => {
            const { count, ref } = useCountUpOnView(stat.value);
            return (
              <div
                key={idx}
                ref={ref}
                className="bg-white border border-gray-200 rounded-xl shadow-md px-4 py-7 text-left flex items-center gap-4 transition-transform duration-500 hover:scale-[1.1] hover:shadow-lg"
              >
                <div className="w-15 h-15 flex items-center justify-center rounded-full border border-blue-100 shadow-sm bg-blue-50">
                  {stat.icon}
                </div>
                <div className="flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-gray-900 tracking-wide leading-tight">
                    {count.toLocaleString()}
                    <span className="text-blue-600 font-bold">{stat.suffix}</span>
                  </h3>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
