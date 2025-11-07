import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      className="about-section"
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(90deg, #000000 0%, #121212 85%, #f0f0f006 100%)",
        color: "#ffffff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Poppins, sans-serif",
        padding: "100px 40px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft white glow background */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "900px",
          height: "900px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%)",
          filter: "blur(80px)",
          zIndex: 0,
        }}
      ></div>

      <div
        style={{
          maxWidth: "1180px",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          position: "relative",
          zIndex: 2,
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Left Image */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="about-image"
          style={{
            flex: "1 1 360px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="/assets/portfolio/about.jpg"
            alt="About Code Orbit Technologies"
            style={{
              width: "100%",
              maxWidth: "380px",
              height: "auto",
              borderRadius: "16px",
              boxShadow: "0 0 40px rgba(255,255,255,0.08)",
            }}
          />
        </motion.div>

        {/* Right Content */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="about-content"
          style={{
            flex: "1 1 500px",
            maxWidth: "620px",
          }}
        >
          <h2
            style={{
              fontSize: "44px",
              fontWeight: 700,
              marginBottom: "20px",
              background: "linear-gradient(90deg, #3b9dff, #00d4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              letterSpacing: "1px",
              textAlign: "left",
            }}
          >
            About Code Orbit Technologies
          </h2>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.85)",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Code Orbit Technologies is a forward-thinking digital agency
            committed to driving business growth through innovation, creativity,
            and strategy. Based in Lucknow, we specialize in crafting
            data-driven marketing campaigns, impactful brand design, and smart
            digital experiences that help businesses scale and connect with
            their audiences effectively.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.85)",
              marginBottom: "20px",
              textAlign: "justify",
            }}
          >
            Our mission is to empower brands with intelligent digital solutions
            — combining technology, design, and marketing expertise to create
            measurable results. From startups to established enterprises, we
            help every client unlock their full digital potential.
          </p>

          <p
            style={{
              fontSize: "18px",
              lineHeight: 1.8,
              color: "rgba(255,255,255,0.85)",
              textAlign: "justify",
            }}
          >
            At Code Orbit Technologies, innovation isn’t just what we do — it’s
            who we are. We’re passionate about transforming ideas into impactful
            digital realities that shape the future of brands and businesses.
          </p>
        </motion.div>
      </div>

      {/* ✅ Responsive styles inline for simplicity */}
      <style>
        {`
        @media (max-width: 1024px) {
          .about-section {
            padding: 80px 30px !important;
          }
          .about-content h2 {
            font-size: 36px !important;
            text-align: center !important;
          }
          .about-content p {
            font-size: 16px !important;
          }
        }

        @media (max-width: 768px) {
          .about-section {
            padding: 70px 20px !important;
            flex-direction: column !important;
          }
          .about-image img {
            max-width: 300px !important;
          }
          .about-content {
            max-width: 100% !important;
            text-align: center !important;
          }
          .about-content h2 {
            font-size: 30px !important;
            text-align: center !important;
          }
          .about-content p {
            font-size: 15px !important;
            text-align: justify !important;
          }
        }

        @media (max-width: 480px) {
          .about-section {
            padding: 60px 16px !important;
          }
          .about-image img {
            max-width: 260px !important;
          }
          .about-content h2 {
            font-size: 26px !important;
          }
          .about-content p {
            font-size: 14px !important;
            line-height: 1.7 !important;
          }
        }
        `}
      </style>
    </section>
  );
}
