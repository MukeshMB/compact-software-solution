import Link from "next/link";
import { useRef } from "react";

export default function BouncingSplashButton() {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleMouseEnter = () => {
        const button = buttonRef.current;
        if (!button) return;

        const ripple = document.createElement("span");
        ripple.className = "hover-ripple";
        ripple.style.left = "50%";
        ripple.style.top = "50%";
        ripple.style.transform = "translate(-50%, -50%)";

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <div className="mt-8">
            <Link
                href="#contacts"
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                className="relative overflow-hidden inline-block bg-orange-500 hover:bg-orange-600 text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg transition-all duration-300 bouncing-button hover:scale-105"
            >
                Read More
            </Link>
        </div>
    );
}
