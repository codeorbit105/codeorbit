import React from "react";

export default function VisionMission() {
  return (
    <section
      style={{
        width: "100vw",
        minHeight: "100vh",
        // background:
        //   "radial-gradient(circle at center, rgba(5,20,50,1) 0%, rgba(0,10,30,1) 100%)",
        background: "121212",

        color: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        padding: "100px 20px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          width: "600px",
          height: "600px",
          background:
            "radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%)",

          transform: "translate(-50%, -50%)",
          zIndex: 0,
          filter: "blur(80px)",
        }}
      ></div>

      {/* Section Label */}
      <div
        style={{
          background: "linear-gradient(90deg, #004cff, #00c2ff)",
          color: "#fff",
          fontWeight: "600",
          fontSize: "13px",
          letterSpacing: "1px",
          padding: "8px 24px",
          borderRadius: "20px",
          textTransform: "uppercase",
          zIndex: 2,
          marginBottom: "30px",
          boxShadow: "0 0 25px rgba(0,150,255,0.4)",
        }}
      >
        Vision & Mission
      </div>

      {/* Mission Section */}
      <div style={{ maxWidth: "900px", marginBottom: "60px", zIndex: 2 }}>
        <h2
          style={{
            fontSize: "46px",
            fontWeight: "800",
            lineHeight: "1.3",
            marginBottom: "20px",
          }}
        >
          Code Orbit Technologies’s{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #00b4ff, #00e0ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Mission
          </span>
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#cfe2ff",
            maxWidth: "800px",
            margin: "0 auto 30px",
          }}
        >
          At Code Orbit Technologies, our mission is to empower brands with
          tailored digital marketing strategies that drive measurable business
          growth. Our core services are designed to deliver real, lasting
          results.
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#b8d7ff",
          }}
        >
          <li>• Search Engine Optimization (SEO)</li>
          <li>• Content Marketing</li>
          <li>• Social Media Marketing</li>
          <li>• Email Marketing</li>
        </ul>
      </div>

      {/* Vision Section */}
      <div style={{ maxWidth: "900px", zIndex: 2 }}>
        <h2
          style={{
            fontSize: "46px",
            fontWeight: "800",
            lineHeight: "1.3",
            marginBottom: "20px",
          }}
        >
          Code Orbit Technologies’s{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #8b5cf6, #00b4ff)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Vision
          </span>
        </h2>
        <p
          style={{
            fontSize: "18px",
            lineHeight: "1.7",
            color: "#cfe2ff",
            maxWidth: "800px",
            margin: "0 auto 30px",
          }}
        >
          Code Orbit Technologies envisions becoming the leading digital
          marketing agency in the Business sector — a trusted partner known for
          driving innovation, measurable results, and sustainable growth.
        </p>

        <ul
          style={{
            listStyle: "none",
            padding: 0,
            fontSize: "17px",
            lineHeight: "1.8",
            color: "#b8d7ff",
          }}
        >
          <li>• Combining creativity with data-driven insights.</li>
          <li>• Understanding the complexities of the B2B landscape.</li>
          <li>• Prioritizing collaboration and transparency with clients.</li>
          <li>
            • Turning challenges into opportunities to unlock a business’s full
            potential.
          </li>
        </ul>
      </div>
    </section>
  );
}
