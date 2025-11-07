import React from "react";
import { motion } from "framer-motion";

const data = [
  { title: "Branding", desc: "Identity, naming & visual systems." },
  { title: "Product Design", desc: "UX, UI & prototypes." },
  { title: "Web Development", desc: "Fast accessible websites." },
  { title: "Marketing", desc: "Paid & organic growth." },
  { title: "Apps & Software", desc: "Strategy & audits." },
  { title: "Whatsapp Marketing", desc: "Engage customers effectively." },
  { title: "Social Media Management", desc: "Boost your online presence." },
  { title: "Influencer Marketing", desc: "Leverage influencer power." },
];

export default function ServicesSection() {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="services-title"
        >
          Services
        </motion.h2>

        {/* Services Grid */}
        <div className="services-grid">
          {data.map((s, idx) => (
            <motion.div
              key={idx}
              className="service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 10px 25px rgba(0, 212, 255, 0.15)",
              }}
            >
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* 💅 Embedded Styling */}
      <style>{`
        /* ===== BASE ===== */
        .services-section {
          width: 100%;
          margin-top: -170px;
          background: #121212;
          z-index: 2;
          position: relative;
          color: #fff;
          font-family: 'Poppins', sans-serif;
          overflow: hidden;
        }

        .services-container {
          max-width: 1180px;
          margin: 0 auto;
          padding: clamp(60px, 8vw, 100px) 20px 80px;
          text-align: center;
        }

        .services-title {
          font-size: clamp(2rem, 5vw, 2.8rem);
          margin-bottom: 50px;
          background: linear-gradient(90deg, #3cb7ff, #7dd3fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          font-weight: 700;
        }

        /* ===== GRID ===== */
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 24px;
          justify-content: center;
          align-items: stretch;
        }

        /* ===== CARD ===== */
        .service-card {
          background: linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0.02));
          border-radius: 12px;
          padding: 28px 24px;
          border: 1px solid rgba(255,255,255,0.05);
          text-align: left;
          transition: all 0.4s ease;
        }

        .service-card h3 {
          margin-bottom: 8px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #7dd3fc;
        }

        .service-card p {
          opacity: 0.85;
          font-size: 0.95rem;
          line-height: 1.6;
          color: rgba(255,255,255,0.9);
        }

        /* ===== HOVER ===== */
        .service-card:hover {
          transform: translateY(-4px);
        }

        /* ===== RESPONSIVE ===== */

        /* 📱 Small Phones */
        @media (max-width: 576px) {
          .services-container {
            padding: 50px 16px 60px;
          }
          .services-title {
            margin-bottom: 36px;
            font-size: 1.8rem;
          }
          .services-grid {
            grid-template-columns: 1fr;
            gap: 18px;
          }
          .service-card {
            padding: 20px 18px;
          }
          .service-card h3 {
            font-size: 1.05rem;
          }
          .service-card p {
            font-size: 0.9rem;
          }
        }

        /* 📲 Tablets */
        @media (min-width: 577px) and (max-width: 992px) {
          .services-container {
            padding: 70px 30px 80px;
          }
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 24px;
          }
        }

        /* 💻 Large Screens */
        @media (min-width: 1200px) {
          .service-card h3 {
            font-size: 1.25rem;
          }
          .service-card p {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
}
