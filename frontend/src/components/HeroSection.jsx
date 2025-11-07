import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const logos = [
    "/assets/logos/download1.jpg",
    "/assets/logos/download2.jpg",
    "/assets/logos/download3.jpg",
    "/assets/logos/download4.jpg",
    "/assets/logos/download5.jpg",
  ];

  const loopedLogos = [...logos, ...logos];

  return (
    <section className="hero-section hero">
      {/* 🎥 Background Video */}
      <video className="bg-video" autoPlay loop muted playsInline>
        <source src="/assets/videos/videoplayback.mp4" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="overlay"></div>

      {/* ✨ Hero Glow and Plate */}
      <div className="hero-glow"></div>
      <div className="hero-plate"></div>

      {/* Hero Content */}
      <motion.div
        className="hero-content hero-inner"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        <h1 className="hero-title grad-text">CODE ORBIT TECHNOLOGIES</h1>
        <p className="hero-subtitle">
          Your Growth Partner and the Leading Digital Marketing Agency in
          Lucknow.
        </p>

        <a href="#contact" className="hero-cta">
          Get Started
        </a>
      </motion.div>

      {/* Trusted Clients Section */}
      <div className="trusted-section">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowered by trusted partners who believe in our passion and
          performance
        </motion.p>

        <motion.div
          className="logo-slider"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          }}
        >
          {loopedLogos.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`client-${i}`}
              className="logo-img"
              whileHover={{ scale: 1.1, opacity: 1 }}
            />
          ))}
        </motion.div>
      </div>

      {/* 💅 Responsive Styling */}
      <style>{`
        /* ===== HERO BASE ===== */
        .hero-section {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #fff;
          overflow: hidden;
          padding: 0 1rem;
          font-family: 'Poppins', sans-serif;
        }

        /* 🎥 Video Background */
        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(0, 0, 0, 0.55);
          z-index: 1;
        }

        /* 🔆 Hero Content */
        .hero-content {
          position: relative;
          z-index: 5;
          max-width: 900px;
          padding: 0 1rem;
        }

        .hero-title {
          font-size: clamp(2rem, 6vw, 5.5rem);
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 4px;
          text-shadow: 0 0 25px rgba(0,180,255,0.4), 0 0 60px rgba(0,80,255,0.2);
          margin-bottom: 1rem;
        }

        .grad-text {
          background: linear-gradient(90deg, #3cb7ff, #7dd3fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .hero-subtitle {
          font-size: clamp(1rem, 2vw, 1.3rem);
          color: #d9e9ff;
          opacity: 0.9;
          margin: 0 auto 2rem;
          line-height: 1.6;
          max-width: 720px;
        }

        /* CTA */
        .hero-cta {
          display: inline-block;
          background: linear-gradient(90deg, #3b9dff, #00d4ff);
          color: #001033 !important;
          padding: 0.9rem 2.2rem;
          border-radius: 12px;
          font-weight: 700;
          text-decoration: none;
          box-shadow: 0 8px 30px rgba(0, 212, 255, 0.25);
          transition: all 0.3s ease;
        }

        .hero-cta:hover {
          transform: translateY(-3px);
          box-shadow: 0 12px 36px rgba(0, 212, 255, 0.35);
        }

        /* 🌌 Glow + Floating Plate */
        .hero-glow {
          position: absolute;
          top: -200px;
          left: -200px;
          width: 700px;
          height: 700px;
          background: radial-gradient(circle, rgba(59, 157, 255, 0.35) 0%, rgba(0, 0, 0, 0) 75%);
          filter: blur(120px);
          z-index: 1;
          animation: floatGlow 10s ease-in-out infinite alternate;
        }

        .hero-plate {
          position: absolute;
          right: 8%;
          top: 25%;
          width: 380px;
          height: 380px;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.03);
          box-shadow: 0 0 100px rgba(0, 0, 0, 0.4);
          opacity: 0.06;
          z-index: 0;
          animation: floatPlate 12s ease-in-out infinite alternate;
        }

        @keyframes floatGlow {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(30px) translateX(20px); }
        }

        @keyframes floatPlate {
          0% { transform: translateY(0px) translateX(0px); }
          100% { transform: translateY(-25px) translateX(-15px); }
        }

        /* ===== TRUSTED CLIENTS ===== */
        .trusted-section {
          position: relative;
          z-index: 3;
          margin-top: 5rem;
          width: 100%;
          overflow: hidden;
        }

        .trusted-section p {
          font-size: 1.1rem;
          color: #b0c4de;
          max-width: 800px;
          margin: 0 auto 2.5rem;
        }

        .logo-slider {
          display: flex;
          gap: 3rem;
          width: max-content;
          align-items: center;
        }

        .logo-img {
          width: 120px;
          height: auto;
          opacity: 0.85;
          border-radius: 6px;
          transition: transform 0.3s ease, opacity 0.3s ease;
        }

        /* =============== RESPONSIVE BREAKPOINTS =============== */

        /* 📱 Phones */
        @media (max-width: 576px) {
          .hero-section {
            padding: 0 1.2rem;
          }
          .hero-subtitle {
            margin-bottom: 1.8rem;
          }
          .hero-cta {
            padding: 0.8rem 1.8rem;
            font-size: 0.9rem;
          }
          .hero-glow {
            width: 400px;
            height: 400px;
            filter: blur(80px);
          }
          .hero-plate {
            width: 180px;
            height: 180px;
            right: 5%;
            top: 35%;
          }
          .logo-img {
            width: 90px;
          }
        }

        /* 📲 Tablets */
        @media (min-width: 577px) and (max-width: 992px) {
          .hero-title {
            letter-spacing: 3px;
          }
          .hero-plate {
            width: 260px;
            height: 260px;
            right: 6%;
            top: 28%;
          }
          .trusted-section p {
            font-size: 1rem;
          }
        }

        /* 💻 Large Screens */
        @media (min-width: 1200px) {
          .hero-title {
            font-size: 5rem;
          }
          .hero-subtitle {
            font-size: 1.4rem;
          }
          .logo-img {
            width: 140px;
          }
        }

        /* 🖥️ Ultra-Wide */
        @media (min-width: 1600px) {
          .hero-content {
            max-width: 1000px;
          }
        }
      `}</style>
    </section>
  );
}
