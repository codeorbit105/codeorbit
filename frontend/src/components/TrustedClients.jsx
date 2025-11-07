import React from "react";
import { motion } from "framer-motion";

const logos = [
  "/assets/logos/download1.jpg",
  "/assets/logos/download2.jpg",
  "/assets/logos/download3.jpg",
  "/assets/logos/download4.jpg",
  "/assets/logos/download5.jpg",
];

export default function TrustedClients() {
  const loopedLogos = [...logos, ...logos];

  return (
    <section id="trusted" className="trusted-section">
      {/* Heading */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="trusted-text"
      >
        Our journey is built alongside trusted partners who believe in our
        creativity and expertise.
      </motion.p>

      {/* Continuous Scrolling Logos */}
      <div className="trusted-slider-container">
        <motion.div
          className="trusted-slider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25, // smooth speed
            ease: "linear",
          }}
        >
          {loopedLogos.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`client-${i}`}
              className="trusted-logo"
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
          ))}
        </motion.div>
        {/* Fades on both sides for infinite illusion */}
        <div className="fade-left" />
        <div className="fade-right" />
      </div>

      {/* 💅 Embedded Responsive Styles */}
      <style>{`
        /* ===== BASE SECTION ===== */
        .trusted-section {
          width: 100%;
          background: linear-gradient(180deg, #001a3a 0%, #00081a 100%);
          position: relative;
          overflow: hidden;
          text-align: center;
          padding: 60px 20px 100px;
          color: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .trusted-text {
          font-size: clamp(1rem, 2vw, 1.25rem);
          font-weight: 400;
          color: #b0c4de;
          max-width: 800px;
          margin: 0 auto 50px;
          line-height: 1.6;
        }

        /* ===== SLIDER CONTAINER ===== */
        .trusted-slider-container {
          position: relative;
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        }

        .trusted-slider {
          display: flex;
          gap: 60px;
          align-items: center;
          width: max-content;
        }

        .trusted-logo {
          width: 140px;
          height: auto;
          opacity: 0.85;
          border-radius: 8px;
          transition: transform 0.3s ease, opacity 0.3s ease;
          filter: drop-shadow(0 0 8px rgba(0, 200, 255, 0.2));
        }

        .trusted-logo:hover {
          opacity: 1;
          transform: scale(1.08);
        }

        /* ===== FADE EFFECTS ===== */
        .fade-left,
        .fade-right {
          position: absolute;
          top: 0;
          width: 15%;
          height: 100%;
          pointer-events: none;
          z-index: 5;
        }

        .fade-left {
          left: 0;
          background: linear-gradient(to right, #00081a 0%, transparent 100%);
        }

        .fade-right {
          right: 0;
          background: linear-gradient(to left, #00081a 0%, transparent 100%);
        }

        /* ===== RESPONSIVE DESIGN ===== */

        /* 📱 Small Phones */
        @media (max-width: 576px) {
          .trusted-section {
            padding: 40px 10px 80px;
          }
          .trusted-text {
            font-size: 1rem;
            margin-bottom: 30px;
          }
          .trusted-slider {
            gap: 30px;
          }
          .trusted-logo {
            width: 90px;
            opacity: 0.9;
          }
        }

        /* 📲 Tablets */
        @media (min-width: 577px) and (max-width: 992px) {
          .trusted-section {
            padding: 60px 20px 100px;
          }
          .trusted-slider {
            gap: 45px;
          }
          .trusted-logo {
            width: 120px;
          }
        }

        /* 💻 Large Screens */
        @media (min-width: 1200px) {
          .trusted-logo {
            width: 160px;
          }
          .trusted-slider {
            gap: 70px;
          }
        }
      `}</style>
    </section>
  );
}
