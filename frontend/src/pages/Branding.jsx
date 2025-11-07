import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function Branding() {
  const [openIndex, setOpenIndex] = useState(null);

  const services = [
    {
      title: "Brand Identity",
      desc: "We craft unique brand identities that reflect your vision and connect emotionally with your audience — from logos and color palettes to visual guidelines.",
    },
    {
      title: "Rebranding",
      desc: "We help businesses evolve by redefining their brand strategy, design, and voice to stay relevant, modern, and aligned with their goals.",
    },
    {
      title: "Brand Architecture",
      desc: "We organize complex brand structures into a clear hierarchy, making your products and sub-brands easily recognizable and strategically positioned.",
    },
    {
      title: "Brand Management",
      desc: "From consistency in design to ongoing marketing support, we manage every touchpoint of your brand to ensure it maintains strength and clarity.",
    },
    {
      title: "Brand Strategy",
      desc: "Our strategic planning defines your brand’s purpose, positioning, and promise — building a foundation for growth and recognition in your market.",
    },
    {
      title: "Packaging & Visual Design",
      desc: "We create impactful packaging and visual assets that capture attention, communicate quality, and build strong first impressions for your customers.",
    },
  ];

  const toggleService = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        minHeight: "100vh",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "180px 8vw 120px",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "56px",
            fontWeight: "700",
            lineHeight: "1.2",
            background: "linear-gradient(90deg, #00bfff, #a855f7)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          “Your branding experts,
          <br />
          crafting compelling stories
          <br />
          that appeal to your market.”
        </motion.h1>
      </section>

      {/* ===== CASE STUDY SECTION ===== */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 8vw",
        }}
      >
        <h2 style={{ fontSize: "24px", color: "#b0c4de" }}>
          Read the branding{" "}
          <span style={{ color: "#00bfff" }}>case study...</span>
        </h2>

        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(0,191,255,0.2)",
            borderRadius: "14px",
            padding: "40px",
            marginTop: "40px",
            maxWidth: "800px",
            marginInline: "auto",
            textAlign: "left",
          }}
        >
          <img
            src="/assets/projects/ITAL.png"
            alt="ITAL Brokers"
            style={{
              width: "75%",
              display: "block",
              margin: "0 auto 25px",
              borderRadius: "12px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.3)",
            }}
          />
          <h3 style={{ fontSize: "26px", fontWeight: "600" }}>ITAL Brokers</h3>
          <p style={{ color: "#b0c4de", marginTop: "8px" }}>
            Insurance broker | Web, Branding, Marketing
          </p>
          <a
            href="https://italbrokers.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              marginTop: "15px",
              color: "#00bfff",
              textDecoration: "none",
              fontWeight: "500",
            }}
          >
            www.italbrokers.com →
          </a>
        </motion.div>
      </section>

      {/* ===== EXPERTISE SECTION ===== */}
      <section
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "100px 8vw",
          borderTop: "1px solid rgba(255,255,255,0.1)",
          gap: "60px",
        }}
      >
        {/* LEFT TEXT */}
        <div style={{ flex: "1", minWidth: "340px" }}>
          <h2
            style={{
              fontSize: "46px",
              fontWeight: "700",
              lineHeight: "1.3",
              color: "#fff",
            }}
          >
            <span style={{ color: "#00bfff" }}>Brand experts</span> that can
            help you design a brand that resonates with your{" "}
            <span style={{ color: "#00e6e6" }}>audience.</span>
          </h2>

          <button
            style={{
              background: "linear-gradient(90deg, #005eff, #00d4ff)",
              border: "none",
              color: "#fff",
              padding: "12px 28px",
              borderRadius: "25px",
              fontWeight: "600",
              marginTop: "30px",
              cursor: "pointer",
              transition: "0.3s",
            }}
            onMouseEnter={(e) => (e.target.style.opacity = 0.8)}
            onMouseLeave={(e) => (e.target.style.opacity = 1)}
          >
            OUR EXPERTISE
          </button>
        </div>

        {/* RIGHT TEXT */}
        <div
          style={{
            flex: "1",
            minWidth: "340px",
            color: "#b0c4de",
            fontSize: "17px",
            lineHeight: "1.8",
            marginTop: "30px",
          }}
        >
          We are your branding agency in India. Our approach focuses on creating
          a powerful brand presence, ensuring you captivate your audience and
          leave an indelible mark. We help your brand grow and expand through
          expert graphic design and innovative brand strategies.
        </div>
      </section>

      {/* ===== INTERACTIVE SERVICE LIST ===== */}
      <section style={{ padding: "60px 8vw 100px" }}>
        {services.map((service, i) => (
          <div key={i}>
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              onClick={() => toggleService(i)}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                padding: "22px 0",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "15px",
                }}
              >
                <span style={{ color: "#00bfff", fontWeight: "500" }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h4 style={{ fontSize: "20px", fontWeight: "500" }}>
                  {service.title}
                </h4>
              </div>

              <motion.span
                animate={{ rotate: openIndex === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                style={{
                  fontSize: "22px",
                  color: "#00bfff",
                }}
              >
                ⌄
              </motion.span>
            </motion.div>

            {/* Expandable content */}
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  style={{
                    overflow: "hidden",
                    padding: "15px 10px 25px 60px",
                    color: "rgba(255,255,255,0.85)",
                    lineHeight: "1.7",
                    fontSize: "16px",
                  }}
                >
                  {service.desc}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </section>
    </div>
  );
}
