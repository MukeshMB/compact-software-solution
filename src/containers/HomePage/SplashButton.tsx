import Link from "next/link";
import { useRef } from "react";

export default function SplashButton({name, href}: {name: string, href: string}) {
    const buttonRef = useRef<HTMLAnchorElement>(null);

    const handleMouseEnter = () => {
        const button = buttonRef.current;
        if (!button) return;

        const ripple = document.createElement("span");
        ripple.className = "hover-ripple";
        ripple.style.left = `50%`;
        ripple.style.top = `50%`;
        ripple.style.transform = `translate(-50%, -50%)`;

        button.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    };

    return (
        <div className="mt-8">
            <Link
                href={href}
                ref={buttonRef}
                onMouseEnter={handleMouseEnter}
                className="relative overflow-hidden inline-block bg-[#00AA3E] text-white text-sm sm:text-base font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#009237] transition-all duration-300 hover:scale-105"
            >
                {name}
            </Link>
        </div>
    );
}
