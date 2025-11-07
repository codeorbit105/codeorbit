import React from "react";
import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Photography() {
  return (
    <div
      style={{
        background: "#121212",
        color: "#fff",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* ==== HERO SECTION ==== */}
      <section
        style={{
          textAlign: "center",
          padding: "160px 8vw 120px",
          background: "#121212",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p
            style={{
              display: "inline-block",
              background: "#121212",
              color: "#fff",
              padding: "6px 18px",
              borderRadius: "20px",
              fontSize: "13px",
              letterSpacing: "1px",
              marginBottom: "24px",
            }}
          >
            🎬 CONTENT CREATION
          </p>

          <h1
            style={{
              fontSize: "56px",
              fontWeight: "700",
              lineHeight: "1.3",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            The idea is not to{" "}
            <span style={{ color: "#00c3ff" }}>live forever</span>, but to{" "}
            <span style={{ color: "#00c3ff" }}>create</span> something{" "}
            <span style={{ color: "#00c3ff" }}>that will.</span>
          </h1>
          <p
            style={{
              fontStyle: "italic",
              fontSize: "18px",
              color: "#a0b9d6",
              marginTop: "20px",
            }}
          >
            — Andy Warhol
          </p>
        </motion.div>
      </section>

      {/* ==== VIDEO SECTION ==== */}
      <section
        style={{
          textAlign: "center",
          padding: "60px 0 100px",
          background: "#121212",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          style={{
            width: "80%",
            margin: "0 auto",
            borderRadius: "20px",
            overflow: "hidden",
            boxShadow: "0 0 40px rgba(0, 200, 255, 0.1)",
          }}
        >
          {/* Replace this video source with your own */}
          <video
            src="/assets/videos/video1.mp4"
            autoPlay
            loop
            muted
            playsInline
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20px",
              display: "block",
            }}
          />
        </motion.div>
      </section>

      {/* ==== QUOTE SECTION ==== */}
      <section
        style={{
          textAlign: "center",
          padding: "120px 8vw",
          background: "#121212",
        }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: "50px",
            fontWeight: "700",
            lineHeight: "1.4",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          “Through the lens of{" "}
          <span style={{ color: "#d48fff" }}>creativity</span> we turn your
          brand’s vision into visuals that{" "}
          <span style={{ color: "#d48fff" }}>captivate</span> and leave a{" "}
          <span style={{ color: "#d48fff" }}>lasting impact.</span>”
        </motion.h2>
      </section>

      {/* ==== OUR PROCESS ==== */}
      <section
        style={{
          margin: "80px 8vw",
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02))",
          borderRadius: "20px",
          padding: "80px 5vw",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "inline-block",
            background: "linear-gradient(90deg, #007bff, #00d4ff)",
            color: "#fff",
            padding: "6px 16px",
            borderRadius: "20px",
            fontSize: "13px",
            letterSpacing: "1px",
            marginBottom: "20px",
          }}
        >
          OUR PROCESS
        </div>

        <h2
          style={{
            fontSize: "42px",
            fontWeight: "700",
            marginBottom: "10px",
          }}
        >
          The <span style={{ color: "#00bfff" }}>money shots.</span>
        </h2>
        <p style={{ color: "#b0c4de", fontSize: "17px", marginBottom: "60px" }}>
          We work at the intersection of strategy, creativity, and technology to
          help our clients digitally reinvent their businesses.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-around",
            gap: "40px",
          }}
        >
          {[
            {
              title: "📅 Planning",
              desc: "We help you plan, organize, and manage photoshoots and post-production sessions effectively.",
            },
            {
              title: "🎥 Shooting",
              desc: "Our team collaborates with top artists and camera professionals to craft cinematic visuals.",
            },
            {
              title: "🎬 Post Production",
              desc: "We add the final touches through advanced editing, color correction, and sound design.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              style={{
                background: "rgba(255,255,255,0.05)",
                borderRadius: "14px",
                padding: "30px",
                flex: "1",
                minWidth: "250px",
                textAlign: "left",
              }}
            >
              <h3 style={{ fontSize: "20px", marginBottom: "10px" }}>
                {item.title}
              </h3>
              <p style={{ color: "#b0c4de", fontSize: "15px" }}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
