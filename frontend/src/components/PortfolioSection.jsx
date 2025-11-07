import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "App Development",
    subtitle: "App",
    img: "/assets/projects/apps.jpg",
  },
  {
    title: "Digital Marketing",
    subtitle: "Marketing",
    img: "/assets/projects/digitalmarketing.png",
  },
  {
    title: "E-commerce Solutions",
    subtitle: "E-Commerce",
    img: "/assets/projects/ecommerce.png",
  },
  {
    title: "Influencer Strategy",
    subtitle: "Social Media",
    img: "/assets/projects/influencer.png",
  },
  {
    title: "WhatsApp Automation",
    subtitle: "Automation",
    img: "/assets/projects/whatsapp.jpg",
  },
  {
    title: "WordPress Development",
    subtitle: "Web",
    img: "/assets/projects/wordpress.jpg",
  },
  {
    title: "Web Design & Development",
    subtitle: "Design",
    img: "/assets/projects/web.jpg",
  },
  {
    title: "SEO Optimization",
    subtitle: "SEO",
    img: "/assets/projects/seo.jpg",
  },
  {
    title: "Meta Ads Management",
    subtitle: "Meta",
    img: "/assets/projects/meta.jpg",
  },
];

export default function PortfolioSection() {
  return (
    <section className="portfolio-section" id="portfolio">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="portfolio-title"
      >
        Our Expertise
      </motion.h2>

      {/* Projects Grid */}
      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="portfolio-card"
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 50px rgba(0, 200, 255, 0.15)",
            }}
          >
            <img src={p.img} alt={p.title} className="project-image" />
            <div className="project-overlay">
              <h4>{p.subtitle}</h4>
              <h3>{p.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fade to Next Section */}
      <div className="fade-bottom"></div>

      {/* 💅 Responsive Styling */}
      <style>{`
        /* ===== PORTFOLIO SECTION BASE ===== */
        .portfolio-section {
          position: relative;
          background: transparent;
          padding: 100px 20px 60px;
          text-align: center;
          color: #fff;
          font-family: 'Poppins', sans-serif;
        }

        .portfolio-title {
          font-size: clamp(1.8rem, 4vw, 2.5rem);
          font-weight: 600;
          color: #fff;
          margin-bottom: 60px;
        }

        /* ===== GRID LAYOUT ===== */
        .portfolio-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 24px;
          max-width: 1180px;
          margin: 0 auto;
        }

        /* ===== PROJECT CARD ===== */
        .portfolio-card {
          position: relative;
          border-radius: 18px;
          overflow: hidden;
          cursor: pointer;
          box-shadow: inset 0 0 30px rgba(0, 150, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          align-items: flex-end;
          justify-content: flex-start;
          min-height: 320px;
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .project-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.4;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .portfolio-card:hover .project-image {
          opacity: 0.6;
        }

        .project-overlay {
          position: relative;
          z-index: 2;
          text-align: left;
          padding: 30px;
          width: 100%;
          border-radius: 18px;
          background: linear-gradient(180deg, transparent 55%, rgba(0, 0, 0, 0.7) 100%);
        }

        .project-overlay h4 {
          color: #7dd3fc;
          font-size: 1rem;
          font-weight: 500;
          margin-bottom: 6px;
        }

        .project-overlay h3 {
          font-size: 1.4rem;
          font-weight: 700;
          color: #fff;
          text-shadow: 0 0 8px rgba(0,200,255,0.3);
          margin: 0;
        }

        /* ===== FADE BOTTOM ===== */
        .fade-bottom {
          width: 100%;
          height: 100px;
          background: linear-gradient(180deg, rgba(0,8,26,0) 0%, #00081a 100%);
          margin-top: 40px;
        }

        /* ===== RESPONSIVE BREAKPOINTS ===== */

        /* 📱 Small phones */
        @media (max-width: 576px) {
          .portfolio-section {
            padding: 70px 14px 40px;
          }
          .portfolio-title {
            margin-bottom: 40px;
            font-size: 1.8rem;
          }
          .portfolio-grid {
            gap: 16px;
          }
          .portfolio-card {
            min-height: 260px;
          }
          .project-overlay {
            padding: 20px;
          }
          .project-overlay h3 {
            font-size: 1.1rem;
          }
        }

        /* 📲 Tablets (Portrait & Landscape) */
        @media (min-width: 577px) and (max-width: 992px) {
          .portfolio-section {
            padding: 90px 30px 50px;
          }
          .portfolio-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .portfolio-card {
            min-height: 300px;
          }
          .project-overlay h3 {
            font-size: 1.3rem;
          }
        }

        /* 💻 Large Screens */
        @media (min-width: 1200px) {
          .portfolio-grid {
            gap: 28px;
          }
          .portfolio-card {
            min-height: 340px;
          }
          .project-overlay h3 {
            font-size: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
