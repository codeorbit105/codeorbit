import React from "react";
import { motion } from "framer-motion";
import { FaCertificate, FaCode, FaServer } from "react-icons/fa";

const steps = [
  {
    icon: <FaCertificate size={22} color="#fff" />,
    title: "Digital Brand Identity",
    desc: "From logo creation to visual identity, our team designs every element of your digital brand to ensure a cohesive and memorable presence online.",
  },
  {
    icon: <FaCode size={22} color="#fff" />,
    title: "Design & Development",
    desc: "Web, App or advertising materials. Our designers and developers take care of every aspect of your brand/company’s digital and physical presence.",
  },
  {
    icon: <FaServer size={22} color="#fff" />,
    title: "Scalable Solutions",
    desc: "Using the latest technologies to offer tailored solutions for small, medium and big businesses simplifying web development and management.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="process-section">
      <motion.div
        className="process-container"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Glow effect background */}
        <div className="process-glow" />

        {/* Section Heading */}
        <div className="process-heading">
          <p className="process-tag">HOW WE DO IT</p>
          <h2 className="process-title">Creative.</h2>
          <p className="process-subtitle">
            We blend strategy, creativity, and technology to drive success for
            our clients.
          </p>
        </div>

        {/* Process Steps */}
        <div className="process-steps">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="process-card"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 40px rgba(220, 227, 227, 0.98)",
              }}
            >
              <div className="process-icon">{step.icon}</div>
              <h4>{step.title}</h4>
              <p>{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Responsive Styling */}
      <style>{`
        /* ===== BASE ===== */
        .process-section {
          padding: 0 20px 120px;
          display: flex;
          justify-content: center;
          align-items: center;
          margin-top: 0;
          color: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .process-container {
          width: 100%;
          max-width: 1250px;
          border-radius: 24px;
          padding: clamp(60px, 6vw, 100px) clamp(20px, 5vw, 70px);
          text-align: center;
          color: #fff;
          position: relative;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.02);
          box-shadow: 0 0 60px rgba(0, 180, 255, 0.05),
                      inset 0 0 80px rgba(0, 0, 0, 0.6);
          backdrop-filter: blur(6px);
        }

        /* ===== Glow ===== */
        .process-glow {
          position: absolute;
          bottom: -150px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 700px;
          background: radial-gradient(circle, rgba(255,255,255,0.25) 0%, transparent 70%);
          filter: blur(100px);
          z-index: 1;
        }

        /* ===== Heading ===== */
        .process-heading {
          position: relative;
          z-index: 2;
          margin-bottom: 60px;
        }

        .process-tag {
          background: #121212;
          display: inline-block;
          color: #7dd3fc;
          font-weight: 600;
          font-size: 14px;
          padding: 8px 22px;
          border-radius: 999px;
          letter-spacing: 1px;
          margin-bottom: 20px;
        }

        .process-title {
          font-size: clamp(2.2rem, 6vw, 3.5rem);
          font-weight: 700;
          margin-bottom: 18px;
          background: linear-gradient(90deg, #3cb7ff, #7dd3fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .process-subtitle {
          font-size: clamp(0.95rem, 2vw, 1.1rem);
          opacity: 0.9;
          max-width: 720px;
          margin: 0 auto;
          color: rgba(255,255,255,0.85);
          line-height: 1.6;
        }

        /* ===== Steps ===== */
        .process-steps {
          position: relative;
          z-index: 3;
          display: flex;
          justify-content: center;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 40px;
        }

        .process-card {
          flex: 1;
          min-width: 280px;
          max-width: 360px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 18px;
          padding: 30px 24px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          transition: 0.4s ease;
          text-align: center;
        }

        .process-icon {
          border-radius: 50%;
          padding: 12px;
          margin-bottom: 18px;
          box-shadow: 0 0 25px rgba(0, 200, 255, 0.4);
          display: flex;
          justify-content: center;
          align-items: center;
          width: 50px;
          height: 50px;
          margin-left: auto;
          margin-right: auto;
        }

        .process-card h4 {
          font-weight: 600;
          font-size: 18px;
          margin-bottom: 10px;
          color: #fff;
        }

        .process-card p {
          font-size: 15px;
          line-height: 1.6;
          color: rgba(255,255,255,0.8);
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */

        /* 📱 Small Phones */
        @media (max-width: 576px) {
          .process-container {
            padding: 50px 20px;
          }
          .process-title {
            font-size: 2rem;
          }
          .process-steps {
            gap: 24px;
          }
          .process-card {
            min-width: 100%;
            padding: 24px 18px;
          }
          .process-subtitle {
            margin-bottom: 40px;
          }
        }

        /* 📲 Tablets */
        @media (min-width: 577px) and (max-width: 992px) {
          .process-container {
            padding: 70px 40px;
          }
          .process-steps {
            gap: 30px;
          }
          .process-card {
            min-width: 45%;
            max-width: 48%;
          }
          .process-subtitle {
            margin-bottom: 60px;
          }
        }

        /* 💻 Large Screens */
        @media (min-width: 1200px) {
          .process-card {
            max-width: 360px;
          }
        }
      `}</style>
    </section>
  );
}
