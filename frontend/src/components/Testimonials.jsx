import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

const testimonials = [
  {
    stars: 5,
    feedback:
      "We’re extremely satisfied with Code Orbit Technologies. Their digital marketing strategies helped us increase our sales and discover new revenue opportunities.",
    name: "Laurent Guiraud",
    position: "Director @EatIn Monaco",
  },
  {
    stars: 5,
    feedback:
      "Code Orbit Technologies played a key role in boosting our business performance by implementing effective social media marketing and advisory solutions.",
    name: "Jeremy Van Den Eynde",
    position: "Co-Owner @Findr.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      style={{
        // background: "#00081a", // ✅ add back solid background to hide shadow
        padding: "0 20px 140px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        // position: "relative",
        marginTop: "-50px",
        overflow: "hidden", // prevent inner shadows from bleeding out
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "50%",
          transform: "translateX(-50%)",
          width: "900px",
          height: "800px",
          background:
            "radial-gradient(circle, rgba(0,120,255,0.25) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(120px)",
          zIndex: 0,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "90%",
          maxWidth: "1200px",
          textAlign: "center",
          color: "#fff",
        }}
      >
        {/* Section Tag */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            background: "rgba(255,255,255,0.08)",
            display: "inline-block",
            color: "#7dd3fc",
            fontWeight: "600",
            fontSize: "14px",
            padding: "8px 22px",
            borderRadius: "999px",
            letterSpacing: "1px",
            marginBottom: "25px",
          }}
        >
          TESTIMONIALS
        </motion.p>

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{
            fontSize: "54px",
            fontWeight: "700",
            marginBottom: "90px",
            color: "#fff",
          }}
        >
          First impression,{" "}
          <span
            style={{
              background: "linear-gradient(90deg, #3cb7ff, #7dd3fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            our clients
          </span>
        </motion.h2>

        {/* Cards */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "stretch",
            gap: "40px",
            flexWrap: "wrap",
          }}
        >
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 15px 40px rgba(0,150,255,0.3)",
              }}
              style={{
                flex: "1",
                minWidth: "420px",
                maxWidth: "540px",
                background: "rgba(255,255,255,0.05)",
                borderRadius: "18px",
                padding: "50px 40px",
                textAlign: "left",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.4), inset 0 0 30px rgba(255,255,255,0.05)",
                backdropFilter: "blur(8px)",
                transition: "0.4s ease",
              }}
            >
              {/* Stars */}
              <div style={{ display: "flex", marginBottom: "20px" }}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <FaStar
                    key={i}
                    color="#3cb7ff"
                    style={{ marginRight: "5px" }}
                  />
                ))}
              </div>

              {/* Feedback */}
              <p
                style={{
                  fontSize: "17px",
                  lineHeight: "1.7",
                  color: "rgba(255,255,255,0.9)",
                  fontStyle: "italic",
                  marginBottom: "30px",
                }}
              >
                {t.feedback}
              </p>

              {/* Client Info */}
              <div>
                <h4
                  style={{
                    fontSize: "15px",
                    fontWeight: "600",
                    color: "#fff",
                    marginBottom: "4px",
                  }}
                >
                  {t.name}
                </h4>
                <p
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.6)",
                  }}
                >
                  {t.position}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
