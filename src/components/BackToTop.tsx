"use client";

import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scroll({ top: 0, left: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      className={`fixed flex justify-center items-center right-6 bottom-6
            w-[46px] h-[46px] bg-[#66676b] text-white rounded-full cursor-pointer
            hover:bg-black transition-all duration-500 ease-in-out
            transform ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"} z-50`}
      aria-label="Back to top"
    >
      <FaAngleUp size={18} />
    </button>
  );
}
