import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { motion, AnimatePresence } from "framer-motion";

export default function Consulting() {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const expertiseList = [
    {
      title: "Company Establishment",
      desc: "We assist in setting up your company structure, legal registration, and compliance — ensuring a seamless launch into your target market.",
    },
    {
      title: "Establishing Headquarters",
      desc: "From location scouting to office setup, we guide you in finding the perfect headquarters to position your business for long-term success.",
    },
    {
      title: "Talent Acquisition",
      desc: "We connect you with the right professionals — from tech experts to management leaders — ensuring a powerful team that drives growth.",
    },
    {
      title: "Branding, Marketing & Development",
      desc: "Our experts build a brand strategy that enhances visibility, communicates value, and accelerates business growth through modern digital methods.",
    },
    {
      title: "Market Analysis",
      desc: "We conduct in-depth market research to identify opportunities, audience behavior, and competitive positioning for smarter business decisions.",
    },
    {
      title: "Growth",
      desc: "Through data-driven consulting, we help scale your operations sustainably with proven strategies for expansion and brand excellence.",
    },
  ];

  const services = [
    {
      title: "Smooth Setup",
      desc: "We handle all establishment formalities for a seamless setup process, allowing you to focus on your business goals from day one.",
      highlight: true,
    },
    {
      title: "Prime Location",
      desc: "We help you find the perfect office space tailored to your business needs and environment.",
    },
    {
      title: "Talent Acquisition",
      desc: "Our recruitment process connects you with top talent, building a skilled team that aligns with your vision.",
    },
    {
      title: "Brand Creation",
      desc: "We craft distinctive brand identities that resonate with your target audience and strengthen market positioning.",
      highlight: true,
    },
    {
      title: "Market Insight",
      desc: "Through detailed research, we identify your ideal audience and help position your brand effectively.",
    },
    {
      title: "Growth Marketing",
      desc: "Our marketing strategies boost brand awareness using targeted campaigns to drive measurable impact.",
    },
  ];

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
          padding: "160px 8vw 100px",
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
              color: "#fff",
              padding: "6px 18px",
              borderRadius: "20px",
              fontSize: "13px",
              letterSpacing: "1px",
              marginBottom: "24px",
            }}
          >
            CONSULTING
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
            Your trusted <span style={{ color: "#00c3ff" }}>consultant</span>{" "}
            supporting your business journey from{" "}
            <span style={{ color: "#00c3ff" }}>inception</span> to global
            success.
          </h1>
        </motion.div>
      </section>

      {/* ==== SERVICE CARDS ==== */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "30px",
          padding: "80px 8vw",
        }}
      >
        {services.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            style={{
              background: item.highlight
                ? "linear-gradient(135deg, #00bfff, #007bff)"
                : "rgba(255,255,255,0.05)",
              color: item.highlight ? "#fff" : "#b0c4de",
              borderRadius: "16px",
              padding: "30px",
              minHeight: "220px",
            }}
          >
            <h3
              style={{
                fontSize: "20px",
                fontWeight: "600",
                color: item.highlight ? "#fff" : "#00bfff",
                marginBottom: "10px",
              }}
            >
              {item.title}
            </h3>
            <p style={{ fontSize: "15px", lineHeight: "1.7" }}>{item.desc}</p>
          </motion.div>
        ))}
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
            fontSize: "48px",
            fontWeight: "700",
            lineHeight: "1.4",
            maxWidth: "950px",
            margin: "0 auto",
          }}
        >
          “Empowering your <span style={{ color: "#d48fff" }}>success</span>{" "}
          with a seamless blend of expert{" "}
          <span style={{ color: "#d48fff" }}>guidance</span>, trusted
          partnerships, and tailored{" "}
          <span style={{ color: "#d48fff" }}>strategies</span>—every step of the
          way.”
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
          CONSULTING
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
              title: "📊 Research",
              desc: "We gather insights about your business and audience to define your brand’s core values and unique positioning.",
            },
            {
              title: "🌐 Network",
              desc: "Our trusted network provides expert support for all your business needs, setting you up for long-term success.",
            },
            {
              title: "📈 Market",
              desc: "Our marketing team crafts targeted strategies to boost your visibility and engagement across platforms.",
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

      {/* ==== EXPERTISE SECTION (with accordion) ==== */}
      <section
        style={{
          padding: "100px 8vw 120px",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <div style={{ textAlign: "left", marginBottom: "40px" }}>
          <h2
            style={{ fontSize: "42px", fontWeight: "700", lineHeight: "1.3" }}
          >
            Your growth partners, making expansion seamless and{" "}
            <span style={{ color: "#00bfff" }}>strategic</span> through tailored{" "}
            <span style={{ color: "#00bfff" }}>consulting</span> services.
          </h2>
          <p
            style={{
              color: "#b0c4de",
              fontSize: "17px",
              lineHeight: "1.8",
              marginTop: "20px",
              maxWidth: "800px",
            }}
          >
            Our consulting services pave the way for smooth, strategic growth by
            addressing every business need—from navigating markets to scaling
            operations with confidence.
          </p>
        </div>

        <button
          style={{
            background: "linear-gradient(90deg, #005eff, #00d4ff)",
            border: "none",
            color: "#fff",
            padding: "10px 24px",
            borderRadius: "20px",
            fontWeight: "600",
            marginBottom: "40px",
          }}
        >
          💡 OUR EXPERTISE
        </button>

        {/* Accordion List */}
        <div>
          {expertiseList.map((item, index) => (
            <motion.div
              key={index}
              onClick={() => toggleAccordion(index)}
              whileHover={{ scale: 1.02 }}
              style={{
                borderBottom:
                  index === expertiseList.length - 1
                    ? "none"
                    : "1px solid rgba(255,255,255,0.1)",
                padding: "22px 0",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center", gap: "15px" }}
                >
                  <span style={{ color: "#00bfff", fontWeight: "500" }}>
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h4 style={{ fontSize: "20px", fontWeight: "500" }}>
                    {item.title}
                  </h4>
                </div>
                <motion.span
                  animate={{ rotate: activeAccordion === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ fontSize: "22px", color: "#00bfff" }}
                >
                  ⌄
                </motion.span>
              </div>

              {/* Expandable Description */}
              <AnimatePresence>
                {activeAccordion === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      marginTop: "10px",
                      color: "rgba(255,255,255,0.75)",
                      lineHeight: 1.7,
                      fontSize: "15px",
                      paddingLeft: "50px",
                      maxWidth: "750px",
                    }}
                  >
                    {item.desc}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
