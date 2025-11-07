import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsVisible(true);
      else setIsVisible(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          style={{
            position: "fixed",
            bottom: "30px",
            right: "30px",
            background: "linear-gradient(90deg, #3b9dff, #00d4ff)",
            color: "#fff",
            border: "none",
            borderRadius: "10px",
            padding: "12px 14px",
            cursor: "pointer",
            boxShadow: "0 4px 15px rgba(0, 212, 255, 0.3)",
            transition: "all 0.3s ease",
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.boxShadow = "0 0 18px rgba(0, 212, 255, 0.6)";
            e.target.style.transform = "translateY(-3px)";
          }}
          onMouseLeave={(e) => {
            e.target.style.boxShadow = "0 4px 15px rgba(0, 212, 255, 0.3)";
            e.target.style.transform = "translateY(0)";
          }}
          aria-label="Scroll to top"
        >
          <FaArrowUp size={18} />
        </button>
      )}
    </>
  );
}
