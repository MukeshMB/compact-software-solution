"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

export default function PointsList({ points }: { points?: string[] }) {
    if (!points?.length) return null;

    return (
        <ul className="mt-6 space-y-3 text-sm sm:text-base text-gray-800">
            {points.map((point, i) => (
                <motion.li
                    key={i}
                    className="flex items-start gap-3 cursor-pointer"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.2, ease: "easeOut" }}
                    whileHover={{ scale: 1.05, x: 5 }}
                >
                    <motion.div
                        className="flex items-center"
                        whileHover={{ rotate: 15, scale: 1.2, color: "#2563eb" }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <CheckCircle className="w-5 h-5 text-blue-500 mt-1 transition-colors duration-300" />
                    </motion.div>
                    <motion.span
                        whileHover={{ color: "#1d4ed8" }}
                        transition={{ duration: 0.3 }}
                    >
                        {point}
                    </motion.span>
                </motion.li>
            ))}
        </ul>
    );
}
