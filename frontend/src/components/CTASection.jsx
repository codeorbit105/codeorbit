import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CTASection() {
  const [counts, setCounts] = useState({
    projects: 0,
    sales: 0,
    years: 0,
    hours: 0,
  });

  // ✅ Counter animation
  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    let frame = 0;

    const interval = setInterval(() => {
      frame++;
      setCounts({
        projects: Math.min(150, Math.floor((frame / steps) * 150)),
        sales: Math.min(5, Math.floor((frame / steps) * 5)),
        years: Math.min(3, Math.floor((frame / steps) * 3)),
        hours: Math.min(250, Math.floor((frame / steps) * 250)),
      });
      if (frame >= steps) clearInterval(interval);
    }, duration / steps);
  }, []);

  return (
    <section
      className="cta-section"
      style={{
        width: "100%",
        background: "#121212",
        color: "#fff",
        padding: "150px 60px 120px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "-150px",
        overflow: "hidden",
      }}
    >
      {/* ---------- TOP CONTENT ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "60px",
          width: "100%",
          maxWidth: "1200px",
          alignItems: "flex-start",
        }}
      >
        {/* LEFT SIDE TEXT */}
        <div style={{ flex: 1, minWidth: "300px", maxWidth: "500px" }}>
          <p
            style={{
              fontSize: "17px",
              lineHeight: "1.8",
              color: "#bcd3f5",
            }}
          >
            At{" "}
            <span style={{ fontWeight: "700", color: "#fff" }}>
              Code Orbit Technologies
            </span>
            , we help brands accelerate growth through smart design, data-driven
            marketing, and digital innovation. We craft strategies that deliver
            measurable impact and sustainable success.
          </p>
        </div>

        {/* RIGHT SIDE TEXT */}
        <div style={{ flex: 1.2, minWidth: "340px" }}>
          <h2
            style={{
              fontSize: "34px",
              lineHeight: "1.4",
              fontWeight: "700",
            }}
          >
            We craft{" "}
            <span
              style={{
                color: "#4cc9ff",
                fontWeight: "800",
              }}
            >
              impactful strategies
            </span>{" "}
            and{" "}
            <span
              style={{
                color: "#4cc9ff",
                fontWeight: "800",
              }}
            >
              digital solutions
            </span>{" "}
            that elevate your brand and deliver measurable results.
          </h2>
        </div>
      </motion.div>

      {/* ---------- SEPARATOR LINE ---------- */}
      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
          height: "1px",
          background: "rgba(255,255,255,0.15)",
          margin: "60px 0",
        }}
      ></div>

      {/* ---------- STATS SECTION ---------- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexWrap: "wrap",
          width: "100%",
          maxWidth: "1000px",
          textAlign: "center",
          gap: "40px",
        }}
      >
        <StatCard number={`${counts.projects}+`} label="Projects Completed" />
        <StatCard
          number={`₹${counts.sales}Cr+`}
          label="Sales Revenue Generated"
        />
        <StatCard number={`${counts.years}+`} label="Years in Business" />
        <StatCard
          number={`${counts.hours}+`}
          label="Hours of Strategy & Design"
        />
      </motion.div>

      {/* ---------- CTA CARD ---------- */}
      <motion.div
        className="cta-card"
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        style={{
          marginTop: "100px",
          background: "#001b38",
          borderRadius: "20px",
          padding: "60px 40px",
          textAlign: "center",
          boxShadow: "0 0 25px rgba(0,0,0,0.3)",
          maxWidth: "600px",
          width: "100%",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "700",
            color: "#fff",
          }}
        >
          Ready to start a project?
        </h3>
        <p
          style={{
            opacity: 0.85,
            fontSize: "17px",
            marginTop: "10px",
            color: "#bcd3f5",
          }}
        >
          Tell us your idea and let’s build it together.
        </p>
        <a
          href="/start"
          style={{
            display: "inline-block",
            marginTop: "25px",
            background: "#0072ff",
            padding: "14px 42px",
            borderRadius: "30px",
            fontWeight: "600",
            fontSize: "16px",
            color: "#fff",
            textDecoration: "none",
            transition: "0.3s ease",
          }}
          onMouseOver={(e) =>
            (e.target.style.boxShadow = "0 0 20px rgba(0,150,255,0.6)")
          }
          onMouseOut={(e) => (e.target.style.boxShadow = "none")}
        >
          start a project →
        </a>
      </motion.div>

      {/* ✅ Responsive Styles */}
      <style>
        {`
          @media (max-width: 1024px) {
            .cta-section {
              padding: 120px 40px 80px !important;
            }
            .cta-section h2 {
              font-size: 28px !important;
            }
          }

          @media (max-width: 768px) {
            .cta-section {
              padding: 100px 25px 80px !important;
              margin-top: -100px !important;
            }
            .cta-section h2 {
              font-size: 24px !important;
              text-align: center !important;
            }
            .cta-section p {
              font-size: 15px !important;
              text-align: justify !important;
            }
            .cta-card {
              padding: 40px 24px !important;
            }
          }

          @media (max-width: 480px) {
            .cta-section {
              padding: 80px 18px !important;
            }
            .cta-card h3 {
              font-size: 22px !important;
            }
            .cta-card p {
              font-size: 14px !important;
            }
            .cta-card a {
              padding: 12px 28px !important;
              font-size: 14px !important;
            }
            .cta-section h2 {
              font-size: 20px !important;
            }
          }
        `}
      </style>
    </section>
  );
}

/* ✅ Reusable Stat Card */
function StatCard({ number, label }) {
  return (
    <div
      style={{
        minWidth: "180px",
        background: "#001a33",
        border: "1px solid rgba(255,255,255,0.1)",
        borderRadius: "16px",
        padding: "30px 20px",
        boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        transition: "transform 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <h3
        style={{
          fontSize: "36px",
          fontWeight: "800",
          color: "#00bfff",
          marginBottom: "8px",
        }}
      >
        {number}
      </h3>
      <p style={{ color: "#bcd3f5", fontSize: "15px" }}>{label}</p>
    </div>
  );
}
