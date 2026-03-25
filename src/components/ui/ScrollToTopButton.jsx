import { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeoutId;

    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
        setIsScrolling(true);
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsScrolling(false);
        }, 2000);
      } else {
        setIsVisible(false);
        setIsScrolling(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
      clearTimeout(timeoutId);
    };
  }, []);

  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    e.currentTarget.blur();
  };

  return (
    isVisible &&
    isScrolling && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 bg-[#29f67a] text-black p-4 rounded-full shadow-lg hover:bg-[#29f67a]/90 hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#29f67a] focus:ring-opacity-50 z-50 group"
        aria-label="Scroll to top"
      >
        <FiArrowUp className="h-5 w-5 group-hover:-translate-y-0.5 transition-transform" />
      </button>
    )
  );
}